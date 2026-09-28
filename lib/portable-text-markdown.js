// Converts Sanity Portable Text to markdown (llms-full.txt) and plain text
// (JSON-LD). Kept free of Next and Sanity imports so it can be unit tested.

const MAX_HEADING = 6;

// Structural fields of unknown objects that never hold readable text.
const SKIP_KEYS = new Set([
  'asset',
  'crop',
  'hotspot',
  'reference',
  'design',
  'layout',
  'colour',
  'typeOfMilestone',
  'markDefs',
  'style',
  'listItem',
  'level',
]);

// The API returns object keys alphabetically, so the reading order of the
// about-page sections is spelled out. Fields left out (button labels, images)
// are not rendered.
const FIELD_ORDER = {
  title: ['title', 'subTitle'],
  intro: ['introText'],
  twoColumnSection: [
    'leftColumnTitle',
    'leftColumnContent',
    'rightColumnTitle',
    'rightColumnContent',
  ],
  accordionDropdown: ['title', 'content'],
  urgency: ['title', 'content', 'ctaContent'],
  cta: ['title', 'ctaText'],
  timeline: ['timelineItems'],
  milestone: ['title', 'description'],
  team: ['teamMembers'],
  teamMember: ['name', 'position', 'department'],
  testimonials: ['testimonials'],
  testimonial: ['name', 'role', 'content'],
  mediaItems: ['mediaItems'],
  mediaItem: ['name', 'type', 'link'],
  tiledImages: ['images'],
  partnersSection: ['partnerGroups'],
};

const isTitleKey = (key) => /title$/i.test(key) && !/^sub/i.test(key);

function orderedEntries(object) {
  const order = FIELD_ORDER[object._type];
  if (order) return order.filter((key) => key in object).map((key) => [key, object[key]]);
  const entries = Object.entries(object).filter(
    ([key]) => !key.startsWith('_') && !SKIP_KEYS.has(key),
  );
  return [
    ...entries.filter(([key]) => isTitleKey(key)),
    ...entries.filter(([key]) => !isTitleKey(key)),
  ];
}

const isNonEmptyString = (value) => typeof value === 'string' && value.trim() !== '';

const heading = (level, text) => `${'#'.repeat(Math.min(Math.max(level, 1), MAX_HEADING))} ${text}`;

// Markers must hug the text: '**vet **' is not bold in markdown.
function wrap(text, before, after = before) {
  const match = text.match(/^(\s*)([\s\S]*?)(\s*)$/);
  const [, lead, core, trail] = match;
  return core ? `${lead}${before}${core}${after}${trail}` : text;
}

function annotationUrl(markDef, options) {
  if (markDef._type === 'link') return isNonEmptyString(markDef.href) ? markDef.href : null;
  if (markDef._type === 'internalLink') return options.resolveInternalLink(markDef) ?? null;
  return null;
}

function renderChild(child, markDefs, options) {
  if (child?._type === 'dropDown') {
    const word = child.dropDownWord ?? '';
    return isNonEmptyString(child.dropDownTextText)
      ? `${word} (${child.dropDownTextText.trim()})`
      : word;
  }
  const text = child?.text ?? '';
  if (!text.trim()) return text;

  const marks = child.marks ?? [];
  const decorated = marks.reduce((acc, mark) => {
    if (mark === 'strong') return wrap(acc, '**');
    if (mark === 'em') return wrap(acc, '*');
    return acc;
  }, text);

  return marks.reduce((acc, mark) => {
    const markDef = markDefs.find((def) => def._key === mark);
    const url = markDef ? annotationUrl(markDef, options) : null;
    return url ? wrap(acc, '[', `](${url})`) : acc;
  }, decorated);
}

function inlineText(block, options) {
  const markDefs = block.markDefs ?? [];
  return (block.children ?? [])
    .map((child) => renderChild(child, markDefs, options))
    .join('')
    .trim();
}

function plainInlineText(block) {
  return (block.children ?? [])
    .map((child) =>
      child?._type === 'dropDown' ? (child.dropDownWord ?? '') : (child?.text ?? ''),
    )
    .join('')
    .trim();
}

function renderTextBlock(block, options) {
  const style = block.style ?? 'normal';
  const headingMatch = style.match(/^h([1-6])$/);
  if (headingMatch) {
    const text = plainInlineText(block);
    return text ? heading(options.headingLevel + Number(headingMatch[1]) - 2, text) : '';
  }
  const text = inlineText(block, options);
  if (!text) return '';
  if (style === 'subheading') return `**${plainInlineText(block)}**`;
  if (style === 'blockquote') return `> ${text}`;
  return text;
}

// Numbering restarts when a list goes deeper and comes back, or switches type.
function renderList(items, options) {
  const { lines } = items.reduce(
    ({ lines, stack }, item) => {
      const level = Math.max(item.level ?? 1, 1);
      const previous = stack[level - 1];
      const count = previous?.type === item.listItem ? previous.count + 1 : 1;
      const nextStack = [...stack.slice(0, level - 1), { type: item.listItem, count }];
      const marker = item.listItem === 'number' ? `${count}.` : '-';
      const line = `${'  '.repeat(level - 1)}${marker} ${inlineText(item, options)}`;
      return { lines: [...lines, line], stack: nextStack };
    },
    { lines: [], stack: [] },
  );
  return lines.join('\n');
}

const tableCell = (cell) =>
  String(cell ?? '')
    .replace(/\s*\n\s*/g, ' ')
    .replace(/\|/g, '\\|')
    .trim();

function renderTable(block) {
  const rows = (block.table?.rows ?? []).map((row) => (row.cells ?? []).map(tableCell));
  if (rows.length === 0) return '';
  const width = Math.max(...rows.map((row) => row.length));
  const pad = (row) => [...row, ...Array(width - row.length).fill('')];
  const line = (cells) => `| ${cells.join(' | ')} |`;
  const [head, ...body] = rows.map(pad);
  return [line(head), line(Array(width).fill('---')), ...body.map(line)].join('\n');
}

function renderTitledContent(title, content, options) {
  return [
    isNonEmptyString(title) ? `**${title.trim()}**` : '',
    toChunks(content, options).join('\n\n'),
  ]
    .filter(Boolean)
    .join('\n\n');
}

function renderPdf(block, options) {
  const title = block.pdfTitle?.trim() || 'Document';
  const url = options.fileUrl(block.asset?._ref);
  const label = url ? `[${title}](${url})` : title;
  return isNonEmptyString(block.pdfText)
    ? `PDF: ${label} — ${block.pdfText.trim()}`
    : `PDF: ${label}`;
}

// About-page sections and other objects without a dedicated renderer: keep
// their text, in field order. Objects with only short text fields become one
// line ("An — Jurist"), anything with nested content becomes paragraphs.
function renderUnknownObject(object, options) {
  const parts = orderedEntries(object)
    .map(([key, value]) => {
      if (isNonEmptyString(value)) {
        const text = value.trim();
        return { inline: true, text: isTitleKey(key) ? `**${text}**` : text };
      }
      if (Array.isArray(value) && value.every((item) => typeof item === 'string')) {
        const text = value.filter(isNonEmptyString).join(', ');
        return text ? { inline: true, text } : null;
      }
      if (Array.isArray(value)) {
        const text = toChunks(value, options).join('\n\n');
        return text ? { inline: false, text } : null;
      }
      if (value && typeof value === 'object') {
        const text = renderUnknownObject(value, options);
        return text ? { inline: false, text } : null;
      }
      return null;
    })
    .filter(Boolean);

  const separator = parts.every((part) => part.inline) ? ' — ' : '\n\n';
  return parts.map((part) => part.text).join(separator);
}

function renderObject(block, options) {
  switch (block._type) {
    case 'highlightBlock':
    case 'dropDownHighlight':
    case 'accordionDropdownContent':
      return renderTitledContent(block.title, block.content, options);
    case 'tableBlock':
      return [
        isNonEmptyString(block.title) ? `**${block.title.trim()}**` : '',
        renderTable(block),
        block.note?.trim() ?? '',
      ]
        .filter(Boolean)
        .join('\n\n');
    case 'pdfBlock':
      return renderPdf(block, options);
    case 'youtube':
      return isNonEmptyString(block.url) ? `Video: ${block.url.trim()}` : '';
    case 'imageBlock': {
      const label = block.imageTitle || block.imageFile?.altText;
      return isNonEmptyString(label) ? `Afbeelding: ${label.trim()}` : '';
    }
    default:
      return renderUnknownObject(block, options);
  }
}

function toChunks(value, options) {
  if (!Array.isArray(value)) return [];
  const chunks = [];
  let list = [];
  const flushList = () => {
    if (list.length) chunks.push(renderList(list, options));
    list = [];
  };

  for (const item of value) {
    if (!item || typeof item !== 'object') continue;
    if (item._type === 'block' && item.listItem) {
      list = [...list, item];
      continue;
    }
    flushList();
    const chunk =
      item._type === 'block' ? renderTextBlock(item, options) : renderObject(item, options);
    if (chunk) chunks.push(chunk);
  }
  flushList();
  return chunks;
}

export function portableTextToMarkdown(value, options = {}) {
  const resolved = {
    headingLevel: options.headingLevel ?? 2,
    resolveInternalLink: options.resolveInternalLink ?? (() => null),
    fileUrl: options.fileUrl ?? (() => null),
  };
  return toChunks(value, resolved).join('\n\n').trim();
}

function plainChunks(value) {
  if (!Array.isArray(value)) return [];
  return value.flatMap((item) => {
    if (!item || typeof item !== 'object') return [];
    if (item._type === 'block') {
      const text = plainInlineText(item);
      return text ? [text] : [];
    }
    const title = [item.title, item.pdfTitle].find(isNonEmptyString);
    const nested = plainChunks(item.content);
    return [...(title ? [title.trim()] : []), ...nested];
  });
}

export function portableTextToPlainText(value) {
  return plainChunks(value).join('\n\n');
}

// 'file-<hash>-<ext>' is how Sanity references an uploaded file.
export function sanityFileUrl(ref, { projectId, dataset }) {
  const match = typeof ref === 'string' ? ref.match(/^file-([a-zA-Z0-9]+)-([a-z0-9]+)$/) : null;
  return match
    ? `https://cdn.sanity.io/files/${projectId}/${dataset}/${match[1]}.${match[2]}`
    : null;
}

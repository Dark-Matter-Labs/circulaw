// Builds /llms-full.txt: the full text of the site's Sanity content as one
// markdown file. Kept free of Next and Sanity imports so it can be unit tested.
import { lawArticleName } from './law-reference.js';
import { LANGUAGE_NOTE, SITE_SUMMARY, linkItem, markdownLink, oneLine } from './llms-txt.js';
import { portableTextToMarkdown } from './portable-text-markdown.js';
import {
  EU_LAW_TABS,
  aboutPath,
  absoluteUrl,
  euLawPath,
  euLawTabPath,
  instrumentPath,
  newsPath,
} from './site-paths.js';

const MODEL_TEXTS_PATH = '/bouw/planregels/modelteksten';

const INSTRUMENT_LEGEND = [
  'Elk instrument heeft deze kenmerken:',
  '',
  '- Juridische houdbaarheid: hoe groot de kans is dat het instrument standhoudt bij de rechter (beperkt, gemiddeld of hoog).',
  '- Invloed: de invloed van het instrument in de praktijk, onder meer afdwingbaarheid, directheid, doorwerking in de tijd en het aantal mensen waarop het betrekking heeft (beperkt, gemiddeld of hoog).',
  '- Overheidslaag: welke overheden het instrument kunnen inzetten.',
  '- R-ladder: de circulaire strategieën waaraan het instrument bijdraagt, van R1 (refuse en rethink) via R2 (reduce), R3 (reuse), R4 (repair, refurbish, remanufacture, repurpose) en R5 (recycling) tot R6 (recover). R1 bespaart de meeste grondstoffen.',
  '- Rechtsgebied en categorie (beleid, inkoop, grondpositie, subsidie, fiscaal).',
  '- Wetsartikel: het artikel waarop het instrument steunt.',
].join('\n');

const CATEGORY_LABELS = [
  ['beleid', 'Beleid'],
  ['inkoop', 'Inkoop'],
  ['grondpositie', 'Grondpositie'],
  ['subsidie', 'Subsidie'],
  ['fiscaal', 'Fiscaal'],
];

const EU_STATUS_LABELS = [
  ['In negotiations', 'In onderhandeling'],
  ['Adopted', 'Aangenomen'],
  ['Transposed', 'Omgezet in nationale wetgeving'],
];

const EU_LINK_COLUMNS = [
  ['linkCol1', 'Bekijk ook op CircuLaw'],
  ['linkCol2', 'Relevante Nederlandse wetgeving'],
  ['linkCol3', 'Relevante Europese wetgeving'],
];

// 'Adopted B' -> 'Aangenomen'. The A/B suffix only positions the marker
// within a phase of the status graphic.
export function euLawStatusLabel(status) {
  if (typeof status !== 'string') return null;
  return EU_STATUS_LABELS.find(([prefix]) => status.startsWith(prefix))?.[1] ?? null;
}

const capitalise = (text) =>
  typeof text === 'string' && text ? text[0].toUpperCase() + text.slice(1) : text;

const attribute = (label, value) => {
  const text = Array.isArray(value) ? value.filter(Boolean).join(', ') : value;
  return text ? [`- ${label}: ${text}`] : [];
};

const paragraphs = (...chunks) => chunks.filter((chunk) => chunk && chunk.trim()).join('\n\n');

const heading = (level, text) => `${'#'.repeat(Math.min(level, 6))} ${oneLine(text, 300)}`;

function instrumentUrlMap(productChains, siteUrl) {
  return new Map(
    productChains.flatMap((pc) =>
      (pc.themas ?? []).flatMap((thema) =>
        (thema.instruments ?? []).flatMap((instrument) => {
          const url = absoluteUrl(
            siteUrl,
            instrumentPath(instrument.productChain ?? pc.slug, thema.slug, instrument.slug),
          );
          return url && instrument._id ? [[instrument._id, url]] : [];
        }),
      ),
    ),
  );
}

function lawReference(instrument) {
  const name = lawArticleName(instrument);
  if (!name) return null;
  return /^https?:\/\//.test(instrument.artikelLink ?? '')
    ? markdownLink(name, instrument.artikelLink)
    : name;
}

function renderInstrument(instrument, { pc, thema, siteUrl, markdown }) {
  const url = absoluteUrl(
    siteUrl,
    instrumentPath(instrument.productChain ?? pc.slug, thema.slug, instrument.slug),
  );
  if (!url) return '';
  const rechtsgebied = [
    instrument.rechtsgebied,
    instrument.subrechtsgebied ? `(${instrument.subrechtsgebied})` : null,
  ]
    .filter(Boolean)
    .join(' ');
  const categories = CATEGORY_LABELS.filter(([key]) => instrument.categories?.[key]).map(
    ([, label]) => label,
  );
  const attributes = [
    `- URL: ${url}`,
    `- Productketen: ${pc.name} · Thema: ${thema.name}`,
    ...attribute('Juridische houdbaarheid', instrument.juridischeHaalbaarheid),
    ...attribute('Invloed', instrument.juridischInvloed),
    ...attribute('Overheidslaag', instrument.overheidslaag),
    ...attribute('R-ladder', instrument.rLadder),
    ...attribute('Rechtsgebied', rechtsgebied),
    ...attribute('Categorie', categories),
    ...attribute('Wetsartikel', lawReference(instrument)),
    ...attribute('Ingangsdatum wet', instrument.lawDate),
  ].join('\n');

  return paragraphs(
    heading(4, instrument.title),
    attributes,
    instrument.subtitel?.trim(),
    markdown(instrument.content, 5),
  );
}

function renderInstruments(productChains, context) {
  const themaBlocks = productChains.flatMap((pc) =>
    (pc.themas ?? [])
      .filter((thema) => (thema.instruments ?? []).length > 0)
      .map((thema) =>
        paragraphs(
          heading(3, `${pc.name} › ${thema.name}`),
          oneLine(thema.description, 1000),
          ...thema.instruments.map((instrument) =>
            renderInstrument(instrument, { ...context, pc, thema }),
          ),
        ),
      ),
  );
  return themaBlocks.length ? paragraphs('## Instrumenten', INSTRUMENT_LEGEND, ...themaBlocks) : '';
}

function renderEuLinks(law) {
  return EU_LINK_COLUMNS.flatMap(([field, label]) => {
    const links = (law[field] ?? []).filter((link) => link?.link && link?.linkText);
    return links.length
      ? [
          paragraphs(
            `**${label}**`,
            links.map((link) => linkItem(link.linkText, link.link)).join('\n'),
          ),
        ]
      : [];
  });
}

// euEuropeTab and euLocalTab hold titled sections, euCircularEconomyTab holds
// Portable Text directly.
function renderEuTab(tabDefinition, tabDoc, { lawSlug, siteUrl, markdown }) {
  const value = tabDoc?.[tabDefinition.field];
  if (!Array.isArray(value) || value.length === 0) return '';
  const url = absoluteUrl(siteUrl, euLawTabPath(lawSlug, tabDefinition.slug));
  const body = tabDefinition.sections
    ? value.map((item) =>
        paragraphs(item?.title ? heading(5, item.title) : '', markdown(item?.content, 6)),
      )
    : [markdown(value, 5)];
  return paragraphs(heading(4, tabDefinition.title), url ? `URL: ${url}` : '', ...body);
}

function renderEuLaw(law, context) {
  const url = absoluteUrl(context.siteUrl, euLawPath(law.slug));
  if (!url) return '';
  const status = euLawStatusLabel(
    law.statusStep === 'Three Step' ? law.statusThreeStep : law.statusTwoStep,
  );
  const attributes = [`- URL: ${url}`, ...attribute('Status', status)].join('\n');
  const tabs = EU_LAW_TABS.map((tab) =>
    renderEuTab(
      tab,
      (law.tabs ?? []).find((doc) => doc?._type === tab.type),
      { ...context, lawSlug: law.slug },
    ),
  );

  return paragraphs(
    heading(3, law.title),
    attributes,
    law.introText?.trim(),
    heading(4, 'Overzicht'),
    law.summaryIntroText?.trim(),
    context.markdown(law.summaryContent, 5),
    law.statusContent?.length
      ? paragraphs('**Status**', context.markdown(law.statusContent, 5))
      : '',
    ...renderEuLinks(law),
    ...tabs,
  );
}

function renderAboutPage(page, { siteUrl, markdown }) {
  const url = absoluteUrl(siteUrl, aboutPath(page.slug));
  if (!url) return '';
  return paragraphs(heading(3, page.title), `URL: ${url}`, markdown(page.content, 4));
}

function renderFaq(faq, { siteUrl, markdown }) {
  const items = (faq?.content ?? []).filter(
    (item) => item?._type === 'faqSection' || item?._type === 'faqItem',
  );
  if (!items.some((item) => item._type === 'faqItem')) return '';
  const questionLevel = items.some((item) => item._type === 'faqSection') ? 4 : 3;
  const body = items.map((item) =>
    item._type === 'faqSection'
      ? heading(3, item.sectionTitle)
      : paragraphs(
          heading(questionLevel, item.question),
          markdown(item.response, questionLevel + 1),
        ),
  );
  return paragraphs(
    '## Vraag en antwoord',
    `URL: ${absoluteUrl(siteUrl, '/vraag-en-antwoord')}`,
    ...body,
  );
}

function renderModelText(modelText, { siteUrl, markdown }) {
  const instrumentLinks = new Map(
    (modelText.linkedInstruments ?? []).flatMap((instrument) => {
      const url = absoluteUrl(
        siteUrl,
        instrumentPath(instrument?.productChain, instrument?.thema, instrument?.slug),
      );
      return url ? [[url, markdownLink(instrument.titel, url)]] : [];
    }),
  );
  const instruments = [...instrumentLinks.values()];
  const attributes = [
    ...attribute('Schaalniveau', modelText.scale),
    ...attribute('Type regel', modelText.type),
    ...attribute('Juridische houdbaarheid', capitalise(modelText.impactLevel)),
    ...attribute('Gekoppelde instrumenten', instruments),
  ].join('\n');
  const modelTextBody = markdown(modelText.modelText, 5);
  const descriptionBody = markdown(modelText.description, 5);

  return paragraphs(
    heading(4, modelText.title || 'Modeltekst'),
    attributes,
    modelTextBody ? paragraphs('**Modeltekst**', modelTextBody) : '',
    descriptionBody ? paragraphs('**Toelichting**', descriptionBody) : '',
  );
}

function renderModelTexts(pillars, modelTexts, context) {
  if (modelTexts.length === 0) return '';
  const knownPillars = new Set(pillars.map((pillar) => pillar.slug));
  const groups = [
    ...pillars.map((pillar) => ({
      title: `Pijler: ${pillar.title}`,
      description: pillar.description,
      items: modelTexts.filter((modelText) => modelText.pillar === pillar.slug),
    })),
    {
      title: 'Overige modelteksten',
      items: modelTexts.filter((modelText) => !knownPillars.has(modelText.pillar)),
    },
  ].filter((group) => group.items.length > 0);

  return paragraphs(
    '## Modelteksten voor het omgevingsplan',
    `URL: ${absoluteUrl(context.siteUrl, MODEL_TEXTS_PATH)}`,
    ...groups.map((group) =>
      paragraphs(
        heading(3, group.title),
        group.description?.trim(),
        ...group.items.map((modelText) => renderModelText(modelText, context)),
      ),
    ),
  );
}

function renderNewsItem(item, { siteUrl, markdown }) {
  const url = absoluteUrl(siteUrl, newsPath(item.slug));
  if (!url) return '';
  const attributes = [
    `- URL: ${url}`,
    ...attribute('Datum', item.date),
    ...attribute('Categorie', item.category),
  ].join('\n');
  return paragraphs(
    heading(3, item.title),
    attributes,
    item.newsText?.trim(),
    markdown(item.content, 4),
  );
}

const listSection = (title, items, render, context) => {
  const blocks = items.map((item) => render(item, context)).filter(Boolean);
  return blocks.length ? paragraphs(`## ${title}`, ...blocks) : '';
};

// data: the result of LLMS_FULL_QUERY. fileUrl turns a Sanity file reference
// into a download URL.
export function buildLlmsFullTxt(data, { siteUrl, fileUrl }) {
  const productChains = data?.productChains ?? [];
  const instrumentUrls = instrumentUrlMap(productChains, siteUrl);
  const markdown = (value, headingLevel) =>
    portableTextToMarkdown(value, {
      headingLevel,
      fileUrl,
      resolveInternalLink: (markDef) => instrumentUrls.get(markDef?.reference?._ref) ?? null,
    });
  const context = { siteUrl, markdown };

  const document = paragraphs(
    '# CircuLaw: volledige inhoud',
    `> ${SITE_SUMMARY}`,
    LANGUAGE_NOTE,
    `Dit bestand bevat de volledige tekst van ${siteUrl}, gegenereerd uit het CMS. Een beknopte index staat in ${absoluteUrl(siteUrl, '/llms.txt')}.`,
    renderInstruments(productChains, context),
    listSection('Europese wetgeving', data?.euLaws ?? [], renderEuLaw, context),
    listSection('Over CircuLaw', data?.aboutPages ?? [], renderAboutPage, context),
    renderFaq(data?.faq, context),
    renderModelTexts(data?.pillars ?? [], data?.modelTexts ?? [], context),
    listSection('Nieuws', data?.news ?? [], renderNewsItem, context),
  );

  return `${document.replace(/\n{3,}/g, '\n\n').trim()}\n`;
}

import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import {
  portableTextToMarkdown,
  portableTextToPlainText,
  sanityFileUrl,
} from './portable-text-markdown.js';

const span = (text, marks = []) => ({ _type: 'span', text, marks });
const block = (children, extra = {}) => ({
  _type: 'block',
  style: 'normal',
  markDefs: [],
  children: typeof children === 'string' ? [span(children)] : children,
  ...extra,
});

describe('portableTextToMarkdown', () => {
  it('returns an empty string for missing or empty content', () => {
    assert.equal(portableTextToMarkdown(undefined), '');
    assert.equal(portableTextToMarkdown(null), '');
    assert.equal(portableTextToMarkdown([]), '');
  });

  it('separates paragraphs with a blank line and drops empty ones', () => {
    const md = portableTextToMarkdown([block('Eerste.'), block(''), block('Tweede.')]);
    assert.equal(md, 'Eerste.\n\nTweede.');
  });

  it('maps h2 and h3 to the requested heading level', () => {
    const value = [block('Kop', { style: 'h2' }), block('Subkop', { style: 'h3' })];
    assert.equal(portableTextToMarkdown(value), '## Kop\n\n### Subkop');
    assert.equal(portableTextToMarkdown(value, { headingLevel: 4 }), '#### Kop\n\n##### Subkop');
  });

  it('never emits more than six heading markers', () => {
    const md = portableTextToMarkdown([block('Diep', { style: 'h3' })], { headingLevel: 6 });
    assert.equal(md, '###### Diep');
  });

  it('renders the about-page subheading style as bold and blockquotes with >', () => {
    const md = portableTextToMarkdown([
      block('Tussenkop', { style: 'subheading' }),
      block('Citaat', { style: 'blockquote' }),
    ]);
    assert.equal(md, '**Tussenkop**\n\n> Citaat');
  });

  it('renders strong and em, keeping surrounding spaces outside the markers', () => {
    const md = portableTextToMarkdown([
      block([span('Een '), span('vet ', ['strong']), span('en '), span('schuin', ['em'])]),
    ]);
    assert.equal(md, 'Een **vet** en *schuin*');
  });

  it('renders external links from markDefs', () => {
    const md = portableTextToMarkdown([
      block([span('Zie '), span('het arrest', ['k1']), span('.')], {
        markDefs: [{ _key: 'k1', _type: 'link', href: 'https://example.nl/didam' }],
      }),
    ]);
    assert.equal(md, 'Zie [het arrest](https://example.nl/didam).');
  });

  it('resolves internal links through the resolver and falls back to plain text', () => {
    const value = [
      block([span('Instrument', ['k1'])], {
        markDefs: [{ _key: 'k1', _type: 'internalLink', reference: { _ref: 'abc' } }],
      }),
    ];
    const resolveInternalLink = (def) =>
      def.reference._ref === 'abc' ? 'https://www.circulaw.nl/bouw/houtbouw/instrumenten/x' : null;
    assert.equal(
      portableTextToMarkdown(value, { resolveInternalLink }),
      '[Instrument](https://www.circulaw.nl/bouw/houtbouw/instrumenten/x)',
    );
    assert.equal(portableTextToMarkdown(value), 'Instrument');
  });

  it('groups consecutive list items into one list with nesting and numbering', () => {
    const md = portableTextToMarkdown([
      block('Intro'),
      block('Een', { listItem: 'bullet', level: 1 }),
      block('Genest', { listItem: 'bullet', level: 2 }),
      block('Twee', { listItem: 'bullet', level: 1 }),
      block('Stap', { listItem: 'number', level: 1 }),
      block('Stap', { listItem: 'number', level: 1 }),
      block('Slot'),
    ]);
    assert.equal(md, 'Intro\n\n- Een\n  - Genest\n- Twee\n1. Stap\n2. Stap\n\nSlot');
  });

  it('renders inline drop-down explanations after the word', () => {
    const md = portableTextToMarkdown([
      block([
        span('De '),
        {
          _type: 'dropDown',
          dropDownWord: 'Bkl',
          dropDownTextText: 'Besluit kwaliteit leefomgeving',
        },
        span(' geldt.'),
      ]),
    ]);
    assert.equal(md, 'De Bkl (Besluit kwaliteit leefomgeving) geldt.');
  });

  it('renders highlight and drop-down highlight blocks as a bold title with their content', () => {
    const md = portableTextToMarkdown([
      {
        _type: 'highlightBlock',
        title: 'Voorwaarden',
        content: [block('A', { listItem: 'bullet', level: 1 })],
      },
      { _type: 'dropDownHighlight', title: 'Wat is gronduitgifte', content: [block('Uitleg.')] },
    ]);
    assert.equal(md, '**Voorwaarden**\n\n- A\n\n**Wat is gronduitgifte**\n\nUitleg.');
  });

  it('renders a table block as a markdown table with the first row as header', () => {
    const md = portableTextToMarkdown([
      {
        _type: 'tableBlock',
        title: 'Overzicht',
        table: {
          rows: [{ cells: ['Gebied', 'Relatie'] }, { cells: ['Bouw | renovatie', 'Kans\nnu'] }],
        },
        note: 'Bron: EU.',
      },
    ]);
    assert.equal(
      md,
      '**Overzicht**\n\n| Gebied | Relatie |\n| --- | --- |\n| Bouw \\| renovatie | Kans nu |\n\nBron: EU.',
    );
  });

  it('renders a PDF block as a link when the file URL resolves', () => {
    const pdf = {
      _type: 'pdfBlock',
      asset: { _ref: 'file-abc123-pdf' },
      pdfTitle: 'Leidraad',
      pdfText: 'Waar moet je aan denken?',
    };
    const fileUrl = (ref) => `https://cdn.example/${ref}`;
    assert.equal(
      portableTextToMarkdown([pdf], { fileUrl }),
      'PDF: [Leidraad](https://cdn.example/file-abc123-pdf) — Waar moet je aan denken?',
    );
    assert.equal(portableTextToMarkdown([pdf]), 'PDF: Leidraad — Waar moet je aan denken?');
  });

  it('renders YouTube embeds as links and images by their title', () => {
    const md = portableTextToMarkdown([
      { _type: 'youtube', url: 'https://youtu.be/x' },
      { _type: 'imageBlock', imageTitle: 'Tijdlijn', imageFile: { asset: { _ref: 'image-1' } } },
      { _type: 'imageBlock', imageFile: { asset: { _ref: 'image-2' } } },
    ]);
    assert.equal(md, 'Video: https://youtu.be/x\n\nAfbeelding: Tijdlijn');
  });

  it('keeps the reading order of about-page sections although the API sorts keys', () => {
    const md = portableTextToMarkdown([
      { _type: 'title', subTitle: 'Het team', title: 'Wie zijn wij' },
      {
        _type: 'twoColumnSection',
        leftColumnContent: [block('Tekst links')],
        leftColumnTitle: 'Links',
        rightColumnContent: [block('Tekst rechts')],
        rightColumnTitle: 'Rechts',
      },
      {
        _type: 'milestone',
        description: [block('Alpha launch')],
        title: 'September 2022',
        year: 2022,
      },
      {
        _type: 'cta',
        ctaText: 'Deel je ervaring.',
        linkText: 'Meld je aan!',
        title: 'Help anderen',
      },
      {
        _type: 'partnersSection',
        partnerGroups: [{ title: 'Kennispartners', names: ['TU Delft', 'Pels Rijcken'] }],
        reference: { _ref: 'partners' },
      },
    ]);
    assert.equal(
      md,
      [
        '**Wie zijn wij** — Het team',
        '**Links**',
        'Tekst links',
        '**Rechts**',
        'Tekst rechts',
        '**September 2022**',
        'Alpha launch',
        '**Help anderen** — Deel je ervaring.',
        '**Kennispartners** — TU Delft, Pels Rijcken',
      ].join('\n\n'),
    );
  });

  it('puts title fields first for objects without a known field order', () => {
    const md = portableTextToMarkdown([{ _type: 'somethingNew', body: 'Tekst', title: 'Kop' }]);
    assert.equal(md, '**Kop** — Tekst');
  });

  it('falls back to the text fields of unknown objects', () => {
    const md = portableTextToMarkdown([
      { _type: 'title', title: 'Wie zijn wij', subTitle: 'Het team' },
      {
        _type: 'twoColumnSection',
        leftColumnTitle: 'Links',
        leftColumnContent: [block('Tekst links')],
        rightColumnTitle: 'Rechts',
        rightColumnContent: [block('Tekst rechts')],
      },
      {
        _type: 'team',
        teamMembers: [
          { _type: 'teamMember', name: 'An', position: 'Jurist', image: { asset: {} } },
        ],
      },
    ]);
    assert.equal(
      md,
      '**Wie zijn wij** — Het team\n\n**Links**\n\nTekst links\n\n**Rechts**\n\nTekst rechts\n\nAn — Jurist',
    );
  });
});

describe('portableTextToPlainText', () => {
  it('joins the text of blocks and nested content without markup', () => {
    const text = portableTextToPlainText([
      block([span('Ja, '), span('dat kan', ['strong']), span('.')]),
      block('Een', { listItem: 'bullet', level: 1 }),
      { _type: 'highlightBlock', title: 'Let op', content: [block('Voorwaarde.')] },
      { _type: 'imageBlock', imageFile: {} },
    ]);
    assert.equal(text, 'Ja, dat kan.\n\nEen\n\nLet op\n\nVoorwaarde.');
  });

  it('returns an empty string for missing content', () => {
    assert.equal(portableTextToPlainText(undefined), '');
  });
});

describe('sanityFileUrl', () => {
  it('builds the CDN URL of a file asset reference', () => {
    assert.equal(
      sanityFileUrl('file-8715dc08-pdf', { projectId: 'p1', dataset: 'production' }),
      'https://cdn.sanity.io/files/p1/production/8715dc08.pdf',
    );
  });

  it('returns null for anything that is not a file reference', () => {
    assert.equal(sanityFileUrl(undefined, { projectId: 'p1', dataset: 'd' }), null);
    assert.equal(sanityFileUrl('image-abc-10x10-png', { projectId: 'p1', dataset: 'd' }), null);
  });
});

import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { buildLlmsFullTxt, euLawStatusLabel } from './llms-full-txt.js';

const SITE = 'https://www.circulaw.nl';

const span = (text, marks = []) => ({ _type: 'span', text, marks });
const block = (text, extra = {}) => ({
  _type: 'block',
  style: 'normal',
  markDefs: [],
  children: [span(text)],
  ...extra,
});

const instrument = {
  _id: 'instr-1',
  title: 'Houtbouw voorschrijven',
  slug: 'houtbouw-voorschrijven',
  productChain: 'bouw',
  subtitel: 'Een gemeente kan houtbouw voorschrijven.',
  juridischeHaalbaarheid: 'Hoog',
  juridischInvloed: 'Gemiddeld',
  overheidslaag: ['Gemeentelijk', 'Provinciaal'],
  rLadder: ['R1', 'R2'],
  rechtsgebied: 'Publiekrecht',
  subrechtsgebied: 'Omgevingsrecht',
  citeertitel: 'Omgevingswet',
  artikel: '5.21',
  artikelLink: 'https://wetten.overheid.nl/x',
  lawDate: '2024-01-01',
  categories: { beleid: true, inkoop: false, grondpositie: true, subsidie: false, fiscaal: false },
  content: [
    block('Toelichting', { style: 'h2' }),
    {
      _type: 'block',
      style: 'normal',
      children: [span('Zie ook '), span('het andere instrument', ['k1'])],
      markDefs: [{ _key: 'k1', _type: 'internalLink', reference: { _ref: 'instr-2' } }],
    },
  ],
};

const data = {
  productChains: [
    {
      name: 'Bouw',
      slug: 'bouw',
      description: 'Bouw van woningen',
      themas: [
        {
          name: 'Houtbouw',
          slug: 'houtbouw',
          description: 'Vervang beton door hout.',
          instruments: [
            instrument,
            {
              _id: 'instr-2',
              title: 'Ander instrument',
              slug: 'ander',
              productChain: 'bouw',
              content: [],
            },
          ],
        },
      ],
    },
  ],
  euLaws: [
    {
      title: 'EU Taxonomie',
      slug: 'eu-taxonomie',
      introText: 'Onderdeel van de Green Deal.',
      summaryIntroText: 'Samenvatting.',
      statusStep: 'Two Step',
      statusTwoStep: 'Adopted B',
      summaryContent: [block('Extra overzicht.')],
      linkCol2: [
        { linkText: 'Besluit verpakkingen', link: 'https://wetten.overheid.nl/BWBR0035711' },
      ],
      tabs: [
        {
          _type: 'euEuropeTab',
          europeContent: [{ title: 'Kern', content: [block('Lidstaten moeten.')] }],
        },
        {
          _type: 'euLocalTab',
          localContent: [{ title: 'Gemeenten', content: [block('Gemeenten kunnen.')] }],
        },
        { _type: 'euCircularEconomyTab', ceContent: [block('Circulair.')] },
      ],
    },
  ],
  aboutPages: [
    {
      title: 'Wat is CircuLaw?',
      slug: 'wat-is-circulaw',
      content: [{ _type: 'title', title: 'Missie' }],
    },
  ],
  faq: {
    content: [
      { _type: 'faqItem', question: 'Is CircuLaw gratis?', response: [block('Ja.')] },
      {
        _type: 'faqItem',
        question: 'Waarom CircuLaw?',
        response: [block('Urgentie', { style: 'h2' }), block('Omdat het moet.')],
      },
    ],
  },
  pillars: [{ title: 'Circulair', slug: 'circulair', description: 'Pijler over circulariteit.' }],
  modelTexts: [
    {
      title: 'Losmaakbaar bouwen',
      slug: 'losmaakbaar-bouwen',
      pillar: 'circulair',
      scale: 'Gebouw',
      type: 'Open norm',
      impactLevel: 'hoog',
      modelText: [block('Een bouwwerk is losmaakbaar.')],
      description: [block('Dit stimuleert hergebruik.')],
      linkedInstruments: [
        {
          titel: 'Houtbouw voorschrijven',
          slug: 'houtbouw-voorschrijven',
          productChain: 'bouw',
          thema: 'houtbouw',
        },
        {
          titel: 'Houtbouw voorschrijven',
          slug: 'houtbouw-voorschrijven',
          productChain: 'bouw',
          thema: 'houtbouw',
        },
      ],
    },
    { title: 'Zonder pijler', modelText: [block('Tekst.')] },
  ],
  news: [
    {
      title: 'Nieuwe handreiking',
      slug: 'nieuwe-handreiking',
      date: '2026-09-24',
      category: 'Circulair nieuws',
      newsText: 'Samenvatting van het nieuws.',
      content: [block('Het hele artikel.')],
    },
  ],
};

const txt = buildLlmsFullTxt(data, { siteUrl: SITE, fileUrl: () => null });
const sections = txt.split('\n').filter((line) => line.startsWith('## '));

describe('buildLlmsFullTxt', () => {
  it('starts with a title, summary and a pointer to the index', () => {
    assert.ok(txt.startsWith('# CircuLaw'));
    assert.match(txt, /\n> .*decentrale overheden/);
    assert.ok(txt.includes(`${SITE}/llms.txt`));
  });

  it('has a section per content type in a fixed order', () => {
    assert.deepEqual(sections, [
      '## Instrumenten',
      '## Europese wetgeving',
      '## Over CircuLaw',
      '## Vraag en antwoord',
      '## Modelteksten voor het omgevingsplan',
      '## Nieuws',
    ]);
  });

  it('explains the instrument attributes once', () => {
    assert.match(txt, /Juridische houdbaarheid/);
    assert.match(txt, /R-ladder/);
  });

  it('writes every instrument with its URL, attributes and full body', () => {
    const url = `${SITE}/bouw/houtbouw/instrumenten/houtbouw-voorschrijven`;
    assert.ok(txt.includes('### Bouw › Houtbouw'));
    assert.ok(txt.includes('#### Houtbouw voorschrijven'));
    assert.ok(txt.includes(`- URL: ${url}`));
    assert.ok(txt.includes('- Juridische houdbaarheid: Hoog'));
    assert.ok(txt.includes('- Invloed: Gemiddeld'));
    assert.ok(txt.includes('- Overheidslaag: Gemeentelijk, Provinciaal'));
    assert.ok(txt.includes('- R-ladder: R1, R2'));
    assert.ok(txt.includes('- Rechtsgebied: Publiekrecht (Omgevingsrecht)'));
    assert.ok(txt.includes('- Categorie: Beleid, Grondpositie'));
    assert.ok(
      txt.includes('- Wetsartikel: [Omgevingswet, artikel 5.21](https://wetten.overheid.nl/x)'),
    );
    assert.ok(txt.includes('- Ingangsdatum wet: 2024-01-01'));
    assert.ok(txt.includes('Een gemeente kan houtbouw voorschrijven.'));
    assert.ok(txt.includes('##### Toelichting'), 'body headings sit below the instrument heading');
  });

  it('turns internal links into absolute instrument URLs', () => {
    assert.ok(txt.includes(`[het andere instrument](${SITE}/bouw/houtbouw/instrumenten/ander)`));
  });

  it('writes every EU law with the overview and all three tabs', () => {
    assert.ok(txt.includes('### EU Taxonomie'));
    assert.ok(txt.includes(`- URL: ${SITE}/eu-wetgeving/eu-taxonomie`));
    assert.ok(txt.includes('- Status: Aangenomen'));
    assert.ok(txt.includes('#### Overzicht'));
    assert.ok(txt.includes('Samenvatting.'));
    assert.ok(txt.includes('Extra overzicht.'));
    assert.ok(txt.includes('- [Besluit verpakkingen](https://wetten.overheid.nl/BWBR0035711)'));
    assert.ok(txt.includes('#### Verplichtingen voor Europese lidstaten'));
    assert.ok(
      txt.includes(`${SITE}/eu-wetgeving/eu-taxonomie/verplichtingen-voor-europese-lidstaten`),
    );
    assert.ok(txt.includes('##### Kern'));
    assert.ok(txt.includes('Lidstaten moeten.'));
    assert.ok(txt.includes('#### Relevantie voor regionale en lokale overheden'));
    assert.ok(txt.includes('Gemeenten kunnen.'));
    assert.ok(txt.includes('#### Relevantie voor de circulaire economie'));
    assert.ok(txt.includes('Circulair.'));
  });

  it('writes about pages, FAQ answers, model texts by pillar and news pages', () => {
    assert.ok(txt.includes('### Wat is CircuLaw?'));
    assert.ok(txt.includes('**Missie**'));
    assert.ok(txt.includes('### Is CircuLaw gratis?\n\nJa.'));
    assert.ok(
      txt.includes('### Waarom CircuLaw?\n\n#### Urgentie'),
      'answer headings nest under the question',
    );
    assert.ok(
      txt.includes(
        `- Gekoppelde instrumenten: [Houtbouw voorschrijven](${SITE}/bouw/houtbouw/instrumenten/houtbouw-voorschrijven)\n`,
      ),
      'linked instruments are listed once',
    );
    assert.ok(txt.includes(`${SITE}/bouw/planregels/modelteksten`));
    assert.ok(txt.includes('### Pijler: Circulair'));
    assert.ok(txt.includes('#### Losmaakbaar bouwen'));
    assert.ok(txt.includes(`- URL: ${SITE}/bouw/planregels/modelteksten/losmaakbaar-bouwen\n`));
    assert.ok(txt.includes('- Juridische houdbaarheid: Hoog'));
    assert.ok(txt.includes('Een bouwwerk is losmaakbaar.'));
    assert.ok(txt.includes('Dit stimuleert hergebruik.'));
    assert.ok(
      txt.includes(
        `[Houtbouw voorschrijven](${SITE}/bouw/houtbouw/instrumenten/houtbouw-voorschrijven)`,
      ),
    );
    assert.ok(txt.includes('### Overige modelteksten'));
    assert.ok(txt.includes('#### Zonder pijler'));
    assert.ok(txt.includes('### Nieuwe handreiking'));
    assert.ok(txt.includes(`- URL: ${SITE}/nieuws/nieuwe-handreiking`));
    assert.ok(txt.includes('- Datum: 2026-09-24'));
    assert.ok(txt.includes('Het hele artikel.'));
  });

  it('copes with missing data', () => {
    const empty = buildLlmsFullTxt({}, { siteUrl: SITE, fileUrl: () => null });
    assert.ok(empty.startsWith('# CircuLaw'));
    assert.ok(!empty.includes('## Nieuws'));
  });

  it('ends with a single newline and has no runs of blank lines', () => {
    assert.ok(txt.endsWith('\n'));
    assert.ok(!txt.endsWith('\n\n'));
    assert.ok(!txt.includes('\n\n\n'));
  });
});

describe('euLawStatusLabel', () => {
  it('translates the Studio status values to the phase they describe', () => {
    assert.equal(euLawStatusLabel('In negotiations A'), 'In onderhandeling');
    assert.equal(euLawStatusLabel('Adopted B'), 'Aangenomen');
    assert.equal(euLawStatusLabel('Transposed A'), 'Omgezet in nationale wetgeving');
    assert.equal(euLawStatusLabel(undefined), null);
  });
});

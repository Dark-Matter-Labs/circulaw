import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { buildLlmsTxt, linkItem, markdownUrl, oneLine } from './llms-txt.js';

const SITE = 'https://www.circulaw.nl';

describe('oneLine', () => {
  it('collapses whitespace and trims', () => {
    assert.equal(oneLine('  Een\n\ntwee   drie '), 'Een twee drie');
  });

  it('shortens long text on a word boundary', () => {
    const text = oneLine('woord '.repeat(100), 30);
    assert.ok(text.length <= 31);
    assert.ok(text.endsWith('…'));
    assert.ok(!text.includes('  '));
  });

  it('returns an empty string for missing text', () => {
    assert.equal(oneLine(undefined), '');
  });
});

describe('markdownUrl', () => {
  it('encodes parentheses so they do not end the markdown link', () => {
    assert.equal(
      markdownUrl(`${SITE}/eu-wetgeving/single-use-plastics-directive-(sup)`),
      `${SITE}/eu-wetgeving/single-use-plastics-directive-%28sup%29`,
    );
  });
});

describe('linkItem', () => {
  it('formats an llms.txt list entry with an optional description', () => {
    assert.equal(
      linkItem('Bouw', `${SITE}/bouw`, 'Woningen en wegen'),
      `- [Bouw](${SITE}/bouw): Woningen en wegen`,
    );
    assert.equal(linkItem('Bouw', `${SITE}/bouw`), `- [Bouw](${SITE}/bouw)`);
  });

  it('escapes square brackets in the title', () => {
    assert.equal(linkItem('A [b]', `${SITE}/a`), `- [A \\[b\\]](${SITE}/a)`);
  });
});

describe('buildLlmsTxt', () => {
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
              {
                title: 'Houtbouw voorschrijven',
                slug: 'houtbouw-voorschrijven',
                productChain: 'bouw',
                description: 'Via de vergunning.',
              },
              { title: 'Zonder slug', slug: null, productChain: 'bouw' },
            ],
          },
          { name: 'Woningen', slug: 'woningen', description: null, instruments: [] },
        ],
      },
    ],
    euLaws: [
      {
        title: 'Single-Use Plastics Directive (SUP)',
        slug: 'single-use-plastics-directive-(sup)',
        description: 'Plastic.',
      },
    ],
    aboutPages: [{ title: 'Wat is CircuLaw?', slug: 'wat-is-circulaw', description: null }],
    modelTexts: [
      {
        title: 'Losmaakbaar bouwen',
        slug: 'losmaakbaar-bouwen',
        description: 'Stimuleert hergebruik.',
      },
      { title: 'Zonder slug', slug: null, description: null },
    ],
    news: [
      {
        title: 'Nieuwe handreiking',
        slug: 'nieuwe-handreiking',
        description: 'Sturen op bedrijventerreinen.',
        date: '2026-09-24',
      },
    ],
  };
  const txt = buildLlmsTxt(data, { siteUrl: SITE });
  const lines = txt.split('\n');

  it('starts with the H1 title and a blockquote summary aimed at decentrale overheden', () => {
    assert.equal(lines[0], '# CircuLaw');
    assert.equal(lines[1], '');
    assert.ok(lines[2].startsWith('> '));
    assert.match(lines[2], /decentrale overheden/);
  });

  it('says the content is Dutch and about Dutch and European law', () => {
    assert.match(txt, /Nederlands/);
    assert.match(txt, /Europese/);
  });

  it('links the full-text file and the sitemap', () => {
    assert.ok(txt.includes(`(${SITE}/llms-full.txt)`));
    assert.ok(txt.includes(`(${SITE}/sitemap.xml)`));
  });

  it('lists product chains and their themes', () => {
    assert.ok(txt.includes(`- [Bouw](${SITE}/bouw): Bouw van woningen`));
    assert.ok(txt.includes(`- [Houtbouw (Bouw)](${SITE}/bouw/houtbouw): Vervang beton door hout.`));
    assert.ok(txt.includes(`- [Woningen (Bouw)](${SITE}/bouw/woningen)`));
  });

  it('groups instruments under a section per theme and skips ones without a route', () => {
    assert.ok(lines.includes('## Instrumenten: Bouw › Houtbouw'));
    assert.ok(
      txt.includes(
        `- [Houtbouw voorschrijven](${SITE}/bouw/houtbouw/instrumenten/houtbouw-voorschrijven): Via de vergunning.`,
      ),
    );
    assert.ok(!txt.includes('Zonder slug'));
    assert.ok(!lines.includes('## Instrumenten: Bouw › Woningen'), 'no empty sections');
  });

  it('lists EU laws with markdown-safe URLs, about pages, news and key static pages', () => {
    assert.ok(
      txt.includes(
        `- [Single-Use Plastics Directive (SUP)](${SITE}/eu-wetgeving/single-use-plastics-directive-%28sup%29): Plastic.`,
      ),
    );
    assert.ok(txt.includes(`- [Wat is CircuLaw?](${SITE}/over/wat-is-circulaw)`));
    assert.ok(
      txt.includes(
        `- [Nieuwe handreiking](${SITE}/nieuws/nieuwe-handreiking): 2026-09-24 — Sturen op bedrijventerreinen.`,
      ),
    );
    for (const path of [
      '/vraag-en-antwoord',
      '/bouw/planregels/modelteksten',
      '/training',
      '/eu-wetgeving',
    ]) {
      assert.ok(txt.includes(`](${SITE}${path})`), `missing ${path}`);
    }
  });

  it('uses H2 sections in a fixed order', () => {
    const sections = lines.filter((line) => line.startsWith('## '));
    assert.deepEqual(sections, [
      '## Productketens en thema’s',
      '## Instrumenten: Bouw › Houtbouw',
      '## Europese wetgeving',
      '## Modelteksten voor het omgevingsplan',
      '## Over CircuLaw',
      '## Nieuws',
      '## Overige pagina’s',
    ]);
  });

  it('copes with missing data', () => {
    const empty = buildLlmsTxt({}, { siteUrl: SITE });
    assert.ok(empty.startsWith('# CircuLaw\n'));
    assert.ok(empty.includes('## Overige pagina’s'));
    assert.ok(!empty.includes('## Nieuws'));
  });

  it('ends with a single newline', () => {
    assert.ok(txt.endsWith('\n'));
    assert.ok(!txt.endsWith('\n\n'));
  });
});

describe('buildLlmsTxt model texts', () => {
  it('links every model text page and skips ones without a route', () => {
    const txt = buildLlmsTxt(
      {
        modelTexts: [
          {
            title: 'Losmaakbaar bouwen',
            slug: 'losmaakbaar-bouwen',
            description: 'Stimuleert hergebruik.',
          },
          { title: 'Zonder slug', slug: null },
        ],
      },
      { siteUrl: SITE },
    );
    assert.ok(
      txt.includes(
        `- [Losmaakbaar bouwen](${SITE}/bouw/planregels/modelteksten/losmaakbaar-bouwen): Stimuleert hergebruik.`,
      ),
    );
    assert.ok(!txt.includes('Zonder slug'));
  });
});

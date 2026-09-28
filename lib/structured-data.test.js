import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import {
  buildBreadcrumbList,
  buildFaqPage,
  buildInstrumentGraph,
  buildLegislationGraph,
  buildNewsArticle,
  buildSiteGraph,
  serializeJsonLd,
} from './structured-data.js';

const SITE = 'https://www.circulaw.nl';
const ORG_ID = `${SITE}/#organization`;

const block = (text) => ({
  _type: 'block',
  style: 'normal',
  markDefs: [],
  children: [{ _type: 'span', text, marks: [] }],
});

describe('serializeJsonLd', () => {
  it('produces JSON that parses back to the same data', () => {
    const data = { '@type': 'Thing', name: 'Één & twee' };
    assert.deepEqual(JSON.parse(serializeJsonLd(data)), data);
  });

  it('cannot close the script tag or open a comment, whatever the CMS text holds', () => {
    const data = { name: '</script><script>alert(1)</script><!--' };
    const serialized = serializeJsonLd(data);
    assert.ok(!serialized.includes('<'));
    assert.ok(!serialized.includes('>'));
    assert.ok(serialized.includes('\\u003c/script\\u003e'));
    assert.deepEqual(JSON.parse(serialized), data);
  });

  it('escapes ampersands and the JavaScript line separators', () => {
    const serialized = serializeJsonLd({ name: 'a&b\u2028c\u2029' });
    assert.ok(!serialized.includes('&'));
    assert.ok(!serialized.includes('\u2028'));
    assert.ok(!serialized.includes('\u2029'));
    assert.equal(JSON.parse(serialized).name, 'a&b\u2028c\u2029');
  });
});

describe('buildSiteGraph', () => {
  const graph = buildSiteGraph({
    siteUrl: SITE,
    name: 'CircuLaw',
    alternateName: 'Regelgeving voor een circulaire economie',
    description: 'CircuLaw helpt decentrale overheden.',
    email: 'info@circulaw.nl',
    logo: `${SITE}/circulaw_logotype2.png`,
    sameAs: ['https://www.linkedin.com/company/circulaw/'],
  });
  const [organization, website] = graph['@graph'];

  it('describes the organisation with contact details and logo', () => {
    assert.equal(graph['@context'], 'https://schema.org');
    assert.equal(organization['@type'], 'Organization');
    assert.equal(organization['@id'], ORG_ID);
    assert.equal(organization.name, 'CircuLaw');
    assert.equal(organization.url, SITE);
    assert.equal(organization.email, 'info@circulaw.nl');
    assert.equal(organization.logo, `${SITE}/circulaw_logotype2.png`);
    assert.deepEqual(organization.sameAs, ['https://www.linkedin.com/company/circulaw/']);
  });

  it('describes the Dutch-language website published by the organisation', () => {
    assert.equal(website['@type'], 'WebSite');
    assert.equal(website.url, SITE);
    assert.equal(website.inLanguage, 'nl');
    assert.equal(website.alternateName, 'Regelgeving voor een circulaire economie');
    assert.deepEqual(website.publisher, { '@id': ORG_ID });
    assert.equal(website.potentialAction, undefined);
  });
});

describe('buildBreadcrumbList', () => {
  it('numbers the items and skips ones without a name or URL', () => {
    const list = buildBreadcrumbList([
      { name: 'Home', url: SITE },
      { name: 'Bouw', url: `${SITE}/bouw` },
      { name: null, url: `${SITE}/x` },
    ]);
    assert.equal(list['@type'], 'BreadcrumbList');
    assert.deepEqual(list.itemListElement, [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
      { '@type': 'ListItem', position: 2, name: 'Bouw', item: `${SITE}/bouw` },
    ]);
  });
});

describe('buildNewsArticle', () => {
  const news = {
    title: ' Nieuwe handreiking ',
    slug: { current: 'nieuwe-handreiking' },
    newsText: 'Door CircuLaw ontwikkeld.',
    newsDate: '2026-09-24',
    category: 'Circulair nieuws',
    _createdAt: '2026-09-20T06:58:05Z',
    _updatedAt: '2026-09-25T11:13:07Z',
  };

  it('uses the editorial date as publication date and the last edit as modification date', () => {
    const article = buildNewsArticle(news, { siteUrl: SITE, imageUrl: 'https://cdn/x.png' });
    assert.equal(article['@context'], 'https://schema.org');
    assert.equal(article['@type'], 'NewsArticle');
    assert.equal(article.headline, 'Nieuwe handreiking');
    assert.equal(article.description, 'Door CircuLaw ontwikkeld.');
    assert.equal(article.datePublished, '2026-09-24');
    assert.equal(article.dateModified, '2026-09-25T11:13:07Z');
    assert.equal(article.url, `${SITE}/nieuws/nieuwe-handreiking`);
    assert.equal(article.mainEntityOfPage, `${SITE}/nieuws/nieuwe-handreiking`);
    assert.deepEqual(article.image, ['https://cdn/x.png']);
    assert.equal(article.inLanguage, 'nl');
    assert.equal(article.articleSection, 'Circulair nieuws');
    assert.equal(article.publisher['@id'], ORG_ID);
    assert.equal(article.author['@id'], ORG_ID);
  });

  it('falls back to the creation date and leaves out a missing image', () => {
    const article = buildNewsArticle({ ...news, newsDate: undefined }, { siteUrl: SITE });
    assert.equal(article.datePublished, '2026-09-20T06:58:05Z');
    assert.equal(article.image, undefined);
  });

  it('accepts a plain string slug', () => {
    const article = buildNewsArticle({ ...news, slug: 'x' }, { siteUrl: SITE });
    assert.equal(article.url, `${SITE}/nieuws/x`);
  });
});

describe('buildFaqPage', () => {
  const content = [
    { _type: 'faqSection', sectionTitle: 'Algemeen' },
    {
      _type: 'faqItem',
      question: 'Wat is CircuLaw?',
      response: [block('Een website.'), block('Gratis.')],
    },
    { _type: 'faqItem', question: 'Zonder antwoord?', response: [] },
  ];

  it('lists each answered question with its answer as plain text', () => {
    const page = buildFaqPage(content, { siteUrl: SITE });
    assert.equal(page['@type'], 'FAQPage');
    assert.equal(page.url, `${SITE}/vraag-en-antwoord`);
    assert.equal(page.inLanguage, 'nl');
    assert.deepEqual(page.mainEntity, [
      {
        '@type': 'Question',
        name: 'Wat is CircuLaw?',
        acceptedAnswer: { '@type': 'Answer', text: 'Een website.\n\nGratis.' },
      },
    ]);
  });

  it('returns null when there is nothing to describe', () => {
    assert.equal(buildFaqPage(undefined, { siteUrl: SITE }), null);
    assert.equal(buildFaqPage([{ _type: 'faqSection' }], { siteUrl: SITE }), null);
  });
});

describe('buildLegislationGraph', () => {
  const law = {
    title: 'Single-Use Plastics Directive (SUP)',
    slug: { current: 'single-use-plastics-directive-(sup)' },
    introText: 'Onderzoek wijst uit dat 70% van het zwerfafval op zee uit kunststof bestaat. ',
    _updatedAt: '2025-02-17T15:04:46Z',
  };
  const graph = buildLegislationGraph(law, { siteUrl: SITE });
  const [legislation, breadcrumbs] = graph['@graph'];
  const url = `${SITE}/eu-wetgeving/single-use-plastics-directive-(sup)`;

  it('describes the EU law on its page', () => {
    assert.equal(legislation['@type'], 'Legislation');
    assert.equal(legislation.name, 'Single-Use Plastics Directive (SUP)');
    assert.equal(legislation.alternateName, 'SUP');
    assert.equal(legislation.legislationJurisdiction, 'EU');
    assert.equal(legislation.legislationType, 'Directive');
    assert.equal(
      legislation.description,
      'Onderzoek wijst uit dat 70% van het zwerfafval op zee uit kunststof bestaat.',
    );
    assert.equal(legislation.url, url);
    assert.equal(legislation.mainEntityOfPage, url);
    assert.equal(legislation.dateModified, '2025-02-17T15:04:46Z');
  });

  it('prefers the SEO description and only states a type the title names', () => {
    const [other] = buildLegislationGraph(
      {
        title: 'EU Taxonomie',
        slug: { current: 'eu-taxonomie' },
        metaDescribe: 'SEO tekst',
        introText: 'Intro',
      },
      { siteUrl: SITE },
    )['@graph'];
    assert.equal(other.description, 'SEO tekst');
    assert.equal(other.legislationType, undefined);
    assert.equal(other.alternateName, undefined);
  });

  it('adds breadcrumbs through the EU law overview', () => {
    assert.deepEqual(
      breadcrumbs.itemListElement.map((item) => [item.name, item.item]),
      [
        ['Home', SITE],
        ['EU-wetgeving', `${SITE}/eu-wetgeving`],
        ['Single-Use Plastics Directive (SUP)', url],
      ],
    );
  });

  it('returns null for a law without a slug', () => {
    assert.equal(buildLegislationGraph({ title: 'x' }, { siteUrl: SITE }), null);
  });
});

describe('buildInstrumentGraph', () => {
  const instrument = {
    titel: 'Houtbouw voorschrijven in omgevingsvergunning',
    subtitel: 'Een gemeente kan houtbouw voorschrijven.',
    slug: 'houtbouw-voorschrijven',
    productChain: { name: 'Bouw', slug: 'bouw' },
    thema: { name: 'Houtbouw', slug: 'houtbouw' },
    rechtsgebied: 'Publiekrecht',
    subrechtsgebied: 'Omgevingsrecht',
    rLadder: ['R1', 'R2'],
    citeertitel: 'Omgevingswet',
    artikel: '5.21',
    artikelLink: 'https://wetten.overheid.nl/x',
    _createdAt: '2023-01-01T00:00:00Z',
    _updatedAt: '2026-01-01T00:00:00Z',
  };
  const url = `${SITE}/bouw/houtbouw/instrumenten/houtbouw-voorschrijven`;
  const graph = buildInstrumentGraph(instrument, { siteUrl: SITE });
  const [article, breadcrumbs] = graph['@graph'];

  it('describes the instrument page as an article citing the law article it relies on', () => {
    assert.equal(article['@type'], 'Article');
    assert.equal(article.headline, 'Houtbouw voorschrijven in omgevingsvergunning');
    assert.equal(article.description, 'Een gemeente kan houtbouw voorschrijven.');
    assert.equal(article.url, url);
    assert.equal(article.inLanguage, 'nl');
    assert.equal(article.articleSection, 'Houtbouw');
    assert.equal(article.datePublished, '2023-01-01T00:00:00Z');
    assert.equal(article.dateModified, '2026-01-01T00:00:00Z');
    assert.deepEqual(article.keywords, ['Publiekrecht', 'Omgevingsrecht', 'R1', 'R2']);
    assert.deepEqual(article.citation, {
      '@type': 'Legislation',
      name: 'Omgevingswet, artikel 5.21',
      url: 'https://wetten.overheid.nl/x',
    });
    assert.equal(article.publisher['@id'], ORG_ID);
  });

  it('adds breadcrumbs from home through product chain and theme', () => {
    assert.deepEqual(
      breadcrumbs.itemListElement.map((item) => [item.name, item.item]),
      [
        ['Home', SITE],
        ['Bouw', `${SITE}/bouw`],
        ['Houtbouw', `${SITE}/bouw/houtbouw`],
        ['Houtbouw voorschrijven in omgevingsvergunning', url],
      ],
    );
  });

  it('leaves out the citation when the law is unknown', () => {
    const [bare] = buildInstrumentGraph(
      { ...instrument, citeertitel: undefined, artikelLink: undefined },
      { siteUrl: SITE },
    )['@graph'];
    assert.equal(bare.citation, undefined);
  });

  it('returns null when the route cannot be built', () => {
    assert.equal(buildInstrumentGraph({ ...instrument, thema: null }, { siteUrl: SITE }), null);
  });
});

// schema.org JSON-LD builders and a serializer that is safe to inline in a
// <script> tag. Kept free of Next and Sanity imports so they can be unit tested.
import { lawArticleName } from './law-reference.js';
import { portableTextToPlainText } from './portable-text-markdown.js';
import {
  absoluteUrl,
  euLawPath,
  euLawTabPath,
  instrumentPath,
  modelTextPath,
  newsPath,
  productChainPath,
  themaPath,
} from './site-paths.js';

const CONTEXT = 'https://schema.org';
const LANGUAGE = 'nl';

const organizationId = (siteUrl) => `${siteUrl}/#organization`;
const websiteId = (siteUrl) => `${siteUrl}/#website`;
const organizationRef = (siteUrl) => ({
  '@type': 'Organization',
  '@id': organizationId(siteUrl),
  name: 'CircuLaw',
});

const slugOf = (slug) => (typeof slug === 'string' ? slug : slug?.current);

const cleanText = (text) => (typeof text === 'string' ? text.replace(/\s+/g, ' ').trim() : '');

// Drops undefined, null, '' and [] so the output only states what is known.
function compact(object) {
  return Object.fromEntries(
    Object.entries(object).filter(
      ([, value]) =>
        value !== undefined &&
        value !== null &&
        value !== '' &&
        !(Array.isArray(value) && value.length === 0),
    ),
  );
}

const LINE_SEPARATOR = new RegExp(' ', 'g');
const PARAGRAPH_SEPARATOR = new RegExp(' ', 'g');

// CMS text ends up inside <script>: '</script>' or '<!--' in a title must not
// be able to end the element. The escapes are valid JSON, so parsers read the
// original characters back.
export function serializeJsonLd(data) {
  return JSON.stringify(data)
    .replace(/</g, '\\u003c')
    .replace(/>/g, '\\u003e')
    .replace(/&/g, '\\u0026')
    .replace(LINE_SEPARATOR, '\\u2028')
    .replace(PARAGRAPH_SEPARATOR, '\\u2029');
}

export function buildSiteGraph({ siteUrl, name, alternateName, description, email, logo, sameAs }) {
  return {
    '@context': CONTEXT,
    '@graph': [
      compact({
        '@type': 'Organization',
        '@id': organizationId(siteUrl),
        name,
        url: siteUrl,
        email,
        logo,
        description,
        sameAs,
      }),
      compact({
        '@type': 'WebSite',
        '@id': websiteId(siteUrl),
        name,
        alternateName,
        url: siteUrl,
        description,
        inLanguage: LANGUAGE,
        publisher: { '@id': organizationId(siteUrl) },
      }),
    ],
  };
}

export function buildBreadcrumbList(items) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items
      .filter((item) => item?.name && item?.url)
      .map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: item.url,
      })),
  };
}

export function buildNewsArticle(news, { siteUrl, imageUrl }) {
  const url = absoluteUrl(siteUrl, newsPath(slugOf(news?.slug)));
  if (!url) return null;
  const datePublished = news.newsDate || news._createdAt;
  return compact({
    '@context': CONTEXT,
    '@type': 'NewsArticle',
    headline: cleanText(news.title),
    description: cleanText(news.newsText),
    url,
    mainEntityOfPage: url,
    image: imageUrl ? [imageUrl] : undefined,
    datePublished,
    dateModified: news._updatedAt || datePublished,
    inLanguage: LANGUAGE,
    articleSection: news.category,
    author: organizationRef(siteUrl),
    publisher: organizationRef(siteUrl),
  });
}

// content: the FAQPageContent array of the FAQ page (faqSection and faqItem).
export function buildFaqPage(content, { siteUrl }) {
  const questions = (content ?? [])
    .filter((item) => item?._type === 'faqItem' && cleanText(item.question))
    .map((item) => ({
      question: cleanText(item.question),
      answer: portableTextToPlainText(item.response),
    }))
    .filter((item) => item.answer)
    .map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    }));
  if (questions.length === 0) return null;
  return {
    '@context': CONTEXT,
    '@type': 'FAQPage',
    url: absoluteUrl(siteUrl, '/vraag-en-antwoord'),
    inLanguage: LANGUAGE,
    mainEntity: questions,
  };
}

// Only what the title states: 'Critical Raw Materials Act' or 'EU Taxonomie'
// get no type rather than a guessed one.
function legislationType(title) {
  if (/\bdirective\b/i.test(title)) return 'Directive';
  if (/\bregulation\b/i.test(title)) return 'Regulation';
  return undefined;
}

const abbreviation = (title) => title.match(/\(([A-Z0-9]{2,})\)\s*$/)?.[1];

// The overview and every tab page of an EU law describe this one entity, so
// they share its @id rather than each claiming a Legislation of their own.
function legislationNode(law, url, siteUrl) {
  const name = cleanText(law.title);
  return compact({
    '@type': 'Legislation',
    '@id': `${url}#legislation`,
    name,
    alternateName: abbreviation(name),
    legislationJurisdiction: 'EU',
    legislationType: legislationType(name),
    description: cleanText(law.metaDescribe) || cleanText(law.introText),
    url,
    mainEntityOfPage: url,
    image: law.introImage,
    dateModified: law._updatedAt,
    isPartOf: { '@id': websiteId(siteUrl) },
  });
}

const euLawBreadcrumbs = (siteUrl, name, url) => [
  { name: 'Home', url: siteUrl },
  { name: 'EU-wetgeving', url: absoluteUrl(siteUrl, '/eu-wetgeving') },
  { name, url },
];

export function buildLegislationGraph(law, { siteUrl }) {
  const url = absoluteUrl(siteUrl, euLawPath(slugOf(law?.slug)));
  if (!url) return null;
  const legislation = legislationNode(law, url, siteUrl);
  return {
    '@context': CONTEXT,
    '@graph': [legislation, buildBreadcrumbList(euLawBreadcrumbs(siteUrl, legislation.name, url))],
  };
}

// tab: { slug, name } of an EU law sub-tab (lib/eu-law-tabs.js). The tab page
// is a WebPage about the law; description and dateModified describe the tab.
export function buildEuLawTabGraph(law, tab, { siteUrl, description, dateModified }) {
  const lawSlug = slugOf(law?.slug);
  const lawUrl = absoluteUrl(siteUrl, euLawPath(lawSlug));
  const tabUrl = absoluteUrl(siteUrl, euLawTabPath(lawSlug, tab?.slug));
  if (!lawUrl || !tabUrl) return null;
  const legislation = legislationNode(law, lawUrl, siteUrl);
  return {
    '@context': CONTEXT,
    '@graph': [
      compact({
        '@type': 'WebPage',
        '@id': tabUrl,
        url: tabUrl,
        name: `${tab.name} - ${legislation.name}`,
        description: cleanText(description),
        inLanguage: LANGUAGE,
        dateModified,
        isPartOf: { '@id': websiteId(siteUrl) },
        about: { '@id': legislation['@id'] },
      }),
      legislation,
      buildBreadcrumbList([
        ...euLawBreadcrumbs(siteUrl, legislation.name, lawUrl),
        { name: tab.name, url: tabUrl },
      ]),
    ],
  };
}

function lawCitation(instrument) {
  const name = lawArticleName(instrument);
  if (!name) return undefined;
  return compact({
    '@type': 'Legislation',
    name,
    url: /^https?:\/\//.test(instrument.artikelLink ?? '') ? instrument.artikelLink : undefined,
  });
}

// instrument: the result of INSTRUMENT_STRUCTURED_DATA_QUERY.
export function buildInstrumentGraph(instrument, { siteUrl }) {
  const productChain = instrument?.productChain;
  const thema = instrument?.thema;
  const url = absoluteUrl(
    siteUrl,
    instrumentPath(productChain?.slug, thema?.slug, instrument?.slug),
  );
  if (!url) return null;
  const headline = cleanText(instrument.titel);
  const keywords = [
    instrument.rechtsgebied,
    instrument.subrechtsgebied,
    ...(instrument.rLadder ?? []),
  ].filter(Boolean);

  return {
    '@context': CONTEXT,
    '@graph': [
      compact({
        '@type': 'Article',
        headline,
        description: cleanText(instrument.metaDescribe) || cleanText(instrument.subtitel),
        url,
        mainEntityOfPage: url,
        image: instrument.image,
        datePublished: instrument._createdAt,
        dateModified: instrument._updatedAt,
        inLanguage: LANGUAGE,
        articleSection: thema.name,
        keywords,
        citation: lawCitation(instrument),
        author: organizationRef(siteUrl),
        publisher: organizationRef(siteUrl),
        isPartOf: { '@id': websiteId(siteUrl) },
      }),
      buildBreadcrumbList([
        { name: 'Home', url: siteUrl },
        { name: productChain.name, url: absoluteUrl(siteUrl, productChainPath(productChain.slug)) },
        { name: thema.name, url: absoluteUrl(siteUrl, themaPath(productChain.slug, thema.slug)) },
        { name: headline, url },
      ]),
    ],
  };
}

// modelText: the result of MODEL_TEXT_PAGE_QUERY.
export function buildModelTextGraph(modelText, { siteUrl }) {
  const url = absoluteUrl(siteUrl, modelTextPath(modelText?.slug));
  if (!url) return null;
  const name = cleanText(modelText.title);
  return {
    '@context': CONTEXT,
    '@graph': [
      compact({
        '@type': 'CreativeWork',
        name,
        genre: 'Modeltekst voor het omgevingsplan',
        description: cleanText(modelText.descriptionPT),
        text: cleanText(modelText.modelTextPT),
        keywords: [modelText.pillarTitle, modelText.scale, modelText.type]
          .map(cleanText)
          .filter(Boolean),
        url,
        mainEntityOfPage: url,
        inLanguage: LANGUAGE,
        datePublished: modelText._createdAt,
        dateModified: modelText._updatedAt,
        author: organizationRef(siteUrl),
        publisher: organizationRef(siteUrl),
        isPartOf: { '@id': websiteId(siteUrl) },
      }),
      buildBreadcrumbList([
        { name: 'Home', url: siteUrl },
        { name: 'Bouw', url: absoluteUrl(siteUrl, '/bouw') },
        { name: 'Planregels', url: absoluteUrl(siteUrl, '/bouw/planregels') },
        { name: 'Modelteksten', url: absoluteUrl(siteUrl, '/bouw/planregels/modelteksten') },
        { name, url },
      ]),
    ],
  };
}

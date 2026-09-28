// Builds /llms.txt (https://llmstxt.org): a markdown index of the site for
// language models. Kept free of Next and Sanity imports so it can be unit tested.
import {
  aboutPath,
  absoluteUrl,
  euLawPath,
  instrumentPath,
  newsPath,
  productChainPath,
  themaPath,
} from './site-paths.js';

export const SITE_SUMMARY =
  'CircuLaw helpt decentrale overheden, zoals gemeenten en provincies, de transitie naar een circulaire economie te versnellen door te laten zien hoe zij bestaande wet- en regelgeving kunnen inzetten. De site beschrijft juridische instrumenten per productketen en thema, wat Europese wetgeving betekent voor regionale en lokale overheden, modelteksten voor het omgevingsplan en nieuws over circulair beleid.';

export const LANGUAGE_NOTE =
  'Alle inhoud is in het Nederlands en gaat over Nederlands recht en Europees recht zoals dat in Nederland doorwerkt. (All content is in Dutch and covers Dutch law and EU law as it applies in the Netherlands.)';

// Pages that are not a Sanity document; descriptions follow their metadata.
const STATIC_PAGES = [
  {
    title: 'Vraag en antwoord',
    path: '/vraag-en-antwoord',
    description: 'Veelgestelde vragen over CircuLaw en de juridische instrumenten.',
  },
  {
    title: 'Planregels: circulair bouwen in het omgevingsplan',
    path: '/bouw/planregels',
    description:
      'Circulair bouwen stimuleren met de omgevingsvisie, het omgevingsprogramma en het omgevingsplan.',
  },
  {
    title: 'Modelteksten voor het omgevingsplan',
    path: '/bouw/planregels/modelteksten',
    description:
      'Modelteksten (planregels) voor het omgevingsplan, ingedeeld in 6 pijlers die aansluiten bij het Convenant Toekomstbestendig Bouwen.',
  },
  {
    title: 'Houtbouw in circulaire gebiedsontwikkeling',
    path: '/bouw/gebiedsontwikkeling',
    description:
      'Juridische instrumenten per fase van gebiedsontwikkeling, van verkenning tot transformatie, om houtbouw en circulariteit te stimuleren.',
  },
  {
    title: 'E-learning: circulaire houtbouw onder de Omgevingswet',
    path: '/training',
    description:
      'Gratis e-learning over het verankeren van houtbouw in het beleid van je overheid.',
  },
  { title: 'Nieuws', path: '/nieuws', description: 'Nieuws en agenda van CircuLaw.' },
  { title: 'Contact', path: '/contact', description: 'Contact opnemen met CircuLaw.' },
];

const EU_OVERVIEW = {
  title: 'EU-wetgeving: overzicht',
  path: '/eu-wetgeving',
  description:
    'Europese wet- en regelgeving voor de verduurzaming van de maatschappij, veelal onder de Green Deal, en wat die betekent voor Nederlandse overheden.',
};

export function oneLine(text, max = 240) {
  const clean = typeof text === 'string' ? text.replace(/\s+/g, ' ').trim() : '';
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max);
  const lastSpace = cut.lastIndexOf(' ');
  return `${(lastSpace > max / 2 ? cut.slice(0, lastSpace) : cut).replace(/[\s,.;:]+$/, '')}…`;
}

// Parentheses are valid in a URL but end a markdown link destination early.
export const markdownUrl = (url) => url.replace(/\(/g, '%28').replace(/\)/g, '%29');

const escapeLinkText = (text) => text.replace(/([[\]])/g, '\\$1');

export function markdownLink(title, url) {
  return `[${escapeLinkText(oneLine(title))}](${markdownUrl(url)})`;
}

export function linkItem(title, url, description) {
  const summary = oneLine(description);
  return `- ${markdownLink(title, url)}${summary ? `: ${summary}` : ''}`;
}

const section = (title, items) => (items.length ? [`## ${title}`, '', ...items] : []);

// Items with a missing route are skipped rather than linked to a broken URL.
const withUrl = (siteUrl, path, render) => {
  const url = absoluteUrl(siteUrl, path);
  return url ? [render(url)] : [];
};

function productChainItems(productChains, siteUrl) {
  return productChains.flatMap((pc) => [
    ...withUrl(siteUrl, productChainPath(pc.slug), (url) => linkItem(pc.name, url, pc.description)),
    ...(pc.themas ?? []).flatMap((thema) =>
      withUrl(siteUrl, themaPath(pc.slug, thema.slug), (url) =>
        linkItem(`${thema.name} (${pc.name})`, url, thema.description),
      ),
    ),
  ]);
}

function instrumentSections(productChains, siteUrl) {
  return productChains.flatMap((pc) =>
    (pc.themas ?? []).flatMap((thema) => {
      const items = (thema.instruments ?? []).flatMap((instrument) =>
        withUrl(
          siteUrl,
          instrumentPath(instrument.productChain ?? pc.slug, thema.slug, instrument.slug),
          (url) => linkItem(instrument.title, url, instrument.description),
        ),
      );
      return items.length
        ? ['', ...section(`Instrumenten: ${pc.name} › ${thema.name}`, items)]
        : [];
    }),
  );
}

const pathItems = (items, siteUrl, toPath, describe = (item) => item.description) =>
  items.flatMap((item) =>
    withUrl(siteUrl, toPath(item.slug), (url) => linkItem(item.title, url, describe(item))),
  );

const staticItem = (page, siteUrl) =>
  linkItem(page.title, absoluteUrl(siteUrl, page.path), page.description);

// data: the result of LLMS_INDEX_QUERY.
export function buildLlmsTxt(data, { siteUrl }) {
  const productChains = data?.productChains ?? [];
  const euLaws = data?.euLaws ?? [];
  const aboutPages = data?.aboutPages ?? [];
  const news = data?.news ?? [];
  const block = (lines) => (lines.length ? ['', ...lines] : []);

  const lines = [
    '# CircuLaw',
    '',
    `> ${SITE_SUMMARY}`,
    '',
    LANGUAGE_NOTE,
    '',
    `De volledige tekst van alle instrumenten, EU-wetgeving, pagina's, vragen, modelteksten en nieuwsberichten staat in één bestand: ${markdownLink('llms-full.txt', absoluteUrl(siteUrl, '/llms-full.txt'))}. Alle URL's staan in de ${markdownLink('sitemap.xml', absoluteUrl(siteUrl, '/sitemap.xml'))}.`,
    ...block(section('Productketens en thema’s', productChainItems(productChains, siteUrl))),
    ...instrumentSections(productChains, siteUrl),
    ...block(
      section('Europese wetgeving', [
        staticItem(EU_OVERVIEW, siteUrl),
        ...pathItems(euLaws, siteUrl, euLawPath),
      ]),
    ),
    ...block(section('Over CircuLaw', pathItems(aboutPages, siteUrl, aboutPath))),
    ...block(
      section(
        'Nieuws',
        pathItems(news, siteUrl, newsPath, (item) =>
          [item.date, oneLine(item.description)].filter(Boolean).join(' — '),
        ),
      ),
    ),
    ...block(
      section(
        'Overige pagina’s',
        STATIC_PAGES.map((page) => staticItem(page, siteUrl)),
      ),
    ),
  ];

  return `${lines.join('\n')}\n`;
}

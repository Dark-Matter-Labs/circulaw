// Queries behind /llms.txt, /llms-full.txt and the instrument JSON-LD. Kept
// apart from lib/queries.js so the page queries stay untouched.

// Every document type that ends up in llms.txt or llms-full.txt. The revalidate
// webhook calls revalidateTag(_type), so a publish of any of these refreshes both.
export const LLMS_TAGS = [
  'transitionAgenda',
  'thema',
  'simpleThema',
  'instrument',
  'euLaw',
  'euEuropeTab',
  'euLocalTab',
  'euCircularEconomyTab',
  'aboutPage',
  'partners',
  'FAQpage',
  'pillar',
  'modelText',
  'newsItem',
];

// Instruments sit under their theme, but their URL uses their own product
// chain, as the instrument route does. News pages use the same filter as
// NEWS_SLUGS_QUERY, theme pages include simple themes.
export const LLMS_INDEX_QUERY = `
{
  "productChains": *[_type == 'transitionAgenda' && defined(slug.current)] | order(orderRank asc) {
    "name": pcName,
    "slug": slug.current,
    "description": coalesce(cardText, metaDescribe),
    "themas": *[_type in ['thema', 'simpleThema'] && transitionAgenda._ref == ^._id && defined(slug.current)] | order(homePageOrder asc) {
      "name": themaName,
      "slug": slug.current,
      "description": coalesce(themaSubtitle, homePageCardText, metaDescribe),
      "instruments": *[_type == 'instrument' && thema._ref == ^._id && defined(slug.current)] | order(lower(titel) asc) {
        "title": titel,
        "slug": slug.current,
        "productChain": transitionAgenda->slug.current,
        "description": coalesce(metaDescribe, subtitel, introText),
      },
    },
  },
  "euLaws": *[_type == 'euLaw' && defined(slug.current)] | order(title asc) {
    title,
    "slug": slug.current,
    "description": coalesce(metaDescribe, introText),
  },
  "aboutPages": *[_type == 'aboutPage' && defined(slug.current)] | order(orderRank asc) {
    "title": pageTitle,
    "slug": slug.current,
    "description": metaDescribe,
  },
  "news": *[_type == 'newsItem' && defined(slug.current) && hasPage == true] | order(coalesce(newsDate, _createdAt) desc) {
    title,
    "slug": slug.current,
    "description": newsText,
    "date": newsDate,
  },
}
`;

export const LLMS_FULL_QUERY = `
{
  "productChains": *[_type == 'transitionAgenda' && defined(slug.current)] | order(orderRank asc) {
    "name": pcName,
    "slug": slug.current,
    "themas": *[_type in ['thema', 'simpleThema'] && transitionAgenda._ref == ^._id && defined(slug.current)] | order(homePageOrder asc) {
      "name": themaName,
      "slug": slug.current,
      "description": coalesce(themaSubtitle, homePageCardText, metaDescribe),
      "instruments": *[_type == 'instrument' && thema._ref == ^._id && defined(slug.current)] | order(lower(titel) asc) {
        _id,
        "title": titel,
        "slug": slug.current,
        "productChain": transitionAgenda->slug.current,
        subtitel,
        juridischeHaalbaarheid,
        juridischInvloed,
        overheidslaag,
        rLadder,
        rechtsgebied,
        subrechtsgebied,
        citeertitel,
        artikel,
        artikelLink,
        lawDate,
        "categories": { beleid, inkoop, grondpositie, subsidie, fiscaal },
        content,
      },
    },
  },
  "euLaws": *[_type == 'euLaw' && defined(slug.current)] | order(title asc) {
    title,
    "slug": slug.current,
    introText,
    summaryIntroText,
    summaryContent,
    statusContent,
    statusStep,
    statusTwoStep,
    statusThreeStep,
    linkCol1,
    linkCol2,
    linkCol3,
    "tabs": *[_type in ['euEuropeTab', 'euLocalTab', 'euCircularEconomyTab'] && euLawReference._ref == ^._id] {
      _type,
      europeContent,
      localContent,
      ceContent,
    },
  },
  "aboutPages": *[_type == 'aboutPage' && defined(slug.current)] | order(orderRank asc) {
    "title": pageTitle,
    "slug": slug.current,
    "content": content[] {
      ...,
      _type == 'partnersSection' => {
        "partnerGroups": [
          { "title": 'Ontwikkelpartners', "names": reference->developingPartners[].partnerName },
          { "title": 'Kennispartners', "names": reference->partners[].partnerName },
          { "title": 'Financieringspartners', "names": reference->financingPartners[].partnerName },
        ],
      },
    },
  },
  "faq": *[_type == 'FAQpage'][0] { "content": FAQPageContent },
  "pillars": *[_type == 'pillar' && defined(slug.current)] | order(orderRank) {
    title,
    "slug": slug.current,
    description,
  },
  "modelTexts": *[_type == 'modelText'] | order(lower(title) asc) {
    title,
    "pillar": pillar->slug.current,
    scale,
    type,
    impactLevel,
    modelText,
    description,
    "linkedInstruments": linkedInstruments[]-> {
      titel,
      "slug": slug.current,
      "productChain": transitionAgenda->slug.current,
      "thema": thema->slug.current,
    },
  },
  "news": *[_type == 'newsItem' && defined(slug.current) && hasPage == true] | order(coalesce(newsDate, _createdAt) desc) {
    title,
    "slug": slug.current,
    "date": newsDate,
    category,
    newsText,
    content,
  },
}
`;

export const INSTRUMENT_STRUCTURED_DATA_QUERY = `
*[_type == 'instrument' && slug.current == $slug && thema->slug.current == $thema && transitionAgenda->slug.current == $productChain][0] {
  titel,
  subtitel,
  metaDescribe,
  "slug": slug.current,
  "productChain": transitionAgenda-> { "name": pcName, "slug": slug.current },
  "thema": thema-> { "name": themaName, "slug": slug.current },
  rechtsgebied,
  subrechtsgebied,
  rLadder,
  citeertitel,
  artikel,
  artikelLink,
  "image": select(isFeatured == true => featuredImage.asset->url),
  _createdAt,
  _updatedAt,
}
`;

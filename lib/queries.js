// Queries thats gets arrays of slugs for navigation
export const siteSettingsQuerys = {
  overCirulaw: `*[_type == "siteConfig"][]{
    'aboutNavItems': overCirculaw->items[]{
    "slug": navigationItemUrl.internalLink->slug.current,
    "title": navigationItemUrl.internalLink->pageTitle
    }
  }.aboutNavItems[]`,
  vraagAntwoord: `*[_type == "siteConfig"][0]{
        'slug': vraagAntwoord->items[0].navigationItemUrl.internalLink->slug.current
    }`,
  thema: `*[_type == "siteConfig"][0]{
    "slugs": themas->items[].navigationItemUrl.internalLink->slug.current,
  }`,
};

// Queries for the home page sections
export const homePageThemaQuery = `
*[_type == "thema" || _type == "simpleThema"]{
  transitionAgenda,
  homePageCardText,
  themaName,
  homePageCardButtonText,
  homePageOrder,
  "mobImage": heroImageMobile.asset->.url,
  "image": homePageCardImage.asset->.url,
  "mobileCardImage": homePageCardImageMobile.asset->url,
  "slug" : slug.current
} | order(homePageOrder asc)
`;

export const homePageHeaderQuery = `
*[_type == "siteConfig"][0]{
  headerText, 
  subHeader
}
`;

export const newsItems = `
*[_type == 'newsPage'][0] {
    "featured": newsItems[featured == true]{
      ...,
      "image": newsImage.asset->.url
    },
      "notFeatured": newsItems[featured != true]{
        ...,
        "image": newsImage.asset->.url
    },
  }
`;

export const footerQuery = `
*[_type == "siteConfig"][0]{
  footerText,
  footerLinkText,
}
`;

export const aboutSectionQuerie = `
*[_type == "siteConfig"][0]{
  "aboutSectionSlug": aboutSectionPage->slug.current,
  aboutSectionMobileText,
  aboutSectionText,
  aboutSectionTitle,
}
`;

export const newsItemsQuery = `
*[_type == "newsItem"][0..7] {
  "newsImage": image.asset->.url,
  ...,
} | order(_createdAt desc)
`;

// queries for thema's
export const matrassenQueries = {
  matrassenFeatured: `
    *[_type == "measure" && thema == "matrasketen" && isFeatured == true]
    `,
  matrassenLength: `
    count(*[_type == "measure" && thema == "matrasketen"])
    `,
  matressThemaQuery: `
    *[_type == "thema" && themaName == "Matrasketen"][0]{
      ...,
      "heroImage": heroImage.asset->.url,
      "heroImageMobile": heroImageMobile.asset->.url,
    }
    `,
};

export const windQueries = {
  windFeatured: `
*[_type == "measure" && thema == "windturbines" && isFeatured == true]
`,

  windLength: `
count(*[_type == "measure" && thema == "windturbines"])
`,

  windThemaQuery: `
*[_type == "thema" && themaName == "Windturbines"][0]{
  ...,
  "heroImage": heroImage.asset->.url,
  "heroImageMobile": heroImageMobile.asset->.url,
}
`,
};

export const houtbouwQueries = {
  houtbouwFeatured: `
*[_type == "measure" && thema == "houtbouw" && isFeatured == true]
`,

  houtbouwLength: `
count(*[_type == "measure" && thema == "houtbouw"])
`,

  houtbouwThemaQuery: `
*[_type == "thema" && themaName == "Houtbouw"][0]{
  ...,
  "heroImage": heroImage.asset->.url,
  "heroImageMobile": heroImageMobile.asset->.url,
}
`,
};

export const voedselverspillingQueries = {
  voedselverspillingFeatured: `
*[_type == "measure" && thema == "voedselverspilling" && isFeatured == true]
`,

  voedselverspillingLength: `
count(*[_type == "measure" && thema == "voedselverspilling"])
`,

  voedselverspillingThemaQuery: `
*[_type == "thema" && themaName == "Voedselverspilling"][0]{
  ...,
  "heroImage": heroImage.asset->.url,
  "heroImageMobile": heroImageMobile.asset->.url,
}
`,
};

// simpleThema

export function simpleThemaQueryFunction(thema, themaName) {
  const simpleThemaQueries = {
    length: `
    count(*[_type == "measure" && thema == "${thema}"])
    `,
    themaQuery: `
    *[_type == "simpleThema" && themaName == "${themaName}"][0]{ 
      ...,
      "heroImage": heroImage.asset->.url,
      "heroImageMobile": heroImageMobile.asset->.url,
    }
    `,
    instrumentsQuery: `
    *[_type == "measure" && thema == "${thema}"]| order(lower(titel) asc) {
      _id,
      titel,
      slug,
      thema,
      transitionAgenda,
      rLadder,
      subrechtsgebied,
      juridischInvloed,
      juridischeHaalbaarheid,
      rechtsgebied,
      "overheidslaag": [overheidslaag[2], overheidslaag[1], overheidslaag[0]],
      content,
      introText,
      extraContent,
      beleid, 
      inkoop,
      grondpositie,
      subsidie,
      fiscaal,
      "expertise": [beleid, inkoop, grondpositie, subsidie, fiscaal],
    }
    `,
  }
  return simpleThemaQueries
}

export const meubelsQueries = {
  meubelsLength: `
  count(*[_type == "measure" && thema == "meubels"])
  `,
  meubelsThemaQuery: `
  *[_type == "simpleThema" && themaName == "Meubels"][0]{ 
    ...,
    "heroImage": heroImage.asset->.url,
    "heroImageMobile": heroImageMobile.asset->.url,
  }
  `,
  meubelsInstrumentsQuery: `
  *[_type == "measure" && thema == "meubels"]| order(lower(titel) asc) {
    _id,
    titel,
    slug,
    thema,
    transitionAgenda,
    rLadder,
    subrechtsgebied,
    juridischInvloed,
    juridischeHaalbaarheid,
    rechtsgebied,
    "overheidslaag": [overheidslaag[2], overheidslaag[1], overheidslaag[0]],
    content,
    introText,
    extraContent,
    beleid, 
    inkoop,
    grondpositie,
    subsidie,
    fiscaal,
    "expertise": [beleid, inkoop, grondpositie, subsidie, fiscaal],
  }
  `,
};

export const woningenQueries = {
  woningenLength: `
  count(*[_type == "measure" && thema == "woningen"])
  `,
  woningenThemaQuery: `
  *[_type == "simpleThema" && themaName == "Woningen"][0]{ 
    ...,
    "heroImage": heroImage.asset->.url,
    "heroImageMobile": heroImageMobile.asset->.url,
  }
  `,
  woningenInstrumentsQuery: `
  *[_type == "measure" && thema == "woningen"]| order(lower(titel) asc) {
    _id,
    titel,
    slug,
    thema,
    transitionAgenda,
    rLadder,
    subrechtsgebied,
    juridischInvloed,
    juridischeHaalbaarheid,
    rechtsgebied,
    "overheidslaag": [overheidslaag[2], overheidslaag[1], overheidslaag[0]],
    content,
    introText,
    extraContent,
    beleid, 
    inkoop,
    grondpositie,
    subsidie,
    fiscaal,
    "expertise": [beleid, inkoop, grondpositie, subsidie, fiscaal],
  }
  `,
};

// Queries to get information about the instruments
export const measureLayoutQuery = `
*[_type == "measure"]| order(lower(titel) asc) {
  _id,
  titel,
  slug,
  thema,
  rLadder,
  subrechtsgebied,
  juridischInvloed,
  juridischeHaalbaarheid,
  rechtsgebied,
  "overheidslaag": [overheidslaag[2], overheidslaag[1], overheidslaag[0]],
  content,
  introText,
  extraContent,
  beleid, 
  inkoop,
  grondpositie,
  subsidie,
  fiscaal,
  transitionAgenda,
  "expertise": [beleid, inkoop, grondpositie, subsidie, fiscaal]
}
`;

export const measurePagePathsQuery = `
*[_type == "measure" && defined(slug.current)][].slug.current
`;

export const measureQuery = `
*[_type == "measure" && slug.current == $slug] [0] {
    _id,
    titel,
    subtitel,
    slug,
    thema,
    rLadder,
    subrechtsgebied,
    juridischInvloed,
    invloedTooltipText,
    juridischeHaalbaarheid,
    JHTooltipText,
    rechtsgebied,
    citeertitel,
    artikel,
    artikelLink,
    lawDate,
    "overheidslaag": [overheidslaag[2], overheidslaag[1], overheidslaag[0]],
    content[]{
      ...,
      "greenBoxPText": coalesce(greenBoxPText[]{
        ...,
        markDefs[]{
          ...,
          _type == "internalLink" => {
          "thema": @.reference->thema,
        "slug": @.reference->slug,
        "transitionAgenda": @.reference->transitionAgenda   
          }
        }
      }
      ),
      "smallParaPText":coalesce(smallParaPText[]{
        ...,
        markDefs[]{
          ...,
          _type == "internalLink" => {
          "thema": @.reference->thema,
        "slug": @.reference->slug,
        "transitionAgenda": @.reference->transitionAgenda   
          }
        }
      }
      ),
      markDefs[]{
        ...,
        _type == "internalLink" => {
          "thema": @.reference->thema,
          "slug": @.reference->slug,
          "transitionAgenda": @.reference->transitionAgenda        
        }
      }
    },
    juridischeToelichting,
    beleid, 
    inkoop,
    grondpositie,
    subsidie,
    fiscaal,
    transitionAgenda,
}
`;

export function categorieQuery(thema) {
  const expertiseDataQuery = `
*[_type == "measure" && thema == "${thema}"] {
  "slug": slug.current,
  transitionAgenda, 
  thema,
  titel,
  "overheidslaag": [overheidslaag[2], overheidslaag[1], overheidslaag[0]],
  beleid,
  beleidSubCategory,
  inkoop,
  inkoopSubCategory,
  grondpositie,
  grondpositieSubCategory,
  subsidie,
  fiscaal,
  "slug": slug.current,
  transitionAgenda,
}
`;
  return expertiseDataQuery;
}

// Query for welke overheid pages
export function creatQuery(thema) {
  const welkQueries = {
    allRegions: `*[_type == "measure" && thema == "${thema}" && 
        "Gemeentelijk" in overheidslaag && 
        "Provinciaal" in overheidslaag && 
        "Nationaal" in overheidslaag]| 
        order(lower(titel) asc) {
          titel, 
          slug,
          thema,
          transitionAgenda,
        }`,
    national: `*[_type == "measure" && thema == "${thema}" && 
        length(overheidslaag) < 3 && 
        "Nationaal" in overheidslaag]| 
        order(lower(titel) asc) {
          titel, slug,  thema,
          transitionAgenda,
        }`,
    provincial: `*[_type == "measure" && thema == "${thema}" && 
        length(overheidslaag) < 3  && 
        "Provinciaal" in overheidslaag]| 
        order(lower(titel) asc) {
          titel,
          slug,   thema,
          transitionAgenda,
        }`,

    local: `*[_type == "measure" && thema == "${thema}" && 
        length(overheidslaag) < 3 && 
        "Gemeentelijk" in overheidslaag]| 
        order(lower(titel) asc) {
          titel, 
          slug,   thema,
          transitionAgenda,
        }`,
  };
  return welkQueries;
}

// Queries for about pages
export const aboutPagePathsQuery = `
*[_type == "aboutPage" && defined(slug.current)][].slug.current
`;

export const aboutPageQuery = `
*[_type == "aboutPage" && slug.current == $slug][0]{
    pageTitle,
    aboutPageContent,
    slug,
}
`;

export const aboutPagePreviewQuery = `
*[_type == "aboutPage" && slug.current == $slug][0]{
    pageTitle,
    aboutPageContent,
    slug,
    "aboutPageSlugs": *[_type == "siteConfig"][]{
      'aboutNavItems': overCirculaw->items[]{
      "slug": navigationItemUrl.internalLink->slug.current,
      "title": navigationItemUrl.internalLink->pageTitle
      }
    }.aboutNavItems[]
}
`;

// queries for FAQ page
export const FAQPageQuery = `
*[_type == "FAQpage"][0]{
  pageTitle,
  slug, 
  FAQPageContent,
}
`;

// Query for the english page
export const enPageQuery = `
*[_type == "englishPage"][0]{englishContent}
`;

// Query for the partners section of the footer
export const partnersQuery = `
*[_type == "partners"][0]{
  "knowledge": partners[]{partnerName, 
              partnerLink, 
              "logo": logo.asset->.url},
  "developingPartners": developingPartners[]{partnerName, 
    partnerLink, 
    "logo": logo.asset->.url},  
  "financingPartners": financingPartners[]{partnerName, 
    partnerLink, 
    "logo": logo.asset->.url}, 
      }
  `;

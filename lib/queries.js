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
*[_type == "thema"]{
  homePageCardText,
  themaName,
  homePageCardButtonText,
  homePageOrder,
  "mobImage": heroImageMobile.asset->.url,
  "image": homePageCardImage.asset->.url,
  "slug" : slug.current
} | order(homePageOrder asc)
`;

export const homePageHeaderQuery = `
*[_type == "siteConfig"][0]{
  headerText, 
  subHeader
}
`

export const footerQuery = `
*[_type == "siteConfig"][0]{
  footerText,
  footerLinkText,
}
`

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
    *[_type == "measure" && thema == "circulaire-matrasketen" && isFeatured == true]
    `,
  matrassenLength: `
    count(*[_type == "measure" && thema == "circulaire-matrasketen"])
    `,
  matressThemaQuery: `
    *[_type == "thema" && themaName == "Circulaire matrasketen"][0]{
      ...,
      "heroImage": heroImage.asset->.url,
      "heroImageMobile": heroImageMobile.asset->.url,
    }
    `,
};

export const windQueries = {
  windFeatured: `
*[_type == "measure" && thema == "circulaire-windturbines" && isFeatured == true]
`,

  windLength: `
count(*[_type == "measure" && thema == "circulaire-windturbines"])
`,

  windThemaQuery: `
*[_type == "thema" && themaName == "Circulaire windturbines"][0]{
  ...,
  "heroImage": heroImage.asset->.url,
  "heroImageMobile": heroImageMobile.asset->.url,
}
`,
};

export const houtbouwQueries = {
  houtbouwFeatured: `
*[_type == "measure" && thema == "houtbouw-stimuleren" && isFeatured == true]
`,

  houtbouwLength: `
count(*[_type == "measure" && thema == "houtbouw-stimuleren"])
`,

  houtbouwThemaQuery: `
*[_type == "thema" && themaName == "Houtbouw stimuleren"][0]{
  ...,
  "heroImage": heroImage.asset->.url,
  "heroImageMobile": heroImageMobile.asset->.url,
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
  overheidslaag,
  content,
  introText,
  extraContent,
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
    overheidslaag,
    content,
    juridischeToelichting,
}
`;

// Query for welke overheid pages
export function creatQuery(thema) {
  const welkQueries = {
    allRegions: `*[_type == "measure" && thema == "${thema}" && 
        "Gemeentelijk" in overheidslaag && 
        "Provinciaal" in overheidslaag && 
        "Nationaal" in overheidslaag]| 
        order(lower(titel) asc) {
          titel, 
          slug
        }`,
    national: `*[_type == "measure" && thema == "${thema}" && 
        length(overheidslaag) < 3 && 
        "Nationaal" in overheidslaag]| 
        order(lower(titel) asc) {
          titel, slug
        }`,
    provincial: `*[_type == "measure" && thema == "${thema}" && 
        length(overheidslaag) < 3  && 
        "Provinciaal" in overheidslaag]| 
        order(lower(titel) asc) {
          titel,
          slug
        }`,

    local: `*[_type == "measure" && thema == "${thema}" && 
        length(overheidslaag) < 3 && 
        "Gemeentelijk" in overheidslaag]| 
        order(lower(titel) asc) {
          titel, 
          slug
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
*[_type == "FAQpage"][0] {
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
    partners[]{partnerName, 
              partnerLink, 
              "logo": logo.asset->.url}
      }
  `;

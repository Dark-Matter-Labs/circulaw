export function creatQuery(thema) {
  const welkQueries = {
    allRegions: `*[_type == "measure" && thema == "${thema}" && 
        "Gemeentelijk" in overheidslaag && 
        "Provinciaal" in overheidslaag && 
        "Nationaal" in overheidslaag]| 
        order(lower(titel) asc)`,
    national: `*[_type == "measure" && thema == "${thema}" && 
        length(overheidslaag) < 3 && 
        "Nationaal" in overheidslaag]| 
        order(lower(titel) asc)`,
    provincial: `*[_type == "measure" && thema == "${thema}" && 
        length(overheidslaag) < 3  && 
        "Provinciaal" in overheidslaag]| 
        order(lower(titel) asc)`,

    local: `*[_type == "measure" && thema == "${thema}" && 
        length(overheidslaag) < 3 && 
        "Gemeentelijk" in overheidslaag]| 
        order(lower(titel) asc)`,
  };
  return welkQueries;
}

export const siteSettingsQuerys = {
  mainSettings: '*[_type == "siteConfig"]',
  overCirulaw: `*[_type == "siteConfig"][0]{
        'slugs': overCirculaw->items[].navigationItemUrl.internalLink->slug.current,
    }`,
  vraagAntwoord: `*[_type == "siteConfig"][0]{
        'slug': vraagAntwoord->items[0].navigationItemUrl.internalLink->slug.current
    }`,
  thema: `*[_type == "siteConfig"][0]{
    "slugs": themas->items[].navigationItemUrl.internalLink->slug.current,
  }`
};

export const measureLayoutQuery = '*[_type == "measure"]| order(lower(titel) asc)';

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

export const measurePagePathsQuery = `
*[_type == "measure" && defined(slug.current)][].slug.current
`;

export const measureQuery = `
*[_type == "measure" && slug.current == $slug] [0] {
    _id,
    titel,
    subtitel,
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

export const partnersQuery = `
*[_type == "partners"][0]{
    partners[]{partnerName, 
              partnerLink, 
              "logo": logo.asset->.url}
      }
  `;

export const matrassenQueries = {
  matrassenFeatured: `
    *[_type == "measure" && thema == "circulaire-matrasketen" && isFeatured == true]
    `,

  matrassenLength: `
    count(*[_type == "measure" && thema == "circulaire-matrasketen"])
    `,

  matressThemaQuery: `
    *[_type == "thema" && themaName == "Circulaire matrasketen"][0]
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
*[_type == "thema" && themaName == "Circulaire windturbines"][0]
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
*[_type == "thema" && themaName == "Houtbouw stimuleren"][0]
`,
};

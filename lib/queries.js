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

export function productChainQueryFunction(productChain) {
  const productChainQueries = {
    productChainPageQuery: `
    *[_type == "transitionAgenda" && slug.current == "${productChain}"][0] {
      ...,
      "impactItems": impactItems[]{
        ...,
        "image": image.asset->.url,
      },
      "ambitionItems": ambitionItems[]{
        ...,
        "image": image.asset->.url,
      },
    }
    `,
    totalNumberOfInstruments: `
    count(*[_type == "measure" && transitionAgenda->slug.current == "${productChain}"])
    `,
    themaData: `
    *[_type in ["thema", "simpleThema"] && transitionAgenda->slug.current == "${productChain}"] {
      themaName,
      homePageCardText,
      "slug": slug.current,
      transitionAgenda,
      "image": homePageCardImage.asset->.url,
      "mobileCardImage": homePageCardImageMobile.asset->url,
      "count": count(*[_type == "measure" && thema->slug.current == ^.slug.current || simpleThema->slug.current == ^.slug.current]),
    }
    `,
  };
  return productChainQueries;
}

// thema query can be improved to fetch less data
// featured query can be improved to fetch less data
export function themaQueryFunction() {
  const themaQueries = {
    featured: `
    *[_type == "measure" && thema->.slug.current == $thema && isFeatured == true]{
      ...,
      "transitionAgenda": transitionAgenda->.slug.current,
      "thema": thema->.slug.current,
      "featuredImage": featuredImage.asset->url,
    }
    `,
    length: `
    count(*[_type == "measure" && thema->.slug.current == $thema])
    `,
    themaQuery: `
      *[_type in ["thema", "simpleThema"] && slug.current == $thema][0]{
        ...,
        "heroImage": heroImage.asset->.url,
        "heroImageMobile": heroImageMobile.asset->.url,
        "transitionAgenda": transitionAgenda->.slug.current
      }
      `,
    instrumentsQuery: `
      *[_type == "measure" && thema->.slug.current == $thema]| order(lower(titel) asc) {
        _id,
        titel,
        slug,
        "transitionAgenda": transitionAgenda->.slug.current,
        "thema": thema->.slug.current,
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
  return themaQueries;
}

// simpleThema -- can delete
export function simpleThemaQueryFunction(thema) {
  const simpleThemaQueries = {
    length: `
    count(*[_type == "measure" && thema == "${thema}"])
    `,
    themaQuery: `
    *[_type == "simpleThema" && slug.current == "${thema}"][0]{ 
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
  };
  return simpleThemaQueries;
}

// Query to get data for list page
// refactor - add in thema and remove thema from filter.

export function instrumentListPageFunction() {
  const instrumentListPageQuery = `
    *[_type == "measure" && thema->.slug.current == $thema]| order(lower(titel) asc) {
      _id,
      titel,
      slug,
      "transitionAgenda": transitionAgenda->.slug.current,
      "thema": thema->.slug.current,
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
      "expertise": [beleid, inkoop, grondpositie, subsidie, fiscaal]
    }
    `;
  return instrumentListPageQuery;
}

// currently fetching all paths add thema filter in query.
export function instrumentPathsQueryFunction() {
  const pathsQuery = `
  *[_type == "measure" && defined(slug.current)][].slug.current
  `;
  return pathsQuery;
}

export const measureQuery = `
*[_type == "measure" && slug.current == $slug] [0] {
    _id,
    titel,
    subtitel,
    slug,
    "transitionAgenda": transitionAgenda->.slug.current,
    "thema": thema->.slug.current,
    "themaType": thema->._type,
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
          "thema": @.reference->thema->slug.current,
        "slug": @.reference->slug,
        "transitionAgenda": @.reference->transitionAgenda->.slug.current   
          }
        }
      }
      ),
      "smallParaPText":coalesce(smallParaPText[]{
        ...,
        markDefs[]{
          ...,
          _type == "internalLink" => {
          "thema": @.reference->thema->.slug.current,
        "slug": @.reference->slug,
        "transitionAgenda": @.reference->transitionAgenda->.slug.current   
          }
        }
      }
      ),
      markDefs[]{
        ...,
        _type == "internalLink" => {
          "thema": @.reference->thema->.slug.current,
          "slug": @.reference->slug,
          "transitionAgenda": @.reference->transitionAgenda->.slug.current        
        }
      }
    },
    juridischeToelichting,
    beleid, 
    inkoop,
    grondpositie,
    subsidie,
    fiscaal,
}
`;

export function categorieQuery() {
  const expertiseDataQuery = `
*[_type == "measure" && thema->.slug.current == $thema] {
  "slug": slug.current, 
  "transitionAgenda": transitionAgenda->.slug.current,
  "thema": thema->.slug.current,
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
 
}
`;
  return expertiseDataQuery;
}

// Query for welke overheid pages
export function govLevelQueryFunction() {
  const welkQueries = {
    allRegions: `*[_type == "measure" && thema->slug.current == $thema && 
        "Gemeentelijk" in overheidslaag && 
        "Provinciaal" in overheidslaag && 
        "Nationaal" in overheidslaag]| 
        order(lower(titel) asc) {
          titel, 
          slug,
          "transitionAgenda": transitionAgenda->.slug.current,
          "thema": thema->.slug.current,
        }`,
    national: `*[_type == "measure" && thema->slug.current == $thema && 
        length(overheidslaag) < 3 && 
        "Nationaal" in overheidslaag]| 
        order(lower(titel) asc) {
          titel, slug,   "transitionAgenda": transitionAgenda->.slug.current,
          "thema": thema->.slug.current,
        }`,
    provincial: `*[_type == "measure" && thema->slug.current == $thema && 
        length(overheidslaag) < 3  && 
        "Provinciaal" in overheidslaag]| 
        order(lower(titel) asc) {
          titel,
          slug,    "transitionAgenda": transitionAgenda->.slug.current,
          "thema": thema->.slug.current,
        }`,

    local: `*[_type == "measure" && thema->slug.current == $thema && 
        length(overheidslaag) < 3 && 
        "Gemeentelijk" in overheidslaag]| 
        order(lower(titel) asc) {
          titel, 
          slug,   "transitionAgenda": transitionAgenda->.slug.current,
          "thema": thema->.slug.current,
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

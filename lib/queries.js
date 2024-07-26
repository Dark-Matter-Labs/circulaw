// Queries thats gets arrays of slugs for navigation
export const NAV_QUERY = `
*[][0]{
  "aboutPages": *[_type == 'aboutPage']{
    pageTitle, 
    "slug": slug.current
  },
"themesAndProductChains": *[_type == 'navigation' && title == 'Product Chains']{
  'productChainItems': items[]{
  "slug": navigationItemUrl.internalLink->slug.current,
  "title": navigationItemUrl.internalLink->pcName,
  "themas": *[_type in ["thema", "simpleThema"] && transitionAgenda->pcName == ^.navigationItemUrl.internalLink->pcName] {
    "themaName": themaName,
    "slug": slug.current,
    }
  }
}.productChainItems[],
"EUSlugs":  *[_type == "euLaw"]{
    "slug": slug.current,
    title,
  },
  "footerText": *[_type == "siteConfig"][0]{
  footerText,
  footerLinkText,
}
}
`;

export const HOME_PAGE_QUERY = `
 *[_type in ['siteConfig', 'transitionAgenda', 'newsPage']][0] {
  "pcHomePageQuery": *[_type == 'transitionAgenda']  | order(order asc) {
  pcName,
  order,
  "image": homepageImage.asset->.url,
  "alt": homepageImage.altText,
  "slug": slug.current, 
  cardText, 
  "themaCount": count(*[_type in ["thema", "simpleThema"] && ^.slug.current == transitionAgenda->slug.current]) 
},
"euData": *[_type == "siteConfig"][0]{
  euLaw, 
  "image": euLawImage.asset->url
}, 
"newsItems": *[_type == 'newsPage'][0] {
    "featured": newsItems[featured == true]{
      ...,
      "image": newsImage.asset->.url
    },
      "notFeatured": newsItems[featured != true]{
        ...,
        "image": newsImage.asset->.url
    },
  },
"aboutSection": 
*[_type == "siteConfig"][0]{
  "aboutSectionSlug": aboutSectionPage->slug.current,
  aboutSectionMobileText,
  aboutSectionText,
  aboutSectionTitle,
}
 }
`;

// EU Law queries
export const EU_LAW_OVERVIEW_QUERY = `
  *[_type == "euLaw"]{
    slug, 
    title, 
    introText,
    statusStep,
    statusTwoStep, 
    statusThreeStep, 
  }
`;

export const EU_LAW_PATHS_QUERY = `
*[_type =="euLaw" && defined(slug.current)][].slug.current
`;

export const LAW_SUMMARY_QUERY = `
*[_type =="euLaw" && slug.current == $law][0] {
    ..., 
    "introImage": introImage.asset->.url,
}
`;

export const LAW_TAB_QUERY = `
*[_type in ['euEuropeTab', 'euCircularEconomyTab', 'euLocalTab'] && euLawReference->.slug.current == $law] {
  ...,  
}
`;

// Queries for the home page section
export const NEWS_ITEMS_QUERY = `
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

// PC Queryes

export const PC_PATHS_QUERY = `
*[_type == "productChain" && defined(slug.current)][].slug.current
`;

export const PRODUCT_CHAIN_PAGE_QUERY = `
*[_type == "transitionAgenda" && slug.current == $productChain][0] {
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
`;

export const THEMES_BY_PC_QUERY = `
*[_type in ["thema", "simpleThema"] && transitionAgenda->slug.current == $productChain] {
  themaName,
  homePageCardText,
  "slug": slug.current,
  "transitionAgenda": transitionAgenda->slug.current,
  "image": homePageCardImage.asset->.url,
  "mobileCardImage": homePageCardImageMobile.asset->url,
  "count": count(*[_type == "instrument" && thema->slug.current == ^.slug.current || simpleThema->slug.current == ^.slug.current]),
  "totalNumberInstruments": count(*[_type == "instrument" && transitionAgenda->slug.current == $productChain])
}
`;

// theme queries
export const THEME_PATHS_QUERY = `
*[_type in ["thema", "simpleThema"] && defined(slug.current)]{
    "thema": slug.current,
     "productChain": transitionAgenda->.slug.current,
     themaName
  }
`;

export const THEME_QUERY = `
*[_type in ["thema", "simpleThema"] && slug.current == $thema][0] { 
  "featured": *[_type == "instrument" && thema->.slug.current == $thema && isFeatured == true]{
      titel,
      slug, 
      "transitionAgenda": transitionAgenda->.slug.current,
      "thema": thema->.slug.current,
      "featuredImage": featuredImage.asset->url,
      rLadder,
      introText,
      juridischInvloed,
      juridischeHaalbaarheid,
      "overheidslaag": [overheidslaag[2], overheidslaag[1], overheidslaag[0]],
    },
    "length": count(*[_type == "instrument" && thema->.slug.current == $thema]),
    "thema": *[_type in ["thema", "simpleThema"] && slug.current == $thema][0]{
      ...,
      featureInstrumentSubtitle,
      featuredInstrumentTitle,
      headerLink, 
      linkText, 
      listText, 
      overviewsTitle,
      samenhangText, 
      samenhangTitle, 
      slug,
      themaName,
      themaSubtitle,
      welkeText, 
      welkeTitle,
      "heroImage": heroImage.asset->.url,
      "heroImageMobile": heroImageMobile.asset->.url,
      "transitionAgenda": transitionAgenda->.slug.current,
      themePageReport,

    },
    "instruments": *[_type == "instrument" && thema->.slug.current == $thema && thema->._type == 'simpleThema']| order(lower(titel) asc) {
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
    }}
`;

export const GOV_LEVEL_QUERY = `
    *[_type == 'instrument' && thema->slug.current == $thema][0]{
    "allRegions": *[_type == "instrument" && thema->slug.current == $thema && 
          "Gemeentelijk" in overheidslaag && 
          "Provinciaal" in overheidslaag && 
          "Nationaal" in overheidslaag]| 
          order(lower(titel) asc) {
            titel, 
            slug,
            "transitionAgenda": transitionAgenda->.slug.current,
            "thema": thema->.slug.current,
          },
    "national": *[_type == "instrument" && thema->slug.current == $thema && 
          length(overheidslaag) < 3 && 
          "Nationaal" in overheidslaag]| 
          order(lower(titel) asc) {
            titel, slug,   "transitionAgenda": transitionAgenda->.slug.current,
            "thema": thema->.slug.current,
          },
    "provincial":  *[_type == "instrument" && thema->slug.current == $thema && 
          length(overheidslaag) < 3  && 
          "Provinciaal" in overheidslaag]| 
          order(lower(titel) asc) {
            titel,
            slug,    "transitionAgenda": transitionAgenda->.slug.current,
            "thema": thema->.slug.current,
          },
    "local": *[_type == "instrument" && thema->slug.current == $thema && 
          length(overheidslaag) < 3 && 
          "Gemeentelijk" in overheidslaag]| 
          order(lower(titel) asc) {
            titel, 
            slug,   "transitionAgenda": transitionAgenda->.slug.current,
            "thema": thema->.slug.current,
          }
    }
`;

export const totalNumberOfInstrumentsPerThema = `
count(*[_type == "measure" && thema->.slug.current == $thema])
`;

// Query to get data for list page
export function instrumentListPageFunction() {
  const instrumentListPageQuery = `
    *[_type == "instrument" && thema->.slug.current == $thema]| order(lower(titel) asc) {
      _id,
      titel,
      slug,
      "transitionAgenda": transitionAgenda->.slug.current,
      "thema": thema->.slug.current,
      rLadder,
      juridischInvloed,
      juridischeHaalbaarheid,
      "overheidslaag": [overheidslaag[2], overheidslaag[1], overheidslaag[0]],
      "content": pt::text(content),
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

export const instrumentQuery = `
*[_type == "instrument" && slug.current == $slug] [0] {
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


export const CATEGORIE_PAGE_QUERY = `
*[_type == "instrument" && thema->.slug.current == $thema] {
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
`

// Queries for about pages
export const ABOUT_PAGE_PATHS_QUERY = `
*[_type == "aboutPage" && defined(slug.current)][].slug.current
`;

export const ABOUT_PAGE_QUERY = `
*[_type == "aboutPage" && slug.current == $slug][0]{
    pageTitle,
    aboutPageContent,
    slug,
    "slugs": *[_type == 'aboutPage']{"slug": slug.current, pageTitle}
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
export const PARTNERS_QUERY = `
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

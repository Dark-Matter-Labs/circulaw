export const SITEMAP_QUERY = `
*[_type in ['aboutPage', 'instrument', 'euLaw', 'thema', 'simpleThema', 'transitionAgenda', 'newsPage']][0] {
'instrument':*[_type == 'instrument']{"URL": '/' + lower(transitionAgenda->slug.current) + '/' + lower(thema->slug.current) + '/instrumenten/' + slug.current}, 
'about': *[_type == 'aboutPage']{"URL": '/over/' + lower(slug.current)},
'eu': *[_type == 'euLaw']{"URL": '/eu-wetgeving/' + lower(slug.current)},
'pcs': *[_type == 'transitionAgenda']{"URL": '/' + lower(slug.current)},
'themas': *[_type in ['thema', 'simpleThema']]{"URL": '/' + lower(transitionAgenda->slug.current) + '/' + lower(slug.current)},
'news' :  *[_type == 'newsItem' && createPage == true]{
"URL": '/nieuws/' + slug.current, 
}
}
`;

// Queries thats gets arrays of slugs for navigation
export const NAV_QUERY = `
*[][0]{
  "aboutPages": *[_type == 'aboutPage']|order(orderRank) {
    'slug': slug.current,
    pageTitle,
  },
"themesAndProductChains": *[_type == 'transitionAgenda'] | order(order asc) {
  'title': pcName,
  'slug': slug.current,
  'themas': *[_type in ['thema', 'simpleThema'] && transitionAgenda->pcName == ^.pcName] | order(homePageOrder asc) {
    "themaName": themaName,
    "slug": slug.current,
    new,
  } 
},
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
  "pcHomePageQuery": *[_type == 'transitionAgenda']  | order(orderRank asc) {
  pcName,
  order,
  "image": homepageImage.asset->.url,
  "metadata": homepageImage.asset->metadata,
  "alt": homepageImage.altText,
  "slug": slug.current, 
  cardText, 
  "themaCount": count(*[_type in ["thema", "simpleThema"] && ^.slug.current == transitionAgenda->slug.current]) 
},
"euData": *[_type == "siteConfig"][0]{
  euLaw, 
  "image": euLawImage.asset->url,
  "metadata": euLawImage.asset->metadata,
}, 
"newsItems": *[_type == 'newsItem' && isFeatured == true]|order(orderRank) {
  "image": newsImage.asset->.url,
  "metadata": newsImage.asset->metadata,
  ...
},
"latestContent": *[_type in ['thema', 'simpleThema', 'euLaw']][0..5] | order(_createdAt desc) {
  themaName, 
  "slug": slug.current, 
  _type,
  _createdAt,
  "productChain": transitionAgenda->slug.current
}
 }
`;

// EU Law queries
export const EU_LAW_METADATA_QUERY = `
*[_type == 'euLaw' && slug.current == $law][0] {
  metaTitle,
  metaDescribe, 
  title,
  introText,
  'slug': slug.current,
}
`;

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

// Queries for the News section
export const NEWS_SLUGS_QUERY = `
*[_type == "newsItem" && defined(slug.current) && hasPage == true][].slug.current
`;

export const NEWS_DETAIL_PAGE_QUERY = `
*[_type == "newsItem" && slug.current == $slug && hasPage == true][0] {
...,
}
`;

export const NEWS_METADATA_QUERY = `
*[_type == "newsItem" && slug.current == $slug][0] {
       title, 
      'slug': slug.current
}
`;

// PC Queryes
export const PC_PATHS_QUERY = `
*[_type == "transitionAgenda" && defined(slug.current)][].slug.current
`;

export const PRODUCT_CHAIN_PAGE_QUERY = `
*[_type == "transitionAgenda" && slug.current == $productChain][0] {
  ...,
  "impactItems": impactItems[]{
    ...,
    "image": image.asset->.url,
    "metadata": image.asset->metadata,
  },
  "ambitionItems": ambitionItems[]{
    ...,
    "image": image.asset->.url,
    "metadata": image.asset->metadata,
  },
}
`;

export const THEMES_BY_PC_QUERY = `
*[_type in ["thema", "simpleThema"] && transitionAgenda->slug.current == $productChain] | order(homePageOrder asc) {
  themaName,
  homePageCardText,
  "slug": slug.current,
  "transitionAgenda": transitionAgenda->slug.current,
  "image": homePageCardImage.asset->.url,
  "metadata": homePageCardImage.asset->metadata,
  "mobileCardImage": homePageCardImageMobile.asset->url,
  "count": count(*[_type == "instrument" && thema->slug.current == ^.slug.current || simpleThema->slug.current == ^.slug.current]),
  "totalNumberInstruments": count(*[_type == "instrument" && transitionAgenda->slug.current == $productChain]),
  new,
}
`;

export const PRODUCT_CHAIN_METADATA_QUERY = `
*[_type == "transitionAgenda" && slug.current == $productChain][0] {
  metaTitle,
  metaDescribe,
  pcName,
  'slug': slug.current
}
`;

// theme queries
export const THEME_METADATA_QUERY = `
*[_type in ['thema', 'simpleThema'] && slug.current == $thema][0] {
  metaTitle,
  metaDescribe,
  themaName,
  'slug': slug.current,
  'productChain': transitionAgenda->slug.current
} 
`;

export const THEME_PATHS_QUERY = `
*[_type in ["thema", "simpleThema"] && defined(slug.current)]{
    "thema": slug.current,
     "productChain": transitionAgenda->.slug.current,
     themaName
  }
`;

export const FUll_THEME_PATHS_QUERY = `
*[_type == 'thema' && defined(slug.current)]{
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
      "metadata": featuredImage.asset->metadata,
      rLadder,
      "introText": coalesce(introText, subtitel),
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
      "metadata": heroImage.asset->metadata,
      "heroImageMobile": heroImageMobile.asset->.url,
      "transitionAgenda": transitionAgenda->.slug.current,
      themePageReport,
      themeSponsors,
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
      "introText": coalesce(introText, subtitel),
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

export const INSTRUMENT_META_DATA = `
*[_type == 'instrument' && slug.current == $slug][0] {
  metaTitle,
  metaDescribe, 
  titel, 
  'productChain': transitionAgenda->.slug.current,
  'thema': thema->.slug.current,
  'slug': slug.current,
  subtitel
}
`;

export const INSTRUMENT_PATHS_QUERY = `
    *[_type == "instrument" && defined(slug.current)]{
      "slug": slug.current,
      "thema": coalesce(*[_id == ("drafts." + ^.thema._ref)][0].slug.current, thema->.slug.current),
      "productChain": transitionAgenda->.slug.current,
    }
    `;

export const INSTRUMENT_PAGE_QUERY = `
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
      "content": coalesce(content[]{
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
      "content":coalesce(content[]{
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
    "modelTexts": *[_type == 'modelText' && ^.slug.current in linkedInstruments[]->slug.current]{
        ...,
          'slug': slug.current,
  'pillar': pillar->slug.current,
  'modelTextPT': pt::text(modelText),
  'descriptionPT': pt::text(description),
  'linkedInstruments': linkedInstruments[]->
    {titel, 'slug': slug.current, 'transitionAgenda':transitionAgenda->slug.current, 'thema': thema->slug.current , }
    },
}
`;

export const CATEGORIE_PAGE_QUERY = `
*[_type == "instrument" && thema->.slug.current == $thema] {
  "slug": slug.current, 
  "transitionAgenda": transitionAgenda->.slug.current,
  "thema": thema->.slug.current,
  'themaName': thema->.themaName,
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

// Queries for about pages
export const ABOUT_PAGE_PATHS_QUERY = `
*[_type == "aboutPage" && defined(slug.current)][].slug.current
`;

export const ABOUT_PAGE_QUERY = `
*[_type == "aboutPage" && slug.current == $slug][0]{
  _id,
  pageTitle,
  slug,
  ...,
  content[]{
  ...,
  _type == "partnersSection" => {
    ...,
    "partnersData": reference->{
      _id,
      _type,
      partners,
      developingPartners,
      financingPartners
    }
  }
},
  "pages": *[_type == "aboutPage"] | order(orderRank asc) {
    "href": '/over/' + slug.current,
    "name": pageTitle,
  },
}
`;

// queries for FAQ page
export const FAQ_PAGE_QUERY = `
*[_type == "FAQpage"][0]{
  pageTitle,
  slug, 
  FAQPageContent,
}
`;

// Query for the partners section of the footer
export const PARTNERS_QUERY = `
*[_type == "partners"][0]{
  "knowledge": partners[]{partnerName, 
              partnerLink, 
              "metadata": logo.asset->metadata,
              "logo": logo.asset->.url},
  "developingPartners": developingPartners[]{partnerName, 
    partnerLink, 
    "logo": logo.asset->.url},  
  "financingPartners": financingPartners[]{partnerName, 
    partnerLink, 
    "logo": logo.asset->.url}, 
      }
  `;

export const FEATURED_NEWS_ITEMS_QUERY = `
*[_type == 'newsItem' && isFeatured == true]|order(orderRank) {
  "image": newsImage.asset->.url,
  "metadata": newsImage.asset->metadata,
  ...
}
`;

export const NON_FEATURED_NEWS_ITEMS_QUERY = `
*[_type == 'newsItem' && isFeatured == false]|order(orderRank) {
  "image": newsImage.asset->.url,
  "metadata": newsImage.asset->metadata,
  ...
}
`;

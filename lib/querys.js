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
    }
    return welkQueries
}

export const siteSettingsQuerys = {
    mainSettings: '*[_type == "siteConfig"]'
    ,
    overCirulaw: `*[_type == "siteConfig"][0]{
        'slugs': overCirculaw->items[].navigationItemUrl.internalLink->slug.current,
    }`,
    vraagAntwoord: `*[_type == "siteConfig"][0]{
        'slug': vraagAntwoord->items[0].navigationItemUrl.internalLink->slug.current
    }`,
    
}

export const measureLayoutQuery = '*[_type == "measure"]| order(lower(titel) asc)'

export const aboutPagePathsQuery = `
*[_type == "aboutPage" && defined(slug.current)][].slug.current
`

export const aboutPageQuery = `
*[_type == "aboutPage" && slug.current == $slug][0]{
    pageTitle,
    aboutPageContent,
    slug,
}
`
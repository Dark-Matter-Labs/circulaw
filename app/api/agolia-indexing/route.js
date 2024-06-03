import { client } from '@/lib/sanity';
import algoliasearch from 'algoliasearch';

// need to hide this route. 


export const agoliaInstance = algoliasearch(
    process.env.AGOLIA_APPLICATION_ID,
    process.env.AGOLIA_ADMIN_KEY,
)
    
const QUERY = `
*[_type == "instrument" && !(_id in path('drafts.**'))] {
    _type,
    _rev,
    "objectID": _id,
    _createdAt,
    titel,
    subtitel,
    subrechtsgebied,
    citeertitel,
    "content": pt::text(content),
    "slug": slug.current,
    "transitionAgenda":transitionAgenda->pcName,
    "thema": thema->themaName,
    extraContent,
    overheidslaag,
    juridischInvloed,
    juridischeHaalbaarheid,
    rLadder,
    rechtsgebied,
    subrechtsgebied,
    "categorie": [select(beleid == true => "beleid"), 
          select(inkoop == true => "inkoop"),
          select(grondpositie == true => "grondpositie"),
          select(subsidie == true => "subsidie"),
          select(fiscaal == true => "fiscaal")],
  }
`

const NEWS_QUERY = `
*[_type == "newsPage"][0] {
    newsItems[_type == "newsCard"]{
      "parentID": ^._id,
      "objectID": _key,
      category,
      newsTitle,
      newsText,
      "content": pt::text(content)
    }
  }
`

export async function GET() {
    // fetch instruments 
    const instruments = await client.fetch(QUERY)
    const newsItems = await client.fetch(NEWS_QUERY)
    const instrumentIndex = agoliaInstance.initIndex('instruments')
    const newsIndex  = agoliaInstance.initIndex('newsPage')

    try {
        console.time(`Saving ${instruments.length} instruments and ${newsItems.newsItems.length} news items to index`)
        await instrumentIndex.saveObjects(instruments) 
        await newsIndex.saveObjects(newsItems.newsItems)
          // here it is newsItems.newsItems to structure the data as a array and not an object
        console.timeEnd(`Saving ${instruments.length} instruments and ${newsItems.newsItems.length} news items to index`)
        return Response.json({
            status: 200,
            body: 'Success!'
        })
    } catch (error) {
        console.error(error)
        return {
            status: 500,
            body: error
        }
    }
}

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

export async function GET() {
    // fetch instruments 
    const instruments = await client.fetch(QUERY)


    const index = agoliaInstance.initIndex('instruments')

    try {
        console.time(`Saving ${instruments.length} documents to index`)
        await index.saveObjects(instruments)
        console.timeEnd(`Saving ${instruments.length} documents to index`)
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

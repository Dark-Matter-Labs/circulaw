import { client } from '@/lib/sanity';
import algoliasearch from 'algoliasearch';
import indexer from 'sanity-algolia';

export const agoliaInstance = algoliasearch(
    process.env.AGOLIA_APPLICATION_ID,
    process.env.AGOLIA_ADMIN_KEY,
)

const PROJECTION = `{
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
    "Categorie": [beleid, inkoop, grondpositie, subsidie, fiscaal],
    beleid,
    inkoop,
    grondpositie,
    subsidie,
    fiscaal,
}`
    


export async function POST(req) {
    const index = agoliaInstance.initIndex('instruments')

    
    const sanityAgolia = indexer(
        {
            instrument: {
                index, 
                projection: PROJECTION,
            }
        },

        (document) => document,
    )

    return sanityAgolia
        .webhookSync(client, req.body)
        .then(() => ({
            status:200,
            body: 'Sucess!'
        }))
        .catch(() => ({
            status: 500, 
            body: 'Something went wrong'
        }))

}


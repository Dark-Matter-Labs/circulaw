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
    


export async function POST(req, res) {
    const index = agoliaInstance.initIndex('instruments')
    console.log(req, res)
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
        .then(() => res.status(200).send('ok'))
        // eslint-disable-next-line
        .catch(err => {
      return {
        statusCode: 500,
        body: JSON.stringify({message: 'Something went wrong'})
      }
    })

}


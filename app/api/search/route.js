import { client } from '@/lib/sanity';
import algoliasearch from 'algoliasearch';
import indexer from 'sanity-algolia';

export const agoliaInstance = algoliasearch(
    process.env.AGOLIA_APPLICATION_ID,
    process.env.AGOLIA_ADMIN_KEY,
)

const PROJECTION = `
    _type,
    _rev,
    "objectID": _id,
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
    beleid,
    inkoop,
    grondpositie,
    subsidie,
    fiscaal,
`
    

export async function POST(req) {
    console.log(req)
    try {
        const sanityAgolia = indexer(
            {
                instrument: {
                    index: agoliaInstance.initIndex('instruments'),
                    projection: PROJECTION,

                }
            },
            (document) => {
                console.log(document)
                switch (document._type) {
                    case 'instrument': 
                        return {
                            objectID: document.objectID,
                            titel: document.titel,
                            subtitel: document.subtitel,
                            subrechtsgebied: document.subrechtsgebied,
                            citeertitel: document.citeertitel,
                            content: document.content,
                            slug: document.slug,
                            transitionAgenda: document.transitionAgenda,
                            thema: document.thema,
                            extraContent: document.extraContent,
                            overheidslaag: document.overheidslaag,
                            juridischInvloed: document.juridischInvloed,
                            juridischeHaalbaarheid: document.juridischeHaalbaarheid,
                            rLadder: document.rLadder,
                            rechtsgebied: document.rechtsgebied,
                            beleid: document.beleid,
                            inkoop: document.inkoop,
                            grondpositie: document.grondpositie,
                            subsidie: document.subsidie,
                            fiscaal: document.fiscaal,
                        };
                    default: 
                        return document
                }
            }
        );
        const body = await req.json()

        const webhook = await sanityAgolia.webhookSync(client, body)

        return webhook && Response.json({message: 'success!'})
        
    
            
    } catch (err) {
        let error_response = 
        {status: 'error',
            msg: err
        };
        return new Response(JSON.stringify(error_response))
    }
}



{/*

export async function POST(req) {
   
    const index = agoliaInstance.initIndex('instruments')
    console.log(req)
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


*/}

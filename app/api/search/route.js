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
    "categorie": [select(beleid == true => "beleid"), 
          select(inkoop == true => "inkoop"),
          select(grondpositie == true => "grondpositie"),
          select(subsidie == true => "subsidie"),
          select(fiscaal == true => "fiscaal")],
        }`




export async function POST(req) {
    console.log(req)
    try {
        const sanityAgolia = indexer(
            {
                instrument: {
                    index: agoliaInstance.initIndex('instruments'),
                    projection: PROJECTION,

                }, 
                newsPage: {
                    index: agoliaInstance.initIndex('newsPage'),
                    projection: `{
                        "newsItems": newsItems[_type == "newsCard"] {
                            "objectID": _key
                            newsTitle, 
                            category,
                            newsText,
                            "slug": slug.current,
                            "content": pt::text(content)
                        }
                    }`
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
                            categorie: document.categorie,
                        };
                    case 'newsPage': {
                        return {
                            objectID: document[0].newsItems.objectID,
                            newsTitle: document[0].newsItems.newsTitle
                        }
                    }
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
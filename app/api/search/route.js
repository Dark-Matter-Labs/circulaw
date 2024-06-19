import { client } from '@/lib/sanity';
import algoliasearch from 'algoliasearch';
import indexer from 'sanity-algolia';
import { NextResponse } from 'next/server';
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
    try {
        const sanityAgolia = indexer(
            {
                instrument: {
                    index: agoliaInstance.initIndex('instruments'),
                    projection: PROJECTION,

                }, 
                aboutPage: {
                    index: agoliaInstance.initIndex('aboutPage'),
                    projection: `
                        {
                            "objectID": _id,
                            pageTitle, 
                            "slug": slug.current,
                            "content": array::join(string::split((pt::text(aboutPageContent)), "")[0..9500], "")
                          }
                    `
                }
            },

            (document) => {
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
                    case 'aboutPage': {
                        return {
                            objectID: document.objectID,
                            pageTitle: document.pageTitle,
                            slug: document.slug,
                            content: document.content,
                        }
                    }
                    default: 
                        return document
                }
            }
        );


        const body = await req.json()
        
        const webhook = await sanityAgolia.webhookSync(client, body)

        return webhook.then(() => NextResponse.json({message: 'success!'})) 

    } catch (err) {
        let error_response = 
        {status: 'error',
            msg: err
        };
        return new Response(JSON.stringify(error_response))
    }
}
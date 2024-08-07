import { client } from '@/lib/sanity';
import algoliasearch from 'algoliasearch';
import indexer from 'sanity-algolia';
import { NextResponse } from 'next/server';

export const agoliaInstance = algoliasearch(
  process.env.NEXT_PUBLIC_AGOLIA_APPLICATION_ID,
  process.env.NEXT_PUBLIC_AGOLIA_ADMIN_KEY,
);

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
        }`;

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
                    `,
        },

        euLaw: {
         index: agoliaInstance.initIndex('EuLaw'),
         projection: `
          {
          "objectID": _id,
            'lawTitle': coalesce(euLawReference->title, title),
            'slug': coalesce(euLawReference->slug.current, slug.current),
            defined(introText) => introText,
            'eu1Content': *[_type == 'euEuropeTab' && euLawReference._ref == ^._id][0] {'eu1Content': array::join(string::split((pt::text(europeContent[0].content)), "")[0..6000], "")}.eu1Content,
            'eu2Content': *[_type == 'euEuropeTab' && euLawReference._ref == ^._id][0] {'eu1Content': array::join(string::split((pt::text(europeContent[1].content)), "")[0..6000], "")}.eu2Content,
            'eu3Content': *[_type == 'euEuropeTab' && euLawReference._ref == ^._id][0] {'eu1Content': array::join(string::split((pt::text(europeContent[2].content)), "")[0..6000], "")}.eu3Content,
            'eu4Content': *[_type == 'euEuropeTab' && euLawReference._ref == ^._id][0] {'eu1Content': array::join(string::split((pt::text(europeContent[3].content)), "")[0..6000], "")}.eu4Content,
            'eu5Content': *[_type == 'euEuropeTab' && euLawReference._ref == ^._id][0] {'eu1Content': array::join(string::split((pt::text(europeContent[4].content)), "")[0..6000], "")}.eu5Content,
            'eu6Content': *[_type == 'euEuropeTab' && euLawReference._ref == ^._id][0] {'eu1Content': array::join(string::split((pt::text(europeContent[5].content)), "")[0..6000], "")}.eu6Content,
            'eu7Content': *[_type == 'euEuropeTab' && euLawReference._ref == ^._id][0] {'eu1Content': array::join(string::split((pt::text(europeContent[6].content)), "")[0..6000], "")}.eu7Content,
            'eu8Content': *[_type == 'euEuropeTab' && euLawReference._ref == ^._id][0] {'eu1Content': array::join(string::split((pt::text(europeContent[7].content)), "")[0..6000], "")}.eu8Content,
            'eu1Title': *[_type == 'euEuropeTab' && euLawReference._ref == ^._id][0] {"eu1Title": europeContent[0].title,}.eu1Title,
            'eu2Title': *[_type == 'euEuropeTab' && euLawReference._ref == ^._id][0] {"eu2Title": europeContent[1].title,}.eu2Title,
            'eu3Title': *[_type == 'euEuropeTab' && euLawReference._ref == ^._id][0] {"eu3Title": europeContent[2].title,}.eu3Title,
            'eu4Title': *[_type == 'euEuropeTab' && euLawReference._ref == ^._id][0] {"eu4Title": europeContent[3].title,}.eu4Title,
            'eu5Title': *[_type == 'euEuropeTab' && euLawReference._ref == ^._id][0] {"eu5Title": europeContent[4].title,}.eu5Title,
            'eu6Title': *[_type == 'euEuropeTab' && euLawReference._ref == ^._id][0] {"eu6Title": europeContent[5].title,}.eu6Title,
            'eu7Title': *[_type == 'euEuropeTab' && euLawReference._ref == ^._id][0] {"eu7Title": europeContent[6].title,}.eu7Title,
            'eu8Title': *[_type == 'euEuropeTab' && euLawReference._ref == ^._id][0] {"eu8Title": europeContent[7].title,}.eu8Title,
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
            };
          }
          default:
            return document;
        }
      },
    );

    const body = await req.json();

    const webhook = await sanityAgolia.webhookSync(client, body);

    return webhook.then(() => NextResponse.json({ message: 'success!' }));
  } catch (err) {
    let error_response = { status: 'error', msg: err };
    return new Response(JSON.stringify(error_response));
  }
}

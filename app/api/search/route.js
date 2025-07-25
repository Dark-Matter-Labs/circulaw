import { NextResponse } from 'next/server';

import { client } from '@/lib/sanity';
import algoliasearch from 'algoliasearch';
import indexer from 'sanity-algolia';

export const agoliaInstance = algoliasearch(
  process.env.NEXT_PUBLIC_AGOLIA_APPLICATION_ID,
  process.env.NEXT_PUBLIC_AGOLIA_ADMIN_KEY,
);

const INSTRUMENT_PROJECTION = `{
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

const EU_LAW_SUMMARY_PROJECTION = `{
      "objectID": _id,
      "searchTitle": coalesce(euLawReference->title, title) + ' - ' + title,
      "lawTitle": coalesce(euLawReference->title, title),
      "slug": coalesce(euLawReference->slug.current, slug.current),
      introText,
      "searchImage": searchImage.asset->url
    }`;

const NEWS_ITEM_PROJECTION = `{
    'objectID': _id,
    'content': pt::text(content),
    title,
    newsText,
    newsDate,
    newsOrAgenda,
    'newsImage': newsImage.asset->url,
    'slug': slug.current,
    link, 
    category,
    linkUrl,
}`;

const EU_LAW_EU_TAB_PROJECTION = `{
      "objectID": _id,
      'lawTitle': coalesce(euLawReference->title, title),
      'searchTitle': coalesce(euLawReference->title, title) + ' - ' + title,
      'searchImage': euLawReference->searchImage.asset->url,
      'slug': coalesce(euLawReference->slug.current, slug.current),
      'eu1Content': array::join(string::split((pt::text(europeContent[0].content)), "")[0..5500], ""), 
      'eu2Content': array::join(string::split((pt::text(europeContent[2].content)), "")[0..5500], ""),
      'eu3Content': array::join(string::split((pt::text(europeContent[3].content)), "")[0..5500], ""), 
      'eu4Content': array::join(string::split((pt::text(europeContent[4].content)), "")[0..5500], ""), 
      'eu5Content': array::join(string::split((pt::text(europeContent[5].content)), "")[0..5500], ""), 
      'eu6Content': array::join(string::split((pt::text(europeContent[6].content)), "")[0..5500], ""), 
      'eu7Content': array::join(string::split((pt::text(europeContent[7].content)), "")[0..5500], ""), 
      'eu8Content': array::join(string::split((pt::text(europeContent[8].content)), "")[0..5500], ""), 
      'eu1Title': europeContent[0].title,
      'eu2Title': europeContent[1].title,
      'eu3Title': europeContent[2].title,
      'eu4Title': europeContent[3].title,
      'eu5Title': europeContent[4].title,
      'eu6Title': europeContent[5].title,
      'eu7Title': europeContent[6].title,
      'eu8Title': europeContent[7].title,
}`;

const EU_LAW_CIRC_TAB_PROJECTION = `{
      "objectID": _id,
      'lawTitle': coalesce(euLawReference->title, title),
      'searchTitle': coalesce(euLawReference->title, title) + ' - ' + title,
      'searchImage': euLawReference->searchImage.asset->url,
      'slug': coalesce(euLawReference->slug.current, slug.current),
      "ceContent": pt::text(ceContent),
}`;

const EU_LAW_LOCAL_TAB_PROJECTION = `{
      "objectID": _id,
      'lawTitle': coalesce(euLawReference->title, title),
      'searchTitle': coalesce(euLawReference->title, title) + ' - ' + title,
      'searchImage': euLawReference->searchImage.asset->url,
      'slug': coalesce(euLawReference->slug.current, slug.current),
      'localContent1': pt::text(localContent[0].content),
      'localContent2': pt::text(localContent[1].content),
      'localContent3': pt::text(localContent[2].content),
      'localContent4': pt::text(localContent[3].content),
      'localContent5': pt::text(localContent[4].content),
      'localContent6': pt::text(localContent[5].content),
      'localContent7': pt::text(localContent[6].content),
      'localContent8': pt::text(localContent[7].content),
      'localTitle1': localContent[0].title,
      'localTitle2': localContent[1].title,
      'localTitle3': localContent[2].title,
      'localTitle4': localContent[3].title,
      'localTitle5': localContent[4].title,
      'localTitle6': localContent[5].title,
      'localTitle7': localContent[6].title,
      'localTitle8': localContent[7].title,
}`;

// clTab
// localTab

export async function POST(req) {
  try {
    const sanityAgolia = indexer(
      {
        instrument: {
          index: agoliaInstance.initIndex('instruments'),
          projection: INSTRUMENT_PROJECTION,
        },
        euLaw: {
          index: agoliaInstance.initIndex('euLaw'),
          projection: EU_LAW_SUMMARY_PROJECTION,
        },
        newsItem: {
          index: agoliaInstance.initIndex('newsItems'),
          projection: NEWS_ITEM_PROJECTION,
        },
        euEuropeTab: {
          index: agoliaInstance.initIndex('euLaw'),
          projection: EU_LAW_EU_TAB_PROJECTION,
        },
        euCircularEconomyTab: {
          index: agoliaInstance.initIndex('euLaw'),
          projection: EU_LAW_CIRC_TAB_PROJECTION,
        },
        euLocalTab: {
          index: agoliaInstance.initIndex('euLaw'),
          projection: EU_LAW_LOCAL_TAB_PROJECTION,
        },
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
          case 'euLaw': {
            return {
              objectID: document.objectID,
              searchTitle: document.searchTitle,
              lawTitle: document.lawTitle,
              slug: document.slug,
              introText: document.introText,
              searchImage: document.searchImage,
            };
          }
          case 'newsItem': {
            return {
              objectID: document.objectID,
              content: document.content,
              title: document.title,
              newsText: document.newsText,
              newsDate: document.newsDate,
              newsOrAgenda: document.newsOrAgenda,
              newsImage: document.newsImage,
              slug: document.slug,
              link: document.link,
              category: document.category,
              linkUrl: document.linkUrl,
            };
          }
          case 'euEuropeTab': {
            return {
              objectID: document.objectID,
              lawTitle: document.lawTitle,
              slug: document.slug,
              searchTitle: document.searchTitle,
              searchImage: document.searchImage,
              eu1Content: document.eu1Content,
              eu2Content: document.eu2Content,
              eu3Content: document.eu3Content,
              eu4Content: document.eu4Content,
              eu5Content: document.eu5Content,
              eu6Content: document.eu6Content,
              eu7Content: document.eu7Content,
              eu8Content: document.eu8Content,
              eu1Title: document.eu1Title,
              eu2Title: document.eu2Title,
              eu3Title: document.eu3Title,
              eu4Title: document.eu4Title,
              eu5Title: document.eu5Title,
              eu6Title: document.eu6Title,
              eu7Title: document.eu7Title,
              eu8Title: document.eu8Title,
            };
          }
          case 'euCircularEconomyTab': {
            return {
              objectID: document.objectID,
              lawTitle: document.lawTitle,
              slug: document.slug,
              searchTitle: document.searchTitle,
              searchImage: document.searchImage,
              ceContent: document.ceContent,
            };
          }
          case 'euLocalTab': {
            return {
              objectID: document.objectID,
              lawTitle: document.lawTitle,
              slug: document.slug,
              searchTitle: document.searchTitle,
              searchImage: document.searchImage,
              localContent1: document.localContent1,
              localContent2: document.localContent2,
              localContent3: document.localContent3,
              localContent4: document.localContent4,
              localContent5: document.localContent5,
              localContent6: document.localContent6,
              localContent7: document.localContent7,
              localContent8: document.localContent8,
              localTitle1: document.localTitle1,
              localTitle2: document.localTitle2,
              localTitle3: document.localTitle3,
              localTitle4: document.localTitle4,
              localTitle5: document.localTitle5,
              localTitle6: document.localTitle6,
              localTitle7: document.localTitle7,
              localTitle8: document.localTitle8,
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

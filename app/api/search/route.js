import { client } from '@/lib/sanity';
import algoliasearch from 'algoliasearch';
import indexer from 'sanity-algolia';
import { NextResponse } from 'next/server';

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

const ABOUT_PAGE_PROJECTION = `{
      "objectID": _id,
      pageTitle, 
      "slug": slug.current,
      "content": array::join(string::split((pt::text(aboutPageContent)), "")[0..9500], "")
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
    'newsImage': newsImage.asset,
    'slug': slug.current,
    'link',
    category,
    linkUrl,
}`

export async function POST(req) {
  try {
    const sanityAgolia = indexer(
      {
        instrument: {
          index: agoliaInstance.initIndex('instruments'),
          projection: INSTRUMENT_PROJECTION,
        },
        aboutPage: {
          index: agoliaInstance.initIndex('aboutPage'),
          projection: ABOUT_PAGE_PROJECTION,
        },
        euLaw: {
          index: agoliaInstance.initIndex('euLaw'),
          projection: EU_LAW_SUMMARY_PROJECTION,
        },
        newsItem: {
          index: agoliaInstance.initIndex('newsItems'),
          projection: NEWS_ITEM_PROJECTION,
        },
      },

      (document) => {
        console.log(document);
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
          case 'euLaw': {
              return {
                objectID: document.objectID, 
                searchTitle: document.searchTitle,
                lawTitle: document.lawTitle,
                slug: document.slug,
                introText: document.introText,
                searchImage: document.searchImage
              }
          }
          case 'newsItme': {
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
            }
          }
          default:
            return document;
        }
      },
    );

    const body = await req.json();
    console.log(body)
    const webhook = await sanityAgolia.webhookSync(client, body);

    return webhook.then(() => NextResponse.json({ message: 'success!' }));
  } catch (err) {
    let error_response = { status: 'error', msg: err };
    return new Response(JSON.stringify(error_response));
  }
}

import { client } from '@/lib/sanity';
import algoliasearch from 'algoliasearch';

export const agoliaInstance = algoliasearch(
  process.env.NEXT_PUBLIC_AGOLIA_APPLICATION_ID,
  process.env.NEXT_PUBLIC_AGOLIA_ADMIN_KEY,
);

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
`;

const ABOUT_QUERY = `
  *[_type == "aboutPage" && !(_id in path('drafts.**'))] {
    "objectID": _id,
    pageTitle, 
    "slug": slug.current,
    "content": array::join(string::split((pt::text(aboutPageContent)), "")[0..9500], "")
  }
`;

const EU_LAW_QUERY = `
*[_type in ['euEuropeTab', 'euCircularEconomyTab', 'euLocalTab', 'euLaw'] && !(_id in path('drafts.**'))] {
    "objectID": _id,
    'lawTitle': coalesce(euLawReference->title, title),
    'slug': coalesce(euLawReference->slug.current, slug.current),
     introText,
    'eu1Content': array::join(string::split((pt::text(europeContent[0].content)), "")[0..1900], ""), 
    'eu2Content': array::join(string::split((pt::text(europeContent[2].content)), "")[0..1900], ""),
    'eu3Content': array::join(string::split((pt::text(europeContent[3].content)), "")[0..1900], ""), 
    'eu4Content': array::join(string::split((pt::text(europeContent[4].content)), "")[0..1900], ""), 
    'eu5Content': array::join(string::split((pt::text(europeContent[5].content)), "")[0..1900], ""), 
    'eu6Content': array::join(string::split((pt::text(europeContent[6].content)), "")[0..1900], ""), 
    'eu7Content': array::join(string::split((pt::text(europeContent[7].content)), "")[0..1900], ""), 
    'eu8Content': array::join(string::split((pt::text(europeContent[8].content)), "")[0..1900], ""), 
    'eu1Title': europeContent[0].title,
    'eu2Title': europeContent[1].title,
    'eu3Title': europeContent[2].title,
    'eu4Title': europeContent[3].title,
    'eu5Title': europeContent[4].title,
    'eu6Title': europeContent[5].title,
    'eu7Title': europeContent[6].title,
    'eu8Title': europeContent[7].title,
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
     'ceContent': pt::text(ceContent),
     title,
    "searchTitle": coalesce(euLawReference->title, title) + ' - ' + title,
    "searchImage": coalesce(searchImage.asset->url, euLawReference->searchImage.asset->url)
}
`;

const NEWS_ITEMS_QUERY = `
*[_type == 'newsItem' && !(_id in path('drafts.**'))] {
'objectID': _id,
'content': pt::text(content),
title,
newsText,
newsDate,
newsOrAgenda,
'newsImage': newsImage.asset,
'slug': slug.current,
link,
category,
linkUrl,
}
`;

export async function GET() {
  // fetch instruments
  const instruments = await client.fetch(QUERY);
  const aboutPage = await client.fetch(ABOUT_QUERY);
  const euLaw = await client.fetch(EU_LAW_QUERY);
  const newsItems = await client.fetch(NEWS_ITEMS_QUERY);
  const instrumentIndex = agoliaInstance.initIndex('instruments');
  const aboutIndex = agoliaInstance.initIndex('aboutPage');
  const euLawIndex = agoliaInstance.initIndex('euLaw');
  const newsIndex = agoliaInstance.initIndex('newsItems');

  try {
    console.time(
      `Saving ${instruments.length} instruments 
      and ${aboutPage.length} about pages
      and ${euLaw.length} eu laws
      and ${newsItems.length} news items to index`,
    );

    await instrumentIndex.saveObjects(instruments);
    await aboutIndex.saveObjects(aboutPage);
    await euLawIndex.saveObjects(euLaw);
    await newsIndex.saveObjects(newsItems);

    console.timeEnd(
      `Saving ${instruments.length} instruments 
      and ${aboutPage.length} about pages
      and ${euLaw.length} eu laws
      and ${newsItems.length} news items to index`,
    );
    return Response.json({
      status: 200,
      body: 'Success!',
    });
  } catch (error) {
    console.error(error, 'error');
    return {
      status: 500,
      body: error,
    };
  }
}

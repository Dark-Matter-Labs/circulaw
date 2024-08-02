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
  *[_type == "aboutPage"] {
    "objectID": _id,
    pageTitle, 
    "slug": slug.current,
    "content": array::join(string::split((pt::text(aboutPageContent)), "")[0..9500], "")
  }
`;

export async function GET() {
  // fetch instruments
  const instruments = await client.fetch(QUERY);
  const aboutPage = await client.fetch(ABOUT_QUERY);
  const instrumentIndex = agoliaInstance.initIndex('instruments');
  // const newsIndex  = agoliaInstance.initIndex('newsPage')
  const aboutIndex = agoliaInstance.initIndex('aboutPage');

    try {
        console.time(
          `Saving ${instruments.length} instruments and ${aboutPage.length} news items to index`,
        );
        await instrumentIndex.saveObjects(instruments);
        // await newsIndex.saveObjects(newsItems.newsItems)
        await aboutIndex.saveObjects(aboutPage);
        // here it is newsItems.newsItems to structure the data as a array and not an object
        console.timeEnd(
          `Saving ${instruments.length} instruments and ${aboutPage.length} news items to index`,
        );
        return Response.json({
          status: 200,
          body: 'Success!',
        });
    } catch (error) {
      console.error(error);
      return {
        status: 500,
        body: error,
      };
    }
}

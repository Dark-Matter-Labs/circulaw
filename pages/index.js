import Layout from '@/components/layouts/layout';
import SectionTypes from '@/components/section-types-list';
import { client } from '@/lib/sanity';

import { aboutSectionQuerie, homePageThemaQuery, homePageHeaderQuery } from '@/lib/queries';
import NewThemaSuggestion from '@/components/new-thema-suggestion';
// import NewsItems from '@/components/news-items';
import HomePageAboutSection from '@/components/home-page-about-section';
import FeaturedAgendaCard from '@/components/news-page/featured-agenda-card';
import FeaturedCard from '@/components/news-page/featured-card';

const newsItems = `
*[_type == 'newsPage'][0] {
    "featured": newsItems[featured == true]{
      ...,
      "image": newsImage.asset->.url
    },
      "notFeatured": newsItems[featured != true]{
        ...,
        "image": newsImage.asset->.url
    },
  }
`;

export default function Index({
  aboutSection,
  homePageThemaData,
  homePageHeader,
  footerText,
  newsData,
}) {
  return (
    <Layout page='home' homePageHeader={homePageHeader} footerText={footerText}>
      <div className='bg-grey-100 sm:pb-14 -z-50' name='thema'>
        <div className='global-margin -z-20'>
          <h1 className='mobile sm:desktop pt-8 text-green-600 border-grey-600 border-b pb-4'>
            Thema’s
          </h1>
          <div className='pt-4 sm:pt-8 -z-20'>
            <SectionTypes type='home' themaCards={homePageThemaData} />
          </div>
        </div>
      </div>
      <div className='bg-grey-100 sm:hidden'>
        <div className='global-margin flex items-center justify-center]'>
          <NewThemaSuggestion />
        </div>
      </div>
      <div className='bg-grey-100 py-20'>
        <div className='global-margin'>
          <HomePageAboutSection aboutSection={aboutSection} />
          <div className='mt-10'>
            <h1 className='p-2xl-semibold sm:p-5xl-semibold w-full border-b-2 pb-5 border-green-800'>
              Uitgelichte nieuwsberichten
            </h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-rows-1 gap-6 py-10 overflow-hidden'>
              {newsData.featured.map((item, id) => (
                <div
                  className={`${
                    item.image
                      ? 'col-span-1 flex-col sm:col-span-2 sm:flex-cols-2'
                      : 'col-span-1 flex-col gap-3'
                  }`}
                  key={id}
                >
                  {item._type === 'agendaItem' && <FeaturedAgendaCard data={item} />}
                  {item._type === 'newsCard' && <FeaturedCard data={item} />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const aboutSection = await client.fetch(aboutSectionQuerie);
  const homePageThemaData = await client.fetch(homePageThemaQuery);
  // const newsItems = await client.fetch(newsItemsQuery);
  const homePageHeader = await client.fetch(homePageHeaderQuery);
  const newsData = await client.fetch(newsItems);
  return {
    props: {
      homePageThemaData,
      //  newsItems,
      aboutSection,
      homePageHeader,
      newsData,
    },
    revalidate: 1,
  };
}

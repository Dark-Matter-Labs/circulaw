import Layout from '../components/layouts/layout';
import SectionTypes from '../components/section-types-list';
import { client } from '../lib/sanity';

import {
  aboutSectionQuerie,
  homePageThemaQuery,
  newsItemsQuery,
  homePageHeaderQuery,
} from '../lib/queries';
import NewThemaSuggestion from '../components/new-thema-suggestion';
import NewsItems from '../components/news-items';
import HomePageAboutSection from '../components/home-page-about-section';
import TransitionAgendas from '../components/home-page-transition-agenda';

export default function Index({
  newsItems,
  aboutSection,
  homePageThemaData,
  homePageHeader,
  footerText,
}) {
  return (
    <Layout page='home' homePageHeader={homePageHeader} footerText={footerText}>
      <div className='bg-black-white-200 sm:pb-14 -z-50' name='thema'>
        <div className='global-margin -z-20'>
          <h1 className='pt-8 mobile sm:desktop text-green-600 border-black-white-600 border-b pb-4'>
            Transition Agendas
          </h1>
          <div className='pt-4 sm:pt-8 -z-20'>
            <TransitionAgendas />
          </div>
        </div>
        <div className='global-margin -z-20'>
          <h1 className='pt-8 mobile sm:desktop text-green-600 border-black-white-600 border-b pb-4'>
            Thema’s
          </h1>
          <div className='pt-4 sm:pt-8 -z-20'>
            <SectionTypes type='home' themaCards={homePageThemaData} />
          </div>
        </div>
      </div>
      <div className='bg-black-white-200 sm:hidden'>
        <div className='global-margin flex items-center justify-center'>
          <NewThemaSuggestion />
        </div>
      </div>
      <div className='bg-black-white-200 py-20'>
        <div className='global-margin'>
          <HomePageAboutSection aboutSection={aboutSection} />
          <div className='' name='news'>
            <h1 className='pt-8 mobile sm:desktop text-green-600 border-black-white-600 border-b pb-4'>
              Nieuws
            </h1>
            <div className='pt-4 sm:pt-8'>
              <NewsItems newsItems={newsItems} />
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
  const newsItems = await client.fetch(newsItemsQuery);
  const homePageHeader = await client.fetch(homePageHeaderQuery);
  return {
    props: {
      homePageThemaData,
      newsItems,
      aboutSection,
      homePageHeader,
    },
    revalidate: 1,
  };
}

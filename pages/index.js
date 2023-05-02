import Layout from '../components/layouts/layout';
import SectionTypes from '../components/section-types-list';
import { client } from '../lib/sanity';
import { Link as ScrollLink } from 'react-scroll';
import { ArrowUpIcon } from '@heroicons/react/outline';

import { siteSettingsQuerys, homePageThemaQuery, newsItemsQuery } from '../lib/queries';
import NewThemaSuggestion from '../components/new-thema-suggestion';
import NewsItems from '../components/news-items';
import HomePageAboutSection from '../components/home-page-about-section';
import CustomButton from '../components/custom-button';

export default function Index({ newsItems, overCirculaw, ...props }) {
  // refactor this and pass props individualy
  const themaCards = props.homePageThemaData;
  return (
    <Layout page='home'>
      <div className='bg-black-white-200 sm:pb-14' name='thema'>
        <div className='global-margin'>
          <h1 className='pt-8 mobile sm:desktop text-green-600 border-black-white-600 border-b pb-4'>
            Thema’s
          </h1>
          <div className='pt-4 sm:pt-8'>
            <SectionTypes type='home' themaCards={themaCards} />
          </div>
        </div>
      </div>
      <div className='bg-black-white-200'>
        <div className='global-margin pb-4 flex items-center justify-center'>
          <NewThemaSuggestion />
        </div>
      </div>
      <div className='bg-black-white-200 py-10'>
        <div className='global-margin'>
          {/* ADD THIS TO SANITY ABOUT PAGES */}
          <HomePageAboutSection slug={overCirculaw} />
          <div className='' name='news'>
            <h1 className='pt-8 mobile sm:desktop text-green-600 border-black-white-600 border-b pb-4'>
              Nieuws and updates
            </h1>
            <div className='pt-4 sm:pt-8'>
              <NewsItems newsItems={newsItems} />
            </div>
           
          </div>
          <div className='block sm:hidden w-full flex items-center justify-center pt-8'>
              <CustomButton color='whiteBackground'>
                <ScrollLink to='top' smooth={true}>
               <span>go back to the top
                <ArrowUpIcon className='h-4 w-4 inline-block'/></span>
                </ScrollLink>
              </CustomButton>
            </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const overCirculaw = await client.fetch(siteSettingsQuerys.overCirulaw);
  const homePageThemaData = await client.fetch(homePageThemaQuery);
  const newsItems = await client.fetch(newsItemsQuery);
  return {
    props: {
      overCirculaw,
      homePageThemaData,
      newsItems,
    },
    revalidate: 1,
  };
}

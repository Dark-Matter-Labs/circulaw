import Layout from '../components/layouts/layout';
import SectionTypes from '../components/section-types-list';
import { client } from '../lib/sanity';
import { Link as ScrollLink } from 'react-scroll';
import { ArrowUpIcon } from '@heroicons/react/outline';

import { aboutSectionQuerie, homePageThemaQuery, newsItemsQuery } from '../lib/queries';
import NewThemaSuggestion from '../components/new-thema-suggestion';
import NewsItems from '../components/news-items';
import HomePageAboutSection from '../components/home-page-about-section';
import CustomButton from '../components/custom-button';

export default function Index({ newsItems, aboutSection, homePageThemaData }) {
  return (
    <Layout page='home'>
      <div className='bg-black-white-200 sm:pb-14' name='thema'>
        <div className='global-margin'>
          <h1 className='pt-8 mobile sm:desktop text-green-600 border-black-white-600 border-b pb-4'>
            Thema’s
          </h1>
          <div className='pt-4 sm:pt-8'>
            <SectionTypes type='home' themaCards={homePageThemaData} />
          </div>
        </div>
      </div>
      <div className='bg-black-white-200'>
        <div className='global-margin pb-24 flex items-center justify-center'>
          <NewThemaSuggestion />
        </div>
      </div>
      <div className='bg-black-white-200 py-20'>
        <div className='global-margin'>
          <HomePageAboutSection aboutSection={aboutSection} />
          <div className='' name='news'>
            <h1 className='pt-8 mobile sm:desktop text-green-600 border-black-white-600 border-b pb-4'>
              Nieuws en updates
            </h1>
            <div className='pt-4 sm:pt-8'>
              <NewsItems newsItems={newsItems} />
            </div>
          </div>
          <div className='block sm:hidden w-full flex items-center justify-center pt-8'>
            <CustomButton color='whiteBackground'>
              <ScrollLink to='top' smooth={true}>
                <span>
                  ga terug naar boven
                  <ArrowUpIcon className='h-4 w-4 inline-block ml-1' />
                </span>
              </ScrollLink>
            </CustomButton>
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
  return {
    props: {
      homePageThemaData,
      newsItems,
      aboutSection,
    },
    revalidate: 1,
  };
}

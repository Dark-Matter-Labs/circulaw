import Link from 'next/link';
import Layout from '@/components/layouts/layout';
import { client } from '@/lib/sanity';
import { ArrowRightIcon } from '@heroicons/react/outline';

import {
  aboutSectionQuerie,
  homePageHeaderQuery,
  newsItems,
  euHomePageQuery,
  pcHomePageQuery,
} from '@/lib/queries'; // refactor
import HomePageAboutSection from '@/components/home-page-about-section';
import FeaturedAgendaCard from '@/components/news-page/featured-agenda-card';
import FeaturedCard from '@/components/news-page/featured-card';
import LinkIcon from '@/components/link-icon';
import PCHomePage from '@/components/product-chain-page/product-chain-homepage';
import HomePageEUSection from '@/components/home-page-eu-section';

export default function Index({
  aboutSection,
  homePageHeader,
  footerText,
  newsData,
  euData,
  pcData,
}) {
  return (
    <Layout page='home' homePageHeader={homePageHeader} footerText={footerText}>
      <div className='bg-grey-100 sm:pb-12 -z-50' name='thema'>
        <div className='global-margin -z-20'>
          <h2 className='p-5xl-semibold sm:p-7xl-semibold pt-8 text-green-600 border-grey-600 border-b pb-6'>
            Ontdek direct onze instrumenten
          </h2>
          <p className='p-xl max-w-[750px] py-4 whitespace-normal'>
            De overheid heeft 5 productketens gekozen voor het{' '}
            <Link
              className='whitespace-normal text-green-500'
              href='https://www.rijksoverheid.nl/documenten/beleidsnotas/2023/02/03/nationaal-programma-circulaire-economie-2023-2030'
            >
              <span className='link-interaction whitespace-normal font-semibold'>
                Nationaal Programma Circulaire Economie 2023-2030
                <span className=''>
                  <LinkIcon />
                </span>
                .{' '}
              </span>
            </Link>{' '}
            Deze ketens zijn belangrijk voor de economie, maar belasten ook het milieu. In
            transitieagenda’s staat hoe deze ketens in 2050 circulair kunnen zijn
          </p>
          <div className='pt-4 -z-20'>
            <PCHomePage pcData={pcData} />
          </div>
        </div>
      </div>

      <div className='bg-grey-100 pt-12 sm:pt-0 pb-0 sm:pb-12'>
        <div className='global-margin'>
          <HomePageEUSection euData={euData} />
        </div>
      </div>

      <div className='bg-grey-100 pt-12 sm:pt-0 pb-12'>
        <div className='global-margin'>
          <div className='pb-12 flex flex-col'>
            <h3 className='p-5xl-semibold sm:p-7xl-semibold text-green-600 w-full border-b pb-6 border-green-800'>
              Uitgelichte nieuwsberichten
            </h3>
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
            <div className='p-base-bold flex justify-end items-center text-green-600 hover:text-green-300 active:text-green-800 focus:text-green-200 focus:ring-2 focus:ring-white justify-self-end'>
              <Link href='/nieuws'>
                Bekijk alle nieuwsberichten{' '}
                <ArrowRightIcon className='inline-block h-4 w-4' aria-hidden='true' />
              </Link>
            </div>
          </div>
          <HomePageAboutSection aboutSection={aboutSection} />
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const aboutSection = await client.fetch(aboutSectionQuerie);
  const homePageHeader = await client.fetch(homePageHeaderQuery);
  const newsData = await client.fetch(newsItems);
  const euData = await client.fetch(euHomePageQuery);
  const pcData = await client.fetch(pcHomePageQuery);
  return {
    props: {
      aboutSection,
      homePageHeader,
      newsData,
      euData,
      pcData,
    },
    revalidate: 1,
  };
}

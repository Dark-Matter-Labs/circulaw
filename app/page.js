import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/outline';

import { client } from '@/lib/sanity';
import HomePageAboutSection from '@/components/homepage/home-page-about-section';
import HomePageEUSection from '@/components/homepage/home-page-eu-section';
import LinkIcon from '@/components/link-icon';
import FeaturedAgendaCard from '@/components/news-page/featured-agenda-card';
import FeaturedCard from '@/components/news-page/featured-card';
import PCHomePage from '@/components/homepage/product-chain-homepage';
import { HOME_PAGE_QUERY } from '@/lib/queries';

async function getData() {
  const res = await client.fetch(HOME_PAGE_QUERY, {
    next: { tags: ['siteConfig', 'transitionAgenda', 'newsPage', 'thema', 'newsPage'] },
  });

  if (!res) {
    throw new Error('failed to fetch data');
  }
  return res;
}

export default async function Page() {
  const data = await getData();
  return (
    <>
      <div className='bg-gray-100 py-12 sm:pb-24 sm:pt-18 -z-50' name='thema'>
        <div className='global-margin -z-20'>
          <h2 className='heading-2xl-semibold sm:heading-5xl-semibold pt-8 text-green-600 border-gray-600 border-b pb-6'>
            Ontdek direct onze instrumenten
          </h2>
          <p className='heading-xl max-w-[750px] py-4 whitespace-normal'>
            De overheid heeft 5 productketens gekozen voor het{' '}
            <Link
              className='whitespace-normal text-green-500'
              href='https://www.rijksoverheid.nl/documenten/beleidsnotas/2023/02/03/nationaal-programma-circulaire-economie-2023-2030'
              target='_blank'
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
            transitieagenda’s staat hoe deze ketens in 2050 circulair kunnen zijn.
          </p>
          <div className='pt-4 -z-20'>
            <PCHomePage pcData={data.pcHomePageQuery} />
          </div>
        </div>
      </div>

      <div className='bg-gray-100 sm:pt-0 pb-12 sm:pb-24'>
        <div className='global-margin'>
          <HomePageEUSection euData={data.euData} />
        </div>
      </div>

      <div className='bg-gray-100 pt-12 sm:pt-0 pb-12'>
        <div className='global-margin'>
          <div className='pb-12 sm:pb-24 flex flex-col'>
            <h3 className='heading-2xl-semibold sm:heading-5xl-semibold text-green-600 w-full border-b pb-6 border-green-800'>
              Uitgelichte nieuwsberichten
            </h3>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-rows-1 gap-6 py-10 overflow-hidden'>
              {data.newsItems.map((item, id) => (
                <div
                  className={`${
                    item.image
                      ? 'col-span-1 flex-col sm:col-span-2 sm:flex-cols-2'
                      : 'col-span-1 flex-col gap-3'
                  }`}
                  key={id}
                >
                  {item.newsOrAgenda === true && <FeaturedAgendaCard data={item} />}
                  {item.newsOrAgenda === false && <FeaturedCard data={item} />}
                </div>
              ))}
            </div>
            <div className='p-base-bold flex justify-end items-center text-green-600'>
              <Link
                href='/nieuws'
                className=' hover:text-green-300 active:text-green-800 focus:text-green-200 focus:ring-2 focus:ring-white justify-self-end'
              >
                Bekijk alle nieuwsberichten{' '}
                <ArrowRightIcon className='inline-block h-4 w-4' aria-hidden='true' />
              </Link>
            </div>
          </div>

          <HomePageAboutSection aboutSection={data.aboutSection} />
        </div>
      </div>
    </>
  );
}

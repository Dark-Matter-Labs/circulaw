import Link from 'next/link';

import HomePageAboutSection from '@/components/homepage/home-page-about-section';
import HomePageEUSection from '@/components/homepage/home-page-eu-section';
import PCHomePage from '@/components/homepage/product-chain-homepage';
import LinkIcon from '@/components/link-icon';
import FeaturedAgendaCard from '@/components/news-page/featured-agenda-card';
import FeaturedCard from '@/components/news-page/featured-card';
import { HOME_PAGE_QUERY } from '@/lib/queries';
import { sanityFetch } from '@/lib/sanity';
import { IconArrowRight } from '@tabler/icons-react';

export default async function Page() {
  const data = await sanityFetch({
    query: HOME_PAGE_QUERY,
    tags: ['siteConfig', 'transitionAgenda', 'thema', 'newsItem'],
  });
  return (
    <>
      <div className='sm:pt-18 -z-50 bg-green-100 py-12 sm:pb-24' name='thema'>
        <div className='global-margin -z-20'>
          <h2 className='heading-2xl-semibold sm:heading-5xl-semibold border-b border-cl-dark-grey pb-6 pt-8 text-green-500'>
            Ontdek direct onze instrumenten
          </h2>
          <p className='heading-xl max-w-[750px] whitespace-normal py-4'>
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
          <div className='-z-20 pt-4'>
            <PCHomePage pcData={data.pcHomePageQuery} />
          </div>
        </div>
      </div>

      <div className='bg-green-100 pb-12 sm:pb-24 sm:pt-0'>
        <div className='global-margin'>
          <HomePageEUSection euData={data.euData} />
        </div>
      </div>

      <div className='bg-green-100 pb-12 pt-12 sm:pt-0'>
        <div className='global-margin'>
          <div className='flex flex-col pb-12 sm:pb-24'>
            <h3 className='heading-2xl-semibold sm:heading-5xl-semibold w-full border-b border-cl-black pb-6 text-green-500'>
              Uitgelichte nieuwsberichten
            </h3>

            <div className='grid grid-cols-1 grid-rows-1 gap-6 overflow-hidden py-10 sm:grid-cols-2 lg:grid-cols-4'>
              {data.newsItems.map((item, id) => (
                <div
                  className={`${
                    item.image
                      ? 'sm:flex-cols-2 col-span-1 flex-col sm:col-span-2'
                      : 'col-span-1 flex-col gap-3'
                  }`}
                  key={id}
                >
                  {item.newsOrAgenda === true && <FeaturedAgendaCard data={item} />}
                  {item.newsOrAgenda === false && <FeaturedCard data={item} />}
                </div>
              ))}
            </div>
            <div className='p-base-bold flex items-center justify-end text-green-500'>
              <Link
                href='/nieuws'
                className='flex items-center hover:text-green-400 focus:text-green-300 focus:ring-2 focus:ring-white active:text-cl-black'
              >
                Bekijk alle nieuwsberichten{' '}
                <IconArrowRight className='ml-0.5 inline-block h-6 w-6' aria-hidden='true' />
              </Link>
            </div>
          </div>
          <HomePageAboutSection aboutSection={data.aboutSection} />
        </div>
      </div>
    </>
  );
}

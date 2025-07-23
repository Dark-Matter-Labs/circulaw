import Image from 'next/image';
import Link from 'next/link';

import HomePageEUSection from '@/components/homepage/home-page-eu-section';
import LatestContent from '@/components/homepage/latest-content';
import PCHomePage from '@/components/homepage/product-chain-homepage';
import FeaturedNewsSection from '@/components/news-page/featured-section';
import InlineExternalLink from '@/components/shared/inline-external-link';
import TitleDecorator from '@/components/title-decorator';
import { HOME_PAGE_QUERY } from '@/lib/queries';
import { sanityFetch } from '@/lib/sanity';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { IconArrowRight, IconInfoSquareRoundedFilled } from '@tabler/icons-react';

export default async function Page() {
  const data = await sanityFetch({
    query: HOME_PAGE_QUERY,
    tags: ['siteConfig', 'transitionAgenda', 'thema', 'newsItem', 'euLaw'],
  });
  return (
    <>
      <div className=''>
        <div
          className='global-margin mb-20 flex flex-col gap-y-6 md:flex-row xl:gap-x-24'
          name='thema'
        >
          <div className='group relative mb-20 flex w-full items-center justify-center md:hidden'>
            <Link
              href='/over/wat-is-circulaw'
              className='flex h-full w-full items-center justify-center'
            >
              <Image
                src='/home-page/homepage-video-cta.png'
                alt='screenshot of CircuLaw animation'
                width={760}
                height={730}
                className='-rotate-30 size-80'
              />
              <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform'>
                <div className='flex flex-col gap-y-8'>
                  <h3 className='heading-4xl-semibold text-green-100'>Wat is CircuLaw?</h3>
                  <div className='heading-xl-semibold text-green-100 group-hover:underline'>
                    Video bekijken
                    <IconArrowRight className='inline-block h-5 w-5' aria-hidden='true' />
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className='flex basis-1/2 flex-col'>
            <div className=''>
              <h2 className='heading-3xl-semibold sm:heading-5xl-semibold inline text-green-500'>
                Ontdek direct onze instrumenten
              </h2>
              <Popover className='inline align-top'>
                <PopoverButton className=''>
                  <IconInfoSquareRoundedFilled className='ml-1 inline fill-green-500' />
                </PopoverButton>
                <PopoverPanel
                  anchor='bottom'
                  className='z-50 flex max-w-[250px] flex-col rounded-cl bg-green-100 p-5 text-green-500 shadow-card [--anchor-gap:8px]'
                >
                  <p className='p-base'>
                    Een instrument beschrijft per thema hoe bepaalde juridische regels toegepast
                    kunnen worden om circulariteit te bevorderen.
                  </p>
                  <p className='p-base mt-4'>
                    Meerdere instrumenten kunnen dus gebaseerd zijn op dezelfde wet-en regelgeving,
                    maar van elkaar verschillen in de manier waarop zij per thema toepasbaar zijn.
                    Niet waarop zij per thema toepasbaar zijn.{' '}
                  </p>{' '}
                </PopoverPanel>
              </Popover>
            </div>
            <TitleDecorator width='w-1/4' />
          </div>
          <div className='basis-1/2'>
            <p className='heading-xl sm:heading-2xl whitespace-normal'>
              De overheid heeft 5 productketens gekozen voor het
              <InlineExternalLink
                href='https://www.rijksoverheid.nl/documenten/beleidsnotas/2023/02/03/nationaal-programma-circulaire-economie-2023-2030'
                size='6'
              >
                Nationaal Programma Circulaire Economie 2023-2030
              </InlineExternalLink>
              Deze ketens zijn belangrijk voor de economie, maar belasten ook het milieu. In
              transitieagenda&apos;s staat hoe deze ketens in 2050 circulair kunnen zijn.
            </p>
          </div>
        </div>
        <div className='global-margin mb-20 sm:mb-32'>
          <PCHomePage pcData={data.pcHomePageQuery} />
        </div>
        <div className='global-margin mb-20 sm:mb-40'>
          <HomePageEUSection euData={data.euData} />
        </div>
        <div className='mb-40'>
          <div className='global-margin'>
            <div className='mb-10 sm:w-1/2'>
              <h3 className='heading-3xl-semibold sm:heading-5xl-semibold text-green-500' id='news'>
                Uitgelicht nieuws
              </h3>
              <TitleDecorator width='w-1/4' />
            </div>
          </div>
          <LatestContent latestContent={data.latestContent} />
          <div className='global-margin'>
            <FeaturedNewsSection items={data.newsItems} />
          </div>
        </div>
      </div>
    </>
  );
}

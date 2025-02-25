import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import LinkIcon from '@/components/link-icon';
import PopUp from '@/components/modeltext/popup';
import { sanityFetch } from '@/lib/sanity';
import { IconArrowLeft } from '@tabler/icons-react';

const PILLARS_QUERY = `
 *[_type == 'pillar'] | order(orderRank) {
  ...,
  'slug':slug.current,
 }
`;

const MODELTEXT_QUERY = `
  *[_type == 'modelText'] {
  ...,
  'slug': slug.current,
  'pillar': pillar->slug.current,
  'modelTextPT': pt::text(modelText),
  'descriptionPT': pt::text(description),
  'linkedInstruments': linkedInstruments[]->
    {titel, 'slug': slug.current, 'transitionAgenda':transitionAgenda->slug.current, 'thema': thema->slug.current , }
  } 
`;

export default async function ModelTextPage({ params }) {
  const pillars = await sanityFetch({ query: PILLARS_QUERY, tags: ['pillar'] });
  const modelTexts = await sanityFetch({ query: MODELTEXT_QUERY, tags: ['modelText'] });
  if (params.productChain === 'bouw') {
    return (
      <>
        <div className='relative mt-3 flex h-[260px] w-full bg-green-500 sm:h-[360px]'>
          <Image
            src='/modeltext-header.png'
            alt='homepage decoration'
            fill
            sizes='100vw'
            className='z-10 object-cover'
            priority={true}
            quality={100}
          />
          <div className='global-margin z-20 flex h-full w-full flex-col justify-between'>
            <div className='pt-6 sm:pt-10'>
              <span className='p-2xs-bold inline-flex flex-row items-center justify-center rounded-clSm bg-gray-100 py-1.5 pl-2 pr-3 align-middle text-green-500 group-hover:text-green-400 group-focus:text-green-200 group-focus:ring-2 group-focus:ring-white group-active:text-cl-black'>
                <Link
                  className='hover:text-green-400 focus:text-green-200 focus:ring-2 focus:ring-white active:text-cl-black'
                  href='/'
                >
                  {' '}
                  Home <span className='ml-2'>{'>'}</span>
                </Link>
                <Link
                  href='/bouw'
                  className='pl-3 hover:text-green-400 focus:text-green-200 focus:ring-2 focus:ring-white active:text-cl-black'
                >
                  Bouw <span className='ml-2'>{'>'}</span>
                </Link>
                <Link
                  href='/bouw/planregels'
                  className='pl-3 hover:text-green-400 focus:text-green-200 focus:ring-2 focus:ring-white active:text-cl-black'
                >
                  Modelteksten voor omgevingsplan
                </Link>
              </span>
            </div>
            <div className='mb-6 flex flex-col gap-2 sm:mb-10'>
              <h1 className='heading-2xl-semibold sm:heading-5xl-semibold text-white'>
                Aan de slag met het omgevingsplan
              </h1>
            </div>
          </div>
        </div>
        <div className='global-margin my-10 flex h-max flex-col bg-white sm:my-16'>
          <div className='flex max-w-[760px] flex-col'>
            <p className='p-base pb-6'>
              We hebben de planregels voor het omgevingsplan ingedeeld op basis van 6 pijlers. Deze
              pijlers sluiten aan bij het{' '}
              <Link
                href='https://toekomstbestendigbouwen.nl/'
                className='link-interaction'
                target='_blank'
              >
                Convenant Toekomstig Bestendig Bouwen
                <LinkIcon />
              </Link>
              . En beslaan meer thema&apos;s dan alleen circulaire.
            </p>
            <Link
              href='/bouw/planregels'
              className='hover:link-interaction p-base-semibold group mb-6 flex items-center text-green-500 underline'
            >
              <div className='mr-2 flex h-12 w-12 items-center justify-center self-end rounded-full border-2 border-green-500 bg-transparent text-green-500 focus:bg-green-100 focus:outline-none focus:ring-2 focus:ring-white active:bg-green-400 group-hover:border-green-200 group-hover:bg-green-200 group-hover:text-green-500'>
                <IconArrowLeft className='inline-block h-6 w-6' aria-hidden='true' />
              </div>
              <span className='max-w-xs'>
                Borgen circulair bouwen in omgevingsvisie, - programma, en - plan
              </span>
            </Link>
          </div>
          <PopUp modelTexts={modelTexts} pillars={pillars} />
        </div>
      </>
    );
  } else return notFound();
}

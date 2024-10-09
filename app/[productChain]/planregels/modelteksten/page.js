import PopUp from '@/components/modeltext/popup';
import { sanityFetch } from '@/lib/sanity';
import { IconArrowRight } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';

const PILLARS_QUERY = `
 *[_type == 'pillar'] {
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

export default async function ModelTextPage() {
  const pillars = await sanityFetch({ query: PILLARS_QUERY, tags: ['pillar'] });
  const modelTexts = await sanityFetch({ query: MODELTEXT_QUERY, tags: ['modelText'] });
  return (
    <>
      <div className='w-full bg-green-600 relative h-[260px] sm:h-[360px] mt-3 flex'>
        <Image
          src='/modeltext-header.png'
          alt='homepage decoration'
          fill
          sizes='100vw'
          className='z-10 object-cover'
          priority={true}
          quality={100}
        />
        <div className='z-20 w-full h-full global-margin flex flex-col justify-between'>
          <div className='pt-6 sm:pt-10'>
            <span className='p-2xs-bold align-middle rounded-clSm bg-gray-100 pl-2 pr-3 py-1.5 text-green-600 inline-flex flex-row items-center justify-center group-hover:text-green-300 group-active:text-green-800 group-focus:text-green-200 group-focus:ring-2 group-focus:ring-white'>
              <Link
                className='hover:text-green-300 active:text-green-800 focus:text-green-200 focus:ring-2 focus:ring-white'
                href='/'
              >
                {' '}
                Home <span className='ml-2'>{'>'}</span>
              </Link>
              <Link
                href='/bouw'
                className='hover:text-green-300 active:text-green-800 focus:text-green-200 focus:ring-2 focus:ring-white pl-3'
              >
                Bouw <span className='ml-2'>{'>'}</span>
              </Link>
              <Link
                href='/bouw/planregels'
                className='hover:text-green-300 active:text-green-800 focus:text-green-200 focus:ring-2 focus:ring-white pl-3'
              >
                Circulair bouwen meer effect met mix van sintrumenten
              </Link>
            </span>
          </div>
          <div className='mb-6 sm:mb-10 flex flex-col gap-2'>
            <h1 className='heading-2xl-semibold sm:heading-5xl-semibold text-white'>
              Planregels: modelteksten voor een omgevingsplan
            </h1>
          </div>
        </div>
      </div>
      <div className=' bg-white flex flex-col global-margin my-10 sm:my-16 h-max'>
        <div className='flex flex-col max-w-[760px]'>
          <p className='p-base pb-6'>
            We hebben de planregels ingedeeld op basis van 6
            pijlers - deze sluiten aan op de pijlers zoals{' '}
            <span className='text-green-400'>Toekomstig Bestendig Bouwen {'>'}</span> ze heeft
            gedefinieerd.
          </p>
          <Link href='/bouw/planregels' className='flex items-center mb-6 text-green-500 hover:link-interaction underline p-base-semibold'>
          Meer over het omgevingsplan en planregels <IconArrowRight className='inline-block ml-1'/></Link>
          <p className='p-xs italic'>
            <span className='font-semibold'>Let op:</span> De planregels zijn &apos;modelteksten&apos;. Deze
            zijn door de juristen van CircuLaw zelf opgesteld. Typ de modelteksten nooit zomaar
            klakkeloos over, wees je altijd bewust van de context en samenhang met informatie en
            teksten buiten de regels zelf.
          </p>
        </div>
        <PopUp modelTexts={modelTexts} pillars={pillars} />
      </div>
    </>
  );
}

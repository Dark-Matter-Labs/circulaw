import Pillars from '@/components/modeltext/pillars';
import { sanityFetch } from '@/lib/sanity';
import Image from 'next/image';
import Link from 'next/link';

const PILLARS_QUERY = `
 *[_type == 'pillar'] {
  ...
 }
`;

const MODELTEXT_QUERY = `
  *[_type == 'modelText'] {
  ...,
  'pillar': pillar->title,
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
            </span>
          </div>
          <div className='mb-6 sm:mb-10 flex flex-col gap-2'>
            <div className='text-green-400 p-base-semibold sm:heading-2xl-semibold'>Planregels</div>
            <h1 className='heading-2xl-semibold sm:heading-5xl-semibold text-white'>Per pijler</h1>
          </div>
        </div>
      </div>

      <div className=' bg-white flex flex-col global-margin my-10 sm:my-16'>
        <div className='flex flex-col max-w-[760px]'>
          <h2 className='heading-xl-semibold sm:heading-3xl-semibold mb-3 sm:mb-10'>
            Modelteksten/planregels omgevingsplan
          </h2>
          <p className='p-base pb-6'>
            Planregels zijn stukken tekst die gebruikers over kunnen nemen in een omgevingsplan. Het
            zijn dus modelteksten voor een omgevingsplan.
          </p>
          <p className='p-base'>
            Modelteksten hebben de juristen van CircuLaw zelf opgesteld. Daarin onderscheiden
            modelteksten zich van voorbeeldteksten: voorbeeldteksten hebben we overgenomen uit
            praktijkvoorbeelden van andere organisaties. Focus daarbij ligt op inspiratie.
          </p>
          <p className='p-base pb-6'>
            Belangrijk om te onthouden: hoewel er een onderscheid is tussen modelteksten en
            voorbeeldteksten geldt voor beide: nooit zomaar klakkeloos overtypen, maar wees je
            altijd bewust van de context, en samenhang met informatie en teksten buiten de regels
            zelf.
          </p>
          <p className='p-base-semibold'>Hoe vind je de planregel die jij nodig hebt?</p>
          <p>
            We hebben de planregels ingedeeld op basis van 6 pijlers - hierbij sluiten we aan bij de
            pijlers zoals Toekomstig Bestendig Bouwen deze heeft gedefinieerd:
          </p>
        </div>
        <Pillars modelTexts={modelTexts} pillars={pillars} />
      </div>
    </>
  );
}

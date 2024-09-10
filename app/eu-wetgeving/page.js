import Link from 'next/link';
import Image from 'next/image';
import { ArrowDownIcon } from '@heroicons/react/outline';
import CustomButton from '@/components/custom-button';
import EULawCard from '@/components/eu-law/eu-law-card';
import { sanityFetch } from '@/lib/sanity';
import { EU_LAW_OVERVIEW_QUERY } from '@/lib/queries';
import ScrollButton from '@/components/scroll-button';
import globalMeta from '@/utils/global-meta';

export const metadata = {
  title: 'EU wetgeving - CircuLaw',
  description:
    'Er komt een lawine van Europese wet- en regelgeving op ons af, gericht op de verduurzaming van onze maatschappij. Veel van deze nieuwe wet- en regelgeving valt onder de Green Deal, met als tussendoel Fit for 55.',
  metadataBase: new URL(globalMeta.siteUrl + '/eu-wetgeving'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    images: globalMeta.siteLogo,
    title: 'EU wetgeving - CircuLaw',
    description:
      'Er komt een lawine van Europese wet- en regelgeving op ons af, gericht op de verduurzaming van onze maatschappij. Veel van deze nieuwe wet- en regelgeving valt onder de Green Deal, met als tussendoel Fit for 55.',
    type: 'website',
  },
};

export default async function Page() {
  const data = await sanityFetch({query: EU_LAW_OVERVIEW_QUERY, tags: ['euLaw']});
  return (
    <>
      <div className='bg-[url("/bg-eu.png")] pt-3 overflow-hidden bg-center	bg-no-repeat bg-cover'>
        <div className='flex flex-col justify-between global-margin h-full relative z-10 mt-10'>
          <div className='pt-6 mb-20'>
            <Link
              href='/'
              type='button'
              className='rounded-clSm bg-gray-100 pl-2 pr-3 py-1.5 p-2xs-bold text-green-600'
            >
              <span className='link-interaction '>
                Home <span className='ml-2'>{'>'}</span>
              </span>
            </Link>
          </div>
          <div className='mb-8 flex flex-col'>
            <h1 className='mb-10 heading-4xl-semibold sm:heading-5xl-semibold text-gray-100'>
              EU wet- en regelgeving voor een circulaire economie
            </h1>
            <p className='p-base text-white max-w-xl mb-4'>
              Er komt een lawine van Europese wet- en regelgeving op ons af, gericht op de
              verduurzaming van onze maatschappij. Veel van deze nieuwe wet- en regelgeving valt
              onder de Green Deal, met als tussendoel Fit for 55.
            </p>
            <p className='p-base text-white max-w-xl'>
              CircuLaw laat je zien hoe je deze verordeningen en richtlijnen kunt toepassen op de
              circulaire doelen van jouw gemeente of provincie.
            </p>
            <div className='mt-8'>
              <ScrollButton to='laws' offset={-140}>
                <CustomButton color='euPage'>
                  Bekijk de {data?.length} wetten{' '}
                  <ArrowDownIcon className='h-5 w-5 ml-3 text-green-50' />
                </CustomButton>
              </ScrollButton>
            </div>
          </div>
        </div>
      </div>
      <div className='global-margin'>
        <div className='flex sm:flex-row mt-10 flex-col'>
          <div className='flex flex-col justify-start p-base basis-1/2 mr-8'>
            <h2 className='mb-8 heading-2xl-semibold'>Wat is de Green Deal?</h2>
            <div className='mb-8'>
              <p className='mb-2'>
                De Europese Unie wil in 2050 klimaatneutraal zijn: een ambitie die bekend staat als
                de &apos;Green Deal&apos;. In het kader van de Green Deal worden continu nieuwe
                wetten voorgesteld, behandeld en aangenomen, of worden bestaande herzien.
              </p>
              <p>
                Met al deze richtlijnen en verordeningen wil de EU vanuit verschillende
                perspectieven bijdragen aan klimaatneutraliteit. Hiernaast zie je een overzicht,
                inclusief de huidige status van elk voorstel en het toepassingsgebied.
              </p>
            </div>
            <div className='sm:w-2/5 sm:mt-0'>
              <a href='/European_green_deal.pdf' target='_blank' rel='noreferrer'>
                <CustomButton color='whiteBackground'>Download PDF</CustomButton>
              </a>
            </div>
          </div>
          <div className='basis-1/2 w-full h-full mt-8 sm:mt-0'>
            <a href='/European_green_deal.pdf' target='_blank' rel='noreferrer'>
              <Image
                src='/green_deal.jpg'
                alt='Screenshot of the PDF green deal'
                width={588.5}
                height={328}
              />
            </a>
          </div>
        </div>
        <div className='flex flex-col max-w-2xl p-base mb-4'>
          <h2 className='mt-10 mb-8 heading-2xl-semibold'>
            Relevante EU-wetgeving voor lokale overheden
          </h2>
          <p className='mb-2'>
            Lokale overheden zijn vaak niet op de hoogte van de verplichtingen en kansen die
            voortvloeien uit Europese wet- en regelgeving. CircuLaw brengt daar verandering in. Wij
            brengen de toepasbaarheid voor de circulaire economie in kaart van richtlijnen en
            verordeningen. Op dit moment hebben we {data?.length} analyses gereed; je vindt ze
            hieronder.
          </p>
          <p>
            We blijven nieuwe analyses toevoegen, en de status van de verschillende wet- en
            regelgeving updaten. Neem dus regelmatig even een kijkje. Heb je feedback voor ons, of
            informatie over circulaire wetgeving? Laat het ons weten!
          </p>
        </div>
      </div>
      <div
        className='grid grid-cols-1 md:grid-cols-2 lgNav:grid-cols-3 gap-y-8 gap-x-6 global-margin my-12 relative'
        id='laws'
      >
        {data?.map((law, id) => (
          <div key={id} className=''>
            <EULawCard law={law} />
          </div>
        ))}
      </div>
    </>
  );
}

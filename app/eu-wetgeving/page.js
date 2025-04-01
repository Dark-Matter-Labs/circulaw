import Image from 'next/image';

import CustomButton from '@/components/custom-button';
import EULawCard from '@/components/eu-law/eu-law-card';
import Header from '@/components/headers';
import { EU_LAW_OVERVIEW_QUERY } from '@/lib/queries';
import { sanityFetch } from '@/lib/sanity';
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
  const data = await sanityFetch({ query: EU_LAW_OVERVIEW_QUERY, tags: ['euLaw'] });
  return (
    <>
      <Header
        title='EU wet- en regelgeving voor een circulaire economie'
        imageURL='/big-decoration.png'
        bgColor='bg-green-500'
        subtitle='Er komt een lawine van Europese wet- en regelgeving op ons af, gericht op de
              verduurzaming van onze maatschappij. Veel van deze nieuwe wet- en regelgeving valt
              onder de Green Deal, met als tussendoel Fit for 55.'
        pageType='euOverview'
        length={data.length}
      />
      <div className='global-margin'>
        <div className='mt-10 flex flex-col sm:flex-row'>
          <div className='p-base mr-8 flex basis-1/2 flex-col justify-start'>
            <h2 className='heading-2xl-semibold mb-8'>Wat is de Green Deal?</h2>
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
            <div className='sm:mt-0 sm:w-2/5'>
              <a href='/European_green_deal.pdf' target='_blank' rel='noreferrer'>
                <CustomButton color='whiteBackground'>Download PDF</CustomButton>
              </a>
            </div>
          </div>
          <div className='mt-8 h-full w-full basis-1/2 sm:mt-0'>
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
        <div className='p-base mb-4 flex max-w-2xl flex-col'>
          <h2 className='heading-2xl-semibold mb-8 mt-10'>
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
        className='global-margin relative my-12 grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-2 lgNav:grid-cols-3'
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

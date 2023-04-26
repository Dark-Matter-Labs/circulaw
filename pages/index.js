import Link from 'next/link';
import Image from 'next/image';
import { ArrowRightIcon } from '@heroicons/react/outline';
import Layout from '../components/layouts/layout';
import SectionTypes from '../components/section-types-list';
import watImage from '../public/home-page/wat.png';
import { client } from '../lib/sanity';
import { siteSettingsQuerys, homePageThemaQuery } from '../lib/queries';
import NewThemaSuggestion from '../components/new-thema-suggestion';

export default function Index({ ...props }) {
  const aboutSlugs = props.overCirculaw ?? [];
  const themaCards = props.homePageThemaData;
  return (
    <Layout page='home'>
      <div className='bg-black-white-200 pb-14' name='thema'>
        <div className='global-margin'>
          <h1 className='pt-8 mobile sm:desktop text-green-600 border-black-white-600 border-b pb-4'>
            Thema’s
          </h1>
          <div className='pt-8'>
            <SectionTypes type='home' themaCards={themaCards} />
          </div>
        </div>
      </div>
      <div className='bg-black-white-200'>
        <div className=' global-margin pb-4 flex items-center justify-center'>
          <NewThemaSuggestion />
        </div>
      </div>
      <div className='bg-black-white-200 py-10'>
        <div className='global-margin'>
          <h1 className='mobile sm:desktop text-green-600 border-b border-black-white-600 pb-4'>
            Over CircuLaw
          </h1>

          {/* ADD THIS TO SANITY ABOUT PAGES */}
          <Link href={`/about/${encodeURIComponent(aboutSlugs?.[0]?.slug)}`}>
            <div className='grid grid-cols-1 lg:grid-cols-2 py-10 gap-x-8 gap-y-4'>
              <div>
                <Image src={watImage} width={556} alt='image for wat circulaw' />
              </div>
              <div>
                <h2 className='mobile sm:desktop'>Wat is CircuLaw?</h2>
                <p className=' p-lg py-5 max-w-4xl'>
                  CircuLaw is een kennisplatform waarmee we beleidsmakers, projectleiders en
                  inkopers helpen meer en beter gebruik te maken van regelgeving om zo de circulaire
                  economie te bevorderen. Wet-en regelgeving biedt goede mogelijkheden om effectief
                  circulair beleid te maken. CircuLaw ontsluit die complexe wet-en regelgeving zodat
                  beleidsmakers er mee aan de slag kunnen. Zo kunnen we de overstap van het lineaire
                  systeem naar een circulair systeem bevorderen. En die stap is essentieel om
                  versnelde klimaatverandering tegen te gaan, vervuiling te verminderen, de
                  biodiversiteit te behouden en om te zorgen dat grondstoffen beschikbaar blijven.
                </p>
                <span className='text-green-500 link-lg link-interaction'>
                  Lees verder <ArrowRightIcon className='inline-block h-4 w-4' aria-hidden='true' />
                </span>
              </div>
            </div>
          </Link>

         
       
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const overCirculaw = await client.fetch(siteSettingsQuerys.overCirulaw);
  const homePageThemaData = await client.fetch(homePageThemaQuery);
  return {
    props: {
      overCirculaw,
      homePageThemaData,
    },
    revalidate: 1,
  };
}

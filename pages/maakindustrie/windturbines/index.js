import { useEffect } from 'react';
import Layout from '@/components/layouts/layout';
import ThemeLayout from '@/components/layouts/theme-index-layout';
import { client } from '@/lib/sanity';
import Link from 'next/link';
import { themaQueryFunction } from '@/lib/queries';

export default function Windturbine({ featuredLaws, length, thema }) {
  useEffect(() => {
    localStorage.clear();
  });

  return (
    <Layout title='CircuLaw - Windturbines'>
      <ThemeLayout
        featuredLaws={featuredLaws}
        thema={thema}
        transitionAgenda='maakindustrie'
        numberOfLaws={length}
        listTitle={`Lijst van ${length} instrumenten`}
      />
      <div className='global-margin pt-10 pb-20'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-28'>
          <div className='flex flex-col gap-4'>
            <div className='p-4xl-semibold'>Analyse rapport CircuLaw: Circulaire windturbines</div>
            <div className='p-base'>
              De informatie over windturbines is mede tot stand gekomen door nauwe samenwerking met
              de provincie Noord Holland
            </div>
            <div className=''>
              <Link
                href='/Analyse circulaire windturbines_PNH.pdf'
                target='_blank'
                className='flex flex-row items-center link-interaction p-lg-semibold text-green-500'
              >
                Lees meer
                <span className='pl-2'>
                  {' '}
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-5  h-5'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3'
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const featuredLaws = await client.fetch(
    themaQueryFunction('windturbines').featured,
  );
  const length = await client.fetch(themaQueryFunction('windturbines').length);
  const thema = await client.fetch(themaQueryFunction('windturbines').themaQuery);
  return {
    props: {
      featuredLaws,
      length,
      thema,
    },
    revalidate: 1,
  };
}

import { useEffect } from 'react';
import Layout from '../../components/layouts/layout';
import ThemeLayout from '../../components/layouts/theme-index-layout';
import { client } from '../../lib/sanity';
import LinkIcon from '../../components/link-icon';
import Link from 'next/link';
import { windQueries } from '../../lib/queries';

export default function Windturbine({ featuredLaws, length, thema }) {
  useEffect(() => {
    localStorage.clear();
  });

  return (
    <Layout title='CircuLaw - Circulaire Windturbines'>
      <ThemeLayout
        featuredLaws={featuredLaws}
        thema={thema}
        numberOfLaws={length}
        listTitle={`Lijst van ${length} instrumenten`}
      />
      <div className='bg-[#F8FAF8]'>
        <div className='global-margin pt-10 pb-20 border-t border-grey-800'>
          <div className='p-lg'>
            De informatie over windturbines is mede tot stand gekomen door nauwe samenwerking met de{' '}
            <span className='text-green-500 link-lg inline-block '>
              <Link
                href='https://www.noord-holland.nl/'
                target='_blank'
                rel='noopener noreferrer'
                className='link-interaction'
              >
                Provincie Noord-Holland
                <LinkIcon />
              </Link>
            </span>
            <div className=''>
              {' '}
              Zie het{' '}
              <span className='text-green-500 link-lg inline-block '>
                <Link
                  href='/Analyse circulaire windturbines_PNH.pdf'
                  target='_blank'
                  className='link-interaction'
                >
                  rapport-Analyse CircuLaw: Circulaire Windturbines (download pdf).
                  <LinkIcon />
                </Link>
              </span>{' '}
            </div>{' '}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const featuredLaws = await client.fetch(windQueries.windFeatured);
  const length = await client.fetch(windQueries.windLength);
  const thema = await client.fetch(windQueries.windThemaQuery);
  return {
    props: {
      featuredLaws,
      length,
      thema,
    },
    revalidate: 1,
  };
}

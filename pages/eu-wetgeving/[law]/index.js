import Link from 'next/link';

import Layout from '@/components/layouts/layout';
import { client } from '@/lib/sanity';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ScrollPagesTabContent from '@/components/eu-law/europe-tab-content';
import SummaryComponent from '@/components/eu-law/summary-tab-content';
import { PortableText } from '@portabletext/react';
// create component for each tab
// can create individual ones for overview if need be,
import { euPageComponents } from '@/lib/portable-text/pt-components';
import SocialButtons from '@/components/social-buttons';

const pathsQuery = `
*[_type =="euLaw" && defined(slug.current)][].slug.current
`;

const lawQuery = `
*[_type =="euLaw" && slug.current == $law][0] {
    ..., 
    "introImage": introImage.asset->.url,
}
`;

export default function LawSummaryPage({ lawData }) {
  const router = useRouter();
  const query = router.query.tab ?? 'overzicht';

  const [selectedTab, setSelectedTab] = useState(query);

  useEffect(() => {
    setSelectedTab(query);
  }, [query]);

  return (
    <Layout title={lawData?.title}>
      <div className='relative'>
        <div className='h-[240px] sm:h-[360px] pt-3 bg-green-800'>
          <div className='flex flex-col justify-between global-margin h-full'>
            <div className='pt-6 flex flex-row justify-between'>
              <div className='p-2xs-bold text-green-600 bg-white w-min pl-2 pr-3 py-1.5 rounded-clSm flex flex-row whitespace-nowrap'>
                <Link href='/' className=''>
                  <span className='link-interaction'>
                    Home <span className='mx-2'>{'>'}</span>
                  </span>
                </Link>
                <Link href='/eu-wetgeving'>
                  <span className='capitalize link-interaction'>Eu wetgeving</span>
                </Link>
              </div>
              <div className='hidden sm:block'>
                <SocialButtons title={`${lawData?.title} - ${selectedTab.replace(/(-)/g, ' ')}`} />
              </div>
            </div>
            <h1 className='mb-[60px] sm:mb-[94px] p-5xl-semibold sm:p-7xl-bold text-grey-100'>
              {' '}
              {lawData?.title}
            </h1>
          </div>
        </div>

        {/* tabs desktop */}
        <div className='sticky top-16 lgNav:top-24 shadow-lg'>
          <div className='bg-green-800 -mt-12 sm:-mt-[62px] flex overflow-x-scroll snap-x snap-mandatory no-scrollbar lgNav:block pt-4'>
            <div className='global-margin'>
              <div className='flex flex-row gap-x-3 justify-start p-lg-semibold text-green-500 h-[62px] max-w-3xl'>
                <Link
                  className={`${
                    selectedTab === 'overzicht'
                      ? 'bg-white text-green-500'
                      : 'bg-green-500 text-white'
                  }  h-full rounded-t-cl px-3 py-2 flex items-start justify-center min-w-[105px]`}
                  href={{
                    pathname: `/eu-wetgeving/${lawData?.slug?.current}`,
                    query: { tab: 'overzicht' },
                  }}
                >
                  Overzicht
                </Link>
                <Link
                  className={`${
                    selectedTab === 'verplichtingen-voor-europese-lidstaten'
                      ? 'bg-white text-green-500'
                      : 'bg-green-500 text-white'
                  } h-full rounded-t-cl px-3 py-2 flex items-start justify-center min-w-[200px]`}
                  href={{
                    pathname: `/eu-wetgeving/${lawData?.slug?.current}`,
                    query: { tab: 'verplichtingen-voor-europese-lidstaten' },
                  }}
                >
                  Verplichtingen voor Europese lidstaten
                </Link>
                <Link
                  className={`${
                    selectedTab === 'relevantie-voor-regionale-en-lokale-overheden'
                      ? 'bg-white text-green-500'
                      : 'bg-green-500 text-white'
                  } h-full rounded-t-cl px-3 py-2 flex items-start justify-center min-w-[240px]`}
                  href={{
                    pathname: `/eu-wetgeving/${lawData?.slug?.current}`,
                    query: { tab: 'relevantie-voor-regionale-en-lokale-overheden' },
                  }}
                >
                  Relevantie voor regionale en lokale overheden{' '}
                </Link>
                <Link
                  className={`${
                    selectedTab === 'relevantie-voor-de-circulaire-economie'
                      ? 'bg-white text-green-500'
                      : 'bg-green-500 text-white'
                  } h-full rounded-t-cl px-3 py-2 flex items-start justify-center min-w-[200px]`}
                  href={{
                    pathname: `/eu-wetgeving/${lawData?.slug?.current}`,
                    query: { tab: 'relevantie-voor-de-circulaire-economie' },
                  }}
                >
                  Relevantie voor de circulaire economie
                </Link>
              </div>
            </div>
          </div>
        </div>
        {query === 'overzicht' && (
          <div className=''>
            <SummaryComponent lawData={lawData} />
          </div>
        )}
        {query === 'verplichtingen-voor-europese-lidstaten' && (
          <ScrollPagesTabContent content={lawData?.europeContent} />
        )}
        {query === 'relevantie-voor-regionale-en-lokale-overheden' && (
          <ScrollPagesTabContent content={lawData?.localContent} />
        )}
        {query === 'relevantie-voor-de-circulaire-economie' && (
          <div className='global-margin my-20 '>
            <div className='max-w-xl 2xl:max-w-2xl'>
              <PortableText value={lawData?.ceContent} components={euPageComponents} />
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const laws = await client.fetch(pathsQuery);
  return {
    paths: laws.map((law) => ({ params: { law } })),
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const law = { law: params?.law ?? '' };
  const lawData = await client.fetch(lawQuery, law);
  return {
    props: { lawData },
    revalidate: 1,
  };
}

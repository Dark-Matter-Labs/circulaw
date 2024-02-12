import Link from 'next/link';

import Layout from '@/components/layouts/layout';
import { client } from '@/lib/sanity';
import { useRouter } from 'next/router';


// create component for each tab
// can create individual ones for overview if need be, 
// build out logic for the PT to pagination 
// 

const pathsQuery = `
*[_type =="euLaw" && defined(slug.current)][].slug.current
`;

const lawQuery = `
*[_type =="euLaw" && slug.current == $law][0] {
    ...,
}
`;

export default function LawSummaryPage({ lawData }) {
    const router = useRouter()
    const query = router.query.tab ?? 'overzicht'
   
  return (
    <Layout title='Law title'>
        <div className='h-[360px] pt-3 bg-green-800'>
          <div className='flex flex-col justify-between global-margin h-full'>
            <div className='pt-6'>
              <div className='p-2xs-bold text-green-600 bg-white w-min pl-2 pr-3 py-1.5 rounded-clSm flex flex-row whitespace-nowrap'>
                <Link href='/' className=''>
                  <span className='link-interaction'>Home <span className='mx-2'>{'>'}</span></span>
                 
                </Link>
                <Link href='/eu-wetgeving'>
                  <span className='capitalize link-interaction'>Eu wetgeving <span className='ml-2'>{'>'}</span></span>
                </Link>
              </div>
            </div>
            <h1 className='mb-20 p-5xl-semibold sm:p-7xl-bold text-grey-100'> {lawData.title}</h1>
          </div>
        </div>

          {/* tabs */}
          <div className='bg-green-800 -mt-12 sm:-mt-[62px]'>
        <div className='global-margin'>
          <div className='flex flex-row gap-x-3 justify-start p-xl-semibold text-green-500 h-[62px] max-w-3xl'>

            <Link className='bg-white h-full rounded-t-cl px-3 py-2 flex items-center' href={{ pathname: `/eu-wetgeving/${lawData.slug.current}`, query: { tab: 'overzicht' } }}>
            Overzicht
            </Link>
            <Link className='bg-white h-full rounded-t-cl px-3 py-2 min-w-[200px] flex items-center' href={{ pathname: `/eu-wetgeving/${lawData.slug.current}`, query: { tab: 'verplichtingen-voor-europese-lidstaten' } }}>
            Verplichtingen voor Europese lidstaten
            </Link>
            <Link className='bg-white h-full rounded-t-cl px-3 py-2 min-w-[250px] flex items-center' href={{ pathname: `/eu-wetgeving/${lawData.slug.current}`, query: { tab: 'relevantie-voor-regionale-en-lokale-overheden' } }}>
            Relevantie voor regionale en lokale overheden
            </Link>
            <Link className='bg-white h-full rounded-t-cl px-3 py-2 min-w-[200px] flex items-center' href={{ pathname: `/eu-wetgeving/${lawData.slug.current}`, query: { tab: 'relevantie-voor-de-circulaire-economie' } }}>
            Relevantie voor de circulaire economie
            </Link>
          </div>
          </div>
        </div>

        {query === 'overzicht' && 
        <div className='h-96 global-margin'>
        Overzicht
        </div>}
        {query === 'verplichtingen-voor-europese-lidstaten' && 
        <div className='h-96 global-margin'>
        verplichtingen-voor-europese-lidstaten
        </div>}
        {query === 'relevantie-voor-regionale-en-lokale-overheden' && 
        <div className='h-96 global-margin'>
        relevantie-voor-regionale-en-lokale-overheden
        </div>}
        {query === 'relevantie-voor-de-circulaire-economie' && 
        <div className='h-96 global-margin'>
        relevantie-voor-de-circulaire-economie
        </div>}

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

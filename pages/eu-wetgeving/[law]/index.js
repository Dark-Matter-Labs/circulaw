import Link from 'next/link';

import Layout from '@/components/layouts/layout';
import { client } from '@/lib/sanity';

// create tab logic here

const pathsQuery = `
*[_type =="euLaw" && defined(slug.current)][].slug.current
`;

const lawQuery = `
*[_type =="euLaw" && slug.current == $law][0] {
    ...,
}
`;

export default function LawSummaryPage({ lawData }) {
  return (
    <Layout title='Law title'>
      <div className='h-[360px] pt-3 bg-green-800'>
        <div className='flex flex-col justify-between global-margin h-full'>
          <div className='pt-6'>
            <div className='p-2xs-bold text-green-600 bg-white w-min pl-2 pr-3 py-1.5 rounded-clSm flex flex-row whitespace-nowrap'>
              <Link href='/' className=''>
                <span className='link-interaction'>Home</span>
                <span className='mx-2'>{'>'}</span>
              </Link>
              <Link href='/eu-wetgeving'>
                <span className='capitalize link-interaction'>Eu wetgeving</span>
              </Link>
            </div>
          </div>
          <h1 className='mb-8 p-5xl-semibold sm:p-7xl-bold text-grey-100'> {lawData.title}</h1>
        </div>
      </div>
      <div className='global-margin h-96'>{lawData.introText}</div>
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

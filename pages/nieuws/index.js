import Layout from '@/components/layouts/layout';
import Link from 'next/link';
import { client } from '@/lib/sanity';
import AgendaCard from '@/components/news-page/agenda-card';

const newsItems = `
*[_type == 'newsPage' || _type == 'agendaItem'][0] {
    "featured": newsItems[featured == true]{
      ...,},
      "notFeatured": newsItems[featured != true]{
        ...,
    },
   
  }
`;

export default function NewsPage({ data }) {
  console.log(data.featured, 'featured');
  console.log(data.notFeatured, 'not featured');
  return (
    <Layout>
      <div className='h-screen flex flex-col global-margin mt-4'>
        <div className='h-20 mt-6'>
          <Link href='/' className='breadcrumb'>
            Home
          </Link>
        </div>

        <div className=''>
          <h1 className='p-2xl-semibold sm:p-5xl-semibold w-full border-b-2 pb-5 border-green-800'>
            Uitgelichte nieuwsberichten
          </h1>
          <div className='grid grid-cols-4 grid-rows-1 py-10'>
            <AgendaCard />
          </div>
        </div>
        <div className='h-96'>
          <h1 className='p-2xl-semibold sm:p-5xl-semibold w-full border-b-2 pb-5 border-green-800'>
            Laatste nieuws{' '}
          </h1>
          <div className='grid grid-cols-4 grid-rows-1'>
            {data.featured.map((item, id) => (
              <div key={id}>{JSON.stringify(item)}</div>
            ))}
          </div>
        </div>
        <div className='h-96'>
          <h1 className='p-2xl-semibold sm:p-5xl-semibold w-full border-b-2 pb-5 border-green-800'>
            Archief{' '}
          </h1>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const data = await client.fetch(newsItems);
  return {
    props: {
      data,
    },
    revalidate: 1,
  };
}

import Layout from '@/components/layouts/layout';
import Link from 'next/link';
import { client } from '@/lib/sanity';
import FeaturedAgendaCard from '@/components/news-page/featured-agenda-card';
import FeaturedCard from '@/components/news-page/featured-card';
import AgendaCard from '@/components/news-page/agenda-card';
import NewsCard from '@/components/news-page/news-card';

const newsItems = `
*[_type == 'newsPage'][0] {
    "featured": newsItems[featured == true]{
      ...,
      "image": newsImage.asset->.url
    },
      "notFeatured": newsItems[featured != true]{
        ...,
        "image": newsImage.asset->.url
    },
   
  }
`;

export default function NewsPage({ data }) {
  return (
    <Layout>
      <div className='flex flex-col global-margin mt-4'>
        <div className='h-20 mt-6'>
          <Link href='/' className='text-green-500 p-2xs-bold'>
          {'<'} Home 
          </Link>
        </div>

        <div className='mt-14'>
          <h1 className='p-2xl-semibold sm:p-5xl-semibold w-full border-b-2 pb-5 border-green-800'>
            Uitgelichte nieuwsberichten
          </h1>
          <div className='grid grid-cols-4 grid-rows-1 gap-6 py-10 overflow-hidden'>
            {data.featured.map((item, id) => (
              <div
                className={`${item.image ? 'col-span-2 flex-cols-2' : 'col-span-1 flex-col gap-3'}`}
                key={id}
              >
                {item._type === 'agendaItem' && <FeaturedAgendaCard data={item} />}
                {item._type === 'newsCard' && <FeaturedCard data={item} />}
              </div>
            ))}
          </div>
        </div>
        <div className=''>
          <h1 className='p-2xl-semibold sm:p-5xl-semibold w-full border-b-2 pb-5 border-green-800'>
            Laatste nieuws{' '}
          </h1>
          <div className='grid grid-cols-4 py-10 gap-6 rid-flow-col-dense'>
            {data.notFeatured.map((item, id) => (
              <div key={id} className={`${item.image ? 'row-span-2' : ''}`}>
                {item._type ==='agendaItem' && <AgendaCard data={item}/>}
                {item._type ==='newsCard' && <NewsCard data={item}/>}
              </div>
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

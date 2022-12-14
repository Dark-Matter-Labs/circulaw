import Layout from '../../components/layouts/layout';
import client from '../../lib/sanity';

import Link from 'next/link';
// import Image from 'next/image';
// import MeasureOverview from '../../components/measure-overview';
import MeasureOverviewTest from '../../components/measure-overview-test';
import MeasureTableTest from '../../components/measure-table-test';
// import LinkIcon from '../../components/link-icon';

const pathsQuery = `
*[_type == "measure" && defined(slug.current)][].slug.current
`
const measureQuery = `
*[_type == "measure" && slug.current == $slug] [0] {
    _id,
    titel,
    thema,
    rLadder,
    subrechtsgebied,
    juridischInvloed,
    juridischHaalbaarheid,
    rechtsgebied,
    citeertitel,
    artikel,
    artikelLink,
    lawDate,
    governmentLevel,



}
`
  

export default function TestMeasure({data}) {
    return (
        <Layout>
    <div className='gradient-bg'>
        <div className='global-margin pt-10 overflow-x-hidden'>
          {/* BREADCRUMB */}
          {data.measure?.thema === 'houtbouw' ? (
            <Link href='/measures/houtbouw' className=''>
              <a className='text-greenLink breadcrumb'>← Terug</a>
            </Link>
          ) : (
            <Link href='/measures/windturbines' className=''>
              <a className='text-greenLink breadcrumb'>← Terug</a>
            </Link>
          )}

        
        <MeasureOverviewTest data={data} viewport='desktop'/>
        <div className='grid grid-cols-1 sm:grid-cols-3 '>
            <div className='w-full sm:max-w-3xl pb-20 col-span-2 '>
                <h1 className='hidden lg:block my-9 text-green1 mobile sm:main'>{data.measure?.titel}</h1>

                {/* portable text block here */}
          





        <MeasureTableTest data={data} />
        </div>
        <MeasureOverviewTest data={data} viewport='mobile' />
        </div>
        </div>
        </div>
        </Layout>
    )
}

export async function getStaticPaths() {
  const paths = await client.fetch(pathsQuery);
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = '' } = context.params;
  const measure = await client.fetch(measureQuery, { slug });
  return {
    props: { data: { measure } },
    revalidate: 1,
  };
}
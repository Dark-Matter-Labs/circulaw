import Layout from '../../components/layouts/layout';
import client from '../../lib/sanity';

import Link from 'next/link';
// import Image from 'next/image';
// import MeasureOverview from '../../components/measure-overview';
// import LinkIcon from '../../components/link-icon';

const pathsQuery = `
*[_type == "measure" && defined(slug.current)][].slug.current
`
const measureQuery = `
*[_type == "measure" && slug.current == $slug] [0] {
    _id,
    titel,
    thema,
}
`
  

export default function TestMeasure({data}) {
    return (
        <Layout>
            <div className='gradient-bg'>
        <div className='global-margin pt-10 overflow-x-hidden'>
          {data.measure?.thema === 'houtbouw' ? (
            <Link href='/measures/houtbouw' className=''>
              <a className='text-greenLink breadcrumb'>← Terug</a>
            </Link>
          ) : (
            <Link href='/measures/windturbines' className=''>
              <a className='text-greenLink breadcrumb'>← Terug</a>
            </Link>
          )}


          
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
  console.log(measure.description)
  return {
    props: { data: { measure } },
    revalidate: 1,
  };
}
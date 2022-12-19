import Layout from '../../components/layouts/layout';
import client from '../../lib/sanity';

import Link from 'next/link';
import LinkIcon from '../../components/link-icon';
import { PortableText } from '@portabletext/react';
// import Image from 'next/image';
import MeasureOverviewTest from '../../components/measure-overview-test';
import MeasureTableTest from '../../components/measure-table-test';

const pathsQuery = `
*[_type == "measure" && defined(slug.current)][].slug.current
`;
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
    content
}
`;


const components = {
  list: {
    bullet: ({children}) => <ul className="list-disc pl-6">{children}</ul>,
    number: ({children}) => <div className='newlineDisplay body-text-mobile sm:body-text truncate'><ol className='list-decimal pl-6 pb-4 mobile sm:main'>{children}</ol></div>
  },
  block: {
    h2: ({children}) => <h2 className='pb-2 mobile sm:main'>{children}</h2>,
    // need to add other styles here
    normal: ({children}) => <p className='newlineDisplay body-text-mobile sm:body-text pb-4'>{children}</p>
  },
  marks: {
    link: ({ children, value }) =>(
      value.blank == true ? (
        <>
          <a
            className='text-greenLink link-mobile sm:link'
            href={value.href}
            target='_blank'
            rel='noreferrer'
          >
            {children}
          </a>
          <LinkIcon />
        </>
      ) : (
        <a className='text-greenLink link-mobile sm:link' href={value.href}>
          {children}
        </a>
      )
      ),
  },
};

export default function TestMeasure({ data }) {


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

          <MeasureOverviewTest data={data} viewport='desktop' />
          <div className='grid grid-cols-1 sm:grid-cols-3 '>
            <div className='w-full sm:max-w-3xl pb-20 col-span-2 '>
              <h1 className='hidden lg:block my-9 text-green1 mobile sm:main'>
                {data.measure?.titel}
              </h1>

              <div className='py-4 m'>
                <PortableText value={data.measure?.content} components={components} />
                {}
              </div>
              <MeasureTableTest data={data} />
            </div>
            <MeasureOverviewTest data={data} viewport='mobile' />
          </div>
        </div>
      </div>
    </Layout>
  );
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

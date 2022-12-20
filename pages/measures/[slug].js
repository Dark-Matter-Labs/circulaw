import Layout from '../../components/layouts/layout';
import client from '../../lib/sanity';

import Link from 'next/link';
import LinkIcon from '../../components/link-icon';
import { PortableText } from '@portabletext/react';
// import Image from 'next/image';
import MeasureOverview from '../../components/measure-overview';
import MeasureTable from '../../components/measure-table';
import CustomButton from '../../components/custom-button';

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
    content,
}
`;

const components = {
  types: {
    greenBox: ({ value }) => (
      <div className='bg-green3 border-none rounded-lg w-4/5'>
        <h3 className='pl-4 pt-4 pb-2'>{value?.greenBoxTitle}</h3>
        <div className='pl-4 pb-4 body-text-mobile sm:body-text'>{value?.greenBoxText}</div>
      </div>
    ),
    hoverText: ({ value, isInline }) => (
      <>
        <button
          type='button'
          className='group'
          style={{ display: isInline ? 'inline-block' : 'block' }}
        >
          <svg
            className='text-gray-300 w-5 h-5'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path
              fillRule='evenodd'
              d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z'
              clipRule='evenodd'
            />
          </svg>
          <div className='inline-block max-w-xs absolute invisible group-hover:visible z-10 py-2 px-3 bg-gray-300 text-black text-sm text-left rounded-lg opacity-0 group-hover:opacity-100 transition tooltip'>
            {value.hoverText}
          </div>
        </button>
      </>
    ),
    pdfBlock: ({ value }) => {
      // eslint-disable-next-line
      const [_file, id, extension] = value.asset._ref.split('-'); 
      return (
        <div className='bg-green1 px-10 py-10 mb-8'>
          <h2 className='pb-2 mobile sm:main text-white'>{value.pdfTitle}</h2>
          <p className='body-text-mobile sm:body-text text-white1 pb-4'>{value.pdfText}</p>
          <a
            href={`https://cdn.sanity.io/files/${
              process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '2vfoxb3h'
            }/${process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'}/${id}.${extension}`}
            target='_blank'
            rel='noreferrer'
          >
            <CustomButton color='toPdf'>Bekijk de leidraad (pdf)→</CustomButton>
          </a>
        </div>
      );
    },
    // need to add hover text comp
  },
  list: {
    bullet: ({ children }) => <div className='newlineDisplay body-text-mobile sm:body-text truncate'><ul className='list-disc pl-6 pb-4 mobile sm:main'>{children}</ul></div>,
    number: ({ children }) => (
      <div className='newlineDisplay body-text-mobile sm:body-text truncate'>
        <ol className='list-decimal pl-6 pb-4 mobile sm:main'>{children}</ol>
      </div>
    ),
  },
  block: {
    h2: ({ children }) => <h2 className='pb-2 mobile sm:main'>{children}</h2>,
    // need to add other styles here
    normal: ({ children }) => (
      <p className='newlineDisplay body-text-mobile sm:body-text pb-4'>{children}</p>
    ),
  },
  marks: {
    link: ({ children, value }) =>
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
      ),
  },
};

export default function TestMeasure({ data }) {
  return (
    <Layout>
      <div className='gradient-bg'>
        <div className='global-margin pt-10 overflow-x-hidden'>
          {/* BREADCRUMB */}
          {data?.measure?.thema === 'houtbouw' ? (
            <Link href='/measures/houtbouw' className=''>
              <a className='text-greenLink breadcrumb'>← Terug</a>
            </Link>
          ) : (
            <Link href='/measures/windturbines' className=''>
              <a className='text-greenLink breadcrumb'>← Terug</a>
            </Link>
          )}

          <MeasureOverview data={data} viewport='desktop' />
          <div className='grid grid-cols-1 sm:grid-cols-3 '>
            <div className='w-full sm:max-w-3xl pb-20 col-span-2 '>
              <h1 className='hidden lg:block my-9 text-green1 mobile sm:main'>
                {data?.measure?.titel}
              </h1>

              <div className='py-4 m'>
                <PortableText value={data?.measure?.content} components={components} />
                {}
              </div>
              <MeasureTable data={data} />
            </div>
            <MeasureOverview data={data} viewport='mobile' />
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

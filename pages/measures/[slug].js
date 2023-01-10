import Layout from '../../components/layouts/layout';
import client from '../../lib/sanity';

import Image from 'next/image';
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
    subtitel,
    thema,
    rLadder,
    subrechtsgebied,
    juridischInvloed,
    invloedTooltipText,
    juridischeHaalbaarheid,
    JHTooltipText,
    rechtsgebied,
    citeertitel,
    artikel,
    artikelLink,
    lawDate,
    overheidslaag,
    content,
    juridischeToelichting,
}
`;

const components = {
  types: {
    greenBox: ({ value }) => (
      <div className='bg-green6 w-full px-6 py-8 my-14'>
        <h2 className='pb-6 urban'>{value?.greenBoxTitle}</h2>
        <div className='body-text-mobile sm:body-text'>{value?.greenBoxText}</div>
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
            width='20'
            height='25'
            viewBox='0 0 24 30'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <circle cx='12' cy='15' r='12' fill='#676868' />
            <path
              d='M10.7031 10.0078C10.7031 9.23177 11.1354 8.84375 12 8.84375C12.8646 8.84375 13.2969 9.23177 13.2969 10.0078C13.2969 10.3776 13.1875 10.6667 12.9688 10.875C12.7552 11.0781 12.4323 11.1797 12 11.1797C11.1354 11.1797 10.7031 10.7891 10.7031 10.0078ZM13.1875 21H10.8047V12.2656H13.1875V21Z'
              fill='#F8FAF8'
            />
          </svg>
          <div className='inline-block max-w-sm absolute invisible group-hover:visible z-10 py-3 px-6 bg-grey2 text-black1 tooltip-hover-text opacity-0 group-hover:opacity-100 transition tooltip'>
            {value.hoverText}
          </div>
        </button>
      </>
    ),
    pdfBlock: ({ value }) => {
      // eslint-disable-next-line
      const [_file, id, extension] = value.asset._ref.split('-');
      return (
        <div className='bg-green1'>
          <div className=' gradient-pdf p-10 my-16 relative overflow-hidden'>
            <div className='absolute -bottom-44 -right-44 h-96 w-96'>
              <Image src='/pdf-deco.png' alt='decorative image' width={584} height={562} />
            </div>
            <h2 className='pb-2 mobile sm:urban text-white'>{value.pdfTitle}</h2>
            <p className='body-text-mobile sm:body-text text-white1 pb-4'>{value.pdfText}</p>
            <a
              href={`https://cdn.sanity.io/files/${
                process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '2vfoxb3h'
              }/${process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'}/${id}.${extension}`}
              target='_blank'
              rel='noreferrer'
            >
              <CustomButton color='toPdf'>
                Bekijk de leidraad &nbsp;
                <Image
                  src='/icons/pdf-icon.svg'
                  width={23}
                  height={23}
                  alt='icon of pdf'
                  className='ml-2'
                />
              </CustomButton>
            </a>
          </div>
        </div>
      );
    },
    smallPara: ({ value }) => (
      <div className='flex justify-left pl-12'>
        <div className='mb-12 pt-10 w-5/6'>
          <h4 className='urban'>{value.smallParaTitle}</h4>
          <p className='body-small'>{value.smallParaText}</p>
        </div>
      </div>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <div className='newlineDisplay body-text-mobile sm:body-text truncate'>
        <ul className='list-disc pl-6 pb-4 mobile sm:main'>{children}</ul>
      </div>
    ),
    number: ({ children }) => (
      <div className='newlineDisplay body-text-mobile sm:body-text truncate'>
        <ol className='list-decimal pl-6 pb-4 mobile sm:main'>{children}</ol>
      </div>
    ),
  },
  block: {
    h2: ({ children }) => <h2 className='pt-10 pb-4 mobile sm:urban'>{children}</h2>,
    firstH2: ({ children }) => <h2 className='pb-8 mobile sm:urban'>{children}</h2>,

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
            className='text-greenLink link-mobile sm:link inline-flex'
            href={value.href}
            target='_blank'
            rel='noreferrer'
          >
            {children}
            <LinkIcon />
          </a>
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
      <div className='measure-bg'>
        <div className='global-margin pt-10 overflow-x-hidden'>
          <div className='grid grid-cols-12 content-center'>
            <div className='col-span-12 row-span-1 h-12 mt-4'>
              {/* BREADCRUMB */}
              {data?.measure?.thema === 'houtbouw' ? (
                <Link href='/measures/houtbouw' className=''>
                  <span className='breadcrumb'>{'<'} Terug</span>
                </Link>
              ) : (
                <Link href='/measures/windturbines' className=''>
                  <span className='text-greenLink breadcrumb flex col-span-12'>← Terug</span>
                </Link>
              )}
            </div>
            <div className='col-span-12 row-span-1'>
              <h1 className='hidden lg:block pt-4 mb-7 urban'>{data?.measure?.titel}</h1>
            </div>
            <div className='col-span-7 row-span-1'>
              <p className='subheading py-4 mb-7'>{data?.measure?.subtitel}</p>
            </div>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-3 '>
            <div className='w-full sm:max-w-3xl pb-20 col-span-2 '>
              <div className='py-4 m'>
                <PortableText value={data?.measure?.content} components={components} />
                {}
              </div>
              <MeasureTable data={data} />
            </div>
            <MeasureOverview data={data} viewport='mobile' />
            <MeasureOverview data={data} viewport='desktop' />
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

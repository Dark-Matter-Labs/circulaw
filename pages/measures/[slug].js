import Layout from '../../components/layouts/layout';
import client from '../../lib/sanity';
import Image from 'next/image';
import Link from 'next/link';
import LinkIcon from '../../components/link-icon';
import { PortableText } from '@portabletext/react';
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
      <div className='-mx-8 sm:mx-0 my-10'>
        <div className='bg-green-300 w-full px-8 py-8'>
          <h2 className='pb-6 mobile sm:desktop'>{value?.greenBoxTitle}</h2>
          <div className=' p-lg'>{value?.greenBoxText}</div> {/* need to change */}
        </div>
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
            className='inline'
            width='24'
            height='24'
            viewBox='0 2 30 30'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <circle cx='12' cy='15' r='12' fill='#676868' />
            <path
              d='M10.7031 10.0078C10.7031 9.23177 11.1354 8.84375 12 8.84375C12.8646 8.84375 13.2969 9.23177 13.2969 10.0078C13.2969 10.3776 13.1875 10.6667 12.9688 10.875C12.7552 11.0781 12.4323 11.1797 12 11.1797C11.1354 11.1797 10.7031 10.7891 10.7031 10.0078ZM13.1875 21H10.8047V12.2656H13.1875V21Z'
              fill='#F8FAF8'
            />
          </svg>
          <div className='inline-block z-90 max-w-xs absolute invisible group-hover:visible z-10 py-3 px-6 bg-black-white-300 text-black-white-800 popup-base opacity-0 group-hover:opacity-100 transition tooltip'>
            {value.hoverText}
            {console.log(value.hoverText)}
          </div>
        </button>
      </>
    ),
    pdfBlock: ({ value }) => {
      // eslint-disable-next-line
      const [_file, id, extension] = value.asset._ref.split('-');
      return (
        <div className='-mx-8 sm:mx-0'>
          <div className='bg-green-600 '>
            <div className='gradient-pdf p-10 my-10 relative overflow-hidden'>
              <div className='absolute -bottom-44 -right-44 h-96 w-96 invisible md:visible'>
                <Image src='/pdf-deco.png' alt='decorative image' width={584} height={562} />
              </div>
              <h2 className='pb-2 mobile sm:desktop text-white'>{value.pdfTitle}</h2>{' '}
              {/* need to change text white */}
              <p className=' p-lg text-black-white-200 pb-4'>{value.pdfText}</p>{' '}
              {/* need to change body text */}
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
        </div>
      );
    },
    smallPara: ({ value }) => (
      <div className='flex justify-left pl-8 sm:pl-12'>
        <div className='mb-10 pt-10 w-5/6'>
          <h4 className='mobile sm:desktop'>{value.smallParaTitle}</h4>
          <p className=' p-base'>{value.smallParaText}</p>
        </div>
      </div>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <div className='newlineDisplay p-lg truncate'>
        <ul className='list-disc pl-6 pb-4 p-lg'>{children}</ul>
      </div>
    ),
    number: ({ children }) => (
      <div className='newlineDisplay p-lg truncate'>
        <ol className='list-decimal pl-6 pb-4 p-lg'>{children}</ol>
      </div>
    ),
  },
  listItem: {
    number: ({ children }) => <li className='py-0.5 p-lg'>{children}</li>,
    bullet: ({ children }) => <li className='py-0.5 p-lg'>{children}</li>,
  },
  block: {
    firstH2: ({ children }) => <h2 className='pb-[18px] mobile sm:desktop'>{children}</h2>,
    h2: ({ children }) => <h2 className='pt-14 pb-[18px] mobile sm:desktop'>{children}</h2>,
    h3: ({ children }) => <h3 className='pt-14 pb-[18px] mobile sm:desktop'>{children}</h3>,
    // need to add other styles here
    normal: ({ children }) => (
      <p className='newlineDisplay p-lg py-2'>{children}</p> // check if this is correct
    ),
  },
  marks: {
    link: ({ children, value }) =>
      value.blank == true ? (
        <>
          <a
            className='text-green-500  link-lg inline-flex'
            href={value.href}
            target='_blank'
            rel='noreferrer'
          >
            <span>{children}</span>
            <LinkIcon size='desktop' />
          </a>
        </>
      ) : (
        <a className='text-green-500  link-lg' href={value.href}>
          {children}
        </a>
      ),
  },
};

export default function Measure({ data }) {
  return (
    <Layout>
      <div className='measure-bg'>
        <div className='global-margin sm:pt-10 '>
          <div className='grid grid-cols-1 sm:grid-cols-12 content-center'>
            <div className='sm:col-span-12 row-span-1 h-12 mt-4'>
              {/* BREADCRUMB */}
              {data?.measure?.thema === 'houtbouw' && (
                <Link href='/measures/houtbouw' className=''>
                  <span className='breadcrumb'>{'<'} Terug</span>{' '}
                  {/* should all breadcrumbs be green this is black in figma */}
                </Link>
              )}
              {data?.measure?.thema === 'circulaire-windturbines' && (
                <Link href='/measures/windturbines' className=''>
                  <span className='text-green-500 breadcrumb flex col-span-12'>← Terug</span>{' '}
                  {/* should all breadcrumbs be green this is black in figma */}
                </Link>
              )}
              {data?.measure?.thema === 'matrassen' && (
                <Link href='/measures/matrassen' className=''>
                  <span className='text-green-500 breadcrumb flex col-span-12'>← Terug</span>{' '}
                  {/* should all breadcrumbs be green this is black in figma */}
                </Link>
              )}
            </div>
            <div className='sm:col-span-12 row-span-1'>
              <h1 className='lg:block sm:pt-4 pb-6 sm:pb-10 mobile sm:desktop'>
                {data?.measure?.titel}
              </h1>
            </div>
            {data?.measure?.subtitel && (
              <div className='sm:col-span-7 row-span-1'>
                <h2 className='lg:block p-lg sm:p-xl pb-10'> {data?.measure?.subtitel}</h2>
              </div>
            )}
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-3 '>
            <MeasureOverview data={data} viewport='mobile' />
            <div className='sm:max-w-3xl pb-20 col-span-2 '>
              <div className='py-4'>
                <PortableText value={data?.measure?.content} components={components} />
              </div>
              <MeasureTable data={data} />
            </div>
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

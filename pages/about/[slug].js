import { PortableText } from '@portabletext/react';
import Layout from '../../components/layouts/layout'
import client from '../../lib/sanity';
import CustomButton from '../../components/custom-button';
import Image from 'next/image';
import LinkIcon from '../../components/link-icon';
import Link from 'next/link';
import OverNav from '../../components/over-nav';

const pathsQuery = `
*[_type == "aboutPage" && defined(slug.current)][].slug.current
`;

const pageQuery = `
*[_type == "aboutPage" && slug.current == $slug][0]{
    pageTitle,
    aboutPageContent,
    slug,
}
`

const components = {
    types: {
      greenBox: ({ value }) => (
        <div className='-mx-8 sm:mx-0 my-10'>
          <div className='bg-green6 w-full px-8 py-8'>
            <h2 className='pb-6 h3-mob-new urban'>{value?.greenBoxTitle}</h2>
            <div className='body-text-mobile sm:body-text'>{value?.greenBoxText}</div>
          </div>
        </div>
      ),
      hoverText: ({ value, isInline }) => (
        <>
          <button
            type='button'
            className='group inline-flex static'
            style={{ display: isInline ? 'inline-block' : 'block' }}
          >
            <svg
              className='inline'
              width='24'
              height='24'
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
            <div className='inline-block max-w-xs absolute invisible group-hover:visible z-10 py-3 px-6 bg-grey2 text-black1tooltip-hover-text-mob sm:tooltip-hover-text opacity-0 group-hover:opacity-100 transition tooltip'>
              {value.hoverText}
            </div>
          </button>
        </>
      ),
      pdfBlock: ({ value }) => {
        // eslint-disable-next-line
        const [_file, id, extension] = value.asset._ref.split('-');
        return (
          <div className='-mx-8 sm:mx-0'>
            <div className='bg-green1 '>
              <div className=' gradient-pdf p-10 my-10 relative overflow-hidden'>
                <div className='absolute -bottom-44 -right-44 h-96 w-96 invisible md:visible'>
                  <Image src='/pdf-deco.png' alt='decorative image' width={584} height={562} />
                </div>
                <h2 className='pb-2 h3-mob-new sm:urban text-white'>{value.pdfTitle}</h2>
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
          </div>
        );
      },
      smallPara: ({ value }) => (
        <div className='flex justify-left pl-8 sm:pl-12'>
          <div className='mb-10 pt-10 w-5/6'>
            <h4 className='h4-mob-new urban'>{value.smallParaTitle}</h4>
            <p className='body-text-mobile sm:body-small'>{value.smallParaText}</p>
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
    listItem: {
      number: ({ children }) => <li className='py-0.5'>{children}</li>,
      bullet: ({ children }) => <li className='py-0.5'>{children}</li>,
    },
    block: {
      firstH2: ({ children }) => <h2 className='pb-8 mob-new sm:urban'>{children}</h2>,
      h2: ({ children }) => <h2 className='py-8 mob-new sm:urban'>{children}</h2>,
      h3: ({children}) => <h3 className='py-8 h3-mob-new sm:urban'>{children}</h3>,
      // need to add other styles here
      normal: ({ children }) => (
        <p className='newlineDisplay body-text-mobile sm:body-text py-2'>{children}</p>
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
              <span>{children}</span>
              <LinkIcon size='desktop' />
            </a>
          </>
        ) : (
          <a className='text-greenLink link-mobile sm:link' href={value.href}>
            {children}
          </a>
        ),
    },
  };
  

export default function AboutPage({data}) {
  console.log(data)
    return (
        <Layout>
            <div className='global-margin  pb-8 text-black1'>
              <div className='grid grid-cols-1 lg:grid-cols-3'>
               <div className='col-span-2'> 
              <div className='breadcrumb pt-8 text-greenLink'>
                <Link href='/'>Home &gt;</Link>
                </div>
                <div className='max-w-4xl'>
                    <h1 className='lg:block sm:pt-10 py-6 sm:pb-10 mob-new sm:urban'>{data?.aboutPage.pageTitle}</h1>
                        <PortableText value={data?.aboutPage?.aboutPageContent} components={components} />
                </div>
                </div>
                <div className='mx-20 my-20 max-w-sm'>
                  <OverNav pagename={data?.aboutPage?.slug.current} />
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
    console.log(slug, 'slug')
    const aboutPage = await client.fetch(pageQuery,  {slug} );
    console.log(aboutPage, 'aboutPage')
    return {
      props: { data: { aboutPage } },
      revalidate: 1,
    };
  }
  
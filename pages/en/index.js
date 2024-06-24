import Link from 'next/link';
import { useRouter } from 'next/router';
import CustomButton from '@/components/custom-button';
import Layout from '@/components/layouts/layout';
import { enPageComponents } from '@/lib/portable-text/pt-components';
import { enPageQuery } from '@/lib/queries';
import { client } from '@/lib/sanity';
import { ArrowRightIcon } from '@heroicons/react/outline';
import { PortableText } from '@portabletext/react';

export default function English({ data }) {
  const router = useRouter();

  return (
    <>
      <Layout title='Regulations for a circular economy' pageUrl={router.asPath}>
        <div className='bg-en-background bg-center bg-cover relative z-0'>
          <div className='hidden sm:block h-auto bg-en-header bg-left bg-cover'>
            <div className='global-margin flex h-full'>
              <div className='flex items-center justify-center flex-wrap text-center text-gray-100 w-3/5 mx-auto py-12'>
                <h1 className='heading-2xl-semibold sm:heading-5xl-semibold text-gray-100 py-10'>
                  Regulations for a circular economy
                </h1>
                <p className='p-base'>
                  CircuLaw is a knowledge platform dedicated to enabling the transition to a
                  circular economy by identifying opportunities in current law to support a circular
                  future.
                </p>
                <p className='p-base pb-3'>
                  For now, CircuLaw is available{' '}
                  <Link href='/' className='link-interaction-dark-bg'>
                    <span className='text-green-300 sm:link-lg inline-block hover:text-green-200 active:text-green-400 focus:text-green-100 focus:right-2 focus:ring-white '>
                      in Dutch
                    </span>
                  </Link>{' '}
                  only.{' '}
                </p>
              </div>
            </div>
          </div>

          <div className='w-full bg-en-header bg-cover bg-center'>
            <div className='block global-margin sm:hidden pt-5'>
              <div className='py-3 text-gray-100'>
                <h1 className='pb-3 heading-2xl-semibold sm:heading-5xl-semibold'>
                  Regulations for a circular economy
                </h1>
                <p className='pb-3 p-base'>
                  CircuLaw is a knowledge platform dedicated to enabling the transition to a
                  circular economy by identifying opportunities in current law to support a circular
                  future.
                </p>
                <p className='p-base'>
                  For now, CircuLaw is available{' '}
                  <Link href='/'>
                    <span className='text-green-300 hover:underline link-base inline-block'>
                      in Dutch
                    </span>
                  </Link>{' '}
                  only.{' '}
                </p>
              </div>
            </div>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-3 global-margin justify-start pb-20 pt-10 sm:py-20'>
            <div className='col-span-2 text-gray-100 sm:max-w-3xl'>
              <PortableText components={enPageComponents} value={data?.englishContent} />
              <div>
                <Link href='/' className='  sm:link-lg hidden lg:block'>
                  <span className='link-base link-interaction-dark-bg '>
                    Check out the website in Dutch
                  </span>
                </Link>
              </div>
            </div>

            <div className='col-span-1 max-w-md block w-full float-right px-8 lg:ml-6 bg-green-800 text-gray-100 h-[30rem] lg:h-[40rem] xl:h-[32rem] sticky top-40 lg:mb-20'>
              <div className='w-full h-full grid grid-cols-1 items-center'>
                <div className='py-6 p-base'>
                  <p>For now, CircuLaw is available in Dutch only</p>
                </div>
                <div className='pb-6'>
                  <Link href='/'>
                    <CustomButton color='home'>
                      View website (Dutch)&nbsp;
                      <ArrowRightIcon className='inline-block h-4 w-4' aria-hidden='true' />
                    </CustomButton>
                  </Link>
                </div>
                <hr />
                <div className='py-6'>
                  <p className='p-base'>
                    In preparation of the next steps for CircuLaw we have been delving into EU
                    legislation. This resulted in a series of white papers in English.
                  </p>
                </div>
                <div className='pb-6'>
                  <Link
                    href='https://openresearch.amsterdam/en/page/90992/europese-wet--en-regelgeving-circulaire-economie'
                    target='_blank'
                  >
                    <CustomButton color='home'>
                      View whitepapers (English)&nbsp;
                      <ArrowRightIcon className='inline-block h-4 w-4' aria-hidden='true' />
                    </CustomButton>
                  </Link>
                </div>
                <hr />
                <div className='py-6'>
                  <p className='p-base'>
                    Questions? Contact us:
                    <a href='mailto:info@circulaw.nl'>
                      {' '}
                      <span className='block underline font-semibold link-interaction-dark-bg'>
                        info@Circulaw.nl
                      </span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const data = await client.fetch(enPageQuery);
  return {
    props: {
      data: data,
    },
    revalidate: 1,
  };
}

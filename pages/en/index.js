import { PortableText } from '@portabletext/react';
import { groq } from 'next-sanity';
import Link from 'next/link';
import Layout from '../../components/layouts/layout';
import { client } from '../../lib/sanity';
import { fetcher } from '../../utils/swr-fetcher';
import {
  h1Component,
  h2Component,
  h3Component,
  normalTextComponent,
} from '../../lib/portable-text/portable-text-blocks';
import {
  greenBoxComponent,
  hoverTextComponent,
  pdfBlockComponentAboutPage,
  smallParaComponent,
} from '../../lib/portable-text/portable-text-types';
import {
  bulletComponent,
  numberComponent,
  bulletItemComponent,
  numberItemComponent,
} from '../../lib/portable-text/portable-text-lists';
import { linkBGDarkComponent } from '../../lib/portable-text/portable-text-marks';
import CustomButton from '../../components/custom-button';
import { ArrowRightIcon } from '@heroicons/react/outline';

const components = {
  types: {
    greenBox: greenBoxComponent,
    hoverText: hoverTextComponent,
    pdfBlock: pdfBlockComponentAboutPage,
    smallPara: smallParaComponent,
  },
  list: {
    bullet: bulletComponent,
    number: numberComponent,
  },
  listItem: {
    bullet: bulletItemComponent,
    number: numberItemComponent,
  },
  block: {
    h1: h1Component,
    h2: h2Component,
    h3: h3Component,
    normal: normalTextComponent,
  },
  marks: {
    link: linkBGDarkComponent,
  },
};

export default function English({ data }) {
  return (
    <>
      <Layout>
        <div className='bg-en-background bg-center bg-cover'>
          <div className='hidden sm:block h-auto bg-en-header bg-left bg-cover'>
            <div className='global-margin flex h-full'>
              <div className='flex items-center justify-center flex-wrap text-center text-black-white-200 w-3/5 mx-auto py-12'>
                <h1 className='sm:header text-black-white-200 py-10'>
                  Regulations for a circular economy
                </h1>
                <p className='p-base sm:p-lg'>
                  CircuLaw is a knowledge platform dedicated to enabling the transition to a
                  circular economy by identifying opportunities in current law to support a circular
                  future.
                </p>
                <p className='p-base sm:p-lg pb-3'>
                  For now, CircuLaw is available{' '}
                  <Link href='/'>
                    <span className='text-green-300 sm:link-lg inline-block'>in Dutch</span>
                  </Link>{' '}
                  only.{' '}
                </p>
              </div>
            </div>
          </div>

          <div className='w-full bg-en-header bg-cover bg-center'>
            <div className='block global-margin sm:hidden pt-5'>
              <div className='py-3 text-black-white-200'>
                <h1 className='mobile pb-3'>Regulations for a circular economy</h1>
                <p className='pb-3 p-base'>
                  CircuLaw is a knowledge platform dedicated to enabling the transition to a
                  circular economy by identifying opportunities in current law to support a circular
                  future.
                </p>
                <p className='p-base sm:p-lg'>
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
            <div className='col-span-2 text-black-white-200 sm:max-w-3xl'>
              <PortableText components={components} value={data?.englishContent} />
              <div>
              <Link href='/' className='text-green-300 link-base sm:link-lg link-interaction-dark-bg hidden lg:block'>
              Check out the website in Dutch
              </Link>
              </div>
            </div>
            
            <div className='col-span-1 max-w-md block w-full float-right px-8 lg:ml-6 bg-green-800 text-black-white-200 h-[30rem] lg:h-[40rem] xl:h-[32rem] sticky top-40 lg:mb-20'>
              <div className='w-full h-full grid grid-cols-1 items-center'>
                <div className='py-6 p-base sm:p-lg'>
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
                  <p className='p-base sm:p-lg'>
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
                  <p className='p-base sm:p-lg'>
                    Questions? Contact us:
                    <a href='mailto:info@circulaw.nl'>
                      {' '}
                      <span className='block underline font-semibold link-interaction-dark-bg text-green-300'>info@Circulaw.nl</span>
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
  const data = await client.fetch(groq`*[_type == "englishPage"][0]{englishContent}`, fetcher);
  return {
    props: {
      data: data,
    },
    revalidate: 1,
  };
}

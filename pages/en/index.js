import { PortableText } from '@portabletext/react';
import { groq } from 'next-sanity';
import Link from 'next/link';
import Layout from '../../components/layouts/layout';
import client from '../../lib/sanity';
import { fetcher } from '../../utils/swr-fetcher';
import { h1Component, h2Component, h3Component, normalTextComponent } from '../../lib/portable-text/portable-text-blocks';
import { greenBoxComponent, hoverTextComponent, pdfBlockComponentAboutPage, smallParaComponent} from '../../lib/portable-text/portable-text-types'
import { bulletComponent, numberComponent, bulletItemComponent, numberItemComponent } from '../../lib/portable-text/portable-text-lists'
import { linkComponent } from '../../lib/portable-text/portable-text-marks'
import CustomButton from '../../components/custom-button';


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
    link: linkComponent,
  },
};

export default function English({data}) {
  return (
    <>
      <Layout>
        <div className='h-[50vh] bg-houtbouw-hero bg-center bg-cover'>
        <div className='global-margin flex h-full'>
          <div className='flex items-center justify-center flex-wrap text-center text-black-white-200 w-3/5 mx-auto py-12'>
          <h1 className='mobile sm:desktop text-black-white-200 py-10'>Regulations for a circular economy</h1>
          <p className='p-base sm:p-lg'>CircuLaw is a knowledge platform dedicated to enabling the transition to a circular economy by identifying opportunities in current law to support a circular future.</p>
          <p className='p-base sm:p-lg'>For now, CircuLaw is available <Link href='/'><span className='text-green-300 hover:underline inline-block'>in Dutch</span></Link> only. </p>
          </div>
        </div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-3 global-margin justify-start py-20'>
          <div className='col-span-2'>
            <PortableText components={components} value={data?.englishContent} />
          </div>
          <div className='col-span-1 w-full hidden sm:block float-right px-8 ml-6 bg-black-white-200 h-[30rem] sticky top-40 mb-20'>
            <div className='w-full h-full'>
              <div className='py-6 p-base sm:p-lg'><p>For now, CircuLaw is available in Dutch only</p></div>
              <div className='pb-6'><CustomButton>View website (dutch) -</CustomButton></div>
              <hr />
              <div className='py-6'><p className='p-base sm:p-lg'>In preparation of the next steps for CircuLaw we have been delving into EU legislation. This resulted in a series of white papers in English.</p></div>
              <div className='pb-6'><CustomButton>View whitepapers (English) -</CustomButton></div>
              <hr />
              <div className='py-6'><p className='p-base sm:p-lg'>Questions? Contact us: <span className='inline-block underline'>
              info@Circulaw.nl
              </span>
              </p></div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}


export async function getStaticProps() {
  const data = await client.fetch(groq`*[_type == "englishPage"][0]{englishContent}`, fetcher)
  return {
    props: {
      data: data, 
    },
    revalidate: 1, 
  }
}
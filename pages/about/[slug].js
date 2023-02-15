import { PortableText } from '@portabletext/react';
import Layout from '../../components/layouts/layout';
import client from '../../lib/sanity';
import Link from 'next/link';
import OverNav from '../../components/over-nav';
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
import {
  firstH2Component,
  h2Component,
  h3Component,
  normalTextComponent,
} from '../../lib/portable-text/portable-text-blocks';
import { linkComponent } from '../../lib/portable-text/portable-text-marks';
import { aboutPagePathsQuery, aboutPageQuery } from '../../lib/querys';

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
    firstH2: firstH2Component,
    h2: h2Component,
    h3: h3Component,
    normal: normalTextComponent,
  },
  marks: {
    link: linkComponent,
  },
};

export default function AboutPage({ data }) {
  return (
    <Layout>
      <div className='global-margin pb-8 text-black-white-800'>
        <div className='grid grid-cols-1 w-full md:grid-cols-3'>
          <div className='col-span-2'>
            <div className='breadcrumb pt-8 text-green-500'>
              <Link href='/'>Home &gt;</Link>
            </div>
            <div className='max-w-4xl'>
              <h1 className='lg:block sm:pt-10 py-6 sm:pb-10 mobile sm:desktop'>
                {data?.aboutPage?.pageTitle}
              </h1>
              <PortableText value={data?.aboutPage?.aboutPageContent} components={components} />
            </div>
          </div>
          {data?.aboutPage?.pageTitle !== 'VRAAG & ANTWOORD' && (
            <div className='mt-3 md:ml-5 lg:mx-5 lg:my-20 max-w-sm col-span-1'>
              <OverNav pagename={data?.aboutPage?.slug.current} />
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = await client.fetch(aboutPagePathsQuery);
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = '' } = context.params;
  const aboutPage = await client.fetch(aboutPageQuery, { slug });
  return {
    props: { data: { aboutPage } },
    revalidate: 1,
  };
}

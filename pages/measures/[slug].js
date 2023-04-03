import { useRouter } from 'next/router';
import { useState } from 'react';
import { PortableText } from '@portabletext/react';
import { ArrowLeftIcon, LinkIcon } from '@heroicons/react/outline';
import {
  EmailShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from 'next-share';
import { SocialIcon } from 'react-social-icons';

import Layout from '../../components/layouts/layout';
import client from '../../lib/sanity';
import MeasureOverview from '../../components/measure-overview';
import MeasureTable from '../../components/measure-table';
import {
  greenBoxComponent,
  hoverTextComponent,
  pdfBlockComponentMeasurePage,
  smallParaComponent,
  dropDownComponent,
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
import { measurePagePathsQuery, measureQuery } from '../../lib/queries';

const components = {
  types: {
    greenBox: greenBoxComponent,
    hoverText: hoverTextComponent,
    pdfBlock: pdfBlockComponentMeasurePage,
    smallPara: smallParaComponent,
    dropDown: dropDownComponent,
  },
  list: {
    bullet: bulletComponent,
    number: numberComponent,
  },
  listItem: {
    number: bulletItemComponent,
    bullet: numberItemComponent,
  },
  block: {
    firstH2: firstH2Component,
    h2: h2Component,
    h3: h3Component,
    // need to add other styles here
    normal: normalTextComponent,
  },
  marks: {
    link: linkComponent,
  },
};

export default function Measure({ data }) {
  const router = useRouter();
  const { asPath } = useRouter();
  const [showLinkCopied, setShowLinkCopied] = useState(false);

  return (
    <Layout>
      <div className='measure-bg'>
        <div className='global-margin sm:pt-10 '>
          <div className='grid grid-cols-1 sm:grid-cols-12 content-center'>
            <div className='sm:col-span-12 row-span-1 h-12 mt-4'>
              {/* BREADCRUMB */}
              <button type='button' onClick={() => router.back()}>
                <span className='breadcrumb flex justify-center items-center underline'>
                  <ArrowLeftIcon className='inline-block h-4 w-4 pr-1' aria-hidden='true' /> Terug
                </span>{' '}
                {/* should all breadcrumbs be green this is black in figma */}
              </button>
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
            <div>
              <div className='float-right pb-2'>
                <span className='pr-2' title='Share link on LinkedIn'>
                  <LinkedinShareButton
                    url={'https://circulaw.nl' + asPath}
                    title={'Graag deel ik met jou deze informatie van CircuLaw.nl: ' + data?.measure?.titel}
                  >
                    <SocialIcon
                      url={'https://circulaw.nl' + asPath}
                      network='linkedin'
                      style={{ height: 32, width: 32 }}
                      bgColor='#035E46'
                      fgColor='#F8FAF8'
                    />
                  </LinkedinShareButton>
                </span>
                <span className='pr-2' title='Share link on Twitter'>
                  <TwitterShareButton
                    url={'https://circulaw.nl' + asPath}
                    title={'Graag deel ik met jou deze informatie van CircuLaw.nl: ' + data?.measure?.titel}
                  >
                    <SocialIcon
                      url={'https://circulaw.nl' + asPath}
                      network='twitter'
                      style={{ height: 32, width: 32 }}
                      bgColor='#035E46'
                      fgColor='#F8FAF8'
                    />
                  </TwitterShareButton>
                </span>
                <span className='pr-2' title='Share link on Whatsapp'>
                  <WhatsappShareButton
                    url={'https://circulaw.nl' + asPath}
                    title={'Graag deel ik met jou deze informatie van CircuLaw.nl: ' + data?.measure?.titel}
                    separator=':: '
                  >
                    <SocialIcon
                      url={'https://circulaw.nl' + asPath}
                      network='whatsapp'
                      style={{ height: 32, width: 32 }}
                      bgColor='#035E46'
                      fgColor='#F8FAF8'
                    />
                  </WhatsappShareButton>
                </span>
                <span className='pr-2' title='Share link as email'>
                  <EmailShareButton
                    url={'https://circulaw.nl' + asPath}
                    subject={'Graag deel ik met jou deze informatie van CircuLaw.nl'}
                    title={'Voeg eigen boodschap toe. ' + data?.measure?.titel}
                  >
                    <SocialIcon
                      url={'https://circulaw.nl' + asPath}
                      network='email'
                      style={{ height: 32, width: 32 }}
                      bgColor='#035E46'
                      fgColor='#F8FAF8'
                    />
                  </EmailShareButton>
                </span>
                <span className='pr-2' title='Copy link to clipboard'>
                  <LinkIcon
                    className='inline-block p-1 h-8 w-8 bg-green-600 rounded-full text-white hover:cursor-pointer'
                    onClick={() => {
                      navigator.clipboard.writeText('https://circulaw.nl' + asPath);
                      setShowLinkCopied(true);
                      setTimeout(() => {
                        setShowLinkCopied(false);
                      }, 2000);
                    }}
                  />
                </span>
              </div>
              {showLinkCopied && <p>Link copied!</p>}
              <MeasureOverview data={data} viewport='desktop' />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = await client.fetch(measurePagePathsQuery);
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

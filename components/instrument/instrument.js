import { useRouter } from 'next/router';
import { PortableText } from '@portabletext/react';
import { ArrowLeftIcon } from '@heroicons/react/outline';

import InstrumentTable from './instrument-table';
import SocialButtons from '../../components/social-buttons';
import { instrumentPTComponents } from '../../lib/portable-text/pt-components';
import InstrumentMetaData from './instrument-metadata';
import InstrumentFeedbackBlock from './instrument-feedback-block';

export default function Instrument({ data }) {
  const router = useRouter();
  return (
    <div className='bg-grey-100 relative'>
      <InstrumentFeedbackBlock data={data} />
      <div className='global-margin sm:pt-10 '>
        <div className='grid grid-cols-1 sm:content-center mb-4'>
          <div className='row-span-1 h-12 mt-4 sm:w-11/12 max-w-[854px] sm:justify-self-center'>
            {/* BREADCRUMB */}
            <button type='button' onClick={() => router.back()}>
              <span className='breadcrumb text-green-600 flex justify-center items-center underline'>
                <ArrowLeftIcon className='inline-block h-4 w-4 pr-1' aria-hidden='true' /> Terug
              </span>{' '}
              {/* should all breadcrumbs be green this is black in figma */}
            </button>
            <div className='hidden sm:block float-right'>
              <SocialButtons title={data?.measure?.titel} viewport='desktop' />
            </div>
          </div>
        </div>

        <div className='grid grid-cols-1'>
          <div className='sm:w-11/12 max-w-[760px] sm:justify-self-center flex items-center'>
            {/* NOT GOOD TO HAVE H4 BEFORE H1 ??? */}
            <h4 className='uppercase mobile sm:desktop text-green-500'>
              {data?.measure?.thema.replace('-', ' ')}
            </h4>

            {/* placeholder */}
            <div className='bg-grey-600 text-grey-100 ml-2 px-2 h-6 rounded-[9px] p-xsm flex items-center'>
              Verkoop
            </div>
          </div>

          <div className='sm:w-11/12 max-w-[760px] sm:justify-self-center '>
            <h1 className='lg:block pb-4 pt-6 mobile sm:desktop'>{data?.measure?.titel}</h1>
          </div>
        </div>

        {/* Metadata */}
        <div className='grid grid-cols-1'>
          <div className='sm:w-11/12 max-w-[854px] sm:justify-self-center'>
            <InstrumentMetaData data={data} />
          </div>
        </div>
        {/* Subtitle */}
        <div className='grid grid-cols-1'>
          {data?.measure?.subtitel && (
            <div className='sm:w-11/12 sm:justify-self-center max-w-[760px]'>
              <h2 className='lg:block p-lg sm:p-xl  '> {data?.measure?.subtitel}</h2>
            </div>
          )}
        </div>

        {/* Content */}
        <div className='grid grid-cols-1'>
          <div className='pb-20 sm:w-11/12 sm:justify-self-center max-w-[760px]'>
            <div className=''>
              <PortableText value={data?.measure?.content} components={instrumentPTComponents} />
            </div>
            <InstrumentTable data={data} />
          </div>
        </div>
        <div className='block sm:hidden pb-10'>
          <SocialButtons title={data?.measure?.titel} viewport='mobile' />
        </div>
      </div>
    </div>
  );
}

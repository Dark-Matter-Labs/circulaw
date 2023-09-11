import { useRouter } from 'next/router';
import { PortableText } from '@portabletext/react';
import { ArrowLeftIcon } from '@heroicons/react/outline';
// import MeasureOverview from '../components/measure-overview';
import MeasureTable from '../components/measure-table';
import SocialButtons from '../components/social-buttons';
// import FeedbackBlock from './feedback-block';
import { instrumentPTComponents } from '../lib/portable-text/pt-components';

export default function Instrument({ data }) {
  const router = useRouter();
  return (
    <div className='bg-black-white-100'>
      <div className='global-margin sm:pt-10'>
        <div className='grid grid-cols-1   content-center mb-8'>
          <div className='sm:col-span-12 row-span-1 h-12 mt-4 w-11/12 max-w-[854px] justify-self-center'>
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
          {/* thema + tag replace words with data. need to add samenhang data to this branch */}
          
          <div className='grid grid-cols-1'>
          <div className='w-11/12 max-w-[760px] justify-self-center flex items-center'>
            <h4 className='uppercase mobile sm:desktop text-green-500'>
              Houtbouw
              </h4>
              <div className='ml-4 py-0.5 px-2 rounded-[5px] text-black-white-200 bg-black-white-600'>
                verkoop
              </div>
          </div>

          <div className='w-11/12 max-w-[760px] justify-self-center '>
            <h1 className='lg:block sm:pt-4 pb-6 sm:pb-10 mobile sm:desktop'>
              {data?.measure?.titel}
            </h1>
          </div>
          </div>

          {/* Metadata */}
          <div className='grid grid-cols-1'>
          <div className='h-auto border-b border-t mb-6 flex flex-row justify-between items-center w-11/12 max-w-[854px] justify-self-center '>
            <div className='flex flex-col'>
              <h4 className='mobile sm:desktop py-1 text-black-white-600'>
              Juridische houdbaarheid
              </h4>
              <h5 className='mobile sm:desktop text-green-500'>
              Beperkt
              </h5>
            </div>
            <div className='flex flex-col'>
            <h4 className='mobile sm:desktop py-1 text-black-white-600'>
            Invloed
              </h4>
              <h5 className='mobile sm:desktop text-green-500'>
              Gemiddeld
              </h5>
            </div>
            <div className='flex flex-col'>
            <h4 className='mobile sm:desktop py-1 text-black-white-600'>
            Overheidslaag
              </h4>
              <h5 className='mobile sm:desktop text-green-500'>
              Nationaal - Provinciaal - Gemeentelijk
              </h5>
            </div>
            <div className='flex flex-col'>
            <h4 className='mobile sm:desktop py-1 text-black-white-600'>
            R-ladder
              </h4>
              <h5 className='mobile sm:desktop text-green-500'>
              R1 - R2 - R3 - R4 - R5 - R6
              </h5>
            </div>
          </div>
          </div>

        <div className='grid grid-cols-1'>
          {data?.measure?.subtitel && (
            <div className='w-11/12 justify-self-center max-w-[760px]'>
              <h2 className='lg:block p-lg sm:p-xl pb-10'> {data?.measure?.subtitel}</h2>
            </div>
          )}
        </div>


        <div className='grid grid-cols-1'>
          <div className='pb-20 w-11/12 justify-self-center max-w-[760px]'>
            <div className='py-4'>
              <PortableText value={data?.measure?.content} components={instrumentPTComponents} />
            </div>
            <MeasureTable data={data} />
          </div>
          <div>
          </div>
        </div>
        <div className='block sm:hidden pb-10'>
          <SocialButtons title={data?.measure?.titel} viewport='mobile' />
        </div>
      </div>
    </div>
  );
}

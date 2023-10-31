import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

import { ArrowLeftIcon } from '@heroicons/react/outline';
import SocialButtons from '../social-buttons';
import InstrumentMetaData from './instrument-metadata';

export default function Instrumentheader({ data }) {
  const router = useRouter();
  const [scrollEffect, setScrollEffect] = useState();

  useEffect(() => {
    const changeEffect = () => {
      if (window.scrollY >= 85) {
        setScrollEffect(true);
      } else {
        setScrollEffect(false);
      }
    };
    window.addEventListener('scroll', changeEffect);
  }, []);

  return (
    <>
      {/* Not sticky */}
      <div className='z-30 relative'>
        <div className='global-margin grid grid-cols-1 sm:pl-8 -mb-24'>
          <div className='mt-6 max-w-[854px] flex justify-between items-center'>
            {/* BREADCRUMB */}
            <button type='button' onClick={() => router.back()}>
              <span className='breadcrumb text-grey-100 flex justify-center items-center underline'>
                <ArrowLeftIcon className='inline-block h-4 w-4 pr-1' aria-hidden='true' /> Terug
              </span>{' '}
            </button>
            <div className='float-right'>
              <SocialButtons title={data?.measure?.titel} viewport='desktop' />
            </div>
          </div>
        </div>
      </div>

      {/* STICKY */}
      <div className='sm:sticky -top-12 z-20 bg-gradient-to-b from-[#042D36] to-[#22532200] bg-green-500'>
        <div className=' pt-24 mt-8 min-h-[360px] flex items-end justify-items-start global-margin'>
          <div
            className={`${
              scrollEffect ? 'duration-75 sm:scale-75' : 'sm:mb-12 duration-75 '
            } mb-6 sm:pl-8 h-auto origin-bottom-left`}
          >
            <div className='w-full flex'>
              <div className='first-letter:uppercase border rounded-[5px] py-0.5 px-2 border-grey-100 p-xsm text-grey-100 mr-2'>
                {data?.measure?.thema.replace('-', ' ')}
              </div>
              {data?.measure?.beleid === true && (
                <div className='bg-green-300 border border-green-300 text-grey-100 px-2 h-6 rounded-[5px] p-xsm flex items-center mr-2'>
                  Beleid
                </div>
              )}
              {data?.measure?.inkoop === true && (
                <div className='bg-green-300 border border-green-300 text-grey-100 px-2 h-6 rounded-[5px] p-xsm flex items-center mr-2'>
                  Inkoop
                </div>
              )}
              {data?.measure?.grondpositie === true && (
                <div className='bg-green-300 border border-green-300 text-grey-100 px-2 h-6 rounded-[5px] p-xsm flex items-center mr-2'>
                  Grondpositie
                </div>
              )}
              {data?.measure?.subsidie === true && (
                <div className='bg-green-300 border border-green-300 text-grey-100 px-2 h-6 rounded-[5px] p-xsm flex items-center mr-2'>
                  Subsidie
                </div>
              )}
              {data?.measure?.fiscaal === true && (
                <div className='bg-green-300 border border-green-300 text-grey-100 px-2 h-6 rounded-[5px] p-xsm flex items-center'>
                  Fiscaal
                </div>
              )}
            </div>
            <div className='max-w-4xl flex justify-start overflow-hidden'>
              <h1 className='justify-self-start lg:block mobile sm:desktop mt-2 text-grey-100 line-clamp-3'>
                {data?.measure?.titel}
              </h1>
            </div>
          </div>
        </div>

        {/* Metadata */}
        <div className='bg-grey-100 w-screen flex justify-items-start'>
          <div className='global-margin w-full'>
            <div className='grid grid-col-1 sm:pl-8 w-full max-w-4xl'>
              <InstrumentMetaData data={data} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

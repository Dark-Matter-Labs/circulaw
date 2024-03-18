import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { PortableText } from '@portabletext/react';
import { usePreview } from '@/lib/sanity.preview';

import InstrumentTable from './instrument-table';
import { instrumentPTComponents } from '@/lib/portable-text/pt-components';

import InstrumentFeedbackBlock from './instrument-feedback-block';
import InstrumentHeader from './instrument-header';
import MobileFeedback from './instrument-feedback-block-mobile';

export default function InstrumentPreview({ query, queryParams }) {
  const data = { instrument: usePreview(null, query, queryParams) };

  const [scrollEffect, setScrollEffect] = useState(false);
  const [hidden, setHidden] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const changeEffect = () => {
      if (
        window.scrollY >= ref?.current?.clientHeight * 0.1 &&
        window.scrollY <= ref?.current?.clientHeight * 0.5
      ) {
        setScrollEffect(true);
      } else {
        setScrollEffect(false);
      }

      if (window.scrollY >= ref?.current?.clientHeight * 0.55) {
        setHidden(true);
      } else {
        setHidden(false);
      }
    };
    window.addEventListener('scroll', changeEffect);
  }, []);

  return (
    <div ref={ref} className='relative bg-grey-100'>
      <InstrumentHeader data={data} />
      <div className='bg-grey-100 relative z-0'>
        <InstrumentFeedbackBlock data={data} />
        <div className='global-margin sm:mt-4 z-0'>
          {/* Subtitle */}
          <div className='grid grid-cols-1'>
            {data?.instrument?.subtitel && (
              <div className='max-w-[760px]'>
                <h2 className='lg:block p-lg sm:p-3xl sm:mt-2'> {data?.instrument?.subtitel}</h2>
              </div>
            )}
          </div>
          {/* Content */}
          <div className='grid grid-cols-1'>
            <div className='pb-20 max-w-[760px]'>
              <div className=''>
                <PortableText value={data?.instrument?.content} components={instrumentPTComponents} />
              </div>
              <InstrumentTable data={data} />
            </div>
          </div>
          <div
            className={`${
              scrollEffect
                ? 'translate-y-0 transition-all ease-in duration-300'
                : 'translate-y-8 transition-all ease-out duration-300'
            } ${hidden ? 'hidden' : 'block'} bottom-0 sticky flex justify-center w-full`}
          >
            <MobileFeedback data={data} scrollEffect={scrollEffect} />
          </div>
        </div>
        <Link
          className='bg-blue-500 p-6 text-white font-bold fixed bottom-0 right-0'
          href='/api/exit-preview'
        >
          Exit Preview
        </Link>
      </div>
    </div>
  );
}

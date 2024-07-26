'use client'
import InstrumentFeedbackBlock from './instrument-feedback-block';
import MobileFeedback from './instrument-feedback-block-mobile';
import InstrumentHeader from './instrument-header';
import InstrumentTable from './instrument-table';
import { portableTextComponents } from '@/lib/portable-text/pt-components';
import { PortableText } from '@portabletext/react';
import { useState, useEffect, useRef } from 'react';

export default function Instrument({ data }) {

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
    <div ref={ref} className='relative bg-gray-100'>
      <InstrumentHeader data={data} />
      <div className='bg-gray-100 relative z-0'>
        <InstrumentFeedbackBlock data={data} />
        <div className='global-margin sm:mt-4 z-0'>
          {/* Subtitle */}
          <div className='grid grid-cols-1'>
            {data?.subtitel && (
              <div className='max-w-[760px]'>
                <h2 className='lg:block heading-xl sm:mt-2'> {data?.subtitel}</h2>
              </div>
            )}
          </div>
          {/* Content */}
          <div className='grid grid-cols-1'>
            <div className='pb-20 max-w-[760px]'>
              <div className=''>
                <PortableText
                  value={data?.content}
                  components={portableTextComponents}
                />
              </div>
              <InstrumentTable data={data} />
            </div>
          </div>
          <div
            className={`${
              scrollEffect
                ? 'translate-y-0 transition-all ease-in duration-300'
                : 'translate-y-14 transition-all ease-out duration-300'
            } ${hidden ? 'hidden' : 'block'} bottom-0 sticky flex justify-center w-full`}
          >
            <MobileFeedback data={data} scrollEffect={scrollEffect} />
          </div>
        </div>
      </div>
    </div>
  );
}

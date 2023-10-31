import Link from 'next/link';
import { Fragment } from 'react';
import InstrumentMetaData from './instrument/instrument-metadata';

export default function PolicyList(props) {
  let lawData = [];
  if (props.data) {
    lawData = props.data;
  }
  return (
    <>
      {lawData.map((law) => (
        <Link href={'/measures/' + law.slug.current} key={law.titel}>
          <div className='block sm:ml-0 mb-10 sm:mb-8 max-w-[850px]'>
            <div className='inline-block flex justify-start items-center -ml-1'>
              {/* Expertise Tag */}
              {law?.beleid === true && (
                <div className='bg-green-500 text-grey-100 px-2 h-6 rounded-[9px] p-xsm flex items-center mx-1'>
                  Beleid
                </div>
              )}
              {law?.inkoop === true && (
                <div className='bg-green-500 text-grey-100 px-2 h-6 rounded-[9px] p-xsm flex items-center mx-1'>
                  Inkoop
                </div>
              )}
              {law?.grondpositie === true && (
                <div className='bg-green-500 text-grey-100 px-2 h-6 rounded-[9px] p-xsm flex items-center mx-1'>
                  Grondpositie
                </div>
              )}
              {law?.subsidie === true && (
                <div className='bg-green-500 text-grey-100 px-2 h-6 rounded-[9px] p-xsm flex items-center mx-1'>
                  Subsidie
                </div>
              )}
              {law?.fiscaal === true && (
                <div className='bg-green-500 text-grey-100 px-2 h-6 rounded-[9px] p-xsm flex items-center mx-1'>
                  Fiscaal
                </div>
              )}
            </div>

            <div className='block mt-2 max-w-4xl'>
              <div className=' mb-2'>
                <h3 className='desktop text-grey-800 no-underline hover:text-green-500'>
                  {law.titel}{' '}
                </h3>
              </div>

              <div className='block newlineDisplay p-base text-grey-800 mt-2 pb-2'>
                <p className=''>{law.introText}</p>
              </div>
              <InstrumentMetaData data={law} />
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}


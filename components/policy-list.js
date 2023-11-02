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
          <div className='block sm:ml-0 mb-10 sm:mb-8 max-w-[890px]'>
            <div className='inline-block flex justify-start items-center -ml-1'>
              {/* Expertise Tag */}
              {law?.beleid === true && (
                <h5 className='bg-green-500 text-grey-100 px-2 h-6 rounded-[9px] mobile sm:desktop flex items-center mx-1'>
                  Beleid
                </h5>
              )}
              {law?.inkoop === true && (
                <h5 className='bg-green-500 text-grey-100 px-2 h-6 rounded-[9px] mobile sm:desktop flex items-center mx-1'>
                  Inkoop
                </h5>
              )}
              {law?.grondpositie === true && (
                <h5 className='bg-green-500 text-grey-100 px-2 h-6 rounded-[9px] mobile sm:desktop flex items-center mx-1'>
                  Grondpositie
                </h5>
              )}
              {law?.subsidie === true && (
                <h5 className='bg-green-500 text-grey-100 px-2 h-6 rounded-[9px] mobile sm:desktop flex items-center mx-1'>
                  Subsidie
                </h5>
              )}
              {law?.fiscaal === true && (
                <h5 className='bg-green-500 text-grey-100 px-2 h-6 rounded-[9px] mobile sm:desktop flex items-center mx-1'>
                  Fiscaal
                </h5>
              )}
            </div>

            <div className='block mt-2 max-w-4xl'>
              <div className=' mb-2'>
                <h3 className='mobile sm:desktop text-grey-800 no-underline hover:text-green-500'>
                  {law.titel}{' '}
                </h3>
              </div>

              <div className='block newlineDisplay p-md text-grey-800 mt-2 pb-2'>
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

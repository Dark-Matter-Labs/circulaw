import Link from 'next/link';
import InstrumentMetaData from './instrument-metadata';
import Tag from '../tag';

export default function InstrumentCard({ instrument }) {
  return (
    <>
      <Link
        href={`/${instrument.transitionAgenda}/${instrument.thema}/instrumenten/${instrument.slug.current}`}
        key={instrument.titel}
      >
        <div className='block mb-14 sm:mb-10 md:min-w-[760px]'>
          <div className='flex justify-start items-center -ml-1'>
            {/* Expertise Tag */}
            {instrument?.beleid === true && <Tag classes='bg-green-500 text-gray-100'>Beleid</Tag>}
            {instrument?.inkoop === true && <Tag classes='bg-green-500 text-gray-100'>Inkoop</Tag>}
            {instrument?.grondpositie === true && (
              <Tag classes='bg-green-500 text-gray-100'>Grondpositie</Tag>
            )}
            {instrument?.subsidie === true && (
              <Tag classes='bg-green-500 text-gray-100'>Subsidie</Tag>
            )}
            {instrument?.fiscaal === true && (
              <Tag classes='bg-green-500 text-gray-100'>Fiscaal</Tag>
            )}
          </div>

          <div className='block mt-2'>
            <div className=' mb-2'>
              <h3 className='heading-2xl-semibold sm:max-w-[650px] text-gray-800 no-underline hover:text-green-300 active:text-green-800 focus:text-green-200 focus:ring-2 focus:ring-white'>
                {instrument.titel}{' '}
              </h3>
            </div>

            <div className='block newlineDisplay p-base text-gray-800 mt-2 pb-2'>
              <p className='p-base sm:max-w-[650px]'>{instrument.introText}</p>
            </div>
            <InstrumentMetaData data={instrument} borders={true} />
          </div>
        </div>
      </Link>
    </>
  );
}

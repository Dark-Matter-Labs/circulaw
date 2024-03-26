import Link from 'next/link';
import InstrumentMetaData from './instrument/instrument-metadata';
import Tag from './tag';

export default function PolicyList(props) {
  let lawData = [];
  if (props.data) {
    lawData = props.data;
  }
  return (
    <>
      {lawData.map((law) => (
        <Link
          href={`/${law.transitionAgenda}/${law.thema}/instrumenten/${law.slug.current}`}
          key={law.titel}
        >
          <div className='block sm:ml-0 mb-10 sm:mb-8 md:max-w-[760px]'>
            <div className='flex justify-start items-center -ml-1'>
              {/* Expertise Tag */}
              {law?.beleid === true && <Tag classes='bg-green-500 text-gray-100 mr-2'>Beleid</Tag>}
              {law?.inkoop === true && <Tag classes='bg-green-500 text-gray-100 mr-2'>Inkoop</Tag>}
              {law?.grondpositie === true && (
                <Tag classes='bg-green-500 text-gray-100 mr-2'>Grondpositie</Tag>
              )}
              {law?.subsidie === true && (
                <Tag classes='bg-green-500 text-gray-100 mr-2'>Subsidie</Tag>
              )}
              {law?.fiscaal === true && <Tag classes='bg-green-500 text-gray-100'>Fiscaal</Tag>}
            </div>

            <div className='block mt-2 '>
              <div className=' mb-2'>
                <h3 className='p-4xl-semibold max-w-[650px] text-gray-800 no-underline hover:text-green-300 active:text-green-800 focus:text-green-200 focus:ring-2 focus:ring-white'>
                  {law.titel}{' '}
                </h3>
              </div>
              <div className='block  newlineDisplay p-md text-gray-800 mt-2 pb-2'>
                <p className='p-base max-w-[650px]'>{law.introText}</p>
              </div>
              <InstrumentMetaData data={law} borders={true} />
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}

import Link from 'next/link';
import Tag from '../tag';
import InstrumentMetaData from '../instrument/instrument-metadata';
import ThemePageHeader from '@/components/theme-page/theme-page-header'
import ThemePageHeaderMobile from '../theme-page/theme-page-header-mobile';

export default function SimpleThemaLayout({ instruments, numberOfLaws, ...props }) {
  const themaData = props.thema;
  return (
    <>
      {/* HEADER DESKTOP */}
      <ThemePageHeader themaData={themaData}/>
      {/* HEADER MOBILE */}
      <ThemePageHeaderMobile themaData={themaData}/>

      <div className='global-margin'>
        <div className='max-w-[830px] mb-10'>
          <h2 className='p-5xl-semibold pb-4 pt-7'>
            Top {numberOfLaws} instrumenten voor plastic in de bouw
          </h2>
          <p>{themaData?.introText}</p>
        </div>
        <div className='max-w-7xl flex pb-10'>
          <div className='w-5 sm:w-2 bg-gradient-to-b from-[#25C38B] to-[#035E46] mr-4 rounded-full mb-10'></div>
          <div>
            {/* This can be a component - policy list, theme bottom section + here */}
            {instruments.map((measure) => (
              <Link
                href={`/${measure.transitionAgenda}/${measure.thema}/instrumenten/${measure.slug.current}`}
                key={measure.titel}
              >
                <div className='block mb-14 sm:mb-10 w-[760px]'>
                  <div className='flex justify-start items-center -ml-1'>
                    {/* Expertise Tag */}
                    {measure?.beleid === true && (
                      <Tag classes='bg-green-500 text-gray-100'>Beleid</Tag>
                    )}
                    {measure?.inkoop === true && (
                      <Tag classes='bg-green-500 text-gray-100'>Inkoop</Tag>
                    )}
                    {measure?.grondpositie === true && (
                      <Tag classes='bg-green-500 text-gray-100'>Grondpositie</Tag>
                    )}
                    {measure?.subsidie === true && (
                      <Tag classes='bg-green-500 text-gray-100'>Subsidie</Tag>
                    )}
                    {measure?.fiscaal === true && (
                      <Tag classes='bg-green-500 text-gray-100'>Fiscaal</Tag>
                    )}
                  </div>

                  <div className='block mt-2 max-w-4xl'>
                    <div className=' mb-2'>
                      <h3 className='p-4xl-semibold text-grey-800 no-underline hover:text-green-300 active:text-green-800 focus:text-green-200 focus:ring-2 focus:ring-white'>
                        {measure.titel}{' '}
                      </h3>
                    </div>

                    <div className='block newlineDisplay p-md text-grey-800 mt-2 pb-2'>
                      <p className='p-base'>{measure.introText}</p>
                    </div>
                    <InstrumentMetaData data={measure} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

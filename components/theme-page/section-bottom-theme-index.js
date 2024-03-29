import InstrumentMetaData from '@/components/instrument/instrument-metadata';
import Tag from '@/components/tag';
import { urlFor } from '@/lib/sanity';
import Image from 'next/image';
import Link from 'next/link';

export default function ThemeBottomSection({ featuredLaws, thema }) {
  return (
    <>
      <div className='bg-gray-200'>
        <div className='py-8 global-margin'>
          <h3 className='heading-2xl-semibold sm:heading-3xl-semibold pb-4 lowercase first-letter:uppercase'>
            {thema?.featuredInstrumentTitle}
          </h3>
          {/* ADD THIS TO CMS */}
          <p className='pb-10 p-base max-w-[830px]'>{thema?.featureInstrumentSubtitle}</p>
          <div className=''>
            {featuredLaws?.map((instrument, index) => (
              <div key={index} className='flex flex-col sm:flex-row mb-14 sm:mb-8 max-w-6xl'>
                <div className='flex items-center w-full h-44 sm:md-0 sm:w-64 sm:h-44 rounded-cl sm:mr-6 mb-4 sm:mb-0 relative '>
                  <Image
                    src={urlFor(instrument?.featuredImage)?.url()}
                    alt={instrument?.featuredImage?.altText}
                    fill
                    className='absolute rounded-cl object-cover'
                  />
                </div>
                <Link
                  href={`/${instrument?.transitionAgenda}/${instrument?.thema}/instrumenten/${instrument?.slug?.current}`}
                  key={instrument.titel}
                >
                  <div className='block sm:ml-0 md:min-w-[760px]'>
                    <div className='flex justify-start items-center -ml-1'>
                      {/* Expertise Tag */}
                      {instrument?.beleid === true && (
                        <Tag classes='bg-green-500 text-gray-100 mr-2'>Beleid</Tag>
                      )}
                      {instrument?.inkoop === true && (
                        <Tag classes='bg-green-500 text-gray-100 mr-2'>Inkoop</Tag>
                      )}
                      {instrument?.grondpositie === true && (
                        <Tag classes='bg-green-500 text-gray-100 mr-2'>Grondpositie</Tag>
                      )}
                      {instrument?.subsidie === true && (
                        <Tag classes='bg-green-500 text-gray-100 mr-2'>Subsidie</Tag>
                      )}
                      {instrument?.fiscaal === true && (
                        <Tag classes='bg-green-500 text-gray-100 mr-2'>Fiscaal</Tag>
                      )}
                    </div>

                    <div className='block mt-2 max-w-4xl'>
                      <div className='mb-2'>
                        <h3 className='heading-2xl-semibold max-w-[650px] text-gray-800 no-underline hover:text-green-300 active:text-green-800 focus:text-green-200 focus:ring-2 focus:ring-white'>
                          {instrument?.titel}{' '}
                        </h3>
                      </div>

                      <div className='block newlineDisplay p-base text-gray-800 mt-2 pb-2  '>
                        <p className='p-base max-w-[650px]'>{instrument?.introText}</p>
                      </div>
                      <InstrumentMetaData data={instrument} borders={true} />
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

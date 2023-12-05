import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '@/lib/sanity';

import Tag from '@/components/tag';
import InstrumentMetaData from '@/components/instrument/instrument-metadata';

export default function ThemeBottomSection({ props }) {
  const laws = props.featuredLaws;
  return (
    <>
      <div className='bg-gray-200'>
        <div className='py-8 global-margin'>
          <h3 className='p-3xl-semibold sm:p-5xl-semibold pb-4'>Uitgelichte instrumenten</h3>
          {/* ADD THIS TO CMS */}
          <p className='pb-10 p-base max-w-2xl'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet felis tincidunt
            odio ornare elementum. In vel ligula ut lacus pharetra finibus. Curabitur blandit ligula
            at pulvinar faucibus. Aliquam luctus, elit eu scelerisque egestas, felis odio blandit
            ligula, in convallis dolor mi vel leo. Etiam sit amet mauris fermentum, tempus odio in,
            feugiat nibh. Donec imperdiet, nisi at congue porta, neque tortor fringilla lectus, a
            semper arcu eros eget libero. Maecenas efficitur feugiat molestie.
          </p>
          <div className=''>
            {laws?.map((measure, index) => (
              <div key={index} className='flex flex-col sm:flex-row mb-14 sm:mb-8 max-w-6xl'>
                <div className='flex items-center w-full h-44 mb-5 sm:md-0 sm:w-64 sm:h-44 rounded-cl mr-6 relative object-fill'>
                  <Image
                    src={urlFor(measure?.featuredImage)?.url()}
                    alt={measure?.featuredImage?.altText}
                    fill
                    className='absolute rounded-cl object-cover'
                  />
                </div>
                <Link
                  href={`/${measure.transitionAgenda}/${measure.thema}/instrumenten/${measure.slug.current}`}
                  key={measure.titel}
                >
                  <div className='block sm:ml-0 w-[760px]'>
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

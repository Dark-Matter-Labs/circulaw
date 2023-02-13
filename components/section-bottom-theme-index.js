import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '../lib/sanity';
import { useEffect, useState } from 'react';

export default function ThemeBottomSection({ props }) {
  const data = props.laws;
  const [laws, setLaws] = useState();

  useEffect(() => {
    if (data.length > 0) {
      const extended = data.filter((e) => {
        return e.isFeatured === true;
      });
      setLaws(extended);
    }
  }, [data]);

  return (
    <>
      <div className='bg-[#F8FAF8] sm:bg-transparent'>
        <div className='pt-16 global-margin'>
          <h2 className='mobile sm:desktop pb-2'>
            Uitgelicht: {laws?.length} {props.extendedMeasureHeading}
          </h2>
          <p className='pb-6 p-lg'>{props.extendedMeasureSubtitle}</p>
        </div>
        <div className='bg-[#F8FAF8]'>
          <div className='global-margin'>
            <div className='sm:pt-5'>
              {laws?.map((measure) => (
                <div
                  key={measure?._id}
                  className={`border-black-white-600 ${
                    measure === laws?.[2] ? 'border-b border-transparent' : 'border-b'
                  }`}
                >
                  <Link href={`/measures/${measure?.slug.current}`}>
                    <div className='grid grid-cols-1 lg:grid-cols-2 py-10 gap-x-8 gap-y-4 '>
                      <div className=''>
                        <Image
                          src={urlFor(measure?.featuredImage)?.url()}
                          alt={measure?.featuredImage?.altText}
                          width={556}
                          height={278}
                        />
                      </div>
                      <div className='lg:pl-4 flex flex-wrap'>
                        <div className='block pt-4 sm:hidden'>
                          <div className='flex justify-left'>
                            {measure?.extraContent?.includes('Leidraad') && (
                              <h6
                                className='border-green-600 bg-green-600 text-white inline py-0.5 px-2 mr-4
                           rounded-md'
                              >
                                Leidraad
                              </h6>
                            )}
                            {measure?.extraContent?.includes('Voorbeeld') && (
                              <h6 className='border-green-500 bg-green-500 text-white inline p-0.5 px-2 rounded-md'>
                                Voorbeeld
                              </h6>
                            )}
                          </div>
                        </div>
                        <div>
                          <h3 className='pt-4 sm:pt-0 mobile sm:desktop'>{measure?.titel}</h3>
                          <p className=' p-base py-4 max-w-2xl'>{measure?.introText}</p>
                        </div>
                        <div className='flex sm:justify-between w-full sm:pt-14'>
                          <div className='hidden sm:block'>
                            <div className='flex justify-between'>
                              {measure?.extraContent?.includes('Leidraad') && (
                                <h6 className='border-green-600 bg-green-600 text-white inline py-0.5 px-2 rounded-md mr-4'>
                                  Leidraad
                                </h6>
                              )}
                              {measure?.extraContent?.includes('Voorbeeld') && (
                                <h6 className='border-green-500 bg-green-500 text-white inline p-0.5 px-2 rounded-md'>
                                  Voorbeeld
                                </h6>
                              )}
                            </div>
                          </div>
                          <div>
                            <span className='text-green-500  link-lg'>
                              Bekijk het instrument{'>'}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

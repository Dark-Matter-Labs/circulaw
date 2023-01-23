import Image from 'next/image';
import Link from 'next/link';
import { groq } from 'next-sanity';
import useSWR from 'swr';
import client, { urlFor } from '../lib/sanity';
import { useEffect, useState } from 'react';

export default function ThemeBottomSection({ props }) {
  const { data } = useSWR(
    groq`*[_type == "measure" && thema == "${props.thema}" && isFeatured == true]`,
    (query) => client.fetch(query),
  );

  const [laws, setLaws] = useState();
  useEffect(() => setLaws(data?.map((law) => law)), [data]);
  return (
    <>
      {/* need to get gradient working for bg */}
      <div className='bg-[#F8FAF8] sm:bg-transparent'>
        <div className='sm:pb-10 pt-6 global-margin'>
          <h3 className='mobile sm:desktop pb-2'>
            Uitgelicht: {laws?.length}{' '}{props.extendedMeasureHeading}
          </h3>
          <p className='p-mobile-bg sm:p-desktop-bg'>Mét voorbeelden en een handige leidraad</p>
        </div>
        <div className='bg-[#F8FAF8]'>
          <div className='global-margin'>
            <div className='sm:pt-5'>
              {laws?.map((measure) => (
                <div
                  key={measure?._id}
                  className={`border-black-white-600 pb-10 ${
                    measure === laws?.[2] ? 'border-b border-transparent' : 'border-b'
                  }`}
                >
                  <div className='grid grid-cols-1 lg:grid-cols-2'>
                    <div className='hidden sm:block pt-6 pr-10'>
                      <div className='w-[33rem] h-[16rem] relative'>
                        <Image
                          src={urlFor(measure?.featuredImage).url()}
                          alt={measure?.featuredImage?.altText}
                          objectFit='cover'
                          fill
                        />
                      </div>
                    </div>
                    <div className='lg:pl-4'>
                      <div className='block py-4 sm:hidden w-full h-[12.5rem] relative'>
                        <Image
                          src={urlFor(measure?.featuredImage).url()}
                          alt={measure?.featuredImage?.altText}
                          objectFit='contain'
                          fill
                        />
                      </div>
                      <div className='block pt-4 sm:hidden'>
                        <div className='flex justify-left'>
                          {measure?.extraContent.includes('Leidraad') && (
                            <div
                              className='border-green-600 bg-green-600 text-white r-category py-0.5 px-2
                           rounded-md'
                            >
                              Leidraad
                            </div>
                          )}
                          {measure?.extraContent.includes('Voorbeeld') && (
                            <div className='border-green-500 bg-green-500 text-white r-category p-0.5 px-2 rounded-md ml-4'>
                              Voorbeeld
                            </div>
                          )}
                        </div>
                      </div>
                      <h3 className='pt-6 mobile sm:desktop'>{measure?.titel}</h3>
                      <p className='p-mobile-bg sm:p-desktop-bg py-4 max-w-2xl'>
                        {measure?.introText}
                      </p>
                      <div className='flex sm:justify-between sm:pt-16'>
                        <div className='hidden sm:block'>
                          <div className='flex justify-between'>
                            {measure?.extraContent.includes('Leidraad') && (
                              <div className='border-green-600 bg-green-600 text-white r-category py-0.5 px-2 rounded-md'>
                                Leidraad
                              </div>
                            )}
                            {measure?.extraContent.includes('Voorbeeld') && (
                              <div className='border-green-500 bg-green-500 text-white r-category p-0.5 px-2 rounded-md ml-4'>
                                Voorbeeld
                              </div>
                            )}
                          </div>
                        </div>
                        <div>
                          <Link href={`/measures/${measure?.slug.current}`}>
                            <span className='text-green-500 link-mobile sm:link-desktop'>
                              Bekijk het instrument{'>'}
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

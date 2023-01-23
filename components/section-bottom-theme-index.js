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
  
  const [laws, setLaws] = useState()
  useEffect(() => setLaws(data?.map((law) => law)), [data])

  return (
    <>
      <div className='global-margin'>
      <div className='pb-10 pt-6 global-margin'>
        <h3 className='mobile sm:desktop pb-2'>
          Uitgelicht: {laws?.length} instrumenten om {props.thema} te bevorderen
        </h3>
        <p className='p-mobile-bg sm:p-desktop-bg'>Mét voorbeelden en een handige leidraad</p>
      </div>
      </div>
          <div className=' bg-opacity-10'>

      <div className='global-margin'>

      <div className=''>
        <div className='pt-5'>
          {laws?.map((measure) => (
            <div key={measure?._id} className='border-b border-black-white-600 pb-10'>
              <div className='grid grid-cols-1 lg:flex items-center'>
                <div className='hidden sm:block pt-6 pr-10'>
                  <div className='w-[33rem] h-[16rem]'>
                    <Image
                      src={urlFor(measure?.featuredImage).url()}
                      alt={measure?.featuredImage?.altText}
                      width={530}
                      height={400}
                    />
                  </div>
                </div>
                <div className='pl-4'>
                  <div className='block py-4 sm:hidden'>
                    <Image
                      src={urlFor(measure?.featuredImage).url()}
                      alt={measure?.featuredImage?.altText}
                      width={200}
                      height={200}
                    />
                  </div>

                  <h3 className='pt-6 mobile sm:desktop'>{measure?.titel}</h3>
                  <p className='p-mobile-bg sm:p-desktop-bg py-3 max-w-2xl'>{measure?.introText}</p>
                  <div className='flex justify-between pt-20'>
                    <div>                      
                        <div className='flex'>
                          {measure?.extraContent.includes('Leidraad') && 
                          <div className='border-green-600 bg-green-600 text-white r-category py-0.5 px-2 rounded-md'>
                            Leidraad
                          </div>}
                          {measure?.extraContent.includes('Voorbeeld') && 
                          <div className='border-green-500 bg-green-500 text-white r-category p-0.5 px-2 rounded-md ml-4'>
                            Voorbeeld
                          </div>}
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

'use client';
import { portableTextComponents } from '@/lib/portable-text/pt-components';
import { PortableText } from '@portabletext/react';
import Link from 'next/link';

export default function FAQPageComponent({ data }) {
 

  return (
    <div className='global-margin pb-8 text-gray-800'>
      <div className='grid grid-cols-1 w-full justify-center '>
        <div className=''>
          <div className='bg-gray-100 pl-2 pr-3 py-1.5 rounded-clSm p-2xs-bold pt-8 text-green-600 link-interaction'>
            <Link href='/' className='link-interaction'>
              Home<span className='ml-2'>{'>'}</span>
            </Link>
          </div>
          <div className='max-w-4xl mx-auto'>
            <h1 className='heading-2xl-semibold sm:heading-5xl-semibold lg:block sm:pt-10 py-6 sm:pb-10 text-gray-800'>
              {data?.pageTitle}
            </h1>
            <div>
              {data.FAQPageContent.map((item, i) => (
                <div key={i}>
                  {item?.sectionTitle && (
                    <div>
                      <h2 className='heading-xl-semibold sm:heading-3xl-semibold text-green-500 pt-6 pb-10'>
                        {' '}
                        {item?.sectionTitle}
                      </h2>
                    </div>
                  )}

                  {item?.question && (
                    <>
                    
                    
            
                        <div
                         
                          className='width-1/3 heading-xl-semibold sm:heading-3xl-semibold text-green-600 mr-4'
                        >
                          {item.question}
                        </div>
                   
                     
                        <div as='div' className='w-5/6'>
                          <PortableText value={item.response} components={portableTextComponents} />
                        </div>
                        </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

'use client';
import AboutPageDropdown from './about-page-dropdown';
import AboutPageNav from './about-page-nav';
import { portableTextComponents } from '@/lib/portable-text/pt-components';
import { PortableText } from '@portabletext/react';
import Link from 'next/link';
import Image from 'next/image';

export default function AboutPageComponent({ data }) {
  return (
    <div>
      <div className='bg-about-header bg-cover bg-center h-40'></div>
      <div className='pb-8 text-gray-800 global-margin'>
        <div className='block lg:hidden w-full'>
          <AboutPageDropdown currentSlug={data?.slug.current} slugs={data?.slugs} />
        </div>
        <div className='grid grid-cols-1 w-full lg:grid-cols-3 max-w-8xl'>
          <div className='lg:col-span-2'>
            <div className='p-2xs-bold text-green-600 bg-gray-100 pl-2 pr-3 py-1.5 rounded-clSm mt-6'>
              <Link href='/' className='link-interaction'>
                Home<span className='ml-2'>{'>'}</span>
              </Link>
            </div>
            <div className='max-w-3xl'>
              <h1 className='heading-2xl-semibold sm:heading-5xl-semibold lg:block sm:pt-10 py-6 sm:pb-10 text-gray-800'>
                {data?.pageTitle}
              </h1>
              <PortableText value={data?.aboutPageContent} components={portableTextComponents} />
            </div>
            {data?._id === '2573771a-7b6d-4404-9162-c9427cc825c8' && (
              <div>
                <Image src='/method.png' alt='image of methodology' width={768} height={1806} />
              </div>
            )}
          </div>
          <div className='hidden lg:block mt-3 lg:ml-12 lg:mb-20 lg:mt-32 col-span-1'>
            <AboutPageNav currentSlug={data?.slug.current} slugs={data?.slugs} />
          </div>
          <div className='block lg:hidden'>
            <AboutPageDropdown currentSlug={data?.slug.current} slugs={data?.slugs} />
          </div>
        </div>
      </div>
    </div>
  );
}

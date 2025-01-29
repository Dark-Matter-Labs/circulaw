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
      <div className='h-40 bg-about-header bg-cover bg-center'></div>
      <div className='global-margin pb-8 text-gray-800'>
        <div className='block w-full lg:hidden'>
          <AboutPageDropdown currentSlug={data?.slug.current} slugs={data?.slugs} />
        </div>
        <div className='max-w-8xl grid w-full grid-cols-1 lg:grid-cols-3'>
          <div className='lg:col-span-2'>
            <div className='p-2xs-bold mt-6 rounded-clSm bg-gray-100 py-1.5 pl-2 pr-3 text-green-600'>
              <Link href='/' className='link-interaction'>
                Home<span className='ml-2'>{'>'}</span>
              </Link>
            </div>
            <div className='max-w-3xl'>
              <h1 className='heading-2xl-semibold sm:heading-5xl-semibold py-6 text-gray-800 sm:pb-10 sm:pt-10 lg:block'>
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
          <div className='col-span-1 mt-3 hidden lg:mb-20 lg:ml-12 lg:mt-32 lg:block'>
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

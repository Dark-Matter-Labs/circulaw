'use client';

import Image from 'next/image';

import { portableTextComponents } from '@/lib/portable-text/pt-components';
import { PortableText } from '@portabletext/react';

import Header from '../headers';
import AboutPageDropdown from './about-page-dropdown';
import AboutPageNav from './about-page-nav';

export default function AboutPageComponent({ data }) {
  return (
    <div>
      <Header title={data?.pageTitle} imageURL='/big-decoration.png' bgColor='bg-green-500' />
      <div className='global-margin pb-8 text-cl-black'>
        <div className='block w-full lg:hidden'>
          <AboutPageDropdown currentSlug={data?.slug.current} slugs={data?.slugs} />
        </div>
        <div className='max-w-8xl mt-10 grid w-full grid-cols-1 lg:grid-cols-3'>
          <div className='lg:col-span-2'>
            <div className='max-w-3xl'>
              <PortableText value={data?.aboutPageContent} components={portableTextComponents} />
            </div>
            {data?._id === '2573771a-7b6d-4404-9162-c9427cc825c8' && (
              <div>
                <Image src='/method.png' alt='image of methodology' width={768} height={1806} />
              </div>
            )}
          </div>
          <div className='col-span-1 mt-3 hidden lg:mb-20 lg:ml-12 lg:block'>
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

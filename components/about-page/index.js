import AboutPageDropdown from './about-page-dropdown';
import AboutPageNav from './about-page-nav';
import { portableTextComponents } from '@/lib/portable-text/pt-components';
import { PortableText } from '@portabletext/react';
import Link from 'next/link';

export default function AboutPageComponent({ data }) {
  return (
    <div>
      <div className='bg-about-header bg-cover bg-center h-40'></div>
      <div className='pb-8 text-grey-800 global-margin'>
        <div className='block lg:hidden w-full'>
          <AboutPageDropdown
            currentSlug={data?.aboutPage?.slug.current}
            slugs={data?.aboutPageSlugs}
          />
        </div>
        <div className='grid grid-cols-1 w-full lg:grid-cols-3 max-w-8xl'>
          <div className='lg:col-span-2'>
            <div className='p-2xs-bold text-green-600 bg-white pl-2 pr-3 py-1.5 rounded-clSm mt-6'>
              <Link href='/' className='link-interaction'>
                Home<span className='ml-2'>{'>'}</span>
              </Link>
            </div>
            <div className='max-w-3xl'>
              <h1 className='mobile sm:desktop lg:block sm:pt-10 py-6 sm:pb-10 text-grey-800'>
                {data?.aboutPage?.pageTitle}
              </h1>
              <PortableText
                value={data?.aboutPage?.aboutPageContent}
                components={portableTextComponents}
              />
            </div>
          </div>
          <div className='hidden lg:block mt-3 lg:ml-12 lg:mb-20 lg:mt-32 col-span-1'>
            <AboutPageNav
              currentSlug={data?.aboutPage?.slug.current}
              slugs={data?.aboutPageSlugs}
            />
          </div>
          <div className='block lg:hidden'>
            <AboutPageDropdown
              currentSlug={data?.aboutPage?.slug.current}
              slugs={data?.aboutPageSlugs}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

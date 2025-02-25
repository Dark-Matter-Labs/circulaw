import Image from 'next/image';
import Link from 'next/link';

import { urlFor } from '@/lib/sanity';

export default function ThemePageHeaderMobile({ themaData }) {
  return (
    <div className='mt-3 h-[300px] sm:hidden'>
      <div className='relative z-0 flex h-full w-full items-center object-cover'>
        {themaData?.heroImageMobile && (
          <Image
            src={urlFor(themaData?.heroImageMobile).url()}
            alt={`${themaData.themaName} + 'hero image'`}
            fill
            className='absolute'
          />
        )}
        <div className='absolute z-0 h-full w-full bg-gradient-to-t from-[#035E46] to-[#035E4600]'></div>
        <div className='global-margin z-10 flex h-full w-full flex-col justify-between'>
          <div>
            <div className='pt-8'>
              <span className='p-2xs-bold inline-flex flex-row items-center justify-center rounded-clSm bg-gray-100 py-1.5 pl-2 pr-3 align-middle text-green-600'>
                <Link
                  className='hover:text-green-300 focus:text-green-200 focus:ring-2 focus:ring-white active:text-cl-black'
                  href='/'
                >
                  Home<span className='ml-2'>{'>'}</span>{' '}
                </Link>
                <Link
                  href={`/${themaData?.transitionAgenda}`}
                  className='hover:text-green-300 focus:text-green-200 focus:ring-2 focus:ring-white active:text-cl-black'
                >
                  <span className='ml-2 capitalize'>{themaData?.transitionAgenda}</span>
                </Link>
              </span>
            </div>
          </div>
          <div className='mb-6'>
            <h1 className='heading-4xl-semibold sm:heading-5xl-semibold pb-1 text-gray-100'>
              {themaData?.themaName}
            </h1>
            <p className='p-base text-gray-100'>{themaData?.themaSubtitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

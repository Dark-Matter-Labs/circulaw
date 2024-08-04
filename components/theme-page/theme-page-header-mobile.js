import { urlFor } from '@/lib/sanity';
import Image from 'next/image';
import Link from 'next/link';

export default function ThemePageHeaderMobile({ themaData }) {
  return (
    <div className='h-[300px] mt-3 sm:hidden'>
      <div className='flex items-center h-full w-full relative z-0 object-cover'>
        {themaData?.heroImageMobile && (
          <Image
            src={urlFor(themaData?.heroImageMobile).url()}
            alt={`${themaData.themaName} + 'hero image'`}
            fill
            className=' absolute'
          />
        )}
        <div className='w-full h-full bg-gradient-to-t from-[#035E46] to-[#035E4600] z-0 absolute'></div>

        <div className='w-full h-full z-10 flex flex-col justify-between global-margin'>
          <div>
            <div className='pt-8'>
              <span className='rounded-clSm bg-gray-100 pl-2 pr-3 py-1.5 text-green-600 inline-flex flex-row items-center justify-center p-2xs-bold align-middle '>
                <Link
                  className='hover:text-green-300 active:text-green-800 focus:text-green-200 focus:ring-2 focus:ring-white'
                  href='/'
                >
                  Home<span className='ml-2'>{'>'}</span>{' '}
                </Link>
                <Link
                  href={`/${themaData?.transitionAgenda}`}
                  className='hover:text-green-300 active:text-green-800 focus:text-green-200 focus:ring-2 focus:ring-white'
                >
                  <span className='ml-2 capitalize'>{themaData?.transitionAgenda}</span>
                </Link>
              </span>
            </div>
          </div>
          <div className='mb-6'>
            <h1 className='heading-4xl-semibold sm:heading-5xl-semibold text-gray-100 pb-1'>
              {themaData?.themaName}
            </h1>
            <p className='p-base text-gray-100'>
              {themaData?.themaSubtitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

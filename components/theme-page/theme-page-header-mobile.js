import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '@/lib/sanity';
import LinkIcon from '../link-icon';

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
              <Link
                className='rounded-clSm bg-white pl-2 pr-3 py-1.5 text-green-600 inline-flex flex-row items-center justify-center group'
                href='/'
              >
                <span className='p-2xs-bold align-middle group-hover:text-green-300 group-active:text-green-800 group-focus:text-green-200 group-focus:ring-2 group-focus:ring-white'>
                  Home<span className='ml-2'>{'>'}</span>
                </span>
              </Link>
            </div>
          </div>
          <div className='mb-6'>
            <h1 className='p-5xl-semibold text-gray-50 pb-1'>{themaData?.themaName}</h1>
            <p className='p-base text-gray-50'>
              {themaData?.themaSubtitle}
              {themaData?.linkText && (
                <span className='text-white link-base inline-block '>
                  <a
                    href={themaData?.headerLinkURL}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='hover:text-green-200 active:text-green-100 focus:text-green-100 focus:right-2 focus:ring-white'
                  >
                    {themaData?.linkText}
                    <LinkIcon />
                  </a>
                </span>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

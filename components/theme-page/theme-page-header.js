import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '@/lib/sanity';
import LinkIcon from '../link-icon';
import { ChevronLeftIcon } from '@heroicons/react/outline';

export default function ThemePageHeader({ themaData }) {
  return (
    <div className='hidden sm:block w-full h-[360px]'>
      <div className='relative object-cover w-full h-full mt-3'>
        <Image
          src={urlFor(themaData?.heroImage).url()}
          alt={`${themaData.themaName} + 'hero image'`}
          fill
          className='z-0 bg-cover'
          priority
        />
        <div className='w-full h-full bg-gradient-to-t from-[#035E46] to-[#035E4600] z-0 absolute'></div>

        <div className='global-margin h-[360px] z-5 relative flex flex-col justify-between'>
          <div className='pt-8'>
            <Link
              className='rounded-clSm bg-white opacity-80 pl-2 pr-3 py-1.5 text-green-600 inline-flex flex-row items-center justify-center group'
              href='/'
            >
              <ChevronLeftIcon className='w-3 h-3 mt-0.5 font-semibold group-hover:text-green-300 group-active:text-green-800 group-focus:text-green-200 group-focus:ring-2 group-focus:ring-white' />
              <span className='p-2xs-bold align-middle group-hover:text-green-300 group-active:text-green-800 group-focus:text-green-200 group-focus:ring-2 group-focus:ring-white'>
                {' '}
                &nbsp;Home{' '}
              </span>
            </Link>
          </div>

          <div className='pb-8 max-w-3xl'>
            <div className=''>
              <h1 className='mobile sm:desktop text-grey-100 inline-block lg mobile sm:desktop'>
                {themaData?.themaName}
              </h1>
            </div>
            <div className='col-span-7'>
              <p className='pt-4 text-grey-100 p-lg '>
                {themaData?.themaSubtitle}{' '}
                {themaData?.linkText && (
                  <span className='text-white link-base inline-block hover:text-green-200 active:text-green-100 focus:text-green-100 focus:right-2 focus:ring-white group'>
                    <a href={themaData?.headerLink} target='_blank' rel='noopener noreferrer'>
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
    </div>
  );
}

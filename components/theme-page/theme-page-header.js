import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '@/lib/sanity';
import LinkIcon from '../link-icon';

export default function ThemePageHeader({ themaData }) {
  return (
    <div className='hidden sm:block w-full h-[360px]'>
      <div className='relative object-cover w-full h-full mt-3'>
        {themaData?.heroImage && (
          <Image
            src={urlFor(themaData?.heroImage).url()}
            alt={`${themaData?.themaName} + 'hero image'`}
            fill
            className='z-0 bg-cover'
            priority
          />
        )}
        <div className='w-full h-full bg-gradient-to-t from-[#035E46] to-[#035E4600] z-0 absolute'></div>

        <div className='global-margin h-[360px] z-5 relative flex flex-col justify-between'>
          <div className='pt-8'>
            <span className='p-2xs-bold align-middle rounded-clSm bg-gray-100 pl-2 pr-3 py-1.5 text-green-600 inline-flex flex-row items-center justify-center group-hover:text-green-300 group-active:text-green-800 group-focus:text-green-200 group-focus:ring-2 group-focus:ring-white'>
              <Link
                className='hover:text-green-300 active:text-green-800 focus:text-green-200 focus:ring-2 focus:ring-white'
                href='/'
              >
                {' '}
                Home <span className='ml-2'>{'>'}</span>
              </Link>
              <Link
                className='hover:text-green-300 active:text-green-800 focus:text-green-200 focus:ring-2 focus:ring-white'
                href={`/${themaData?.transitionAgenda}`}
              >
                <span className='ml-2 capitalize'>{themaData?.transitionAgenda} </span>
              </Link>
            </span>
          </div>

          <div className='pb-8 max-w-3xl'>
            <div className=''>
              <h1 className='mobile sm:desktop text-gray-100 inline-block lg mobile sm:desktop'>
                {themaData?.themaName}
              </h1>
            </div>
            <div className='col-span-7'>
              <p className='pt-4 text-gray-100 p-lg '>
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

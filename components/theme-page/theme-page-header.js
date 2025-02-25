import Image from 'next/image';
import Link from 'next/link';

import { urlFor } from '@/lib/sanity';

import LinkIcon from '../link-icon';

// TODO: try and make these image load on the server/optimise them as they are slow
export default function ThemePageHeader({ themaData }) {
  return (
    <div className='hidden h-[360px] w-full sm:block'>
      <div className='relative mt-3 h-full w-full object-cover'>
        {themaData?.heroImage && (
          <Image
            src={urlFor(themaData?.heroImage).url()}
            alt={`${themaData?.themaName} + 'hero image'`}
            fill
            className='z-0 bg-cover'
            priority
            placeholder='blur'
            blurDataURL={themaData?.metadata.lqip}
          />
        )}
        <div className='absolute z-0 h-full w-full bg-gradient-to-t from-[#035E46] to-[#035E4600]'></div>

        <div className='global-margin z-5 relative flex h-[360px] flex-col justify-between'>
          <div className='pt-8'>
            <span className='p-2xs-bold inline-flex flex-row items-center justify-center rounded-clSm bg-gray-100 py-1.5 pl-2 pr-3 align-middle text-green-500 group-hover:text-green-400 group-focus:text-green-200 group-focus:ring-2 group-focus:ring-white group-active:text-cl-black'>
              <Link
                className='hover:text-green-400 focus:text-green-200 focus:ring-2 focus:ring-white active:text-cl-black'
                href='/'
              >
                {' '}
                Home <span className='ml-2'>{'>'}</span>
              </Link>
              <Link
                className='hover:text-green-400 focus:text-green-200 focus:ring-2 focus:ring-white active:text-cl-black'
                href={`/${themaData?.transitionAgenda}`}
              >
                <span className='ml-2 capitalize'>{themaData?.transitionAgenda} </span>
              </Link>
            </span>
          </div>

          <div className='max-w-3xl pb-8'>
            <div className=''>
              <h1 className='heading-2xl-semibold sm:heading-5xl-semibold inline-block text-gray-100'>
                {themaData?.themaName}
              </h1>
            </div>
            <div className='col-span-7'>
              <p className='heading-xl pt-4 text-gray-100'>
                {themaData?.themaSubtitle}{' '}
                {themaData?.linkText && (
                  <span className='link-base group inline-block text-white hover:text-green-200 focus:right-2 focus:text-green-100 focus:ring-white active:text-green-100'>
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

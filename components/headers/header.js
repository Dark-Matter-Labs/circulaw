'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { IconChevronRight } from '@tabler/icons-react';

export default function Header({ imageURL, bgColor, title, pageType, subtitle }) {
  const paths = usePathname();
  const pathNames = paths.split('/').filter((path) => path);

  return (
    <>
      <div className={`${bgColor} global-margin mt-20`}>
        <div className='relative h-full w-full object-cover px-16 py-10'>
          {imageURL && (
            <>
              <Image
                src={imageURL}
                alt='homepage decoration'
                fill
                sizes='100vw'
                className='object-cover'
                priority={true}
                quality={100}
              />
              <div className='absolute left-0 top-0 z-0 h-full w-full bg-gradient-to-t from-[#035E46] to-[#035E4600]'></div>{' '}
            </>
          )}
          <div className='z-5 relative flex flex-col justify-between'>
            {/* Breadcrumb */}
            <div className='mb-20'>
              <ul className='p-2xs-bold inline-flex flex-row items-center justify-center rounded-clSm bg-green-100 py-1.5 pl-2 pr-3 align-middle text-green-500 group-hover:text-green-400 group-focus:text-green-300 group-focus:ring-2 group-focus:ring-white group-active:text-cl-black'>
                {pageType !== 'instrument' && (
                  <li>
                    <Link
                      className='flex flex-row items-center hover:text-green-400 focus:text-green-300 focus:ring-2 focus:ring-white active:text-cl-black'
                      href='/'
                    >
                      {' '}
                      Home <IconChevronRight className='ml-2 size-3' />
                    </Link>
                  </li>
                )}
                {pathNames.length > 0 && (
                  <>
                    {pathNames.map((pathName, id) => (
                      <>
                        {pathNames.length > 1 && pathName !== pathNames.slice(-1)[0] ? (
                          <li key={id}>
                            <Link
                              className='ml-2 flex flex-row items-center capitalize hover:text-green-400 focus:text-green-300 focus:ring-2 focus:ring-white active:text-cl-black'
                              href='/bouw'
                            >
                              {pathName}

                              <IconChevronRight className='ml-2 size-3' />
                            </Link>
                          </li>
                        ) : (
                          <li
                            key={id}
                            className='ml-2 flex flex-row items-center capitalize text-cl-black'
                          >
                            {pathName}
                          </li>
                        )}
                      </>
                    ))}
                  </>
                )}
              </ul>
            </div>
            <div className='max-w-3xl'>
              {pageType === 'productChain' && (
                <div className='p-base sm:heading-2xl-semibold text-green-400'>{subtitle}</div>
              )}
              <h1 className='heading-3xl-semibold sm:heading-5xl-semibold inline-block text-green-100'>
                {title}
              </h1>
              {pageType === 'thema' && (
                <p className='heading-xl pt-2 text-green-100'>{subtitle} </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

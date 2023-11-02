import Link from 'next/link';
import ThemeBottomSection from '../section-bottom-theme-index';
import ThemeCard from '../theme-card';
import Image from 'next/image';
import LinkIcon from '../link-icon';
import { urlFor } from '../../lib/sanity';

export default function ThemeLayout({ ...props }) {
  const themaData = props.thema;
  return (
    <>
      <div>
        {/* HEADER DESKTOP */}
        <div className='hidden sm:block w-full h-[28rem]'>
          <div className='relative object-cover w-full h-full'>
            <Image
              src={urlFor(themaData?.heroImage).url()}
              alt={`${themaData.themaName} + 'hero image'`}
              fill
              className='z-0'
              priority
            />
            <div className='global-margin h-[28rem] z-5 pt-10 relative'>
              <Link
                className='bg-grey-100 border rounded-md border-grey-100 pl-1 pr-2 py-0.5 breadcrumb text-green-500'
                href='/'
              >
                &lt; Home
              </Link>
              <div className='grid col-span-8 grid-cols-8 sm:pl-12 sm:pt:12 md:pl-24 lg:pl-36 pb-14 pt-14 w-4/5'>
                <div className='col-span-8'>
                  <h1 className='mobile sm:desktop text-grey-100 inline-block lg mobile sm:desktop'>
                    {themaData?.themaName}
                  </h1>
                </div>
                <div className='col-span-7'>
                  <p className='pt-4 text-grey-100 p-lg'>
                    {themaData?.themaSubtitle}{' '}
                    {themaData?.linkText && (
                      <span className='text-green-300 link-base inline-block  '>
                        <a
                          href={themaData?.headerLink}
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          {themaData?.linkText}
                          <span className='inline-block h-4 w-4 text-green-300'>
                            <svg
                              width='24'
                              height='24'
                              viewBox='0 3 24 24'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                d='M10 6H6C4.89543 6 4 6.89543 4 8V18C4 19.1046 4.89543 20 6 20H16C17.1046 20 18 19.1046 18 18V14M14 4H20M20 4V10M20 4L10 14'
                                stroke='#25C38B'
                                strokeWidth='1.3'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                              />
                            </svg>
                          </span>
                        </a>
                      </span>
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='block global-margin sm:hidden pt-5'>
          <div className='py-3'>
            <h2 className='mobile pb-3'>{themaData?.themaName}</h2>
            <p className=' pb-3'>
              {themaData?.themaSubtitle}
              {themaData?.linkText && (
                <span className='text-green-500 link-base inline-block'>
                  <a href={themaData?.headerLinkURL} target='_blank' rel='noopener noreferrer'>
                    {themaData?.linkText}{console.log(themaData?.headerLinkURL, 'hi')}
                    <LinkIcon />
                  </a>
                </span>
              )}
            </p>
          </div>

          <div className='h-56 max-w-[380px] mx-auto flex items-center justify-center'>
            <div className='flex items-center justify-center h-full w-full rounded-cl relative z-0 object-cover'>
              <Image
                src={urlFor(themaData?.heroImageMobile).url()}
                alt={`${themaData.themaName} + 'hero image'`}
                fill
                className='rounded-cl absolute'
              />
              <div className='w-full h-full thema-hero-gradient z-0 rounded-cl'></div>
            </div>
          </div>
        </div>

        <div className=''>
          <div className='global-margin'>
            <div className='pt-10 sm:pt-20 sm:pb-10'>
              <h2 className='mobile sm:desktop'>{themaData?.overviewsTitle}</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 sm:gap-x-14 justify-items-center sm:h-auto md:h-[76rem] lg:h-[38rem]'>
              <ThemeCard props={props} type='samenhang' />
              <ThemeCard props={props} type='list' />
              <ThemeCard props={props} type='waarvoor' />
            </div>
          </div>
          <ThemeBottomSection props={props} />
        </div>
      </div>
    </>
  );
}

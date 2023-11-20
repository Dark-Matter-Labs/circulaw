import Link from 'next/link';
import Image from 'next/image';
import LinkIcon from '../link-icon';
import { urlFor } from '../../lib/sanity';

import ThemeBottomSection from '../section-bottom-theme-index';
import waarvoor from '../../public/thema-card-background/waarvoor.svg';
import samenhang from '../../public/thema-card-background/samenhang.svg';
import list from '../../public/thema-card-background/list.svg';

export default function ThemeLayout({ ...props }) {
  const themaData = props.thema;
  return (
    <>
      <div>
        {/* HEADER DESKTOP */}
        <div className='hidden sm:block w-full h-[360px]'>
          <div className='relative object-cover w-full h-full mt-3'>
            <Image
              src={urlFor(themaData?.heroImage).url()}
              alt={`${themaData.themaName} + 'hero image'`}
              fill
              className='z-0'
              priority
            />

            <div className='global-margin h-[360px] z-5 relative flex flex-col justify-between'>
              <div className='pt-8'>
                <Link
                  className='rounded-clSm bg-breadcrumb px-4 pt-0.5 pb-1.5 w-auto text-gray-100'
                  href='/'
                >
                  <span className='p-2xs-bold link-interaction align-middle'>Home &nbsp; &gt;</span>
                </Link>
              </div>

              <div className='pb-8 max-w-5xl'>
                <div className=''>
                  <h1 className='mobile sm:desktop text-grey-100 inline-block lg mobile sm:desktop'>
                    {themaData?.themaName}
                  </h1>
                </div>
                <div className='col-span-7'>
                  <p className='pt-4 text-grey-100 p-lg '>
                    {themaData?.themaSubtitle}{' '}
                    {themaData?.linkText && (
                      <span className='text-green-300 link-base inline-block hover:text-green-200 active:text-green-100 focus:text-green-100 focus:right-2 focus:ring-white group'>
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

        {/* HEADER MOBILE */}
        <div className='block global-margin sm:hidden pt-5'>
          <div className='py-3'>
            <h2 className='mobile pb-3'>{themaData?.themaName}</h2>
            <p className=' pb-3'>
              {themaData?.themaSubtitle}
              {themaData?.linkText && (
                <span className='text-green-500 link-base inline-block '>
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

        {/* CARDS */}

        <div className=''>
          <div className='global-margin pb-20'>
            <div className='pt-10 sm:pt-14 pb-10'>
              <h2 className='mobile sm:desktop'>{themaData?.overviewsTitle}</h2>
            </div>
            <ul
              className='hidden sm:grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3 sm:gap-x-10 max-w-8xl relative z-0'
              role='list'
            >
              <li role='listitem' className='h-auto rounded-cl flex flex-col max-w-[340px]'>
                <div className='bg-green-600 rounded-t-cl h-48 flex items-center justify-center'>
                  <div className='p-4'>
                    <Image src={samenhang} alt=''  className='h-full w-full'/>
                  </div>
                </div>
                <div className='border border-gray-400 rounded-b-cl h-72'>bottom</div>
              </li>
              <li role='listitem' className='h-auto rounded-cl flex flex-col max-w-[340px]'>
                <div className='bg-green-600 rounded-t-cl h-48 flex items-center justify-center'>
                  <div className='p-4'>
                    <Image src={list} alt='' className='h-full w-full' />
                  </div>
                </div>
                <div className='border border-gray-400 rounded-b-cl h-72'>bottom</div>
              </li>
              <li role='listitem' className='h-auto rounded-cl flex flex-col max-w-[340px]'>
                <div className='bg-green-600 rounded-t-cl h-48 flex items-center justify-center'>
                  <div className='p-4'>
                    {' '}
                    <Image src={waarvoor} alt='' className='h-full w-full'/>
                  </div>
                </div>
                <div className='border border-gray-400 rounded-b-cl h-72'>bottom</div>
              </li>
            </ul>
          </div>

          <div className='bg-gray-200'>
            <ThemeBottomSection props={props} />
          </div>
        </div>
      </div>
    </>
  );
}

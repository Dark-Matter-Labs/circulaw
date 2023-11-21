import Link from 'next/link';
import Image from 'next/image';
import { ArrowRightIcon } from '@heroicons/react/outline';
import { useEffect, useState } from 'react';

import LinkIcon from '../link-icon';
import { urlFor } from '../../lib/sanity';
import ThemeBottomSection from '../section-bottom-theme-index';
import waarvoor from '../../public/thema-card-background/waarvoor.svg';
import samenhang from '../../public/thema-card-background/samenhang.svg';
import list from '../../public/thema-card-background/list.svg';
import CustomButton from '../../components/custom-button';

export default function ThemeLayout({ ...props }) {
  const themaData = props.thema;
  // temp function to set link to list page - can be removed when new link structure is set.

  const [listLink, setListLink] = useState();

  useEffect(() => {
    if (themaData.slug.current === 'circulaire-windturbines') {
      setListLink('windturbines');
    } else if (themaData.slug.current === 'houtbouw-stimuleren') {
      setListLink('houtbouw');
    } else {
      setListLink('matrassen');
    }
  }, [themaData.slug]);

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
              className='z-0 bg-cover'
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
        <div className='h-[300px] mt-3 sm:hidden'>
          <div className='flex items-center h-full w-full relative z-0 object-cover'>
            <Image
              src={urlFor(themaData?.heroImageMobile).url()}
              alt={`${themaData.themaName} + 'hero image'`}
              fill
              className=' absolute'
            />
            <div className='w-full h-full bg-gradient-to-t from-[#035E46] to-[#035E4600] z-0 absolute'></div>

            <div className='w-full h-full z-10 flex flex-col justify-between global-margin'>
              <div>
                <div className='pt-8'>
                  <Link
                    className='rounded-clSm bg-breadcrumb px-4 pt-0.5 pb-1.5 w-auto text-gray-100'
                    href='/'
                  >
                    <span className='p-2xs-bold link-interaction align-middle'>
                      Home &nbsp; &gt;
                    </span>
                  </Link>
                </div>
              </div>
              <div className='mb-6'>
                <h1 className='p-5xl-semibold text-gray-50 pb-1'>{themaData?.themaName}</h1>
                <p className='p-base text-gray-50'>
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
            </div>
          </div>
        </div>

        {/* CARDS */}
        <div className=''>
          <div className='global-margin pb-16 sm:pb-20'>
            <div className='pt-14 pb-10'>
              <h2 className='p-3xl-semibold sm:p-5xl-semibold'>{themaData?.overviewsTitle}</h2>
            </div>
            {/* Desktop Cards */}
            <ul
              className='hidden sm:grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3 sm:gap-x-8 max-w-8xl relative z-0'
              role='list'
            >
              <Link href={`/${themaData.slug.current}/categorie`}>
                <li
                  role='listitem'
                  className='h-auto rounded-cl flex flex-col max-w-[355px] min-w-[300px]'
                >
                  <div className='bg-green-600 rounded-t-cl h-48 flex items-center justify-center'>
                    <div className='p-4'>
                      <Image
                        src={samenhang}
                        alt='vector image for categorie page'
                        className='h-full w-full'
                      />
                    </div>
                  </div>

                  <div className='border border-gray-400 rounded-b-cl h-72 flex flex-col justify-between p-5'>
                    <div>
                      <div className='p-4xl-semibold pb-4'>{themaData.samenhangTitle}</div>
                      <div className='p-base'>{themaData.samenhangText}</div>
                    </div>
                    <CustomButton color='whiteBackground'>
                      Bekijk jouw categorie
                      <ArrowRightIcon
                        className='inline-block h-4 w-4 ml-1 place-self-center'
                        aria-hidden='true'
                      />
                    </CustomButton>
                  </div>
                </li>
              </Link>
              <Link href={`/measures/${listLink}`}>
                <li
                  role='listitem'
                  className='h-auto rounded-cl flex flex-col max-w-[355px] min-w-[300px]'
                >
                  <div className='bg-green-600 rounded-t-cl h-48 flex items-center justify-center'>
                    <div className='p-4'>
                      <Image src={list} alt='' className='h-full w-full' />
                    </div>
                  </div>
                  <div className='border border-gray-400 rounded-b-cl h-72 flex flex-col justify-between p-5'>
                    <div>
                      <div className='p-4xl-semibold pb-4'>{props.listTitle}</div>
                      <div className='p-base'>{themaData.listText}</div>
                    </div>
                    <CustomButton color='whiteBackground'>
                    Naar de lijst
                      <ArrowRightIcon
                        className='inline-block h-4 w-4 ml-1 place-self-center'
                        aria-hidden='true'
                      />
                    </CustomButton>
                  </div>{' '}
                </li>
              </Link>
              <Link href={`/${themaData.slug.current}/welke-overheid-heeft`}>
                <li
                  role='listitem'
                  className='h-auto rounded-cl flex flex-col max-w-[355px] min-w-[300px]'
                >
                  <div className='bg-green-600 rounded-t-cl h-48 flex items-center justify-center'>
                    <div className='p-4'>
                      {' '}
                      <Image src={waarvoor} alt='' className='h-full w-full' />
                    </div>
                  </div>
                  <div className='border border-gray-400 rounded-b-cl h-72 flex flex-col justify-between p-5'>
                    <div>
                      <div className='p-4xl-semibold pb-4'>{themaData.welkeTitle}</div>
                      <div className='p-base'>{themaData.welkeText}</div>
                    </div>
                    <CustomButton color='whiteBackground'>
                    Bekijk de bevoegdheden
                      <ArrowRightIcon
                        className='inline-block h-4 w-4 ml-1 place-self-center'
                        aria-hidden='true'
                      />
                    </CustomButton>
                  </div>{' '}
                </li>
              </Link>
            </ul>
            {/* Mobile Cards */}
            <ul className='sm:hidden max-w-sm'>
              <li>
                <Link href={`/${themaData.slug.current}/categorie`}>
                  <div className='h-24 w-full rounded-cl bg-grey-100 shadow mb-6'>
                    <div className='flex items-center justify-start'>
                      <div className='h-24 w-24 relative bg-green-600 p-1 rounded-l-cl shadow'>
                        <Image
                          src={samenhang}
                          alt='vector image for categorie page'
                          className='w-full h-full rounded-l-cl'
                        />
                      </div>
                      <div className='text-grey-800 px-4 flex items-center justify-center max-w-[240px]'>
                        <div className='p-2xl-semibold'>Instrumenten per categorie</div>
                        <ArrowRightIcon
                          className='block h-6 w-6 text-green-600 mt-1'
                          aria-hidden='true'
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
              <li>
                <Link href={`/measures/${listLink}`}>
                  <div className='h-24 w-full rounded-cl bg-grey-100 shadow my-6'>
                    <div className='flex items-center justify-start'>
                      <div className='h-24 w-24 relative bg-green-600 p-1 rounded-l-cl shadow'>
                        <Image
                          src={list}
                          alt='vector image for list page'
                          className='w-full h-full rounded-l-cl'
                        />
                      </div>
                      <div className='text-grey-800 px-4 flex items-center justify-center max-w-[240px]'>
                        <div className='p-2xl-semibold'>{props.listTitle}</div>
                        <ArrowRightIcon
                          className='block h-6 w-6 text-green-600'
                          aria-hidden='true'
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
              <li>
                <Link href={`/${themaData.slug.current}/welke-overheid-heeft`}>
                  <div className='h-24 w-full rounded-cl bg-grey-100 shadow mt-6'>
                    <div className='flex items-center justify-start'>
                      <div className='h-24 w-24 relative bg-green-600 p-1 rounded-l-cl shadow'>
                        <Image
                          src={waarvoor}
                          alt='vector image for waarvoor page'
                          className='w-full h-full rounded-l-cl'
                        />
                      </div>
                      <div className='text-grey-800 px-4 flex items-center justify-center max-w-[240px]'>
                        <div className='p-2xl-semibold'>{themaData.welkeTitle}</div>
                        <ArrowRightIcon
                          className='block h-6 w-6 text-green-600 mt-1'
                          aria-hidden='true'
                        />
                      </div>
                    </div>
                  </div>
                </Link>
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

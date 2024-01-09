import Link from 'next/link';
import Image from 'next/image';
import { ArrowRightIcon } from '@heroicons/react/outline';

import ThemeBottomSection from '@/components/theme-page/section-bottom-theme-index';
import waarvoor from '@/public/thema-card-background/waarvoor.svg';
import samenhang from '@/public/thema-card-background/samenhang.svg';
import list from '@/public/thema-card-background/list.svg';
import CustomButton from '@/components/custom-button';
import ThemePageHeader from '../theme-page/theme-page-header';
import ThemePageHeaderMobile from '../theme-page/theme-page-header-mobile';

export default function ThemeLayout({ ...props }) {
  const themaData = props.thema;
  console.log(props, 'null')
  return (
    <>
      <div>
        {/* HEADER DESKTOP */}
        <ThemePageHeader themaData={themaData} />
        {/* HEADER MOBILE */}
        
        <ThemePageHeaderMobile themaData={themaData} />
       
        {/* CARDS */}
        <div className='bg-gradient-to-b from-[#F8FAF8] to-[#F8FAF8]'>
          <div className='global-margin pb-16 sm:pb-20'>
            <div className='pt-14 pb-10'>
              <h2 className='p-3xl-semibold sm:p-5xl-semibold'>{themaData?.overviewsTitle}</h2>
            </div>
            {/* Desktop Cards */}
            <ul
              className='hidden sm:grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3 sm:gap-x-8 max-w-8xl relative z-0'
              role='list'
            >
              <Link href={`/${themaData?.transitionAgenda}/${themaData?.slug?.current}/categorie`}>
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

                  <div className='border border-gray-400 bg-gray-50 rounded-b-cl h-72 flex flex-col justify-between p-5'>
                    <div>
                      <div className='p-4xl-semibold pb-4'>{themaData?.samenhangTitle}</div>
                      <div className='p-base'>{themaData?.samenhangText}</div>
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
              <Link href={`/${themaData?.transitionAgenda}/${themaData?.slug.current}/instrumenten/`}>
                <li
                  role='listitem'
                  className='h-auto rounded-cl flex flex-col max-w-[355px] min-w-[300px]'
                >
                  <div className='bg-green-600 rounded-t-cl h-48 flex items-center justify-center'>
                    <div className='p-4'>
                      <Image src={list} alt='' className='h-full w-full' />
                    </div>
                  </div>
                  <div className='border border-gray-400 bg-gray-50 rounded-b-cl h-72 flex flex-col justify-between p-5'>
                    <div>
                      <div className='p-4xl-semibold pb-4'>{props.listTitle}</div>
                      <div className='p-base'>{themaData?.listText}</div>
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
              <Link
                href={`/${themaData?.transitionAgenda}/${themaData?.slug?.current}/overheidsbevoegdheid`}
              >
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
                  <div className='border border-gray-400 bg-gray-50 rounded-b-cl h-72 flex flex-col justify-between p-5'>
                    <div>
                      <div className='p-4xl-semibold pb-4'>{themaData?.welkeTitle}</div>
                      <div className='p-base'>{themaData?.welkeText}</div>
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
                <Link href={`/${themaData?.transitionAgenda}/${themaData?.slug?.current}/categorie`}>
                  <div className='h-24 w-full rounded-cl bg-grey-50 shadow mb-6'>
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
                <Link
                  href={`/${themaData?.transitionAgenda}/${themaData?.slug?.current}/instrumenten/`}
                >
                  <div className='h-24 w-full rounded-cl bg-grey-50 shadow my-6'>
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
                <Link
                  href={`/${themaData?.transitionAgenda}/${themaData?.slug?.current}/overheidsbevoegdheid`}
                >
                  <div className='h-24 w-full rounded-cl bg-grey-50 shadow mt-6'>
                    <div className='flex items-center justify-start'>
                      <div className='h-24 w-24 relative bg-green-600 p-1 rounded-l-cl shadow'>
                        <Image
                          src={waarvoor}
                          alt='vector image for waarvoor page'
                          className='w-full h-full rounded-l-cl'
                        />
                      </div>
                      <div className='text-grey-800 px-4 flex items-center justify-center max-w-[240px]'>
                        <div className='p-2xl-semibold'>{themaData?.welkeTitle}</div>
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
            <ThemeBottomSection props={props} thema={themaData?.themaName} />
          </div>
        </div>
      </div>
    </>
  );
}

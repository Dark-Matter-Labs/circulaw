'use client';

import Image from 'next/image';

import Breadcrumb from './breadcrumbs';
import InstrumentLinksDropdown from './instrument-links-dropdown';

export default function Header({ imageURL, bgColor, title, pageType, subtitle, ...props }) {
  return (
    <>
      <div
        className={`${bgColor} global-margin mt-20 ${pageType === 'withTabs' ? 'rounded-t-cl' : 'rounded-cl'}`}
      >
        <div className='relative h-full w-full object-cover px-16 py-10'>
          {imageURL && (
            <>
              <Image
                src={imageURL}
                alt='homepage decoration'
                fill
                sizes='100vw'
                className='rounded-cl object-cover'
                priority={true}
                quality={100}
              />
              <div className='absolute left-0 top-0 z-0 h-full w-full rounded-cl bg-gradient-to-t from-[#035E46] to-[#035E4600]'></div>{' '}
            </>
          )}
          <div className='z-5 relative flex flex-col justify-between'>
            <div
              className={`${pageType === 'withTabs' || pageType === 'instrumentOverview' ? 'mb-12' : 'mb-20'} flex flex-row justify-between`}
            >
              <Breadcrumb pageType={pageType} />
              {(pageType === 'withTabs' || pageType === 'instrumentOverview') && (
                <div className='block py-3 sm:float-right sm:py-0'>
                  <div className='p-base hidden pb-2 text-white sm:block'>
                    Bekijk de instrumenten:
                  </div>
                  <InstrumentLinksDropdown
                    page={props.page}
                    productChain={props.productChain}
                    thema={props.thema}
                  />
                </div>
              )}
            </div>
            <div className=''>
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

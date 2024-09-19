import ThemaCard from '../product-chain-page/thema-cards';
import PCTooltip from '../tooltips/product-chain-tooltip';
import CustomButton from '@/components/custom-button';
import PageHeader from '@/components/product-chain-page/product-chain-header';
import MobilePageHeader from '@/components/product-chain-page/product-chain-header-mobile';
import { urlFor } from '@/lib/sanity';
import Image from 'next/image';
import Link from 'next/link';

// TODO: See what we could move to a layout.js file instead of having everything in components.
export default function PCLayout({ ...props }) {
  return (
    <>
      <div>
        {/* HEADER DESKTOP */}
        <PageHeader pageTitle={props?.productChainData?.pcName} />
        {/* HEADER MOBILE */}
        <MobilePageHeader pageTitle={props?.productChainData?.pcName} />
        
        <div className='bg-gray-100'>
          <div className='global-margin pb-12 sm:pb-20'>
            <div className='pt-14 pb-0 sm:pb-10'>
              <h2 className='heading-2xl-semibold sm:heading-3xl-semibold text-green-800 pb-8'>
                Thema’s en juridische instrumenten
              </h2>
              <p className='pb-5 p-base max-w-2xl'>
                {props?.productChainData?.introOne} <b>{props?.totalInstruments} instrumenten</b>{' '}
                {props?.productChainData?.introTwo}
              </p>
            </div>

            <div className='-z-20'>
              <ThemaCard themaCards={props?.themaList} transitionAgenda ={props.productChainData.pcName} />
            </div>
          </div>
        </div>
        <div className='bg-green-50'>
          <div className='global-margin'>
            <div className='pt-10 pb-14'>
              <h2 className='heading-2xl-semibold sm:heading-3xl-semibold text-green-800 pb-14 max-w-3xl'>
                {props?.productChainData?.impactTitle}
              </h2>
              <div className='grid grid-cols-1 justify-items-center sm:flex sm:justify-center gap-20'>
                {props?.impactList?.map((impact) => (
                  <div
                    className='flex flex-col items-center justify-between text-center max-w-xs'
                    key={impact.detail}
                  >
                    <div>
                      {impact?.image && (
                        <Image
                          className='w-28 h-28 mb-6 rounded-cl'
                          src={urlFor(impact?.image).url()}
                          alt='impact image'
                          height={112}
                          width={112}
                        />
                      )}
                    </div>
                    <div className='h-full flex items-start'>
                      <p className='p-base'>{impact.detail}</p>
                    </div>
                    <PCTooltip title={impact.disclosureTitle} content={impact.disclosureContent}>
                      <p className='pt-8 p-base-bold text-green-800 border-b pb-1 border-green-800'>
                        {impact.question}
                      </p>
                    </PCTooltip>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className='global-margin pt-14 bg-gray-100'>
          <div className='max-w-4xl'>
            <h2 className='heading-2xl-semibold sm:heading-3xl-semibold text-green-800 pb-14'>
              {props?.productChainData?.ambitionTitle}
            </h2>
            {props?.ambitionList?.map((ambition, index) =>
              index % 2 == 0 ? (
                <div key={index} className='grid grid-cols-1 sm:grid-cols-2 gap-x-[80px] pb-28'>
                  <div className='block mb-6 sm:hidden'>
                    {ambition?.image && (
                      <Image
                        src={urlFor(ambition?.image).url()}
                        alt='ambition illustration'
                        height={356}
                        width={542}
                      />
                    )}
                  </div>
                  <div className=''>
                    <span className='p-base-semibold text-green-600'>{ambition.subTitle}</span>
                    <h4 className='heading-2xl-semibold sm:3xl-semibold text-green-800 mt-2'>
                      {ambition.title}
                    </h4>
                    <p className='p-base pt-4 max-w-xl pb-4'>{ambition.detail}</p>
                    {ambition.buttonText && (
                      <Link href={ambition.buttonLink}>
                        <CustomButton color='lightGreenBackground'>
                          {ambition.buttonText}
                        </CustomButton>
                      </Link>
                    )}
                  </div>
                  <div className='hidden sm:block'>
                    {ambition?.image && (
                      <Image
                        src={urlFor(ambition?.image).url()}
                        alt='ambition illustration'
                        height={356}
                        width={542}
                      />
                    )}
                  </div>
                </div>
              ) : (
                <div
                  key={ambition.title}
                  className='grid grid-cols-1 sm:grid-cols-2 gap-x-[80px] pb-28'
                >
                  <div>
                    {ambition?.image && (
                      <Image
                        src={ambition.image}
                        alt='ambition illustration'
                        height={356}
                        width={542}
                        className='mb-6'
                      />
                    )}
                  </div>
                  <div className=''>
                    <span className='p-base-semibold text-green-600'>{ambition.subTitle}</span>
                    <h4 className='heading-2xl-semibold sm:3xl-semibold text-green-800 mt-2'>
                      {ambition.title}
                    </h4>
                    <p className='p-base pt-4 max-w-xl pb-4'>{ambition.detail}</p>
                    {ambition.buttonText && (
                      <Link href={ambition.buttonLink}>
                        <CustomButton color='lightGreenBackground'>
                          {ambition.buttonText}
                        </CustomButton>
                      </Link>
                    )}
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
        {props.links && (
          <div className='pt-14 pb-10 bg-green-50'>
            <div className='global-margin'>
              <h2 className='heading-2xl-semibold sm:heading-3xl-semibold text-green-800 pb-14'>
                Duik nog dieper in de materie{' '}
                <span className='pl-0.5 inline-block h-6 w-6 -mb-1 relative'>
                  <svg
                    className='stroke-current h-6 w-6'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M10 6H6C4.89543 6 4 6.89543 4 8V18C4 19.1046 4.89543 20 6 20H16C17.1046 20 18 19.1046 18 18V14M14 4H20M20 4V10M20 4L10 14'
                      stroke=''
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </span>
              </h2>
              <div className='newlineDisplay p-base -mt-2 mb-6'>
                <ul className='list-disc pl-6 p-base'>
                  {props?.links?.map((link, id) => (
                    <li className='py-0.5' key={id}>
                      <a
                        className='text-green-500 inline link-interaction'
                        href={link.link}
                        target='_blank'
                        rel='noreferrer'
                      >
                        <span className='link-base link-interaction'>{link.linkText}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

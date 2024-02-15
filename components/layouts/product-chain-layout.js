import Image from 'next/image';
import { urlFor } from '@/lib/sanity';
import Link from 'next/link';
import CustomButton from '@/components/custom-button';
import PageHeader from '@/components/product-chain-page/product-chain-header';
import MobilePageHeader from '@/components/product-chain-page/product-chain-header-mobile';
// import ThemaList from '@/components/thema-list';
import PCTooltip from '../tooltips/product-chain-tooltip';
import ThemaCard from '../thema-cards';

export default function ThemeLayout({ ...props }) {
  return (
    <>
      <div>
        {/* HEADER DESKTOP */}
        <PageHeader pageTitle={props.title} />
        {/* HEADER MOBILE */}
        <MobilePageHeader pageTitle={props.title} />

        <div className='bg-grey-150'>
          <div className='global-margin pb-12 sm:pb-20'>
            <div className='pt-14 pb-0 sm:pb-10'>
              <h2 className='p-6xl-semibold text-green-800 pb-8'>
                Thema’s en juridische instrumenten
              </h2>
              <p className='pb-5 p-base max-w-2xl'>
                Duik gelijk in de juridische materie. Hieronder staan{' '}
                <b>{props.totalInstruments} instrumenten</b> die te maken hebben met voedsel. We
                hebben ze onderverdeeld in categorieen zodat je direct kunt beginnen waar het voor
                jou het beste past.
              </p>
            </div>

            <div className='-z-20'>
              <ThemaCard themaCards={props.themaList} />
            </div>

            <div className='pt-12 sm:pt-20'>
              <h2 className='p-3xl-semibold sm:p-6xl-semibold text-green-800 pb-8'>
                Impact voedselsyteem op het klimaat en de natuur{' '}
              </h2>
              <div className='grid grid-cols-1 justify-items-center sm:flex sm:justify-center gap-20'>
                {props.impactList.map((impact) => (
                  <div
                    className='grid grid-cols-1 justify-items-center content-between text-center max-w-xs'
                    key={impact.detail}
                  >
                    <div>
                      <Image
                        className='w-28 h-28'
                        src={urlFor(impact?.image).url()}
                        alt='impact image'
                        height={40}
                        width={40}
                      />
                    </div>
                    <div>
                      <p className='pt-4 p-base'>{impact.detail}</p>
                    </div>
                    <PCTooltip title={impact.disclosureTitle} content={impact.disclosureContent}>
                      <p className='pt-8 p-base-bold  text-green-800'>{impact.question}</p>
                    </PCTooltip>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className='global-margin pt-14  bg-white'>
          <h2 className='p-6xl-semibold text-green-800 pb-10'>De voedsel-ambities in nederland</h2>
          {props.ambitionList.map((ambition, index) =>
            index % 2 == 0 ? (
              <div key={index} className='grid grid-cols-1 sm:grid-cols-2 pb-20'>
                <div className='block mb-6 sm:hidden'>
                  <Image
                    src={urlFor(ambition?.image).url()}
                    alt='ambition illustration'
                    height={356}
                    width={542}
                  />
                </div>
                <div>
                  <h4 className='p-2xl-semibold sm:3xl-semibold text-green-800'>
                    {ambition.title}
                  </h4>
                  <p className='p-xl pt-4 max-w-xl pb-4'>{ambition.detail}</p>
                  {ambition.buttonText && (
                    <Link href={ambition.buttonLink}>
                      <CustomButton color='lightGreenBackground'>
                        {ambition.buttonText}
                      </CustomButton>
                    </Link>
                  )}
                </div>
                <div className='hidden sm:block'>
                  <Image
                    src={urlFor(ambition?.image).url()}
                    alt='ambition illustration'
                    height={356}
                    width={542}
                  />
                </div>
              </div>
            ) : (
              <div key={ambition.title} className='grid grid-cols-1 sm:grid-cols-2 pb-20'>
                <div>
                  <Image
                    src={ambition.image}
                    alt='ambition illustration'
                    height={356}
                    width={542}
                    className='mb-6'
                  />
                </div>
                <div>
                  <h4 className='p-2xl-semibold sm:3xl-semibold text-green-800'>
                    {ambition.title}
                  </h4>
                  <p className='p-xl pt-4 max-w-xl pb-4'>{ambition.detail}</p>
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
        <div className='pt-14 pb-10 bg-grey-150'>
          <div className='global-margin'>
            <h2 className='p-6xl-semibold text-green-800 pb-10'>
              Duik nog dieper in de materie{' '}
              <span className='pl-0.5 inline-block h-6 w-6 -mb-1 relative '>
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
      </div>
    </>
  );
}

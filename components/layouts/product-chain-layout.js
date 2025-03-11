import Image from 'next/image';
import Link from 'next/link';

import CustomButton from '@/components/custom-button';
import PageHeader from '@/components/product-chain-page/product-chain-header';
import { urlFor } from '@/lib/sanity';

import Modal from '../modal/modal';
import ModalContent from '../modal/modal-content';
import ThemaCard from '../product-chain-page/thema-cards';

// TODO: See what we could move to a layout.js file instead of having everything in components.
export default function PCLayout({ ...props }) {
  return (
    <>
      <div>
        {/* HEADER DESKTOP */}
        <PageHeader pageTitle={props?.productChainData?.pcName} />
        {/* HEADER MOBILE */}
        <div className='bg-gray-100'>
          <div className='global-margin pb-12 sm:pb-20'>
            <div className='pb-0 pt-14 sm:pb-10'>
              <h2 className='heading-2xl-semibold sm:heading-3xl-semibold pb-8 text-green-800'>
                Thema’s en juridische instrumenten
              </h2>
              <p className='p-base max-w-2xl pb-5'>
                {props?.productChainData?.introOne} <b>{props?.totalInstruments} instrumenten</b>{' '}
                {props?.productChainData?.introTwo}
              </p>
            </div>
            <div className='-z-20'>
              <ThemaCard
                themaCards={props?.themaList}
                transitionAgenda={props.productChainData.pcName}
              />
            </div>
            <div>
              {props.productChainData.pcName === 'Bouw' && (
                <>
                  <div className='max-w-8xl relative z-0 mt-20 hidden grid-cols-2 gap-x-4 gap-y-8 sm:grid sm:gap-x-4 md:grid-cols-2 lg:grid-cols-4'>
                    <div className='group w-full flex-grow rounded-cl border border-gray-200 bg-green-50'>
                      <Link href='/training' className='h-full w-full'>
                        <div className='flex h-full w-full flex-grow flex-col justify-between gap-y-2 p-6'>
                          <h3 className='heading-2xl-semibold text-green-600'>
                            E-learning Circulaire houtbouw onder de Omgevingswet
                          </h3>
                          <div>
                            <p className='p-base pt-4 text-green-800'>
                              Hoe gebruik je de instrumenten van de Omgevingswet om houtbouw te
                              verankeren in beleid? Dat leer je in onze e-learning: ‘Circulaire
                              houtbouw onder de Omgevingswet’.
                            </p>
                          </div>
                          <div className='flex justify-center'>
                            <CustomButton color='darkGreenBG'>
                              <span className='flex w-full flex-col'>
                                <span>Meer over de</span>{' '}
                                <span className='block'>e-learning houtbouw</span>
                              </span>{' '}
                            </CustomButton>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className='group w-full flex-grow rounded-cl border border-gray-200 bg-green-50'>
                      <Link href='/bouw/planregels' className='h-full w-full'>
                        <div className='flex h-full w-full flex-grow flex-col justify-between gap-y-2 p-6'>
                          <h3 className='heading-2xl-semibold text-green-600'>
                            Planregels: modelteksten voor het omgevingsplan
                          </h3>
                          <div>
                            <p className='p-base pt-4 text-green-800'>
                              Samen met de omgevingsvisie en omgevingsprogramma is het omgevingsplan
                              een van de instrumenten om circulair bouwen te bevorderen
                            </p>
                          </div>
                          <div className='flex justify-center'>
                            <CustomButton color='darkGreenBG'>
                              Meer over het omgevingsplan{' '}
                            </CustomButton>
                          </div>
                        </div>
                      </Link>
                    </div>

                    <div className='group w-full flex-grow rounded-cl border border-gray-200 bg-green-50'>
                      <Link href='/bouw/area-planning' className='h-full w-full'>
                        <div className='flex h-full w-full flex-grow flex-col justify-between gap-y-2 p-6'>
                          <h3 className='heading-2xl-semibold text-green-600'>AREA PLANNING </h3>
                          <div>
                            <p className='p-base pt-4 text-green-800'>AREA PLANNING</p>
                          </div>
                          <div className='flex justify-center'>
                            <CustomButton color='darkGreenBG'>GET PLANNING </CustomButton>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>

                  <div className='mt-6 block w-full rounded-cl border border-gray-200 bg-green-50 sm:hidden'>
                    <Link href='/training' className='h-full w-full'>
                      <div className='flex h-full w-full flex-grow flex-col justify-between p-6'>
                        <h3 className='heading-2xl-semibold pb-4 text-green-600'>
                          E-learning Circulaire houtbouw onder de Omgevingswet{' '}
                        </h3>
                        <p className='p-base text-gren-800'>
                          Hoe gebruik je de instrumenten van de Omgevingswet om houtbouw te
                          verankeren in beleid? Dat leer je in onze e-learning: ‘Circulaire houtbouw
                          onder de Omgevingswet’.
                        </p>

                        <div className='flex grow self-baseline pt-6'>
                          <CustomButton color='darkGreenBG'>
                            Meer over de e-learning houtbouw{' '}
                          </CustomButton>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className='mt-6 block w-full rounded-cl border border-gray-200 bg-green-50 sm:hidden'>
                    <Link href='/training' className='h-full w-full'>
                      <div className='flex h-full w-full flex-grow flex-col justify-between p-6'>
                        <h3 className='heading-2xl-semibold pb-4 text-green-600'>
                          Planregels: modelteksten voor het omgevingsplan
                        </h3>
                        <p className='p-base text-gren-800'>
                          Samen met de omgevingsvisie en omgevingsprogramma is het omgevingsplan een
                          van de instrumenten om circulair bouwen te bevorderen
                        </p>

                        <div className='flex grow self-baseline pt-6'>
                          <CustomButton color='darkGreenBG'>
                            Meer over het omgevingsplan{' '}
                          </CustomButton>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className='mt-6 block w-full rounded-cl border border-gray-200 bg-green-50 sm:hidden'>
                    <Link href='/bouw/area-planning' className='h-full w-full'>
                      <div className='flex h-full w-full flex-grow flex-col justify-between p-6'>
                        <h3 className='heading-2xl-semibold pb-4 text-green-600'>AREA PLANNING</h3>
                        <p className='p-base text-gren-800'>AREA PLANNING</p>

                        <div className='flex grow self-baseline pt-6'>
                          <CustomButton color='darkGreenBG'>
                            Meer over het omgevingsplan{' '}
                          </CustomButton>
                        </div>
                      </div>
                    </Link>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        <div className='bg-green-50'>
          <div className='global-margin'>
            <div className='pb-14 pt-10'>
              <h2 className='heading-2xl-semibold sm:heading-3xl-semibold max-w-3xl pb-14 text-green-800'>
                {props?.productChainData?.impactTitle}
              </h2>
              <div className='grid grid-cols-1 justify-items-center gap-20 sm:flex sm:justify-center'>
                {props?.impactList?.map((impact) => (
                  <div
                    className='flex max-w-xs flex-col items-center justify-between text-center'
                    key={impact.detail}
                  >
                    <div>
                      {impact?.image && (
                        <Image
                          className='mb-6 h-28 w-28 rounded-cl'
                          src={urlFor(impact?.image).url()}
                          alt='impact image'
                          height={112}
                          width={112}
                          placeholder='blur'
                          blurDataURL={impact?.metadata.lqip}
                        />
                      )}
                    </div>
                    <div className='flex h-full items-start'>
                      <p className='p-base'>{impact.detail}</p>
                    </div>
                    <Modal
                      Button={
                        <p className='p-base-bold border-b border-green-800 pb-1 pt-8 text-green-800'>
                          {impact.question}
                        </p>
                      }
                    >
                      <ModalContent
                        title={impact.disclosureTitle}
                        ptContent={impact.disclosureContent}
                      ></ModalContent>
                    </Modal>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className='global-margin bg-gray-100 pt-14'>
          <div className='max-w-4xl'>
            <h2 className='heading-2xl-semibold sm:heading-3xl-semibold pb-14 text-green-800'>
              {props?.productChainData?.ambitionTitle}
            </h2>
            {props?.ambitionList?.map((ambition, index) =>
              index % 2 == 0 ? (
                <div key={index} className='grid grid-cols-1 gap-x-[80px] pb-28 sm:grid-cols-2'>
                  <div className='mb-6 block sm:hidden'>
                    {ambition?.image && (
                      <Image
                        src={urlFor(ambition?.image).url()}
                        alt='ambition illustration'
                        height={356}
                        width={542}
                        placeholder='blur'
                        blurDataURL={ambition?.metadata.lqip}
                      />
                    )}
                  </div>
                  <div className=''>
                    <span className='p-base-semibold text-green-600'>{ambition.subTitle}</span>
                    <h4 className='heading-2xl-semibold sm:3xl-semibold mt-2 text-green-800'>
                      {ambition.title}
                    </h4>
                    <p className='p-base max-w-xl pb-4 pt-4'>{ambition.detail}</p>
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
                        placeholder='blur'
                        blurDataURL={ambition?.metadata.lqip}
                      />
                    )}
                  </div>
                </div>
              ) : (
                <div
                  key={ambition.title}
                  className='grid grid-cols-1 gap-x-[80px] pb-28 sm:grid-cols-2'
                >
                  <div>
                    {ambition?.image && (
                      <Image
                        src={ambition.image}
                        alt='ambition illustration'
                        height={356}
                        width={542}
                        className='mb-6'
                        placeholder='blur'
                        blurDataURL={ambition?.metadata.lqip}
                      />
                    )}
                  </div>
                  <div className=''>
                    <span className='p-base-semibold text-green-600'>{ambition.subTitle}</span>
                    <h4 className='heading-2xl-semibold sm:3xl-semibold mt-2 text-green-800'>
                      {ambition.title}
                    </h4>
                    <p className='p-base max-w-xl pb-4 pt-4'>{ambition.detail}</p>
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
          <div className='bg-green-50 pb-10 pt-14'>
            <div className='global-margin'>
              <h2 className='heading-2xl-semibold sm:heading-3xl-semibold pb-14 text-green-800'>
                Duik nog dieper in de materie{' '}
                <span className='relative -mb-1 inline-block h-6 w-6 pl-0.5'>
                  <svg
                    className='h-6 w-6 stroke-current'
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
                <ul className='p-base list-disc pl-6'>
                  {props?.links?.map((link, id) => (
                    <li className='py-0.5' key={id}>
                      <a
                        className='link-interaction inline text-green-500'
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

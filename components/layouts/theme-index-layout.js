'use client';
import Image from 'next/image';
import Link from 'next/link';
import { IconArrowRight } from '@tabler/icons-react';
import ThemePageHeader from '../theme-page/theme-page-header';
import ThemePageHeaderMobile from '../theme-page/theme-page-header-mobile';
import CustomButton from '@/components/custom-button';
import ThemeBottomSection from '@/components/theme-page/section-bottom-theme-index';
import list from '@/public/thema-card-background/list.svg';
import samenhang from '@/public/thema-card-background/samenhang.svg';
import waarvoor from '@/public/thema-card-background/waarvoor.svg';
import elearning from '@/public/e-learning.png';
import { useEffect } from 'react';
import ThemeSponsors from '../theme-page/theme-sponsors';

// TODO: See what we could move to a layout.js file instead of having everything in components.
export default function ThemeLayout({ featuredLaws, thema, numberOfLaws }) {
  useEffect(() => {
    localStorage.clear();
  });

  return (
    <>
      <div>
        {/* HEADER DESKTOP */}
        <ThemePageHeader themaData={thema} />
        {/* HEADER MOBILE */}
        <ThemePageHeaderMobile themaData={thema} />

        {/* CARDS */}
        <div className='bg-gray-100'>
          <div className='global-margin pb-16 sm:pb-20'>
            <div className='pb-14 pt-20'>
              <h2 className='heading-2xl-semibold sm:heading-3xl-semibold'>
                {thema?.overviewsTitle}
              </h2>
            </div>

            {/* Desktop Cards */}
            {/* keeping this here as we will be re-using this layout when we add a call to action for the e-learning  */}
            {thema?.themaName === 'Houtbouw' ? (
              <>
                <div className='hidden grid-cols-3 text-green-800 sm:grid md:gap-x-8 lg:gap-x-16'>
                  <div className='grid-col col-span-2 grid gap-y-4'>
                    <Link href={`/${thema?.transitionAgenda}/${thema?.slug?.current}/categorie`}>
                      <div className='group grid h-44 w-full grid-cols-3 rounded-cl bg-green-50 hover:cursor-pointer'>
                        <div className='col-span-1 rounded-l-cl bg-green-600'>
                          <div className='flex h-full w-full items-center justify-center p-4'>
                            <Image src={samenhang} alt='' className='h-3/4 w-3/4' />
                          </div>
                        </div>
                        <div className='col-span-2 flex flex-col gap-y-2 p-4'>
                          <div className='heading-xl-semibold'>{thema?.samenhangTitle}</div>
                          <div className='p-base h-full flex-grow'>{thema?.samenhangText}</div>
                          <div className='p-base-semibold flex w-full items-center justify-end group-hover:text-green-300'>
                            Bekijk jouw categorie
                            <IconArrowRight className='ml-0.5 h-5 w-5' />
                          </div>
                        </div>
                      </div>
                    </Link>
                    <Link href={`/${thema?.transitionAgenda}/${thema?.slug.current}/instrumenten/`}>
                      <div className='group grid h-44 w-full grid-cols-3 rounded-cl bg-green-50 hover:cursor-pointer'>
                        <div className='col-span-1 rounded-l-cl bg-green-600'>
                          <div className='flex h-full w-full items-center justify-center p-4'>
                            <Image src={list} alt='' className='h-3/4 w-3/4' />
                          </div>
                        </div>
                        <div className='col-span-2 flex flex-col gap-y-2 p-4'>
                          <div className='heading-xl-semibold'>{`Lijst van ${numberOfLaws} instrumenten`}</div>
                          <div className='p-base h-full flex-grow'>{thema?.listText}</div>
                          <div className='p-base-semibold flex w-full items-center justify-end group-hover:text-green-300'>
                            Naar de lijst
                            <IconArrowRight className='ml-0.5 h-5 w-5' />
                          </div>
                        </div>
                      </div>
                    </Link>
                    <Link
                      href={`/${thema?.transitionAgenda}/${thema?.slug?.current}/overheidsbevoegdheid`}
                    >
                      <div className='group grid h-44 w-full grid-cols-3 rounded-cl bg-green-50 hover:cursor-pointer'>
                        <div className='col-span-1 rounded-l-cl bg-green-600'>
                          <div className='flex h-full w-full items-center justify-center p-4'>
                            <Image src={waarvoor} alt='' className='h-3/4 w-3/4' />
                          </div>
                        </div>
                        <div className='col-span-2 flex flex-col gap-y-2 p-4'>
                          <div className='heading-xl-semibold'>{thema?.welkeTitle}</div>
                          <div className='p-base h-full flex-grow'>{thema?.welkeText}</div>
                          <div className='p-base-semibold flex w-full items-center justify-end group-hover:text-green-300'>
                            Bekijk de bevoegdheden
                            <IconArrowRight className='ml-0.5 h-5 w-5' />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>

                  <div className='col-span-1'>
                    <Link href='/training' className='w-full'>
                      <div className='flex h-full w-full cursor-pointer flex-col rounded-cl bg-green-50 p-4 shadow-md'>
                        <Image
                          src={elearning}
                          width={406}
                          height={172}
                          alt='comment image'
                          className='rounded-cl'
                        />
                        <div className='flex h-full w-full flex-col justify-between px-4 pt-4'>
                          <div className='heading-2xl-semibold mb-2'>
                            E-learning Circulaire houtbouw onder de Omgevingswet
                          </div>
                          <div className='p-base mb-4'>
                            Hoe gebruik je de instrumenten van de Omgevingswet om houtbouw te
                            verankeren in beleid? Dat leer je in onze e-learning: ‘Circulaire
                            houtbouw onder de Omgevingswet’.
                          </div>
                          <CustomButton color='greenBackground'>
                            Meer over de e-learning
                            <IconArrowRight
                              className='ml-1 inline-block h-5 w-5 place-self-center'
                              aria-hidden='true'
                            />
                          </CustomButton>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                <ul className='max-w-sm sm:hidden'>
                  <li>
                    <Link href={`/${thema?.transitionAgenda}/${thema?.slug?.current}/categorie`}>
                      <div className='bg-grey-50 mb-6 h-24 w-full rounded-cl shadow'>
                        <div className='flex items-center justify-start'>
                          <div className='relative h-24 w-24 rounded-l-cl bg-green-600 p-1 shadow'>
                            <Image
                              src={samenhang}
                              alt='vector image for categorie page'
                              className='h-full w-full rounded-l-cl'
                            />
                          </div>
                          <div className='text-grey-800 flex max-w-[240px] items-center justify-center px-4'>
                            <div className='heading-xl-semibold'>Instrumenten per categorie</div>
                            <IconArrowRight
                              className='mt-1 block h-8 w-8 text-green-600'
                              aria-hidden='true'
                            />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`/${thema?.transitionAgenda}/${thema?.slug?.current}/instrumenten/`}
                    >
                      <div className='bg-grey-50 my-6 h-24 w-full rounded-cl shadow'>
                        <div className='flex items-center justify-start'>
                          <div className='relative h-24 w-24 rounded-l-cl bg-green-600 p-1 shadow'>
                            <Image
                              src={list}
                              alt='vector image for list page'
                              className='h-full w-full rounded-l-cl'
                            />
                          </div>
                          <div className='text-grey-800 flex max-w-[240px] items-center justify-center px-4'>
                            <div className='heading-xl-semibold'>{`Lijst van ${numberOfLaws} instrumenten`}</div>
                            <IconArrowRight
                              className='block h-8 w-8 text-green-600'
                              aria-hidden='true'
                            />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`/${thema?.transitionAgenda}/${thema?.slug?.current}/overheidsbevoegdheid`}
                    >
                      <div className='bg-grey-50 mt-6 h-24 w-full rounded-cl shadow'>
                        <div className='flex items-center justify-start'>
                          <div className='relative h-24 w-24 rounded-l-cl bg-green-600 p-1 shadow'>
                            <Image
                              src={waarvoor}
                              alt='vector image for waarvoor page'
                              className='h-full w-full rounded-l-cl'
                            />
                          </div>
                          <div className='text-grey-800 flex max-w-[240px] items-center justify-center px-4'>
                            <div className='heading-xl-semibold'>{thema?.welkeTitle}</div>
                            <IconArrowRight
                              className='mt-1 block h-8 w-8 text-green-600'
                              aria-hidden='true'
                            />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </li>
                </ul>
                <Link href='/training' className='w-full sm:hidden'>
                  <div className='mt-6 flex h-auto w-full flex-col gap-4 rounded-cl bg-green-50 p-4 shadow'>
                    <div className='heading-xl-semibold'>
                      E-learning Circulaire houtbouw onder de Omgevingswet
                    </div>
                    <div className='p-base'>
                      Hoe gebruik je de instrumenten van de Omgevingswet om houtbouw te verankeren
                      in beleid? Dat leer je in onze e-learning: ‘Circulaire houtbouw onder de
                      Omgevingswet’.
                    </div>
                    <CustomButton color='greenBackground'>
                      Meer over de e-learning houtbouw
                      <IconArrowRight
                        className='ml-1 inline-block h-5 w-5 place-self-center'
                        aria-hidden='true'
                      />
                    </CustomButton>
                  </div>
                </Link>
              </>
            ) : (
              <>
                <ul
                  className='max-w-8xl relative z-0 hidden grid-cols-2 gap-x-4 gap-y-8 sm:grid sm:gap-x-8 md:grid-cols-2 lg:grid-cols-3'
                  role='list'
                >
                  <Link href={`/${thema?.transitionAgenda}/${thema?.slug?.current}/categorie`}>
                    <li
                      role='listitem'
                      className='flex h-auto min-w-[300px] max-w-[355px] flex-col rounded-cl'
                    >
                      <div className='flex h-48 items-center justify-center rounded-t-cl bg-green-600'>
                        <div className='p-4'>
                          <Image
                            src={samenhang}
                            alt='vector image for categorie page'
                            className='h-full w-full'
                          />
                        </div>
                      </div>

                      <div className='flex h-72 flex-col justify-between rounded-b-cl border border-gray-400 bg-gray-100 p-5'>
                        <div>
                          <div className='heading-2xl-semibold pb-4'>{thema?.samenhangTitle}</div>
                          <div className='p-base'>{thema?.samenhangText}</div>
                        </div>
                        <CustomButton color='whiteBackground'>
                          Bekijk jouw categorie
                          <IconArrowRight
                            className='ml-1 inline-block h-5 w-5 place-self-center'
                            aria-hidden='true'
                          />
                        </CustomButton>
                      </div>
                    </li>
                  </Link>
                  <Link href={`/${thema?.transitionAgenda}/${thema?.slug.current}/instrumenten/`}>
                    <li
                      role='listitem'
                      className='flex h-auto min-w-[300px] max-w-[355px] flex-col rounded-cl'
                    >
                      <div className='flex h-48 items-center justify-center rounded-t-cl bg-green-600'>
                        <div className='p-4'>
                          <Image src={list} alt='' className='h-full w-full' />
                        </div>
                      </div>
                      <div className='flex h-72 flex-col justify-between rounded-b-cl border border-gray-400 bg-gray-100 p-5'>
                        <div>
                          <div className='heading-2xl-semibold pb-4'>{`Lijst van ${numberOfLaws} instrumenten`}</div>
                          <div className='p-base'>{thema?.listText}</div>
                        </div>
                        <CustomButton color='whiteBackground'>
                          Naar de lijst
                          <IconArrowRight
                            className='ml-1 inline-block h-5 w-5 place-self-center'
                            aria-hidden='true'
                          />
                        </CustomButton>
                      </div>{' '}
                    </li>
                  </Link>
                  <Link
                    href={`/${thema?.transitionAgenda}/${thema?.slug?.current}/overheidsbevoegdheid`}
                  >
                    <li
                      role='listitem'
                      className='flex h-auto min-w-[300px] max-w-[355px] flex-col rounded-cl'
                    >
                      <div className='flex h-48 items-center justify-center rounded-t-cl bg-green-600'>
                        <div className='p-4'>
                          {' '}
                          <Image src={waarvoor} alt='' className='h-full w-full' />
                        </div>
                      </div>
                      <div className='flex h-72 flex-col justify-between rounded-b-cl border border-gray-400 bg-gray-100 p-5'>
                        <div>
                          <div className='heading-2xl-semibold pb-4'>{thema?.welkeTitle}</div>
                          <div className='p-base'>{thema?.welkeText}</div>
                        </div>
                        <CustomButton color='whiteBackground'>
                          Bekijk de bevoegdheden
                          <IconArrowRight
                            className='ml-1 inline-block h-5 w-5 place-self-center'
                            aria-hidden='true'
                          />
                        </CustomButton>
                      </div>{' '}
                    </li>
                  </Link>
                </ul>
                {/* Mobile Cards */}
                <ul className='max-w-sm sm:hidden'>
                  <li>
                    <Link href={`/${thema?.transitionAgenda}/${thema?.slug?.current}/categorie`}>
                      <div className='mb-6 h-24 w-full rounded-cl bg-gray-50 shadow'>
                        <div className='flex items-center justify-start'>
                          <div className='relative h-24 w-24 rounded-l-cl bg-green-600 p-1 shadow'>
                            <Image
                              src={samenhang}
                              alt='vector image for categorie page'
                              className='h-full w-full rounded-l-cl'
                            />
                          </div>
                          <div className='flex max-w-[240px] items-center justify-center px-4 text-gray-800'>
                            <div className='heading-xl-semibold'>Instrumenten per categorie</div>
                            <IconArrowRight
                              className='mt-1 block h-8 w-8 text-green-600'
                              aria-hidden='true'
                            />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`/${thema?.transitionAgenda}/${thema?.slug?.current}/instrumenten/`}
                    >
                      <div className='my-6 h-24 w-full rounded-cl bg-gray-50 shadow'>
                        <div className='flex items-center justify-start'>
                          <div className='relative h-24 w-24 rounded-l-cl bg-green-600 p-1 shadow'>
                            <Image
                              src={list}
                              alt='vector image for list page'
                              className='h-full w-full rounded-l-cl'
                            />
                          </div>
                          <div className='flex max-w-[240px] items-center justify-center px-4 text-gray-800'>
                            <div className='heading-xl-semibold'>{`Lijst van ${numberOfLaws} instrumenten`}</div>
                            <IconArrowRight
                              className='block h-8 w-8 text-green-600'
                              aria-hidden='true'
                            />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`/${thema?.transitionAgenda}/${thema?.slug?.current}/overheidsbevoegdheid`}
                    >
                      <div className='mt-6 h-24 w-full rounded-cl bg-gray-50 shadow'>
                        <div className='flex items-center justify-start'>
                          <div className='relative h-24 w-24 rounded-l-cl bg-green-600 p-1 shadow'>
                            <Image
                              src={waarvoor}
                              alt='vector image for waarvoor page'
                              className='h-full w-full rounded-l-cl'
                            />
                          </div>
                          <div className='flex max-w-[240px] items-center justify-center px-4 text-gray-800'>
                            <div className='heading-xl-semibold'>{thema?.welkeTitle}</div>
                            <IconArrowRight
                              className='mt-1 block h-8 w-8 text-green-600'
                              aria-hidden='true'
                            />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </li>
                </ul>
              </>
            )}
          </div>

          <div className='bg-gray-200'>
            <ThemeBottomSection featuredLaws={featuredLaws} thema={thema} />
          </div>
          {thema?.reports && (
            <div className='global-margin'>
              <ul className='my-10 grid grid-cols-1 gap-x-6 sm:grid-cols-3'>
                {thema?.reports.map((report) => {
                  // eslint-disable-next-line
                  const [_file, id, extension] = report?.asset?._ref.split('-');
                  return (
                    <li className='my-6 flex flex-col gap-y-4 sm:my-0' key={report.reportTitle}>
                      <h4 className='heading-2xl-semibold'>{report.reportTitle}</h4>
                      <p className='p-base'>{report.reportDescription}</p>
                      <Link
                        href={`https://cdn.sanity.io/files/${
                          process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '2vfoxb3h'
                        }/${
                          process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
                        }/${id}.${extension}`}
                        className='heading-xl-semibold flex items-center text-green-500 hover:text-green-300 focus:text-green-200 focus:ring-2 focus:ring-white active:text-green-800'
                        target='_blank'
                      >
                        {report.linkText}
                        <IconArrowRight className='ml-0.5 h-5 w-5' />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
          {thema?.themeSponsors?.length > 0 && (
            <ThemeSponsors sponsors={thema?.themeSponsors} thema={thema?.themaName} />
          )}
        </div>
      </div>
    </>
  );
}

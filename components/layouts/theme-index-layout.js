import Image from 'next/image';
import Link from 'next/link';
import { DiscussionEmbed } from 'disqus-react';
import { ArrowRightIcon, ArrowDownIcon } from '@heroicons/react/outline';
import ThemePageHeader from '../theme-page/theme-page-header';
import ThemePageHeaderMobile from '../theme-page/theme-page-header-mobile';
import CustomButton from '@/components/custom-button';
import ThemeBottomSection from '@/components/theme-page/section-bottom-theme-index';
import list from '@/public/thema-card-background/list.svg';
import samenhang from '@/public/thema-card-background/samenhang.svg';
import waarvoor from '@/public/thema-card-background/waarvoor.svg';
import commentIcon from '@/public/comment-icon.svg';
import comments from '@/public/comments.png';
import { Link as ScrollLink } from 'react-scroll';

export default function ThemeLayout({ featuredLaws, thema, numberOfLaws }) {
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
            <div className='pt-20 pb-14'>
              <h2 className='heading-2xl-semibold sm:heading-3xl-semibold'>
                {thema?.overviewsTitle}
              </h2>
            </div>

            {/* Desktop Cards */}
            {thema?.themaName === 'Houtbouw' || thema?.themaName === 'Voedselverspilling' ? (
              <>
                <div className='grid-cols-3 md:gap-x-8 lg:gap-x-16 hidden sm:grid text-green-800'>
                  <div className='col-span-2 grid grid-col gap-y-4'>
                    <Link href={`/${thema?.transitionAgenda}/${thema?.slug?.current}/categorie`}>
                      <div className='w-full bg-green-50 h-44 rounded-cl grid grid-cols-3 group hover:cursor-pointer'>
                        <div className='col-span-1 bg-green-600 rounded-l-cl'>
                          <div className='p-4 flex items-center justify-center h-full w-full'>
                            <Image src={samenhang} alt='' className='h-3/4 w-3/4' />
                          </div>
                        </div>
                        <div className='col-span-2 p-4 flex flex-col gap-y-2'>
                          <div className='heading-xl-semibold'>{thema?.samenhangTitle}</div>
                          <div className='p-base flex-grow h-full'>{thema?.samenhangText}</div>
                          <div className='p-base-semibold w-full flex items-center justify-end group-hover:text-green-300'>
                            Bekijk jouw categorie {'>'}
                          </div>
                        </div>
                      </div>
                    </Link>
                    <Link href={`/${thema?.transitionAgenda}/${thema?.slug.current}/instrumenten/`}>
                      <div className='w-full bg-green-50 h-44 rounded-cl grid grid-cols-3 group hover:cursor-pointer'>
                        <div className='col-span-1 bg-green-600 rounded-l-cl'>
                          <div className='p-4 flex items-center justify-center h-full w-full'>
                            <Image src={list} alt='' className='h-3/4 w-3/4' />
                          </div>
                        </div>
                        <div className='col-span-2 p-4 flex flex-col gap-y-2'>
                          <div className='heading-xl-semibold'>{`Lijst van ${numberOfLaws} instrumenten`}</div>
                          <div className='p-base flex-grow h-full'>{thema?.listText}</div>
                          <div className='p-base-semibold w-full flex items-center justify-end group-hover:text-green-300'>
                            Naar de lijst {'>'}
                          </div>
                        </div>
                      </div>
                    </Link>
                    <Link
                      href={`/${thema?.transitionAgenda}/${thema?.slug?.current}/overheidsbevoegdheid`}
                    >
                      <div className='w-full bg-green-50 h-44 rounded-cl grid grid-cols-3 group hover:cursor-pointer'>
                        <div className='col-span-1 bg-green-600 rounded-l-cl'>
                          <div className='p-4 flex items-center justify-center h-full w-full'>
                            <Image src={waarvoor} alt='' className='h-3/4 w-3/4' />
                          </div>
                        </div>
                        <div className='col-span-2 p-4 flex flex-col gap-y-2'>
                          <div className='heading-xl-semibold'>{thema?.welkeTitle}</div>
                          <div className='p-base flex-grow h-full'>{thema?.welkeText}</div>
                          <div className='p-base-semibold w-full flex items-center justify-end group-hover:text-green-300'>
                            Bekijk de bevoegdheden {'>'}
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>

                  <div className='col-span-1'>
                    <ScrollLink to='comments' smooth={true} offset={-120} className='w-full'>
                      <div className='w-full h-full shadow-md rounded-cl bg-green-50 flex flex-col p-4 cursor-pointer'>
                        <Image
                          src={comments}
                          width={406}
                          height={172}
                          alt='comment image'
                          className=''
                        />
                        <div className='flex flex-col h-full w-full sm:p-4 md:p-6 lg:p-8 justify-between'>
                          <div className='heading-2xl-semibold'>Laat je horen!</div>
                          <div className='p-base'>
                            Begin een discussie, deel je ervaringen, stel je vragen. Help zo jezelf
                            en anderen verder.
                            {/* 

                            Er zijn al{' '}
                            <CommentCount
                              shortname='circulaw'
                              config={{
                                identifier: thema?.slug.current,
                                title: thema?.slug.current,
                              }}
                            />{' '}
                            gesprekken gaande. Discussieer mee, deel jouw ervaringen, stel je
                            vragen. Help zo jezelf en anderen verder.*/}
                          </div>

                          <CustomButton color='greenBackground'>
                            Start de discussie
                            <ArrowDownIcon
                              className='inline-block h-4 w-4 ml-1 place-self-center'
                              aria-hidden='true'
                            />
                          </CustomButton>
                        </div>
                      </div>
                    </ScrollLink>
                  </div>
                </div>

                <ul className='sm:hidden max-w-sm'>
                  <li>
                    <Link href={`/${thema?.transitionAgenda}/${thema?.slug?.current}/categorie`}>
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
                            <div className='heading-xl-semibold'>Instrumenten per categorie</div>
                            <ArrowDownIcon
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
                      href={`/${thema?.transitionAgenda}/${thema?.slug?.current}/instrumenten/`}
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
                            <div className='heading-xl-semibold'>{`Lijst van ${numberOfLaws} instrumenten`}</div>
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
                      href={`/${thema?.transitionAgenda}/${thema?.slug?.current}/overheidsbevoegdheid`}
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
                            <div className='heading-xl-semibold'>{thema?.welkeTitle}</div>
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
                <ScrollLink to='comments' smooth={true} offset={-120} className='w-full sm:hidden'>
                  <div className='mt-6 w-full rounded-cl bg-green-50 h-auto p-4 flex flex-col shadow gap-4'>
                    <div className='heading-xl-semibold'>Laat je horen!</div>
                    <div className='p-base'>
                      Begin een discussie, deel je ervaringen, stel je vragen. Help zo jezelf en
                      anderen verder.
                      {/* 
                      Er zijn al{' '}
                      <CommentCount
                        shortname='circulaw'
                        config={{
                          identifier: thema?.slug.current,
                          title: thema?.slug.current,
                        }}
                      />{' '}
                      gesprekken gaande. Discussieer mee, deel jouw ervaringen, stel je vragen. Help
                      zo jezelf en anderen verder.*/}
                    </div>
                    <CustomButton color='greenBackground'>
                      Start de discussie
                      <ArrowRightIcon
                        className='inline-block h-4 w-4 ml-1 place-self-center'
                        aria-hidden='true'
                      />
                    </CustomButton>
                  </div>
                </ScrollLink>
              </>
            ) : (
              <>
                <ul
                  className='hidden sm:grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3 sm:gap-x-8 max-w-8xl relative z-0'
                  role='list'
                >
                  <Link href={`/${thema?.transitionAgenda}/${thema?.slug?.current}/categorie`}>
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

                      <div className='border border-gray-400 bg-gray-100 rounded-b-cl h-72 flex flex-col justify-between p-5'>
                        <div>
                          <div className='heading-2xl-semibold pb-4'>{thema?.samenhangTitle}</div>
                          <div className='p-base'>{thema?.samenhangText}</div>
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
                  <Link href={`/${thema?.transitionAgenda}/${thema?.slug.current}/instrumenten/`}>
                    <li
                      role='listitem'
                      className='h-auto rounded-cl flex flex-col max-w-[355px] min-w-[300px]'
                    >
                      <div className='bg-green-600 rounded-t-cl h-48 flex items-center justify-center'>
                        <div className='p-4'>
                          <Image src={list} alt='' className='h-full w-full' />
                        </div>
                      </div>
                      <div className='border border-gray-400 bg-gray-100 rounded-b-cl h-72 flex flex-col justify-between p-5'>
                        <div>
                          <div className='heading-2xl-semibold pb-4'>{`Lijst van ${numberOfLaws} instrumenten`}</div>
                          <div className='p-base'>{thema?.listText}</div>
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
                    href={`/${thema?.transitionAgenda}/${thema?.slug?.current}/overheidsbevoegdheid`}
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
                      <div className='border border-gray-400 bg-gray-100 rounded-b-cl h-72 flex flex-col justify-between p-5'>
                        <div>
                          <div className='heading-2xl-semibold pb-4'>{thema?.welkeTitle}</div>
                          <div className='p-base'>{thema?.welkeText}</div>
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
                    <Link href={`/${thema?.transitionAgenda}/${thema?.slug?.current}/categorie`}>
                      <div className='h-24 w-full rounded-cl bg-gray-50 shadow mb-6'>
                        <div className='flex items-center justify-start'>
                          <div className='h-24 w-24 relative bg-green-600 p-1 rounded-l-cl shadow'>
                            <Image
                              src={samenhang}
                              alt='vector image for categorie page'
                              className='w-full h-full rounded-l-cl'
                            />
                          </div>
                          <div className='text-gray-800 px-4 flex items-center justify-center max-w-[240px]'>
                            <div className='heading-xl-semibold'>Instrumenten per categorie</div>
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
                      href={`/${thema?.transitionAgenda}/${thema?.slug?.current}/instrumenten/`}
                    >
                      <div className='h-24 w-full rounded-cl bg-gray-50 shadow my-6'>
                        <div className='flex items-center justify-start'>
                          <div className='h-24 w-24 relative bg-green-600 p-1 rounded-l-cl shadow'>
                            <Image
                              src={list}
                              alt='vector image for list page'
                              className='w-full h-full rounded-l-cl'
                            />
                          </div>
                          <div className='text-gray-800 px-4 flex items-center justify-center max-w-[240px]'>
                            <div className='heading-xl-semibold'>{`Lijst van ${numberOfLaws} instrumenten`}</div>
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
                      href={`/${thema?.transitionAgenda}/${thema?.slug?.current}/overheidsbevoegdheid`}
                    >
                      <div className='h-24 w-full rounded-cl bg-gray-50 shadow mt-6'>
                        <div className='flex items-center justify-start'>
                          <div className='h-24 w-24 relative bg-green-600 p-1 rounded-l-cl shadow'>
                            <Image
                              src={waarvoor}
                              alt='vector image for waarvoor page'
                              className='w-full h-full rounded-l-cl'
                            />
                          </div>
                          <div className='text-gray-800 px-4 flex items-center justify-center max-w-[240px]'>
                            <div className='heading-xl-semibold'>{thema?.welkeTitle}</div>
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
              </>
            )}
          </div>

          <div className='bg-gray-200'>
            <ThemeBottomSection featuredLaws={featuredLaws} thema={thema} />
          </div>
          {thema.reports && (
            <div className='global-margin'>
              <ul className='grid grid-cols-1  sm:grid-cols-3 gap-x-6 my-10'>
                {thema?.reports.map((report) => {
                  // eslint-disable-next-line
                  const [_file, id, extension] = report?.asset?._ref.split('-');
                  return (
                    <li className='flex flex-col gap-y-4 my-6 sm:my-0' key={report.reportTitle}>
                      <h4 className='heading-2xl-semibold'>{report.reportTitle}</h4>
                      <p className='p-base'>{report.reportDescription}</p>
                      <Link
                        href={`https://cdn.sanity.io/files/${
                          process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '2vfoxb3h'
                        }/${
                          process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
                        }/${id}.${extension}`}
                        className='p-base-bold text-green-500 hover:text-green-300 active:text-green-800 focus:text-green-200 focus:ring-2 focus:ring-white'
                        target='_blank'
                      >
                        Lees moor {'>'}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}

          {(thema?.themaName === 'Houtbouw' || thema?.themaName === 'Voedselverspilling') && (
            <div className='global-margin my-32 text-center' id='comments'>
              <div className='flex justify-center items-center'>
                <Image src={commentIcon} alt='' />
                <h3 className='heading-xl-semibold sm:heading-2xl-semibold pl-2'>
                  Kaart een nieuw onderwerp aan of discussieer mee
                </h3>
              </div>
              <DiscussionEmbed
                shortname='circulaw'
                config={{
                  identifier: thema?.slug.current,
                  title: thema?.slug.current,
                }}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

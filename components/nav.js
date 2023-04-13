import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/dist/client/router';
import { Fragment } from 'react';
import { Popover, Disclosure, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { ChevronDownIcon } from '@heroicons/react/solid';
import Lottie from 'react-lottie';
import CirculawLogo from '../public/Circulaw_logotype.png';
import logo from '../public/Circulaw_logotype_home.png';

import BetaBanner from './beta-banner';
import NieuwTooltip from '../components/nieuw-tooltip';
import animationData from '../public/CL_Home_Logo_Loop';
import HomepageHeader from '../components/homepage-header';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

export default function Nav(props) {
  let themaSlugs = [];
  if (props.themaSlugs) {
    themaSlugs = props.themaSlugs;
  }

  let aboutSlugs = [];
  if (props.aboutSlugs) {
    aboutSlugs = props.aboutSlugs;
  }

  let FAQslug = [];
  if (props.vraagSlug) {
    FAQslug = props.vraagSlug;
  }
  const router = useRouter();
  if (router.pathname === '/en') {
    return (
      <>
        <div className='w-full bg-green-800'>
          <div className='flex justify-between global-margin '>
            <div className=' flex justify-start items-center'>
              <div className='hidden lgNav:block -ml-6'>
                <Link href='/'>
                  <Lottie options={defaultOptions} height={86} width={162} />
                </Link>
              </div>
              <div className='block lgNav:hidden -ml-6'>
                <Link href='/'>
                  <Lottie options={defaultOptions} height={86} width={162} />
                </Link>
              </div>
            </div>
            <div className='text-black-white-200 flex justify-center items-center min-w-[10%] pt-2 pr-4'>
              <span
                className={`hover:underline ${
                  router.pathname === '/en' ? 'enLink' : 'enLinkSelected'
                }`}
              >
                <Link href='/'>NL</Link>
              </span>
              <span className='px-1 enLink'>|</span>
              <span
                className={`hover:underline ${
                  router.pathname === '/en' ? 'enLinkSelected' : 'enLink'
                }`}
              >
                <Link href='/en'>EN</Link>
              </span>
            </div>
          </div>
        </div>
      </>
    );
  }
  return (
    <div className={`${router.pathname === '/' ? 'bg-header' : ''}`}>
      <div className={`${router.pathname === '/' ? 'pb-16 lgNav:pb-24' : ''}`}>
        <Disclosure
          as='nav'
          className={`${
            router.pathname !== '/' ? 'sticky top-0 z-40 bg-black-white-200 shadow-lg' : ''
          }`}
        >
          {({ open }) => (
            <>
              <div className='lgNav:pb-4 global-margin'>
                <BetaBanner type={`${router.pathname !== '/' ? 'gen' : 'home'}`} />
                <div className=''>
                  <div className='inset-y-0 float-right flex items-center lgNav:hidden'>
                    {/* Mobile menu button */}
                    <Disclosure.Button
                      className={`${
                        router.pathname !== '/' ? 'text-green-600' : 'text-black-white-200'
                      } 'p-2 rounded-md`}
                    >
                      <span className='sr-only'>Open main menu</span>
                      {open ? (
                        <XIcon className='block h-10 w-10 mt-7' aria-hidden='true' />
                      ) : (
                        <MenuIcon className='block h-10 w-10 mt-7' aria-hidden='true' />
                      )}
                    </Disclosure.Button>
                  </div>
                  <div
                    className={`${
                      router.pathname !== '/' ? 'justify-between' : ''
                    } flex items-center`}
                  >
                    {router.pathname === '/' && (
                      <>
                        <div className='hidden lgNav:block md:py-5 lgNav:py-0'>
                          <Link href='/'>
                            <Lottie options={defaultOptions} height={150} width={250} />
                          </Link>
                        </div>
                        <div className='block lgNav:hidden py-4 '>
                          <Link href='/'>
                            <Image
                              height={24}
                              width={120}
                              src={logo}
                              alt='CircuLaw logo'
                              quality={100}
                            />
                          </Link>
                        </div>
                      </>
                    )}
                    {router.pathname !== '/' && (
                      <>
                        <div className='hidden lgNav:block '>
                          <Link href='/'>
                            <Image
                              height={86}
                              width={162}
                              src={CirculawLogo}
                              alt='CircuLaw logo'
                              quality={100}
                            />
                          </Link>
                        </div>
                        <div className='block lgNav:hidden py-4 '>
                          <Link href='/'>
                            <Image
                              height={24}
                              width={120}
                              src={CirculawLogo}
                              alt='CircuLaw logo'
                              quality={100}
                            />
                          </Link>
                        </div>
                      </>
                    )}
                    <div className='hidden lgNav:ml-10 xl:ml-32 lgNav:flex lgNav:mt-6'>
                      <div className='flex inset-x-0 top-0 pl-5 invisible lgNav:visible hidden lgNav:inline '>
                        <div
                          className={`${
                            router.pathname === '/' ? 'px-2 sm:px-6 lgNav:px-8' : ''
                          } flex-1 global-margin`}
                        >
                          <div className='content right-0'>
                            <div className='relative flex items-center justify-between'>
                              <div className=''>
                                <Popover className='inline-block relative '>
                                  {({ open }) => (
                                    <>
                                      <Popover.Button
                                        className={`${
                                          router.pathname !== '/'
                                            ? 'text-black-white-800'
                                            : 'text-white'
                                        } group rounded-md inline-flex items-center`}
                                      >
                                        <h5 className='uppercase mobile sm:desktop'>
                                          Thema&apos;s
                                        </h5>
                                        <ChevronDownIcon
                                          className={`${
                                            router.pathname !== '/'
                                              ? 'text-gray-400 group-hover:text-gray-500'
                                              : 'text-white'
                                          } ml-2 h-5 w-5 first-letter
                                        ${
                                          open && router.pathname !== '/'
                                            ? 'text-gray-500'
                                            : 'text-gray-400'
                                        }
                                        `}
                                          aria-hidden='true'
                                        />
                                      </Popover.Button>
                                      <Transition
                                        as={Fragment}
                                        enter='transition ease-out duration-200'
                                        enterFrom='opacity-0 translate-y-1'
                                        enterTo='opacity-100 translate-y-0'
                                        leave='transition ease-in duration-150'
                                        leaveFrom='opacity-100 translate-y-0'
                                        leaveTo='opacity-0 translate-y-1'
                                      >
                                        <Popover.Panel className='absolute z-10  transform w-screen max-w-xs sm:px-0'>
                                          <div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden'>
                                            <div className='relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8'>
                                              {themaSlugs.map((slug) => (
                                                <a
                                                  key={slug}
                                                  href={`/${encodeURIComponent(slug)}`}
                                                  className='-m-3 p-3 block rounded-md hover:bg-gray-50 transition ease-in-out duration-150 border-b uppercase'
                                                >
                                                  <h6 className='popup-base text-gray-900'>
                                                    {slug.replaceAll('-', ' ')}
                                                  </h6>
                                                </a>
                                              ))}
                                            </div>
                                          </div>
                                        </Popover.Panel>
                                      </Transition>
                                    </>
                                  )}
                                </Popover>
                                <Popover className='inline-block relative '>
                                  {({ open }) => (
                                    <>
                                      <Popover.Button
                                        className={`${
                                          router.pathname !== '/'
                                            ? 'text-black-white-800'
                                            : 'text-black-white-200'
                                        } group rounded-md inline-flex items-center`}
                                      >
                                        <h5 className='uppercase pl-8 mobile sm:desktop'>
                                          OVER CIRCULAW
                                        </h5>
                                        <ChevronDownIcon
                                          className={`${
                                            router.pathname !== '/'
                                              ? 'text-gray-400 group-hover:text-gray-500'
                                              : 'text-white'
                                          } ml-2 h-5 w-5 first-letter
                                        ${
                                          open && router.pathname !== '/'
                                            ? 'text-gray-500'
                                            : 'text-gray-400'
                                        }
                                        `}
                                          aria-hidden='true'
                                        />
                                      </Popover.Button>

                                      <Transition
                                        as={Fragment}
                                        enter='transition ease-out duration-200'
                                        enterFrom='opacity-0 translate-y-1'
                                        enterTo='opacity-100 translate-y-0'
                                        leave='transition ease-in duration-150'
                                        leaveFrom='opacity-100 translate-y-0'
                                        leaveTo='opacity-0 translate-y-1'
                                      >
                                        <Popover.Panel className='absolute z-10  transform w-screen max-w-xs sm:px-0'>
                                          <div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden'>
                                            <div className='relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8'>
                                              {aboutSlugs?.map((slug) => (
                                                <Link
                                                  key={slug.slug}
                                                  href={`/about/${encodeURIComponent(slug.slug)}`}
                                                  className='-m-3 p-3  block rounded-md hover:bg-gray-50 transition ease-in-out duration-150 uppercase border-b'
                                                >
                                                  <h6 className='` popup-base text-black-white-800'>
                                                    {slug.title.replaceAll('-', ' ')}
                                                  </h6>
                                                </Link>
                                              ))}
                                            </div>
                                          </div>
                                        </Popover.Panel>
                                      </Transition>
                                    </>
                                  )}
                                </Popover>
                                <div className='inline-block relative'>
                                  <Link href={`/${encodeURIComponent(FAQslug)}`}>
                                    <h5
                                      className={`${
                                        router.pathname !== '/'
                                          ? 'text-black-white-800'
                                          : 'text-black-white-200'
                                      } uppercase pl-8  group rounded-md inline-flex items-center mobile sm:desktop mobile sm:desktop`}
                                    >
                                      VRAAG & ANTWOORD
                                    </h5>
                                  </Link>
                                </div>
                                <div className='inline-block relative '>
                                  <Link href='/contact'>
                                    <h5
                                      className={`${
                                        router.pathname !== '/'
                                          ? 'text-black-white-800'
                                          : 'text-black-white-200'
                                      } uppercase pl-8  group rounded-md inline-flex items-center mobile sm:desktop mobile sm:desktop`}
                                    >
                                      CONTACT
                                    </h5>
                                  </Link>
                                </div>
                                <div className='inline-block relative ml-8'>
                                  <NieuwTooltip />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className='lgNav:hidden bg-black-white-200'>
                <div className='pt-2 pb-4 ml-5'>
                  <Disclosure.Button
                    as='span'
                    className='flex justify-end items-center pr-8 sm:hidden'
                  >
                    <span
                      className={`hover:underline ${
                        router.pathname === '/en' ? '' : 'font-semibold'
                      }`}
                    >
                      <Link href='/'>NL&nbsp;</Link>
                    </span>
                    <span className='px-1 enLink'>|</span>
                    <span
                      className={`hover:underline ${
                        router.pathname === '/en' ? 'font-semibold' : ''
                      }`}
                    >
                      <Link href='/en'>&nbsp;EN</Link>
                    </span>
                  </Disclosure.Button>
                  <Disclosure.Button
                    as='span'
                    className='uppercase text-black-white-800  block pl-3 pr-4 py-4'
                  >
                    Thema&apos;s
                  </Disclosure.Button>
                  {themaSlugs.map((slug) => (
                    <div key={slug.name}>
                      <Disclosure.Button
                        as='span'
                        className='border-transparent table-base text-green-600 pl-8 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-4 first-letter:uppercase'
                      >
                        <Link href={`/${encodeURIComponent(slug)}`}>
                          {slug.replaceAll('-', ' ')}
                        </Link>
                      </Disclosure.Button>
                    </div>
                  ))}
                  <hr className='my-4 mx-2 border-green-600' />
                  <Disclosure.Button
                    as='span'
                    className='uppercase text-black-white-800 block pl-3 pr-4 py-4'
                  >
                    Over CircuLaw
                  </Disclosure.Button>
                  {aboutSlugs?.map((slug) => (
                    <Disclosure.Button
                      as='a'
                      key={slug.slug}
                      onClick={() => {
                        router.push(`/about/${encodeURIComponent(slug.slug)}`);
                      }}
                      className='cursor-pointer border-transparent table-base text-green-600 pl-8 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-4 first-letter:uppercase'
                    >
                      {slug.title.replaceAll('-', ' ')}
                    </Disclosure.Button>
                  ))}
                  <hr className='my-4 mx-2 border-green-600' />
                  <Disclosure.Button
                    as='a'
                    onClick={() => {
                      router.push(`/${encodeURIComponent(FAQslug)}`);
                    }}
                    className='cursor-pointer uppercase text-black-white-800  block pl-3 pr-2 py-4'
                  >
                    Vraag en Antwoord
                  </Disclosure.Button>
                  <hr className='my-4 mx-2 border-green-600' />
                  <Disclosure.Button
                    as='span'
                    className='uppercase text-black-white-800 block pl-3 pr-4 py-4'
                  >
                    <Link href='/contact'>Contact</Link>
                  </Disclosure.Button>
                  <hr className='my-4 mx-2 border-green-600' />
                  <div className='block pl-3 pr-4 py-4'>
                    <NieuwTooltip />
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        {router.pathname === '/' && <HomepageHeader />}
      </div>
    </div>
  );
}

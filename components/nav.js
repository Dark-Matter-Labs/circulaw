import Link from 'next/link';
import { useState, useEffect, Fragment } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import Image from 'next/image';
import { useRouter } from 'next/dist/client/router';
import { Popover, Disclosure, Transition } from '@headlessui/react';
import { MenuIcon, XIcon, ArrowDownIcon } from '@heroicons/react/outline';
import { ChevronDownIcon } from '@heroicons/react/solid';
import Lottie from 'react-lottie';
import CirculawLogo from '../public/Circulaw_logotype.png';
import logo from '../public/Circulaw_logotype_home.png';

import BetaBanner from './beta-banner';
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
  // function to change styles when the user scrolls
  const [scrollEffect, setScrollEffect] = useState(false);
  useEffect(() => {
    const changeEffect = () => {
      if (window.scrollY >= 50) {
        setScrollEffect(true);
      } else {
        setScrollEffect(false);
      }
    };
    window.addEventListener('scroll', changeEffect);
  }, []);

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
              <div className='hidden sm:block -ml-6'>
                <Link href='/'>
                  <Lottie options={defaultOptions} height={150} width={250} />
                </Link>
              </div>
              <div className='block sm:hidden -ml-6'>
                <Link href='/'>
                  <Lottie options={defaultOptions} height={86} width={162} />
                </Link>
              </div>
            </div>
            <div className='text-black-white-200 flex justify-center items-center min-w-[10%] pt-2 pr-4'>
              <span
                className={`link-interaction-dark-bg ${
                  router.pathname === '/en' ? 'enLink' : 'enLinkSelected'
                }`}
              >
                <Link href='/'>NL</Link>
              </span>
              <span className='px-1 enLink'>|</span>
              <span
                className={`link-interaction-dark-bg ${
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
    <>
      <div
        className={`${
          scrollEffect && router.pathname === '/'
            ? 'bg-green-600 shadow-lg transition-colors duration-300'
            : `${router.pathname === '/' ? 'bg-transparent' : ''}  transition-colors duration-300`
        } ${
          router.pathname !== '/' ? 'bg-black-white-200 shadow-lg' : ''
        } w-full h-24 sticky top-0 z-10`}
      >
        <div className='global-margin'>
          <div className='flex items-center justify-center'>
            <BetaBanner scrollEffect={scrollEffect} />
          </div>

          <div className='flex items-center -mt-8'>
            <Disclosure as='nav'>
              {({ open }) => (
                <>
                  <div className='global-margin'>
                    {/* Mobile menu button */}
                    <div className='inset-y-0 float-right flex items-center lgNav:hidden'>
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
                          {/* LOGO DESKTOP HP */}
                          <div className='hidden lgNav:block'>
                            <Link href='/'>
                              <Lottie options={defaultOptions} height={110} width={183} />
                            </Link>
                          </div>
                          {/* LOGO MOBILE HP */}
                          <div className='block lgNav:hidden'>
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

                      {/* LOGO ALL OTHER PAGES */}
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
                                                  <a
                                                    key={slug.slug}
                                                    href={`/about/${encodeURIComponent(slug.slug)}`}
                                                    className='-m-3 p-3  block rounded-md hover:bg-gray-50 transition ease-in-out duration-150 uppercase border-b'
                                                  >
                                                    <h6 className='` popup-base text-black-white-800'>
                                                      {slug.title.replaceAll('-', ' ')}
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
                                  {router.pathname == '/' && (
                                    <div className='inline-block relative ml-8'>
                                      <ScrollLink to='news' smooth={true}>
                                        <button className='inline-flex items-center px-4 py-0.5 button bg-black-white-200 hover:bg-green-200 text-green-600 shadow-md active:bg-green-300 focus:outline-none focus:bg-green-100 focus:ring-2 focus:ring-white rounded-full'>
                                          Nieuw
                                          <ArrowDownIcon
                                            className='inline h-4 w-4 ml-1'
                                            aria-hidden='true'
                                          />
                                        </button>
                                      </ScrollLink>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </Disclosure>
          </div>
        </div>
      </div>
      {router.pathname === '/' && (
        <div className='-mt-24'>
          <HomepageHeader homePageHeader={props.homePageHeader} />
        </div>
      )}
    </>
  );
}

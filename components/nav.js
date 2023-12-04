import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Lottie from 'react-lottie';
import CirculawLogo from '@/public/Circulaw_logotype.png';
import logo from '@/public/Circulaw_logotype_home.png';
import {
  useFloating,
  offset,
  flip,
  shift,
  useClick,
  useDismiss,
  useRole,
  useInteractions,
  FloatingFocusManager,
  useTransitionStyles,
  FloatingOverlay,
} from '@floating-ui/react';

import BetaBanner from '@/components/beta-banner';
import animationData from '@/public/CL_Home_Logo_Loop';
import HomepageHeader from '@/components/homepage-header';
import { ChevronDownIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import { Disclosure, Transition } from '@headlessui/react';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

export default function Nav3(props) {
  const router = useRouter();

  // main menu
  const [mainMenuIsOpen, setMainMenuIsOpen] = useState(false);
  const {
    refs: mainMenuRef,
    floatingStyles: mainMenuStyles,
    context: mainMenuContext,
  } = useFloating({
    placement: 'bottom',
    open: mainMenuIsOpen,
    onOpenChange: setMainMenuIsOpen,
    middleware: [offset(28), flip(), shift()],
  });

  const { isMounted: mainMenuIsMounted, styles: mainMenuTransitionStyles } = useTransitionStyles(
    mainMenuContext,
    {
      duration: 300,
      initial: {
        opacity: 0,
        transform: 'translateY(-100%)',
      },
      open: {
        opacity: 100,
        transform: 'translateY(0)',
      },
      close: {
        opacity: 0,
        transform: 'translateY(-100%)',
      },
    },
  );

  const mainMenuClick = useClick(mainMenuContext);
  const mainMenuDismiss = useDismiss(mainMenuContext);
  const mainMenuRole = useRole(mainMenuContext);

  const { getReferenceProps: mainMenuReferencProps, getFloatingProps: mainMenuFloatingProps } =
    useInteractions([mainMenuClick, mainMenuDismiss, mainMenuRole]);

  // over menu
  const [overMenuIsOpen, setOverMenuIsOpen] = useState(false);
  const {
    refs: overRef,
    floatingStyles: overStyles,
    context: overContext,
  } = useFloating({
    placement: 'bottom-start',
    open: overMenuIsOpen,
    onOpenChange: setOverMenuIsOpen,
    middleware: [offset(28), flip(), shift()],
  });

  const { isMounted: overMenuIsMounted, styles: overMenuTransitionStyles } = useTransitionStyles(
    overContext,
    {
      duration: 300,
      initial: {
        opacity: 0,
        transform: 'translateY(-100%)',
      },
      open: {
        opacity: 100,
        transform: 'translateY(0)',
      },
      close: {
        opacity: 0,
        transform: 'translateY(-100%)',
      },
    },
  );

  const overMenuClick = useClick(overContext);
  const overMenuDismiss = useDismiss(overContext);
  const overMenuRole = useRole(overContext);

  const { getReferenceProps: overReferenceProps, getFloatingProps: overFloatingProps } =
    useInteractions([overMenuClick, overMenuDismiss, overMenuRole]);

  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  const {
    refs: mobileRef,
    floatingStyles: mobileFloatingStyles,
    context: mobileContext,
  } = useFloating({
    placement: 'bottom-start',
    open: mobileMenuIsOpen,
    onOpenChange: setMobileMenuIsOpen,
    middleware: [offset(10), flip(), shift()],
  });

  const mobileMenuClick = useClick(mobileContext);
  const mobileMenuDismiss = useDismiss(mobileContext, { outsidePressEvent: 'mousedown' });
  const mobileMenuRole = useRole(mobileContext);

  const { getReferenceProps: mobileRefProps, getFloatingProps: mobileFloatingProps } =
    useInteractions([mobileMenuClick, mobileMenuDismiss, mobileMenuRole]);

  const { isMounted: mobileMenuIsMounted, styles: mobileMenuTransitionStyles } =
    useTransitionStyles(mobileContext, {
      duration: 150,
      initial: {
        opacity: 0,
      },
      open: {
        opacity: 100,
      },
      close: {
        opacity: 0,
      },
    });

  if (router.pathname === '/en') {
    return (
      <>
        <div className='w-full bg-green-800 sticky top-0 z-40 shadow-lg'>
          <div className='flex justify-between global-margin'>
            <div className=' flex justify-start items-center'>
              <div className='hidden sm:block -ml-6'>
                <Link href='/'>
                  <Lottie options={defaultOptions} height={110} width={183} />
                </Link>
              </div>
              <div className='block sm:hidden -ml-6'>
                <Link href='/'>
                  <Lottie options={defaultOptions} height={86} width={162} />
                </Link>
              </div>
            </div>
            <div className='text-grey-100 flex justify-center items-center min-w-[10%] pt-2 pr-4'>
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
      <div className='flex w-96 justify-center mx-auto -mb-9 relative z-110' name='top'>
        <BetaBanner />
      </div>

      <div id='wrapper' className='z-100 sticky top-0 w-full'>
        <nav
          id='parent'
          as='nav'
          className={`${
            router.pathname === '/' ? 'bg-green-600 shadow-lg' : 'bg-[#F8FBF8] shadow-lg'
          } h-[70px] lgNav:h-[98px] flex flex-row justify-between items-center lgNav:items-end global-padding w-full lgNav:w-auto`}
        >
          <>
            {/* LOGO */}
            <div className=''>
              {router.pathname === '/' && (
                <>
                  {/* LOGO DESKTOP HP */}
                  <div className='hidden lgNav:block'>
                    <Link href='/'>
                      <Lottie options={defaultOptions} height={98} width={163} />
                    </Link>
                  </div>
                  {/* LOGO MOBILE HP */}
                  <div className='block lgNav:hidden'>
                    <Link href='/'>
                      <Image height={24} width={100} src={logo} alt='CircuLaw logo' quality={100} />
                    </Link>
                  </div>
                </>
              )}
              {router.pathname !== '/' && (
                <>
                  <div className='hidden lgNav:block py-3'>
                    <Link href='/'>
                      <Image
                        height={75}
                        width={141}
                        src={CirculawLogo}
                        alt='CircuLaw logo'
                        quality={100}
                        className='z-80 relative'
                      />
                    </Link>
                  </div>
                  <div className='block lgNav:hidden'>
                    <Link href='/'>
                      <Image
                        height={24}
                        width={100}
                        src={CirculawLogo}
                        alt='CircuLaw logo'
                        quality={100}
                      />
                    </Link>
                  </div>
                </>
              )}
            </div>
            <div className='flex flex-col justify-between'>
              {/* LANGUAGE */}
              <div
                className={`${
                  router.pathname === '/' ? 'text-grey-100' : 'text-green-800'
                }  hidden lgNav:flex justify-end items-center min-w-[10%] mb-5`}
              >
                <span
                  className={`${
                    router.pathname === '/' ? 'hover:text-light-green-500' : 'link-interaction'
                  } ${router.pathname === '/en' ? 'enLink' : 'enLinkSelected'}`}
                >
                  <Link href='/'>NL</Link>
                </span>
                <span className='px-1 enLink'>|</span>
                <span
                  className={`${
                    router.pathname === '/' ? 'hover:text-light-green-500 ' : 'link-interaction'
                  } ${router.pathname === '/en' ? 'enLinkSelected' : 'enLink'}`}
                >
                  <Link href='/en'>EN</Link>
                </span>
              </div>

              {/* Mobile button/NAV */}
              <div className='inset-y-0 float-right flex items-center pt-2 lgNav:hidden'>
                <button
                  className={`${
                    router.pathname !== '/' ? 'text-green-600' : 'text-grey-100'
                  } 'p-2 rounded-md`}
                  ref={mobileRef.setReference}
                  {...mobileRefProps()}
                >
                  <span className='sr-only'>Open main menu</span>
                  {mobileMenuIsOpen ? (
                    <XIcon className='block h-10 w-10' aria-hidden='true' />
                  ) : (
                    <MenuIcon className='block h-10 w-10' aria-hidden='true' />
                  )}
                </button>
                {mobileMenuIsMounted && (
                  <FloatingOverlay
                    id='overlay'
                    lockScroll
                    style={{ background: 'rgba(0, 0, 0, 0)' }}
                    className='-z-10'
                  >
                    <FloatingFocusManager context={mobileContext} modal={false}>
                      <div
                        className='h-auto w-full'
                        ref={mobileRef.setFloating}
                        style={mobileFloatingStyles}
                        {...mobileFloatingProps()}
                      >
                        <div
                          className='min-h-screen w-full bg-[#F8FBF8]'
                          style={{ ...mobileMenuTransitionStyles }}
                        >
                          <div className='flex flex-col items-start justify-end global-margin '>
                            <Disclosure>
                              {({ open }) => (
                                <>
                                  <Disclosure.Button
                                    className={`${
                                      open ? 'text-green-500' : 'text-green-800'
                                    } py-4 w-full text-left p-xl-semibold flex flex-row items-center`}
                                  >
                                    Productketens
                                    <ChevronDownIcon
                                      className={`${open ? 'rotate-180' : ''} h-4 w-4 mt-1 ml-2`}
                                    />
                                  </Disclosure.Button>
                                  <Transition
                                    show={open}
                                    enter='transition duration-300 ease-out'
                                    enterFrom='transform opacity-0'
                                    enterTo='transform opacity-100'
                                    leave='transition duration-75 ease-out'
                                    leaveFrom='transform opacity-300'
                                    leaveTo='transform opacity-0'
                                    className='w-full'
                                  >
                                    <Disclosure.Panel className='flex flex-col flex-grow ml-4'>
                                      <ul>
                                        <li className='p-base-semibold text-green-800 py-6 border-b'>
                                          <Disclosure>
                                            {({ open }) => (
                                              <>
                                                <Disclosure.Button className='flex flex-row items-center'>
                                                  Bouw
                                                  <ChevronDownIcon
                                                    className={`${
                                                      open ? 'rotate-180' : ''
                                                    } h-4 w-4 mt-1 ml-2`}
                                                  />
                                                </Disclosure.Button>
                                                <Transition
                                                  show={open}
                                                  enter='transition duration-300 ease-out'
                                                  enterFrom='transform opacity-0'
                                                  enterTo='transform opacity-100'
                                                  leave='transition duration-75 ease-out'
                                                  leaveFrom='transform opacity-300'
                                                  leaveTo='transform opacity-0'
                                                  className='w-full'
                                                >
                                                  <Disclosure.Panel className='p-base text-green-600 pt-4 pl-4'>
                                                    <Link href='/bouw/houtbouw'>
                                                      Houtbouw stimuleren
                                                    </Link>
                                                  </Disclosure.Panel>
                                                </Transition>
                                              </>
                                            )}
                                          </Disclosure>
                                        </li>
                                        <li className='p-base-semibold text-green-800 py-6 border-b'>
                                          <Disclosure>
                                            {({ open }) => (
                                              <>
                                                <Disclosure.Button className='flex flex-row items-center'>
                                                  Consumptiegoederen
                                                  <ChevronDownIcon
                                                    className={`${
                                                      open ? 'rotate-180' : ''
                                                    } h-4 w-4 mt-1 ml-2`}
                                                  />
                                                </Disclosure.Button>
                                                <Transition
                                                  show={open}
                                                  enter='transition duration-300 ease-out'
                                                  enterFrom='transform opacity-0'
                                                  enterTo='transform opacity-100'
                                                  leave='transition duration-75 ease-out'
                                                  leaveFrom='transform opacity-300'
                                                  leaveTo='transform opacity-0'
                                                  className='w-full'
                                                >
                                                  <Disclosure.Panel className='p-base text-green-600 pt-4 pl-4'>
                                                    <Link href='/consumptie-goederen/matrasketen'>
                                                      Circulaire matrasketen
                                                    </Link>
                                                  </Disclosure.Panel>
                                                </Transition>
                                              </>
                                            )}
                                          </Disclosure>
                                        </li>
                                        <li className='p-base-semibold text-green-800 py-6 border-b opacity-75'>
                                          Voedsel en biomassa
                                        </li>
                                        <li className='p-base-semibold text-green-800 py-6 border-b'>
                                          <Disclosure>
                                            {({ open }) => (
                                              <>
                                                <Disclosure.Button className='flex flex-row items-center'>
                                                  Maakindustrie
                                                  <ChevronDownIcon
                                                    className={`${
                                                      open ? 'rotate-180' : ''
                                                    } h-4 w-4 mt-1 ml-2`}
                                                  />
                                                </Disclosure.Button>
                                                <Transition
                                                  show={open}
                                                  enter='transition duration-300 ease-out'
                                                  enterFrom='transform opacity-0'
                                                  enterTo='transform opacity-100'
                                                  leave='transition duration-75 ease-out'
                                                  leaveFrom='transform opacity-300'
                                                  leaveTo='transform opacity-0'
                                                  className='w-full'
                                                >
                                                  <Disclosure.Panel className='p-base text-green-600 pt-4 pl-4'>
                                                    <Link href='/maakindustrie/windturbines'>
                                                      Circulaire windturbines{' '}
                                                    </Link>
                                                  </Disclosure.Panel>
                                                </Transition>
                                              </>
                                            )}
                                          </Disclosure>
                                        </li>
                                        <li className='p-base-semibold text-green-800 py-6'>
                                          <Disclosure>
                                            {({ open }) => (
                                              <>
                                                <Disclosure.Button className='flex flex-row items-center'>
                                                  Kunststoffen
                                                  <ChevronDownIcon
                                                    className={`${
                                                      open ? 'rotate-180' : ''
                                                    } h-4 w-4 mt-1 ml-2`}
                                                  />
                                                </Disclosure.Button>
                                                <Transition
                                                  show={open}
                                                  enter='transition duration-300 ease-out'
                                                  enterFrom='transform opacity-0'
                                                  enterTo='transform opacity-100'
                                                  leave='transition duration-75 ease-out'
                                                  leaveFrom='transform opacity-300'
                                                  leaveTo='transform opacity-0'
                                                  className='w-full'
                                                >
                                                  <Disclosure.Panel className='p-base text-green-600 pt-4 pl-4'>
                                                    <Link href='/kunststoffen/plastic-in-de-bouw'>
                                                      Plastic in de bouw{' '}
                                                    </Link>
                                                  </Disclosure.Panel>
                                                </Transition>
                                              </>
                                            )}
                                          </Disclosure>
                                        </li>
                                      </ul>
                                    </Disclosure.Panel>
                                  </Transition>
                                </>
                              )}
                            </Disclosure>
                            <Disclosure>
                              {({ open }) => (
                                <>
                                  <Disclosure.Button
                                    className={`${
                                      open ? 'text-green-500' : 'text-green-800'
                                    }  border-t py-4 w-full text-left p-xl-semibold flex flex-row items-center`}
                                  >
                                    Over Circulaw
                                    <ChevronDownIcon
                                      className={`${open ? 'rotate-180' : ''} h-4 w-4 mt-1 ml-2`}
                                    />
                                  </Disclosure.Button>
                                  <Transition
                                    show={open}
                                    enter='transition duration-300 ease-out'
                                    enterFrom='transform opacity-0'
                                    enterTo='transform opacity-100'
                                    leave='transition duration-75 ease-out'
                                    leaveFrom='transform opacity-300'
                                    leaveTo='transform opacity-0'
                                    className='w-full'
                                  >
                                    <Disclosure.Panel className='ml-4'>
                                      <ul>
                                        {props?.aboutSlugs?.map((aboutPage) => (
                                          <li
                                            key={aboutPage?.slug}
                                            className='p-base first:mt-4 mb-4 text-green-600 cursor-pointer'
                                            onClick={() => router.push(`/over/${aboutPage?.slug}`)}
                                          >
                                            {aboutPage.title}
                                          </li>
                                        ))}
                                      </ul>
                                    </Disclosure.Panel>
                                  </Transition>
                                </>
                              )}
                            </Disclosure>
                            <div className='text-green-800 border-b border-t py-4 w-full text-left p-xl-semibold flex flex-row items-center'>
                              <Link href='/over/Nieuws-en-blogs'>Nieuws</Link>
                            </div>
                            <div className='text-green-800 border-b py-4 w-full text-left p-xl-semibold flex flex-row items-center'>
                              <Link href='/vraag-en-antwoord'>Vraag en antwoord</Link>
                            </div>
                            <div className='text-green-800 border-b py-4 w-full text-left p-xl-semibold flex flex-row items-center'>
                              <Link href='/contact'>Contact</Link>
                            </div>
                            <div className='flex flex-row items-end w-full justify-end'>
                              <div className='flex justify-center items-center justify-self-end min-w-[10%] p-4 text-black'>
                                <span
                                  className={`link-interaction ${
                                    router.pathname === '/en' ? 'enLink' : 'enLinkSelected'
                                  }`}
                                >
                                  <Link href='/'>NL</Link>
                                </span>
                                <span className='px-1 enLink'>|</span>
                                <span
                                  className={`link-interaction ${
                                    router.pathname === '/en' ? 'enLinkSelected' : 'enLink'
                                  }`}
                                >
                                  <Link href='/en'>EN</Link>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </FloatingFocusManager>
                  </FloatingOverlay>
                )}
              </div>

              {/* Desktop nav */}
              <div className='hidden lgNav:flex flex-row items-center justify-between mb-7'>
                <div className=''>
                  <button
                    className='h-full relative p-sm group z-100 mr-8 flex flex-row items-center'
                    ref={mainMenuRef.setReference}
                    {...mainMenuReferencProps()}
                  >
                    <span
                      className={`${
                        mainMenuIsOpen === true
                          ? [
                              `${
                                router.pathname === '/' ? 'text-light-green-500' : 'text-green-500'
                              }`,
                            ]
                          : [
                              `${
                                router.pathname === '/'
                                  ? 'text-white group-hover:decoration-light-green-500'
                                  : 'text-green-800 group-hover:decoration-green-500'
                              }`,
                            ]
                      } hover:underline`}
                    >
                      Productketens
                    </span>
                    <ChevronDownIcon
                      className={`${
                        mainMenuIsOpen
                          ? [
                              `${
                                router.pathname === '/'
                                  ? 'text-light-green-500 rotate-180'
                                  : 'rotate-180 text-green-500'
                              }`,
                            ]
                          : [
                              `${
                                router.pathname === '/'
                                  ? 'text-white group-hover:text-light-green-500'
                                  : 'group-hover:text-green-500'
                              }`,
                            ]
                      } h-5 w-5 ml-2`}
                    />
                  </button>
                  {/* REFACTOR CARDS */}
                  {mainMenuIsMounted && (
                    <FloatingFocusManager context={mainMenuContext} modal={true} disabled>
                      <div
                        ref={mainMenuRef.setFloating}
                        style={mainMenuStyles}
                        {...mainMenuFloatingProps()}
                        className='h-72 w-full -z-10 '
                      >
                        <div
                          className='h-full shadow-lg'
                          style={{ ...mainMenuTransitionStyles }}
                          onMouseLeave={() => setMainMenuIsOpen(false)}
                        >
                          <div
                            className={`${
                              router.pathname === '/' ? 'bg-green-500' : 'bg-white'
                            } h-full flex flex-cols-5 gap-3 relative`}
                          >
                            <div
                              className={`${
                                router.pathname === '/'
                                  ? 'bg-green-600 text-light-green-500'
                                  : 'bg-green-100 text-green-800'
                              } w-full h-full pl-4 lgNav:pl-10 xl:pl-20 3xl:pl-32 pt-8 pr-2 p-lg-semibild  mb-2`}
                            >
                              Bouw
                              <div className=''>
                                <button
                                  className={`${
                                    router.pathname === '/'
                                      ? 'text-white'
                                      : 'text-green-600 hover:text-green-500 '
                                  } p-xs mt-2 hover:underline active:p-xs-semibold active:no-underline cursor-pointer`}
                                  onClick={() => router.push('/bouw/houtbouw')}
                                >
                                  Houtbow stimuleren
                                </button>
                              </div>
                            </div>
                            <div
                              className={`${
                                router.pathname === '/'
                                  ? 'bg-green-600 text-green-800 bg-opacity-75'
                                  : 'bg-grey-100 text-green-800 text-opacity-75'
                              } w-full flex flex-col pl-3 lg:pl-6 pt-8 pr-2`}
                            >
                              <div className='p-lg-semibild '>Voedsel en biomassa</div>
                              <div className=''>
                                <div
                                  className={`${
                                    router.pathname === '/'
                                      ? 'text-green-300 opacity-75'
                                      : 'text-gray-600'
                                  } p-xs mt-2 italic`}
                                >
                                  Thema’s voor deze productketen volgen binnenkort
                                </div>
                              </div>
                            </div>
                            <div
                              className={`${
                                router.pathname === '/'
                                  ? 'bg-green-600 text-light-green-500'
                                  : 'bg-green-100 text-green-800'
                              } w-full flex flex-col pl-3 lg:pl-6 pt-8 pr-2`}
                            >
                              <div className='p-lg-semibild break-words '>Consumptiegoederen</div>
                              <div className=''>
                                <button
                                  className={`${
                                    router.pathname === '/'
                                      ? 'text-white'
                                      : 'text-green-600 hover:text-green-500 '
                                  } p-xs mt-2 hover:underline active:p-xs-semibold active:no-underline cursor-pointer`}
                                  onClick={() => router.push('/consumptie-goederen/matrasketen')}
                                >
                                  Circulaire matrasketen
                                </button>
                              </div>
                            </div>
                            <div
                              className={`${
                                router.pathname === '/'
                                  ? 'bg-green-600 text-light-green-500'
                                  : 'bg-green-100 text-green-800'
                              } w-full flex flex-col pl-3 lg:pl-6 pt-8 pr-2`}
                            >
                              <div className='p-lg-semibild '>Maakindustrie</div>
                              <div className=''>
                                <button
                                  className={`${
                                    router.pathname === '/'
                                      ? 'text-white'
                                      : 'text-green-600 hover:text-green-500 '
                                  } p-xs mt-2 hover:underline active:p-xs-semibold active:no-underline cursor-pointer`}
                                  onClick={() => router.push('/maakindustrie/windturbines')}
                                >
                                  Circulaire windturbines
                                </button>
                              </div>
                            </div>
                            <div
                              className={`${
                                router.pathname === '/'
                                  ? 'bg-green-600 text-light-green-500'
                                  : 'bg-green-100 text-green-800'
                              } w-full flex flex-col pl-3 lg:pl-6 pt-8 pr-2`}
                            >
                              <div className='p-lg-semibild '>Kunststoffen</div>
                              <div className=''>
                                <button
                                  className={`${
                                    router.pathname === '/'
                                      ? 'text-white'
                                      : 'text-green-600 hover:text-green-500 '
                                  } p-xs mt-2 hover:underline active:p-xs-semibold active:no-underline cursor-pointer`}
                                  onClick={() => router.push('/kunststoffen/plastic-in-de-bouw')}
                                >
                                  Plastic in de bouw
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </FloatingFocusManager>
                  )}
                </div>

                <div className=''>
                  <button
                    ref={overRef.setReference}
                    {...overReferenceProps()}
                    className='h-full relative p-sm group z-100 mr-8 flex flex-row items-center'
                  >
                    <span
                      className={`${
                        overMenuIsOpen === true
                          ? [
                              `${
                                router.pathname === '/' ? 'text-light-green-500' : 'text-green-500'
                              }`,
                            ]
                          : [
                              `${
                                router.pathname === '/'
                                  ? 'text-white group-hover:decoration-light-green-500'
                                  : 'text-green-800 group-hover:decoration-green-500'
                              }`,
                            ]
                      } hover:underline`}
                    >
                      Over Circulaw
                    </span>
                    <ChevronDownIcon
                      className={`${
                        overMenuIsOpen
                          ? [
                              `${
                                router.pathname === '/'
                                  ? 'text-light-green-500 rotate-180'
                                  : 'rotate-180 text-green-500'
                              }`,
                            ]
                          : [
                              `${
                                router.pathname === '/'
                                  ? 'text-white group-hover:text-light-green-500'
                                  : 'group-hover:text-green-500'
                              }`,
                            ]
                      } h-5 w-5 ml-2`}
                    />
                  </button>
                  {overMenuIsMounted && (
                    <FloatingFocusManager context={overContext} modal={false} disabled>
                      <div
                        ref={overRef.setFloating}
                        style={overStyles}
                        {...overFloatingProps()}
                        className='h-60 w-72 -z-10 '
                      >
                        <div
                          className={`${
                            router.pathname === '/' ? 'bg-green-600' : 'bg-green-100'
                          } h-full  shadow-lg pl-6 pt-8 pr-8`}
                          style={{ ...overMenuTransitionStyles }}
                          onMouseLeave={() => setOverMenuIsOpen(false)}
                        >
                          {props?.aboutSlugs?.map((aboutPage) => (
                            <button
                              key={aboutPage?.slug}
                              className={`${
                                router.pathname === '/'
                                  ? 'text-white'
                                  : 'text-green-600 hover:text-green-500'
                              } p-xs mb-2  hover:underline active:p-xs-semibold active:no-underline cursor-pointer`}
                              onClick={() => router.push(`/over/${aboutPage?.slug}`)}
                            >
                              {aboutPage.title}
                            </button>
                          ))}
                        </div>
                      </div>
                    </FloatingFocusManager>
                  )}
                </div>
                <div
                  className={`${
                    router.pathname === '/'
                      ? 'text-white hover:text-light-green-500'
                      : 'text-green-800 hover:text-green-500'
                  } h-full relative p-sm  hover:underline z-100 mr-8 flex flex-row items-center cursor-pointer`}
                >
                  <Link href='/over/Nieuws-en-blogs'>Nieuws</Link>
                </div>
                <div
                  className={`${
                    router.pathname === '/'
                      ? 'text-white hover:text-light-green-500'
                      : 'text-green-800 hover:text-green-500'
                  } h-full relative p-sm  hover:underline z-100 mr-8 flex flex-row items-center cursor-pointer`}
                >
                  <Link href='/vraag-en-antwoord'>Vraag en antwoord</Link>
                </div>
                <div
                  className={`${
                    router.pathname === '/'
                      ? 'text-white hover:text-light-green-500'
                      : 'text-green-800 hover:text-green-500'
                  } h-full relative p-sm  hover:underline z-100 flex flex-row items-center cursor-pointer`}
                >
                  <Link href='/contact'>Contact</Link>
                </div>
              </div>
            </div>
          </>
        </nav>
      </div>
      {router.pathname === '/' && (
        <div className='-mt-[9rem] bg-header bg-cover bg-center w-full'>
          <HomepageHeader homePageHeader={props.homePageHeader} />
        </div>
      )}
    </>
  );
}

import { usePiwikPro } from '@piwikpro/next-piwik-pro';
import DesktopNavCard from './desktop-nav-card';
import DesktopSimpleButton from './desktop-simple-button';
import MobileDisclosure from './mobile-disclosure';
import MobileSimpleButton from './mobile-simple-button';
import HomepageHeader from '@/components/homepage-header';
import BetaBanner from '@/components/nav/beta-banner';
import LangSwitch from '@/components/nav/lang-switch';
import animationData from '@/public/CL_Home_Logo_Loop';
import CirculawLogo from '@/public/circulaw_logotype2.png';
import logo from '@/public/circulaw_logotype_home2.png';
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
import { Disclosure, Transition } from '@headlessui/react';
import { ChevronDownIcon, MenuIcon, XIcon, SearchIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import Link from 'next/link';
// import { useRouter } from 'next/router';
import { useState, useEffect, useCallback, useRef } from 'react';
import Lottie from 'react-lottie';
import { useSearchParams, usePathname } from 'next/navigation';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

export default function Nav(props) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { CustomEvent } = usePiwikPro();
  const [scrollEffect, setScrollEffect] = useState(false);

  useEffect(() => {
    const changeEffect = () => {
      if (window.scrollY >= 32) {
        setScrollEffect(true);
      } else {
        setScrollEffect(false);
      }
    };
    window.addEventListener('scroll', changeEffect);
  }, []);

  const [searchIndex, setSearchIndex] = useState('instruments');
  const [searchQuery, setSearchQuery] = useState('');

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams],
  );

  const onChange = () => (e) => {
    const value = e.target.value;
    setSearchQuery(value);
  };

  const linkRef = useRef();

  const enterClick = (e) => {
    e.preventDefault();
    console.log('enter key');
    linkRef.current.click();
  };

  // search Menu
  const [searchMenuIsOpen, setSearchMenuIsOpen] = useState(false);
  const {
    refs: searchMenuRef,
    floatingStyles: searchMenuStyles,
    context: searchMenuContext,
  } = useFloating({
    placement: 'bottom',
    open: searchMenuIsOpen,
    onOpenChange: setSearchMenuIsOpen,
    middleware: [offset(28), flip(), shift()],
  });

  const { isMounted: searchMenuIsMounted, styles: searchMenuTransitionStyles } =
    useTransitionStyles(searchMenuContext, {
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
    });

  const searchMenuClick = useClick(searchMenuContext);
  const searchMenuDismiss = useDismiss(searchMenuContext);
  const searchMenuRole = useRole(searchMenuContext);

  const { getReferenceProps: searchMenuReferencProps, getFloatingProps: searchMenuFloatingProps } =
    useInteractions([searchMenuClick, searchMenuDismiss, searchMenuRole]);

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

  // eu menu
  const [euMenuIsOpen, setEuMenuIsOpen] = useState(false);
  const {
    refs: euRef,
    floatingStyles: euStyles,
    context: euContext,
  } = useFloating({
    placement: 'bottom-start',
    open: euMenuIsOpen,
    onOpenChange: setEuMenuIsOpen,
    middleware: [offset(28), flip(), shift()],
  });

  const { isMounted: euMenuIsMounted, styles: euMenuTransitionStyles } = useTransitionStyles(
    euContext,
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

  const euMenuClick = useClick(euContext);
  const euMenuDismiss = useDismiss(euContext);
  const euMenuRole = useRole(euContext);

  const { getReferenceProps: euReferenceProps, getFloatingProps: euFloatingProps } =
    useInteractions([euMenuClick, euMenuDismiss, euMenuRole]);

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

  if (pathname === '/en') {
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
            <LangSwitch background='dark' />
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
            pathname === '/'
              ? [
                  `${
                    mainMenuIsMounted ||
                    searchMenuIsMounted ||
                    (overMenuIsMounted && scrollEffect === false) ||
                    (euMenuIsMounted && scrollEffect === false)
                      ? ['bg-green-600 bg-opacity-100 shadow-lg transition-all duration-75']
                      : [
                          `${
                            scrollEffect === true
                              ? 'bg-green-600 shadow-lg tranition-all duration-150'
                              : 'bg-opacity-0 transition-all duration-150'
                          }`,
                        ]
                  }`,
                ]
              : 'bg-green-50 shadow-lg'
          } h-[70px] lgNav:h-[98px] flex flex-row justify-between items-center lgNav:items-end global-padding w-full lgNav:w-auto`}
        >
          <>
            {/* LOGO */}
            <div className=''>
              {pathname === '/' && (
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
              {pathname !== '/' && (
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
              {pathname === '/' ? (
                <div className='hidden lgNav:flex flex-row justify-end mb-4'>
                  <LangSwitch background='dark' />
                </div>
              ) : (
                <div className='hidden lgNav:flex flex-row justify-end mb-4'>
                  <LangSwitch />
                </div>
              )}

              {/* Mobile button/NAV */}
              <div className='inset-y-0 float-right flex items-center pt-2 lgNav:hidden'>
                <button
                  className={`${
                    pathname !== '/' ? 'text-green-600' : 'text-gray-100'
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
                    className='-z-10 bg-green-50 mt-[70px]'
                  >
                    <FloatingFocusManager context={mobileContext} modal={false} disabled>
                      <div
                        className='h-auto w-full'
                        ref={mobileRef.setFloating}
                        style={mobileFloatingStyles}
                        {...mobileFloatingProps()}
                      >
                        <div
                          className='w-full h-full bg-green-50'
                          style={{ ...mobileMenuTransitionStyles }}
                        >
                          <div className='flex flex-col items-start justify-end global-margin '>
                            <Disclosure>
                              {({ open }) => (
                                <>
                                  {' '}
                                  <Disclosure.Button
                                    className={`${
                                      open ? 'text-green-500' : 'text-green-800'
                                    } py-4 w-full text-left heading-xl-semibold flex flex-row items-center`}
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
                                        {props?.navItems?.map((navItem, id) => (
                                          <MobileDisclosure
                                            key={id}
                                            navData={navItem}
                                            closeMenu={setMobileMenuIsOpen}
                                          />
                                        ))}
                                      </ul>
                                    </Disclosure.Panel>
                                  </Transition>
                                </>
                              )}
                            </Disclosure>

                            {/* EU */}
                            <Disclosure>
                              {({ open }) => (
                                <>
                                  <Disclosure.Button
                                    className={`${
                                      open ? 'text-green-500' : 'text-green-800'
                                    }  border-t py-4 w-full text-left heading-xl-semibold flex flex-row items-center`}
                                  >
                                    EU wetgeving
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
                                        <li className='p-base h-10 my-2 last:mb-2 text-green-600 cursor-pointer flex items-center'>
                                          Overzicht
                                        </li>
                                        {props?.euSlugs?.map((euPage) => (
                                          <li
                                            key={euPage?.slug}
                                            className='p-base h-10 my-2 last:mb-2 text-green-600 cursor-pointer flex items-center'
                                          >
                                            <Link
                                              href={`/eu-wetgeving/${euPage?.slug}`}
                                              onClick={() => setMobileMenuIsOpen(false)}
                                            >
                                              {euPage.title}
                                            </Link>
                                          </li>
                                        ))}
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
                                    }  border-t py-4 w-full text-left heading-xl-semibold flex flex-row items-center`}
                                  >
                                    Over CircuLaw
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
                                            className='p-base h-10 my-2 last:mb-2 text-green-600 cursor-pointer flex items-center'
                                          >
                                            <Link
                                              href={`/over/${aboutPage?.slug}`}
                                              onClick={() => setMobileMenuIsOpen(false)}
                                            >
                                              {aboutPage.title}
                                            </Link>
                                          </li>
                                        ))}
                                      </ul>
                                    </Disclosure.Panel>
                                  </Transition>
                                </>
                              )}
                            </Disclosure>
                            <MobileSimpleButton
                              name='Nieuws'
                              url='/nieuws'
                              closeMenu={setMobileMenuIsOpen}
                            />
                            <MobileSimpleButton
                              name='Vraag en antwoord'
                              url='/vraag-en-antwoord'
                              closeMenu={setMobileMenuIsOpen}
                            />
                            <MobileSimpleButton
                              name='Contact'
                              url='/contact'
                              closeMenu={setMobileMenuIsOpen}
                            />
                            <MobileSimpleButton
                              name='Zoeken'
                              url='/zoeken/instrumenten'
                              closeMenu={setMobileMenuIsOpen}
                            />
                            <div className='flex flex-row items-end w-full justify-end pt-4 '>
                              <LangSwitch />
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
                    className='h-full relative p-sm group z-100 mr-6 lg:mr-6 flex flex-row items-center'
                    ref={mainMenuRef.setReference}
                    {...mainMenuReferencProps()}
                  >
                    <span
                      className={`${
                        mainMenuIsOpen === true
                          ? [`${pathname === '/' ? 'text-green-200' : 'text-green-500'}`]
                          : [
                              `${
                                pathname === '/'
                                  ? 'text-white group-hover:decoration-green-200'
                                  : 'text-green-800 group-hover:decoration-green-500'
                              }`,
                            ]
                      } group-hover:underline p-base`}
                    >
                      Productketens
                    </span>
                    <ChevronDownIcon
                      className={`${
                        mainMenuIsOpen
                          ? [
                              `${
                                pathname === '/'
                                  ? 'text-green-200 rotate-180'
                                  : 'rotate-180 text-green-500'
                              }`,
                            ]
                          : [
                              `${
                                pathname === '/'
                                  ? 'text-white group-hover:text-green-200'
                                  : 'group-hover:text-green-500'
                              }`,
                            ]
                      } h-5 w-5 ml-2`}
                    />
                  </button>
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
                              pathname === '/' ? 'bg-green-500' : 'bg-gray-300'
                            } h-full flex flex-cols-5 gap-[1px] relative`}
                          >
                            {props?.navItems?.map((navItem, id) => (
                              <DesktopNavCard
                                key={id}
                                navData={navItem}
                                closeNav={setMainMenuIsOpen}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </FloatingFocusManager>
                  )}
                </div>

                {/* EU MENU */}
                <div className=''>
                  <button
                    ref={euRef.setReference}
                    {...euReferenceProps()}
                    className='h-full relative p-sm group z-100 mr-6 lg:mr-8 flex flex-row items-center'
                  >
                    <span
                      className={`${
                        euMenuIsOpen === true
                          ? [`${pathname === '/' ? 'text-green-200' : 'text-green-500'}`]
                          : [
                              `${
                                pathname === '/'
                                  ? 'text-white group-hover:decoration-green-200'
                                  : 'text-green-800 group-hover:decoration-green-500'
                              }`,
                            ]
                      } group-hover:underline p-base`}
                    >
                      EU wetgeving
                    </span>
                    <ChevronDownIcon
                      className={`${
                        euMenuIsOpen
                          ? [
                              `${
                                pathname === '/'
                                  ? 'text-green-200 rotate-180'
                                  : 'rotate-180 text-green-500'
                              }`,
                            ]
                          : [
                              `${
                                pathname === '/'
                                  ? 'text-white group-hover:text-green-200'
                                  : 'group-hover:text-green-500'
                              }`,
                            ]
                      } h-5 w-5 ml-2`}
                    />
                  </button>
                  {euMenuIsMounted && (
                    <FloatingFocusManager context={euContext} modal={false} disabled>
                      <div
                        ref={euRef.setFloating}
                        style={euStyles}
                        {...euFloatingProps()}
                        className='h-auto w-72 -z-10 '
                      >
                        <div
                          className={`${
                            pathname === '/' ? 'bg-green-600' : 'bg-green-50'
                          } h-full pb-10 shadow-lg pl-6 pt-8 pr-8`}
                          style={{ ...euMenuTransitionStyles }}
                          onMouseLeave={() => setEuMenuIsOpen(false)}
                        >
                          {/* Remove slice once news section is separate */}
                          <div
                            className={`${
                              pathname === '/'
                                ? 'text-white'
                                : 'text-green-600 hover:text-green-500'
                            } p-xs mb-2  hover:underline active:p-xs-semibold active:no-underline cursor-pointer`}
                          >
                            <Link
                              href='/eu-wetgeving'
                              id='navClick'
                              onClick={() => {
                                setEuMenuIsOpen(false);
                                CustomEvent.trackEvent('Nav click', pathname);
                              }}
                            >
                              Overzicht
                            </Link>
                          </div>
                          {props?.euSlugs?.map((euLaw) => (
                            <div
                              key={euLaw?.slug}
                              className={`${
                                pathname === '/'
                                  ? 'text-white'
                                  : 'text-green-600 hover:text-green-500'
                              } p-xs mb-2  hover:underline active:p-xs-semibold active:no-underline cursor-pointer`}
                            >
                              <Link
                                href={`/eu-wetgeving/${euLaw?.slug}`}
                                id='navClick'
                                onClick={() => {
                                  setEuMenuIsOpen(false);
                                  CustomEvent.trackEvent('Nav click', pathname, euLaw.title);
                                }}
                              >
                                {euLaw.title}
                              </Link>
                            </div>
                          ))}
                        </div>
                      </div>
                    </FloatingFocusManager>
                  )}
                </div>

                {/* ABOUT MENU */}
                <div className=''>
                  <button
                    ref={overRef.setReference}
                    {...overReferenceProps()}
                    className='h-full relative p-sm group z-100 mr-6 lg:mr-8 flex flex-row items-center'
                  >
                    <span
                      className={`${
                        overMenuIsOpen === true
                          ? [`${pathname === '/' ? 'text-green-200' : 'text-green-500'}`]
                          : [
                              `${
                                pathname === '/'
                                  ? 'text-white group-hover:decoration-green-200'
                                  : 'text-green-800 group-hover:decoration-green-500'
                              }`,
                            ]
                      } group-hover:underline p-base`}
                    >
                      Over CircuLaw
                    </span>
                    <ChevronDownIcon
                      className={`${
                        overMenuIsOpen
                          ? [
                              `${
                                pathname === '/'
                                  ? 'text-green-200 rotate-180'
                                  : 'rotate-180 text-green-500'
                              }`,
                            ]
                          : [
                              `${
                                pathname === '/'
                                  ? 'text-white group-hover:text-green-200'
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
                        className='h-auto w-72 -z-10 '
                      >
                        <div
                          className={`${
                            pathname === '/' ? 'bg-green-600' : 'bg-green-50'
                          } h-full pb-10 shadow-lg pl-6 pt-8 pr-8`}
                          style={{ ...overMenuTransitionStyles }}
                          onMouseLeave={() => setOverMenuIsOpen(false)}
                        >
                          {/* Remove slice once news section is separate */}
                          {props?.aboutSlugs?.map((aboutPage) => (
                            <div
                              key={aboutPage?.slug}
                              className={`${
                                pathname === '/'
                                  ? 'text-white'
                                  : 'text-green-600 hover:text-green-500'
                              } p-xs mb-2  hover:underline active:p-xs-semibold active:no-underline cursor-pointer`}
                            >
                              <Link
                                href={`/over/${aboutPage?.slug}`}
                                id='navClick'
                                onClick={() => {
                                  setOverMenuIsOpen(false);
                                  CustomEvent.trackEvent('Nav click', pathname, aboutPage.title);
                                }}
                              >
                                {aboutPage.title}
                              </Link>
                            </div>
                          ))}
                        </div>
                      </div>
                    </FloatingFocusManager>
                  )}
                </div>

                <DesktopSimpleButton name='Nieuws' url='/nieuws' />
                <DesktopSimpleButton name='Vraag & antwoord' url='/vraag-en-antwoord' />
                <DesktopSimpleButton name='Contact' url='/contact' />

                {/* SEARCH MENU */}

                <div
                  className={`${pathname?.includes('/zoeken') ? 'hidden' : 'block'} ml-6 lg:ml-8`}
                >
                  <button
                    className='h-full relative p-sm group z-100 flex flex-row items-center'
                    ref={searchMenuRef.setReference}
                    {...searchMenuReferencProps()}
                  >
                    <span
                      className={`${
                        searchMenuIsOpen === true
                          ? [
                              `${
                                pathname === '/'
                                  ? 'bg-green-50 text-green-600'
                                  : 'bg-green-600 text-green-50'
                              }`,
                            ]
                          : [
                              `${
                                pathname === '/'
                                  ? ' bg-green-50 text-green-600'
                                  : 'bg-green-600 text-green-50'
                              }`,
                            ]
                      } flex items-center justify-center rounded-clSm h-6 w-7`}
                    >
                      <SearchIcon className='h-4 w-4' />
                    </span>
                  </button>
                  {searchMenuIsMounted && (
                    <FloatingFocusManager context={mainMenuContext} modal={true} disabled>
                      <div
                        ref={searchMenuRef.setFloating}
                        style={searchMenuStyles}
                        {...searchMenuFloatingProps()}
                        className='h-72 w-full -z-10 '
                      >
                        <div
                          className='h-full shadow-lg'
                          style={{ ...searchMenuTransitionStyles }}
                          // onMouseLeave={() => setSearchMenuIsOpen(false)}
                        >
                          <div
                            className={`${
                              pathname === '/' ? 'bg-green-600' : 'bg-green-50'
                            } h-full`}
                          >
                            {/* MAKE INTO A COMPONENT */}
                            <div className='w-full h-full global-margin flex flex-col items-center justify-end pb-10'>
                              <div className='mb-4'>
                                <div className='flex flex-row justify-center w-[600px] gap-x-1.5'>
                                  <button
                                    onClick={() => setSearchIndex('instruments')}
                                    className={`${
                                      pathname === '/'
                                        ? 'bg-green-50 text-green-800'
                                        : 'bg-white text-green-800 shadow-card'
                                    } flex-row px-5 py-1.5 w-full  rounded-[8px] flex items-center justify-start p-base-semibold h-[72px]`}
                                  >
                                    {searchIndex === 'instruments' ? (
                                      <div className='bg-green-500 w-4 h-4 rounded-full flex items-center justify-center mr-4'>
                                        <div className='bg-green-500 border-white border-2 h-3 w-3 rounded-full'></div>
                                      </div>
                                    ) : (
                                      <div className='bg-black w-4 h-4 rounded-full flex items-center justify-center mr-4'>
                                        <div className='bg-white h-3 w-3 rounded-full'></div>
                                      </div>
                                    )}

                                    <div className='flex flex-col items-start justify-start'>
                                      Instrumenten
                                      <span className='p-xs'>
                                        Zoeken binnen &apos;instrumenten&apos;
                                      </span>
                                    </div>
                                  </button>
                                  <button
                                    onClick={() => setSearchIndex('aboutPage')}
                                    className={`${
                                      pathname === '/'
                                        ? 'bg-white text-green-800'
                                        : 'bg-white text-green-800 shadow-card'
                                    } flex-row px-5 py-1.5 w-full rounded-[8px] flex items-center justify-start p-base-semibold h-[72px]`}
                                  >
                                    {searchIndex === 'aboutPage' ? (
                                      <div className='bg-green-500 w-4 h-4 rounded-full flex items-center justify-center mr-4'>
                                        <div className='bg-green-500 border-white border-2 h-3 w-3 rounded-full'></div>
                                      </div>
                                    ) : (
                                      <div className='bg-black w-4 h-4 rounded-full flex items-center justify-center mr-4'>
                                        <div className='bg-white h-3 w-3 rounded-full'></div>
                                      </div>
                                    )}
                                    <div className='flex flex-col items-start justify-start'>
                                      Over Circulaw
                                      <span className='p-xs'>
                                        Zoeken binnen &apos;Over Circulaw&apos;
                                      </span>
                                    </div>
                                  </button>
                                </div>
                              </div>
                              <div className='h-16 w-[600px]'>
                                <form
                                  className={`${
                                    pathname === '/' ? 'bg-green-600' : 'bg-green-50'
                                  }  w-[600px] h-[66px] rounded-cl flex-row items-center justify-between relative flex`}
                                  onKeyDown={(e) => {
                                    if (e.key === 'Enter') enterClick(e);
                                  }}
                                >
                                  <input
                                    className={`${
                                      pathname === '/'
                                        ? 'bg-green-50/50 placeholder:text-white caret-white focus:bg-[url("/search-icon.png")] text-white'
                                        : 'bg-white placeholder:text-green-800 caret-green-800 focus:bg-[url("/search-icon-dark.png")] text-green-800'
                                    } w-[600px] h-[66px] bg-no-repeat bg-left [background-position-x:10px] pl-12 rounded-cl border-none  p-base  focus:ring-1 focus:ring-white  placeholder:p-base-semibold`}
                                    placeholder={
                                      searchIndex === 'instruments'
                                        ? 'Zoek naar instrumenten...'
                                        : 'Zoek naar over CircuLaw...'
                                    }
                                    onChange={onChange()}
                                  />
                                  <button type='submit'>
                                    <Link
                                      // onClick={handleSubmit()}
                                      ref={linkRef}
                                      href={`${
                                        searchIndex === 'instruments'
                                          ? `/zoeken/instrumenten?${searchIndex}${createQueryString(
                                              '[query]',
                                              searchQuery,
                                            )}`
                                          : `/zoeken/over-circulaw?${searchIndex}${createQueryString(
                                              '[query]',
                                              searchQuery,
                                            )}`
                                      }`}
                                      className='ml-2 border h-[42px] w-24 border-white p-2 absolute top-3 right-3 shadow-card p-base-semibold text-green-600 bg-white rounded-cl flex items-center justify-center hover:bg-green-200 hover:border-green-200'
                                    >
                                      Zoeken
                                    </Link>
                                  </button>
                                  <button
                                    type='reset'
                                    title='Clear the search query'
                                    className={`${
                                      searchQuery === '' ? 'hidden' : ''
                                    } absolute top-3.5 right-28 rounded-full p-2 hover:bg-white/50 group`}
                                    onClick={() => setSearchQuery('')}
                                  >
                                    <XIcon className='h-6 w-6 text-white group-hover:text-green-900' />
                                  </button>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </FloatingFocusManager>
                  )}
                </div>
              </div>
            </div>
          </>
        </nav>
      </div>
      {pathname === '/' && (
        <div className='-mt-[9rem] bg-header bg-cover bg-center w-full'>
          <HomepageHeader homePageHeader={props.homePageHeader} />
        </div>
      )}
    </>
  );
}

'use client';

import { Suspense, useEffect, useRef, useState } from 'react';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import HomepageHeader from '@/components/headers/homepage-header';
import BetaBanner from '@/components/nav/beta-banner';
import LangSwitch from '@/components/nav/lang-switch';
import CirculawLogo from '@/public/circulaw_logotype2.png';
import logo from '@/public/circulaw_logotype_home2.png';
import {
  FloatingFocusManager,
  FloatingOverlay,
  flip,
  offset,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useRole,
  useTransitionStyles,
} from '@floating-ui/react';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { usePiwikPro } from '@piwikpro/next-piwik-pro';
import {
  IconChevronDown,
  IconFileDownload,
  IconMenu2,
  IconSearch,
  IconX,
} from '@tabler/icons-react';

import DesktopNavCard from './desktop-nav-card';
import DesktopSimpleButton from './desktop-simple-button';
import MobileDisclosure from './mobile-disclosure';
import MobileSimpleButton from './mobile-simple-button';
import SearchButton from './search-button';

const PlayerWithNoSSR = dynamic(
  () => import('@lottiefiles/react-lottie-player').then((module) => module.Player),
  { ssr: false },
);

export default function Nav(props) {
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

  const [searchIndex, setSearchIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [placeholder, setPlaceholder] = useState('instruments');

  useEffect(() => {
    if (searchIndex === 0) {
      setPlaceholder('Zoek naar content binnen Circulaw...');
    } else if (searchIndex === 1) {
      setPlaceholder('Zoek naar instrumenten...');
    } else if (searchIndex === 2) {
      setPlaceholder('Zoek naar EU wetgeving');
    } else if (searchIndex === 3) {
      setPlaceholder('Zoek naar over CircuLaw');
    } else if (searchIndex === 4) {
      setPlaceholder('Zoek naar nieuws');
    }
  }, [searchIndex]);

  const onChange = () => (e) => {
    const value = e.target.value;
    setSearchQuery(value);
  };

  const linkRef = useRef();

  const enterClick = (e) => {
    e.preventDefault();
    linkRef.current.click();
  };

  // search Menu
  const [searchMenuIsOpen, setSearchMenuIsOpen] = useState(false);

  function closeSerchMenu() {
    setSearchMenuIsOpen(false);
  }

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

  // remove search index when user opens search menu from another page
  useEffect(() => {
    if (searchMenuIsOpen || mobileMenuIsOpen) {
      localStorage.removeItem('selectedIndex');
    } else {
      setSearchIndex(0);
    }
  });

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

  return (
    <>
      <div className='relative z-110 mx-auto -mb-9 flex w-96 justify-center' name='top'>
        <BetaBanner />
      </div>

      <div id='wrapper' className='sticky top-0 z-100 w-full'>
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
                      ? ['bg-green-500 bg-opacity-100 shadow-lg transition-all duration-75']
                      : [
                          `${
                            scrollEffect === true
                              ? 'tranition-all bg-green-500 shadow-lg duration-150'
                              : 'bg-opacity-0 transition-all duration-150'
                          }`,
                        ]
                  }`,
                ]
              : 'bg-green-100 shadow-lg'
          } global-padding flex h-[70px] w-full flex-row items-center justify-between lgNav:min-h-max lgNav:w-auto lgNav:items-end`}
        >
          <>
            {/* LOGO */}
            <div className=''>
              {pathname === '/' && (
                <>
                  {/* LOGO DESKTOP HP */}
                  <div className='hidden min-h-[98px] lgNav:block'>
                    <Link href='/'>
                      <PlayerWithNoSSR
                        autoplay
                        keepLastFrame
                        style={{ width: 163, height: 98 }}
                        loop
                        src={'/CL_Home_Logo_Loop.json'}
                      />
                    </Link>
                  </div>
                  {/* LOGO MOBILE HP */}
                  <div className='block lgNav:hidden'>
                    <Link href='/'>
                      <Image
                        height={24}
                        width={100}
                        src={logo}
                        alt='CircuLaw logo'
                        quality={100}
                        priority={true}
                      />
                    </Link>
                  </div>
                </>
              )}
              {pathname !== '/' && (
                <>
                  <div className='hidden py-3 lgNav:block'>
                    <Link href='/'>
                      <Image
                        height={75}
                        width={141}
                        src={CirculawLogo}
                        alt='CircuLaw logo'
                        quality={100}
                        className='relative z-80'
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
            <div className=''>
              {/* Mobile button/NAV */}
              <div className='inset-y-0 float-right flex items-center pt-2 lgNav:hidden'>
                <button
                  className={`${
                    pathname !== '/' ? 'text-green-500' : 'text-green-100'
                  } 'p-2 rounded-md`}
                  ref={mobileRef.setReference}
                  {...mobileRefProps()}
                >
                  <span className='sr-only'>Open main menu</span>
                  {mobileMenuIsOpen ? (
                    <IconX className='block h-10 w-10' aria-hidden='true' />
                  ) : (
                    <IconMenu2 className='block h-10 w-10' aria-hidden='true' />
                  )}
                </button>
                {mobileMenuIsMounted && (
                  <FloatingOverlay
                    id='overlay'
                    lockScroll
                    style={{ background: 'rgba(0, 0, 0, 0)' }}
                    className='-z-10 mt-[70px] bg-green-100'
                  >
                    <FloatingFocusManager context={mobileContext} modal={false} disabled>
                      <div
                        className='h-auto w-full'
                        ref={mobileRef.setFloating}
                        style={mobileFloatingStyles}
                        {...mobileFloatingProps()}
                      >
                        <div
                          className='h-full w-full bg-green-100'
                          style={{ ...mobileMenuTransitionStyles }}
                        >
                          <div className='global-margin flex flex-col items-start justify-end'>
                            <Disclosure>
                              <>
                                <DisclosureButton className='heading-xl-semibold group flex w-full flex-row items-center py-4 text-left text-cl-black data-[open]:text-green-500'>
                                  Productketens
                                  <IconChevronDown className='ml-2 mt-1 h-5 w-5 group-data-[open]:rotate-180' />
                                </DisclosureButton>
                                <DisclosurePanel className='ml-4 flex flex-grow flex-col'>
                                  <ul>
                                    {props?.navItems?.map((navItem, id) => (
                                      <MobileDisclosure
                                        key={id}
                                        navData={navItem}
                                        closeMenu={setMobileMenuIsOpen}
                                      />
                                    ))}
                                  </ul>
                                </DisclosurePanel>
                              </>
                            </Disclosure>

                            {/* EU */}
                            <Disclosure>
                              <>
                                <DisclosureButton className='heading-xl-semibold group flex w-full flex-row items-center border-t py-4 text-left text-cl-black data-[open]:text-green-500'>
                                  EU wetgeving
                                  <IconChevronDown className='ml-2 mt-1 h-5 w-5 group-data-[open]:rotate-180' />
                                </DisclosureButton>
                                <DisclosurePanel className='ml-4'>
                                  <ul>
                                    <li className='p-base my-2 flex h-10 cursor-pointer items-center text-green-500 last:mb-2'>
                                      <Link
                                        href={'/eu-wetgeving'}
                                        onClick={() => setMobileMenuIsOpen(false)}
                                      >
                                        Overzicht
                                      </Link>
                                    </li>
                                    {props?.euSlugs?.map((euPage) => (
                                      <li
                                        key={euPage?.slug}
                                        className='p-base my-2 flex h-10 cursor-pointer items-center text-green-500 last:mb-2'
                                      >
                                        <Link
                                          href={`/eu-wetgeving/${euPage?.slug}`}
                                          onClick={() => setMobileMenuIsOpen(false)}
                                        >
                                          {euPage.title}
                                        </Link>
                                      </li>
                                    ))}
                                    <li className='p-base mt-6 flex h-auto cursor-pointer items-center border-t border-green-500 py-2 text-green-400 last:mb-2'>
                                      <Link
                                        href='https://www.circulaw.nl/European_green_deal.pdf'
                                        onClick={() => setMobileMenuIsOpen(false)}
                                        className='flex h-10 flex-row items-center justify-center'
                                      >
                                        <IconFileDownload className='mr-2 h-5 w-5 text-green-400' />
                                        EU Green Deal
                                      </Link>
                                    </li>
                                  </ul>
                                </DisclosurePanel>
                              </>
                            </Disclosure>

                            <Disclosure>
                              <>
                                <DisclosureButton className='heading-xl-semibold group flex w-full flex-row items-center border-t py-4 text-left text-cl-black data-[open]:text-green-500'>
                                  Over CircuLaw
                                  <IconChevronDown className='ml-2 mt-1 h-5 w-5 group-data-[open]:rotate-180' />
                                </DisclosureButton>
                                <DisclosurePanel className='ml-4'>
                                  <ul>
                                    {props?.aboutSlugs?.map((aboutPage) => (
                                      <li
                                        key={aboutPage?.slug}
                                        className='p-base my-2 flex h-10 cursor-pointer items-center text-green-500 last:mb-2'
                                      >
                                        <Link
                                          href={`/over/${aboutPage?.slug}`}
                                          onClick={() => setMobileMenuIsOpen(false)}
                                        >
                                          {aboutPage.pageTitle}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </DisclosurePanel>
                              </>
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
                            <div className='flex w-full flex-row items-start justify-start pt-4'>
                              <Link
                                href='/zoeken'
                                className='heading-xl-semibold flex flex-row items-center justify-center text-cl-black'
                                onClick={() => setMobileMenuIsOpen(false)}
                              >
                                <span className='mr-2'>Zoeken </span>
                                <span className='flex h-6 w-7 items-center justify-center rounded-clSm bg-cl-black text-green-100'>
                                  <IconSearch className='h-4 w-4' />
                                </span>
                              </Link>
                              <LangSwitch
                                translateOpen={props.translateOpen}
                                setTranslateOpen={props.setTranslateOpen}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </FloatingFocusManager>
                  </FloatingOverlay>
                )}
              </div>

              {/* Desktop nav */}
              <div className='mb-7 hidden flex-row items-center justify-between lgNav:flex'>
                <div className=''>
                  <button
                    className='p-sm group relative z-100 mr-6 flex h-full flex-row items-center lg:mr-6'
                    ref={mainMenuRef.setReference}
                    {...mainMenuReferencProps()}
                  >
                    <span
                      className={`${
                        mainMenuIsOpen === true
                          ? [`${pathname === '/' ? 'text-green-300' : 'text-green-500'}`]
                          : [
                              `${
                                pathname === '/'
                                  ? 'text-white group-hover:decoration-green-300'
                                  : 'text-cl-black group-hover:decoration-green-500'
                              }`,
                            ]
                      } p-base group-hover:underline`}
                    >
                      Productketens
                    </span>
                    <IconChevronDown
                      className={`${
                        mainMenuIsOpen
                          ? [
                              `${
                                pathname === '/'
                                  ? 'rotate-180 text-green-300'
                                  : 'rotate-180 text-green-500'
                              }`,
                            ]
                          : [
                              `${
                                pathname === '/'
                                  ? 'text-white group-hover:text-green-300'
                                  : 'group-hover:text-green-500'
                              }`,
                            ]
                      } ml-2 h-5 w-5`}
                    />
                  </button>
                  {mainMenuIsMounted && (
                    <FloatingFocusManager context={mainMenuContext} modal={true} disabled>
                      <div
                        ref={mainMenuRef.setFloating}
                        style={mainMenuStyles}
                        {...mainMenuFloatingProps()}
                        className='-z-10 w-full'
                      >
                        <div
                          className='h-full shadow-lg'
                          style={{ ...mainMenuTransitionStyles }}
                          // onMouseLeave={() => setMainMenuIsOpen(false)}
                        >
                          <div
                            className={`${
                              pathname === '/' ? 'bg-green-100' : 'bg-green-500'
                            } flex-cols-5 relative flex h-full gap-[1px]`}
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
                    className='p-sm group relative z-100 mr-6 flex h-full flex-row items-center lg:mr-8'
                  >
                    <span
                      className={`${
                        euMenuIsOpen === true
                          ? [`${pathname === '/' ? 'text-green-300' : 'text-green-500'}`]
                          : [
                              `${
                                pathname === '/'
                                  ? 'text-white group-hover:decoration-green-300'
                                  : 'text-cl-black group-hover:decoration-green-500'
                              }`,
                            ]
                      } p-base group-hover:underline`}
                    >
                      EU wetgeving
                    </span>
                    <IconChevronDown
                      className={`${
                        euMenuIsOpen
                          ? [
                              `${
                                pathname === '/'
                                  ? 'rotate-180 text-green-300'
                                  : 'rotate-180 text-green-500'
                              }`,
                            ]
                          : [
                              `${
                                pathname === '/'
                                  ? 'text-white group-hover:text-green-300'
                                  : 'group-hover:text-green-500'
                              }`,
                            ]
                      } ml-2 h-5 w-5`}
                    />
                  </button>
                  {euMenuIsMounted && (
                    <FloatingFocusManager context={euContext} modal={false} disabled>
                      <div
                        ref={euRef.setFloating}
                        style={euStyles}
                        {...euFloatingProps()}
                        className='-z-10 h-auto w-72'
                      >
                        <div
                          className={`${
                            pathname === '/' ? 'bg-green-500' : 'bg-green-100'
                          } h-full pb-10 pl-6 pr-8 pt-8 shadow-lg`}
                          style={{ ...euMenuTransitionStyles }}
                          onMouseLeave={() => setEuMenuIsOpen(false)}
                        >
                          <div
                            className={`${
                              pathname === '/'
                                ? 'text-white'
                                : 'text-green-500 hover:text-green-500'
                            } p-xs active:p-xs-semibold mb-2 cursor-pointer hover:underline active:no-underline`}
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
                                  : 'text-green-500 hover:text-green-500'
                              } p-xs active:p-xs-semibold mb-2 cursor-pointer hover:underline active:no-underline`}
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
                          <div
                            className={`${
                              pathname === '/'
                                ? 'border-green-300 text-green-300'
                                : 'border-green-400 text-green-400'
                            } p-xs active:p-xs-semibold mt-4 cursor-pointer border-t pt-3 hover:underline active:no-underline`}
                          >
                            <Link
                              href='https://www.circulaw.nl/European_green_deal.pdf'
                              id='navClick'
                              target='_blank'
                              onClick={() => {
                                setEuMenuIsOpen(false);
                                CustomEvent.trackEvent('Nav click', pathname);
                              }}
                              className='flex flex-row items-center justify-start'
                            >
                              <IconFileDownload className='mr-2 h-5 w-5' /> EU Green Deal
                            </Link>
                          </div>
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
                    className='p-sm group relative z-100 mr-6 flex h-full flex-row items-center lg:mr-8'
                  >
                    <span
                      className={`${
                        overMenuIsOpen === true
                          ? [`${pathname === '/' ? 'text-green-300' : 'text-green-500'}`]
                          : [
                              `${
                                pathname === '/'
                                  ? 'text-white group-hover:decoration-green-300'
                                  : 'text-cl-black group-hover:decoration-green-500'
                              }`,
                            ]
                      } p-base group-hover:underline`}
                    >
                      Over CircuLaw
                    </span>
                    <IconChevronDown
                      className={`${
                        overMenuIsOpen
                          ? [
                              `${
                                pathname === '/'
                                  ? 'rotate-180 text-green-300'
                                  : 'rotate-180 text-green-500'
                              }`,
                            ]
                          : [
                              `${
                                pathname === '/'
                                  ? 'text-white group-hover:text-green-300'
                                  : 'group-hover:text-green-500'
                              }`,
                            ]
                      } ml-2 h-5 w-5`}
                    />
                  </button>
                  {overMenuIsMounted && (
                    <FloatingFocusManager context={overContext} modal={false} disabled>
                      <div
                        ref={overRef.setFloating}
                        style={overStyles}
                        {...overFloatingProps()}
                        className='-z-10 h-auto w-72'
                      >
                        <div
                          className={`${
                            pathname === '/' ? 'bg-green-500' : 'bg-green-100'
                          } h-full pb-10 pl-6 pr-8 pt-8 shadow-lg`}
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
                                  : 'text-green-500 hover:text-green-500'
                              } p-xs active:p-xs-semibold mb-2 cursor-pointer hover:underline active:no-underline`}
                            >
                              <Link
                                href={`/over/${aboutPage?.slug}`}
                                id='navClick'
                                onClick={() => {
                                  setOverMenuIsOpen(false);
                                  CustomEvent.trackEvent(
                                    'Nav click',
                                    pathname,
                                    aboutPage.pageTitle,
                                  );
                                }}
                              >
                                {aboutPage.pageTitle}
                              </Link>
                            </div>
                          ))}
                        </div>
                      </div>
                    </FloatingFocusManager>
                  )}
                </div>

                <DesktopSimpleButton name='Nieuws' url='/nieuws' />
                <DesktopSimpleButton name='FAQ' url='/vraag-en-antwoord' />
                <DesktopSimpleButton name='Contact' url='/contact' />

                {/* SEARCH MENU */}

                <div
                  className={`${pathname?.includes('/search') ? 'hidden' : 'block'} ml-6 lg:ml-8`}
                >
                  <button
                    className='p-sm group relative z-100 flex h-full w-full flex-row items-center'
                    ref={searchMenuRef.setReference}
                    {...searchMenuReferencProps()}
                    aria-label='Open search CircuLaw feature'
                  >
                    <span
                      className={`${
                        searchMenuIsOpen === true
                          ? [
                              `${
                                pathname === '/'
                                  ? 'bg-green-100 text-green-500'
                                  : 'bg-green-500 text-green-100'
                              }`,
                            ]
                          : [
                              `${
                                pathname === '/'
                                  ? 'bg-green-100 text-green-500'
                                  : 'bg-green-500 text-green-100'
                              }`,
                            ]
                      } flex h-6 w-7 items-center justify-center rounded-clSm`}
                    >
                      <IconSearch className='h-4 w-4' />
                    </span>
                  </button>
                  {searchMenuIsMounted && (
                    <FloatingFocusManager context={mainMenuContext} modal={true} disabled>
                      <div
                        ref={searchMenuRef.setFloating}
                        style={searchMenuStyles}
                        {...searchMenuFloatingProps()}
                        className='-z-10 h-72 w-full'
                      >
                        <div
                          className='h-full shadow-lg'
                          style={{ ...searchMenuTransitionStyles }}
                          onMouseLeave={() => setSearchMenuIsOpen(false)}
                        >
                          <div
                            className={`${
                              pathname === '/' ? 'bg-green-500' : 'bg-green-100'
                            } h-full`}
                          >
                            {/* MAKE INTO A COMPONENT */}
                            <div className='global-margin flex h-full w-full flex-col items-center justify-end pb-10'>
                              <div className='h-16 w-[600px]'>
                                <form
                                  onSubmit={() => setSearchMenuIsOpen(false)}
                                  className={`${
                                    pathname === '/' ? 'bg-green-500' : 'bg-green-100'
                                  } relative flex h-[66px] w-[600px] flex-row items-center justify-between rounded-cl`}
                                  onKeyDown={(e) => {
                                    if (e.key === 'Enter') enterClick(e);
                                  }}
                                >
                                  <input
                                    className={`${
                                      pathname === '/'
                                        ? 'bg-green-100/50 text-white caret-white placeholder:text-white focus:bg-[url("/search-icon.png")] focus:bg-[length:24px_24px] focus:ring-white'
                                        : 'bg-white text-green-500 caret-green-500 shadow-card placeholder:text-green-500 focus:bg-[url("/search-icon-dark-hq.png")] focus:bg-[length:24px_24px] focus:ring-green-500'
                                    } p-base placeholder:p-base-semibold h-[66px] w-[600px] rounded-cl border-none bg-left bg-no-repeat pl-12 [background-position-x:10px] focus:ring-1`}
                                    placeholder={placeholder}
                                    onChange={onChange()}
                                  />
                                  <Suspense>
                                    <SearchButton
                                      linkRef={linkRef}
                                      searchIndex={searchIndex}
                                      searchQuery={searchQuery}
                                      closeSerchMenu={closeSerchMenu}
                                    />
                                  </Suspense>
                                  <button
                                    type='reset'
                                    title='Clear the search query'
                                    className={`${searchQuery === '' ? 'hidden' : ''} ${
                                      pathname === '/' ? 'hover:bg-white/50' : 'hover:bg-green-300'
                                    } group absolute right-28 top-3.5 rounded-full p-2`}
                                    onClick={() => setSearchQuery('')}
                                  >
                                    <IconX
                                      className={`${
                                        pathname === '/' ? 'text-white' : 'text-green-500'
                                      } h-6 w-6`}
                                    />
                                  </button>
                                </form>
                              </div>

                              <div className='mt-4'>
                                <div className='flex w-[600px] flex-row justify-center gap-x-2.5'>
                                  {pathname === '/' ? (
                                    <>
                                      <button
                                        onClick={() => setSearchIndex(0)}
                                        className={`${
                                          searchIndex === 0
                                            ? 'border-b-2 border-white'
                                            : 'border-b-2 border-transparent'
                                        } p-xs-semibold p-2 text-white`}
                                      >
                                        Alle
                                      </button>
                                      <button
                                        onClick={() => setSearchIndex(1)}
                                        className={`${
                                          searchIndex === 1
                                            ? 'border-b-2 border-white'
                                            : 'border-b-2 border-transparent'
                                        } p-xs-semibold p-2 text-white`}
                                      >
                                        Instrumenten
                                      </button>
                                      <button
                                        onClick={() => setSearchIndex(2)}
                                        className={`${
                                          searchIndex === 2
                                            ? 'box-content border-b-2 border-white'
                                            : 'border-b-2 border-transparent'
                                        } p-xs-semibold p-2 text-white`}
                                      >
                                        EU wetgeving
                                      </button>
                                      <button
                                        onClick={() => setSearchIndex(3)}
                                        className={`${
                                          searchIndex === 3
                                            ? 'border-b-2 border-white'
                                            : 'border-b-2 border-transparent'
                                        } p-xs-semibold p-2 text-white`}
                                      >
                                        Over
                                      </button>
                                      <button
                                        onClick={() => setSearchIndex(4)}
                                        className={`${
                                          searchIndex === 4
                                            ? 'border-b-2 border-white'
                                            : 'border-b-2 border-transparent'
                                        } p-xs-semibold p-2 text-white`}
                                      >
                                        Nieuws
                                      </button>
                                    </>
                                  ) : (
                                    <>
                                      <button
                                        onClick={() => setSearchIndex(0)}
                                        className={`${
                                          searchIndex === 0
                                            ? 'border-b-2 border-green-500'
                                            : 'border-b-2 border-transparent'
                                        } p-xs-semibold p-2 text-green-500`}
                                      >
                                        Alle
                                      </button>
                                      <button
                                        onClick={() => setSearchIndex(1)}
                                        className={`${
                                          searchIndex === 1
                                            ? 'border-b-2 border-green-500'
                                            : 'border-b-2 border-transparent'
                                        } p-xs-semibold p-2 text-green-500`}
                                      >
                                        Instrumenten
                                      </button>
                                      <button
                                        onClick={() => setSearchIndex(2)}
                                        className={`${
                                          searchIndex === 2
                                            ? 'border-b-2 border-green-500'
                                            : 'border-b-2 border-transparent'
                                        } p-xs-semibold p-2 text-green-500`}
                                      >
                                        EU wetgeving
                                      </button>
                                      <button
                                        onClick={() => setSearchIndex(3)}
                                        className={`${
                                          searchIndex === 3
                                            ? 'border-b-2 border-green-500'
                                            : 'border-b-2 border-transparent'
                                        } p-xs-semibold p-2 text-green-500`}
                                      >
                                        Over
                                      </button>
                                      <button
                                        onClick={() => setSearchIndex(4)}
                                        className={`${
                                          searchIndex === 4
                                            ? 'border-b-2 border-green-500'
                                            : 'border-b-2 border-transparent'
                                        } p-xs-semibold p-2 text-green-500`}
                                      >
                                        Nieuws
                                      </button>
                                    </>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </FloatingFocusManager>
                  )}
                </div>
                {pathname === '/' ? (
                  <div className='hidden lgNav:block'>
                    <LangSwitch
                      background='dark'
                      translateOpen={props.translateOpen}
                      setTranslateOpen={props.setTranslateOpen}
                    />
                  </div>
                ) : (
                  <div className='hidden lgNav:block'>
                    <LangSwitch
                      translateOpen={props.translateOpen}
                      setTranslateOpen={props.setTranslateOpen}
                    />
                  </div>
                )}
              </div>
            </div>
          </>
        </nav>
      </div>
      {pathname === '/' && (
        <div className='relative -mt-[9rem] min-h-[400px] md:min-h-[886px]'>
          <Image
            src='/home-page/homepage-header.png'
            alt='homepage decoration'
            fill
            sizes='100vw'
            className='z-10 object-cover object-bottom'
            priority={true}
            quality={100}
          />
          <HomepageHeader homePageHeader={props.homePageHeader} />
        </div>
      )}
    </>
  );
}

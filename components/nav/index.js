import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Lottie from 'react-lottie';
import { ChevronDownIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import { Disclosure, Transition } from '@headlessui/react';
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
import CirculawLogo from '@/public/Circulaw_logotype.png';
import logo from '@/public/Circulaw_logotype_home.png';

import LangSwitch from '@/components/nav/lang-switch';
import BetaBanner from '@/components/nav/beta-banner';
import animationData from '@/public/CL_Home_Logo_Loop';
import HomepageHeader from '@/components/homepage-header';
import DesktopNavCard from './desktop-nav-card';
import MobileDisclosure from './mobile-disclosure';
import DesktopSimpleButton from './desktop-simple-button';
import MobileSimpleButton from './mobile-simple-button';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const bouwThemas = [{ name: 'Houtbouw stimuleren', url: '/bouw/houtbouw' }];

// const voedselThemas = [ {name: '', url:''}  ]

const consumptiegoederenThemas = [
  { name: 'Circulaire matrasketen', url: '/consumptie-goederen/matrasketen' },
];

const maakindustrieThemas = [
  { name: 'Circulaire windturbines', url: '/maakindustrie/windturbines' },
];

{
  /* 
const kunststoffenThemas = [
  { name: 'Plastic in de bouw', url: '/kunststoffen/plastic-in-de-bouw' },
];*/
}

export default function Nav3(props) {
  const router = useRouter();

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
            router.pathname === '/'
              ? [
                  `${
                    mainMenuIsMounted || (overMenuIsMounted && scrollEffect === false)
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
              : 'bg-[#F8FBF8] shadow-lg'
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
              {router.pathname === '/' ? (
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
                    <FloatingFocusManager context={mobileContext} modal={false} disabled>
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
                                  {' '}
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
                                        <MobileDisclosure
                                          transitionAgenda='Bouw'
                                          themas={bouwThemas}
                                        />
                                        <MobileDisclosure
                                          transitionAgenda='Consumptiegoederen'
                                          themas={consumptiegoederenThemas}
                                        />

                                        <li className='p-base-semibold text-green-800 py-6 border-b opacity-75'>
                                          Voedsel en biomassa
                                        </li>
                                        <MobileDisclosure
                                          transitionAgenda='Maakindustrie'
                                          themas={maakindustrieThemas}
                                        />
                                        <li className='p-base-semibold text-green-800 py-6 border-b opacity-75'>
                                          Kunststoffen
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
                                            className='p-base h-10 my-2 last:mb-2 text-green-600 cursor-pointer flex items-center'
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
                            <MobileSimpleButton name='Nieuws' url='/over/Nieuws' />
                            <MobileSimpleButton name='Vraag en antwoord' url='/vraag-en-antwoord' />
                            <MobileSimpleButton name='Contact' url='/contact' />

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
                    className='h-full relative p-sm group z-100 mr-8 flex flex-row items-center'
                    ref={mainMenuRef.setReference}
                    {...mainMenuReferencProps()}
                  >
                    <span
                      className={`${
                        mainMenuIsOpen === true
                          ? [`${router.pathname === '/' ? 'text-green-200' : 'text-green-500'}`]
                          : [
                              `${
                                router.pathname === '/'
                                  ? 'text-white group-hover:decoration-green-200'
                                  : 'text-green-800 group-hover:decoration-green-500'
                              }`,
                            ]
                      } group-hover:underline`}
                    >
                      Productketens
                    </span>
                    <ChevronDownIcon
                      className={`${
                        mainMenuIsOpen
                          ? [
                              `${
                                router.pathname === '/'
                                  ? 'text-green-200 rotate-180'
                                  : 'rotate-180 text-green-500'
                              }`,
                            ]
                          : [
                              `${
                                router.pathname === '/'
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
                              router.pathname === '/' ? 'bg-green-500' : 'bg-gray-300'
                            } h-full flex flex-cols-5 gap-[1px] relative`}
                          >
                            <DesktopNavCard transitionAgenda='bouw' themas={bouwThemas} />
                            <DesktopNavCard
                              transitionAgenda='Consumptiegoederen'
                              themas={consumptiegoederenThemas}
                            />
                            {/* Temp card as there is no themas in this transition agenda */}
                            <div
                              className={`${
                                router.pathname === '/'
                                  ? 'bg-green-600 text-gray-100 opacity-80'
                                  : 'bg-grey-100 text-green-800 text-opacity-75'
                              } w-full flex flex-col pl-3 lg:pl-6 pt-8 pr-2`}
                            >
                              <div className='p-lg-semibold '>Voedsel en biomassa</div>
                              <div className=''>
                                <div
                                  className={`${
                                    router.pathname === '/' ? 'text-gray-100' : 'text-gray-600'
                                  } p-xs mt-2 italic`}
                                >
                                  Thema’s voor deze productketen volgen binnenkort
                                </div>
                              </div>
                            </div>
                            <DesktopNavCard
                              transitionAgenda='Maakindustrie'
                              themas={maakindustrieThemas}
                            />
                            <div
                              className={`${
                                router.pathname === '/'
                                  ? 'bg-green-600 text-gray-100 opacity-80'
                                  : 'bg-grey-100 text-green-800 text-opacity-75'
                              } w-full flex flex-col pl-3 lg:pl-6 pt-8 pr-2`}
                            >
                              <div className='p-lg-semibold '>Kunststoffen</div>
                              <div className=''>
                                <div
                                  className={`${
                                    router.pathname === '/' ? 'text-gray-100' : 'text-gray-600'
                                  } p-xs mt-2 italic`}
                                >
                                  Thema’s voor deze productketen volgen binnenkort
                                </div>
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
                          ? [`${router.pathname === '/' ? 'text-green-200' : 'text-green-500'}`]
                          : [
                              `${
                                router.pathname === '/'
                                  ? 'text-white group-hover:decoration-green-200'
                                  : 'text-green-800 group-hover:decoration-green-500'
                              }`,
                            ]
                      } group-hover:underline`}
                    >
                      Over Circulaw
                    </span>
                    <ChevronDownIcon
                      className={`${
                        overMenuIsOpen
                          ? [
                              `${
                                router.pathname === '/'
                                  ? 'text-green-200 rotate-180'
                                  : 'rotate-180 text-green-500'
                              }`,
                            ]
                          : [
                              `${
                                router.pathname === '/'
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
                {/* Refactor */}
                <DesktopSimpleButton name='Nieuws' url='/over/Nieuws' />
                <DesktopSimpleButton name='Vraag en antwoord' url='/vraag-en-antwoord' />
                <DesktopSimpleButton name='Contact' url='/contact' />
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

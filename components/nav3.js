import { useState, useEffect, Fragment } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Lottie from 'react-lottie';
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
} from '@floating-ui/react';

import BetaBanner from './beta-banner';
import animationData from '../public/CL_Home_Logo_Loop';
import logo from '../public/Circulaw_logotype_home.png';
import CirculawLogo from '../public/Circulaw_logotype.png';
import HomepageHeader from '../components/homepage-header';
import { ChevronDownIcon,  MenuIcon  } from '@heroicons/react/outline';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

export default function Nav3(props) {

  const [scrollEffect, setScrollEffect] = useState(false);
  const router = useRouter();

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

      <div
        id='wrapper'
        className={`${
          mainMenuIsOpen === true || overMenuIsOpen === true
            ? 'bg-green-600 transition-colors shadow-lg'
            : 'bg-transparent duration-150 delay-300 transition-colors'
        } z-100 sticky top-0`}
      >
        <nav
          id='parent'
          as='nav'
          className={`${
            scrollEffect === true
              ? [
                  `${
                    router.pathname === '/'
                      ? 'bg-green-600 shadow-lg transition-all duration-150'
                      : 'bg-[#F8FBF8] shadow-lg'
                  }`,
                ]
              : [
                  `${
                    router.pathname === '/'
                      ? 'bg-transparent opacity-85 transition-all duration-150'
                      : 'bg-[#F8FBF8] z-100 transition-all duration-150 shadow-lg'
                  }`,
                ]
          } h-[70px] lgNav:h-[98px] flex flex-row justify-between items-center lgNav:items-end global-padding`}
        >
          <>
            {/* LOGO */}
            <div>
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
              <div className={`${router.pathname === '/' ? 'text-grey-100' : 'text-green-800'}  hidden lgNav:flex justify-end items-center min-w-[10%] mb-5`}>
                <span
                  className={`${router.pathname === '/' ? 'link-interaction-dark-bg ' : 'link-interaction'} ${
                    router.pathname === '/en' ? 'enLink' : 'enLinkSelected'
                  }`}
                >
                  <Link href='/'>NL</Link>
                </span>
                <span className='px-1 enLink'>|</span>
                <span
                  className={`${router.pathname === '/' ? 'link-interaction-dark-bg ' : 'link-interaction'} ${
                    router.pathname === '/en' ? 'enLinkSelected' : 'enLink'
                  }`}
                >
                  <Link href='/en'>EN</Link>
                </span>
              </div>

              {/* Mobile button/NAV */}
              <div className='inset-y-0 float-right flex items-center pt-2 lgNav:hidden'>
                  <div
                    className={`${
                      router.pathname !== '/' ? 'text-green-600' : 'text-grey-100'
                    } 'p-2 rounded-md`}
                  >
                    <span className='sr-only'>Open main menu</span>
                      <MenuIcon className='block h-10 w-10' aria-hidden='true' />
                  </div>
                </div>

              <div className='hidden lgNav:flex flex-row items-center justify-between mb-7'>
                <div className=''>
                  <button
                    className='h-full relative p-sm text-green-800 hover:underline hover:decoration-green-500 group z-100 mr-8 flex flex-row items-center '
                    ref={mainMenuRef.setReference}
                    {...mainMenuReferencProps()}
                  >
                    Productketen
                    <ChevronDownIcon className='h-5 w-5 ml-2 group-hover:text-green-500 '/>
                  </button>

                  {mainMenuIsMounted && (
                    <FloatingFocusManager context={mainMenuContext} modal={false}>
                      <div
                        ref={mainMenuRef.setFloating}
                        style={mainMenuStyles}
                        {...mainMenuFloatingProps()}
                        className='h-72 w-screen -z-10 '
                      >
                        <div
                          className='h-full bg-green-100 shadow-lg'
                          style={{ ...mainMenuTransitionStyles }}
                          onMouseLeave={() => setMainMenuIsOpen(false)}
                        >
                          <div className='bg-white h-full flex flex-cols-5 gap-3 relative'>
                            <div className='w-full h-full bg-green-100 pl-4 lgNav:pl-10 xl:pl-20 3xl:pl-32 pt-8 pr-2 p-lg-semibild text-green-800 mb-2'>
                              Bouw
                              <div className=''>
                                <div
                                  className='p-xs mt-2 text-green-600 hover:text-green-500 hover:underline active:p-xs-semibold active:no-underline cursor-pointer'
                                  onClick={() => router.push('/houtbouw-stimuleren')}
                                >
                                  Houtbow stimuleren
                                </div>
                              </div>
                            </div>
                            <div className='w-full bg-green-100 flex flex-col pl-3 lg:pl-6 pt-8 pr-2'>
                              <div className='p-lg-semibild text-green-800 opacity-50'>
                                Voedsel en biomassa
                              </div>
                         
                            </div>
                            <div className='w-full bg-green-100 flex flex-col pl-3 lg:pl-6 pt-8 pr-2'>
                              <div className='p-lg-semibild break-words text-green-800'>
                                Consumptiegoederen
                              </div>
                              <div className=''>
                                <div
                                  className='p-xs mt-2 text-green-600 hover:text-green-500 hover:underline active:p-xs-semibold active:no-underline cursor-pointer'
                                  onClick={() => router.push('/circulaire-matrasketen')}
                                >
                                 Circulaire matrasketen
                                </div>
                              </div>
                            </div>
                            <div className='w-full bg-green-100 flex flex-col pl-3 lg:pl-6 pt-8 pr-2'>
                              <div className='p-lg-semibild text-green-800'>Maakindustrie</div>
                              <div className=''>
                                <div
                                  className='p-xs mt-2 text-green-600 hover:text-green-500 hover:underline active:p-xs-semibold active:no-underline cursor-pointer'
                                  onClick={() => router.push('/circulaire-windturbines')}
                                >
                                  Circulaire windturbines
                                </div>
                              </div>
                            </div>
                            <div className='w-full bg-green-100 flex flex-col pl-3 lg:pl-6 pt-8 pr-2'>
                              <div className='p-lg-semibild text-green-800'>
                                Kunststoffen
                              </div>
                              <div className=''>
                                <div
                                  className='p-xs mt-2 text-green-600 hover:text-green-500 hover:underline active:p-xs-semibold active:no-underline cursor-pointer'
                                  onClick={() => router.push('/plastic-in-de-bouw')}
                                >
                                  Plastic in de bouw
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
                    className='h-full relative p-sm text-green-800 hover:underline hover:decoration-green-500 group z-100 mr-8 flex flex-row items-center '
                  >
                    Over Circulaw
                    <ChevronDownIcon className='h-5 w-5 ml-2 group-hover:text-green-500 '/>
                  </button>
                  {overMenuIsMounted && (
                    <FloatingFocusManager context={overContext} modal={false}>
                      <div
                        ref={overRef.setFloating}
                        style={overStyles}
                        {...overFloatingProps()}
                        className='h-60 w-60 -z-10 '
                      >
                        <div
                          className='h-full bg-green-100 shadow-lg pl-6 pt-8 pr-8'
                          style={{ ...overMenuTransitionStyles }}
                          onMouseLeave={() => setOverMenuIsOpen(false)}
                        >
                          {props?.aboutSlugs?.map((aboutPage) => (
                            <div key={aboutPage?.slug} className='p-xs mb-2 text-green-600 hover:text-green-500 hover:underline active:p-xs-semibold active:no-underline cursor-pointer' onClick={() => router.push(`/about/${aboutPage?.slug}`)}>
                                {aboutPage.title}
                           </div>
                          ))}
                        </div>
                      </div>
                    </FloatingFocusManager>
                  )}
                </div>
                <div className='h-full relative p-sm text-green-800 hover:underline z-100 mr-8 flex flex-row items-center cursor-pointer'>Nieuws</div>
                <div className='h-full relative p-sm text-green-800 hover:underline z-100 mr-8 flex flex-row items-center cursor-pointer'>Vraag en antwoord</div>
                <div className='h-full relative p-sm text-green-800 hover:underline z-100 flex flex-row items-center cursor-pointer'>Contact</div>
              </div>
            </div>
          </>
        </nav>
      </div>
      {router.pathname === '/' && (
        <div className='-mt-[9.5rem] bg-header bg-cover bg-center'>
          <HomepageHeader homePageHeader={props.homePageHeader} />
        </div>
      )}
    </>
  );
}



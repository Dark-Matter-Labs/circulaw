import { useState } from 'react';
import Link from 'next/link';
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

export default function Nav3() {
  const [mainMenuIsOpen, setMainMenuIsOpen] = useState(false);
  const {
    refs: mainMenuRef,
    floatingStyles: mainMenuStyles,
    context: mainMenuContext,
  } = useFloating({
    placement: 'bottom',
    open: mainMenuIsOpen,
    onOpenChange: setMainMenuIsOpen,
    middleware: [offset(36), flip(), shift()],
  });

  const { isMounted: mainMenuIsMounted, styles: mainMenuTransitionStyles } = useTransitionStyles(
    mainMenuContext,
    {
        duration: 300,
        initial: {
          transform: 'translateY(-100%)',
        },
        open: {
          transform: 'translateY(0)',
        },
        close: {
          transform: 'translateY(-100%)',
        },
      },
  );

  const [overMenuIsOpen, setOverMenuIsOpen] = useState(false);
  const {
    refs: overRef,
    floatingStyles: overStyles,
    context: overContext,
  } = useFloating({
    placement: 'bottom-start',
    open: overMenuIsOpen,
    onOpenChange: setOverMenuIsOpen,
    middleware: [offset(36), flip(), shift()],
  });

  const { isMounted: overMenuIsMounted, styles: overMenuTransitionStyles } = useTransitionStyles(
    overContext,
    {
      duration: 300,
      initial: {
        transform: 'translateY(-100%)',
      },
      open: {
        transform: 'translateY(0)',
      },
      close: {
        transform: 'translateY(-100%)',
      },
    },
  );

 

  const mainMenuClick = useClick(mainMenuContext);
  const mainMenuDismiss = useDismiss(mainMenuContext);
  const mainMenuRole = useRole(mainMenuContext);

  const { getReferenceProps: mainMenuReferencProps, getFloatingProps: mainMenuFloatingProps } =
    useInteractions([mainMenuClick, mainMenuDismiss, mainMenuRole]);

  const overMenuClick = useClick(overContext);
  const overMenuDismiss = useDismiss(overContext);
  const overMenuRole = useRole(overContext);

  const { getReferenceProps: overReferenceProps, getFloatingProps: overFloatingProps } =
    useInteractions([overMenuClick, overMenuDismiss, overMenuRole]);

  return (
    <>
      <div className='flex justify-center -mb-9 relative z-110' name='top'>
        <BetaBanner />
      </div>

      <div id='wrapper' className='z-90 sticky top-0 bg-green-200'>
        <nav
          id='parent'
          as='nav'
          className='h-[98px] shadow-lg bg-green-200 flex flex-row justify-between global-padding'
        >
          <>
            <div>Logo</div>
            <div className='flex flex-row items-center'>
              <div>
                <button
                  className='border h-full hover:bg-red-200 relative z-100 mr-8'
                  ref={mainMenuRef.setReference}
                  {...mainMenuReferencProps()}
                >
                  Productketen
                </button>
                  <FloatingFocusManager context={mainMenuContext} modal={false}>
                    <div
                      ref={mainMenuRef.setFloating}
                      style={mainMenuStyles}
                      {...mainMenuFloatingProps()}
                      id='child'
                      className='h-72 w-screen -z-10 shadow-lg'
                    >
                      {mainMenuIsMounted && (
                        <div className='h-full' style={{ ...mainMenuTransitionStyles }}>
                          <div className='bg-white shadow-lg h-full grid grid-cols-5 gap-3 relative'>
                            <div className='w-full h-full bg-green-100 flex flex-col pl-4 lgNav:pl-10 xl:pl-20 3xl:pl-32 pt-8 pr-2'>
                              <div className='p-lg-semibild text-green-800 mb-2'>Bouw</div>
                              <Link href='/'>
                                <div className='text-green-600 p-xs hover:underline active:font-semibold'>
                                  Houtbouw
                                </div>
                              </Link>
                            </div>
                            <div className='w-full h-full bg-green-100 flex flex-col pl-3 lg:pl-6 pt-8 pr-2'>
                              <div className='p-lg-semibild text-green-800'>
                                Voedsel en biomassa
                              </div>
                            </div>
                            <div className='w-full h-full bg-green-100 flex flex-col pl-3 lg:pl-6 pt-8 pr-2'>
                              <div className='p-lg-semibild break-words text-green-800'>
                                Consumptiegoederen
                              </div>
                            </div>
                            <div className='w-full h-full bg-green-100 flex flex-col pl-3 lg:pl-6 pt-8 pr-2'>
                              <div className='p-lg-semibild text-green-800'>Maakindustrie</div>
                            </div>
                            <div className='w-full h-full bg-green-100 flex flex-col pl-3 lg:pl-6 pt-8 pr-2'>
                              <div className='p-lg-semibild text-green-800 opacity-50'>
                                Kunststoffen
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </FloatingFocusManager>
              </div>
              <div className=''>
                <button
                  ref={overRef.setReference}
                  {...overReferenceProps()}
                  className='border h-full hover:bg-red-200 relative z-100 mr-8'
                >
                  Over Circulaw
                  {console.log(overMenuIsMounted)}
                </button>
              
                  <FloatingFocusManager context={overContext} modal={false}>
                    <div
                      ref={overRef.setFloating}
                      style={overStyles}
                      {...overFloatingProps()}
                      className='h-72 w-56 -z-10 '
                    >
                      {overMenuIsMounted && (
                        <div
                          className='h-full bg-red-800 shadow-lg'
                          style={{ ...overMenuTransitionStyles }}
                        >
                          panel
                        </div>
                      )}
                    </div>
                  </FloatingFocusManager>
            
              </div>

              <div>faq</div>
              <div>contact</div>
              <div>new</div>
            </div>
          </>
        </nav>
      </div>
    </>
  );
}

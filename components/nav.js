import Link from 'next/link';
import Image from 'next/image';
import { Fragment } from 'react';
import { Popover, Disclosure, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { ChevronDownIcon } from '@heroicons/react/solid';

import { get_waardeketens, get_over } from '../utils/nav_structure';
import CirculawLogo from '../public/Circulaw_logotype.png';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const waardeketens = get_waardeketens();
const over = get_over();

export default function Nav() {
  return (
    <Disclosure as='nav' className='sticky top-0 z-40 bg-blush2'>
      {({ open }) => (
        <>
          <div className='lg:py-8 global-margin'>
            <div className=''>
              <div className='inset-y-0 float-right flex items-center lg:hidden'>
                {/* Mobile menu button */}
                <Disclosure.Button className=' p-2 rounded-md text-green1 '>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XIcon className='block h-10 w-10' aria-hidden='true' />
                  ) : (
                    <MenuIcon className='block h-10 w-10' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
              <div className='flex items-baseline sm:justify-start '>
                <div className='hidden lg:block md:py-5 lg:py-0'>
                  <Link href='/'>
                    <a className=''>
                      <Image
                        height={46}
                        width={250}
                        src={CirculawLogo}
                        alt='CircuLaw logo'
                        quality={100}
                      />
                    </a>
                  </Link>
                </div>
                <div className='block lg:hidden py-4 '>
                  <Link href='/'>
                    <a className=''>
                      <Image
                        height={24}
                        width={120}
                        src={CirculawLogo}
                        alt='CircuLaw logo'
                        quality={100}
                      />
                    </a>
                  </Link>
                </div>
                <div className='hidden lg:ml-6 lg:flex'>
                  <div className='flex inset-x-0 top-0 pl-5 invisible lg:visible hidden lg:inline '>
                    <div className='flex-1 global-margin'>
                      <div className='content right-0'>
                        <div className='relative flex items-center justify-between font-manrope font-semibold'>
                          <div className=''>
                            <Popover className='inline-block relative '>
                              {({ open }) => (
                                <>
                                  <Popover.Button
                                    className={classNames(
                                      open ? 'text-black' : 'text-black',
                                      'group rounded-md inline-flex items-center text-base font-medium',
                                    )}
                                  >
                                    <span className='uppercase'>Thema&apos;s</span>
                                    <ChevronDownIcon
                                      className={classNames(
                                        open ? 'text-gray-600' : 'text-gray-400',
                                        'ml-2 h-5 w-5 group-hover:text-gray-500',
                                      )}
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
                                          {waardeketens.map((item) => (
                                            <a
                                              key={item.name}
                                              href={item.href}
                                              className='-m-3 p-3 block rounded-md hover:bg-gray-50 transition ease-in-out duration-150 border-b uppercase dropdown-menu'
                                            >
                                              <p
                                                className={`text-base font-medium text-gray-900 ${item.className}`}
                                              >
                                                {item.name}
                                              </p>
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
                                    className={classNames(
                                      open ? 'text-black' : 'text-black',
                                      'group rounded-md inline-flex items-center text-base font-medium',
                                    )}
                                  >
                                    <span className='uppercase pl-8'>OVER CIRCULAW</span>
                                    <ChevronDownIcon
                                      className={classNames(
                                        open ? 'text-gray-600' : 'text-gray-400',
                                        'ml-2 h-5 w-5 group-hover:text-gray-500',
                                      )}
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
                                          {over.map((item) => (
                                            <a
                                              key={item.name}
                                              href={item.href}
                                              className='-m-3 p-3  block rounded-md hover:bg-gray-50 transition ease-in-out duration-150 uppercase dropdown-menu border-b'
                                            >
                                              <p
                                                className={`text-base font-medium text-gray-900 ${item.className}`}
                                              >
                                                {item.name}
                                              </p>
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
                              <Link href='/hoe-het-werkt'>
                                <a className='uppercase pl-8 text-black group rounded-md inline-flex items-center text-base font-medium'>
                                  VRAAG & ANTWOORD
                                </a>
                              </Link>
                            </div>
                            <div className='inline-block relative '>
                              <Link href='/contact'>
                                <a className='uppercase pl-8 text-black group rounded-md inline-flex items-center text-base font-medium'>
                                  CONTACT
                                </a>
                              </Link>
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
          <Disclosure.Panel className='lg:hidden bg-blush2'>
            <div className='pt-2 pb-4 menu-title-mobile'>
              <Disclosure.Button
                as='span'
                className='uppercase  text-black1  border-t block pl-3 pr-4 py-5 font-semibold'
              >
                Thema&apos;s
              </Disclosure.Button>
              <Disclosure.Button
                as='a'
                href='/houtbouw'
                className='ml-5 border-transparent text-gray-900 pl-8 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-5 text-base'
              >
                Houtbouw
              </Disclosure.Button>
              <Disclosure.Button
                as='a'
                href='/circulaire-windturbines'
                className='ml-5 border-transparent text-gray-900 border-b border-blush3 pl-8 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-5 text-base'
              >
                Circulaire windturbines
              </Disclosure.Button>
              <Disclosure.Button
                as='span'
                className='uppercase  text-black1  border-t block pl-3 pr-4 py-5 font-semibold'
              >
                Over CircuLaw
              </Disclosure.Button>
              <Disclosure.Button
                as='a'
                href='/waarom-circulaw'
                className='ml-5 border-transparent text-gray-900 pl-8 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-5 text-base'
              >
                Waarom CircuLaw?
              </Disclosure.Button>
              <Disclosure.Button
                as='a'
                href='/wat-is-circulaw'
                className='ml-5 border-transparent text-gray-900 pl-8 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-5 text-base'
              >
                Wat is CircuLaw?
              </Disclosure.Button>
              <Disclosure.Button
                as='a'
                href='/status-en-ambities'
                className='ml-5 border-transparent text-gray-900 pl-8 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-5 text-base'
              >
                Status en ambities
              </Disclosure.Button>
              <Disclosure.Button
                as='a'
                href='/wetsanalyse-met-circulaire-blik'
                className='ml-5 border-transparent text-gray-900 pl-8 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-5 text-base'
              >
                Wetsanalyse met circulaire blik
              </Disclosure.Button>
              <Disclosure.Button
                as='a'
                href='/wie-maken-circulaw'
                className='ml-5 border-transparent text-gray-900 border-b border-blush3 pl-8 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-5 text-base'
              >
                Wie maken CircuLaw?
              </Disclosure.Button>
              <Disclosure.Button
                as='a'
                href='/hoe-het-werkt'
                className='uppercase text-black1  border-b border-blush3 block pl-3 pr-4 py-5 font-semibold'
              >
                Vraag en Antwoord
              </Disclosure.Button>
              <Disclosure.Button
                as='a'
                href='/contact'
                className='uppercase text-black1  border-b border-blush3 block pl-3 pr-4 py-5 font-semibold'
              >
                Contact
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

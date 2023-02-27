import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/dist/client/router';
import { Fragment } from 'react';
import { Popover, Disclosure, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { ChevronDownIcon } from '@heroicons/react/solid';
import Lottie from 'react-lottie';
import HomepageHeader from './homepage-header';
import { get_waardeketens } from '../utils/nav-structure';
import CirculawLogo from '../public/Circulaw_logotype.png';
import logo from '../public/Circulaw_logotype_home.png';

import BetaBanner from './beta-banner';
import NieuwTooltip from '../components/nieuw-tooltip';
import animationData from '../public/CL_Home_Logo_Loop';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const waardeketens = get_waardeketens();

export default function Nav(props) {
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
          <BetaBanner type='home' />
          <div className='py-4 global-margin flex justify-start items-center'>
            <div className='hidden lg:block'>
              <Link href='/'>
                <Image height={86} width={162} src={logo} alt='CircuLaw logo' quality={100} />
              </Link>
            </div>
            <div className='block lg:hidden'>
              <Link href='/'>
                <Image height={24} width={120} src={logo} alt='CircuLaw logo' quality={100} />
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }

  if (router.pathname !== '/') {
    return (
      /* TODO: add case for navbar to work on homepage and remove the custom navbar on homepage */
      /* I used the router.pathname to display the two different nav on the home page was nested in the div containing the background image and text 'regelgeving voor een...'*/
      /* The alternative would be to remove the navbar completely from the div containing the background image but then need to play around with the css a bit more */
      /* The navbar from the homepage starts at line 287 */
      <Disclosure as='nav' className='sticky top-0 z-40 bg-black-white-200 shadow-lg'>
        {({ open }) => (
          <>
            <div className='lg:pb-4 global-margin'>
              <BetaBanner type='gen' />
              <div className=''>
                <div className='inset-y-0 float-right flex items-center lg:hidden'>
                  {/* Mobile menu button */}
                  <Disclosure.Button className=' p-2 rounded-md text-green-600 '>
                    <span className='sr-only'>Open main menu</span>
                    {open ? (
                      <XIcon className='block h-10 w-10' aria-hidden='true' />
                    ) : (
                      <MenuIcon className='block h-10 w-10 mt-7' aria-hidden='true' />
                    )}
                  </Disclosure.Button>
                </div>
                <div className='flex items-center justify-between'>
                  <div className='hidden lg:block '>
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
                  <div className='block lg:hidden py-4 '>
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
                  <div className='hidden lg:ml-10 xl:ml-32 lg:flex lg:mt-6'>
                    <div className='flex inset-x-0 top-0 pl-5 invisible lg:visible hidden lg:inline '>
                      <div className='flex-1 global-margin'>
                        <div className='content right-0'>
                          <div className='relative flex items-center justify-between'>
                            <div className=''>
                              <Popover className='inline-block relative '>
                                {({ open }) => (
                                  <>
                                    <Popover.Button
                                      className={classNames(
                                        open ? 'text-black-white-800' : 'text-black-white-800',
                                        'group rounded-md inline-flex items-center ',
                                      )}
                                    >
                                      <h5 className='uppercase mobile sm:desktop'>Thema&apos;s</h5>
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
                                                className='-m-3 p-3 block rounded-md hover:bg-gray-50 transition ease-in-out duration-150 border-b uppercase'
                                              >
                                                <h6
                                                  className={` popup-base text-gray-900 ${item.className}`}
                                                >
                                                  {item.name}
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
                                      className={classNames(
                                        open ? 'text-black-white-800' : 'text-black-white-800',
                                        'group rounded-md inline-flex items-center',
                                      )}
                                    >
                                      <h5 className='uppercase pl-8 mobile sm:desktop'>
                                        OVER CIRCULAW
                                      </h5>
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
                                            {aboutSlugs?.map((slug) => (
                                              <Link
                                                key={slug}
                                                href={`/about/${encodeURIComponent(slug)}`}
                                                className='-m-3 p-3  block rounded-md hover:bg-gray-50 transition ease-in-out duration-150 uppercase border-b'
                                              >
                                                <h6 className='` popup-base text-black-white-800'>
                                                  {slug.replaceAll('-', ' ')}
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
                                <Link href={`/about/${encodeURIComponent(FAQslug)}`}>
                                  <h5 className='uppercase pl-8 text-black-white-800 group rounded-md inline-flex items-center mobile sm:desktop mobile sm:desktop'>
                                    VRAAG & ANTWOORD
                                  </h5>
                                </Link>
                              </div>
                              <div className='inline-block relative '>
                                <Link href='/contact'>
                                  <h5 className='uppercase pl-8 text-black-white-800 group rounded-md inline-flex items-center mobile sm:desktop mobile sm:desktop'>
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
            <Disclosure.Panel className='lg:hidden bg-black-white-200 pt-2 pb-4 ml-5'>
              <Disclosure.Button
                as='span'
                className='uppercase text-black-white-800  block pl-3 pr-4 py-4'
              >
                Thema&apos;s
              </Disclosure.Button>
              {waardeketens.map((item) => (
                <>
                  <Disclosure.Button
                    as='span'
                    className='border-transparent table-base text-green-600 pl-8 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-4'
                  >
                    <Link href={item.href}>{item.name}</Link>
                  </Disclosure.Button>
                </>
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
                  key={slug}
                  onClick={() => {
                    router.push(`/about/${encodeURIComponent(slug)}`);
                  }}
                  className='cursor-pointer border-transparent table-base text-green-600 pl-8 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-4 first-letter:uppercase'
                >
                  {slug.replaceAll('-', ' ')}
                </Disclosure.Button>
              ))}
              <hr className='my-4 mx-2 border-green-600' />
              <Disclosure.Button
                as='a'
                onClick={() => {
                  router.push(`/about/${encodeURIComponent(FAQslug)}`);
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
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    );
  }
  return (
    <div className='bg-header'>
      <BetaBanner type='home' />
      <div className=' pb-16 sm:pb-24'>
        <Disclosure as='nav' className=' '>
          {({ open }) => (
            <>
              <div className='global-margin'>
                <div className=''>
                  <div className='inset-y-0 float-right flex items-center lg:hidden'>
                    {/* Mobile menu button */}
                    <Disclosure.Button className='p-2 rounded-md text-black-white-200 '>
                      <span className='sr-only'>Open main menu</span>
                      {open ? (
                        <XIcon className='block h-10 w-10' aria-hidden='true' />
                      ) : (
                        <MenuIcon className='block h-10 w-10 mt-6' aria-hidden='true' />
                      )}
                    </Disclosure.Button>
                  </div>
                  <div className='flex items-center'>
                    <div className='hidden lg:block md:py-5 lg:py-0'>
                      <Link href='/'>
                        <Lottie options={defaultOptions} height={150} width={250} />
                      </Link>
                    </div>
                    <div className='block lg:hidden py-4'>
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
                    <div className='hidden lg:ml-10 xl:ml-32 lg:flex lg:mt-6'>
                      <div className='flex inset-x-0 top-0 pl-5 invisible lg:visible hidden lg:inline '>
                        <div className='flex-1 global-margin px-2 sm:px-6 lg:px-8'>
                          <div className='content right-0'>
                            <div className='relative flex items-center justify-between'>
                              <div className=''>
                                <Popover className='inline-block relative '>
                                  {({ open }) => (
                                    <>
                                      <Popover.Button
                                        className={classNames(
                                          open ? 'text-black-white-200' : 'text-black-white-200',
                                          'group rounded-md inline-flex items-center',
                                        )}
                                      >
                                        <h5 className='uppercase mobile sm:desktop'>
                                          Thema&apos;s
                                        </h5>
                                        <ChevronDownIcon
                                          className={classNames(
                                            open ? 'text-black-white-200' : 'text-black-white-200',
                                            'ml-2 h-5 w-5',
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
                                                  className='-m-3 p-3 block rounded-md hover:bg-gray-50 transition ease-in-out duration-150 border-b uppercase'
                                                >
                                                  <h6
                                                    className={` popup-base text-gray-900 ${item.className}`}
                                                  >
                                                    {item.name}
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
                                        className={classNames(
                                          open ? 'text-black-white-200' : 'text-black-white-200',
                                          'group rounded-md inline-flex items-center',
                                        )}
                                      >
                                        <h5 className='uppercase pl-8 mobile sm:desktop'>
                                          OVER CIRCULAW
                                        </h5>
                                        <ChevronDownIcon
                                          className={classNames(
                                            open ? 'text-black-white-200' : 'text-black-white-200',
                                            'ml-2 h-5 w-5 group-hover:black-white-200',
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
                                              {aboutSlugs?.map((slug) => (
                                                <Link
                                                  key={slug}
                                                  href={`/about/${encodeURIComponent(slug)}`}
                                                  className='-m-3 p-3 block rounded-md hover:bg-gray-50 transition ease-in-out duration-150 uppercase border-b'
                                                >
                                                  <h6 className=' popup-base text-gray-900'>
                                                    {slug.replaceAll('-', ' ')}
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
                                  <Link href={`/about/${encodeURIComponent(FAQslug)}`}>
                                    <h5 className='uppercase pl-8 text-black-white-200 group rounded-md inline-flex items-center mobile sm:desktop'>
                                      VRAAG & ANTWOORD
                                    </h5>
                                  </Link>
                                </div>
                                <div className='inline-block relative '>
                                  <Link href='/contact'>
                                    <h5 className='uppercase pl-8 text-black-white-200 group rounded-md inline-flex items-center mobile sm:desktop'>
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
              <Disclosure.Panel className='lg:hidden bg-black-white-200'>
                <div className='pt-2 pb-4 ml-5'>
                  <Disclosure.Button
                    as='span'
                    className='uppercase text-black-white-800  block pl-3 pr-4 py-4'
                  >
                    Thema&apos;s
                  </Disclosure.Button>

                  {waardeketens.map((item) => (
                    <>
                      <Disclosure.Button
                        as='span'
                        className='border-transparent table-base text-green-600 pl-8 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-4'
                      >
                        <Link href={item.href}>{item.name}</Link>
                      </Disclosure.Button>
                    </>
                  ))}
                  <Disclosure.Button
                    as='span'
                    className='uppercase text-black-white-800 block pl-3 pr-4 py-4'
                  >
                    Over CircuLaw
                  </Disclosure.Button>
                  {aboutSlugs?.map((slug) => (
                    <Disclosure.Button
                      key={slug}
                      as='span'
                      className='border-transparent table-base text-green-600 pl-8 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-4 first-letter:uppercase'
                    >
                      <Link href={`/about/${encodeURIComponent(slug)}`}>
                        {slug.replaceAll('-', ' ')}
                      </Link>
                    </Disclosure.Button>
                  ))}
                  <hr className='my-4 mx-2 border-green-600' />
                  <Disclosure.Button
                    as='span'
                    className='uppercase text-black-white-800  block pl-3 pr-2 py-4'
                  >
                    <Link href={`/about/${encodeURIComponent(FAQslug)}`}>Vraag en Antwoord</Link>
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

        <HomepageHeader />
      </div>
    </div>
  );
}

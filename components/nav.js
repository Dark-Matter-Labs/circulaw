import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/dist/client/router';
import { Fragment, useEffect, useState } from 'react';
import { Popover, Disclosure, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { Link as ScrollLink } from 'react-scroll';
import { groq } from 'next-sanity';
import useSWR from 'swr';
import { get_waardeketens } from '../utils/nav-structure';
import CirculawLogo from '../public/Circulaw_logotype.png';
import logo from '../public/Circulaw_logotype_home.png';
import CustomButton from './custom-button';
import BetaBanner from './beta-banner';
import BetaBannerGen from './beta-banner-gen';
import client from '../lib/sanity';
import NieuwTooltip from '../components/nieuw-tooltip';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const waardeketens = get_waardeketens();

export default function Nav() {
  const { data } = useSWR(groq`*[_type == "aboutPage"] | order(order asc)`, (query) =>
    client.fetch(query),
  );
  const [slugs, setSlugs] = useState();
  useEffect(() => setSlugs(data?.map((page) => page.slug.current)), [data]);

  const aboutSlugs = slugs?.filter((e) => e !== 'vraag-&-antwoord');
  const FAQslug = 'vraag-&-antwoord';

  const router = useRouter();
  if (router.pathname !== '/') {
    return (
      /* TODO: add case for navbar to work on homepage and remove the custom navbar on homepage */
      /* I used the router.pathname to display the two different nav on the home page was nested in the div containing the background image and text 'regelgeving voor een...'*/
      /* The alternative would be to remove the navbar completely from the div containing the background image but then need to play around with the css a bit more */
      /* The navbar from the homepage starts at line 287 */
      <Disclosure as='nav' className='sticky top-0 z-40 bg-black-white-200'>
        {({ open }) => (
          <>
            <div className='lg:pb-8 global-margin'>
              <BetaBannerGen />
              <div className=''>
                <div className='inset-y-0 float-right flex items-center lg:hidden'>
                  {/* Mobile menu button */}
                  <Disclosure.Button className=' p-2 rounded-md text-green-600 '>
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
                      <Image
                        height={46}
                        width={250}
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
                  <div className='hidden lg:ml-6 lg:flex'>
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
                              {/* TESST NAV */}
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
            <Disclosure.Panel className='lg:hidden bg-black-white-200'>
              <div className='pt-2 pb-4 ml-5'>
                <Disclosure.Button
                  as='span'
                  className='uppercase text-black-white-800  block pl-3 pr-4 py-4'
                >
                  Thema&apos;s
                </Disclosure.Button>
                <Disclosure.Button
                  as='a'
                  href='/houtbouw'
                  className='border-transparent table-base text-green-600 pl-8 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-4'
                >
                  Houtbouw stimuleren
                </Disclosure.Button>
                <Disclosure.Button
                  as='a'
                  href='/circulaire-windturbines'
                  className='border-transparent table-base text-green-600 pl-8 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-4'
                >
                  Circulaire windturbines
                </Disclosure.Button>
                <Disclosure.Button
                  as='a'
                  href='/matrassen'
                  className='table-base text-green-600 pl-8 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-4'
                >
                  Circulaire matrasketen
                </Disclosure.Button>
                <hr className='my-4 mx-2 border-green-600' />
                <Disclosure.Button
                  as='span'
                  className='uppercase text-black-white-800 block pl-3 pr-4 py-4'
                >
                  Over CircuLaw
                </Disclosure.Button>

                {aboutSlugs?.map((slug) => (
                  <Disclosure.Button
                    key={slug}
                    className='border-transparent table-base text-green-600 pl-8 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-4 first-letter:uppercase'
                  >
                    <Link href={`/about/${encodeURIComponent(slug)}`}>
                      {slug.replaceAll('-', ' ')}
                    </Link>
                  </Disclosure.Button>
                ))}
                <hr className='my-4 mx-2 border-green-600' />
                <Disclosure.Button
                  as='a'
                  href={`/about/${encodeURIComponent(FAQslug)}`}
                  className='uppercase text-black-white-800  block pl-3 pr-2 py-4'
                >
                  Vraag en Antwoord
                </Disclosure.Button>
                <hr className='my-4 mx-2 border-green-600' />
                <Disclosure.Button
                  as='a'
                  href='/contact'
                  className='uppercase text-black-white-800 block pl-3 pr-4 py-4'
                >
                  Contact
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
    );
  }
  // returns nav bar that is nested inside the header part of the index page
  return (
    <div className='relative'>
      <video id='background-video' autoPlay loop muted playsInline poster='/bg-poster.png'>
        <source src='/01_circulaw.mov' type='video/mp4' />
      </video>
      <BetaBanner />
      <div className='relative pt-6 pb-16 sm:pb-24'>
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
                        <MenuIcon className='block h-10 w-10' aria-hidden='true' />
                      )}
                    </Disclosure.Button>
                  </div>
                  <div className='flex items-baseline sm:justify-start '>
                    <div className='hidden lg:block md:py-5 lg:py-0'>
                      <Link href='/'>
                        <Image height={46} width={250} src={logo} alt='CircuLaw logo' />
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
                    <div className='hidden lg:ml-6 lg:flex'>
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
                  <Disclosure.Button
                    as='a'
                    href='/houtbouw'
                    className='border-transparent table-base text-green-600 pl-8 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-4'
                  >
                    Houtbouw stimuleren
                  </Disclosure.Button>
                  <Disclosure.Button
                    as='a'
                    href='/circulaire-windturbines'
                    className='border-transparent table-base text-green-600 pl-8 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-4'
                  >
                    Circulaire windturbines
                  </Disclosure.Button>
                  <Disclosure.Button
                    as='a'
                    href='/matrassen'
                    className='table-base text-green-600 pl-8 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-4'
                  >
                    Circulaire matrasketen
                  </Disclosure.Button>
                  <hr className='my-4 mx-2 border-green-600' />
                  <Disclosure.Button
                    as='span'
                    className='uppercase text-black-white-800 block pl-3 pr-4 py-4'
                  >
                    Over CircuLaw
                  </Disclosure.Button>

                  {aboutSlugs?.map((slug) => (
                    <Disclosure.Button
                      key={slug}
                      className='border-transparent table-base text-green-600 pl-8 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-4 first-letter:uppercase'
                    >
                      <Link href={`/about/${encodeURIComponent(slug)}`}>
                        {slug.replaceAll('-', ' ')}
                      </Link>
                    </Disclosure.Button>
                  ))}
                  <hr className='my-4 mx-2 border-green-600' />
                  <Disclosure.Button
                    as='a'
                    href={`/about/${encodeURIComponent(FAQslug)}`}
                    className='uppercase text-black-white-800  block pl-3 pr-2 py-4'
                  >
                    Vraag en Antwoord
                  </Disclosure.Button>
                  <hr className='my-4 mx-2 border-green-600' />
                  <Disclosure.Button
                    as='a'
                    href='/contact'
                    className='uppercase text-black-white-800 block pl-3 pr-4 py-4'
                  >
                    Contact
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

        {/* TODO: move this into header component and out of nav*/}
        <main className='global-margin sm:mt-2'>
          <div className='text-center mx-auto max-w-4xl'>
            <div className='header hidden md:block text-black-white-200 py-10'>
              <span className='block '>Regelgeving voor een circulaire economie</span>{' '}
            </div>
            <h1 className='mobile block md:hidden text-black-white-200 py-4'>
              <span className='block '>Regelgeving voor een circulaire economie</span>{' '}
            </h1>
            <p className='text-left sm:text-center mt-2 p-xl text-black-white-200 pb-8'>
              CircuLaw laat zien hoe je met bestaande juridische instrumenten de circulaire economie
              kan versnellen. We helpen beleidsmakers bij het selecteren en toepassen van die
              instrumenten. Ook bieden we inzicht in de samenhang tussen juridische instrumenten en
              overzicht over de verdeling van veratwoordelijkheden.
            </p>
            <div className='mt-2 sm:flex sm:justify-center md:mt-2'>
              <div className='rounded-md'>
                <CustomButton color='home'>
                  <ScrollLink to='thema' smooth={true}>
                    Bekijk de thema&rsquo;s ↓
                  </ScrollLink>
                </CustomButton>
              </div>
              <div className='mt-3 rounded-md sm:mt-0 sm:ml-3'>
                <CustomButton color='home'>
                  <ScrollLink to='waarom' smooth={true}>
                    Meer over CircuLaw? ↓
                  </ScrollLink>
                </CustomButton>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

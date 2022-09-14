import Link from 'next/link';
import Image from 'next/image';
import { Fragment } from 'react';
import { Popover, Transition, Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { Link as ScrollLink } from 'react-scroll';
import ActionPanel from '../components/section-action-panel';
import Layout from '/components/layout';
import SectionTypes from '/components/section-types-list';
import logo from '../public/Circulaw_logotype_home.png';
import { get_waardeketens, get_over } from '../utils/nav_structure';

const waardeketens = get_waardeketens();
const over = get_over();

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Index() {
  return (
    <Layout page='home'>
      <div className='relative home-header-bg'>
        <div className='relative pt-6 pb-16 sm:pb-24'>
          <Disclosure as='nav' className=' '>
            {({ open }) => (
              <>
                <div className='global-margin'>
                  <div className=''>
                    <div className='inset-y-0 float-right flex items-center lg:hidden'>
                      {/* Mobile menu button */}
                      <Disclosure.Button className='p-2 rounded-md text-blush1 '>
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
                            <Image height={46} width={250} src={logo} alt='CircuLaw logo' />
                          </a>
                        </Link>
                      </div>
                      <div className='block lg:hidden py-4'>
                        <Link href='/'>
                          <a className=''>
                            <Image
                              height={24}
                              width={120}
                              src={logo}
                              alt='CircuLaw logo'
                              quality={100}
                            />
                          </a>
                        </Link>
                      </div>
                      <div className='hidden lg:ml-6 lg:flex'>
                        <div className='flex inset-x-0 top-0 pl-5 invisible lg:visible hidden lg:inline '>
                          <div className='flex-1 global-margin px-2 sm:px-6 lg:px-8'>
                            <div className='content right-0'>
                              <div className='relative flex items-center justify-between font-manrope font-semibold'>
                                <div className=''>
                                  <Popover className='inline-block relative '>
                                    {({ open }) => (
                                      <>
                                        <Popover.Button
                                          className={classNames(
                                            open ? 'text-white1' : 'text-white1',
                                            'group rounded-md inline-flex items-center text-base font-medium',
                                          )}
                                        >
                                          <span className='uppercase'>Thema&apos;s</span>
                                          <ChevronDownIcon
                                            className={classNames(
                                              open ? 'text-white1' : 'text-white1',
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
                                            open ? 'text-white1' : 'text-white1',
                                            'group rounded-md inline-flex items-center text-base font-medium',
                                          )}
                                        >
                                          <span className='uppercase pl-8'>OVER CIRCULAW</span>
                                          <ChevronDownIcon
                                            className={classNames(
                                              open ? 'text-white1' : 'text-white1',
                                              'ml-2 h-5 w-5 group-hover:white1',
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
                                      <a className='uppercase pl-8 text-white1 group rounded-md inline-flex items-center text-base font-medium'>
                                        VRAAG & ANTWOORD
                                      </a>
                                    </Link>
                                  </div>
                                  <div className='inline-block relative '>
                                    <Link href='/contact'>
                                      <a className='uppercase pl-8 text-white1 group rounded-md inline-flex items-center text-base font-medium'>
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
                      className='uppercase text-black1 border-t block pl-3 pr-4 py-5 font-semibold'
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
                      Wat vind je nu op CircuLaw?
                    </Disclosure.Button>
                    <Disclosure.Button
                      as='a'
                      href='/wetsanalyse-met-circulaire-blik'
                      className='ml-5 border-transparent text-gray-900 pl-8 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-5 text-base'
                    >
                      Wetsanalyse vanuit circulaire blik
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

          <main className='global-margin sm:mt-12'>
            <div className='text-center mx-auto max-w-4xl'>
              <h1 className='text-6xl homepage-header-title-mobile sm:homepage-header-title text-white1 py-10'>
                <span className='block '>Regelgeving voor een circulaire economie</span>{' '}
              </h1>
              <p className='mt-3 homepage-header-body text-white1 pb-8'>
                CircuLaw laat zien hoe je met bestaande juridische maatregelen de circulaire
                economie kan versnellen. We helpen beleidsmakers bij het selecteren en toepassen van
                die maatregelen. En we geven overheden inzicht wie over welke juridische
                instrumenten beschikt. Zo wordt samenwerking makkelijker.
              </p>
              <div className='mt-5 sm:flex sm:justify-center md:mt-8'>
                <div className='rounded-md'>
                  <button
                    type='button'
                    className='inline-flex rounded-full items-center px-4 py-2 border border-green1 button text-green1 bg-blush2 hover:bg-greenLink focus:outline-none'
                  >
                    <ScrollLink to='thema' smooth={true}>
                      Bekijk de thema&rsquo;s ↓
                    </ScrollLink>
                  </button>
                </div>
                <div className='mt-3 rounded-md sm:mt-0 sm:ml-3'>
                  <button
                    type='button'
                    className='inline-flex rounded-full items-center px-4 py-2 border border-green1 button text-green1 bg-blush2 hover:bg-greenLink focus:outline-none'
                  >
                    <ScrollLink to='waarom' smooth={true}>
                      <a>Meer over CircuLaw? ↓</a>
                    </ScrollLink>
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      <div className='bg-greenAlpha pb-20' name='thema'>
        <div className='global-margin'>
          <h2 className='pb-6 pt-8 mobile sm:main text-green1'>Thema’s</h2>

          <SectionTypes type='home' />
          <p className='body-text-mobile sm:body-text'>
            In 2022 volgen meer thema’s binnen verschillende waardeketens. <br />
            Lees meer over{' '}
            <span className='link-mobile sm:link text-greenLink'>
              <Link href='/status-en-ambities'>
                <a>wat je nu vindt op CircuLaw</a>
              </Link>
            </span>{' '}
            of ga naar{' '}
            <span className='link-mobile sm:link text-greenLink'>
              <Link href='/hoe-het-werkt'>
                <a>Vraag & Antwoord</a>
              </Link>
            </span>
          </p>
        </div>
      </div>
      <div className='bg-white py-20'>
        <div className='global-margin'>
          <h1 className='mobile sm:main text-green1' name='waarom'>
            Over CircuLaw
          </h1>
          <div className='border-b border-grey1 pb-10'>
            <h2 className='pt-10 mobile sm:main'>Waarom CircuLaw?</h2>
            <p className='body-text-mobile sm:body-text py-5 max-w-4xl'>
              Om binnen planetaire grenzen te opereren is een circulaire economie essentieel.
              Hiervoor is meer drang en dwang nodig. CircuLaw laat juridische mogelijkheden zien die
              kunnen bijdragen aan versnelling van de circulaire transitie.
            </p>
            <span className='text-greenLink link-mobile sm:link'>
              <Link href='/waarom-circulaw'>
                <a>Lees verder →</a>
              </Link>
            </span>
          </div>
          <div className='border-b border-grey1 pb-10'>
            <h2 className='pt-10 mobile sm:main'>Wat is CircuLaw?</h2>
            <p className='body-text-mobile sm:body-text py-5 max-w-4xl'>
              CircuLaw is een service waarmee we in de eerste plaats beleidsmakers en
              transitiemanagers helpen meer en beter gebruik te maken van regelgeving om de
              circulaire economie te bevorderen.
            </p>
            <span className='text-greenLink link-mobile sm:link'>
              <Link href='/wat-is-circulaw'>
                <a>Lees verder →</a>
              </Link>
            </span>
          </div>
          <div className='border-b border-grey1 pb-10'>
            <h2 className='pt-10 mobile sm:main'>Wat vind je nu op CircuLaw?</h2>
            <p className='body-text-mobile sm:body-text py-5 max-w-4xl'>
              CircuLaw wordt stap voor stap ontwikkeld. Op dit moment bevat de website vooral
              informatie over wet-en regelgeving die voor beleidsmakers relevant is. Deze informatie
              wordt geleidelijk uitgebreid
            </p>
            <span className='text-greenLink link-mobile sm:link'>
              <Link href='/status-en-ambities'>
                <a>Lees verder →</a>
              </Link>
            </span>
          </div>
          <div className='pb-10'>
            <h2 className='pt-10 mobile sm:main'>Wie zijn betrokken bij CircuLaw?</h2>
            <p className='body-text-mobile sm:body-text py-5 max-w-4xl'>
              CircuLaw wordt ontwikkeld door Gemeente Amsterdam, Dark Matter Labs en een consortium
              van publieke partners en kennisinstituten
            </p>
            <span className='text-greenLink link-mobile sm:link'>
              <Link href='/wie-maken-circulaw'>
                <a>Lees verder om te zien wie allemaal bijdragen aan CircuLaw →</a>
              </Link>
            </span>
          </div>
        </div>
      </div>
      <ActionPanel
        title='Doe met ons mee'
        paragraph='Heb je vragen, wil je je ervaringen delen of wil je een wetsanalyse laten uitvoeren op een circulair  thema of casus?'
        buttonText='Neem contact op'
        buttonLink='/contact'
      />
    </Layout>
  );
}

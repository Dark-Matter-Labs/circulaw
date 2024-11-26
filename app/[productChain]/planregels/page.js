import Image from 'next/image';
import Link from 'next/link';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { IconChevronDown, IconArrowRight } from '@tabler/icons-react';
import { notFound } from 'next/navigation';
import V6 from '@/components/scrolly/v6';

export default function ScrollyTellingPage({ params }) {
  if (params.productChain === 'bouw') {
    return (
      <>
        <div className='hidden lg:flex min-h-[10800px] flex-col items-center justify-start mt-10 relative lg:mx-10 2xl:mx-auto'>
          <V6 />
        </div>

        <div className='block lg:hidden'>
          <div>
            <div className='w-full bg-green-600 relative h-[260px] sm:h-[360px] mt-3 flex'>
              <Image
                src='/modeltext-header.png'
                alt='homepage decoration'
                fill
                sizes='100vw'
                className='z-10 object-cover'
                priority={true}
                quality={100}
              />
              <div className='z-20 w-full h-full global-margin flex flex-col justify-between'>
                <div className='pt-6 sm:pt-10'>
                  <span className='p-2xs-bold align-middle rounded-clSm bg-gray-100 pl-2 pr-3 py-1.5 text-green-600 inline-flex flex-row items-center justify-center group-hover:text-green-300 group-active:text-green-800 group-focus:text-green-200 group-focus:ring-2 group-focus:ring-white'>
                    <Link
                      className='hover:text-green-300 active:text-green-800 focus:text-green-200 focus:ring-2 focus:ring-white'
                      href='/'
                    >
                      {' '}
                      Home <span className='ml-2'>{'>'}</span>
                    </Link>
                    <Link
                      href='/bouw'
                      className='hover:text-green-300 active:text-green-800 focus:text-green-200 focus:ring-2 focus:ring-white pl-3'
                    >
                      Bouw
                    </Link>
                  </span>
                </div>
                <div className='mb-6 sm:mb-10 flex flex-col gap-2'>
                  <h1 className='heading-2xl-semibold sm:heading-5xl-semibold text-white'>
                    Modelteksten voor omgevingsplan
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className='global-margin py-10 sm:py-16 flex flex-col md:flex-row relative'>
            <div className='basis-2/3 max-w-4xl'>
              <h2 className='heading-2xl-semibold sm:heading-3xl-semibold mb-6'>Planregels</h2>
              <p className='p-base mb-6 max-w-2xl'>
                Wil je werkelijk impact maken, zet dan een mix van instrumenten in. Voor het
                stimuleren van circulaire bouw kun je aan de slag met de omgevingsvisie, het
                omgevingsprogramma, en het omgevingsplan.
              </p>
              <p className='p-base mb-6 max-w-2xl'>
                In het omgevingsplan worden concrete regels, voorschriften en toestemmingsvereisten
                vastgelegd die nodig zijn om de ambities uit de omgevingsvisie en
                omgevingsprogramma&apos;s in de praktijk te brengen. Planregels zijn stukken tekst
                die gebruikers over kunnen nemen in een omgevingsplan. Het zijn dus modelteksten
                voor een omgevingsplan.
              </p>
              <div className='my-16'>
                <Disclosure className='' as='div'>
                  <>
                    <DisclosureButton className='group rounded-clSm text-gray-800 bg-green-50 flex justify-between items-center w-full px-6 sm:px-10 py-6'>
                      <div className='flex flex-col'>
                        <h4 className='heading-xl-semibold sm:heading-2xl-semibold text-left mb-2.5'>
                          Samenhang
                        </h4>
                        <h5 className='p-xs-semibold sm:heading-xl-semibold text-left'>
                          Omgevingsvisie, - programma&apos;s, - plan
                        </h5>
                      </div>
                      <IconChevronDown className='h-6 w-6 text-gray-800 group-data-[open]:rotate-180 place-self-start' />
                    </DisclosureButton>
                    <DisclosurePanel className='bg-green-50 -mt-6 px-6 sm:px-10 pb-4 rounded-b-clSm'>
                      <div className='flex flex-col gap-8 py-6'>
                        <p className='p-base'>
                          De <span className='p-base-semibold'>omgevingsvisie</span> beschrijft op
                          hoofdlijnen en voor de lange termijn hoe de toekomst van de leefomgeving
                          eruitziet en welke ambities en doelen nagestreefd worden.
                        </p>
                        <p className='p-base'>
                          Het <span className='p-base-semibold'>omgevingsprogramma</span> bevat
                          acties en maatregelen die uitgevoerd moeten worden om de doelen en
                          ambities uit de omgevingsvisie te realiseren. Het heeft een korte tot
                          middellange termijn horizon.
                        </p>
                        <p className='p-base'>
                          In het <span className='p-base-semibold'>omgevingsplan</span> worden
                          concrete regels, voorschriften en toestemmingsvereisten vastgelegd die
                          nodig zijn om de ambities uit de omgevingsvisie en omgevingsprogramma’s in
                          de praktijk te brengen.
                        </p>
                      </div>
                    </DisclosurePanel>
                  </>
                </Disclosure>
              </div>
              <div className='flex flex-col sm:flex-row gap-x-16'>
                <div className='relative max-w-[700px] max-h-[550px] mb-6 sm:mb-0'>
                  <Image
                    src='/planregelsImage.png'
                    alt='planregels image'
                    height={700}
                    width={500}
                    className='z-10 object-cover'
                  />
                </div>
                <Link href='/bouw/planregels/modelteksten' className='group'>
                  <div className='w-full bg-green-50 flex flex-col border border-gray-200 rounded-cl items-start justify-start px-10 py-8'>
                    <div className='mb-4 p-2xs-semibold text-green-800 border rounded-cl border-green-800 px-2 py-1'>
                      Plangregels
                    </div>
                    <p className='heading-2xl-semibold max-w-sm mb-6'>Circulaire bouw verankeren</p>
                    <p className='p-base max-w-sm mb-6'>
                      Neem de juiste teksten op in je omgevingsplan
                    </p>
                    <div className='flex flex-row items-center text-green-800 p-base-semibold group-hover:text-green-200'>
                      Bekijk de planregels
                      <IconArrowRight className='h-5 w-5 ml-0.5' />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else return notFound();
}

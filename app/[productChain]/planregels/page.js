import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import ScrollyTellingAnimation from '@/components/scrolly/scrolly-telling-animation';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { IconArrowRight, IconChevronDown } from '@tabler/icons-react';

export default function ScrollyTellingPage({ params }) {
  if (params.productChain === 'bouw') {
    return (
      <>
        <div className='relative mt-10 hidden min-h-[12600px] w-full flex-col items-center justify-start overflow-clip lg:flex lg:px-6 2xl:mx-auto'>
          <ScrollyTellingAnimation />
        </div>

        <div className='block lg:hidden'>
          <div>
            <div className='relative mt-3 flex h-[260px] w-full bg-green-500 sm:h-[360px]'>
              <Image
                src='/modeltext-header.png'
                alt='homepage decoration'
                fill
                sizes='100vw'
                className='z-10 object-cover'
                priority={true}
                quality={100}
              />
              <div className='global-margin z-20 flex h-full w-full flex-col justify-between'>
                <div className='pt-6 sm:pt-10'>
                  <span className='p-2xs-bold inline-flex flex-row items-center justify-center rounded-clSm bg-green-100 py-1.5 pl-2 pr-3 align-middle text-green-500 group-hover:text-green-400 group-focus:text-green-300 group-focus:ring-2 group-focus:ring-white group-active:text-cl-black'>
                    <Link
                      className='hover:text-green-400 focus:text-green-300 focus:ring-2 focus:ring-white active:text-cl-black'
                      href='/'
                    >
                      {' '}
                      Home <span className='ml-2'>{'>'}</span>
                    </Link>
                    <Link
                      href='/bouw'
                      className='pl-3 hover:text-green-400 focus:text-green-300 focus:ring-2 focus:ring-white active:text-cl-black'
                    >
                      Bouw
                    </Link>
                  </span>
                </div>
                <div className='mb-6 flex flex-col gap-2 sm:mb-10'>
                  <h1 className='heading-2xl-semibold sm:heading-5xl-semibold text-white'>
                    Modelteksten voor omgevingsplan
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className='global-margin relative flex flex-col py-10 sm:py-16 md:flex-row'>
            <div className='max-w-4xl basis-2/3'>
              <p className='p-base mb-6 italic'>Tip: bekijk dit verhaal op een groot scherm.</p>
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
                    <DisclosureButton className='group flex w-full items-center justify-between rounded-clSm bg-green-100 px-6 py-6 text-cl-black sm:px-10'>
                      <div className='flex flex-col'>
                        <h4 className='heading-xl-semibold sm:heading-2xl-semibold mb-2.5 text-left'>
                          Samenhang
                        </h4>
                        <h5 className='p-xs-semibold sm:heading-xl-semibold text-left'>
                          Omgevingsvisie, - programma&apos;s, - plan
                        </h5>
                      </div>
                      <IconChevronDown className='h-6 w-6 place-self-start text-cl-black group-data-[open]:rotate-180' />
                    </DisclosureButton>
                    <DisclosurePanel className='-mt-6 rounded-b-clSm bg-green-100 px-6 pb-4 sm:px-10'>
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
              <div className='flex flex-col gap-x-16 sm:flex-row'>
                <div className='relative mb-6 max-h-[550px] max-w-[700px] sm:mb-0'>
                  <Image
                    src='/planregelsImage.png'
                    alt='planregels image'
                    height={700}
                    width={500}
                    className='z-10 object-cover'
                  />
                </div>
                <Link href='/bouw/planregels/modelteksten' className='group'>
                  <div className='flex w-full flex-col items-start justify-start rounded-cl border border-green-100 bg-green-100 px-10 py-8'>
                    <div className='p-2xs-semibold mb-4 rounded-cl border border-cl-black px-2 py-1 text-cl-black'>
                      Plangregels
                    </div>
                    <p className='heading-2xl-semibold mb-6 max-w-sm'>Circulaire bouw verankeren</p>
                    <p className='p-base mb-6 max-w-sm'>
                      Neem de juiste teksten op in je omgevingsplan
                    </p>
                    <div className='p-base-semibold flex flex-row items-center text-cl-black group-hover:text-green-300'>
                      Bekijk de planregels
                      <IconArrowRight className='ml-0.5 h-5 w-5' />
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

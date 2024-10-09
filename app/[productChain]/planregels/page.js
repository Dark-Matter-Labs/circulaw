import Image from 'next/image';
import Link from 'next/link';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { IconChevronDown, IconArrowRight } from '@tabler/icons-react';
import CustomButton from '@/components/custom-button';

export default function ScrollyTellingPage() {
  return (
    <>
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
                Circulair bouwen: meer effect met een mix van instrumenten
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className='global-margin py-20'>
        <p className='p-base mb-10 max-w-3xl'>
          Wil je werkelijk <span className='p-base-semibold'>impact</span> maken, zet dan een{' '}
          <span className='p-base-semibold'>mix van instrumenten</span> in. Voor het stimuleren van{' '}
          <span className='p-base-semibold'>circulaire bouw</span> kun je aan de slag met de{' '}
          <span className='p-base-semibold'>omgevingsvisie</span>, het{' '}
          <span className='p-base-semibold'>omgevingsprogramma</span>, en het{' '}
          <span className='p-base-semibold'>omgevingsplan</span>.
        </p>
        <div className='my-6'>
          <Disclosure className='max-w-2xl' as='div'>
            <>
              <DisclosureButton className='group rounded-clSm text-gray-800 bg-gray-200 flex justify-between items-center w-full px-8 py-6'>
                <h4 className='p-base-semibold sm:headling-xl-semibold text-left'>
                  Samenhang omgevingsvisie, omgevingsprogramma en omgevingsplan
                </h4>
                <IconChevronDown className='h-6 w-6 text-gray-800 group-data-[open]:rotate-180' />
              </DisclosureButton>
              <DisclosurePanel className='bg-gray-200 -mt-6 px-8 pb-4 rounded-b-clSm'>
                <div className='flex flex-col gap-8 py-6'>
                  <p className='p-base'>
                    De <span className='p-base-semibold'>omgevingsvisie</span> beschrijft op
                    hoofdlijnen en voor de lange termijn hoe de toekomst van de leefomgeving
                    eruitziet en welke ambities en doelen nagestreefd worden.
                  </p>
                  <p className='p-base'>
                    Het <span className='p-base-semibold'>omgevingsprogramma</span> bevat acties en
                    maatregelen die uitgevoerd moeten worden om de doelen en ambities uit de
                    omgevingsvisie te realiseren. Het heeft een korte tot middellange termijn
                    horizon.
                  </p>
                  <p className='p-base'>
                    In het <span className='p-base-semibold'>omgevingsplan</span> worden concrete
                    regels, voorschriften en toestemmingsvereisten vastgelegd die nodig zijn om de
                    ambities uit de omgevingsvisie en omgevingsprogramma’s in de praktijk te
                    brengen.
                  </p>
                </div>
              </DisclosurePanel>
            </>
          </Disclosure>
        </div>
        <h2 className='heading-3xl-semibold text-green-800 mb-10'>
          Planregels: modelteksten voor een omgevingsplan
        </h2>
        <div className='relative max-w-[700px] max-h-[550px] mb-10'>
          <Image
            src='/planregelsImage.png'
            alt='planregels image'
            height={700}
            width={500}
            className='z-10 object-cover'
          />
        </div>
        <p className='p-base mb-8 max-w-3xl'>
          In het <span className='p-base-semibold'>omgevingsplan</span> worden{' '}
          <span className='p-base-semibold'>concrete regels</span>,{' '}
          <span className='p-base-semibold'>voorschriften</span> en{' '}
          <span className='p-base-semibold'>toestemmingsvereisten</span> vastgelegd die nodig zijn
          om de ambities uit de <span className='p-base-semibold'>omgevingsvisie</span> en{' '}
          <span className='p-base-semibold'>omgevingsprogramma&apos;s</span> in de praktijk te
          brengen.
        </p>
        <p className='max-w-3xl mb-10'>
          Planregels zijn stukken tekst die gebruikers over kunnen nemen in een omgevingsplan. Het
          zijn dus modelteksten voor een omgevingsplan.
        </p>
        <div className='mt-20 flex shrink'>
          <Link href='/bouw/planregels/modelteksten'>
            <div className='w-full bg-green-50 flex flex-col md:flex-row border border-gray-200 rounded-cl items-start md:items-center justify-start px-10 py-8 gap-8'>
              <p className='heading-2xl-semibold max-w-sm'>Aan de slag met planregels</p>
              <p className='p-base max-w-sm'>
                Ga direct aan de slag met de modelteksten voor planregels in het omgevingsplan die
                onze juristen hebben opgesteld
              </p>
              <CustomButton color='whiteBackground'>
                Naar de planregels
                <IconArrowRight />
              </CustomButton>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

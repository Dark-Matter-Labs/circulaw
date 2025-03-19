import Image from 'next/image';
import Link from 'next/link';

import { IconArrowRight } from '@tabler/icons-react';

import NewButton from '../shared/new-button';

export default function HomepageHeader() {
  return (
    <main className='relative z-10 pt-64'>
      <div className='global-margin relative'>
        <div className='max-w-4xl text-left'>
          <div className='max-w-xs text-left text-green-100 sm:block sm:max-w-4xl'>
            <h1 className='heading-6xl-semibold block'>Regelgeving voor een circulaire economie</h1>{' '}
            <h2 className='p-base sm:heading-2xl-semibold mt-2 max-w-2xl pb-8 pt-6 text-left text-green-100'>
              CircuLaw laat decentrale overheden zien hoe je de circulaire transitie kunt
              versnellen. Per productketen bieden we juridische instrumenten op basis van de
              Nederlandse wetgeving. Ook geven we inzicht in Europese wetgeving.
            </h2>
          </div>
          <div className='mt-2 sm:flex sm:justify-start md:mt-2'>
            <div className=''>
              <NewButton variant='primaryDark' icon='arrowDown' scrollTo='thema'>
                Bekijk de thema&rsquo;s
              </NewButton>
            </div>
            <div className='mt-3 rounded-md sm:ml-3 sm:mt-0'>
              <NewButton variant='primaryDark' icon='arrowDown' scrollTo='about'>
                Meer over CircuLaw?
              </NewButton>
            </div>
          </div>
        </div>
        <div className='group absolute -right-10 bottom-0 z-30 overflow-visible'>
          <Link href='/over/wat-is-circulaw' className='h-full w-full'>
            <Image
              src='/home-page/homepage-video-cta.png'
              alt='screenshot of CircuLaw animation'
              width={760}
              height={730}
              className='-rotate-30 size-80'
            />
            <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform'>
              <div className='flex flex-col gap-y-8'>
                <h3 className='heading-4xl-semibold text-green-100'>Wat is CircuLaw?</h3>

                <div className='heading-xl-semibold text-green-100 group-hover:underline'>
                  Video bekijken
                  <IconArrowRight className='inline-block h-5 w-5' aria-hidden='true' />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}

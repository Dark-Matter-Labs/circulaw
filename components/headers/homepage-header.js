import { Link as ScrollLink } from 'react-scroll';

import { IconArrowDown } from '@tabler/icons-react';

import CustomButton from '../custom-button';

export default function HomepageHeader() {
  return (
    <main className='relative z-10 pb-16 pt-56'>
      <div className='global-margin'>
        <div className='mx-auto max-w-4xl text-center'>
          <div className='m-auto max-w-xs text-left text-green-100 sm:block sm:max-w-4xl sm:text-center'>
            <h1 className='header-desktop-mobile sm:header-desktop block'>
              Regelgeving voor een circulaire economie
            </h1>{' '}
            <h2 className='p-base sm:heading-2xl-semibold m-auto mt-2 max-w-sm pb-8 pt-10 text-left text-green-100 sm:max-w-full sm:text-center'>
              CircuLaw laat decentrale overheden zien hoe je de circulaire transitie kunt
              versnellen. Per productketen bieden we juridische instrumenten op basis van de
              Nederlandse wetgeving. Ook geven we inzicht in Europese wetgeving.
            </h2>
          </div>
          <div className='mt-2 sm:flex sm:justify-center md:mt-2'>
            <div className=''>
              <CustomButton color='home'>
                <ScrollLink to='thema' smooth={true} offset={-95}>
                  Bekijk de thema&rsquo;s{' '}
                  <IconArrowDown className='inline-block h-5 w-5' aria-hidden='true' />
                </ScrollLink>
              </CustomButton>
            </div>
            <div className='mt-3 rounded-md sm:ml-3 sm:mt-0'>
              <CustomButton color='home'>
                <ScrollLink to='about' smooth={true} offset={-100}>
                  Meer over CircuLaw?{' '}
                  <IconArrowDown className='inline-block h-5 w-5' aria-hidden='true' />
                </ScrollLink>
              </CustomButton>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

import CustomButton from './custom-button';
import { ArrowDownIcon } from '@heroicons/react/outline';
import { Link as ScrollLink } from 'react-scroll';

export default function HomepageHeader() {
  return (
    <main className='pb-16 pt-56'>
      <div className='global-margin'>
        <div className='text-center max-w-4xl mx-auto'>
          <div className='text-left sm:text-center max-w-xs m-auto sm:max-w-4xl sm:block text-gray-200'>
            <h1 className='block header-desktop-mobile sm:header-desktop'>
              Regelgeving voor een circulaire economie
            </h1>{' '}
            <h2 className='p-base sm:heading-2xl-semibold text-left m-auto sm:text-center mt-2 max-w-sm sm:max-w-full text-gray-200 pt-10 pb-8'>
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
                  <ArrowDownIcon className='inline-block h-4 w-4' aria-hidden='true' />
                </ScrollLink>
              </CustomButton>
            </div>
            <div className='mt-3 rounded-md sm:mt-0 sm:ml-3'>
              <CustomButton color='home'>
                <ScrollLink to='about' smooth={true} offset={-100}>
                  Meer over CircuLaw?{' '}
                  <ArrowDownIcon className='inline-block h-4 w-4' aria-hidden='true' />
                </ScrollLink>
              </CustomButton>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

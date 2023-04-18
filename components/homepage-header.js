import CustomButton from './custom-button';
import { Link as ScrollLink } from 'react-scroll';
import { ArrowDownIcon } from '@heroicons/react/outline';

export default function HomepageHeader() {
  return (
    <main className='h-auto global-margin'>
      <div className='h-full mx-auto max-w-4xl'>
        <div className='text-center'>
          <div className='header hidden md:block text-black-white-200 py-10'>
            <span className='block '>Regelgeving voor een circulaire economie</span>{' '}
          </div>
          <h1 className='text-left mobile block md:hidden text-black-white-200 py-4'>
            <span className='block '>Regelgeving voor een circulaire economie</span>{' '}
          </h1>
          <p className='text-left sm:text-center mt-2 p-base max-w-sm sm:max-w-full sm:p-xl text-black-white-200 pb-8'>
            CircuLaw laat zien hoe je met bestaande juridische instrumenten de circulaire economie
            kan versnellen. We helpen beleidsmakers bij het selecteren en toepassen van die
            instrumenten. Ook bieden we inzicht in de samenhang tussen juridische instrumenten en
            overzicht over de verdeling van verantwoordelijkheden.
          </p>
          <div className='mt-2 sm:flex sm:justify-center md:mt-2'>
            <div className=''>
              <CustomButton color='home'>
                <ScrollLink to='thema' smooth={true}>
                  Bekijk de thema&rsquo;s{' '}
                  <ArrowDownIcon className='inline-block h-4 w-4' aria-hidden='true' />
                </ScrollLink>
              </CustomButton>
            </div>
            <div className='mt-3 rounded-md sm:mt-0 sm:ml-3'>
              <CustomButton color='home'>
                <ScrollLink to='waarom' smooth={true}>
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

import CustomButton from './custom-button';
import { Link as ScrollLink } from 'react-scroll';
import { ArrowDownIcon } from '@heroicons/react/outline';

export default function HomepageHeader({ homePageHeader }) {
  return (
    <main className='pb-16 pt-56'>
      <div className='global-margin'>
        <div className='text-center max-w-4xl mx-auto'>
          <div className='text-left sm:text-center max-w-xs m-auto sm:max-w-3xl sm:block text-grey-200'>
            <h1 className='block mobile sm:desktop'>{homePageHeader.headerText}</h1>{' '}
            <h2 className='p-lg-semibold sm:p-4xl-semibold text-left m-auto sm:text-center mt-2 max-w-sm sm:max-w-full text-grey-200 pt-10 pb-8'>
              {homePageHeader.subHeader}
            </h2>
          </div>
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
                <ScrollLink to='about' smooth={true}>
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

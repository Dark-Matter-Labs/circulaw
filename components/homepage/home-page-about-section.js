import CustomButton from '@/components/custom-button';
import aboutImage from '@/public/home-page/homepageAboutDeco.png';
import { ArrowRightIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import YouTubeComponent from './youtube-component';

export default function HomePageAboutSection({ aboutSection }) {
  return (
    <div className='flex flex-col sm:flex-row items-center justify-between pb-12 sm:pb-24'>
      <div className='sm:w-1/2 flex flex-col sm:mr-6'>
        <Link href={`/over/${encodeURIComponent(aboutSection?.aboutSectionSlug)}`} name='about'>
          <div className='border-b border-green-800'>
            <h2 className='heading-2xl-semibold sm:heading-5xl-semibold text-green-600 pb-6'>
              {aboutSection?.aboutSectionTitle}
            </h2>
          </div>
          <div className='hidden sm:block py-6 p-base'>{aboutSection?.aboutSectionText}</div>
          <div className='w-full flex justify-center sm:hidden py-6'>
            <div className='hidden sm:flex h-[11rem] w-48 justify-center'>
              <Image src={aboutImage} alt='image for wat circulaw' loading="lazy"/>
            </div>
          </div>
          <div className='flex sm:hidden pb-6 p-base'>{aboutSection?.aboutSectionMobileText}</div>
          <div>
            <span className='text-green-500 link-lg link-interaction'>
              <CustomButton color='whiteBackground'>
                Lees verder{' '}
                <ArrowRightIcon className='inline-block h-4 w-4 ml-1' aria-hidden='true' />
              </CustomButton>
            </span>
          </div>
        </Link>
      </div>
      <div className='w-full sm:w-1/2 sm:flex justify-center h-400px mt-6 sm:mt-0'>
        <div className='w-full relative overflow-hidden pt-[56%]'>
          <Suspense>
           <YouTubeComponent />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

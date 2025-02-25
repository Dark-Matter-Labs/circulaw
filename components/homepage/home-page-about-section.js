import { Suspense } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import CustomButton from '@/components/custom-button';
import aboutImage from '@/public/home-page/homepageAboutDeco.png';
import { IconArrowRight } from '@tabler/icons-react';

import YouTubeComponent from './youtube-component';

export default function HomePageAboutSection({ aboutSection }) {
  return (
    <div className='flex flex-col items-center justify-between pb-12 sm:flex-row sm:pb-24'>
      <div className='flex flex-col sm:mr-6 sm:w-1/2'>
        <Link href={`/over/${encodeURIComponent(aboutSection?.aboutSectionSlug)}`} name='about'>
          <div className='border-b border-cl-black'>
            <h2 className='heading-2xl-semibold sm:heading-5xl-semibold pb-6 text-green-600'>
              {aboutSection?.aboutSectionTitle}
            </h2>
          </div>
          <div className='p-base hidden py-6 sm:block'>{aboutSection?.aboutSectionText}</div>
          <div className='flex w-full justify-center py-6 sm:hidden'>
            <div className='hidden h-[11rem] w-48 justify-center sm:flex'>
              <Image src={aboutImage} alt='image for wat circulaw' loading='lazy' />
            </div>
          </div>
          <div className='p-base flex pb-6 sm:hidden'>{aboutSection?.aboutSectionMobileText}</div>
          <div>
            <span className='link-lg link-interaction text-green-500'>
              <CustomButton color='whiteBackground'>
                Lees verder{' '}
                <IconArrowRight className='ml-1 inline-block h-5 w-5' aria-hidden='true' />
              </CustomButton>
            </span>
          </div>
        </Link>
      </div>
      <div className='h-400px mt-6 w-full justify-center sm:mt-0 sm:flex sm:w-1/2'>
        <div className='relative w-full overflow-hidden pt-[56%]'>
          <Suspense>
            <YouTubeComponent />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

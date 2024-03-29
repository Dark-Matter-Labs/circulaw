import CustomButton from '@/components/custom-button';
import aboutImage from '@/public/home-page/homepageAboutDeco.png';
import { ArrowRightIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePageAboutSection({ aboutSection }) {
  return (
    <Link href={`/over/${encodeURIComponent(aboutSection?.aboutSectionSlug)}`} name='about'>
      <div className='flex flex-col sm:flex-row items-center justify-between'>
        <div className='sm:w-7/12 flex flex-col'>
          <div className='border-b border-green-800'>
            <h2 className='heading-2xl-semibold sm:heading-5xl-semibold text-green-600 pb-6'>
              {aboutSection?.aboutSectionTitle}
            </h2>
          </div>
          <div className='hidden sm:block py-6 p-base'>{aboutSection?.aboutSectionText}</div>
          <div className='w-full flex justify-center sm:hidden py-6'>
            <div className='flex  h-[11rem] w-48 justify-center'>
              <Image src={aboutImage} alt='image for wat circulaw' />
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
        </div>
        <div className='hidden sm:w-5/12 sm:flex justify-center'>
          <div className='relative w-72 h-[264px]'>
            <Image src={aboutImage} fill alt='image for wat circulaw' />
          </div>
        </div>
      </div>
    </Link>
  );
}

import CustomButton from '@/components/custom-button';
import aboutImage from '@/public/home-page/homepageAboutDeco.png';
import { ArrowRightIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import Link from 'next/link';

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
              <Image src={aboutImage} priority={true} alt='image for wat circulaw' />
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
          <iframe
            className='absolute bottom-0 left-0 sm:left-24 right-0 top-0 sm:top-12 h-full w-full sm:h-3/4 sm:w-3/4 rounded-cl'
            width='450'
            height='253'
            src='https://www.youtube.com/embed/9PTTCyLhzLo?si=uqv63SA7T44lQLnO'
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            referrerPolicy='strict-origin-when-cross-origin'
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

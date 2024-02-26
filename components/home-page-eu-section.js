import Link from 'next/link';
import Image from 'next/image';
import { ArrowRightIcon } from '@heroicons/react/outline';
import CustomButton from '@/components/custom-button';
import aboutImage from '@/public/home-page/homepageAboutDeco.png';
import euImage from '@/public/eu.png';

export default function HomePageEUSection() {
  return (
    <Link href='/eu-wetgeving'>
      <div className='flex flex-col sm:flex-row items-center justify-between'>
        <div className='sm:w-7/12 flex flex-col'>
          <div className='border-b border-green-800'>
            <h2 className='p-5xl-semibold sm:p-7xl-semibold text-green-600 pb-6'>EU wetgeving</h2>
          </div>
          <div className='hidden sm:block py-6 p-base'>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the standard dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It has survived not only
              five centuries, but also the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
          <div className='w-full flex justify-center sm:hidden py-6'>
            <div className='flex  h-[11rem] w-48 justify-center'>
              <Image src={aboutImage} alt='image for wat circulaw' />
            </div>
          </div>
          <div>
            <span className='text-green-500 link-lg link-interaction'>
              <CustomButton color='whiteBackground'>
                Bekijk de EU wegeving{' '}
                <ArrowRightIcon className='inline-block h-4 w-4 ml-1' aria-hidden='true' />
              </CustomButton>
            </span>
          </div>
        </div>
        <div className='hidden sm:w-5/12 sm:flex justify-center'>
          <div className='relative w-[400px] h-[266px]'>
            <Image src={euImage} fill alt='image for wat circulaw' />
          </div>
        </div>
      </div>
    </Link>
  );
}

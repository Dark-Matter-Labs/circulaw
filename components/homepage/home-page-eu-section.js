import CustomButton from '@/components/custom-button';
import { ArrowRightIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePageEUSection({ euData }) {
  return (
    <Link href='/eu-wetgeving'>
      <div className='flex flex-col sm:flex-row items-center justify-between'>
        <div className='w-full sm:w-7/12 flex flex-col'>
          <div className='border-b border-green-800 mr-6'>
            <h2 className='heading-2xl-semibold sm:heading-5xl-semibold text-green-600 pb-6'>
              EU wetgeving
            </h2>
          </div>
          <div className='hidden sm:block py-6 p-base mr-6'>
            <p>{euData.euLaw}</p>
          </div>
          <div className='w-full flex justify-center sm:hidden py-6'>
            <div className='flex relative h-[200px] w-full justify-center'>
              <Image
                src={euData?.image}
                fill
                alt='image for wat circulaw'
                className='rounded-cl'
                sizes='(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 33vw'
                loading='lazy'
              />{' '}
            </div>
          </div>
          <div className='block sm:hidden pb-6 p-base'>
            <p>{euData.euLaw}</p>
          </div>
          <div>
            <span className='text-green-500 link-lg link-interaction'>
              <CustomButton color='whiteBackground'>
                Bekijk de EU wetgeving{' '}
                <ArrowRightIcon className='inline-block h-4 w-4 ml-1' aria-hidden='true' />
              </CustomButton>
            </span>
          </div>
        </div>
        <div className='hidden sm:w-5/12 sm:flex justify-center'>
          <div className='relative w-[400px] h-[266px] rounded-cl'>
            <Image
              src={euData?.image}
              fill
              alt='image for wat circulaw'
              className='rounded-cl'
              sizes='(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 33vw'
            />
          </div>
        </div>
      </div>
    </Link>
  );
}

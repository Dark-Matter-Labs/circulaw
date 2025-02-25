import Image from 'next/image';
import Link from 'next/link';

import CustomButton from '@/components/custom-button';
import { IconArrowRight } from '@tabler/icons-react';

export default function HomePageEUSection({ euData }) {
  return (
    <Link href='/eu-wetgeving'>
      <div className='flex flex-col items-center justify-between sm:flex-row'>
        <div className='flex w-full flex-col sm:w-7/12'>
          <div className='mr-6 border-b border-cl-black'>
            <h2 className='heading-2xl-semibold sm:heading-5xl-semibold pb-6 text-green-600'>
              EU wetgeving
            </h2>
          </div>
          <div className='p-base mr-6 hidden py-6 sm:block'>
            <p>{euData.euLaw}</p>
          </div>
          <div className='flex w-full justify-center py-6 sm:hidden'>
            <div className='relative flex h-[200px] w-full justify-center'>
              <Image
                src={euData?.image}
                fill
                alt='image for wat circulaw'
                className='rounded-cl'
                sizes='(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 33vw'
                loading='lazy'
                placeholder='blur'
                blurDataURL={euData?.metadata.lqip}
              />{' '}
            </div>
          </div>
          <div className='p-base block pb-6 sm:hidden'>
            <p>{euData.euLaw}</p>
          </div>
          <div>
            <span className='link-lg link-interaction text-green-500'>
              <CustomButton color='whiteBackground'>
                Bekijk de EU wetgeving{' '}
                <IconArrowRight className='ml-1 inline-block h-5 w-5' aria-hidden='true' />
              </CustomButton>
            </span>
          </div>
        </div>
        <div className='hidden justify-center sm:flex sm:w-5/12'>
          <div className='relative h-[266px] w-[400px] rounded-cl'>
            <Image
              src={euData?.image}
              fill
              alt='image for wat circulaw'
              className='rounded-cl'
              sizes='(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 33vw'
              placeholder='blur'
              blurDataURL={euData?.metadata.lqip}
            />
          </div>
        </div>
      </div>
    </Link>
  );
}

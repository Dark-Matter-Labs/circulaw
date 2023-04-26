import Link from 'next/link';
import Image from 'next/image';
import { ArrowRightIcon } from '@heroicons/react/outline';
import CustomButton from './custom-button';
import { urlFor } from '../lib/sanity';

//

export default function SectionTypes({ themaCards }) {
  return (
    <>
      <div className='hidden sm:block'>
        <ul
          role='list'
          className='grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3 sm:gap-x-10 max-w-8xl'
        >
          {themaCards.map((thema) => (
            <li key={thema.slug} className='relative drop-shadow-sm bg-white w-full rounded-cl'>
              <div className='object-cover rounded-cl'>
                <Link href={`/${thema.slug}`}>
                  {thema?.image && (
                    <Image
                      className='rounded-t-cl fill'
                      src={urlFor(thema?.image).url()}
                      alt={thema?.themaName + 'image'}
                      width={1440}
                      height={720}
                    />
                  )}
                </Link>
              </div>
              <div className='group block w-full p-4 bg-white px-10 rounded-cl'>
                <div>
                  <div className='inline-block'>
                    <Link href={`/${thema.slug}`}>
                      <h3 className='desktop mt-2 block text-black pointer-events-none pb-4 hidden sm:inline'>
                        {thema.themaName}
                      </h3>
                      <h2 className='mobile mt-2 block text-black pointer-events-none pb-4 inline sm:hidden'>
                        {thema.themaName}
                      </h2>
                    </Link>
                  </div>
                  <Link href={`/${thema.slug}`}>
                    <p className='h-[18rem] p-base block text-black pointer-events-none py-4 w-full'>
                      {thema.homePageCardText}
                    </p>
                  </Link>
                </div>
                <div className='group block w-full py-4 bg-white px-10 absolute inset-x-0 bottom-0 rounded-cl'>
                  {thema.homePageCardButtonText && (
                    <CustomButton color='whiteBackground'>
                      <Link href={`/${thema.slug}`}>
                        {thema.homePageCardButtonText}{' '}
                        <ArrowRightIcon className='inline-block h-4 w-4' aria-hidden='true' />
                      </Link>
                    </CustomButton>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className='block sm:hidden'>
        {themaCards.map((thema) => (
          <div key={thema.slug} className='h-24 w-full rounded-cl bg-black-white-100 shadow  my-6'>
            <div className='flex items-center justify-start'>
              <div className='h-24 w-24 relative'>
                <Image
                  src={urlFor(thema?.mobImage).url()}
                  alt={thema?.themaName + 'image'}
                  fill
                  className='rounded-cl object-cover'
                />
              </div>
              <div className='text-black-white-800 pl-8'>
                <h3 className='mobile sm:desktop'>{thema.themaName}</h3>
                <ArrowRightIcon className='block h-4 w-4 text-green-600 mt-1' aria-hidden='true' />
                </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

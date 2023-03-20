import Link from 'next/link';
import Image from 'next/image';
import { ArrowRightIcon } from '@heroicons/react/outline';

import CustomButton from './custom-button';
import { urlFor } from '../lib/sanity';

// 

export default function SectionTypes({themaCards}) {
  return (
    <div className=''>
      <ul
        role='list'
        className='grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3 sm:gap-x-10 max-w-8xl'
      >
        {themaCards.map((thema) => (
          <li key={thema.slug} className='relative drop-shadow-sm bg-white w-full rounded-[10px]'>
            <div className='object-cover rounded-[10px]'>
                <Link href={`/${thema.slug}`}>
                  {thema?.image &&
                  <Image
                    className='rounded-t-[10px] fill'
                    src={urlFor(thema?.image).url()}
                    alt={thema?.themaName + 'image'}
                    width={1440}
                    height={720}
                  />}
                </Link>
            </div>
            <div className='group block w-full p-4 bg-white px-10 rounded-[10px]'>
              <div>
                <div
                  className='inline-block'
                >
                    <Link href={`/${thema.slug}`}>
                      <h3 className='desktop mt-2 block text-black pointer-events-none pb-4 hidden sm:inline'>
                        {thema.themaName}
                      </h3>
                      <h2 className='mobile mt-2 block text-black pointer-events-none pb-4 inline sm:hidden'>
                        {thema.themaName}
                      </h2>
                    </Link>
                  {/* added height for the description while on home to ensure all the text can be read*/}
                </div>
                <Link href={`/${thema.slug}`}>
                  <p className='h-[18rem] p-base block text-black pointer-events-none py-4 w-full'>
                    {thema.homePageCardText}
                  </p>
                </Link>
              </div>
              {/* wrapped button in div to seperate it from description */}
              <div className='group block w-full py-4 bg-white px-10 absolute inset-x-0 bottom-0 rounded-[10px]'>
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
  );
}

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRightIcon } from '@heroicons/react/outline';
import { urlFor } from '../lib/sanity';

export default function SectionTypes({ themaCards }) {
  return (
    <>
      <div className='hidden sm:block'>
        <ul
          role='list'
          className='grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4 sm:gap-x-10 max-w-8xl relative z-0'
        >
          {themaCards.map((thema) => (
            <li
              key={thema.slug}
              className='relative drop-shadow-sm bg-white w-full rounded-cl h-auto min-h-[25rem]'
            >
              <div className='object-cover rounded-cl w-full max-h-[200px]'>
                <Link href={`/${thema.slug}`}>
                  {thema?.image && (
                    <Image
                      className='rounded-t-cl fill max-h-[200px]'
                      src={urlFor(thema?.image).url()}
                      alt={thema?.themaName + 'image'}
                      width={1440}
                      height={720}
                    />
                  )}
                </Link>
              </div>
              <div className='group block w-full p-4 bg-white rounded-cl'>
                <div className='inline-block'>
                  <Link href={`/${thema.slug}`}>
                    <h3 className='mobile sm:desktop mt-2 text-black pointer-events-none pb-4 hidden sm:inline'>
                      {thema.themaName}
                    </h3>
                    <h2 className='mobile mt-2 text-black pointer-events-none pb-4 inline sm:hidden'>
                      {thema.themaName}
                    </h2>
                  </Link>
                </div>
                <Link href={`/${thema.slug}`}>
                  <p className='p-md block text-black pointer-events-none py-4 w-full'>
                    {thema.homePageCardText}
                  </p>
                </Link>
                <div className='group flex justify-end w-full pb-4 pr-4 bg-white absolute inset-x-0 bottom-0 right-0 rounded-cl'>
                  {thema.homePageCardButtonText && (
                    <Link href={`/${thema.slug}`}>
                      <div className='h-12 w-12 rounded-full flex items-center justify-center border-2 border-green-600 bg-transparent hover:bg-green-200 text-green-600 active:bg-green-300 focus:outline-none focus:bg-green-100 focus:ring-2 focus:ring-white self-end'>
                        <ArrowRightIcon className='inline-block h-4 w-4' aria-hidden='true' />
                      </div>
                    </Link>
                  )}
                </div>
              </div>
            </li>
          ))}
          <li className='w-full h-full flex-grow cl-gradient-400 rounded-cl shadow'>
            <Link href='/contact' className='w-full h-full'>
              <div className='h-full w-full flex flex-col flex-grow p-8 '>
                <h3 className='mobile sm:desktop pb-4'>Nieuwe thema’s</h3>
                <p className='mobile sm:desktop'>
                  Stap voor stap werkt CircuLaw de instrumenten uit voor nieuwe thema&apos;s.
                </p>
                <div className='flex grow self-baseline	'>
                  <div href='/contact' target='_blank' className='self-end'>
                    <span className='text-black inline link-base sm:link-lg link-interaction break-words'>
                      Houd me op de hoogte{' '}
                      <ArrowRightIcon className='inline h-4 w-4' aria-hidden='true' />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </li>
        </ul>
      </div>
      <div className='block sm:hidden'>
        {themaCards.map((thema) => (
          <Link key={thema.slug} href={`/${thema.slug}`}>
            <div className='h-24 w-full rounded-cl bg-grey-100 shadow my-6'>
              <div className='flex items-center justify-start'>
                <div className='h-24 w-24 relative'>
                  <Image
                    src={urlFor(thema?.mobImage).url()}
                    alt={thema?.themaName + 'image'}
                    fill
                    className='rounded-cl object-cover'
                  />
                </div>
                <div className='text-grey-800 pl-4'>
                  <h3 className='mobile sm:desktop'>{thema.themaName}</h3>
                  <ArrowRightIcon
                    className='block h-4 w-4 text-green-600 mt-1'
                    aria-hidden='true'
                  />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRightIcon } from '@heroicons/react/outline';
import { urlFor } from '@/lib/sanity';

export default function ThemaList({ themaCards }) {
  return (
    <>
      <div className='hidden sm:block'>
        <ul
          role='list'
          className='grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4 sm:gap-x-10 max-w-8xl relative z-0'
        >
          {themaCards.map((thema) => (
            <li
              key={thema._id}
              className='relative drop-shadow-sm bg-green-800 hover:bg-green-600 w-full rounded-cl h-auto min-h-[25rem] cursor-pointer'
            >
              <div className='object-cover rounded-cl w-full max-h-[200px]'>
                {thema?.image && (
                  <Image
                    className='rounded-t-cl fill max-h-[200px]'
                    src={urlFor(thema?.image).url()}
                    alt={thema?.themaName + 'image'}
                    width={310}
                    height={400}
                  />
                )}
              </div>
              <div className='group block w-full p-4 rounded-cl'>
                <div className='inline-block'>
                  <h3 className='mobile sm:desktop mt-2 text-grey-100 pointer-events-none pb-4 hidden sm:inline'>
                    {thema.themaName}
                  </h3>
                  <p className='p-md text-green-200'>{thema.count} instrumenten</p>
                </div>
                <p className='p-md block text-grey-100 pointer-events-none py-4 mr-2'>
                  {thema.themaSubtitle}
                </p>
                <div className='group flex justify-end w-full pb-4 pr-4  absolute inset-x-0 bottom-0 right-0 rounded-cl'>
                  <Link href={`/${thema.transitionAgenda}/${thema.slug.current}`}>
                    <div className='h-12 w-12 rounded-full flex items-center justify-center border-2 border-grey-200 bg-transparent hover:bg-green-200 active:bg-green-300 focus:outline-none focus:bg-green-100 focus:ring-2 focus:ring-white self-end  text-grey-200 hover:text-green-600 hover:border-transparent'>
                      <ArrowRightIcon className='inline-block h-4 w-4' aria-hidden='true' />
                    </div>
                  </Link>
                </div>
              </div>
            </li>
          ))}
          <li className='w-full h-[400px] flex-grow bg-green-800 hover:bg-green-600 rounded-cl shadow'>
            <Link href='/contact' className='w-full h-full'>
              <div className='h-full w-full flex flex-col flex-grow p-8 '>
                <h3 className='mobile sm:desktop pb-4 text-grey-100'>Nieuwe thema’s</h3>
                <p className='p-md pt-4 text-grey-100'>
                  Stap voor stap werkt CircuLaw de instrumenten uit voor nieuwe thema&apos;s.
                </p>
                <p className='p-md pt-4 text-grey-100'>
                  Schrijf je in op onze nieuwsbrief en blijf op de hoogte van de laatste
                  ontwikkelingen.
                </p>
                <div className='flex grow self-baseline'>
                  <div href='/contact' target='_blank' className='self-end'>
                    <span className='text-grey-800 bg-grey-100 px-4 py-2 rounded-[56px] link-base-u0 break-words hover:bg-green-200 hover:text-green-600 active:text-green-800 focus:text-green-200 focus:ring-2 focus:ring-white'>
                      Houd me op de hoogte{' '}
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
          <Link key={thema.slug} href={`/${thema.transitionAgenda}/${thema.slug.current}`}>
            <div className='w-full rounded-cl bg-green-600 shadow my-6 py-4'>
              <div className='flex items-center justify-start'>
                <div className='w-36 relative'>
                  <Image
                    src={urlFor(thema?.mobileCardImage).url()}
                    alt={thema?.themaName + 'image'}
                    width={107}
                    height={114}
                  />
                </div>
                <div className='text-grey-800 pl-4'>
                  <h2 className='mobile mt-2 text-grey-100 pointer-events-none pb-4 inline sm:hidden'>
                    {thema.themaName}
                  </h2>
                  <p className='p-md text-green-200'>{thema.instrumentCount} instrumenten</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
        <div className='w-full h-[300px] flex-grow bg-green-800 rounded-cl shadow'>
          <Link href='/contact' className='w-full h-full'>
            <div className='h-full w-full flex flex-col flex-grow p-8 '>
              <h3 className='mobile sm:desktop pb-4 text-grey-100'>Nieuwe thema’s</h3>
              <p className='p-md pt-4 text-grey-100'>
                Stap voor stap werkt CircuLaw de instrumenten uit voor nieuwe thema&apos;s.
              </p>
              <p className='p-md pt-4 text-grey-100'>
                Schrijf je in op onze nieuwsbrief en blijf op de hoogte van de laatste
                ontwikkelingen.
              </p>
              <div className='flex grow self-baseline'>
                <div href='/contact' target='_blank' className='self-end'>
                  <span className='text-grey-800 bg-grey-100 px-4 py-2 rounded-[56px] link-base-u0 break-words hover:bg-green-200 hover:text-green-600 active:text-green-800 focus:text-green-200 focus:ring-2 focus:ring-white'>
                    Houd me op de hoogte{' '}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

import CustomButton from '../custom-button';
import { urlFor } from '@/lib/sanity';
import { ArrowRightIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import Link from 'next/link';

export default function ThemaCard({ themaCards }) {
  return (
    <>
      <div className='hidden sm:block'>
        <ul
          role='list'
          className='grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4 sm:gap-x-4 max-w-8xl relative z-0'
        >
          {themaCards?.map((thema, id) => (
            <Link href={`/${thema.transitionAgenda}/${thema.slug}`} key={id}>
              <li className='relative w-full rounded-cl h-[470px] group overflow-hidden flex flex-col shadow-lg'>
                <div className='object-cover rounded-cl w-full max-h-[180px]'>

                  {thema?.image && (
                    <Image
                      className='rounded-t-cl fill'
                      src={urlFor(thema?.image).url()}
                      alt={thema?.themaName + 'image'}
                      width={1440}
                      height={720}
                      priority={true}
                    />
                  )}
                  {thema.new === true && 
                  <div className='absolute top-12 -right-24 bg-green-400 text-white origin-center rotate-45 p-xs w-full text-center uppercase'>Nieuwe</div>}
                </div>
                <div className='group flex flex-col w-full h-full px-6 py-4 bg-green-600'>
                  <h3 className='heading-2xl-semibold text-gray-100 pointer-events-none hidden sm:inline'>
                    {thema.themaName}
                  </h3>
                  <p className='p-base text-green-200 pb-2'>{thema.count} instrumenten</p>
                  <p className='p-base text-gray-100 w-full'>{thema.homePageCardText}</p>
                  <div className='flex justify-end flex-grow items-end'>
                    <div className='h-12 w-12 rounded-full flex items-center justify-center border-2 border-gray-200 group-hover:border-green-200 bg-transparent group-hover:bg-green-200 active:bg-green-300 focus:outline-none focus:bg-green-100 focus:ring-2 focus:ring-white self-end  text-gray-200 group-hover:text-green-600'>
                      <ArrowRightIcon className='inline-block h-5 w-5' aria-hidden='true' />
                    </div>
                  </div>
                </div>
              </li>
            </Link>
          ))}
          <li className='w-full h-[470px] flex-grow bg-green-50 border border-gray-200 rounded-cl group'>
            <Link href='/nieuwsbrief' className='w-full h-full'>
              <div className='h-full w-full flex flex-col flex-grow p-8 justify-between'>
                <h3 className='heading-2xl-semibold text-green-600'>Nieuwe thema’s</h3>
                <div>
                  <p className='p-base pt-4 text-green-800'>
                    Stap voor stap werkt CircuLaw de instrumenten uit voor nieuwe thema&apos;s.
                  </p>
                  <p className='p-base pt-4 text-grenn-800'>
                    Schrijf je in op onze nieuwsbrief en blijf op de hoogte van de laatste
                    ontwikkelingen.
                  </p>
                </div>
                <div className='flex justify-center'>
                  <CustomButton color='darkGreenBG'>Houd me op de hoogte </CustomButton>
                </div>
              </div>
            </Link>
          </li>
        </ul>
      </div>
      <div className='block sm:hidden'>
        {themaCards?.map((thema, id) => (
          <Link key={id} href={`/${thema.transitionAgenda}/${thema.slug}`}>
            <div className='h-24 w-full rounded-cl bg-green-600 shadow my-6'>
              <div className='flex items-center justify-start'>
                <div className='h-24 w-24 relative'>
                  <Image
                    src={urlFor(thema?.mobileCardImage).url()}
                    alt={thema?.themaName + 'image'}
                    fill
                    className='rounded-l-cl object-cover'
                  />
                  {thema.new === true && 
                  <div className='p-2xs w-full bg-green-400 absolute bottom-0 right-0 text-center text-white pb-0.5 rounded-bl-cl uppercase'>Nieuwe</div>}
                </div>
                <div className='text-gray-100 pl-4'>
                  <h3 className='heading-2xl-semibold'>{thema.themaName}</h3>
                  <p className='p-base text-green-200'>{thema.count} instrumenten</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
        <div className='w-full bg-green-50 border border-gray-200 rounded-cl'>
          <Link href='/nieuwsbrief' className='w-full h-full'>
            <div className='h-full w-full flex flex-col justify-between flex-grow p-6'>
              <h3 className='heading-2xl-semibold pb-4 text-green-600'>Nieuwe thema’s</h3>
              <p className='p-base text-gren-800'>
                Stap voor stap werkt CircuLaw de instrumenten uit voor nieuwe thema&apos;s.
              </p>
              <p className='p-base pt-4 text-green-800'>
                Schrijf je in op onze nieuwsbrief en blijf op de hoogte van de laatste
                ontwikkelingen.
              </p>
              <div className='flex grow self-baseline pt-6'>
                <CustomButton color='darkGreenBG'>Houd me op de hoogte </CustomButton>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

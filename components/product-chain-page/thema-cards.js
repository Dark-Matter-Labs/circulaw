import CustomButton from '../custom-button';
import { urlFor } from '@/lib/sanity';
import { IconArrowRight } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';

export default function ThemaCard({ themaCards }) {
  return (
    <>
      <div className='hidden sm:block'>
        <ul
          role='list'
          className='max-w-8xl relative z-0 grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-4 md:grid-cols-2 lg:grid-cols-4'
        >
          {themaCards?.map((thema, id) => (
            <Link href={`/${thema.transitionAgenda}/${thema.slug}`} key={id}>
              <li className='group relative flex h-[470px] w-full flex-col overflow-hidden rounded-cl shadow-lg'>
                <div className='max-h-[180px] w-full rounded-cl object-cover'>
                  {thema?.image && (
                    <Image
                      className='fill rounded-t-cl'
                      src={urlFor(thema?.image).url()}
                      alt={thema?.themaName + 'image'}
                      width={1440}
                      height={720}
                      priority={true}
                      placeholder='blur'
                      blurDataURL={thema?.metadata.lqip}
                    />
                  )}
                  {thema.new === true && (
                    <div className='p-xs absolute -right-24 top-12 w-full origin-center rotate-45 bg-green-400 text-center uppercase text-white'>
                      Nieuw
                    </div>
                  )}
                </div>
                <div className='group flex h-full w-full flex-col bg-green-600 px-6 py-4'>
                  <h3 className='heading-2xl-semibold pointer-events-none hidden text-gray-100 sm:inline'>
                    {thema.themaName}
                  </h3>
                  <p className='p-base pb-2 text-green-200'>{thema.count} instrumenten</p>
                  <p className='p-base w-full text-gray-100'>{thema.homePageCardText}</p>
                  <div className='flex flex-grow items-end justify-end'>
                    <div className='flex h-12 w-12 items-center justify-center self-end rounded-full border-2 border-gray-200 bg-transparent text-gray-200 focus:bg-green-100 focus:outline-none focus:ring-2 focus:ring-white active:bg-green-300 group-hover:border-green-200 group-hover:bg-green-200 group-hover:text-green-600'>
                      <IconArrowRight className='inline-block h-6 w-6' aria-hidden='true' />
                    </div>
                  </div>
                </div>
              </li>
            </Link>
          ))}
          <li className='group h-[470px] w-full flex-grow rounded-cl border border-gray-200 bg-green-50'>
            <Link href='/nieuwsbrief' className='h-full w-full'>
              <div className='flex h-full w-full flex-grow flex-col justify-between p-8'>
                <h3 className='heading-2xl-semibold text-green-600'>Nieuwe thema’s</h3>
                <div>
                  <p className='p-base pt-4 text-green-800'>
                    Stap voor stap werkt CircuLaw de instrumenten uit voor nieuwe thema&apos;s.
                  </p>
                  <p className='p-base text-grenn-800 pt-4'>
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
            <div className='my-6 h-24 w-full rounded-cl bg-green-600 shadow'>
              <div className='flex items-center justify-start'>
                <div className='relative h-24 w-24'>
                  <Image
                    src={urlFor(thema?.mobileCardImage).url()}
                    alt={thema?.themaName + 'image'}
                    fill
                    className='rounded-l-cl object-cover'
                    placeholder='blur'
                    blurDataURL={thema?.metadata.lqip}
                  />
                  {thema.new === true && (
                    <div className='p-2xs absolute bottom-0 right-0 w-full rounded-bl-cl bg-green-400 pb-0.5 text-center uppercase text-white'>
                      Nieuw
                    </div>
                  )}
                </div>
                <div className='pl-4 text-gray-100'>
                  <h3 className='heading-2xl-semibold'>{thema.themaName}</h3>
                  <p className='p-base text-green-200'>{thema.count} instrumenten</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
        <div className='w-full rounded-cl border border-gray-200 bg-green-50'>
          <Link href='/nieuwsbrief' className='h-full w-full'>
            <div className='flex h-full w-full flex-grow flex-col justify-between p-6'>
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

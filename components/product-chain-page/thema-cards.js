import Image from 'next/image';
import Link from 'next/link';

import { urlFor } from '@/lib/sanity';
import newthemasvg from '@/public/new-thema-cta.svg';

import NewButton from '../shared/new-button';
import NewRoundButton from '../shared/new-round-button';

export default function ThemaCard({ themaCards }) {
  return (
    <>
      <div className='hidden sm:block'>
        <ul
          role='list'
          className='max-w-8xl relative z-0 grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-4 md:grid-cols-2 lg:grid-cols-3'
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
                <div className='group flex h-full w-full flex-col bg-green-100 px-6 py-4'>
                  <h3 className='heading-2xl-semibold pointer-events-none hidden text-cl-black sm:inline'>
                    {thema.themaName}
                  </h3>
                  <p className='p-base p-xs pb-2 text-green-500'>{thema.count} instrumenten</p>
                  <p className='p-base w-full text-cl-black'>{thema.homePageCardText}</p>
                  <div className='flex flex-grow items-end justify-start'>
                    <NewRoundButton variant='orange' />
                  </div>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className='block sm:hidden'>
        {themaCards?.map((thema, id) => (
          <Link key={id} href={`/${thema.transitionAgenda}/${thema.slug}`}>
            <div className='my-6 h-24 w-full rounded-cl bg-green-500 shadow'>
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
                <div className='pl-4 text-green-100'>
                  <h3 className='heading-2xl-semibold'>{thema.themaName}</h3>
                  <p className='p-base text-green-300'>{thema.count} instrumenten</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {themaCards[0].transitionAgenda !== 'bouw' && (
        <div className='mt-20 flex w-full flex-col md:flex-row items-center justify-between rounded-cl bg-green-400 px-6 md:px-20 py-6 gap-y-6'>
          <div className='flex flex-col items-center justify-between'>
            <Image src={newthemasvg} height={85} width={85} className='mb-4' />
            <h3 className='heading-2xl-semibold text-nowrap text-cl-black'>Nieuwe thema’s</h3>
          </div>
          <div className='max-w-[550px]'>
            <p className='p-base text-cl-black'>
              Stap voor stap werkt CircuLaw de instrumenten uit voor nieuwe thema&apos;s.
            </p>
            <p className='p-base text-cl-black'>
              Schrijf je in op onze nieuwsbrief en blijf op de hoogte van de laatste ontwikkelingen.
            </p>
          </div>
          <div className='flex justify-start md:justify-center w-full'>
            <NewButton variant='secondaryLight' href='/nieuwsbrief'>
              Houd me op de hoogte{' '}
            </NewButton>
          </div>
        </div>
      )}
    </>
  );
}

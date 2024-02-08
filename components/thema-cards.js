import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity'
import { ArrowRightIcon } from '@heroicons/react/outline'


export default function ThemaCard({themaCards}) {
    
    return (
        <>
          <div className='hidden sm:block'>
        <ul
          role='list'
          className='grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4 sm:gap-x-10 max-w-8xl relative z-0'
        >
          {themaCards.map((thema, id) => (
            <Link href={`/${thema.transitionAgenda}/${thema.slug}`} key ={id} >
            <li
              className='relative w-full rounded-cl h-auto min-h-[25rem] group'
            >
              <div className='object-cover rounded-cl w-full max-h-[200px]'>
       
                  {thema?.image && (
                    <Image
                      className='rounded-t-cl fill max-h-[200px]'
                      src={urlFor(thema?.image).url()}
                      alt={thema?.themaName + 'image'}
                      width={1440}
                      height={720}
                    />
                  )}
              </div>
              <div className='group block w-full p-4 bg-green-600'>
                <div className='inline-block'>
                    <h3 className='mobile sm:desktop mt-2 text-grey-100 pointer-events-none pb-4 hidden sm:inline'>
                      {thema.themaName}
                    </h3>
                    <p className='p-md text-green-200'>{thema.count} instrumenten</p>

                </div>
                  <p className='p-md block text-grey-100 pointer-events-none py-4 w-full'>
                    {thema.homePageCardText}
                  </p>
                <div className='group flex justify-end w-full pb-4 pr-4 bg-green-600 absolute inset-x-0 bottom-0 right-0 rounded-b-cl'>
                <div className='h-12 w-12 rounded-full flex items-center justify-center border-2 border-grey-200 group-hover:border-green-200 bg-transparent group-hover:bg-green-200 active:bg-green-300 focus:outline-none focus:bg-green-100 focus:ring-2 focus:ring-white self-end  text-grey-200 group-hover:text-green-600'>
                      <ArrowRightIcon className='inline-block h-4 w-4' aria-hidden='true' />
                    </div>
                </div>
              </div>
            </li>
            </Link>
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
        {themaCards.map((thema, id) => (
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
                </div>
                <div className='text-grey-100 pl-4'>
                  <h3 className='p-4xl-semibold'>{thema.themaName}</h3>
                  <p className='p-md text-green-200'>{thema.count} instrumenten</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
          <div className='w-full bg-green-800 hover:bg-green-600 rounded-cl shadow'>
            <Link href='/contact' className='w-full h-full'>
              <div className='h-full w-full flex flex-col justify-between flex-grow p-6'>
                <h3 className='p-4xl-semibold pb-4 text-grey-100'>Nieuwe thema’s</h3>
                <p className='p-base text-grey-100'>
                  Stap voor stap werkt CircuLaw de instrumenten uit voor nieuwe thema&apos;s.
                </p>
                <p className='p-base pt-4 text-grey-100'>
                  Schrijf je in op onze nieuwsbrief en blijf op de hoogte van de laatste
                  ontwikkelingen.
                </p>
                <div className='flex grow self-baseline pt-6'>
                  <div href='/contact' target='_blank' className='self-end'>
                    <div className='text-grey-800 bg-grey-100 px-4 py-2 rounded-[56px] link-base-u0 break-words hover:bg-green-200 hover:text-green-600 active:text-green-800 focus:text-green-200 focus:ring-2 focus:ring-white'>
                      Houd me op de hoogte{' '}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
      </div></>
    )
}
import Image from 'next/image';
import Link from 'next/link';

import { urlFor } from '@/lib/sanity';
import { IconArrowRight } from '@tabler/icons-react';

export default function PCHomePage({ pcData }) {
  return (
    <>
      {' '}
      <ul className='hidden w-full grid-cols-2 gap-x-2 gap-y-4 sm:grid md:grid-cols-3 lg:grid-cols-5'>
        {pcData?.map((chain, id) => (
          <Link key={id} href={`/${chain.slug}`}>
            <li className='group relative flex h-[400px] w-auto max-w-[250px] flex-col justify-between overflow-hidden rounded-cl'>
              <Image
                src={urlFor(chain?.image).url()}
                alt={chain.alt}
                fill
                placeholder='blur'
                blurDataURL={chain?.metadata.lqip}
                sizes='(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 33vw'
                className='h-[37.5%] w-auto origin-center rounded-t-cl object-cover transition-transform duration-300 group-hover:scale-110'
              />
              <div className='absolute bottom-0 left-0 flex h-[72%] flex-col justify-between rounded-b-cl bg-cl-black px-6 pb-4 pt-5 transition-all duration-300 group-hover:translate-y-[20px] group-hover:bg-green-500'>
                <div className='flex h-[180px] origin-center flex-col justify-center divide-y-[0.5px] divide-green-500 transition-all duration-300 group-hover:-translate-y-[20px] group-hover:divide-green-100'>
                  <div className='heading-2xl-semibold flex h-1/2 w-full items-end break-words pb-3 text-white transition duration-300'>
                    <div
                      className={`${
                        chain.pcName === 'Consumptiegoederen' ? 'max-w-[146px]' : ''
                      } [overflow-wrap:anywhere]`}
                    >
                      {chain.pcName === 'Consumptiegoederen' ? (
                        <>
                          <span className='whitespace-nowrap'>Consumptie-</span>
                          <span>goederen</span>
                        </>
                      ) : (
                        <span>{chain.pcName}</span>
                      )}
                    </div>
                  </div>
                  <div className='p-base h-1/2 pt-3 text-green-300 transition duration-300'>
                    {chain.cardText}
                  </div>
                </div>
                <div className='grid justify-items-end transition-all duration-300 group-hover:-translate-y-[20px]'>
                  <div className='flex h-10 w-10 items-center justify-center self-end rounded-full border-2 border-white bg-transparent text-white focus:bg-green-200 focus:outline-none focus:ring-2 focus:ring-white active:bg-green-400 group-hover:border-green-300 group-hover:bg-green-300 group-hover:text-green-500'>
                    <IconArrowRight className='inline-block h-5 w-5' aria-hidden='true' />
                  </div>
                </div>
              </div>
            </li>
          </Link>
        ))}
      </ul>
      <ul className='flex w-full flex-col sm:hidden'>
        {pcData.map((chain, id) => (
          <li key={id} className='mb-6 block h-32 w-full rounded-cl bg-cl-black shadow sm:hidden'>
            <Link href={`/${chain.slug}`} className='h-full w-full'>
              <div className='flex items-center justify-between'>
                <div className='relative flex h-32 w-28 items-center justify-center'>
                  <Image
                    src={urlFor(chain?.image).url()}
                    alt={chain.alt}
                    fill
                    sizes='(max-width: 768px) 30vw'
                    placeholder='blur'
                    blurDataURL={chain?.metadata.lqip}
                    className='h-full w-full rounded-l-cl object-cover'
                  />
                </div>
                <div className='ml-4 w-full max-w-[170px] break-words text-green-100'>
                  <h3 className='heading-2xl-semibold w-full break-words'>
                    {' '}
                    {chain.pcName === 'Consumptiegoederen' ? (
                      <span className='max-w-[144px]'>Consumptie-goederen</span>
                    ) : (
                      <span>{chain.pcName}</span>
                    )}
                  </h3>
                  <h4 className='p-sm text-green-300'>{chain.themaCount} thema&apos;s</h4>
                </div>
                <div className='mr-4 grid justify-items-end'>
                  <div className='flex h-10 w-10 items-center justify-center self-end rounded-full border-2 border-white bg-transparent text-white focus:bg-green-200 focus:outline-none focus:ring-2 focus:ring-white active:bg-green-400 group-hover:border-green-300 group-hover:bg-green-300 group-hover:text-green-500'>
                    <IconArrowRight className='inline-block h-5 w-5' aria-hidden='true' />
                  </div>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

import Image from 'next/image';
import Link from 'next/link';

import { urlFor } from '@/lib/sanity';
import { IconArrowRight } from '@tabler/icons-react';

import NewRoundButton from '../shared/new-round-button';
import TitleDecorator from '../title-decorator';

export default function PCHomePage({ pcData }) {
  return (
    <>
      <div className='relative hidden w-full p-4 sm:flex'>
        <div className='gradient-homepage-cards absolute bottom-0 right-0 h-1/2 w-full rotate-180 rounded-cl' />
        <ul className='no-scrollbar relative z-20 flex h-full w-full snap-mandatory flex-row gap-x-8 overflow-scroll'>
          {pcData?.map((chain, id) => (
            <Link
              key={id}
              href={`/${chain.slug}`}
              className='group flex min-w-[190px] max-w-[256px] grow basis-1/5'
            >
              <li className='relative flex w-full flex-col'>
                <Image
                  src={urlFor(chain?.image).url()}
                  alt={chain.alt}
                  fill
                  placeholder='blur'
                  blurDataURL={chain?.metadata.lqip}
                  sizes='(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 33vw'
                  className='relative h-[430px] rounded-cl object-cover'
                />
                <div className='p-base-semibold p-base absolute bottom-[211px] rounded-b-cl bg-green-500/50 p-2 pt-3 text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100'>
                  {chain.cardText}
                </div>
                <div className='w-full'>
                  {chain.pcName === 'Consumptiegoederen' && (
                    <div className='heading-3xl-semibold min-h-[100px] items-end break-words pt-4 text-green-500'>
                      Consumptie-goederen
                    </div>
                  )}
                  {chain.pcName === 'Bouw' && (
                    <div className='heading-3xl-semibold min-h-[100px] items-end break-words pt-4 text-green-500'>
                      Bouw en infra
                    </div>
                  )}
                  {chain.pcName === 'Biomassa en voedsel' && (
                    <div className='heading-3xl-semibold break-pretty min-h-[100px] items-end break-words pt-4 text-green-500'>
                      {chain.pcName}
                    </div>
                  )}
                  {chain.pcName === 'Maakindustrie' && (
                    <div className='heading-3xl-semibold min-h-[100px] items-end break-words pt-4 text-green-500'>
                      Maak-Industrie
                    </div>
                  )}
                  {chain.pcName === 'Kunststoffen' && (
                    <div className='heading-3xl-semibold min-h-[100px] items-end break-words pt-4 text-green-500 lg:mr-6'>
                      Kunst-stoffen
                    </div>
                  )}
                  <TitleDecorator width='w-2/3' />
                  <div className='mb-3 mt-6 flex h-12 w-12 items-center justify-center self-end rounded-full border border-green-500 bg-transparent text-green-500'>
                    <IconArrowRight className='inline-block size-6' aria-hidden='true' />
                  </div>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className='flex flex-col gap-y-[10px] sm:hidden'>
        {pcData.map((chain, id) => (
          <Link key={id} href={`/${chain.slug}`}>
            <div className='h-28 w-full rounded-cl bg-green-200 shadow'>
              <div className='flex items-center justify-start'>
                <div className='relative !h-28 !w-24'>
                  <Image
                    src={urlFor(chain?.image).url()}
                    alt={chain.alt}
                    fill
                    className='rounded-l-cl object-cover'
                    placeholder='blur'
                    blurDataURL={chain?.metadata.lqip}
                  />
                </div>
                <div className='flex grow flex-row items-center justify-between pl-6 pr-4 text-green-500'>
                  <div>
                    {chain.pcName === 'Consumptiegoederen' ? (
                      <div className='heading-xl-semibold max-w-24'>Consumptie-goederen</div>
                    ) : (
                      <h3 className='heading-xl-semibold max-w-24'>{chain.pcName}</h3>
                    )}
                    {chain.themaCount === 1 ? (
                      <p className='p-xs-semibold text-green-500'>{chain.themaCount} Thema</p>
                    ) : (
                      <p className='p-xs-semibold text-green-500'>
                        {chain.themaCount} Thema&apos;s
                      </p>
                    )}
                  </div>
                  <div className='flex items-center justify-end'>
                    <NewRoundButton variant='green' />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

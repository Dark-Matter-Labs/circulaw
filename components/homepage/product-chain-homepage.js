'use client';

import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { urlFor } from '@/lib/sanity';
import { IconArrowRight } from '@tabler/icons-react';

import Badge from '../shared/new-badge';
import NewRoundButton from '../shared/new-round-button';
import TitleDecorator from '../title-decorator';

export default function PCHomePage({ pcData }) {
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredProductChain, setHoveredProductChain] = useState('');

  function handleMouseLeave() {
    setIsHovered(false);
    setHoveredProductChain('');
  }

  return (
    <>
      <div className='relative hidden h-[800px] w-full sm:flex'>
        <div
          className={`${isHovered ? 'opacity-0' : 'opacity-100'} gradient-homepage-cards absolute bottom-[127px] right-0 h-1/2 w-full rotate-180 rounded-cl transition-all duration-300`}
        />
        <ul
          className='no-scrollbar group relative z-20 flex h-full w-full snap-mandatory flex-row overflow-scroll'
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => handleMouseLeave()}
        >
          {pcData?.map((chain, id) => (
            <Link
              key={id}
              href={`/${chain.slug}`}
              className={`${hoveredProductChain === chain.slug ? 'relative h-[770px] bg-green-200' : 'h-[673px]'} group flex min-w-[240px] grow basis-1/5 rounded-cl p-4 transition-all duration-300`}
              onMouseEnter={() => setHoveredProductChain(chain.slug)}
            >
              <li className='relative flex w-full flex-col'>
                <div
                  className={`relative w-full overflow-hidden rounded-b-cl transition-all duration-300 ${hoveredProductChain === chain.slug ? 'h-[350px]' : 'h-[430px]'}`}
                >
                  <Image
                    src={urlFor(chain?.image).url()}
                    alt={chain.alt}
                    fill
                    placeholder='blur'
                    blurDataURL={chain?.metadata.lqip}
                    sizes='(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 33vw'
                    className='relative h-[430px] rounded-cl object-cover'
                  />
                </div>
                <div className='flex w-full max-w-[200px] grow flex-col justify-between'>
                  <div>
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
                        Maak-industrie
                      </div>
                    )}
                    {chain.pcName === 'Kunststoffen' && (
                      <div className='heading-3xl-semibold min-h-[100px] items-end break-words pt-4 text-green-500 lg:mr-6'>
                        Kunst-stoffen
                      </div>
                    )}
                    <TitleDecorator width='w-2/3' />
                  </div>
                  <div
                    className={`absolute left-0 top-[510px] w-full opacity-0 transition-all duration-300 ${hoveredProductChain === chain.slug ? 'opacity-100' : 'h-0'} p-base`}
                  >
                    <div className='mb-4 flex flex-col gap-y-2'>
                      <Badge variant='black'>
                        {chain.themaCount === 1 ? (
                          <span className=''>{chain.themaCount} Thema</span>
                        ) : (
                          <span className=''>{chain.themaCount} Thema&apos;s</span>
                        )}
                      </Badge>
                      {chain.slug === 'bouw' && <Badge variant='black'>3 Toepassingen</Badge>}
                    </div>
                    <p>{chain.cardText}</p>
                  </div>

                  <div className='mb-3 mt-6 flex h-12 w-12 items-center justify-center self-start rounded-full border border-green-500 bg-transparent text-green-500'>
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

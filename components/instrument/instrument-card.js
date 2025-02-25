import Image from 'next/image';
import Link from 'next/link';

import Tag from '@/components/tag';
import { urlFor } from '@/lib/sanity';

export default function InstrumentCard({ instrument, images }) {
  return (
    <>
      <div className='flex'>
        <div className='group mb-6 hidden shrink flex-row items-center justify-start rounded-cl p-4 transition-all duration-100 hover:shadow-card sm:flex'>
          {images === true && (
            <div className='sm:md-0 relative mb-4 flex h-44 w-full items-center rounded-cl sm:mb-0 sm:mr-6 sm:h-44 sm:w-64'>
              {instrument.featuredImage && (
                <Image
                  src={urlFor(instrument?.featuredImage).url()}
                  alt={instrument?.featuredImage?.altText}
                  fill
                  placeholder='blur'
                  blurDataURL={instrument?.metadata.lqip}
                  className='absolute rounded-cl object-cover'
                />
              )}
            </div>
          )}
          <div className='block sm:w-[760px]'>
            <Link
              href={`/${instrument.transitionAgenda}/${instrument.thema}/instrumenten/${instrument.slug.current}`}
              key={instrument.titel}
            >
              <div className='block'>
                <div className='-ml-1 flex items-center justify-start'>
                  {/* Expertise Tag */}
                  {instrument?.beleid === true && (
                    <Tag classes='bg-green-500 text-gray-100 mr-2'>Beleid</Tag>
                  )}
                  {instrument?.inkoop === true && (
                    <Tag classes='bg-green-500 text-gray-100 mr-2'>Inkoop</Tag>
                  )}
                  {instrument?.grondpositie === true && (
                    <Tag classes='bg-green-500 text-gray-100 mr-2'>Grondpositie</Tag>
                  )}
                  {instrument?.subsidie === true && (
                    <Tag classes='bg-green-500 text-gray-100 mr-2'>Subsidie</Tag>
                  )}
                  {instrument?.fiscaal === true && (
                    <Tag classes='bg-green-500 text-gray-100 mr-2'>Fiscaal</Tag>
                  )}
                </div>
                <div className='mt-2 block'>
                  <div className='mb-2'>
                    <h3 className='heading-2xl-semibold max-w-[650px] text-cl-black no-underline transition-colors duration-100 focus:text-green-200 focus:ring-2 focus:ring-white active:text-cl-black group-hover:text-green-400'>
                      {instrument.titel}{' '}
                    </h3>
                  </div>
                  <div className='newlineDisplay p-base mt-2 block pb-2 text-cl-black'>
                    <p className='p-base line-clamp-3 sm:max-w-[650px]'>{instrument.introText}</p>
                  </div>
                  <div className=''>
                    <div className='items-st mt-4 flex h-auto w-full grow-0 flex-row gap-x-3 justify-self-start'>
                      <div className='flex basis-houdbaarheid flex-col'>
                        <div className='p-2xs-semibold mb-1 text-cl-dark-grey'>
                          Juridische houdbaarheid
                        </div>
                        <div className='flex items-center'>
                          <div className='p-xs-semibold rounded-cl bg-green-50 p-1 text-green-500'>
                            {instrument?.juridischeHaalbaarheid}
                          </div>
                        </div>
                      </div>
                      <div className='flex basis-invloed flex-col'>
                        <div className='p-2xs-semibold mb-1 text-cl-dark-grey'>Invloed</div>
                        <div className='flex items-center'>
                          <div className='p-xs-semibold rounded-cl bg-green-50 p-1 text-green-500'>
                            {instrument?.juridischInvloed}
                          </div>
                        </div>
                      </div>
                      <div className='flex basis-overheidslaag flex-col'>
                        <div className='p-2xs-semibold mb-1 text-cl-dark-grey'>Overheidslaag</div>
                        <div className='p-xs-semibold flex text-green-500'>
                          <div className='shrink rounded-cl bg-green-50 p-1'>
                            {instrument?.overheidslaag
                              ?.filter((x) => x !== null)
                              .map((level) => (
                                <span key={level} className=''>
                                  {level}{' '}
                                  {instrument?.overheidslaag?.slice(-1)[0] !== level && (
                                    <span>-</span>
                                  )}
                                  &nbsp;
                                </span>
                              ))}
                          </div>
                        </div>
                      </div>
                      <div className='flex basis-rladder flex-col'>
                        <div className='p-2xs-semibold mb-1 text-cl-dark-grey'>R-ladder</div>
                        <div className='flex items-center'>
                          <div className='flex flex-row items-center'>
                            <div className='shrink rounded-cl bg-green-50 p-1'>
                              {instrument?.rLadder?.map((rValue) => (
                                <span key={rValue} className='p-xs-semibold text-green-500'>
                                  {rValue}{' '}
                                  {instrument?.rLadder.slice(-1)[0] !== rValue && <span>-</span>}
                                  &nbsp;
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* MOBILE */}
        <Link
          href={`/${instrument.transitionAgenda}/${instrument.thema}/instrumenten/${instrument.slug.current}`}
          key={instrument.titel}
        >
          <div className='mb-10 block rounded-cl bg-green-50 p-4 sm:mb-8 sm:ml-0 sm:hidden md:max-w-[760px]'>
            {images === true && (
              <div className='sm:md-0 relative mb-4 flex h-44 w-full items-center rounded-cl sm:mb-0 sm:mr-6 sm:h-44 sm:w-64'>
                {instrument.featuredImage && (
                  <Image
                    src={urlFor(instrument?.featuredImage).url()}
                    alt={instrument?.featuredImage?.altText}
                    fill
                    placeholder='blur'
                    blurDataURL={instrument?.metadata.lqip}
                    className='absolute rounded-cl object-cover'
                  />
                )}
              </div>
            )}
            <div className=''>
              <div className='-ml-1 flex items-center justify-start'>
                {/* Expertise Tag */}
                <Tag classes='border border-green-400 bg-transparent text-green-400 mr-2'>
                  {instrument.thema}
                </Tag>
                {instrument?.categorie?.includes('beleid') && (
                  <Tag classes='bg-green-500 text-gray-100 mr-2'>Beleid</Tag>
                )}
                {instrument?.categorie?.includes('inkoop') && (
                  <Tag classes='bg-green-500 text-gray-100 mr-2'>Inkoop</Tag>
                )}
                {instrument?.categorie?.includes('grondpositie') && (
                  <Tag classes='bg-green-500 text-gray-100 mr-2'>Grondpositie</Tag>
                )}
                {instrument?.categorie?.includes('subsidie') && (
                  <Tag classes='bg-green-500 text-gray-100 mr-2'>Subsidie</Tag>
                )}
                {instrument?.categorie?.includes('fiscaal') && (
                  <Tag classes='bg-green-500 text-gray-100'>Fiscaal</Tag>
                )}
              </div>
              <div className='mt-2 block'>
                <div className='mb-2'>
                  <h3 className='heading-2xl-semibold focus:ring-winstrumente max-w-[650px] text-cl-black no-underline hover:text-green-400 focus:text-green-200 focus:ring-2 active:text-cl-black'>
                    {instrument.titel}{' '}
                  </h3>
                </div>
                <div className='newlineDisplay p-base mt-2 block pb-2 text-cl-black'>
                  <p className='p-base line-clamp-4 max-w-[650px]'>{instrument.introText}</p>
                </div>
                <div className='mb-4 flex flex-col justify-center sm:hidden'>
                  <div className='flex h-auto flex-row justify-between py-2'>
                    <div className='flex flex-col justify-center'>
                      <div className='p-xs-semibold text-cl-dark-grey sm:py-1'>
                        Juridische houdbaarheid
                      </div>
                      <div className='flex items-center'>
                        <div className='p-xs-semibold rounded-cl bg-green-100 px-1.5 py-1 text-green-500'>
                          {instrument?.juridischeHaalbaarheid}
                        </div>
                      </div>
                    </div>
                    <div className='flex flex-col justify-center'>
                      <div className='p-xs-semibold py-1 text-cl-dark-grey'>Invloed</div>
                      <div className='flex items-center'>
                        <div className='p-xs-semibold rounded-cl bg-green-100 px-1.5 py-1 text-green-500'>
                          {instrument?.juridischInvloed}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='flex h-auto py-2'>
                    <div className='flex flex-col justify-center'>
                      <div className='p-xs-semibold py-1 text-cl-dark-grey'>Overheidslaag</div>
                      <div className='p-xs-semibold rounded-cl bg-green-100 p-1 pl-1.5 text-green-500'>
                        {instrument?.overheidslaag
                          ?.filter((x) => x !== null)
                          .map((level) => (
                            <span key={level} className=''>
                              {level}{' '}
                              {instrument?.overheidslaag.slice(-1)[0] !== level && <span>-</span>}
                              &nbsp;
                            </span>
                          ))}
                      </div>
                    </div>
                  </div>
                  <div className='flex py-2'>
                    <div className='flex flex-col justify-center'>
                      <div className='p-xs-semibold py-1 text-cl-dark-grey'>R-ladder</div>
                      <div className='flex items-center'>
                        <div className='flex flex-row items-center rounded-cl bg-green-100 p-1 pl-1.5'>
                          {instrument?.rLadder?.map((rValue) => (
                            <div key={rValue} className='p-xs-semibold text-green-500'>
                              {rValue}{' '}
                              {instrument?.rLadder.slice(-1)[0] !== rValue && <span>-</span>}
                              &nbsp;
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

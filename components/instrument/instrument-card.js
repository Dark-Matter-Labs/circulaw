import Link from 'next/link';
import Tag from '../tag';
import Image from 'next/image';
import { urlFor } from '@/lib/sanity';

export default function InstrumentCard({ instrument, images }) {
  return (
    <>
      <div className='flex'>
        <div className='hidden sm:flex flex-row justify-start items-center p-4 rounded-cl group hover:shadow-card transition-all duration-100 mb-6 shrink'>
          {images === true && (
            <div className='flex items-center w-full h-44 sm:md-0 sm:w-64 sm:h-44 rounded-cl sm:mr-6 mb-4 sm:mb-0 relative '>
              {instrument.featuredImage && (
                <Image
                  src={urlFor(instrument?.featuredImage).url()}
                  alt={instrument?.featuredImage?.altText}
                  fill
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
                <div className='flex justify-start items-center -ml-1'>
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
                <div className='block mt-2'>
                  <div className=' mb-2'>
                    <h3 className='heading-2xl-semibold max-w-[650px] text-gray-800 no-underline group-hover:text-green-300 transition-colors duration-100 active:text-green-800 focus:text-green-200 focus:ring-2 focus:ring-white'>
                      {instrument.titel}{' '}
                    </h3>
                  </div>
                  <div className='block newlineDisplay p-base text-gray-800 mt-2 pb-2'>
                    <p className='p-base sm:max-w-[650px] line-clamp-3'>{instrument.introText}</p>
                  </div>
                  <div className=''>
                    <div className='h-auto flex flex-row gap-x-3 grow-0 items-center justify-self-center mt-4'>
                      <div className='flex flex-col basis-houdbaarheid'>
                        <div className='p-2xs-semibold text-gray-600 mb-1'>
                          Juridische houdbaarheid
                        </div>
                        <div className='flex items-center'>
                          <div className='p-xs-semibold text-green-500 bg-green-50 p-1 rounded-cl'>
                            {instrument?.juridischeHaalbaarheid}
                          </div>
                        </div>
                      </div>
                      <div className='flex flex-col basis-invloed'>
                        <div className='p-2xs-semibold text-gray-600 mb-1'>Invloed</div>
                        <div className='flex items-center'>
                          <div className='p-xs-semibold text-green-500 bg-green-50 p-1 rounded-cl'>
                            {instrument?.juridischInvloed}
                          </div>
                        </div>
                      </div>
                      <div className='flex flex-col basis-overheidslaag'>
                        <div className='p-2xs-semibold text-gray-600 mb-1'>Overheidslaag</div>
                        <div className='p-xs-semibold text-green-500  flex'>
                          <div className='shrink bg-green-50 p-1 rounded-cl'>
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
                      <div className='flex flex-col basis-rladder'>
                        <div className='p-2xs-semibold text-gray-600 mb-1'>R-ladder</div>
                        <div className='flex items-center'>
                          <div className='flex flex-row items-center'>
                            <div className='shrink bg-green-50 p-1 rounded-cl'>
                              {instrument?.rLadder?.map((rValue) => (
                                <span key={rValue} className='p-xs-semibold text-green-500 '>
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
          <div className='block sm:hidden sm:ml-0 mb-10 sm:mb-8 md:max-w-[760px] p-4 bg-green-50 rounded-cl'>
            {images === true && (
              <div className='flex items-center w-full h-44 sm:md-0 sm:w-64 sm:h-44 rounded-cl sm:mr-6 mb-4 sm:mb-0 relative '>
                {instrument.featuredImage && (
                  <Image
                    src={urlFor(instrument?.featuredImage).url()}
                    alt={instrument?.featuredImage?.altText}
                    fill
                    className='absolute rounded-cl object-cover'
                  />
                )}
              </div>
            )}
            <div className=''>
              <div className='flex justify-start items-center -ml-1'>
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
              <div className='block mt-2 '>
                <div className=' mb-2'>
                  <h3 className='heading-2xl-semibold max-w-[650px] text-gray-800 no-underline hover:text-green-300 active:text-green-800 focus:text-green-200 focus:ring-2 focus:ring-winstrumente'>
                    {instrument.titel}{' '}
                  </h3>
                </div>
                <div className='block  newlineDisplay p-base text-gray-800 mt-2 pb-2'>
                  <p className='p-base max-w-[650px] line-clamp-4'>{instrument.introText}</p>
                </div>
                <div className='flex flex-col sm:hidden justify-center mb-4'>
                  <div className='flex flex-row justify-between h-auto py-2'>
                    <div className='flex flex-col justify-center'>
                      <div className='p-xs-semibold sm:py-1 text-gray-600'>
                        Juridische houdbaarheid
                      </div>
                      <div className='flex items-center'>
                        <div className='p-xs-semibold text-green-500 bg-green-100 px-1.5 py-1 rounded-cl'>
                          {instrument?.juridischeHaalbaarheid}
                        </div>
                      </div>
                    </div>
                    <div className='flex flex-col justify-center'>
                      <div className='p-xs-semibold py-1 text-gray-600'>Invloed</div>
                      <div className='flex items-center'>
                        <div className='p-xs-semibold text-green-500 bg-green-100 px-1.5 py-1 rounded-cl'>
                          {instrument?.juridischInvloed}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='flex h-auto py-2'>
                    <div className='flex flex-col justify-center'>
                      <div className='p-xs-semibold py-1 text-gray-600'>Overheidslaag</div>
                      <div className='p-xs-semibold text-green-500 bg-green-100 pl-1.5 p-1 rounded-cl'>
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
                      <div className='p-xs-semibold py-1 text-gray-600'>R-ladder</div>
                      <div className='flex items-center'>
                        <div className='flex flex-row items-center bg-green-100 pl-1.5 p-1 rounded-cl'>
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

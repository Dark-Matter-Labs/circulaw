import { Highlight } from 'react-instantsearch';

import Link from 'next/link';

import Tag from '@/components/tag';

export const InstrumentHit = ({ hit }) => {
  return (
    <>
      <article className='group hidden w-[760px] rounded-cl p-4 transition-all duration-100 hover:shadow-card sm:block'>
        <Link
          href={`/${hit?.transitionAgenda?.toLowerCase()}/${hit?.thema?.toLowerCase()}/instrumenten/${
            hit.slug
          }`}
        >
          <div className='block'>
            <div className='-ml-1 flex items-center justify-start'>
              <Tag classes='border border-green-400 bg-transparent text-green-400 mr-2'>
                {hit.thema}
              </Tag>
              {/* Expertise Tag */}
              {hit?.categorie?.includes('beleid') && (
                <Tag classes='bg-green-500 text-gray-100 mr-2'>Beleid</Tag>
              )}
              {hit?.categorie?.includes('inkoop') && (
                <Tag classes='bg-green-500 text-gray-100 mr-2'>Inkoop</Tag>
              )}
              {hit?.categorie?.includes('grondpositie') && (
                <Tag classes='bg-green-500 text-gray-100 mr-2'>Grondpositie</Tag>
              )}
              {hit?.categorie?.includes('subsidie') && (
                <Tag classes='bg-green-500 text-gray-100 mr-2'>Subsidie</Tag>
              )}
              {hit?.categorie?.includes('fiscaal') && (
                <Tag classes='bg-green-500 text-gray-100 mr-2'>Fiscaal</Tag>
              )}
            </div>
            <div className='mt-2 block'>
              <div className='mb-2'>
                <h3 className='heading-2xl-semibold max-w-[650px] text-gray-800 no-underline transition-colors duration-100 focus:text-green-200 focus:ring-2 focus:ring-white active:text-green-800 group-hover:text-green-300'>
                  <Highlight
                    attribute='titel'
                    hit={hit}
                    classNames={{
                      highlighted: 'text-green-300 bg-green-300/20',
                    }}
                  />
                </h3>
              </div>
              <div className='newlineDisplay p-base mt-2 block pb-2 text-gray-800'>
                <p className='p-base line-clamp-3 max-w-[650px]'>
                  <Highlight
                    attribute='subtitel'
                    hit={hit}
                    classNames={{
                      highlighted: 'text-green-300 bg-green-300/20',
                    }}
                  />
                </p>
              </div>
              {/* ADD METADATA */}
              <div className='hidden sm:block'>
                <div className='mt-4 flex h-auto w-full grow-0 flex-row items-center gap-x-3 justify-self-start'>
                  <div className='flex basis-houdbaarheid flex-col'>
                    <div className='p-2xs-semibold mb-1 text-gray-600'>Juridische houdbaarheid</div>
                    <div className='flex items-center'>
                      <div className='p-xs-semibold rounded-cl bg-green-50 p-1 text-green-500'>
                        {hit?.juridischeHaalbaarheid}
                      </div>
                    </div>
                  </div>
                  <div className='flex basis-invloed flex-col'>
                    <div className='p-2xs-semibold mb-1 text-gray-600'>Invloed</div>
                    <div className='flex items-center'>
                      <div className='p-xs-semibold rounded-cl bg-green-50 p-1 text-green-500'>
                        {hit?.juridischInvloed}
                      </div>
                    </div>
                  </div>
                  <div className='flex basis-overheidslaag flex-col'>
                    <div className='p-2xs-semibold mb-1 text-gray-600'>Overheidslaag</div>
                    <div className='p-xs-semibold flex text-green-500'>
                      <div className='shrink rounded-cl bg-green-50 p-1'>
                        {hit?.overheidslaag
                          ?.filter((x) => x !== null)
                          .map((level) => (
                            <span key={level} className=''>
                              {level} {hit?.overheidslaag?.slice(-1)[0] !== level && <span>-</span>}
                              &nbsp;
                            </span>
                          ))}
                      </div>
                    </div>
                  </div>
                  <div className='flex basis-rladder flex-col'>
                    <div className='p-2xs-semibold mb-1 text-gray-600'>R-ladder</div>
                    <div className='flex items-center'>
                      <div className='flex flex-row items-center'>
                        <div className='shrink rounded-cl bg-green-50 p-1'>
                          {hit?.rLadder?.map((rValue) => (
                            <span key={rValue} className='p-xs-semibold text-green-500'>
                              {rValue} {hit?.rLadder.slice(-1)[0] !== rValue && <span>-</span>}
                              &nbsp;
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* MOBILE */}
              <div className='mb-4 flex flex-col justify-center sm:hidden'>
                <div className='flex h-auto flex-row justify-between border-b border-t-2 border-gray-400 py-2'>
                  <div className='flex flex-col justify-center'>
                    <div className='p-xs-semibold text-gray-600 sm:py-1'>
                      Juridische houdbaarheid
                    </div>
                    <div className='flex items-center'>
                      <div className='p-xs-semibold pr-2 text-green-500'>
                        {hit?.juridischeHaalbaarheid}
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-col justify-center'>
                    <div className='p-xs-semibold py-1 text-gray-600'>Invloed</div>
                    <div className='flex items-center'>
                      <div className='p-xs-semibold pr-2 text-green-500'>
                        {hit?.juridischInvloed}
                      </div>
                    </div>
                  </div>
                </div>
                <div className='flex h-auto border-b border-gray-400 py-2'>
                  <div className='flex flex-col justify-center'>
                    <div className='p-xs-semibold py-1 text-gray-600'>Overheidslaag</div>
                    <div className='p-xs-semibold text-green-500'>
                      {hit?.overheidslaag
                        ?.filter((x) => x !== null)
                        .map((level) => (
                          <span key={level} className=''>
                            {level} {hit?.overheidslaag.slice(-1)[0] !== level && <span>-</span>}
                            &nbsp;
                          </span>
                        ))}
                    </div>
                  </div>
                </div>
                <div className='flex border-b-2 border-gray-400 py-2'>
                  <div className='flex flex-col justify-center'>
                    <div className='p-xs-semibold py-1 text-gray-600'>R-ladder</div>
                    <div className='flex items-center'>
                      <div className='flex flex-row items-center'>
                        {hit?.rLadder?.map((rValue) => (
                          <div key={rValue} className='p-xs-semibold text-green-500'>
                            {rValue} {hit?.rLadder.slice(-1)[0] !== rValue && <span>-</span>}
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
        </Link>
      </article>
      {/* MOBILE */}
      <article className='block sm:hidden'>
        <Link
          href={`/${hit?.transitionAgenda?.toLowerCase()}/${hit?.thema?.toLowerCase()}/instrumenten/${
            hit.slug
          }`}
        >
          <div className='mb-10 block rounded-cl bg-green-50 p-4 sm:mb-8 sm:ml-0 md:max-w-[760px]'>
            <div className='-ml-1 flex items-center justify-start'>
              {/* Expertise Tag */}
              <Tag classes='border border-green-400 bg-transparent text-green-400 mr-2'>
                {hit.thema}
              </Tag>
              {hit?.categorie?.includes('beleid') && (
                <Tag classes='bg-green-500 text-gray-100 mr-2'>Beleid</Tag>
              )}
              {hit?.categorie?.includes('inkoop') && (
                <Tag classes='bg-green-500 text-gray-100 mr-2'>Inkoop</Tag>
              )}
              {hit?.categorie?.includes('grondpositie') && (
                <Tag classes='bg-green-500 text-gray-100 mr-2'>Grondpositie</Tag>
              )}
              {hit?.categorie?.includes('subsidie') && (
                <Tag classes='bg-green-500 text-gray-100 mr-2'>Subsidie</Tag>
              )}
              {hit?.categorie?.includes('fiscaal') && (
                <Tag classes='bg-green-500 text-gray-100'>Fiscaal</Tag>
              )}
            </div>

            <div className='mt-2 block'>
              <div className='mb-2'>
                <h3 className='heading-2xl-semibold max-w-[650px] text-gray-800 no-underline hover:text-green-300 focus:text-green-200 focus:ring-2 focus:ring-white active:text-green-800'>
                  <Highlight
                    attribute='titel'
                    hit={hit}
                    classNames={{
                      highlighted: 'text-green-300 bg-green-300/20',
                    }}
                  />
                </h3>
              </div>
              <div className='newlineDisplay p-base mt-2 block pb-2 text-gray-800'>
                <p className='p-base max-w-[650px]'>
                  {' '}
                  <Highlight
                    attribute='subtitel'
                    hit={hit}
                    classNames={{
                      highlighted: 'text-green-300 bg-green-300/20',
                    }}
                  />
                </p>
              </div>
              <div className='mb-4 flex flex-col justify-center sm:hidden'>
                <div className='flex h-auto flex-row justify-between py-2'>
                  <div className='flex flex-col justify-center'>
                    <div className='p-xs-semibold text-gray-600 sm:py-1'>
                      Juridische houdbaarheid
                    </div>
                    <div className='flex items-center'>
                      <div className='p-xs-semibold rounded-cl bg-green-100 px-1.5 py-1 text-green-500'>
                        {hit?.juridischeHaalbaarheid}
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-col justify-center'>
                    <div className='p-xs-semibold py-1 text-gray-600'>Invloed</div>
                    <div className='flex items-center'>
                      <div className='p-xs-semibold rounded-cl bg-green-100 px-1.5 py-1 text-green-500'>
                        {hit?.juridischInvloed}
                      </div>
                    </div>
                  </div>
                </div>
                <div className='flex h-auto py-2'>
                  <div className='flex flex-col justify-center'>
                    <div className='p-xs-semibold py-1 text-gray-600'>Overheidslaag</div>
                    <div className='p-xs-semibold rounded-cl bg-green-100 p-1 pl-1.5 text-green-500'>
                      {hit?.overheidslaag
                        ?.filter((x) => x !== null)
                        .map((level) => (
                          <span key={level} className=''>
                            {level} {hit?.overheidslaag.slice(-1)[0] !== level && <span>-</span>}
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
                      <div className='flex flex-row items-center rounded-cl bg-green-100 p-1 pl-1.5'>
                        {hit?.rLadder?.map((rValue) => (
                          <div key={rValue} className='p-xs-semibold text-green-500'>
                            {rValue} {hit?.rLadder.slice(-1)[0] !== rValue && <span>-</span>}
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
        </Link>
      </article>
    </>
  );
};

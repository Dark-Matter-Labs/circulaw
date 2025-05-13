import { Highlight } from 'react-instantsearch';

import Link from 'next/link';

import Badge from '../shared/new-badge';

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
            <div className='-ml-1 flex items-center justify-start gap-x-1'>
              <Badge variant='black'>{hit.thema}</Badge>
              {/* Expertise Badge */}
              {hit?.categorie?.includes('beleid') && <Badge variant='green'>Beleid</Badge>}
              {hit?.categorie?.includes('inkoop') && <Badge variant='green'>Inkoop</Badge>}
              {hit?.categorie?.includes('grondpositie') && (
                <Badge variant='green'>Grondpositie</Badge>
              )}
              {hit?.categorie?.includes('subsidie') && <Badge variant='green'>Subsidie</Badge>}
              {hit?.categorie?.includes('fiscaal') && <Badge variant='green'>Fiscaal</Badge>}
            </div>
            <div className='mt-2 block'>
              <div className='mb-2'>
                <h3 className='heading-2xl-semibold max-w-[650px] text-cl-black no-underline transition-colors duration-100 focus:text-green-300 focus:ring-2 focus:ring-white active:text-cl-black group-hover:text-green-400'>
                  <Highlight
                    attribute='titel'
                    hit={hit}
                    classNames={{
                      highlighted: 'text-green-400 bg-green-400/20',
                    }}
                  />
                </h3>
              </div>
              <div className='newlineDisplay p-base mt-2 block pb-2 text-cl-black'>
                <p className='p-base line-clamp-3 max-w-[650px]'>
                  <Highlight
                    attribute='subtitel'
                    hit={hit}
                    classNames={{
                      highlighted: 'text-green-400 bg-green-400/20',
                    }}
                  />
                </p>
              </div>
              {/* ADD METADATA */}
              <div className='hidden sm:block'>
                <div className='mt-4 flex h-auto w-full grow-0 flex-row items-center gap-x-3 justify-self-start'>
                  <div className='flex basis-houdbaarheid flex-col'>
                    <div className='p-2xs-semibold mb-1 text-cl-dark-grey'>
                      Juridische houdbaarheid
                    </div>
                    <div className='flex items-center'>
                      <div className='p-xs-semibold rounded-cl bg-green-100 p-1 text-green-500'>
                        {hit?.juridischeHaalbaarheid}
                      </div>
                    </div>
                  </div>
                  <div className='flex basis-invloed flex-col'>
                    <div className='p-2xs-semibold mb-1 text-cl-dark-grey'>Invloed</div>
                    <div className='flex items-center'>
                      <div className='p-xs-semibold rounded-cl bg-green-100 p-1 text-green-500'>
                        {hit?.juridischInvloed}
                      </div>
                    </div>
                  </div>
                  <div className='flex basis-overheidslaag flex-col'>
                    <div className='p-2xs-semibold mb-1 text-cl-dark-grey'>Overheidslaag</div>
                    <div className='p-xs-semibold flex text-green-500'>
                      <div className='shrink rounded-cl bg-green-100 p-1'>
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
                    <div className='p-2xs-semibold mb-1 text-cl-dark-grey'>R-ladder</div>
                    <div className='flex items-center'>
                      <div className='flex flex-row items-center'>
                        <div className='shrink rounded-cl bg-green-100 p-1'>
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
                <div className='flex h-auto flex-row justify-between border-b border-t-2 border-cl-grey py-2'>
                  <div className='flex flex-col justify-center'>
                    <div className='p-xs-semibold text-cl-dark-grey sm:py-1'>
                      Juridische houdbaarheid
                    </div>
                    <div className='flex items-center'>
                      <div className='p-xs-semibold pr-2 text-green-500'>
                        {hit?.juridischeHaalbaarheid}
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-col justify-center'>
                    <div className='p-xs-semibold py-1 text-cl-dark-grey'>Invloed</div>
                    <div className='flex items-center'>
                      <div className='p-xs-semibold pr-2 text-green-500'>
                        {hit?.juridischInvloed}
                      </div>
                    </div>
                  </div>
                </div>
                <div className='flex h-auto border-b border-cl-grey py-2'>
                  <div className='flex flex-col justify-center'>
                    <div className='p-xs-semibold py-1 text-cl-dark-grey'>Overheidslaag</div>
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
                <div className='flex border-b-2 border-cl-grey py-2'>
                  <div className='flex flex-col justify-center'>
                    <div className='p-xs-semibold py-1 text-cl-dark-grey'>R-ladder</div>
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
          <div className='mb-10 block rounded-cl bg-green-100 p-4 sm:mb-8 sm:ml-0 md:max-w-[760px]'>
            <div className='-ml-1 flex items-center justify-start gap-x-1'>
              {/* Expertise Badge */}
              <Badge variant='black'>{hit.thema}</Badge>
              {hit?.categorie?.includes('beleid') && <Badge variant='green'>Beleid</Badge>}
              {hit?.categorie?.includes('inkoop') && <Badge variant='green'>Inkoop</Badge>}
              {hit?.categorie?.includes('grondpositie') && (
                <Badge variant='green'>Grondpositie</Badge>
              )}
              {hit?.categorie?.includes('subsidie') && <Badge variant='green'>Subsidie</Badge>}
              {hit?.categorie?.includes('fiscaal') && <Badge variant='green'>Fiscaal</Badge>}
            </div>

            <div className='mt-2 block'>
              <div className='mb-2'>
                <h3 className='heading-2xl-semibold max-w-[650px] text-cl-black no-underline hover:text-green-400 focus:text-green-300 focus:ring-2 focus:ring-white active:text-cl-black'>
                  <Highlight
                    attribute='titel'
                    hit={hit}
                    classNames={{
                      highlighted: 'text-green-400 bg-green-400/20',
                    }}
                  />
                </h3>
              </div>
              <div className='newlineDisplay p-base mt-2 block pb-2 text-cl-black'>
                <p className='p-base max-w-[650px]'>
                  {' '}
                  <Highlight
                    attribute='subtitel'
                    hit={hit}
                    classNames={{
                      highlighted: 'text-green-400 bg-green-400/20',
                    }}
                  />
                </p>
              </div>
              <div className='mb-4 flex flex-col justify-center sm:hidden'>
                <div className='flex h-auto flex-row justify-between py-2'>
                  <div className='flex flex-col justify-center'>
                    <div className='p-xs-semibold text-cl-dark-grey sm:py-1'>
                      Juridische houdbaarheid
                    </div>
                    <div className='flex items-center'>
                      <div className='p-xs-semibold rounded-cl bg-green-200 px-1.5 py-1 text-green-500'>
                        {hit?.juridischeHaalbaarheid}
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-col justify-center'>
                    <div className='p-xs-semibold py-1 text-cl-dark-grey'>Invloed</div>
                    <div className='flex items-center'>
                      <div className='p-xs-semibold rounded-cl bg-green-200 px-1.5 py-1 text-green-500'>
                        {hit?.juridischInvloed}
                      </div>
                    </div>
                  </div>
                </div>
                <div className='flex h-auto py-2'>
                  <div className='flex flex-col justify-center'>
                    <div className='p-xs-semibold py-1 text-cl-dark-grey'>Overheidslaag</div>
                    <div className='p-xs-semibold rounded-cl bg-green-200 p-1 pl-1.5 text-green-500'>
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
                    <div className='p-xs-semibold py-1 text-cl-dark-grey'>R-ladder</div>
                    <div className='flex items-center'>
                      <div className='flex flex-row items-center rounded-cl bg-green-200 p-1 pl-1.5'>
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

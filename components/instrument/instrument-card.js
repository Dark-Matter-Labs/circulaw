import Link from 'next/link';
import Tag from '../tag';

export default function InstrumentCard({ instrument }) {
  return (
    <>
      <div className='hidden sm:block p-4 rounded-cl group hover:shadow-card transition-all duration-100 w-[760px] mb-6'>
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
              <div className='hidden sm:block'>
                <div className='h-auto flex flex-row gap-x-3 grow-0 items-center justify-self-center mt-4'>
                  <div className='flex flex-col basis-houdbaarheid'>
                    <div className='p-2xs-semibold text-gray-600 mb-1'>Juridische houdbaarheid</div>
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
                              {instrument?.overheidslaag?.slice(-1)[0] !== level && <span>-</span>}
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
              {/* MOBILE */}
              <div className='flex flex-col sm:hidden justify-center mb-4'>
                <div className='flex flex-row justify-between h-auto py-2 border-b border-t-2 border-gray-400'>
                  <div className='flex flex-col justify-center'>
                    <div className='p-xs-semibold sm:py-1 text-gray-600'>
                      Juridische houdbaarheid
                    </div>
                    <div className='flex items-center'>
                      <div className='p-xs-semibold text-green-500 pr-2'>
                        {instrument?.juridischeHaalbaarheid}
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-col justify-center'>
                    <div className='p-xs-semibold py-1 text-gray-600'>Invloed</div>
                    <div className='flex items-center'>
                      <div className='p-xs-semibold text-green-500 pr-2'>
                        {instrument?.juridischInvloed}
                      </div>
                    </div>
                  </div>
                </div>
                <div className='border-b border-gray-400 flex h-auto py-2'>
                  <div className='flex flex-col justify-center'>
                    <div className='p-xs-semibold py-1 text-gray-600'>Overheidslaag</div>
                    <div className='p-xs-semibold text-green-500'>
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
                <div className='flex py-2 border-b-2 border-gray-400'>
                  <div className='flex flex-col justify-center'>
                    <div className='p-xs-semibold py-1 text-gray-600'>R-ladder</div>
                    <div className='flex items-center'>
                      <div className='flex flex-row items-center'>
                        {instrument?.rLadder?.map((rValue) => (
                          <div key={rValue} className='p-xs-semibold text-green-500'>
                            {rValue} {instrument?.rLadder.slice(-1)[0] !== rValue && <span>-</span>}
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
      </div>
    </>
  );
}

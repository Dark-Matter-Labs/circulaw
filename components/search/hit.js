import { Highlight } from 'react-instantsearch';
import Link from 'next/link';
import Tag from '../tag';

export const Hit = ({ hit }) => {
  console.log(hit);
  return (
    <article>
      <Link href={`/${hit.transitionAgenda}/${hit.thema}/instrumenten/${hit.slug}`}>
        <div className='block sm:ml-0 mb-10 sm:mb-8 md:min-w-[760px]'>
          <div className='flex justify-start items-center -ml-1'>
            {/* Expertise Tag */}
            {hit?.categorie.includes('beleid') && (
              <Tag classes='bg-green-500 text-gray-100 mr-2'>Beleid</Tag>
            )}
            {hit?.categorie.includes('inkoop') && (
              <Tag classes='bg-green-500 text-gray-100 mr-2'>Inkoop</Tag>
            )}
            {hit?.categorie.includes('grondpositie') && (
              <Tag classes='bg-green-500 text-gray-100 mr-2'>Grondpositie</Tag>
            )}
            {hit?.categorie.includes('subsidie') && (
              <Tag classes='bg-green-500 text-gray-100 mr-2'>Subsidie</Tag>
            )}
            {hit?.categorie.includes('fiscaal') && (
              <Tag classes='bg-green-500 text-gray-100'>Fiscaal</Tag>
            )}
          </div>

          <div className='block mt-2 '>
            <div className=' mb-2'>
              <h3 className='heading-2xl-semibold max-w-[650px] text-gray-800 no-underline hover:text-green-300 active:text-green-800 focus:text-green-200 focus:ring-2 focus:ring-white'>
                <Highlight attribute='titel' hit={hit} />
              </h3>
            </div>
            <div className='block  newlineDisplay p-base text-gray-800 mt-2 pb-2'>
              <p className='p-base max-w-[650px]'>{hit.subtitel}</p>
            </div>
            {/* ADD METADATA */}
            <div className='hidden sm:block'>
              <div className='border-y border-gray-300 h-auto flex flex-row gap-x-4 grow-0 items-center justify-self-center max-w-[870px]'>
                <div className='flex flex-col basis-houdbaarheid'>
                  <div className='p-xs-semibold text-gray-600'>Juridische houdbaarheid</div>
                  <div className='flex items-center'>
                    <div className='p-xs-semibold text-green-500 pr-2'>
                      {hit?.juridischeHaalbaarheid}
                    </div>
                  </div>
                </div>
                <div className='flex flex-col basis-invloed'>
                  <div className='p-xs-semibold text-gray-600'>Invloed</div>
                  <div className='flex items-center'>
                    <div className='p-xs-semibold text-green-500 pr-2'>{hit?.juridischInvloed}</div>
                  </div>
                </div>
                <div className='flex flex-col basis-overheidslaag'>
                  <div className='p-xs-semibold text-gray-600'>Overheidslaag</div>
                  <div className='p-xs-semibold text-green-500'>
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
                <div className='flex flex-col basis-rladder'>
                  <div className='p-xs-semibold text-gray-600'>R-ladder</div>
                  <div className='flex items-center'>
                    <div className='flex flex-row items-center'>
                      {hit?.rLadder?.map((rValue) => (
                        <div key={rValue} className='p-xs-semibold text-green-500 '>
                          {rValue} {hit?.rLadder.slice(-1)[0] !== rValue && <span>-</span>}
                          &nbsp;
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* MOBILE */}
            <div className='flex flex-col sm:hidden justify-center mb-4'>
              <div className='flex flex-row justify-between h-auto py-2 border-b border-t-2 border-gray-400'>
                <div className='flex flex-col justify-center'>
                  <div className='p-xs-semibold sm:py-1 text-gray-600'>Juridische houdbaarheid</div>
                  <div className='flex items-center'>
                    <div className='p-xs-semibold text-green-500 pr-2'>
                      {hit?.juridischeHaalbaarheid}
                    </div>
                  </div>
                </div>
                <div className='flex flex-col justify-center'>
                  <div className='p-xs-semibold py-1 text-gray-600'>Invloed</div>
                  <div className='flex items-center'>
                    <div className='p-xs-semibold text-green-500 pr-2'>{hit?.juridischInvloed}</div>
                  </div>
                </div>
              </div>
              <div className='border-b border-gray-400 flex h-auto py-2'>
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
              <div className='flex py-2 border-b-2 border-gray-400'>
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
  );
};

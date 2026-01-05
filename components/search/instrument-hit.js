import { Highlight } from 'react-instantsearch';
import Link from 'next/link';
import { useMemo } from 'react';

import InstrumentMetadataTag from '../instrument/instrumt-metadata-tag';
import Badge from '../shared/new-badge';

export const InstrumentHit = ({ hit }) => {
  // Memoize the category badges to prevent re-rendering
  const categoryBadges = useMemo(() => {
    const badges = [];
    if (hit?.categorie?.includes('beleid')) badges.push(<Badge key="beleid" variant='green'>Beleid</Badge>);
    if (hit?.categorie?.includes('inkoop')) badges.push(<Badge key="inkoop" variant='green'>Inkoop</Badge>);
    if (hit?.categorie?.includes('grondpositie')) badges.push(<Badge key="grondpositie" variant='green'>Grondpositie</Badge>);
    if (hit?.categorie?.includes('subsidie')) badges.push(<Badge key="subsidie" variant='green'>Subsidie</Badge>);
    if (hit?.categorie?.includes('fiscaal')) badges.push(<Badge key="fiscaal" variant='green'>Fiscaal</Badge>);
    return badges;
  }, [hit?.categorie]);

  // Memoize overheidslaag to prevent unnecessary re-renders
  const overheidslaagDisplay = useMemo(() => {
    return hit?.overheidslaag?.filter((x) => x !== null).join(' - ') || '';
  }, [hit?.overheidslaag]);

  // Memoize rLadder to prevent unnecessary re-renders
  const rLadderDisplay = useMemo(() => {
    return hit?.rLadder?.join(' - ') || '';
  }, [hit?.rLadder]);

  const instrumentUrl = `/${hit?.transitionAgenda?.toLowerCase()}/${hit?.thema?.toLowerCase()}/instrumenten/${hit.slug}`;

  return (
    <article className='group w-full sm:w-[760px] rounded-cl p-4 mb-10 sm:mb-0 bg-green-100 sm:bg-transparent transition-all duration-100 hover:shadow-card'>
      <Link href={instrumentUrl}>
        <div className='block'>
          <div className='-ml-1 flex items-center justify-start gap-x-1 flex-wrap'>
            <Badge variant='black'>{hit.thema}</Badge>
            {categoryBadges}
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
              <p className='p-base line-clamp-3 sm:line-clamp-3 max-w-[650px]'>
                <Highlight
                  attribute='subtitel'
                  hit={hit}
                  classNames={{
                    highlighted: 'text-green-400 bg-green-400/20',
                  }}
                />
              </p>
            </div>

            {/* Metadata - Desktop Layout */}
            <div className='hidden sm:block'>
              <div className='mt-4 flex h-auto w-full grow-0 flex-row items-center gap-x-3 justify-self-start'>
                <div className='flex basis-houdbaarheid flex-col'>
                  <div className='p-2xs-semibold mb-1 text-cl-dark-grey'>
                    Juridische houdbaarheid
                  </div>
                  <div className='flex items-center'>
                    <InstrumentMetadataTag>{hit?.juridischeHaalbaarheid}</InstrumentMetadataTag>
                  </div>
                </div>
                
                <div className='flex basis-invloed flex-col'>
                  <div className='p-2xs-semibold mb-1 text-cl-dark-grey'>Invloed</div>
                  <div className='flex items-center'>
                    <InstrumentMetadataTag>{hit?.juridischInvloed}</InstrumentMetadataTag>
                  </div>
                </div>
                
                <div className='flex basis-overheidslaag flex-col'>
                  <div className='p-2xs-semibold mb-1 text-cl-dark-grey'>Overheidslaag</div>
                  <InstrumentMetadataTag>
                    {overheidslaagDisplay}
                  </InstrumentMetadataTag>
                </div>
                
                <div className='flex basis-rladder flex-col'>
                  <div className='p-2xs-semibold mb-1 text-cl-dark-grey'>R-ladder</div>
                  <div className='flex items-center'>
                    <InstrumentMetadataTag className='flex flex-row items-center'>
                      <span className='p-xs-semibold text-green-500'>{rLadderDisplay}</span>
                    </InstrumentMetadataTag>
                  </div>
                </div>
              </div>
            </div>

            {/* Metadata - Mobile Layout */}
            <div className='mb-4 flex flex-col justify-center sm:hidden'>
              <div className='flex h-auto flex-row justify-between py-2'>
                <div className='flex flex-col justify-center'>
                  <div className='p-xs-semibold text-cl-dark-grey'>
                    Juridische houdbaarheid
                  </div>
                  <div className='flex items-center'>
                    <InstrumentMetadataTag>{hit?.juridischeHaalbaarheid}</InstrumentMetadataTag>
                  </div>
                </div>
                
                <div className='flex flex-col justify-center'>
                  <div className='p-xs-semibold py-1 text-cl-dark-grey'>Invloed</div>
                  <div className='flex items-center'>
                    <InstrumentMetadataTag>{hit?.juridischInvloed}</InstrumentMetadataTag>
                  </div>
                </div>
              </div>
              
              <div className='flex h-auto py-2'>
                <div className='flex flex-col justify-center'>
                  <div className='p-xs-semibold py-1 text-cl-dark-grey'>Overheidslaag</div>
                  <InstrumentMetadataTag>{overheidslaagDisplay}</InstrumentMetadataTag>
                </div>
              </div>
              
              <div className='flex py-2'>
                <div className='flex flex-col justify-center'>
                  <div className='p-xs-semibold py-1 text-cl-dark-grey'>R-ladder</div>
                  <InstrumentMetadataTag>
                    <span className='p-xs-semibold text-green-500'>{rLadderDisplay}</span>
                  </InstrumentMetadataTag>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
};
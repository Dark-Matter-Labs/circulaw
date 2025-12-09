import { useMemo } from 'react';
import { useInstantSearch, useStats } from 'react-instantsearch';

export default function CustomStats({ index }) {
  const { nbHits, query } = useStats();
  const { uiState } = useInstantSearch();
  
  // Extract refinements directly - no useState needed!
  const refinements = useMemo(() => {
    const refinementList = uiState?.instruments?.refinementList || {};
    return {
      categorie: refinementList.categorie,
      thema: refinementList.thema,
      overheidslaag: refinementList.overheidslaag,
      rLadder: refinementList.rLadder,
      juridischInvloed: refinementList.juridischInvloed,
      juridischeHaalbaarheid: refinementList.juridischeHaalbaarheid,
      extraContent: refinementList.extraContent,
    };
  }, [uiState?.instruments?.refinementList]);

  const { 
    categorie, 
    thema, 
    overheidslaag, 
    rLadder, 
    juridischInvloed, 
    juridischeHaalbaarheid, 
    extraContent 
  } = refinements;

  const hasFilters = categorie || thema || overheidslaag || rLadder || 
                     juridischInvloed || juridischeHaalbaarheid || extraContent;

  return (
    <>
      {/* No query and no filter */}
      {query === '' && !hasFilters && (
        <div className='heading-2xl sm:heading-3xl'>{nbHits} resultaten.</div>
      )}

      {/* Query and no filter */}
      {query !== '' && !hasFilters && (
        <div className='heading-2xl sm:heading-3xl'>
          {nbHits} resultaten gevonden voor:{' '}
          <span className='font-semibold'>&apos;{query}&apos;</span>
          <span> in {index}</span>.
        </div>
      )}

      {/* Filter and no query */}
      {hasFilters && query === '' && (
        <div className='heading-2xl sm:heading-3xl'>
          {nbHits} resultaten gevonden voor:{' '}
          {categorie?.map((item) => (
            <span className='font-semibold' key={item}>
              {item},{' '}
            </span>
          ))}
          {thema?.map((item) => (
            <span className='font-semibold' key={item}>
              {item},{' '}
            </span>
          ))}
          {overheidslaag?.map((item) => (
            <span className='font-semibold' key={item}>
              {item},{' '}
            </span>
          ))}
          {rLadder?.map((item) => (
            <span className='font-semibold' key={item}>
              {item},{' '}
            </span>
          ))}
          {juridischInvloed?.map((item) => (
            <span className='font-semibold' key={item}>
              {item},{' '}
            </span>
          ))}
          {juridischeHaalbaarheid?.map((item) => (
            <span className='font-semibold' key={item}>
              {item},{' '}
            </span>
          ))}
          {extraContent?.map((item) => (
            <span className='font-semibold' key={item}>
              {item},{' '}
            </span>
          ))}
          <span> in {index}</span>.
        </div>
      )}

      {/* Filter and query */}
      {hasFilters && query !== '' && (
        <div className='heading-2xl sm:heading-3xl'>
          {nbHits} resultaten gevonden voor:{' '}
          <span className='font-semibold'>
            &apos;{query}&apos; <span className='font-normal'>en</span>
          </span>{' '}
          {categorie?.map((item) => (
            <span className='font-semibold capitalize' key={item}>
              {item},{' '}
            </span>
          ))}
          {thema?.map((item) => (
            <span className='font-semibold capitalize' key={item}>
              {item},{' '}
            </span>
          ))}
          {overheidslaag?.map((item) => (
            <span className='font-semibold capitalize' key={item}>
              {item},{' '}
            </span>
          ))}
          {rLadder?.map((item) => (
            <span className='font-semibold capitalize' key={item}>
              {item},{' '}
            </span>
          ))}
          {juridischInvloed?.map((item) => (
            <span className='font-semibold capitalize' key={item}>
              {item},{' '}
            </span>
          ))}
          {juridischeHaalbaarheid?.map((item) => (
            <span className='font-semibold capitalize' key={item}>
              {item},{' '}
            </span>
          ))}
          {extraContent?.map((item) => (
            <span className='font-semibold capitalize' key={item}>
              {item},{' '}
            </span>
          ))}
          <span> in {index}</span>.
        </div>
      )}
    </>
  );
}
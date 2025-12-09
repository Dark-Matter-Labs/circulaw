import { useInstantSearch, useStats } from 'react-instantsearch';

export default function CustomStats({ index }) {
  const { nbHits, query } = useStats();
  const { uiState } = useInstantSearch();
  
  // Read directly from uiState - no memoization, no state
  const refinementList = uiState?.instruments?.refinementList || {};
  const categorie = refinementList.categorie;
  const thema = refinementList.thema;
  const overheidslaag = refinementList.overheidslaag;
  const rLadder = refinementList.rLadder;
  const juridischInvloed = refinementList.juridischInvloed;
  const juridischeHaalbaarheid = refinementList.juridischeHaalbaarheid;
  const extraContent = refinementList.extraContent;

  const hasFilters = Boolean(
    categorie?.length || 
    thema?.length || 
    overheidslaag?.length || 
    rLadder?.length || 
    juridischInvloed?.length || 
    juridischeHaalbaarheid?.length || 
    extraContent?.length
  );

  return (
    <>
      {/* No query and no filter */}
      {!query && !hasFilters && (
        <div className='heading-2xl sm:heading-3xl'>{nbHits} resultaten.</div>
      )}

      {/* Query and no filter */}
      {query && !hasFilters && (
        <div className='heading-2xl sm:heading-3xl'>
          {nbHits} resultaten gevonden voor:{' '}
          <span className='font-semibold'>&apos;{query}&apos;</span>
          <span> in {index}</span>.
        </div>
      )}

      {/* Filter and no query */}
      {hasFilters && !query && (
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
      {hasFilters && query && (
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
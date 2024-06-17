import { useStats, useInstantSearch } from 'react-instantsearch';
import { useEffect, useState } from 'react';

export default function CustomStats() {
  const { nbHits, query } = useStats();
  const { uiState } = useInstantSearch();

  const [categorie, setCategorie] = useState([]);
  const [thema, setThema] = useState([]);
  const [overheidslaag, setOverheidslaag] = useState([]);
  const [rLadder, setRLadder] = useState([]);

  useEffect(() => {
    setCategorie(uiState?.instruments?.refinementList?.categorie);
    setThema(uiState?.instruments?.refinementList?.thema);
    setRLadder(uiState?.instruments?.refinementList?.rLadder);
    setOverheidslaag(uiState?.instruments?.refinementList?.overheidslaag);
  }, [
    uiState?.instruments?.refinementList?.categorie,
    uiState?.instruments?.refinementList?.thema,
    uiState?.instruments?.refinementList?.overheidslaag,
    uiState?.instruments?.refinementList?.rLadder,
  ]);

  return (
    <>
      {/* No query and no filter */}
      {query === '' && !categorie && !thema && !overheidslaag && !rLadder && (
        <div className='heading-3xl'>{nbHits} resultaten.</div>
      )}

      {/* Query and no filter */}
      {query !== '' && !categorie && !thema && !overheidslaag && !rLadder && (
        <div className='heading-3xl'>
          {nbHits} resultaten gevonden voor: <span className='font-semibold'>{query}</span>.
        </div>
      )}

      {/* Filter and no query */}
      {(categorie !== undefined ||
        thema !== undefined ||
        overheidslaag !== undefined ||
        rLadder !== undefined) &&
      query === '' ? (
        <div className='heading-3xl'>
          {nbHits} resultaten gevonden voor:{' '}
          {categorie &&
            categorie.map((item) => (
              <span className='font-semibold' key={item}>
                {item},{' '}
              </span>
            ))}
          {thema &&
            thema.map((item) => (
              <span className='font-semibold' key={item}>
                {item},{' '}
              </span>
            ))}
          {overheidslaag &&
            overheidslaag.map((item) => (
              <span className='font-semibold' key={item}>
                {item},{' '}
              </span>
            ))}
          {rLadder &&
            rLadder.map((item) => (
              <span className='font-semibold' key={item}>
                {item},{' '}
              </span>
            ))}
        </div>
      ) : null}

      {(categorie !== undefined ||
        thema !== undefined ||
        overheidslaag !== undefined ||
        rLadder !== undefined) &&
      query !== '' ? (
        <div className='heading-3xl'>
          {nbHits} resultaten gevonden voor: <span className='font-semibold'>{query}</span>{' '}
          {categorie &&
            categorie.map((item) => (
              <span className='font-semibold capitalize' key={item}>
                {item},{' '}
              </span>
            ))}
          {thema &&
            thema.map((item) => (
              <span className='font-semibold capitalize' key={item}>
                {item},{' '}
              </span>
            ))}
          {overheidslaag &&
            overheidslaag.map((item) => (
              <span className='font-semibold capitalize' key={item}>
                {item},{' '}
              </span>
            ))}
          {rLadder &&
            rLadder.map((item) => (
              <span className='font-semibold capitalize' key={item}>
                {item},{' '}
              </span>
            ))}
        </div>
      ) : null}
    </>
  );
}

import { useStats, useInstantSearch } from 'react-instantsearch';
import { useEffect, useState } from 'react';

export default function CustomStats({ index }) {
  const { nbHits, query } = useStats();
  const { uiState } = useInstantSearch();

  const [categorie, setCategorie] = useState([]);
  const [thema, setThema] = useState([]);
  const [overheidslaag, setOverheidslaag] = useState([]);
  const [rLadder, setRLadder] = useState([]);
  const [juridischeHaalbaarheid, setJuridischeHaalbaarheid] = useState([]);
  const [extraContent, setExtraContent] = useState([]);
  const [juridischInvloed, setJuridischInvloed] = useState([]);

  useEffect(() => {
    setCategorie(uiState?.instruments?.refinementList?.categorie);
    setThema(uiState?.instruments?.refinementList?.thema);
    setRLadder(uiState?.instruments?.refinementList?.rLadder);
    setOverheidslaag(uiState?.instruments?.refinementList?.overheidslaag);
    setJuridischInvloed(uiState?.instruments?.refinementList?.juridischInvloed);
    setJuridischeHaalbaarheid(uiState?.instruments?.refinementList?.juridischeHaalbaarheid);
    setExtraContent(uiState?.instruments?.refinementList?.extraContent);
  }, [
    uiState?.instruments?.refinementList?.categorie,
    uiState?.instruments?.refinementList?.thema,
    uiState?.instruments?.refinementList?.overheidslaag,
    uiState?.instruments?.refinementList?.rLadder,
    uiState?.instruments?.refinementList?.juridischInvloed,
    uiState?.instruments?.refinementList?.juridischeHaalbaarheid,
    uiState?.instruments?.refinementList?.extraContent,
  ]);

  return (
    <>
      {/* No query and no filter */}
      {query === '' &&
        !categorie &&
        !thema &&
        !overheidslaag &&
        !rLadder &&
        !juridischInvloed &&
        !juridischeHaalbaarheid &&
        !extraContent && <div className='heading-2xl sm:heading-3xl'>{nbHits} resultaten.</div>}

      {/* Query and no filter */}
      {query !== '' &&
        !categorie &&
        !thema &&
        !overheidslaag &&
        !rLadder &&
        !juridischInvloed &&
        !juridischeHaalbaarheid &&
        !extraContent && (
          <div className='heading-2xl sm:heading-3xl'>
            {nbHits} resultaten gevonden voor:{' '}
            <span className='font-semibold'>&apos;{query}&apos;</span>
            <span> in {index}</span>.
          </div>
        )}

      {/* Filter and no query */}
      {(categorie !== undefined ||
        thema !== undefined ||
        overheidslaag !== undefined ||
        rLadder !== undefined ||
        juridischInvloed !== undefined ||
        juridischeHaalbaarheid !== undefined ||
        extraContent !== undefined) &&
      query === '' ? (
        <div className='heading-2xl sm:heading-3xl'>
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
          {juridischInvloed &&
            juridischInvloed.map((item) => (
              <span className='font-semibold' key={item}>
                {item},{' '}
              </span>
            ))}
          {juridischeHaalbaarheid &&
            juridischeHaalbaarheid.map((item) => (
              <span className='font-semibold' key={item}>
                {item},{' '}
              </span>
            ))}
          {extraContent &&
            extraContent.map((item) => (
              <span className='font-semibold' key={item}>
                {item},{' '}
              </span>
            ))}
          <span> in {index}</span>.
        </div>
      ) : null}

      {(categorie !== undefined ||
        thema !== undefined ||
        overheidslaag !== undefined ||
        rLadder !== undefined ||
        juridischInvloed !== undefined ||
        juridischeHaalbaarheid !== undefined ||
        extraContent !== undefined) &&
      query !== '' ? (
        <div className='heading-2xl sm:heading-3xl'>
          {nbHits} resultaten gevonden voor:{' '}
          <span className='font-semibold'>
            &apos;{query}&apos; <span className='font-normal'>en</span>
          </span>{' '}
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
          {juridischInvloed &&
            juridischInvloed.map((item) => (
              <span className='font-semibold capitalize' key={item}>
                {item},{' '}
              </span>
            ))}
          {juridischeHaalbaarheid &&
            juridischeHaalbaarheid.map((item) => (
              <span className='font-semibold capitalize' key={item}>
                {item},{' '}
              </span>
            ))}
          {extraContent &&
            extraContent.map((item) => (
              <span className='font-semibold capitalize' key={item}>
                {item},{' '}
              </span>
            ))}
          <span> in {index}</span>.
        </div>
      ) : null}
    </>
  );
}

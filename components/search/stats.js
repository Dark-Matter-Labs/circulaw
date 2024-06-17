import { useStats, useInstantSearch } from 'react-instantsearch';
import { useEffect, useState } from 'react';


export default function CustomStats() {
  const { nbHits, query } = useStats();
  const {uiState} = useInstantSearch()

  console.log(uiState.instruments.refinementList)

  const [categorie, setCategorie] = useState([])
  const [thema, setThema] = useState([])
  const [overheidslaag, setOverheidslaag] = useState([])
  const [rLadder, setRLadder] = useState([])


 useEffect(() => {
  setCategorie(uiState?.instruments?.refinementList?.categorie)
  setThema(uiState?.instruments?.refinementList?.thema)
  setRLadder(uiState?.instruments?.refinementList?.overheidslaag)
  setOverheidslaag(uiState?.instruments?.refinementList?.rLadder)
 }, [uiState?.instruments?.refinementList?.categorie, uiState?.instruments?.refinementList?.thema, uiState?.instruments?.refinementList?.overheidslaag, uiState?.instruments?.refinementList?.rLadder])

 
  return (
    <>
      {query === '' && <span className='heading-3xl'>{nbHits.toLocaleString()} resultaten gevonden voor: {query} {categorie || thema || overheidslaag || rLadder && <span>en</span>}</span>}
      {query !== '' && (
        <span className='heading-3xl'>
           Geen resultaten gevonden voor:{' '}
          <span className='heading-3xl-semibold'>{query}</span>

          
          .
        </span>
      )}
    </>
  );
}

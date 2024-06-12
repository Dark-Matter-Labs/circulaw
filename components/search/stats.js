import React from 'react';
import { useStats } from 'react-instantsearch';

export default function CustomStats() {
  const { nbHits, query } = useStats();

  return (
    <>
      {query === '' && <span className='heading-3xl'>{nbHits.toLocaleString()} instrumenten.</span>}
      {query !== '' && (
        <span className='heading-3xl'>
          {nbHits.toLocaleString()} resultaten gevonden voor:{' '}
          <span className='heading-3xl-semibold'>{query}</span>.
        </span>
      )}
    </>
  );
}

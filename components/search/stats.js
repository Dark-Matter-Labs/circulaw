import { useStats } from 'react-instantsearch';

export default function CustomStats({ index }) {
  const { nbHits, query } = useStats();
  
  // Don't try to read refinements from uiState - just show simple stats
  return (
    <div className='heading-2xl sm:heading-3xl'>
      {nbHits} {query ? `resultaten gevonden voor: '${query}'` : 'resultaten.'} {index && ` in ${index}`}
    </div>
  );
}
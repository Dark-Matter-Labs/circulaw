import { useHits } from 'react-instantsearch';

export default function Results() {
  // getting all results from all indexes.
  const { results } = useHits();

  return (
    <div>
      {results.hits.map((r, id) => (
        <div key={id}>{id}</div>
      ))}
    </div>
  );
}

import AggSearch from '@/components/search/new/agg-search';

export const dynamic = 'force-dynamic';

export default function Search({ searchParams }) {
  return (
    <div>
      <AggSearch searchParams={searchParams} />
    </div>
  );
}

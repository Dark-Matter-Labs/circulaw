import AllSearch from '@/components/search/all-search';

// Search results are thin, query-driven pages: keep them out of the index but
// let crawlers follow the links to the real content.
export const metadata = {
  title: 'Zoeken - CircuLaw',
  alternates: { canonical: '/zoeken' },
  robots: { index: false, follow: true },
};

export default function AllSearchPage() {
  return (
    <>
      <div>
        <AllSearch />
      </div>
    </>
  );
}

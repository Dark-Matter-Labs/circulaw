import NewSearchBar from '@/components/search/new/new-search-bar';

export default function SearchLayout({ children }) {
  return (
    <>
      <div>
        <NewSearchBar />
      </div>
      {children}
    </>
  );
}

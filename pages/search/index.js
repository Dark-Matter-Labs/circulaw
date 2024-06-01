import Layout from '@/components/layouts/layout';
import { Search } from '@/components/search/search';

export default function SearchPage() {
  return (
    <Layout>
      <div className='py-24 flex items-start justify-center w-full global-margin'>
        <Search />
      </div>
    </Layout>
  );
}

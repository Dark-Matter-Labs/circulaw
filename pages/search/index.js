import Layout from '@/components/layouts/layout';
import { Search } from '@/components/search/search';

export default function SearchPage() {
  return (
    <Layout>
      <div className='flex items-start justify-center w-full'>
        <Search />
      </div>
    </Layout>
  );
}

import Layout from '@/components/layouts/layout';
import { Search } from '@/components/search/search';


export default function SearchPage() {
    return (
        <Layout>

            <div className='py-24 flex items-center justify-center w-full'>
                <Search />
            </div>
        </Layout>
    )
}
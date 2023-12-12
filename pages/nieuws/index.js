import Layout from '@/components/layouts/layout';
import Link from 'next/link';

export default function NewsPage() {
  return (
    <Layout>
      <div className='h-screen flex flex-col global-margin mt-4'>
        <div className='h-20 mt-6'>
          <Link href='/' className='breadcrumb'>
            Home
          </Link>
        </div>

        <div className='h-96'>
          <h1 className='p-2xl-semibold sm:p-5xl-semibold w-full border-b-2 pb-5 border-green-800'>
            Uitgelichte nieuwsberichten
          </h1>
        </div>
        <div className='h-96'>
          <h1 className='p-2xl-semibold sm:p-5xl-semibold w-full border-b-2 pb-5 border-green-800'>
            Laatste nieuws{' '}
          </h1>{' '}
        </div>
        <div className='h-96'>
          <h1 className='p-2xl-semibold sm:p-5xl-semibold w-full border-b-2 pb-5 border-green-800'>
            Archief{' '}
          </h1>
        </div>
      </div>
    </Layout>
  );
}

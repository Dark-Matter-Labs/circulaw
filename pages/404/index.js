import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/outline';
import Layout from '@/components/layouts/layout';

export default function NotFound() {
  return (
    <Layout title='CircuLaw - 404'>
      <div className='global-margin my-20 text-center flex flex-col justify-center'>
        <h1 className='mobile sm:desktop text-grey-800 pb-2'>404</h1>
        <p className=' p-base text-grey-800'>
          We kunnen de pagina die je zoekt niet vinden. Kunnen we je verder helpen?
        </p>
        <p className=' p-base text-grey-800'>Zoek verder:</p>
        <ul className=''>
          <li className='text-green-500 p-base-semibold underline'>
            <Link href='/' className='link-interaction'>
              Home <ArrowRightIcon className='inline-block h-4 w-4' aria-hidden='true' />
            </Link>
          </li>
          <li className='text-green-500 p-base-semibold underline'>
            <Link href='/bouw' className='link-interaction'>
              Bouw <ArrowRightIcon className='inline-block h-4 w-4' aria-hidden='true' />
            </Link>{' '}
          </li>
          <li className='text-green-500 p-base-semibold underline'>
            <Link href='/maakindustrie' className='link-interaction'>
              Maakindustrie <ArrowRightIcon className='inline-block h-4 w-4' aria-hidden='true' />
            </Link>{' '}
          </li>
          <li className='text-green-500 p-base-semibold underline'>
            <Link href='/consumptiegoederen' className='link-interaction'>
              Consumptiegoederen{' '}
              <ArrowRightIcon className='inline-block h-4 w-4' aria-hidden='true' />
            </Link>{' '}
          </li>
          <li className='text-green-500 p-base-semibold underline'>
            <Link href='/biomassa-en-voedsel' className='link-interaction'>
              Biomassa en voedsel{' '}
              <ArrowRightIcon className='inline-block h-4 w-4' aria-hidden='true' />
            </Link>{' '}
          </li>
          <li className='text-green-500 p-base-semibold underline'>
            <Link href='/kunststoffen' className='link-interaction'>
              Kunststoffen <ArrowRightIcon className='inline-block h-4 w-4' aria-hidden='true' />
            </Link>{' '}
          </li>
          <li className='text-green-500 p-base-semibold underline'>
            <Link href='/over/Wat-is-CircuLaw' className='link-interaction'>
              Wat is CircuLaw?{' '}
              <ArrowRightIcon className='inline-block h-4 w-4' aria-hidden='true' />
            </Link>{' '}
          </li>
          <li className='text-green-500 p-base-semibold underline'>
            <Link href='/contact' className='link-interaction'>
              Contact <ArrowRightIcon className='inline-block h-4 w-4' aria-hidden='true' />
            </Link>{' '}
          </li>
        </ul>
      </div>
    </Layout>
  );
}

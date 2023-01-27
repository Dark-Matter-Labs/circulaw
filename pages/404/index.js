import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/outline';
import Layout from '../../components/layouts/layout';

export default function NotFound() {
  return (
    <Layout>
      <div className='global-margin my-20 max-w-2xl text-center'>
        <h1 className='mobile sm:desktop text-black-white-800 pb-2 text-green-400'>404</h1>
        <p className=' p-lg text-black-white-800'>
          We kunnen de pagina die je zoekt niet vinden. Kunnen we je verder helpen?
        </p>

        <p className=' p-lg text-black-white-800'>
          Zoek verder:
          <ul className=''>
            <li className='text-green-500  link-lg'>
              <Link href='/'>
                Home <ArrowRightIcon className='inline-block h-4 w-4' aria-hidden='true' />
              </Link>
            </li>
            <li className='text-green-500  link-lg'>
              <Link href='/houtbouw'>
                Houtbouw <ArrowRightIcon className='inline-block h-4 w-4' aria-hidden='true' />
              </Link>{' '}
            </li>
            <li className='text-green-500  link-lg'>
              <Link href='/circulaire-windturbines'>
                Circulaire windturbines{' '}
                <ArrowRightIcon className='inline-block h-4 w-4' aria-hidden='true' />
              </Link>{' '}
            </li>
            <li className='text-green-500  link-lg'>
              <Link href='/wat-is-circulaw'>
                Wat is CircuLaw?{' '}
                <ArrowRightIcon className='inline-block h-4 w-4' aria-hidden='true' />
              </Link>{' '}
            </li>
            <li className='text-green-500  link-lg'>
              <Link href='/contact'>
                Contact <ArrowRightIcon className='inline-block h-4 w-4' aria-hidden='true' />
              </Link>{' '}
            </li>
          </ul>
        </p>
      </div>
    </Layout>
  );
}

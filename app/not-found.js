import Link from 'next/link';
import { IconArrowRight } from '@tabler/icons-react';

export default function NotFound() {
  return (
    <div className='global-margin my-20 text-center flex flex-col justify-center'>
      <h1 className='heading-2xl-semibold sm:heading-5xl-semibold text-gray-800 pb-2'>404</h1>
      <p className=' p-base text-gray-800'>
        We kunnen de pagina die je zoekt niet vinden. Kunnen we je verder helpen?
      </p>
      <p className=' p-base text-gray-800'>Zoek verder:</p>
      <ul className=''>
        <li className='text-green-500 p-base-semibold underline'>
          <Link href='/' className='link-interaction'>
            Home <IconArrowRight className='inline-block h-5 w-5' aria-hidden='true' />
          </Link>
        </li>
        <li className='text-green-500 p-base-semibold underline'>
          <Link href='/bouw' className='link-interaction'>
            Bouw <IconArrowRight className='inline-block h-5 w-5' aria-hidden='true' />
          </Link>{' '}
        </li>
        <li className='text-green-500 p-base-semibold underline'>
          <Link href='/maakindustrie' className='link-interaction'>
            Maakindustrie <IconArrowRight className='inline-block h-5 w-5' aria-hidden='true' />
          </Link>{' '}
        </li>
        <li className='text-green-500 p-base-semibold underline'>
          <Link href='/consumptiegoederen' className='link-interaction'>
            Consumptiegoederen{' '}
            <IconArrowRight className='inline-block h-5 w-5' aria-hidden='true' />
          </Link>{' '}
        </li>
        <li className='text-green-500 p-base-semibold underline'>
          <Link href='/biomassa-en-voedsel' className='link-interaction'>
            Biomassa en voedsel{' '}
            <IconArrowRight className='inline-block h-5 w-5' aria-hidden='true' />
          </Link>{' '}
        </li>
        <li className='text-green-500 p-base-semibold underline'>
          <Link href='/kunststoffen' className='link-interaction'>
            Kunststoffen <IconArrowRight className='inline-block h-5 w-5' aria-hidden='true' />
          </Link>{' '}
        </li>
        <li className='text-green-500 p-base-semibold underline'>
          <Link href='/eu-wetgeving' className='link-interaction'>
            EU wetgeving <IconArrowRight className='inline-block h-5 w-5' aria-hidden='true' />
          </Link>{' '}
        </li>
        <li className='text-green-500 p-base-semibold underline'>
          <Link href='/over/wat-is-circuLaw' className='link-interaction'>
            Wat is CircuLaw? <IconArrowRight className='inline-block h-5 w-5' aria-hidden='true' />
          </Link>{' '}
        </li>
        <li className='text-green-500 p-base-semibold underline'>
          <Link href='/contact' className='link-interaction'>
            Contact <IconArrowRight className='inline-block h-5 w-5' aria-hidden='true' />
          </Link>{' '}
        </li>
      </ul>
    </div>
  );
}

export const metadata = {
  title: '404 - CircuLaw',
};

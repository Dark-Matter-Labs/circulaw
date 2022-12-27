import Link from 'next/link';
import Layout from '../../components/layouts/layout';

export default function NotFound() {
  return (
    <Layout>
      <div className='global-margin my-20 max-w-2xl text-center'>
        <h1 className='text-9xl text-black1 pb-2 text-green2'>404</h1>
        <p className='body-text-mobile sm:body-text text-black1'>
          We kunnen de pagina die je zoekt niet vinden. Kunnen we je verder helpen?
        </p>

        <p className='body-text-mobile sm:body-text text-black1'>
          Zoek verder:
          <ul className=''>
            <li className='text-greenLink link-mobile sm:link'>
              <Link href='/'>Home →</Link>
            </li>
            <li className='text-greenLink link-mobile sm:link'>
              <Link href='/houtbouw'>Houtbouw →</Link>{' '}
            </li>
            <li className='text-greenLink link-mobile sm:link'>
              <Link href='/circulaire-windturbines'>Circulaire windturbines →</Link>{' '}
            </li>
            <li className='text-greenLink link-mobile sm:link'>
              <Link href='/wat-is-circulaw'>Wat is CircuLaw? →</Link>{' '}
            </li>
            <li className='text-greenLink link-mobile sm:link'>
              <Link href='/contact'>Contact →</Link>{' '}
            </li>
          </ul>
        </p>
      </div>
    </Layout>
  );
}

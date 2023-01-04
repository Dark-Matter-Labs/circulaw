import Link from 'next/link';
import Head from 'next/head';
import Footer from '../../components/footer';
import Nav from '../../components/nav';
import CookieConsent from '../../components/cookie-banner';

export default function Layout(props) {
  return (
    <>
      <div className='bg-grey2 border border-grey1'>
        <div className='global-margin py-4'>
          <div className='flex justify-between flex-wrap'>
            <div className='w-0 flex-1 flex items-center'>
              <p className='ml-3 font-medium text-black1 truncate font-manrope font-normal'>
                <span className='md:hidden'>
                  <span className='font-bold bg-blush1 p-2'>ALPHA</span> Testversie CircuLaw -{' '}
                  <span className='link-mobile text-greenLink'>
                    <Link href='/alpha'>Lees meer -&gt;</Link>
                  </span>
                </span>
                <span className='hidden md:inline'>
                  <span className='font-bold bg-blush1 p-4 m-2'>ALPHA</span> Testversie CircuLaw -{' '}
                  <span className='link-mobile text-greenLink'>
                    <Link href='/alpha'>Lees meer -&gt;</Link>
                  </span>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Nav />
      <Head>
        <title>CircuLaw</title>
      </Head>
      <main className=''>{props.children}</main>
      <CookieConsent />
      <Footer />
    </>
  );
}

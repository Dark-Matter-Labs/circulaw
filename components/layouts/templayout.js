import Head from 'next/head';
import Footer from '../../components/tempFooter';
import Nav from '../../components/nav';
import CookieConsent from '../../components/cookie-banner';

export default function Layout(props) {
  return (
    <>
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

import Head from 'next/head';
import Footer from '../../components/footer';
import Nav from '../../components/nav';
import CookieConsent from '../../components/cookie-banner';

export default function Layout(props) {
  const vraagSlug = props.vraagSlug
  const aboutSlugs = props.aboutSlugs
  return (
    <>
      <Nav vraagSlug = {vraagSlug} aboutSlugs = {aboutSlugs} />
      <Head>
        <title>CircuLaw</title>
      </Head>
      <main className=''>{props.children}</main>
      <CookieConsent />
      <Footer vraagSlug = {vraagSlug} aboutSlugs = {aboutSlugs} />
    </>
  );
}

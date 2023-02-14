import Head from 'next/head';
import { groq } from 'next-sanity';
import useSWR from 'swr';

import Footer from '../../components/footer';
import Nav from '../../components/nav';
import CookieConsent from '../../components/cookie-banner';
import { siteSettingsQuerys } from '../../lib/querys';
import { fetcher } from '../../utils/swr-fetcher';

export default function Layout(props) {
  const { data: aboutPageSlugs } = useSWR(groq`${siteSettingsQuerys.overCirulaw}`, fetcher);
  const { data: vraagAntwoordSlug } = useSWR(groq`${siteSettingsQuerys.vraagAntwoord}`, fetcher);
  const aboutSlugs = aboutPageSlugs?.slugs;
  const vraagSlug = vraagAntwoordSlug?.slug;

  return (
    <>
      <Nav vraagSlug={vraagSlug} aboutSlugs={aboutSlugs} />
      <Head>
        <title>CircuLaw</title>
      </Head>
      <main className=''>{props.children}</main>
      <CookieConsent />
      <Footer vraagSlug={vraagSlug} aboutSlugs={aboutSlugs} />
    </>
  );
}

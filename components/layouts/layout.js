import Head from 'next/head';
import { groq } from 'next-sanity';
import useSWR from 'swr';

import globalMeta from '../../utils/global-meta';
import Footer from '../../components/footer';
import Nav from '../../components/nav';
import CookieConsent from '../../components/cookie-banner';
import { siteSettingsQuerys, footerQuery } from '../../lib/queries';
import { fetcher } from '../../utils/swr-fetcher';

export default function Layout({
  title = globalMeta.siteName,
  description = globalMeta.description,
  canonicalUrl = globalMeta.siteUrl,
  ogType,
  ogImgUrl = globalMeta.siteLogo,
  children,
  homePageHeader,
}) {
  const { data: aboutPageSlugs } = useSWR(groq`${siteSettingsQuerys.overCirulaw}`, fetcher);
  const { data: vraagAntwoordSlug } = useSWR(groq`${siteSettingsQuerys.vraagAntwoord}`, fetcher);
  const { data: themaPageSlugs } = useSWR(groq`${siteSettingsQuerys.thema}`, fetcher);
  const {data: footerTextData } = useSWR(groq`${footerQuery}`, fetcher)
  const footerText = footerTextData
  const aboutNavItems = aboutPageSlugs;
  const vraagSlug = vraagAntwoordSlug?.slug;
  const themaSlugs = themaPageSlugs?.slugs;

  return (
    <>
      <Nav vraagSlug={vraagSlug} aboutSlugs={aboutNavItems} themaSlugs={themaSlugs} homePageHeader={homePageHeader} />
      <Head>
        <title>{title} </title>
        <meta name='description' content={description} />
        <link rel='canonical' href={canonicalUrl} />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />

        <meta property='og:locale' content='nl_NL' />
        <meta property='og:site_name' content={globalMeta.siteName} />
        <meta property='og:type' content={ogType} />
        <meta property='og:description' content={description} />
        <meta property='og:image' content={ogImgUrl} />
        <meta property='og:url' content={canonicalUrl} />
      </Head>
      <main className=''>{children}</main>
      <CookieConsent />
      <Footer vraagSlug={vraagSlug} aboutSlugs={aboutNavItems} themaSlugs={themaSlugs} footerText={footerText } />
    </>
  );
}

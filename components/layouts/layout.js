import { useEffect } from 'react';
import Script from 'next/script';
import CookieConsent from '@/components/cookie-banner';
import Nav from '@/components/nav';
import Footer from '@/components/nav/footer';
import { siteSettingsQuerys, footerQuery } from '@/lib/queries';
import globalMeta from '@/utils/global-meta';
import { fetcher } from '@/utils/swr-fetcher';
import PiwikProProvider from '@piwikpro/next-piwik-pro';
import { groq } from 'next-sanity';
import Head from 'next/head';
import useSWR from 'swr';

export default function Layout({
  title = globalMeta.siteName,
  description = globalMeta.description,
  keywords = globalMeta.keywords,
  siteUrl = globalMeta.siteUrl,
  pageUrl,
  ogImgUrl = globalMeta.siteLogo,
  children,
  homePageHeader,
}) {
  const { data: aboutPageSlugs } = useSWR(groq`${siteSettingsQuerys.overCirulaw}`, fetcher);
  const { data: euSlugs } = useSWR(groq`${siteSettingsQuerys.euSlugsQuery}`, fetcher);
  const { data: vraagAntwoordSlug } = useSWR(groq`${siteSettingsQuerys.vraagAntwoord}`, fetcher);
  const { data: navItems } = useSWR(groq`${siteSettingsQuerys.navQuery}`, fetcher);
  const { data: footerTextData } = useSWR(groq`${footerQuery}`, fetcher);
  const footerText = footerTextData;
  const aboutNavItems = aboutPageSlugs;
  const vraagSlug = vraagAntwoordSlug?.slug;

  useEffect(() => {
  
    window.googleTranslateElementInit = () => {
     new window.google.translate.TranslateElement({ pageLanguage: 'nl' }, 'google_translate_element');
    };
  
   }, []);

  return (
    <>
      <Nav
        vraagSlug={vraagSlug}
        aboutSlugs={aboutNavItems}
        euSlugs={euSlugs}
        navItems={navItems}
        homePageHeader={homePageHeader}
      />
      <div id="google_translate_element" style={{ position: 'fixed', right: 0, top: 100, zIndex: 1000, backgroundColor:'rgba(255, 255, 255, 0.7)', borderRadius:'10px', padding:'5px', marginRight: '20px'}}></div>
      <Head>
        <title>{`${title} - CircuLaw`}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
        <meta name='robots' content='index, follow' />
        <meta name='googlebot' content='index, follow' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta charSet='utf-8' />
        <link rel='icon' href='/favicon.ico' />
        <link rel='canonical' href={siteUrl + pageUrl} />

        <meta property='og:title' content={`${title} - CircuLaw`} />
        <meta property='og:locale' content='nl_NL' />
        <meta property='og:site_name' content={globalMeta.siteName} />
        <meta property='og:type' content='website' />
        <meta property='og:description' content={description} />
        <meta property='og:image' content={ogImgUrl} />
        <meta property='og:image:alt' content='CircuLaw logo' />
        <meta property='og:image:type' content='image/png' />
        <meta property='og:url' content={siteUrl + pageUrl} />
        
      </Head>
      <Script
     src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    ></Script>

    {/* Google Translate CSS */}
    <link
     rel="stylesheet"
     type="text/css"
     href="https://www.gstatic.com/_/translate_http/_/ss/k=translate_http.tr.26tY-h6gH9w.L.W.O/am=CAM/d=0/rs=AN8SPfpIXxhebB2A47D9J-MACsXmFF6Vew/m=el_main_css"
    />
      <main className='w-full'>
        <PiwikProProvider
          containerId={process.env.NEXT_PUBLIC_CONTAINER_ID}
          containerUrl={process.env.NEXT_PUBLIC_CONTAINER_URL}
        >
          {children}
        </PiwikProProvider>
      </main>
      <CookieConsent />
      <Footer vraagSlug={vraagSlug} aboutSlugs={aboutNavItems} footerText={footerText} />
    </>
  );
}

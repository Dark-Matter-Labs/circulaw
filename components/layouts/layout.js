'use client';
import { useEffect, useState } from 'react';
import Script from 'next/script';
import { XIcon } from '@heroicons/react/outline';
import CookieConsent from '@/components/cookie-banner';
import Nav from '@/components/nav';
import Footer from '@/components/nav/footer';
import { siteSettingsQuerys, footerQuery } from '@/lib/queries';
import { fetcher } from '@/utils/swr-fetcher';
import PiwikProProvider from '@piwikpro/next-piwik-pro';
import { groq } from 'next-sanity';
import useSWR from 'swr';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Layout({ children, homePageHeader }) {
  const [translateOpen, setTranslateOpen] = useState(false);
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
      new window.google.translate.TranslateElement(
        { pageLanguage: 'nl' },
        'google_translate_element',
      );
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
        translateOpen={translateOpen}
        setTranslateOpen={setTranslateOpen}
      />
      <div
        className={classNames(
          translateOpen ? 'block' : 'hidden',
          'fixed right-0 top-20 z-[999] bg-white p-5 mr-4 rounded-cl',
        )}
      >
        <XIcon
          onClick={() => {
            setTranslateOpen(false);
          }}
          className='h-6 w-6 text-green-800 hover:text-green-900 float-right cursor-pointer'
        />
        <h3 className='heading-2xl-semibold text-green-800 max-w-xs'>
          Let Google translate this website
        </h3>
        <div id='google_translate_element' className=''>
          <p className='p-xs italic max-w-xs py-4'>
            Irrespective of the language of your choice this website is focusing on Dutch and
            European law in a Dutch context. Moreover, since all translations are automatic, we
            cannot be responsible for any mistakes in the translation. Please, contact us if you
            have any questions.
          </p>
        </div>
      </div>

      <Script src='https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'></Script>

      {/* Google Translate CSS */}
      <link
        rel='stylesheet'
        type='text/css'
        href='https://www.gstatic.com/_/translate_http/_/ss/k=translate_http.tr.26tY-h6gH9w.L.W.O/am=CAM/d=0/rs=AN8SPfpIXxhebB2A47D9J-MACsXmFF6Vew/m=el_main_css'
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

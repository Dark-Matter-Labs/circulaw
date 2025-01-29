'use client';

import { useEffect } from 'react';
import { hotjar } from 'react-hotjar';

import CookieConsent from '@/components/cookie-banner';
import Nav from '@/components/nav';
import Footer from '@/components/nav/footer';
import PiwikProProvider from '@piwikpro/next-piwik-pro';

// TODO: what parts of this can we move directly to layout.js
// moving these parts mean they will render on the server and not client side.
// at the moment most of the layout is being rendered client side which defeats the purporse of the app router.
export default function Layout({
  children,
  homePageHeader,
  navData,
  partnerLogos,
  hasLocalConsentCookie,
  hotjarCookie,
}) {
  const vraagSlug = '/vraag-en-antwoord';

  useEffect(() => {
    if (hotjarCookie === 'true') {
      console.log('hotjar turned on');
      hotjar.initialize(Number(process.env.NEXT_PUBLIC_HJID), Number(process.env.NEXT_PUBLIC_HJSV));
    }
  }, [hotjarCookie]);

  return (
    <>
      <Nav
        vraagSlug={vraagSlug}
        aboutSlugs={navData?.aboutPages}
        euSlugs={navData?.EUSlugs}
        navItems={navData?.themesAndProductChains}
        homePageHeader={homePageHeader}
      />

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
      <CookieConsent hasLocalConsentCookie={hasLocalConsentCookie} />
      <Footer
        vraagSlug={vraagSlug}
        aboutSlugs={navData?.aboutPages}
        footerText={navData?.footerText}
        partnerLogos={partnerLogos}
      />
    </>
  );
}

import { Plus_Jakarta_Sans } from 'next/font/google';
import { draftMode } from 'next/headers';
import Script from 'next/script';

import DraftModeBanner from '@/components/draft-mode-banner';
import Layout from '@/components/layouts/layout';
import SiteStructuredData from '@/components/structured-data/site';
import { NAV_QUERY, PARTNERS_QUERY } from '@/lib/queries';
import { sanityFetch } from '@/lib/sanity';
import globalMeta from '@/utils/global-meta';

import '../global.css';

const plus_Jakarta_Sans = Plus_Jakarta_Sans({
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-plus-jakarta-sans',
});

// these are global and will be on all pages.
export const metadata = {
  metadataBase: new URL(globalMeta.siteUrl),
  // No canonical here: every page that doesn't set its own would inherit it and
  // tell search engines it is a duplicate of the homepage.
  title: globalMeta.siteName,
  description: globalMeta.description,
  keywords: globalMeta.keywords,
  openGraph: {
    images: globalMeta.siteLogo,
    title: globalMeta.siteName,
    description: globalMeta.description,
    type: 'website',
  },

  // No nocache: Bing reads it as "only use URL, title and snippet" in Copilot
  // and chat answers, which hides the content from AI search.
  robots: {
    index: true,
    follow: true,
  },
};

export default async function RootLayout({ children }) {
  const { isEnabled: isDraftMode } = await draftMode();
  const partnerLogos = await sanityFetch({ query: PARTNERS_QUERY, tags: ['partners'] });
  const navData = await sanityFetch({
    query: NAV_QUERY,
    tags: ['aboutPages', 'navigation', 'thema', 'simpleThema', 'euLaw', 'siteConfig', 'navigation'],
  });
  return (
    <html lang='nl' className={plus_Jakarta_Sans.variable}>
      <body className='text-cl-black'>
        <SiteStructuredData />
        {isDraftMode && <DraftModeBanner />}
        {/* Editors previewing drafts are not site visitors. */}
        {!isDraftMode && (
          <Script
            src='https://scripts.simpleanalyticscdn.com/latest.js'
            strategy='afterInteractive'
          />
        )}
        <Layout navData={navData} partnerLogos={partnerLogos}>
          {children}
        </Layout>
      </body>
    </html>
  );
}

import { Plus_Jakarta_Sans } from 'next/font/google';
import { cookies } from 'next/headers';

import Layout from '@/components/layouts/layout';
import { NAV_QUERY, PARTNERS_QUERY } from '@/lib/queries';
import { sanityFetch } from '@/lib/sanity';
import globalMeta from '@/utils/global-meta';
import { hasCookie } from 'cookies-next';

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
  alternates: {
    canonical: '/',
  },
  title: globalMeta.siteName,
  description: globalMeta.description,
  keywords: globalMeta.keywords,
  openGraph: {
    images: globalMeta.siteLogo,
    title: globalMeta.siteName,
    description: globalMeta.description,
    type: 'website',
  },

  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
};

export default async function RootLayout({ children }) {
  const partnerLogos = await sanityFetch({ query: PARTNERS_QUERY, tags: ['partners'] });
  const navData = await sanityFetch({
    query: NAV_QUERY,
    tags: ['aboutPages', 'navigation', 'thema', 'simpleThema', 'euLaw', 'siteConfig', 'navigation'],
  });
  const hasLocalConsentCookie = hasCookie('localConsent', { cookies });


  return (
    <html lang='nl' className={plus_Jakarta_Sans.variable}>
      <body className='text-cl-black'>
        <Layout
          navData={navData}
          partnerLogos={partnerLogos}
          hasLocalConsentCookie={hasLocalConsentCookie}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}

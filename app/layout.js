import '../global.css';
import 'tailwindcss/tailwind.css';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { LinkedInInsightTag } from 'nextjs-linkedin-insight-tag';

import globalMeta from '@/utils/global-meta';
import Layout from '@/components/layouts/layout';
import { client } from '@/lib/sanity';
import { NAV_QUERY, PARTNERS_QUERY } from '@/lib/queries';
import { getCookie, hasCookie } from 'cookies-next';
import { cookies } from 'next/headers';

const plus_Jakarta_Sans = Plus_Jakarta_Sans({
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-plus-jakarta-sans',
});

// these are global and will be on all pages.
// TODO - Define strategy for global metadata and page level metadata.
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

async function getNavData() {
  const navData = await client.fetch(NAV_QUERY, {
    next: { tags: ['aboutPages', 'navigation', 'thema', 'simpleThema', 'euLaw', 'siteConfig'] },
  });
  if (!navData) {
    throw new Error('could not fetch navData');
  }
  return navData;
}

async function getPartnerLogos() {
  const partnerLogos = await client.fetch(PARTNERS_QUERY, { next: { tags: ['partners'] } });
  if (!partnerLogos) {
    throw new Error('could not fetch partnerLogos');
  }
  return partnerLogos;
}

export default async function RootLayout({ children }) {
  const navData = await getNavData();
  const partnerLogos = await getPartnerLogos();

  const hasLocalConsentCookie = hasCookie('localConsent', { cookies });
  const hotjarCookie = getCookie('localConsent', { cookies });

  return (
    <html lang='nl' className={plus_Jakarta_Sans.variable}>
      <body>
        <Layout
          navData={navData}
          partnerLogos={partnerLogos}
          hasLocalConsentCookie={hasLocalConsentCookie}
          hotjarCookie={hotjarCookie}
        >
          {children}
        </Layout>
        <LinkedInInsightTag />
      </body>
    </html>
  );
}

import '../global.css';
import 'tailwindcss/tailwind.css';
import { Plus_Jakarta_Sans } from 'next/font/google';

import globalMeta from '@/utils/global-meta';
import Layout from '@/components/layouts/layout';
import { Suspense } from 'react';
import { client } from '@/lib/sanity';
import { NAV_QUERY } from '@/lib/queries';

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
    languages: {
      'nl-NL': '/nl-NL',
    },
  },
  title: globalMeta.siteName,
  description: globalMeta.description,
  keywords: globalMeta.keywords,
  openGraph: {
    images: globalMeta.siteLogo,
  },

  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

async function getNavData() {
  const navData = await client.fetch(NAV_QUERY);
  if (!navData) {
    throw new Error('could not fetch navData');
  }
  return navData;
}

export default async function RootLayout({ children }) {
  const navData = await getNavData();
  return (
    <html lang='nl' className={plus_Jakarta_Sans.variable}>
      <body>
        {/* TODO - at the moment the entire layout for every page is wrapped in suspense. This is because the Nav uses useSearchParams and this needs to be wrapped */}
        {/* We could either: remove useSearchParams from nav, e.g. make a component just for the search part of the nav which uses it, seperate the nav from the layout component */}
        <Suspense>
          <Layout navData={navData}>{children}</Layout>
        </Suspense>
      </body>
    </html>
  );
}

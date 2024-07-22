import '../global.css';
import 'tailwindcss/tailwind.css';
import { Plus_Jakarta_Sans } from 'next/font/google';

import globalMeta from '@/utils/global-meta';
import Layout from '@/components/layouts/layout'

const plus_Jakarta_Sans = Plus_Jakarta_Sans({
  weight: ['200','300','400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-plus-jakarta-sans',
})

export const metadata = {
  title: globalMeta.siteName,
  description: globalMeta.description,
  keywords: globalMeta.keywords
}


export default function RootLayout({children}) {
  return (
      <html lang="nl" className={plus_Jakarta_Sans.variable}>
        <body>
          <Layout>
          {children}
          </Layout>
          </body>
      </html>
    )
  }
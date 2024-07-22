import '../global.css';
import 'tailwindcss/tailwind.css';

import Layout from '@/components/layouts/layout'

export const metadata = {
  title: 'Next.js',
}

export default function RootLayout({
    children,
  }) {
    return (
      <html lang="nl">
        
        <body>
          <Layout>
          {children}
          </Layout>
          </body>
      </html>
    )
  }
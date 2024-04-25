import '../global.css';
import { getCookie } from 'cookies-next';
import 'next-pagination/dist/index.css';
import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { useEffect } from 'react';
import { hotjar } from 'react-hotjar';
import 'tailwindcss/tailwind.css';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  const consent = getCookie('localConsent');

  useEffect(() => {
    if (consent === true) {
      hotjar.initialize({ id: Number(process.env.NEXT_PUBLIC_HJID), sv: process.env.NEXT_PUBLIC_HJSV });
    }
  }, [consent]);

  return <>{getLayout(<Component {...pageProps} />)}</>;
}

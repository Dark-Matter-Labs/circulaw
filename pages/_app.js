import Script from 'next/script';
import { hotjar } from 'react-hotjar';
import { useEffect } from 'react';
import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { getCookie } from 'cookies-next';
import 'tailwindcss/tailwind.css';
import 'next-pagination/dist/index.css';
import '../global.css';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  const consent = getCookie('localConsent');

  useEffect(() => {
    if (consent === true) {
      hotjar.initialize(process.env.NEXT_PUBLIC_HJID, process.env.NEXT_PUBLIC_HJSV);
    }
  }, [consent]);

  return (
    <>
      {getLayout(<Component {...pageProps} />)}
      <Script src='https://scripts.simpleanalyticscdn.com/latest.js' />
      <noscript>
        {/* eslint-disable @next/next/no-img-element */}
        <img
          src='https://queue.simpleanalyticscdn.com/noscript.gif'
          alt=''
          referrerPolicy='no-referrer-when-downgrade'
        />
      </noscript>
    </>
  );
}

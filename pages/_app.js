import '../global.css';
import { getCookie } from 'cookies-next';
import { LinkedInInsightTag } from 'nextjs-linkedin-insight-tag';
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
      hotjar.initialize(
        Number(process.env.NEXT_PUBLIC_HJID),
        Number(process.env.NEXT_PUBLIC_HJSV),
      );
    }
  }, [consent]);

  return (
    <>
      <LinkedInInsightTag />
      {getLayout(<Component {...pageProps} />)}
    </>
  );
}

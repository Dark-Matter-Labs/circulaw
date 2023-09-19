import Link from 'next/link';
import { useState, useEffect } from 'react';
import { setCookie, hasCookie } from 'cookies-next';
import { useRouter } from 'next/router';

const CookieConsent = () => {
  const [consent, setConsent] = useState(true);
  const router = useRouter();
  useEffect(() => {
    setConsent(hasCookie('localConsent'));
  }, []);

  const acceptCookie = () => {
    setConsent(true);
    setCookie('localConsent', 'true', { maxAge: 60 * 60 * 24 * 365 });
    router.reload(window.location.pathname); // extra refresh to enable Hotjar
  };
  const denyCookie = () => {
    setConsent(true);
    setCookie('localConsent', 'false', { maxAge: 60 * 60 * 24 * 365 });
  };
  if (consent === true || window.location.host.includes('staging')) {
    return null;
  }

  return (
    <section className={`fixed bottom-0 left-0 w-full pb-2 shadow-top ${consent ? 'hidden' : ''}`}>
      <div className='flex flex-col items-start px-20 py-6 space-y-2 bg-green-600 md:flex-row md:space-y-0 md:items-stretch md:space-x-2  '>
        <div className='flex items-center flex-grow text-black-white-100'>
          <p className='p-base sm:p-lg'>
            Op deze site gebruiken we cookies om te analyseren hoe jij de site gebruikt en om de
            site vervolgens te kunnen verbeteren. Altijd met respect voor jouw privacy. Lees voor
            meer informatie onze{' '}
            <Link href='/privacy-policy'>
              <span className='link-lg underline link-interaction'>Privacyverklaring</span>
            </Link>{' '}
            en ons{' '}
            <Link href='/cookie-info'>
              <span className='link-lg underline link-interaction'>Cookiebeleid.</span>
            </Link>
          </p>
        </div>
        <div className='flex items-center'>
          <button
            className='inline-flex rounded-full items-center px-4 py-4 border button mr-2 border-black-white-100 bg-transparent hover:bg-green-200 text-black-white-100 hover:text-green-600 focus:outline-none focus:bg-green-100 focus:ring-2 focus:ring-white active:bg-green-800 active:text-black-white-100'
            onClick={() => denyCookie()}
          >
            Weiger
          </button>
          <button
            className='inline-flex rounded-full items-center px-4 py-4 border button ml-2 border-green-600 bg-black-white-100 hover:bg-green-200 text-green-600 hover:border-black-white-100 focus:outline-none focus:bg-green-100 focus:ring-2 focus:ring-white active:bg-green-300 active:text-green-600'
            onClick={() => {
              acceptCookie();
            }}
          >
            Accepteer
          </button>
        </div>
      </div>
    </section>
  );
};

export default CookieConsent;

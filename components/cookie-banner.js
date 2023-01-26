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
  if (consent === true) {
    return null;
  }

  return (
    <section className={`fixed bottom-0 left-0 w-full py-2 md:py-4 ${consent ? 'hidden' : ''}`}>
      <div className='flex flex-col items-start px-5 py-3 space-y-2 bg-black-white-300 md:flex-row md:space-y-0 md:items-stretch md:space-x-2'>
        <div className='flex items-center flex-grow text-black-white-800'>
          <p className='p-sm'>
            Op deze site gebruiken we cookies om te analyseren hoe jij de site gebruikt en om de
            site vervolgens te kunnen verbeteren. Altijd met respect voor jouw privacy. Lees voor
            meer informatie onze{' '}
            <Link href='/privacy-policy'>
              <span className='text-sm underline hover:text-lightAccent'>Privacyverklaring</span>
            </Link>{' '}
            en ons{' '}
            <Link href='/cookie-info'>
              <span className='text-sm underline hover:text-lightAccent'>Cookiebeleid.</span>
            </Link>
          </p>
        </div>
        <div className='flex items-center'>
          <button
            className='inline-flex rounded-full items-center px-4 py-2 border button border-green-600 bg-transparent hover:bg-green-600 text-green-600 hover:text-black-white-200 transition ease-in-out hover:duration-150 focus:outline-none'
            onClick={() => denyCookie()}
          >
            Weiger
          </button>
          <button
            className='inline-flex rounded-full items-center px-4 py-2 border button ml-2 border-green-600 bg-green-600 hover:bg-transparent text-black-white-200 hover:text-green-600 transition ease-in-out hover:duration-150 focus:outline-none'
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

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
    setCookie('localConsent', 'true', { maxAge: 365 });
    router.reload(window.location.pathname); // extra refresh to enable Hotjar
  };
  const denyCookie = () => {
    setConsent(true);
    setCookie('localConsent', 'false', { maxAge: 365 });
  };
  if (consent === true) {
    return null;
  }

  return (
    <section className={`fixed bottom-0 left-0 w-full py-2 md:py-4 ${consent ? 'hidden' : ''}`}>
      <div className='flex flex-col items-start px-5 py-3 space-y-2 bg-gray-200 md:flex-row md:space-y-0 md:items-stretch md:space-x-2'>
        <div className='flex items-center flex-grow text-gray-900'>
          <p className='text-sm font-medium'>
            We are using cookies on this site to test the beta version, so we can best
            optimize the experience and usability. We will always respect your privacy. You can
            learn more about the details at our{' '}
            <Link href='/privacy-policy'>
              <span className='text-sm underline hover:text-lightAccent'>privacy policy</span>
            </Link>
            {' '}and our{' '}
            <Link href='/cookie-info'>
              <span className='text-sm underline hover:text-lightAccent'>cookie info.</span>
            </Link>
          </p>
        </div>
        <div className='flex items-center'>
          <button
            className='p-3 mr-2 text-sm font-bold text-white uppercase bg-gray-700 whitespace-nowrap'
            onClick={() => denyCookie()}
          >
            Deny
          </button>
          <button
            className='p-3 text-sm font-bold text-white uppercase bg-gray-700 whitespace-nowrap'
            onClick={() => {
              acceptCookie();
            }}
          >
            Accept
          </button>
        </div>
      </div>
    </section>
  );
};

export default CookieConsent;

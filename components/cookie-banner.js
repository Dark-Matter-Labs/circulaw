import { useEffect, useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { setCookie } from 'cookies-next';

const CookieConsent = ({ hasLocalConsentCookie }) => {
  const [consent, setConsent] = useState(true);
  const router = useRouter();

  useEffect(() => {
    setConsent(hasLocalConsentCookie);
  }, [hasLocalConsentCookie]);

  const acceptCookie = () => {
    setConsent(true);
    setCookie('localConsent', 'true', { maxAge: 60 * 60 * 24 * 365 });
    // extra refresh to enable Hotjar
    router.refresh();
    // eslint-disable-next-line
    ppms.cm.api(
      'setComplianceSettings',
      { consents: { analytics: { status: 1 } } },
      () => console.log('consent success'),
      () => console.log('consent fail'),
    );
  };
  const denyCookie = () => {
    setConsent(true);
    setCookie('localConsent', 'false', { maxAge: 60 * 60 * 24 * 365 });
    // eslint-disable-next-line
    ppms.cm.api(
      'setComplianceSettings',
      { consents: { analytics: { status: 0 } } },
      () => console.log('consent success'),
      () => console.log('consent fail'),
    );
  };
  if (
    consent === true ||
    window.location.host.includes('staging') ||
    window.location.host.includes('-git-') ||
    window.location.host.includes('localhost')
  ) {
    return null;
  }

  return (
    <section
      className={`shadow-top fixed bottom-0 left-0 z-20 w-full pb-2 ${
        consent === true ? 'hidden' : ''
      }`}
    >
      <div className='flex flex-col items-start space-y-2 bg-green-500 px-20 py-6 md:flex-row md:items-stretch md:space-x-2 md:space-y-0'>
        <div className='flex flex-grow items-center text-gray-100'>
          <p className='p-base'>
            Op deze site gebruiken we cookies om te analyseren hoe jij de site gebruikt en om de
            site vervolgens te kunnen verbeteren. Altijd met respect voor jouw privacy. Lees voor
            meer informatie onze{' '}
            <Link href='/privacy-policy'>
              <span className='link-lg link-interaction underline'>Privacyverklaring</span>
            </Link>{' '}
            en ons{' '}
            <Link href='/cookie-info'>
              <span className='link-lg link-interaction underline'>Cookiebeleid.</span>
            </Link>
          </p>
        </div>
        <div className='flex items-center'>
          <button
            className='button mr-2 inline-flex items-center rounded-full border border-gray-100 bg-transparent px-4 py-4 text-gray-100 hover:bg-green-200 hover:text-green-500 focus:bg-green-100 focus:outline-none focus:ring-2 focus:ring-white active:bg-cl-black active:text-gray-100'
            onClick={() => denyCookie()}
          >
            Weiger
          </button>
          <button
            className='button ml-2 inline-flex items-center rounded-full border border-green-500 bg-gray-100 px-4 py-4 text-green-500 hover:border-gray-100 hover:bg-green-200 focus:bg-green-100 focus:outline-none focus:ring-2 focus:ring-white active:bg-green-300 active:text-green-500'
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

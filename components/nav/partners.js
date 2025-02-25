import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import sanityLogo from '@/public/logo_partners/sanity-logo.svg';

import ParnerSection from './parner-section';

export default function Partners({ footerText, partnerLogos }) {
  const pathname = usePathname();

  return (
    <div className='bg-cl-black pb-2 pt-10'>
      {pathname === '/' && (
        <div className='global-margin px-4 pb-12 lg:pb-16'>
          <div className='heading-3xl-semibold pl-3 text-green-100 sm:pl-6 lg:pl-8'>Partners</div>
          <ParnerSection
            partners={partnerLogos?.developingPartners}
            partnerType='Ontwikkelpartners'
          />
          <ParnerSection partners={partnerLogos?.knowledge} partnerType='Kennispartners' />
          <ParnerSection
            partners={partnerLogos?.financingPartners}
            partnerType='Financieringspartners'
          />
        </div>
      )}
      <div className='global-margin p-base pb-2 text-green-100'>
        {pathname === '/en' && (
          <p className='pb-8'>
            This website is currently under development and in this version we are testing the
            technology, design, and content of the site. The content of the site may be incomplete
            or contain errors. This means that no rights can be derived from the content of this
            site.
          </p>
        )}
        {pathname !== '/en' && (
          <p className='pb-8'>
            {footerText?.footerText}&nbsp;
            <Link href='/contact'>
              <span className='link-interaction-dark-bg underline'>
                {footerText?.footerLinkText}
              </span>
            </Link>
          </p>
        )}
        <hr className='border-green-100' />
        <div className='py-2 text-center'>
          <span className='p-xs text-green-100'>Legal data & content managed with support from</span>
          <a target='_blank' href='https://www.sanity.io/' rel='noopener noreferrer'>
            <Image className='mx-2 my-2 inline' src={sanityLogo} alt='Sanity logo' />
          </a>
        </div>
      </div>
    </div>
  );
}

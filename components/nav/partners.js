import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import sanityLogo from '@/public/logo_partners/sanity-logo.svg';

import ParnerSection from './parner-section';

const navigation = {
  other: [
    { name: 'Contact', href: '/contact', className: '' },
    { name: 'Disclaimer/Beta', href: '/beta', className: '' },
    { name: 'Privacy', href: '/privacy-policy', className: '' },
    { name: 'Cookies', href: '/cookie-info', className: '' },
  ],
};

export default function Partners({ footerText, partnerLogos }) {
  const pathname = usePathname();

  return (
    <div className='bg-cl-black pb-2 pt-10'>
      {pathname === '/' && (
        <div className='global-margin pb-12 lg:pb-16'>
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
        <p className='pb-8'>
          {footerText?.footerText}&nbsp;
          <Link href='/contact'>
            <span className='link-interaction-dark-bg underline'>{footerText?.footerLinkText}</span>
          </Link>
        </p>
        <hr className='border-green-100' />
        <div className='flex flex-col items-center justify-center py-2 pb-6 lgNav:flex-row lgNav:justify-between'>
          <div className='flex basis-1/2 flex-col items-center lgNav:flex-row'>
            {/* TODO: add links to cookies and legal policies here when design is ready */}
            <span className='p-xs text-green-100'>
              Legal data & content managed with support from
            </span>
            <a target='_blank' href='https://www.sanity.io/' rel='noopener noreferrer'>
              <Image className='mx-2 my-2 inline' src={sanityLogo} alt='Sanity logo' />
            </a>
          </div>
          <ul role='list' className='flex flex-row gap-x-4'>
            {navigation.other.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className='p-base link-interaction-light-green-bg text-white underline'
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

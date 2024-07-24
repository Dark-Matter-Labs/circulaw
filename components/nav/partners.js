import ParnerSection from './parner-section';
import sanityLogo from '@/public/logo_partners/sanity-logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Partners({ footerText, partnerLogos }) {
  const pathname = usePathname();

  return (
    <div className='bg-green-800 pt-10 pb-2'>
      {pathname === '/' && (
        <div className='global-margin pb-12 px-4 lg:pb-16'>
          <div className='heading-3xl-semibold text-gray-100 pl-3 sm:pl-6 lg:pl-8'>Partners</div>
          <ParnerSection partners={partnerLogos?.developingPartners} partnerType='Ontwikkelpartners' />
          <ParnerSection partners={partnerLogos?.knowledge} partnerType='Kennispartners' />
          <ParnerSection partners={partnerLogos?.financingPartners} partnerType='Financieringspartners' />
        </div>
      )}
      <div className='global-margin pb-2 text-gray-100 p-base'>
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
              <span className='underline link-interaction-dark-bg'>
                {footerText?.footerLinkText}
              </span>
            </Link>
          </p>
        )}
        <hr className='border-gray-100 ' />
        <div className='text-center py-2'>
          <span className='text-gray-100 p-xs'>Legal data & content managed with support from</span>
          <a target='_blank' href='https://www.sanity.io/' rel='noopener noreferrer'>
            <Image className='inline mx-2 my-2' src={sanityLogo} alt='Sanity logo' />
          </a>
        </div>
      </div>
    </div>
  );
}

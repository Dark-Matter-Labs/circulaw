import ParnerSection from './parner-section';
import { partnersQuery } from '@/lib/queries';
import sanityLogo from '@/public/logo_partners/sanity-logo.svg';
import { fetcher } from '@/utils/swr-fetcher';
import { groq } from 'next-sanity';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import useSWR from 'swr';

export default function Partners({ footerText }) {
  const { data } = useSWR(groq`${partnersQuery}`, fetcher);
  const pathname = usePathname();

  return (
    <div className='bg-green-800 pt-10 pb-2'>
      {pathname === '/' && (
        <div className='global-margin pb-12 px-4 lg:pb-16'>
          <div className='heading-3xl-semibold text-gray-100 pl-3 sm:pl-6 lg:pl-8'>Partners</div>
          <ParnerSection partners={data?.developingPartners} partnerType='Ontwikkelpartners' />
          <ParnerSection partners={data?.knowledge} partnerType='Kennispartners' />
          <ParnerSection partners={data?.financingPartners} partnerType='Financieringspartners' />
        </div>
      )}
      <div className='global-margin pb-2 text-gray-100 p-base'>
        {pathname === '/en' && (
          <p className='pb-8'>
            Welcome to CircuLaw. This website is currently under development and in this version we
            are testing the technology, design, and content of the site. The content of the site may
            be incomplete or contain errors. This means that no rights can be derived from the
            content of this site. We would like to hear what you think, what you would like
            differently, what you think is missing, and of course, we would also like to hear what
            makes you happy.{' '}
            <Link href='mailto:info@circulaw.nl'>
              <span className='text-green-300 hover:text-green-200 active:text-green-400 focus:text-green-100 focus:right-2 focus:ring-white'>
                Please send your feedback on this beta version.
              </span>
            </Link>
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

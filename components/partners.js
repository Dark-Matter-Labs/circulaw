import Link from 'next/link';
import Image from 'next/image';
import useSWR from 'swr';
import { useRouter } from 'next/router';
import { groq } from 'next-sanity';
import { urlFor } from '../lib/sanity';
import { partnersQuery } from '../lib/queries';
import sanityLogo from '../public/logo_partners/sanity-logo.svg';
import { fetcher } from '../utils/swr-fetcher';
import { Fragment } from 'react';

const bordersDesktop =
  'lg:[&:nth-child(6)]:border-r-0 lg:[&:nth-child(14)]:border-r-0 lg:[&:nth-child(21)]:border-r-0 lg:[&:nth-child(29)]:border-r-0 lg:[&:nth-child(3)]:border-r lg:[&:nth-child(8)]:border-r lg:[&:nth-child(12)]:border-r lg:[&:nth-child(17)]:border-r lg:[&:nth-child(26)]:border-r';
const bordersSmall =
  '[&:nth-child(3)]:border-r-0 [&:nth-child(8)]:border-r-0 [&:nth-child(12)]:border-r-0 [&:nth-child(17)]:border-r-0 [&:nth-child(21)]:border-r-0 [&:nth-child(26)]:border-r-0';
// fix query to receive the array and not an object
export default function Partners({ footerText }) {
  const { data } = useSWR(groq`${partnersQuery}`, fetcher);
  const partners = data?.partners;

  const router = useRouter();
  return (
    <div className='bg-green-800 pt-10 pb-2'>
      <div className='global-margin pb-12 px-4 lg:pb-16'>
        <div className='grid grid-cols-3 gap-x-0.5 gap-y-4 lg:grid-cols-5 '>
          {partners?.map((partner, index) => {
            return (
              <Fragment key={partner.partnerName}>
                <div
                  key={partner.partnerName}
                  className={`col-span-1 flex justify-center py-4 px-4 lg:py-8 lg:px-8 border-r border-black-white-200  ${bordersDesktop} ${bordersSmall}`}
                >
                  <Link target='_blank' href={partner.partnerLink} rel='noopener noreferrer'>
                    <Image
                      src={urlFor(partner.logo).url()}
                      alt={partner.partnerName}
                      width={190}
                      height={190}
                    />
                  </Link>
                </div>

                {index === 2 && (
                  <hr className='border-black-white-200 col-span-3 block lg:hidden' />
                )}

                {index === 4 && (
                  <hr className='border-black-white-200 col-span-5 hidden lg:block' />
                )}

                {index === 5 && (
                  <hr className='border-black-white-200 col-span-3 block lg:hidden' />
                )}

                {index === 8 && (
                  <hr className='border-black-white-200 col-span-3 block lg:hidden' />
                )}

                {index === 9 && (
                  <hr className='border-black-white-200 col-span-5 hidden lg:block' />
                )}

                {index === 11 && (
                  <hr className='border-black-white-200 col-span-3 block lg:hidden' />
                )}

                {partners.length > 15 && index === 14 && (
                  <hr className='border-black-white-200 col-span-3 block lg:hidden' />
                )}
                {partners.length > 15 && index === 14 && (
                  <hr className='border-black-white-200 col-span-5 hidden lg:block' />
                )}
                {partners.length > 15 && index === 17 && (
                  <hr className='border-black-white-200 col-span-3 block lg:hidden' />
                )}
              </Fragment>
            );
          })}
        </div>
      </div>
      <div className='global-margin pb-2 text-black-white-200 p-base'>
        {router.pathname === '/en' && (
          <p className='pb-8'>
            Welcome to CircuLaw. This website is currently under development and in this version we
            are testing the technology, design, and content of the site. The content of the site may
            be incomplete or contain errors. This means that no rights can be derived from the
            content of this site. We would like to hear what you think, what you would like
            differently, what you think is missing, and of course, we would also like to hear what
            makes you happy.{' '}
            <Link href='mailto:info@circulaw.nl'>
              <span className='text-green-300 link-interaction-dark-bg'>
                Please send your feedback on this beta version.
              </span>
            </Link>
          </p>
        )}
        {router.pathname !== '/en' && (
          <p className='pb-8'>
            {footerText?.footerText}&nbsp;
            <Link href='/contact'>
              <span className='underline link-interaction-dark-bg'>{footerText?.footerLinkText}</span>
            </Link>
          </p>
        )}
        <hr className='border-black-white-200 ' />
        <div className='text-center py-2'>
          <span className='text-black-white-100 p-sm'>
            Legal data & content managed with support from
          </span>
          <a target='_blank' href='https://www.sanity.io/' rel='noopener noreferrer'>
            <Image className='inline mx-2 my-2' src={sanityLogo} alt='Sanity logo' />
          </a>
        </div>
      </div>
    </div>
  );
}

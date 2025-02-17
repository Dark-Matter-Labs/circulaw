import { Fragment } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { urlFor } from '@/lib/sanity';

const bordersDesktop =
  'lg:[&:nth-child(5)]:border-r-0 lg:[&:nth-child(10)]:border-r-0 lg:[&:nth-child(15)]:border-r-0 lg:[&:nth-child(3)]:border-r lg:[&:nth-child(6)]:border-r lg:[&:nth-child(9)]:border-r lg:[&:nth-child(12)]:border-r lg:[&:nth-child(15)]:border-r';
const bordersSmall =
  'sm:[&:nth-child(3)]:border-r-0 sm:[&:nth-child(6)]:border-r-0 sm:[&:nth-child(9)]:border-r-0 sm:[&:nth-child(12)]:border-r-0 sm:[&:nth-child(15)]:border-r-0';

export default function ParnerSection({ partners, partnerType }) {
  return (
    <>
      <div className='heading-xl-semibold my-4 pl-3 text-gray-100 sm:pl-6 lg:pl-8'>
        {partnerType}
      </div>
      <div
        className={`${
          partnerType === 'Financieringspartners'
            ? ''
            : 'mb-8 border-b border-gray-100 sm:mb-12 sm:pb-8'
        } grid grid-cols-2 gap-x-0.5 gap-y-4 sm:grid-cols-3 lg:grid-cols-5`}
      >
        {partners?.map((partner) => (
          <Fragment key={partner.partnerName}>
            <div
              key={partner.partnerName}
              className={`col-span-1 flex items-center justify-center border-r-0 border-gray-100 px-4 py-4 sm:border-r lg:px-8 lg:py-4 ${bordersDesktop} ${bordersSmall}`}
            >
              <Link href={partner.partnerLink} target='_blank' rel='noopener noreferrer'>
                <Image
                  src={urlFor(partner.logo).url()}
                  alt={partner.partnerName}
                  width={190}
                  height={190}
                  className='h-auto w-auto'
                />
              </Link>
            </div>
          </Fragment>
        ))}
      </div>
    </>
  );
}

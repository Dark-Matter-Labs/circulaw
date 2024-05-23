import { urlFor } from '@/lib/sanity';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';

const bordersDesktop =
  'lg:[&:nth-child(5)]:border-r-0 lg:[&:nth-child(10)]:border-r-0 lg:[&:nth-child(15)]:border-r-0 lg:[&:nth-child(3)]:border-r lg:[&:nth-child(6)]:border-r lg:[&:nth-child(9)]:border-r lg:[&:nth-child(12)]:border-r lg:[&:nth-child(15)]:border-r';
const bordersSmall =
  'sm:[&:nth-child(3)]:border-r-0 sm:[&:nth-child(6)]:border-r-0 sm:[&:nth-child(9)]:border-r-0 sm:[&:nth-child(12)]:border-r-0 sm:[&:nth-child(15)]:border-r-0';

export default function ParnerSection({ partners, partnerType }) {
  return (
    <>
      <div className='heading-xl-semibold text-gray-100 pl-3 sm:pl-6 lg:pl-8 my-4'>
        {partnerType}
      </div>
      <div
        className={`${
          partnerType === 'Financieringspartners'
            ? ''
            : 'mb-8 sm:mb-12 border-b border-gray-100 sm:pb-8'
        } grid grid-cols-2 sm:grid-cols-3 gap-x-0.5 gap-y-4 lg:grid-cols-5  `}
      >
        {partners?.map((partner) => (
          <Fragment key={partner.partnerName}>
            <div
              key={partner.partnerName}
              className={`col-span-1 flex justify-center items-center py-4 px-4 lg:py-4 lg:px-8 border-r-0 sm:border-r border-gray-100  ${bordersDesktop} ${bordersSmall}`}
            >
              <Link href={partner.partnerLink} target='_blank' rel='noopener noreferrer'>
                <Image
                  src={urlFor(partner.logo).url()}
                  alt={partner.partnerName}
                  width={190}
                  height={190}
                />
              </Link>
            </div>
          </Fragment>
        ))}
      </div>
    </>
  );
}

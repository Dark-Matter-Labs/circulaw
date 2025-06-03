import { Fragment } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { urlFor } from '@/lib/sanity';

export default function ParnerSectionAboutPage({ partners, partnerType }) {
  return (
    <>
      <div className='rounded-cl bg-black'>
        <div className='heading-xl-semibold my-4 pl-3 text-white sm:pl-6 lg:pl-8'>
          {partnerType}
        </div>
        <div
          className={`${
            partnerType === 'Financieringspartners' ? '' : 'sm:pb-8'
          } grid grid-cols-2 gap-x-0.5 gap-y-4 sm:grid-cols-3 lg:grid-cols-5`}
        >
          {partners?.map((partner) => (
            <Fragment key={partner.partnerName}>
              <div
                key={partner.partnerName}
                className='col-span-1 flex items-center justify-center px-4 py-4 lg:px-8 lg:py-4'
              >
                <Link href={partner.partnerLink} target='_blank' rel='noopener noreferrer'>
                  <Image
                    src={urlFor(partner.logo).url()}
                    alt={partner.partnerName}
                    width={190}
                    height={190}
                    className=''
                  />
                </Link>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </>
  );
}

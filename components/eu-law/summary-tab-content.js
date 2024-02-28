import { urlFor } from '@/lib/sanity';
import Link from 'next/link';
import Image from 'next/image';
import EUGenericTooltip from '../tooltips/eu-generic-tooltip';
import EUTooltip from '../tooltips/eu-tooltip';
import { PortableText } from '@portabletext/react';
import { EUtooltipComponents } from '@/lib/portable-text/pt-components';
import LinkIcon from '../link-icon';
import StatusThreeStep from './status/status-three-step';
import StatusTwoStep from './status/status-two-step';

export default function SummaryComponent({ lawData }) {
  return (
    <div className=''>
      {/* Intro section */}
      <div className='global-margin'>
        <div className='grid grid-cols-1 sm:grid-cols-2 py-10 gap-x-32 items-center justify-center'>
          <div className='p-base order-last sm:order-first'>{lawData?.summaryIntroText}</div>
          <div className='mb-6 sm:mb-0 flex items-center justify-center max-h-80'>
            <Image
              src={urlFor(lawData?.introImage)?.url()}
              alt={lawData?.imageAlt}
              width={525}
              height={307}
            />
          </div>
        </div>
      </div>
      {/* tags */}
      {/*  
      <div className='bg-grey-150 h-[200px]'>
        <div className='global-margin py-10'>
          <h2 className='text-green-800 p-6xl-semibold'>Relevante termen</h2>
        </div>
      </div>
*/}
      {/* status */}
      <div className=''>
        <div className='global-margin py-10'>
          <div className='flex flex-row items-center place-items-center'>
            <h2 className='text-green-800 p-6xl-semibold'>Status</h2>
            <div className='place-items-center mt-3 ml-2'>
              <EUGenericTooltip title='Status'>
                i am the generic content and I am kinda long to make the thing wide
              </EUGenericTooltip>
            </div>
          </div>
          <div>
            {' '}
            {lawData?.statusStep === 'Two Step' && (
              <StatusTwoStep status={lawData?.statusTwoStep} />
            )}
            {lawData?.statusStep === 'Three Step' && (
              <StatusThreeStep status={lawData?.statusThreeStep} />
            )}
          </div>
          <div>
            <EUTooltip title={lawData?.statusContentTitle}>
              <PortableText value={lawData?.statusContent} components={EUtooltipComponents} />
            </EUTooltip>
          </div>
        </div>
      </div>
      {/* Ovewrview cards and stats */}
      <div className='bg-grey-150 py-10'>
        <div className='global-margin'>
          <h2 className='text-green-800 p-6xl-semibold mb-6'>Title 1</h2>
          <div className='h-32'>some cards and stats here</div>
          <h2 className='text-green-800 p-6xl-semibold mb-6'>Title 2</h2>
          <div className='h-32'>some cards and stats here</div>
        </div>
      </div>

      {/* Links */}
      <div className='py-10'>
        <div className='global-margin grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          <div className='flex flex-col'>
            <h3 className='text-green-800 p-4xl-semibold'>Relevante CircuLaw thema&apos;s</h3>
            <ul>
              {lawData?.linkCol1?.map((link, id) => (
                <li key={id} className='p-base text-green-800 my-3'>
                  <Link href={link?.link}>{link?.linkText}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className='text-green-800 p-4xl-semibold'>
              Verwante CircuLaw-instrumenten <LinkIcon />
            </h3>
            <ul>
              {lawData?.linkCol2?.map((link, id) => (
                <li key={id} className='p-base text-green-800 my-3'>
                  <Link href={link?.link} target='_blank'>
                    {link?.linkText}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className='text-green-800 p-4xl-semibold'>
              Relevante Europese wetgeving <LinkIcon />
            </h3>
            <ul>
              {lawData?.linkCol3?.map((link, id) => (
                <li key={id} className='p-base text-green-800 my-3'>
                  <Link href={link?.link} target='_blank'>
                    {link?.linkText}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

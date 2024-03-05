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
import Highlights from './highlights';

export default function SummaryComponent({ lawData }) {
  return (
    <div className=''>
      {/* Intro section */}
      <div className='global-margin'>
        <div className='grid grid-cols-1 sm:grid-cols-2 py-10 gap-x-32 items-center justify-center'>
          <div className='p-base order-last sm:order-first'>{lawData?.summaryIntroText}</div>
          <div className='mb-6 sm:mb-0 flex items-center justify-center max-h-80'>
            {lawData?.introImage && (
              <Image
                src={urlFor(lawData?.introImage)?.url() ?? ''}
                alt={lawData?.imageAlt}
                width={525}
                height={307}
                className='rounded-cl'
              />
            )}
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
              <EUGenericTooltip title='Generieke status:'>
                <div>
                  <h3 className='mb-4 p-2xl-semibold'>Stap 1: In onderhandeling</h3>
                  <p className='p-base mb-2'>
                    De Europese Commissie komt met een nieuw initiatief voor een nieuwe wet of een
                    wijziging van een bestaande wet. Burgers, bedrijven en organisaties kunnen op
                    het wetsvoorstel reageren door vragenlijsten te beantwoorden (openbare
                    raadplegingen).
                  </p>
                  <p className='p-base mb-2'>
                    Vervolgens wordt het wetsvoorstel aan het Europees Parlement en de Raad van de
                    Europese Unie voorgelegd. Het Parlement en de Raad kunnen wijzigingen
                    (amendementen) voorstellen. Op deze manier wordt over de definitieve tekst van
                    een wet onderhandeld.
                  </p>
                  <h3 className='my-4 p-2xl-semibold'>Stap 2: Aangenomen</h3>
                  <p className='p-base mb-2'>
                    De Europese Commissie, Europees Parlement en de Raad van de Europese Unie
                    bereiken overeenstemming over de definitieve tekst van het wetsvoorstel.
                    Vervolgens wordt het voorstel in stemming gebracht bij het Europees Parlement en
                    aangenomen. De Commissie kan ook besluiten om het wetsvoorstel in te trekken,
                    wanneer zij van mening is dat het voorstel te ingrijpend is gewijzigd naar
                    aanleiding van alle amendementen.
                  </p>
                  <h3 className='my-4 p-2xl-semibold'>Stap 3: Implementatie</h3>
                  <p className='p-base mb-2'>
                    Als een nieuwe of gewijzigde wet een richtlijn is, dan moet de lidstaat de
                    richtlijn implementeren in nationale wet- en regelgeving. Dit kan door nieuwe
                    nationale wet- en regelgeving aan te nemen of bestaande wetten en/of regelingen
                    aan te passen.
                  </p>
                  <p className='p-base'>
                    Verordeningen hebben directe werking in nationale wetgeving. Deze hoeven
                    daardoor niet in de nationale wet- en regelgeving geïmplementeerd te worden.
                  </p>
                </div>
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
        {lawData?.title === 'CSRD' && <Highlights law='CSRD' />}
        {lawData?.title === 'Energy Efficiency Directive' && (
          <Highlights law='Energy Efficiency Directive' />
        )}
        {lawData?.title === 'Single-Use Plastics Directive' && (
          <Highlights law='Single-Use Plastics Directive' />
        )}
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

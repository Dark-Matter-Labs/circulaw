import LinkIcon from '../link-icon';
import EUTooltip from '../tooltips/eu-tooltip';
import Highlights from './highlights';
import { reducedPortableTextComponents } from '@/lib/portable-text/pt-components';
import { urlFor } from '@/lib/sanity';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import Link from 'next/link';

export default function SummaryComponent({ lawData }) {
  return (
    <div className=''>
      {/* Intro section */}
      <div className='global-margin'>
        <div className='flex flex-col-reverse sm:flex-row gap-y-12 sm:gap-y-0 gap-x-32 my-12 sm:my-20 items-center justify-start'>
          <div className='p-base order-last sm:order-first max-w-[540px]'>
            {lawData?.summaryIntroText}
          </div>
          <div className='flex flex-col items-center justify-center gap-y-8'>
            <div className='mb-6 sm:mb-0 sm:flex items-center justify-center max-h-80 hidden'>
              {lawData?.introImage && (
                <Image
                  src={urlFor(lawData?.introImage).url() ?? ''}
                  alt={lawData?.imageAlt ?? ''}
                  width={300}
                  height={176}
                  className='rounded-cl'
                />
              )}
            </div>
            <EUTooltip title='Status' lawData={lawData}>
              <div>
                <PortableText
                  value={lawData?.statusContent}
                  components={reducedPortableTextComponents}
                />
                <div className='heading-2xl-semibold mb-8 mt-6'>Welke statussen zijn er?</div>
                <div>
                  <h3 className='mb-4 heading-xl-semibold'>1: In onderhandeling</h3>
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
                  <h3 className='my-4 heading-xl-semibold'>2: Aangenomen</h3>
                  <p className='p-base mb-2'>
                    De Europese Commissie, Europees Parlement en de Raad van de Europese Unie
                    bereiken overeenstemming over de definitieve tekst van het wetsvoorstel.
                    Vervolgens wordt het voorstel in stemming gebracht bij het Europees Parlement en
                    aangenomen. De Commissie kan ook besluiten om het wetsvoorstel in te trekken,
                    wanneer zij van mening is dat het voorstel te ingrijpend is gewijzigd naar
                    aanleiding van alle amendementen.
                  </p>
                  <h3 className='my-4 heading-xl-semibold'>3: Implementatie</h3>
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
              </div>
            </EUTooltip>
          </div>
        </div>
      </div>
      {/* Ovewrview cards and stats */}
      <div className='bg-green-50 py-10'>
        {lawData?.title === 'Corporate Sustainability Reporting Directive (CSRD)' && (
          <Highlights law='CSRD' />
        )}
        {lawData?.title === 'Energy Efficiency Directive (EED)' && (
          <Highlights law='Energy Efficiency Directive' />
        )}
        {lawData?.title === 'Single-Use Plastics Directive (SUP)' && (
          <Highlights law='Single-Use Plastics Directive (SUP)' />
        )}
        {lawData?.title === 'Construction Products Regulation (CPR)' && (
          <Highlights law='Construction Products Regulation (CPR)' />
        )}
        {lawData?.title === 'Ecodesign for Sustainable Products Regulation (ESPR)' && (
          <Highlights law='Ecodesign for Sustainable Products Regulation (ESPR)' />
        )}
        {lawData.title === 'EU Taxonomie' && <Highlights law='EU Taxonomie' />}
        {lawData.title === 'Corporate Sustainability Due Diligence Directive (CSDDD)' && (
          <Highlights law='Corporate Sustainability Due Diligence Directive (CSDDD)' />
        )}
         {lawData.title === 'Waste Framework Directive (WFD)' && (
          <Highlights law='Waste Framework Directive (WFD)' />
        )}
      </div>
      {/* Links */}
      <div className='py-10'>
        <div className='global-margin grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {lawData?.linkCol1 && (
            <div className='flex flex-col'>
              <h3 className='text-green-800 heading-2xl-semibold'>
                Bekijk ook op{' '}
                <Link href='/' className='underline link-interaction'>
                  Circulaw.nl
                </Link>
              </h3>
              <ul>
                {lawData?.linkCol1?.map((link, id) => (
                  <li key={id} className='p-base text-green-800 my-3'>
                    <Link href={link?.link} className='link-interaction'>
                      {link?.linkText}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {lawData?.linkCol2 && (
            <div>
              <h3 className='text-green-800 heading-2xl-semibold'>
                Relevante NL wetgeving <LinkIcon />
              </h3>
              <ul>
                {lawData?.linkCol2?.map((link, id) => (
                  <li key={id} className='p-base text-green-800 my-3'>
                    <Link href={link?.link} target='_blank' className='link-interaction'>
                      {link?.linkText}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {lawData?.linkCol3 && (
            <div>
              <h3 className='text-green-800 heading-2xl-semibold'>
                Relevante EU-wetgeving <LinkIcon />
              </h3>
              <ul>
                {lawData?.linkCol3?.map((link, id) => (
                  <li key={id} className='p-base text-green-800 my-3'>
                    <Link href={link?.link} target='_blank' className='link-interaction'>
                      {link?.linkText}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

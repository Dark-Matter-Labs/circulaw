import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import NewButton from '@/components/new-button';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { IconChevronDown, IconProgressBolt } from '@tabler/icons-react';

export default function AreaPlanning({ params }) {
  if (params.productChain === 'bouw') {
    return (
      <>
        <div className='block h-[260px] w-full bg-green-500 sm:h-[360px]'>
          <div className='global-margin z-5 relative flex h-[260px] flex-col justify-between sm:h-[360px]'>
            <div className='pt-8'>
              <Link
                className='group inline-flex flex-row items-center justify-center rounded-clSm bg-gray-100 py-1.5 pl-2 pr-3 text-green-600'
                href='/'
              >
                <span className='p-2xs-bold align-middle group-hover:text-green-300 group-focus:text-green-200 group-focus:ring-2 group-focus:ring-white group-active:text-green-800'>
                  {' '}
                  Home <span className='ml-2'>{'>'}</span>
                </span>
              </Link>
            </div>
            <div className='max-w-5xl pb-8'>
              <div className=''>
                <h1 className='heading-3xl-semibold sm:heading-5xl-semibold inline-block text-gray-100'>
                  Stimuleer houtbouw in circulaire gebiedsontwikkeling
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className='relative my-5 w-full items-center md:hidden'>
          <Image
            src='/area-planning-mob.png'
            alt='Visual waarin de fases van de gebiedsontwikkeling te zien zijn'
            width={900}
            height={900 * (380 / 1160)}
            sizes='
                              (max-width: 768px) 95vw,
                              (max-width: 1200px) 60vw,
                              40vw'
            className='w-full'
          />
        </div>
        <div className='global-margin p-base mb-10 md:mb-20'>
          <div className='relative hidden w-full items-center pt-10 sm:my-8 md:my-16 md:flex'>
            <Image
              src='/area-planning-image.png'
              alt='Visual waarin de fases van de gebiedsontwikkeling te zien zijn'
              width={900}
              height={900 * (1680 / 4640)}
              quality={100}
              priority
              sizes='
                              (max-width: 768px) 95vw,
                              (max-width: 1200px) 100vw,
                              100vw'
              className='w-full'
            />
          </div>
          <div className='relative w-full md:flex md:flex-row-reverse md:justify-between'>
            <div className='sticky top-32 ml-8 hidden max-h-[600px] max-w-[350px] md:block'>
              <div className='flex h-full w-full flex-col rounded-cl bg-green-50 p-4 shadow-md'>
                <Image
                  src='/forum.png'
                  width={406}
                  height={172}
                  alt='comment image'
                  className='rounded-cl'
                />
                <div className='flex h-full w-full flex-col justify-between px-4 pt-4'>
                  <div className='heading-2xl-semibold mb-2'>Hoe kunnen wij je helpen?</div>
                  <div className='p-base mb-4'>
                    Benieuwd hoe jouw gemeente duurzaamheid en circulariteit kan bevorderen binnen
                    het circulaire gebiedsontwikkelingsproces? CircuLaw biedt ondersteuning op maat:
                  </div>
                  <NewButton variant='primaryDark' icon='arrowDown' scrollTo='contact'>
                    Lees meer
                  </NewButton>
                </div>
              </div>
            </div>
            <div className='flex flex-col'>
              <h2 className='heading-xl-semibold sm:heading-2xl-semibold mb-6 md:mb-10'>
                Het gebiedsontwikkelingsproces
              </h2>
              <div className='flex max-w-[700px] flex-col gap-y-4'>
                <p>
                  Een gebiedsontwikkeling heeft als doel de{' '}
                  <span className='p-base-semibold'>
                    leefbaarheid, economische waarde en duurzaamheid
                  </span>{' '}
                  van een gebied te verbeteren. Gebiedsontwikkeling bestaat uit een aantal fasen:{' '}
                  <span className='p-base-semibold'>
                    Verkenning, Verdieping, Voorbereiding, Realisatie, Exploitatie en Transformatie.
                  </span>{' '}
                  In al die fasen kun je specifieke juridische instrumenten toepassen.
                </p>
                <p>
                  In de visie van CircuLaw moet je{' '}
                  <span className='p-base-semibold'>zo vroeg mogelijk</span> in het proces actie
                  ondernemen. Zo weet je zeker dat jouw ambities goed verankerd worden in het hele
                  proces. Daarom voegen we een{' '}
                  <span className='p-base-semibold'>&apos;Voorfase&apos;</span> aan het proces toe.
                  In deze voorfase onderzoek je welke informatiestukken je moet lezen, welke
                  collega&apos;s je moet benaderen en bij welke belangrijke momenten van het
                  gebiedsontwikkelingsproces jij moet zijn aangehaakt.
                </p>
              </div>
              <div className='my-5 md:my-10'>
                <Disclosure className='max-w-[700px]' as='div'>
                  <>
                    <DisclosureButton className='group flex w-full items-center justify-between rounded-clSm bg-gray-200 px-6 py-6 text-gray-800 sm:px-10'>
                      <div className='flex flex-col'>
                        <h3 className='heading-xl-semibold sm:heading-2xl-semibold text-left'>
                          Alle fasen kort uitgelegd
                        </h3>
                      </div>
                      <IconChevronDown className='h-6 w-6 text-gray-800 group-data-[open]:rotate-180' />
                    </DisclosureButton>
                    <DisclosurePanel className='-mt-6 rounded-b-clSm bg-gray-200 px-6 pb-4 sm:px-10'>
                      <div className='flex flex-col gap-8 py-6'>
                        <ul className='ml-6 flex list-outside list-disc flex-col gap-y-4'>
                          <li>
                            <span className='p-base-semibold'>Verkenning: </span>in de
                            verkenningsfase wordt onderzocht of de gebiedsontwikkeling gewenst is,
                            welke partijen betrokken kunnen en willen worden en of er (betere)
                            alternatieven zijn. Aan het eind van de verkenningsfase moet minimaal
                            een plan zijn opgesteld met de projectdoelen en rolverdeling.
                          </li>
                          <li>
                            <span className='p-base-semibold'>Haalbaarheid: </span>in de
                            haalbaarheidsfase wordt er &apos;gerekend en getekend&apos;. Dit
                            betekent dat een of meerdere ontwerpen worden ontwikkeld en er wordt
                            gerekend aan de businesscase voor de gebiedsontwikkeling. Ook moeten de
                            beleidsmatige, planologische en andere publiekrechtelijke
                            randvoorwaarden worden georganiseerd.
                          </li>
                          <li>
                            <span className='p-base-semibold'>Voorbereiding: </span>
                            In de voorbereidingsfase worden de laatste zaken uitgewerkt voor de
                            realisatiefase. Denk hierbij aan het uitwerken van het definitieve
                            ontwerp, het verkrijgen van de benodigde omgevingsvergunningen en het
                            sluiten van de benodigde overeenkomsten.
                          </li>
                          <li>
                            <span className='p-base-semibold'>Realisatie: </span>in de
                            realisatiefase wordt de ontwikkellocatie bouwrijp gemaakt en wordt
                            gestart met de uitvoering.
                          </li>
                          <li>
                            <span className='p-base-semibold'>Exploitatie: </span>
                            in de exploitatiefase worden de gebouwen opgeleverd en wordt het beheer
                            van het openbaar terrein overgedragen.
                          </li>
                          <li>
                            <span className='p-base-semibold'>Transformatie: </span>
                            bij start van het gebiedsontwikkelingsproces en in de voorfase moet ook
                            al rekening worden gehouden met de uiteindelijke transformatie van het
                            gebied in de toekomst. Dit transformeren houdt het veranderen van het
                            oorspronkelijke gebruik van het gebied in naar een andere en nieuwe
                            gebruiksfunctie. Hierdoor start het gebiedsontwikkelingsproces opnieuw.
                          </li>
                        </ul>
                      </div>
                    </DisclosurePanel>
                  </>
                </Disclosure>
              </div>
              <p className='p-base mb-10 max-w-[700px] md:mb-20'>
                In het hele proces van gebiedsontwikkeling is het zaak dat je het juiste juridische
                instrument op het juiste moment inzet, en zo circulariteit goed meeneemt. Ook
                houtbouw kan op deze manier een stevige plek krijgen binnen gebiedsontwikkeling.
              </p>
              <div className='mb-10 flex h-full w-full flex-col rounded-cl bg-green-50 p-4 shadow-md md:hidden'>
                <Image
                  src='/forum.png'
                  width={406}
                  height={172}
                  alt='comment image'
                  className='rounded-cl'
                />
                <div className='flex h-full w-full flex-col justify-between px-4 pt-4'>
                  <div className='heading-2xl-semibold mb-2'>Hoe kunnen wij je helpen?</div>
                  <div className='p-base mb-4'>
                    Benieuwd hoe jouw gemeente duurzaamheid en circulariteit kan bevorderen binnen
                    het circulaire gebiedsontwikkelingsproces? CircuLaw biedt ondersteuning op maat:
                  </div>
                  <NewButton variant='primaryDark' icon='arrowDown' scrollTo='contact'>
                    Lees meer
                  </NewButton>
                </div>
              </div>
              <div className='mb-10 max-w-[700px]'>
                <h3 className='heading-xl-semibold sm:heading-2xl-semibold mb-6'>
                  Juridische instrumenten voor houtbouw in circulaire gebiedsontwikkeling
                </h3>
                <p className='mb-6 mr-6'>
                  Gedurende het proces van gebiedsontwikkeling kun je verschillende juridische
                  instrumenten inzetten. Specifiek voor houtbouw heeft CircuLaw{' '}
                  <span className='p-base-semibold'>35 juridische instrumenten</span> in kaart
                  gebracht. Die instrumenten winnen aan kracht als je al in de voorfase de juiste
                  maatregelen treft. Die voorfase bevat een aantal{' '}
                  <span className='p-base-semibold'>gemeentebrede</span> instrumenten.
                </p>
                <p className='mr-6'>
                  In de afbeelding zie je de juridische instrumenten die je per fase van
                  gebiedsontwikkeling kunt inzetten, om houtbouw te bevorderen.
                </p>
              </div>
              <div className='mb-10 max-w-[700px] rounded-cl bg-green-50 p-4 md:mb-20 md:block md:p-10'>
                <div className='w-full'>
                  {/* Using an arbitrary aspect ratio for A4: 210 / 297 */}
                  <div className='hidden aspect-[1788/1670] md:block'>
                    <iframe
                      src='/area-planning.pdf#zoom=44'
                      title='PDF Viewer'
                      className='h-full w-full border-0'
                    />
                  </div>
                  <Image
                    src='/framework-thumbnail.png'
                    width={406}
                    height={172}
                    alt='comment image'
                    className='rounded-cl md:hidden'
                  />
                  <div className='flex w-full items-center justify-center pt-4 md:pt-10'>
                    <NewButton
                      variant='primaryDark'
                      icon='download'
                      href='/area-planning.pdf'
                      newTab={true}
                    >
                      Download framework
                    </NewButton>
                  </div>
                </div>
              </div>
              <div className='mb-10 flex max-w-[750px] flex-col sm:mb-20'>
                <h3 className='heading-xl-semibold sm:heading-2xl-semibold mb-6'>
                  Voorbeelden uit de praktijk
                </h3>
                <p className='max-w-[700px]'>
                  Met onze aanpak als leidraad kun je het proces van gebiedsontwikkeling echt naar
                  je hand zetten. Daarbij heb je natuurlijk{' '}
                  <span className='p-base-semibold'>alle ruimte</span> om de instrumenten naar{' '}
                  <span className='p-base-semibold'>eigen inzicht</span> in te richten. Onder meer
                  de <span className='p-base-semibold'>gemeente Amsterdam</span> ging je al voor!
                  <span className='p-base-semibold'>Amsterdam</span> gingen je al voor!
                </p>
                <div className='mt-10 grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-x-8'>
                  <div>
                    <div className='group relative flex w-full flex-col overflow-hidden rounded-cl shadow-lg'>
                      <div className='max-h-[210px] w-full rounded-cl object-cover'>
                        <Image
                          className='fill rounded-t-cl'
                          src='/download-thumbnail.png'
                          alt='image of graph'
                          width={1440}
                          height={720}
                          priority={true}
                        />
                      </div>
                      <div className='group flex h-full w-full flex-col bg-green-50 p-6'>
                        <div className='flex flex-grow items-center justify-center'>
                          <NewButton
                            variant='primaryDark'
                            icon='download'
                            href='/Plaberum-framework-gebasseerd-op-Amsterdam.pdf'
                            newTab={true}
                          >
                            Download voorbeeld Amsterdam
                          </NewButton>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='max-w-[700px]' id='contact'>
                <h3 className='heading-xl-semibold sm:heading-2xl-semibold mb-6'>
                  We helpen je graag!
                </h3>
                <p className='mb-6'>
                  Benieuwd hoe jouw gemeente duurzaamheid en circulariteit kan bevorderen binnen het
                  gebiedsontwikkelingsproces? CircuLaw biedt{' '}
                  <span className='p-base-semibold'>ondersteuning op maat:</span>
                </p>
                <ul className='ml-6 flex list-outside list-disc flex-col'>
                  <li>
                    <span className='p-base-semibold'>Workshops </span>waarin je inzicht krijgt in
                    de juridische instrumenten rond gebiedsontwikkeling, en hoe je die het beste
                    kunt inzetten.
                  </li>
                  <li>
                    <span className='p-base-semibold'>Implementatietrajecten </span>voor een
                    succesvolle toepassing van juridische instrumenten.
                  </li>
                  <li>
                    <span className='p-base-semibold'>Visuele overzichten </span>
                    van je juridische mogelijkheden.
                  </li>
                </ul>
              </div>
              <div className='mt-6'>
                <div className='flex max-w-[445px] flex-col gap-y-6 rounded-cl bg-green-50 p-4'>
                  <div>
                    <IconProgressBolt className='mb-2 size-8 text-green-600' />
                    <div className='heading-xl'>
                      Meer weten? Benieuwd wat CircuLaw voor je kan betekenen? We helpen je graag!
                    </div>
                  </div>
                  <NewButton variant='primaryDark' icon='arrowRight' href='/contact'>
                    Neem contact op
                  </NewButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else return notFound();
}

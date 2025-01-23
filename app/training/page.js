import CustomButton from '@/components/custom-button';
import { IconArrowRight, IconBooks } from '@tabler/icons-react';
import Link from 'next/link';
import Image from 'next/image';

export default function LearningLandingPage() {
  return (
    <div className=''>
      <div className='bg-green-600 h-56 sm:h-72 my-3'>
        <div className='flex flex-col justify-between items-start h-full global-margin'>
          <div className='bg-gray-100 h-6 mt-6 flex items-center rounded-clSm'>
            <Link
              href='/'
              className='p-2xs-bold flex pl-2 flex-row items-center text-green-600 hover:text-green-300 active:text-green-800'
            >
              Home
            </Link>
            <span className='p-2xs-bold text-green-600 px-2'>{'>'}</span>
          </div>
          <div className='mb-10'>
            <h1 className='text-gray-100 heading-2xl-semibold sm:heading-5xl-semibold max-w-4xl'>
              E-learning: circulaire houtbouw onder de Omgevingswet
            </h1>
          </div>
        </div>
      </div>
      <div className='global-margin flex relative my-16'>
        <div className='max-w-[700px]'>
          <p className='p-base'>
            Houtbouw past heel goed in een circulaire economie: een manier van bouwen die is
            gebaseerd op{' '}
            <span className='p-base-semibold'>natuurlijke, hernieuwbare materialen</span> die zich
            uitstekend lenen voor
            <span className='p-base-semibold'>hergebruik en recycling</span>. Maar hoe veranker je
            houtbouw in het beleid van jouw overheid? Dat leer je in onze e-learning:{' '}
            <span className='p-base-semibold'>circulaire houtbouw onder de Omgevingswet</span>.
          </p>
          <Link href='/training/aanmelden' className='block md:hidden'>
            <div className='bg-green-50 mt-6 w-full flex flex-col p-4 text-green-600'>
              <div className='mb-2'>
                <IconBooks className='size-8' />
              </div>
              <div className='heading-2xl-semibold mb-6'>
                Schrijf je nu in voor de e-learning circulaire houtbouw
              </div>
              <div>
                <CustomButton color='lightGreenBackground'>
                  Meld je nu aan
                  <IconArrowRight className='ml-0.5' />
                </CustomButton>
              </div>
            </div>
          </Link>
          <h2 className='heading-2xl-semibold sm:heading-3xl-semibold my-10'>
            Wat kun je verwachten?
          </h2>
          <p className='p-base mb-6'>Krijg inzicht in de werking van de Omgevingswet</p>
          <div className='relative w-full mb-6 sm:mb-0 h-96'>
            <Image src='/image.png' alt='planregels image' fill className='z-10 object-cover' />
          </div>
          <ul className='p-base list-disc	list-outside ml-6 my-6'>
            <li>
              Lees over de verschillende instrumenten van de Omgevingswet, en hun plek binnen de
              beleidscyclus
            </li>
            <li>
              Leer hoe je optimaal gebruik kunt maken van de instrumenten, en zo houtbouw kunt
              stimuleren
            </li>
            <li>
              Doorgrond het speelveld, jouw rol daarbinnen, en hoe je zo effectief mogelijk kunt
              opereren
            </li>
          </ul>
          <div className='relative w-full mb-6 sm:mb-0 h-96'>
            <Image src='/image.png' alt='planregels image' fill className='z-10 object-cover' />
          </div>
          <p className='p-base my-6'>
            <span className='p-base-semibold'></span>
            Je zult zien: met de <span className='p-base-semibold'>juiste kennis</span>, een flinke
            dosis <span className='p-base-semibold'>lef en ambitie</span> en de{' '}
            <span className='p-base-semibold'>wil om samen te werken</span>, kun je echt{' '}
            <span className='p-base-semibold'>werk maken</span> van houtbouw.
          </p>
          <Link
            href='/training/aanmelden'
            className='link-base link-interaction flex flex-row items-center font-semibold'
          >
            Schrijf je nu in <IconArrowRight className='ml-1 size-4' />
          </Link>
          <div>
            <h2 className='heading-3xl-semibold my-10'>Ons antwoord op jouw vragen/FAQ</h2>
            <div className='mb-6'>
              <h3 className='heading-2xl-semibold mb-4'>Hoelang duurt de e-learning?</h3>
              <p className='p-base'>Reken op 1-1,5 uur.</p>
            </div>
            <div className='mb-6'>
              <h3 className='heading-2xl-semibold mb-4'>Komt er een vervolg op de e-learning?</h3>
              <p className='p-base'>
                Jazeker! Want er valt nog zoveel meer te vertellen en te bespreken over houtbouw… Op
                4 maart organiseren we een <span className='p-base-semibold'>live-sessie</span>,
                voor geselecteerde deelnemers. Heb je de e-learning voltooid? Meld je dan aan.
                Misschien behoor jij dan wel tot de genodigden.
              </p>
            </div>
            <div className='mb-6'>
              <h3 className='heading-2xl-semibold mb-4'>
                Voor wie is de e-learning Houtbouw bedoeld?
              </h3>
              <p className='p-base'>
                De e-learning Houtbouw is bedoeld voor beleidsmedewerkers, juristen, beleidsmakers
                en studenten die zich bezighouden met circulair beleid en circulaire regelgeving.
              </p>
            </div>
            <div className='mb-6'>
              <h3 className='heading-2xl-semibold mb-4'>Ik heb nog een andere vraag…</h3>
              <p className='p-base'>
                We helpen je graag! Neem <Link href='/contact'>hier</Link> contact met ons op.
              </p>
            </div>
          </div>
        </div>
        <Link href='/training/aanmelden' className='hidden md:block'>
          <div className='sticky top-32 bg-green-50 ml-16 w-80 flex flex-col p-4 text-green-600'>
            <div className='mb-2'>
              <IconBooks className='size-8' />
            </div>
            <div className='heading-xl-semibold mb-6'>
              Schrijf je nu in voor de e-learning circulaire houtbouw
            </div>
            <div>
              <CustomButton color='lightGreenBackground'>
                Meld je nu aan
                <IconArrowRight className='ml-0.5' />
              </CustomButton>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

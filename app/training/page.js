import Image from 'next/image';
import Link from 'next/link';

import CustomButton from '@/components/custom-button';
import { IconArrowRight, IconBooks } from '@tabler/icons-react';

export default function LearningLandingPage() {
  return (
    <div className=''>
      <div className='my-3 h-56 bg-green-600 sm:h-72'>
        <div className='global-margin flex h-full flex-col items-start justify-between'>
          <div className='mt-6 flex h-6 items-center rounded-clSm bg-gray-100'>
            <Link
              href='/'
              className='p-2xs-bold flex flex-row items-center pl-2 text-green-600 hover:text-green-300 active:text-green-800'
            >
              Home
            </Link>
            <span className='p-2xs-bold px-2 text-green-600'>{'>'}</span>
          </div>
          <div className='mb-10'>
            <h1 className='heading-2xl-semibold sm:heading-5xl-semibold max-w-4xl text-gray-100'>
              E-learning: circulaire houtbouw onder de Omgevingswet
            </h1>
          </div>
        </div>
      </div>
      <div className='global-margin relative my-16 flex'>
        <div className='max-w-[700px]'>
          <p className='p-base'>
            Houtbouw past heel goed in een circulaire economie: een manier van bouwen die is
            gebaseerd op{' '}
            <span className='p-base-semibold'>natuurlijke, hernieuwbare materialen</span> die zich
            uitstekend lenen voor
            <span className='p-base-semibold'> hergebruik en recycling</span>. Maar hoe veranker je
            houtbouw in het beleid van jouw overheid? Dat leer je in onze e-learning:{' '}
            <span className='p-base-semibold'>circulaire houtbouw onder de Omgevingswet</span>.
          </p>
          <Link
            href='https://training.circulaw.nl/register/a6d26a79-e6b1-42d6-9499-1dbe196fc693'
            target='_blank'
            className='block md:hidden'
          >
            <div className='mt-6 flex w-full flex-col bg-green-50 p-4 text-green-600'>
              <div className='mb-2'>
                <IconBooks className='size-8' />
              </div>
              <div className='heading-2xl-semibold mb-6'>
                Meld je nu aan voor de e-learning circulaire houtbouw
              </div>
              <div>
                <CustomButton color='lightGreenBackground'>
                  Meld je nu aan
                  <IconArrowRight className='ml-0.5' />
                </CustomButton>
              </div>
            </div>
          </Link>
          <h2 className='heading-2xl-semibold sm:heading-3xl-semibold mb-4 mt-10'>
            Wat kun je verwachten?
          </h2>
          <ul className='p-base mb-6 ml-6 list-outside list-disc'>
            <li>Krijg inzicht in de werking van de Omgevingswet</li>
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
          <div className='relative mb-6 h-96 w-full sm:mb-0'>
            <Image
              src='/e-learning.png'
              alt='planregels image'
              fill
              className='z-10 object-cover'
            />
          </div>
          <p className='p-base my-6'>
            <span className='p-base-semibold'></span>
            Je zult zien: met de <span className='p-base-semibold'>juiste kennis</span>, een flinke
            dosis <span className='p-base-semibold'>lef en ambitie</span> en de{' '}
            <span className='p-base-semibold'>wil om samen te werken</span>, kun je echt{' '}
            <span className='p-base-semibold'>werk maken</span> van houtbouw.
          </p>
          <Link
            href='https://training.circulaw.nl/register/a6d26a79-e6b1-42d6-9499-1dbe196fc693'
            target='_blank'
            className='link-base link-interaction flex flex-row items-center font-semibold'
          >
            Meld je nu aan
            <IconArrowRight className='ml-1 size-4' />
          </Link>
          <div>
            <h2 className='heading-3xl-semibold my-10'>Veelgestelde vragen</h2>
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
              <h3 className='heading-2xl-semibold mb-4'>
                Zijn er kosten aan de e-learning verbonden?
              </h3>
              <p className='p-base'>
                Nee! Deze e-learning is <span className='p-base-semibold'>helemaal gratis</span>.
              </p>
            </div>
            <div className='mb-6'>
              <h3 className='heading-2xl-semibold mb-4'>Hoelang duurt de e-learning?</h3>
              <p className='p-base'>Reken op 1-1,5 uur.</p>
            </div>

            <div className='mb-6'>
              <h3 className='heading-2xl-semibold mb-4'>Ik heb nog een andere vraag…</h3>
              <p className='p-base'>
                We helpen je graag!{' '}
                <Link className='link-base link-interaction' href='/contact'>
                  Neem contact met ons op
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
        <Link
          href='https://training.circulaw.nl/register/a6d26a79-e6b1-42d6-9499-1dbe196fc693'
          target='_blank'
          className='hidden md:block'
        >
          <div className='sticky top-32 ml-16 flex w-80 flex-col bg-green-50 p-4 text-green-600'>
            <div className='mb-2'>
              <IconBooks className='size-8' />
            </div>
            <div className='heading-xl-semibold mb-6'>
              Meld je nu aan voor de e-learning circulaire houtbouw
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

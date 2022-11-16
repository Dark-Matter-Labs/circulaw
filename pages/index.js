import Link from 'next/link';
import Image from 'next/image';
import { Fragment } from 'react';
import { Popover, Transition, Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { Link as ScrollLink } from 'react-scroll';
import ActionPanel from '../components/section-action-panel';
import Layout from '/layouts/layout';
import SectionTypes from '/components/section-types-list';
import logo from '../public/Circulaw_logotype_home.png';
import { get_waardeketens, get_over } from '../utils/nav-structure';

const waardeketens = get_waardeketens();
const over = get_over();

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Index() {
  return (
    <Layout page='home'>
      <div className='bg-greenAlpha pb-20' name='thema'>
        <div className='global-margin'>
          <h2 className='pb-6 pt-8 mobile sm:main text-green1'>Thema’s</h2>

          <SectionTypes type='home' />
          <p className='body-text-mobile sm:body-text'>
            In 2022 volgen meer thema’s binnen verschillende waardeketens. <br />
            Lees meer over{' '}
            <span className='link-mobile sm:link text-greenLink'>
              <Link href='/status-en-ambities'>
                <a>wat je nu vindt op CircuLaw</a>
              </Link>
            </span>{' '}
            of ga naar{' '}
            <span className='link-mobile sm:link text-greenLink'>
              <Link href='/hoe-het-werkt'>
                <a>Vraag & Antwoord</a>
              </Link>
            </span>
          </p>
        </div>
      </div>
      <div className='bg-white py-20'>
        <div className='global-margin'>
          <h1 className='mobile sm:main text-green1' name='waarom'>
            Over CircuLaw
          </h1>
          <div className='border-b border-grey1 pb-10'>
            <h2 className='pt-10 mobile sm:main'>Waarom CircuLaw?</h2>
            <p className='body-text-mobile sm:body-text py-5 max-w-4xl'>
              Om binnen planetaire grenzen te opereren is een circulaire economie essentieel.
              Hiervoor is meer drang en dwang nodig. CircuLaw laat juridische mogelijkheden zien die
              kunnen bijdragen aan versnelling van de circulaire transitie.
            </p>
            <span className='text-greenLink link-mobile sm:link'>
              <Link href='/waarom-circulaw'>
                <a>Lees verder →</a>
              </Link>
            </span>
          </div>
          <div className='border-b border-grey1 pb-10'>
            <h2 className='pt-10 mobile sm:main'>Wat is CircuLaw?</h2>
            <p className='body-text-mobile sm:body-text py-5 max-w-4xl'>
              CircuLaw is een service waarmee we in de eerste plaats beleidsmakers en
              transitiemanagers helpen meer en beter gebruik te maken van regelgeving om de
              circulaire economie te bevorderen.
            </p>
            <span className='text-greenLink link-mobile sm:link'>
              <Link href='/wat-is-circulaw'>
                <a>Lees verder →</a>
              </Link>
            </span>
          </div>
          <div className='border-b border-grey1 pb-10'>
            <h2 className='pt-10 mobile sm:main'>Wat vind je nu op CircuLaw?</h2>
            <p className='body-text-mobile sm:body-text py-5 max-w-4xl'>
              CircuLaw wordt stap voor stap ontwikkeld. Op dit moment bevat de website vooral
              informatie over wet-en regelgeving die voor beleidsmakers relevant is. Deze informatie
              wordt geleidelijk uitgebreid
            </p>
            <span className='text-greenLink link-mobile sm:link'>
              <Link href='/status-en-ambities'>
                <a>Lees verder →</a>
              </Link>
            </span>
          </div>
          <div className='pb-10'>
            <h2 className='pt-10 mobile sm:main'>Wie zijn betrokken bij CircuLaw?</h2>
            <p className='body-text-mobile sm:body-text py-5 max-w-4xl'>
              CircuLaw wordt ontwikkeld door Gemeente Amsterdam, Dark Matter Labs en een consortium
              van publieke partners en kennisinstituten
            </p>
            <span className='text-greenLink link-mobile sm:link'>
              <Link href='/wie-maken-circulaw'>
                <a>Lees verder om te zien wie allemaal bijdragen aan CircuLaw →</a>
              </Link>
            </span>
          </div>
        </div>
      </div>
      <ActionPanel
        title='Doe met ons mee'
        paragraph='Heb je vragen, wil je je ervaringen delen of wil je een wetsanalyse laten uitvoeren op een circulair  thema of casus?'
        buttonText='Neem contact op'
        buttonLink='/contact'
      />
    </Layout>
  );
}

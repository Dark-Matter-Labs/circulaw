import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import HoutbouwHero from '../public/houtbouw.png';
import WindmolensHero from '../public/turbine.png';
import OverigeHero from '../public/biennekort.png';

import HoutbouwDetails1 from '../public/houtbouw1.png';
import HoutbouwDetails2 from '../public/houtbouw2.png';
import HoutbouwDetails3 from '../public/houtbouw3.png';
import CustomButton from './customButton';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const types = [
  {
    id: 0,
    heroImage: HoutbouwHero,
    title: 'Houtbouw stimuleren',
    tag: '',
    description:
      'Meer bouwen met hout heeft grote invloed op het klimaat. Daarom vind je hier maatregelen om houtbouw te stimuleren en een leidraad voor de toepassing van een aantal van die maatregelen.',
    buttonText: 'Meer over houtbouw',
    href: '/houtbouw',
  },
  {
    id: 2,
    heroImage: WindmolensHero,
    title: 'Circulaire windturbines',
    tag: '',
    description:
      'Windenergie speelt een cruciale rol in onze duurzame energie-ambities. Daarom vind je hier maatregelen die de inzet van windturbines bevorderen en die sturen op ontwikkeling en inzet van windturbines die op zich zelf ook circulair zijn.',
    buttonText: 'Meer over windturbines',
    href: '/circulaire-windturbines',
  },
  {
    id: 3,
    heroImage: OverigeHero,
    title: 'Circulaire matrasketen, en…',
    tag: '',
    description:
      'Binnenkort starten we met onderzoek en wetsanalyses om circulariteit in de matrasketen te stimuleren. Zijn er thema’s waar jij graag mee aan de slag zou willen? Laat het ons weten!',
    buttonText: '',
    href: '',
  },
];

const houtbouwTypes = [
  {
    id: 0,
    heroImage: HoutbouwDetails1,
    title: 'Stimuleren van houtbouw binnen de gemeentelijke omgevingsvisie',
    description: '',
    tag: 'Omgevingswet',
    buttonText: 'Bekijk de maatregel',
    href: 'houtbouw/gemeentelijke-omgevingsvisie',
  },
  {
    id: 1,
    heroImage: HoutbouwDetails2,
    title: 'Gebruiken van sloopmelding voor het hergebruiken van hout',
    description: '',
    tag: 'Omgevingswet',
    buttonText: 'Bekijk de maatregel',
    href: 'houtbouw/sloopmelding',
  },
  {
    id: 3,
    heroImage: HoutbouwDetails3,
    title: 'Inzetten van de MPG als subselectiecriterium bij gronduitgifte',
    description: '',
    tag: 'Aanbesteding',
    buttonText: 'Bekijk de maatregel',
    href: 'houtbouw/mpg-als-subselectiecriterium-bij-gronduitgifte',
  },
];

export default function SectionTypes(props) {
  const [type, setType] = useState([]);

  useEffect(() => {
    if (props.type === 'home') {
      setType(types);
    } else if (props.type === 'houtbouw') {
      setType(houtbouwTypes);
    }
  }, [props.type]);

  return (
    <div className='pb-20'>
      <ul
        role='list'
        className='grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3 sm:gap-x-10 max-w-8xl'
      >
        {type.map((file) => (
          <li key={file.id} className='relative shadow bg-white w-full'>
            <div className='object-cover'>
              {file.href !== '' ? (
                <Link href={file.href}>
                  <a>
                    <Image src={file.heroImage} layout='responsive' alt='Picture of the case' />
                  </a>
                </Link>
              ) : (
                <Image src={file.heroImage} layout='responsive' alt='Picture of the case' />
              )}
            </div>

            <div className='group block w-full p-4 bg-white px-10'>
              <div>
                <div
                  className={classNames(props.type === 'houtbouw' ? 'h-20' : '', 'inline-block')}
                >
                  {file.href !== '' ? (
                    <Link href={file.href}>
                      <a>
                        <h3 className='mt-2 block text-black pointer-events-none pb-4'>
                          {file.title}
                        </h3>
                      </a>
                    </Link>
                  ) : (
                    <h3 className='mt-2 block text-black pointer-events-none pb-4'>{file.title}</h3>
                  )}
                  {/*added height for the description while on home to ensure all the text can be read*/}
                </div>
                <p
                  className={classNames(
                    props.type === 'home' ? 'h-[18rem]' : '',
                    'body-text-mobile sm:card-body block text-black pointer-events-none py-4 w-full',
                  )}
                >
                  {file.description}
                </p>
                {file.tag && (
                  <div className='my-8 h-16 block'>
                    <span className='p-2 rounded-md bg-grey3 font-openSans text-xs'>
                      {file.tag}
                    </span>
                  </div>
                )}
              </div>
              {/*wrapped button in div to seperate it from description */}
              <div className='group block w-full py-4 bg-white px-10 absolute inset-x-0 bottom-0'>
                {file.buttonText && (
                  <CustomButton color = 'sectionTypes'>
                    <Link href={file.href}>
                      <a>{file.buttonText} →</a>
                    </Link>
                  </CustomButton>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import HoutbouwHero from '../public/houtbouw.png';
import WindmolensHero from '../public/turbine.png';
import OverigeHero from '../public/biennekort.png';

import HoutbouwDetails1 from '../public/houtbouw1.png';
import HoutbouwDetails2 from '../public/houtbouw2.png';
import HoutbouwDetails3 from '../public/houtbouw3.png';

const types = [
  {
    heroImage: HoutbouwHero,
    title: 'Houtbouw stimuleren',
    tag: '',
    description:
      'Meer bouwen met hout heeft grote invloed op het klimaat. Daarom vind je hier maatregelen om houtbouw te stimuleren en een leidraad voor de toepassing van een aantal van die maatregelen',
    buttonText: 'Meer over houtbouw',
    href: '/houtbouw',
  },
  {
    heroImage: WindmolensHero,
    title: 'Circulaire windturbines',
    tag: '',
    description:
      'Windenergie speelt een cruciale rol in onze duurzame energie-ambities. Daarom vind je hier maatregelen die de inzet van windturbines bevorderen en die sturen op ontwikkeling en inzet van windturbines die op zich zelf ook circulair zijn.',
    buttonText: 'Meer over windturbines',
    href: '/circulaire-windturbines',
  },
  {
    heroImage: OverigeHero,
    title: 'Circulaire matrasketen, en…',
    tag: '',
    description:
      'Binnenkort starten we met onderzoek en wetsanalyses om circulariteit in de matrasketen te stimuleren. Zijn er thema’s waar jij graag mee aan de slag zou willen? Laat het ons weten!',
    buttonText: '',
    href: '#',
  },
];

const houtbouwTypes = [
  {
    heroImage: HoutbouwDetails1,
    title: '',
    description: 'Stimuleren van houtbouw binnen de gemeentelijke omgevingsvisie',
    tag: 'Omgevingswet',
    buttonText: 'Bekijk de maatregel',
    href: 'houtbouw/gemeentelijke-omgevingsvisie',
  },
  {
    heroImage: HoutbouwDetails2,
    title: '',
    description: 'Gebruiken van sloopmelding voor het hergebruiken van hout ',
    tag: 'Omgevingswet',
    buttonText: 'Bekijk de maatregel',
    href: 'houtbouw/sloopmelding',
  },
  {
    heroImage: HoutbouwDetails3,
    title: '',
    description: 'Inzetten van de MPG in subgunningscriteria voor aanbestedingen',
    tag: 'Aanbesteding',
    buttonText: 'Bekijk de maatregel',
    href: 'houtbouw/gemeentelijke-omgevingsvisie',
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
        className='grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3 sm:gap-x-10'
      >
        {type.map((file) => (
          <li
            key={file.title}
            className='relative bg-white w-full rounded-md shadow grid content-between'
          >
            <div className='object-cover pointer-events-none'>
              <Image src={file.heroImage} layout='responsive' alt='Picture of the case' />
            </div>
            <div className='group block w-full p-4 bg-white px-10'>
              <div className='inline-block'>
                <h3 className='mt-2 block text-black pointer-events-none pb-4'>{file.title}</h3>
              </div>
              <p className='body-text-mobile sm:card-body block text-black pointer-events-none py-4'>
                {file.description}
              </p>
              {file.tag && (
                <div className='my-8 '>
                  <span className='p-2 rounded-md bg-green3'>{file.tag}</span>
                </div>
              )}
              {file.buttonText && (
                <button
                  type='button'
                  className='inline-flex rounded-full items-center px-4 py-2 border border-green1 button text-green1 bg-transparent hover:bg-greenLink '
                >
                  <Link href={file.href}>
                    <a>{file.buttonText} →</a>
                  </Link>
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

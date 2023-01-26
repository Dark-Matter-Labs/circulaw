import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRightIcon } from '@heroicons/react/outline';

import HoutbouwHero from '../public/houtbouw.png';
import WindmolensHero from '../public/turbine.png';
import OverigeHero from '../public/mattress.png';

import HoutbouwDetails1 from '../public/houtbouw1.png';
import HoutbouwDetails2 from '../public/houtbouw2.png';
import HoutbouwDetails3 from '../public/houtbouw3.png';
import CustomButton from './custom-button';

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
      'Bouwen met beton heeft een negatieve impact op het klimaat. Daarom vind je hier instrumenten die de inzet van hout bij de bouw stimuleren.',
    buttonText: 'Meer over houtbouw',
    href: '/houtbouw',
  },
  {
    id: 1,
    heroImage: WindmolensHero,
    title: 'Circulaire windturbines',
    tag: '',
    description:
      'Windenergie speelt een grote rol in onze duurzame energie-ambities. Maar ook de circulariteit van deze windturbines is belangrijk. Daarom vind je hier instrumenten die de inzet van (circulaire) windturbines bevorderen.',
    buttonText: 'Meer over windturbines',
    href: '/circulaire-windturbines',
  },
  {
    id: 2,
    heroImage: OverigeHero,
    title: 'Circulaire matrasketen',
    tag: '',
    description:
      'Gemiddeld gaat een matras zo’n tien jaar mee. Er valt dus veel winst te behalen als we de hele keten vanaf matrasproductie tot aan verwerking van gedumpte matrassen circulairder maken. Daarom vind je hier instrumenten die aanzetten tot die circulaire matrasketen.',
    buttonText: 'Meer over de matrasketen',
    href: '/matrassen',
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
    <div className=''>
      <ul
        role='list'
        className='grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3 sm:gap-x-10 max-w-8xl'
      >
        {type.map((file) => (
          <li key={file.id} className='relative drop-shadow-sm bg-white w-full'>
            <div className='object-cover rounded-[10px]'>
              {file.href !== '' ? (
                <Link href={file.href}>
                  <Image
                    className='rounded-t-[10px]'
                    src={file.heroImage}
                    alt='Picture of the case'
                  />
                </Link>
              ) : (
                <Image
                  className='rounded-t-[10px]'
                  src={file.heroImage}
                  alt='Picture of the case'
                />
              )}
            </div>

            <div className='group block w-full p-4 bg-white px-10 '>
              <div>
                <div
                  className={classNames(props.type === 'houtbouw' ? 'h-20' : '', 'inline-block ')}
                >
                  {file.href !== '' ? (
                    <Link href={file.href}>
                      <h3 className='mobile sm:desktop mt-2 block text-black pointer-events-none pb-4'>
                        {file.title}
                      </h3>
                    </Link>
                  ) : (
                    <h3 className='mobile sm:desktop mt-2 block text-black pointer-events-none pb-4'>
                      {file.title}
                    </h3>
                  )}
                  {/* added height for the description while on home to ensure all the text can be read*/}
                </div>
                <p
                  className={classNames(
                    props.type === 'home' ? 'h-[18rem]' : '',
                    ' p-base block text-black pointer-events-none py-4 w-full',
                  )}
                >
                  {file.description}
                </p>
                {file.tag && (
                  <div className='md:my-8 mt-8 mb-16 h-16 block'>
                    <span className='p-2 rounded-md bg-green-800'>{file.tag}</span>
                  </div>
                )}
              </div>
              {/* wrapped button in div to seperate it from description */}
              <div className='group block w-full py-4 bg-white px-10 absolute inset-x-0 bottom-0'>
                {file.buttonText && (
                  <CustomButton color='whiteBackground'>
                    <Link href={file.href}>{file.buttonText} <ArrowRightIcon className='inline-block h-4 w-4' aria-hidden='true' /></Link>
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

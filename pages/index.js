import Link from 'next/link';
import Image from 'next/image';
import Layout from '/components/layouts/layout';
import SectionTypes from '/components/section-types-list';
import waaromImage from '../public/waarom.png';
import watImage from '../public/wat.png';
import hoeverImage from '../public/hoever.png';
import useSWR from 'swr';
import { groq } from 'next-sanity';
import client from '../lib/sanity';
import { useState, useEffect } from 'react';

export default function Index() {
  const { data } = useSWR(groq`*[_type == "aboutPage"]|order(order asc)`, (query) =>
    client.fetch(query),
  );

  const [slugs, setSlugs] = useState();
  useEffect(() => setSlugs(data?.map((page) => page.slug.current)), [data]);

  const aboutSlugs = slugs?.filter((e) => e !== 'vraag-&-antwoord');
  // const FAQslug = 'vraag-&-antwoord';
  return (
    <Layout page='home'>
      <div className='bg-black-white-200 pb-20' name='thema'>
        <div className='global-margin'>
          <h2 className='pb-6 pt-8 mobile sm:desktop text-black-white-800'>Thema’s</h2>

          <SectionTypes type='home' />
        </div>
      </div>
      <div className='bg-black-white-200 py-10'>
        <div className='global-margin'>
          <h1
            className='mobile sm:desktop text-black-white-800 border-b border-black-white-600 pb-4'
            name='waarom'
          >
            Over CircuLaw
          </h1>
          <div className='grid grid-cols-1 lg:grid-cols-2 border-b border-black-white-600 py-10'>
            <div>
              <Image src={watImage} width={556} alt='image for wat circulaw' />
            </div>
            <div>
              <h2 className='mobile sm:desktop'>Wat is CircuLaw?</h2>
              <p className=' p-lg py-5 max-w-4xl'>
                CircuLaw is een service waarmee we in de eerste plaats beleidsmakers en
                transitiemanagers helpen meer en beter gebruik te maken van regelgeving om de
                circulaire economie te bevorderen. Maar CircuLaw is ambitieus. Door stap voor stap
                uit te breiden willen we uiteindelijk ook strategen, toezichthouders, juristen en
                circulaire ondernemers bedienen.
              </p>
              <span className='text-green-500  link-lg'>
                <Link href={`/about/${encodeURIComponent(aboutSlugs?.[0])}`}>Meer lezen →</Link>
              </span>
            </div>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 border-b border-black-white-600 py-10'>
            <div>
              <Image src={waaromImage} width={556} alt='image for wararom circulaw' />
            </div>
            <div>
              <h2 className='mobile sm:desktop'>Waarom CircuLaw?</h2>
              <p className=' p-lg py-5 max-w-4xl'>
                Voor het tegengaan van klimaatverandering, het verminderen van vervuiling, het
                behoud van biodiversiteit en de beschikbaarheid van grondstoffen is een circulaire
                economie essentieel. In Nederland hebben we hierin nog een lange weg te gaan. De
                wet-en regelgeving die hierbij kan helpen is complex, ontoegankelijk, moeilijk
                vindbaar, onbekend. Gevolg: er worden oplossingen gezocht die vaak te vrijblijvend
                zijn. CircuLaw laat daarom zien waar en hoe regelgeving mogelijkheden biedt om
                circulaire doelen te halen en zo bij te dragen aan een versnelling van de circulaire
                transitie.
              </p>
              <span className='text-green-500  link-lg'>
                <Link href={`/about/${encodeURIComponent(aboutSlugs?.[1])}`}>Meer lezen →</Link>
              </span>
            </div>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 border-b border-black-white-600 py-10'>
            <div>
              <Image src={hoeverImage} width={556} alt='image for hoever' />
            </div>
            <div>
              <h2 className='mobile sm:desktop'>Hoever zijn we?</h2>
              <ul className=' p-lg py-5 max-w-4xl list-disc pl-6'>
                <li>
                  Een overzicht van wet- en regelgeving voor beleidsmakers die aan de slag willen
                  met maatregelen voor de thema’s houtbouw en circulaire windmolens
                </li>
                <li>Een leidraad voor 3 maatregelen die houtbouw stimuleren</li>
                <li>
                  Goed inzicht in de samenhang tussen bevoegdheidsniveaus binnen regelgeving rond
                  circulaire houtbouw en circulaire windmolens
                </li>
              </ul>
              <span className='text-green-500  link-lg'>
                <Link href={`/about/${encodeURIComponent(aboutSlugs?.[2])}`}>
                  Meer lezen over de volgende stappen →
                </Link>
              </span>
            </div>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 py-10'>
            <div>
              <Image src={waaromImage} width={556} alt='image for wararom circulaw' />
            </div>
            <div>
              <h2 className='mobile sm:desktop'>Wie maken CircuLaw?</h2>
              <p className=' p-lg py-5 max-w-4xl'>
                Gemeente Amsterdam, Dark Matter Laboratories, EIT Climate KIC, de Provincies
                Noord-Holland en Flevoland, Rijksdienst voor Ondernemend Nederland (RVO), het MRA
                (Metropoolregio Amsterdam) Kernteam Houtbouw, Belastingdienst, TU Delft, Erasmus
                School of LAW, de VU, Wageningen Universiteit ( WUR Law group), Stichting Koninklijk
                Nederlands Normalisatie Instituut (NEN).
              </p>
              <span className='text-green-500  link-lg'>
                <Link href={`/about/${encodeURIComponent(aboutSlugs?.[3])}`}>
                  Meer over de makers van CircuLaw →
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

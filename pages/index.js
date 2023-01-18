import Link from 'next/link';
import Image from 'next/image';
import Layout from '/components/layouts/layout';
import SectionTypes from '/components/section-types-list';
import waaromImage from '../public/waarom.png';
import watImage from '../public/wat.png';
import hoeverImage from '../public/hoever.png';

export default function Index() {
  return (
    <Layout page='home'>
      <div className='bg-black-white-200 pb-20' name='thema'>
        <div className='global-margin'>
          <h3 className='pb-6 pt-8 mobile sm:desktop text-black-white-800'>Thema’s</h3>

          <SectionTypes type='home' />
        </div>
      </div>
      <div className='bbg-black-white-200 py-10'>
        <div className='global-margin'>
          <h2 className='mobile sm:desktop text-black-white-800 border-b border-black-white-600 pb-4' name='waarom'>
            Over CircuLaw
          </h2>
          <div className='grid grid-cols-1 lg:grid-cols-2 border-b border-black-white-600 py-10'>
            <div>
              <Image src={watImage} alt='image for wat circulaw' />
            </div>
            <div>
              <h2 className='mobile sm:main'>Wat is CircuLaw?</h2>
              <p className='p-mobile-bg sm:body-text py-5 max-w-4xl'>
                CircuLaw is een service waarmee we in de eerste plaats beleidsmakers en
                transitiemanagers helpen meer en beter gebruik te maken van regelgeving om de
                circulaire economie te bevorderen. Maar CircuLaw is ambitieus. Door stap voor stap
                uit te breiden willen we uiteindelijk ook strategen, toezichthouders, juristen en
                circulaire ondernemers bedienen.
              </p>
              <span className='text-greenLink link-mobile sm:link'>
                <Link href='/wat-is-circulaw'>Meer lezen →</Link>
              </span>
            </div>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 border-b border-black-white-600 py-10'>
            <div>
              <Image src={waaromImage} alt='image for wararom circulaw' />
            </div>
            <div>
              <h2 className='mobile sm:main'>Waarom CircuLaw?</h2>
              <p className='p-mobile-bg sm:body-text py-5 max-w-4xl'>
                Voor het tegengaan van klimaatverandering, het verminderen van vervuiling, het
                behoud van biodiversiteit en de beschikbaarheid van grondstoffen is een circulaire
                economie essentieel. In Nederland hebben we hierin nog een lange weg te gaan. De
                wet-en regelgeving die hierbij kan helpen is complex, ontoegankelijk, moeilijk
                vindbaar, onbekend. Gevolg: er worden oplossingen gezocht die vaak te vrijblijvend
                zijn. CircuLaw laat daarom zien waar en hoe regelgeving mogelijkheden biedt om
                circulaire doelen te halen en zo bij te dragen aan een versnelling van de circulaire
                transitie.
              </p>
              <span className='text-greenLink link-mobile sm:link'>
                <Link href='/waarom-circulaw'>Meer lezen →</Link>
              </span>
            </div>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 border-b border-black-white-600 py-10'>
            <div>
              <Image src={hoeverImage} alt='image for hoever' />
            </div>
            <div>
              <h2 className='mobile sm:main'>Hoever zijn we?</h2>
              <ul className='p-mobile-bg sm:body-text py-5 max-w-4xl list-disc pl-6'>
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
              <span className='text-greenLink link-mobile sm:link'>
                <Link href='/waarom-circulaw'>Meer lezen over de volgende stappen →</Link>
              </span>
            </div>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 py-10'>
            <div>
              <Image src={waaromImage} alt='image for wararom circulaw' />
            </div>
            <div>
              <h2 className='mobile sm:main'>Wie maken CircuLaw?</h2>
              <p className='p-mobile-bg sm:body-text py-5 max-w-4xl'>
                Gemeente Amsterdam, Dark Matter Laboratories, EIT Climate KIC, de Provincies
                Noord-Holland en Flevoland, Rijksdienst voor Ondernemend Nederland (RVO), het MRA
                (Metropoolregio Amsterdam) Kernteam Houtbouw, Belastingdienst, TU Delft, Erasmus
                School of LAW, de VU, Wageningen Universiteit ( WUR Law group), Stichting Koninklijk
                Nederlands Normalisatie Instituut (NEN).
              </p>
              <span className='text-greenLink link-mobile sm:link'>
                <Link href='/wie-maken-circulaw'>Meer over de makers van CircuLaw →</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

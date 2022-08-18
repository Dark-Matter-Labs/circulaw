import Link from 'next/link';
import Layout from '../../components/layout';
import OverNav from '../../components/over-nav';

export default function WaaromCirculaw() {
  return (
    <Layout>
      <div className='breadcrumb ml-5 sm:ml-20 pt-8 text-greenLink'>
        <Link href='/'>
          <a>Home &gt; </a>
        </Link>
      </div>
      <div className='grid grid-col-1 sm:grid-cols-3'>
        <div className='mx-5 sm:mx-20 my-20 col-span-2'>
          <h1 className='pb-5 mobile sm:main'>Waarom CircuLaw?</h1>
          <h2 className='mobile sm:main'>Nederland móet in actie komen tegen klimaatverandering</h2>
          <p className='body-text-mobile sm:body-text max-w-4xl'>
            De circulaire economie is essentieel voor het tegengaan van klimaatverandering, het
            verminderen van vervuiling, het stoppen van biodiversiteitsverlies en de beschikbaarheid
            van grondstoffen.
          </p>
          <br />
          <p className='body-text-mobile sm:body-text max-w-4xl pb-10'>
            In Nederland hebben we hierin nog veel te doen. De verdere opwarming van de aarde kan
            beperkt worden door de uitstoot van broeikasgassen te verminderen. Hiervoor heeft
            Nederland{' '}
            <span className='text-greenLink'>
              verschillende nationale en internationale doelen afgesproken
            </span>
            . We moeten in Nederland hard aan de slag om die doelen te gaan halen. Want
            veranderingen gaan nog te langzaam.{' '}
          </p>

          <h2 className='mobile sm:main'>
            Wet-en regelgeving biedt aanknopingspunten voor actie, maar…
          </h2>
          <p className='body-text-mobile sm:body-text max-w-4xl pb-5'>
            Wet-en regelgeving biedt goede mogelijkheden om circulair beleid te maken. Mogelijkheden
            die vaak <span className='text-greenLink'>onbenut</span> blijven. Want regelgeving is
            complex. Daardoor is het voor beleidsmakers vrijwel onmogelijk om een breed inzicht en
            overzicht te krijgen van die mogelijkheden.
          </p>
          <p className='body-text-mobile sm:body-text max-w-4xl bg-green3 bg-opacity p-2'>
            Uit onderzoek van het Planbureau voor de Leefomgeving (PBL) blijkt dat slechts 8% van de
            beleidsinstrumenten die gemeenten en provincies inzetten juridisch van aard is. Uit
            onderzoek door CircuLaw is gebleken dat beleidsmakers deze instrumenten niet inzetten
            omdat ze onvoldoende kennis hebben van de mogelijkheden die regelgeving biedt. <br />
            <br /> Een ander belangrijk obstakel is dat het huidige wetgevingskader niet is
            ontwikkeld om doelstellingen op het gebied van de circulaire economie te dienen.
          </p>

          <p className='body-text-mobile sm:body-text max-w-4xl pt-5'>
            Daar komt nog eens bij dat juristen binnen organisaties vaak sterk gespecialiseerd zijn,
            waardoor het voor beleidsmakers lastig is om te weten welke overheidslaag welke
            bevoegdheden heeft.{' '}
          </p>
          <br />
          <p className='body-text-mobile sm:body-text max-w-4xl'>
            CircuLaw maakt daarom transparant{' '}
            <span className='text-greenLink'>
              waar en hoe regelgeving mogelijkheden biedt om circulair beleid te maken
            </span>
            .
          </p>
        </div>
        <div className='mx-5 sm:mx-20 my-20 max-w-sm'>
          <OverNav pagename='waarom' />
        </div>
      </div>
    </Layout>
  );
}

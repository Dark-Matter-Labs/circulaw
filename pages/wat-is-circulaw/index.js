import Link from 'next/link';
import Layout from '../../components/layout';
import OverNav from '../../components/over-nav';

export default function WatIsCircuLaw() {
  return (
    <Layout>
      <div className='global-margin'>
        <div className='breadcrumb pt-8 text-greenLink'>
          <Link href='/'>
            <a>Home &gt; </a>
          </Link>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3'>
          <div className='my-20 col-span-2 text-black1'>
            <h1 className='pb-5 mobile sm:main'>Wat is CircuLaw?</h1>
            <p className='body-text-mobile sm:body-text max-w-4xl pb-10'>
              CircuLaw is een service waarmee we beleidsmakers, transitiemanagers en juristen helpen
              meer en beter gebruik te maken van regelgeving om de circulaire economie te
              bevorderen. In een tool bieden we hen per circulaire productgroep op basis van brede
              wetsanalyses beleidsmaatregelen aan. Ook bieden we hulp bij de toepassing van die
              maatregelen met een praktische leidraad en praktijkvoorbeelden. Maar CircuLaw is
              ambitieus. Door stap voor stap uit te breiden willen we uiteindelijk ook
              vergunningverleners, toezichthouders en circulaire ondernemers bedienen.
            </p>
            <h2 className='mobile sm:main pb-2'>Overzicht wet-en regelgeving</h2>
            <p className='body-text-mobile sm:body-text max-w-4xl pb-10'>
              We verzamelen de mogelijkheden die het wet- en regelgevingsstelsel biedt voor de
              circulaire transitie centraal en stellen deze via CircuLaw voor iedereen beschikbaar,
              zodat CircuLaw fungeert als collectief geheugen. Daarnaast voeren we per thema
              systematische wetsanalyses uit om nieuwe maatregelen te vinden.
            </p>

            <h2 className='mobile sm:main pb-2'>Van wet-en regelgeving naar praktijk</h2>
            <p className='body-text-mobile sm:body-text max-w-4xl pb-10'>
              Als juridische maatregelen al zijn toegepast, geeft CircuLaw ook voorbeelden uit de
              praktijk. Ter inspiratie, én als middel om beleidsmedewerker op weg te helpen.
              Daarnaast presenteert CircuLaw ook instructies aan beleidsmedewerkers hoe zij binnen
              hun provincie of gemeente maatregelen kunnen toepassen. Hierbij worden ook suggesties
              gedaan voor teksten, waarden of verwijzingen naar keurmerken, die als basis kunnen
              dienen voor het stellen van eisen. Ook worden waar mogelijk modelteksten aangeboden,
              die bijvoorbeeld één op één verwerkt kunnen worden in een verordening.
            </p>

            <h2 className='mobile sm:main pb-2'>Bevoegdheden inzichtelijk maken</h2>
            <p className='body-text-mobile sm:body-text max-w-4xl pb-10'>
              Een belangrijke meerwaarde van CircuLaw is dat het de samenwerking tussen overheden
              bevordert. Onze wetsanalyses maken op maatregelniveau inzichtelijk welke overheidslaag
              bevoegd is om een regel te stellen. Op deze manier wordt het mogelijk om landelijk een
              instrumentenmix te ontwikkelen voor een productgroep. Of om als gemeente naar een
              provincie te gaan, en samen stappen te gaan zetten in bijvoorbeeld het optimaliseren
              van de houtbouwketen.
            </p>

            <h2 className='mobile sm:main pb-2'>Verbinden van wetsgebieden</h2>
            <p className='body-text-mobile sm:body-text max-w-4xl pb-10'>
              CircuLaw maakt inzichtelijk hoe binnen bepaalde thema’s maatregelen samenhangen. Die
              samenhang is van groot belang, want om de transitie te versnellen, is het invoeren van
              één beleidsmaatregel vaak niet voldoende. Het idee van transitiemanagement is dat
              gelijktijdig aan meerdere knoppen wordt gedraaid, waarmee het systeem op verschillende
              punten bewerkt wordt - en daarmee in beweging komt. Het inzetten van de juiste
              instrumentenmix kan leiden tot wat we ‘hefbomen’ noemen in de transitie. Het
              combineren en inzetten van maatregelen van verschillende rechtsgebieden, bijvoorbeeld
              publiek en privaat, kan een versterkend effect hebben.
            </p>

            <h2 className='mobile sm:main pb-2'>Law as a Service</h2>
            <p className='body-text-mobile sm:body-text max-w-4xl pb-6'>
              CircuLaw wil wet- en regelgeving tot leven brengen. Van een eindeloze hoeveelheid
              statische wetten op papier, naar een bruikbaar, tastbaar inzicht en overzicht.
              Toepasbaar vanuit de doelstellingen van een circulaire productgroep. CircuLaw maakt
              het mogelijk om gelijk te zien welke mogelijkheden een specifieke wet biedt voor het
              versnellen van de circulaire transitie, en er mee aan de slag te gaan. De wet als
              service.
            </p>
            <p className='body-text-mobile sm:body-text max-w-4xl pb-10'>
              CircuLaw maakt het mogelijk om gelijk te zien welke mogelijkheden een specifieke wet
              biedt voor het versnellen van de circulaire transitie, en er mee aan de slag te gaan.
              De wet als service.
            </p>
            <h2 className='mobile sm:main pb-2'>Uniformiteit in decentrale uitvoering </h2>
            <p className='body-text-mobile sm:body-text max-w-4xl pb-6'>
              In Nederland zijn veel taken en bevoegdheden gedecentraliseerd naar provincies en
              gemeenten. Lokaal kun je dan maatwerkoplossingen introduceren. Daar zitten voor-en
              nadelen aan. In de praktijk blijkt dat overheden hierdoor verschillende eisen aan de
              markt stellen. En het gevolg daarvan is dat bedrijven die hun circulaire producten of
              diensten in meerdere gemeenten of provincies willen aanbieden, opschalingsproblemen
              kunnen ervaren.
            </p>
            <p className='body-text-mobile sm:body-text max-w-4xl'>
              Als – geholpen door CircuLaw - meerdere gemeenten en provincies op eenzelfde manier
              wet-en regelgeving overnemen en implementeren, draagt dit bij aan de
              investeringszekerheid voor circulaire ondernemers.
            </p>
          </div>
          <div className='mx-20 my-20 max-w-sm'>
            <OverNav pagename='wat' />
          </div>
        </div>
      </div>
    </Layout>
  );
}

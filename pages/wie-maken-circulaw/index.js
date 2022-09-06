import Link from 'next/link';
import Layout from '../../components/layout';
import OverNav from '../../components/over-nav';

export default function WieMaken() {
  return (
    <Layout>
      <div className='mx-7 max-w-7xl lg:mx-auto'>
        <div className='breadcrumb pt-8 text-greenLink'>
          <Link href='/'>
            <a>Home &gt; </a>
          </Link>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-3'>
          <div className='my-20 col-span-2 text-black1'>
            <h1 className='pb-5 mobile sm:main'>Wie maken CircuLaw?</h1>
            <p className='body-text-mobile sm:body-text max-w-4xl pb-10'>
              Gemeente Amsterdam, Dark Matter Laboratories, EIT Climate KIC, de Provincies
              Noord-Holland en Flevoland, Rijksdienst voor Ondernemend Nederland (RVO), het MRA
              (Metropoolregio Amsterdam), Belastingdienst, TU Delft, Universiteit van Amsterdam,
              Erasmus School of Law, Vrije Universiteit (VU), Wageningen Universiteit, Stichting
              Koninklijk Nederlands Normalisatie Instituut (NEN).
            </p>

            <h2 className='mobile sm:main pb-2'>Gemeente Amsterdam, Stedelijke Innovatie</h2>
            <p className='body-text-mobile sm:body-text max-w-4xl pb-10'>
              Gemeente Amsterdam is al jaren koploper in de circulaire economie. Het doel van de
              stad is om in 2050 volledig circulair te zijn, en het grondstoffengebruik in 2030
              gehalveerd te hebben.{' '}
              <a
                href='https://www.amsterdam.nl/innovatie/duurzaamheid/'
                className='text-greenLink link-mobile sm:link'
              >
                Het stedelijk innovatieteam van Amsterdam
              </a>{' '}
              heeft CircuLaw in 2020 geïnitieerd. Dit team werkt samen met partners in en buiten de
              stad aan innovaties die de transitie naar een circulaire, veilige en bereikbare stad
              versnellen. Binnen dit publieke innovatieteam is expertise aanwezig op het gebied van
              sociale en technologische innovatie, transitiemanagement, digitalisering en moderne
              overheid. Vanuit de gemeente dragen daarnaast ervaren circulaire experts en juristen
              van beleidsafdelingen bij aan de ontwikkeling van de tool.
            </p>

            <h2 className='mobile sm:main pb-2'>Dark Matter Laboratories</h2>
            <p className='body-text-mobile sm:body-text max-w-4xl pb-10'>
              <a href='https://darkmatterlabs.org/' className='text-greenLink link-mobile sm:link'>
                Dark Matter Labs (DML)
              </a>{' '}
              is een internationaal strategisch onderzoeks-, ontwerp- en ontwikkelingslab met als
              missie: “to discover, design and develop the institutional ‘dark matter’ that supports
              a more democratic, distributed and sustainable future.” DML is mede-initiator van
              CircuLaw, en vanaf het begin van de ontwikkelingen betrokken. Tezamen met de gemeente
              voert DML de regie op de projectorganisatie en -uitvoering. DML levert kennis en
              expertise op het gebied van transitiemanagement, strategisch ontwerp,
              interdisciplinaire kennisintegratie en technologische kennis.
            </p>

            <h2 className='mobile sm:main pb-2'>EIT Climate-KIC</h2>
            <p className='body-text-mobile sm:body-text max-w-4xl pb-10'>
              <a href='https://www.climate-kic.org/' className='text-greenLink link-mobile sm:link'>
                EIT Climate-KIC
              </a>{' '}
              is een kennis- en innovatiecommunity (KIC) die werkt aan het versnellen van de
              overgang naar een koolstofarme, klimaatbestendige samenleving. Met de steun van het
              Europees Instituut voor innovatie en technologie identificeert en ondersteunt
              Climate-KIC innovatie die de samenleving helpt om de klimaatverandering te verminderen
              en zich hieraan aan te passen. CircuLaw heeft in de vroege ontwikkelfase deelgenomen
              aan Climate-KICs Deep Demonstrations Programma, en heeft vanuit dit programma
              financiering en kennis ontvangen.
            </p>

            <h2 className='mobile sm:main pb-2'>Provincie Noord-Holland</h2>
            <p className='body-text-mobile sm:body-text max-w-4xl pb-10'>
              De Noord-Hollandse economie moet in het jaar 2050 volledig circulair zijn. Afval wordt
              dan niet meer verbrand of gestort maar gebruikt als grondstof voor nieuwe materialen
              en producten. Het delven van nieuwe grondstoffen wordt dan tot het minimum beperkt. Om
              dit te bereiken, wil de provincie circulair ondernemen én het circulair maken van
              grondstofketens stimuleren en opschalen.{' '}
              <a
                href='https://www.noord-holland.nl/'
                className='text-greenLink link-mobile sm:link'
              >
                Provincie Noord-Holland
              </a>{' '}
              draagt financieel bij aan de ontwikkeling van CircuLaw en levert kennis en advies op
              de ontwikkeling van de tool en service.
            </p>

            <h2 className='mobile sm:main pb-2'>Provincie Flevoland</h2>
            <p className='body-text-mobile sm:body-text max-w-4xl pb-10'>
              <a href='https://www.flevoland.nl/' className='text-greenLink link-mobile sm:link'>
                Provincie Flevoland
              </a>{' '}
              heeft circulaire economie benoemd als één van de zeven hoofdopgaven in de
              Omgevingsvisie Flevoland Straks. Zij wil in 2030 bekend staan als dé grondstoffen-
              leverancier voor de circulaire economie. Provincie Flevoland draagt financieel bij aan
              de ontwikkeling van CircuLaw.
            </p>

            <h2 className='mobile sm:main pb-2'>Rijksdienst voor Ondernemend Nederland (RVO)</h2>
            <p className='body-text-mobile sm:body-text max-w-4xl pb-10'>
              De Rijksoverheid zet zich in voor een uitstekend ondernemersklimaat. Ministeries
              stippelen daar beleid voor uit. De taak om dit beleid uit te voeren ligt bij{' '}
              <a
                href='https://www.rvo.nl/klimaat-energie'
                className='text-greenLink link-mobile sm:link'
              >
                RVO
              </a>
              . RVO draagt vanuit de landelijke Transitieagenda Circulaire Bouweconomie financieel
              bij aan de ontwikkeling van CircuLaw. Ook levert RVO juridische kennis en advies in de
              ontwikkeling van CircuLaw.
            </p>

            <h2 className='mobile sm:main pb-2'>Metropoolregio Amsterdam (MRA)</h2>
            <p className='body-text-mobile sm:body-text max-w-4xl pb-10'>
              <a
                href='https://www.metropoolregioamsterdam.nl/'
                className='text-greenLink link-mobile sm:link'
              >
                De Metropoolregio Amsterdam
              </a>{' '}
              is het samenwerkingsverband van de provincies Noord-Holland en Flevoland, 30 gemeenten
              en de Vervoerregio Amsterdam. De overheden in de MRA werken met elkaar samen in de
              omslag naar een circulaire economie. Want zo kunnen zij echt betekenis hebben bij die
              omslag in de regio. Bijvoorbeeld door circulair in te kopen, door belemmeringen voor
              ondernemers weg te nemen en door een goede beleidsvisie voor de lange termijn te
              maken, waar ondernemers op kunnen investeren. Vanuit het{' '}
              <a
                href='https://www.metropoolregioamsterdam.nl/een-op-de-vijf-nieuwbouwwoningen-in-mra-vanaf-2025-van-hout/'
                className='text-greenLink link-mobile sm:link'
              >
                Kernteam Houtbouw
              </a>
              wordt bijgedragen aan de ontwikkeling van CircuLaw, en samen met partners wordt getest
              hoe houtbouwmaatregelen het best toegepast kunnen worden.
            </p>

            <h2 className='mobile sm:main pb-2'>Belastingdienst</h2>
            <p className='body-text-mobile sm:body-text max-w-4xl pb-10'>
              <a
                href='https://www.belastingdienst.nl/wps/wcm/connect/nl/home/home'
                className='text-greenLink link-mobile sm:link'
              >
                De belastingdienst
              </a>{' '}
              heeft jarenlange ervaring in het digitaliseren van wetgeving en hiervoor veel methodes
              en modellen ontwikkeld. Vanuit de organisatie werken verschillende experts mee aan de
              ontwikkeling Circulaw. Hun kennis en ervaring op het gebied van wetsanalyse en
              digitalisering is van grote waarde voor de totstandkoming van methoden waarmee
              wetgeving kan worden geanalyseerd vanuit circulaire doelen.
            </p>

            <h2 className='mobile sm:main pb-2'>Erasmus School of Law</h2>
            <p className='body-text-mobile sm:body-text max-w-4xl pb-10'>
              Professoren en academici vanuit de faculteiten{' '}
              <a href='https://www.eur.nl/en/esl' className='text-greenLink link-mobile sm:link'>
                ‘Law and Innovation’ en ‘Erasmus Centre for Local Governments’
              </a>{' '}
              dragen inhoudelijk bij aan de ontwikkeling van CircuLaw. Het gaat daarbij om kennis
              over wetgeving, technologie en digitalisering, en om inhoudelijke kennis op het gebied
              van belastingen en duurzaamheid. De nieuwe kennis die binnen CircuLaw wordt
              ontwikkeld, wordt vervolgens gebruikt in het het universitaire onderwijs.
            </p>

            <h2 className='mobile sm:main pb-2'>TU Delft</h2>
            <p className='body-text-mobile sm:body-text max-w-4xl pb-10'>
              De afdeling{' '}
              <a
                href='https://www.tudelft.nl/bk/over-faculteit/afdelingen/management-in-the-built-environment'
                className='text-greenLink link-mobile sm:link'
              >
                Management in the Built Environment (MBE) van TU Delft
              </a>{' '}
              streeft naar een duurzame gebouwde omgeving waarin de belangen van de eindgebruiker en
              andere stakeholders uitgangspunt zijn. Vanuit MBE werken verschillende professoren en
              academici mee aan de ontwikkeling van CircuLaw. Ook worden een PhD onderzoek en
              masterstudies uitgevoerd naar toepassing van beleidsinstrumenten om transities te
              versnellen. De resultaten hiervan worden meegenomen in de ontwikkeling van de
              toepassingsmodule van de CircuLaw.
            </p>

            <h2 className='mobile sm:main pb-2'>
              Amsterdam Institute for Advanced Metropolitan Solutions (AMS)
            </h2>
            <p className='body-text-mobile sm:body-text max-w-4xl pb-10'>
              <a
                href='https://www.ams-institute.org/urban-challenges/circularity-urban-regions/'
                className='text-greenLink link-mobile sm:link'
              >
                AMS Institute{' '}
              </a>
              is een internationaal toonaangevend instituut waar talent wordt opgeleid en
              ingenieurs, ontwerpers en zowel natuur- als sociale wetenschappers gezamenlijk
              geïntegreerde grootstedelijke oplossingen ontwikkelen en valoriseren. AMS Institute
              draagt vanuit haar programma ‘Circularity in Urban Regions’ bij aan de transitie van
              een lineair naar een circulair model in de Metropoolregio Amsterdam (MRA), onder
              andere door concrete toepassing van nieuwe wetenschappelijke inzichten in de stad. AMS
              Institute draagt vanuit kennis, middelen en netwerk bij aan de ontwikkeling van
              CircuLaw.
            </p>

            <h2 className='mobile sm:main pb-2'>Wageningen Universiteit - WUR Law group</h2>
            <p className='body-text-mobile sm:body-text max-w-4xl pb-10'>
              <a
                href='https://www.wur.nl/en/research-results/chair-groups/social-sciences/law-group.htm'
                className='text-greenLink link-mobile sm:link'
              >
                WUR Law Group
              </a>{' '}
              richt zich op juridische oplossingen voor maatschappelijke problemen, waaronder ‘life
              sciences’. Het onderzoek van de groep is sterk interdisciplinair, met docenten en
              studenten van over de hele wereld. Vanuit de faculteit dragen professoren en academici
              bij aan de inhoudelijke ontwikkeling van CircuLaw.
            </p>

            <h2 className='mobile sm:main pb-2'>Vrije universiteit (VU)</h2>
            <p className='body-text-mobile sm:body-text max-w-4xl pb-10'>
              Digitale mogelijkheden verbinden ons en brengen informatie dichterbij. Ze geven ons
              een gevoel van vrijheid en onafhankelijkheid. Wetenschappers van de{' '}
              <a
                href='https://vu.nl/nl/onderzoek/thema/de-digitale-wereld'
                className='text-greenLink link-mobile sm:link'
              >
                Vrije Universiteit
              </a>{' '}
              zijn betrokken bij vele belangrijke digitale ontwikkelingen. Tegelijkertijd zijn er
              zorgen over de grenzen van digitalisering. Wat is de rol van de overheid en techreuzen
              hierbij? Zijn algoritmen een vloek of een zegen? Hoe bereiken mens en digitalisering
              een gezond evenwicht? Het VU-onderzoek werpt voortdurend een nieuw licht op de vele
              facetten van digitalisering. Vanuit het VU Center for Public Contract Law and
              Governance wordt binnen het project Wetgeving en Digitalisering bijgedragen aan
              CircuLaw.
            </p>

            <h2 className='mobile sm:main pb-2'>
              Stichting Koninklijk Nederlands Normalisatie Instituut (NEN)
            </h2>
            <p className='body-text-mobile sm:body-text max-w-4xl pb-10'>
              Het programma Circulaire Economie van{' '}
              <a
                href='https://www.nen.nl/afspraken-voor-een-circulaire-economie'
                className='text-greenLink link-mobile sm:link'
              >
                NEN
              </a>{' '}
              werkt in acht sectoren aan afspraken die het gebruik van grondstoffen terugdringen.
              Dat gaat niet alleen om het recyclen van grondstoffen, maar ook over een langere
              levensduur van producten, mogelijkheid tot reparatie en hergebruik van producten en om
              het stimuleren van het gebruik van hernieuwbare grondstoffen. Met NEN wordt verkend
              hoe NEN normen concreet kunnen bijdragen aan het versnellen van de circulaire
              transitie. Ook wordt met het{' '}
              <a
                href='https://www.nen.nl/innovatielab'
                className='text-greenLink link-mobile sm:link'
              >
                NEN Innovatielab
              </a>{' '}
              verkend of en hoe in de toekomst op technisch gebied kan worden samengewerkt,
              bijvoorbeeld door koppeling met{' '}
              <a
                href='https://connect.nen.nl/Portal'
                className='text-greenLink link-mobile sm:link'
              >
                NEN-Connect
              </a>
              .
            </p>

            <h2 className='mobile sm:main pb-2'>Draag bij! </h2>
            <p className='body-text-mobile sm:body-text max-w-4xl pb-10'>
              Wil je zelf bijdragen aan de ontwikkeling van CircuLaw? Dat kan! Wij zijn altijd op
              zoek naar nieuwe kennis, inzichten en ideeën en voorbeelden van toegepaste maatregelen
              in beleid zodat we het wet- en regelgevingsstelsel nog beter in dienst kunnen stellen
              van de circulaire transitie!{' '}
              <Link href='/contact'>
                <a className='text-greenLink link-mobile sm:link'>Neem contact met ons op</a>
              </Link>
              .
            </p>
          </div>
          <div className='mx-20 my-20 max-w-sm'>
            <OverNav pagename='wie' />
          </div>
        </div>
      </div>
    </Layout>
  );
}

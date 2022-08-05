import Link from "next/link";
import Layout from "../../components/layout";
import OverNav from "../../components/over-nav";

export default function WatIsCircuLaw() {
  return (
    <Layout>
      <div className="breadcrumb ml-5 sm:ml-20 pt-8 text-greenLink">
        <Link href="/">
          <a>Home &gt; </a>
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3">
        <div className="mx-5 sm:mx-20 my-20 col-span-2">
          <h1 className="pb-5 mobile sm:main">Wat is CircuLaw?</h1>
          <h2 className="mobile sm:main">Overzicht wet-en regelgeving</h2>
          <p className="body-text-mobile sm:body-text max-w-4xl">
            We hebben de mogelijkheden die het wet- en regelgevingsstelsel biedt
            voor de circulaire transitie centraal verzameld en opgeslagen en
            stellen deze via CircuLaw voor iedereen beschikbaar.
          </p>
          <br />
          <p className="body-text-mobile sm:body-text max-w-4xl pb-10">
            We zijn eind 2020 begonnen met het verzamelen van alle bekende
            toepassingen van maatregelen, en hebben{" "}
            <span className="text-greenLink">gerichte wetsanalyses</span>{" "}
            uitgevoerd.
          </p>

          <h2 className="mobile sm:main">
            Van wet-en regelgeving naar praktijk
          </h2>
          <p className="body-text-mobile sm:body-text max-w-4xl pb-5">
            Als juridische maatregelen al zijn toegepast, geeft CircuLaw ook
            voorbeelden uit de praktijk. Ter inspiratie, én als middel om
            beleidsmedewerker op weg te helpen. Daarnaast presenteert CircuLaw
            ook instructies aan beleidsmedewerkers hoe zij binnen hun provincie
            of gemeente maatregelen kunnen toepassen. Hierbij worden ook
            suggesties gedaan voor teksten, waarden of verwijzingen naar
            keurmerken, die als basis kunnen dienen voor het stellen van eisen.
            Ook worden waar mogelijk modelteksten aangeboden, die één op één
            verwerkt kunnen worden in een verordening.
          </p>

          <h2 className="mobile sm:main">Bevoegdheden inzichtelijk maken</h2>
          <p className="body-text-mobile sm:body-text max-w-4xl">
            Een belangrijke meerwaarde van CircuLaw is dat het de samenwerking
            tussen overheden bevordert. Onze wetsanalyses maken op
            maatregelniveau inzichtelijk welke overheidslaag bevoegd is om een
            regel te stellen.
          </p>
          <br />
          <p className="body-text-mobile sm:body-text max-w-4xl pb-10">
            Op deze manier wordt het mogelijk om landelijk een instrumentenmix
            te ontwikkelen voor een{" "}
            <span className="text-greenLink">productgroep v.</span> Of om als
            gemeente naar een provincie te gaan, en samen stappen te gaan zetten
            in bijvoorbeeld het optimaliseren van de houtbouwketen.
          </p>

          <h2 className="mobile sm:main">Verbinden van wetsgebieden</h2>
          <p className="body-text-mobile sm:body-text max-w-4xl">
            Om de transitie te versnellen, is het invoeren van één
            beleidsmaatregel vaak niet voldoende. Het idee van
            transitiemanagement is dat gelijktijdig aan meerdere knoppen wordt
            gedraaid, waarmee het systeem op verschillende punten bewerkt wordt
            - en daarmee in beweging komt.
          </p>
          <br />
          <p className="body-text-mobile sm:body-text max-w-4xl pb-10">
            Het inzetten van de juiste instrumentenmix kan leiden tot wat we
            ‘hefbomen’ noemen in de transitie. Het combineren en inzetten van
            maatregelen van verschillende rechtsgebieden, bijvoorbeeld publiek
            en privaat, kan een versterkend effect hebben.
          </p>

          <h2 className="mobile sm:main">Law as a Service</h2>
          <p className="body-text-mobile sm:body-text max-w-4xl">
            CircuLaw wil wet- en regelgeving tot leven brengen. Van een
            eindeloze hoeveelheid statische wetten op papier, naar een
            bruikbaar, tastbaar inzicht en overzicht. Toepasbaar vanuit de
            doelstellingen van een circulaire productgroep.
          </p>
          <br />
          <p className="body-text-mobile sm:body-text max-w-4xl pb-10">
            CircuLaw maakt het mogelijk om gelijk te zien welke mogelijkheden
            een specifieke wet biedt voor het versnellen van de circulaire
            transitie, en er mee aan de slag te gaan. De wet als service.
          </p>
        </div>
        <div className="mx-5 sm:mx-20 my-20 max-w-sm">
          <OverNav pagename="wat" />
        </div>
      </div>
    </Layout>
  );
}

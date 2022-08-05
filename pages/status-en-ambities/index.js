import Link from "next/link";
import Layout from "../../components/layout";
import OverNav from "../../components/over-nav";

export default function StatusEn() {
  return (
    <Layout>
      <div className="breadcrumb ml-5 sm:ml-20 pt-8 text-greenLink">
        <Link href="/">
          <a>Home &gt; </a>
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3">
        <div className="mx-5 sm:mx-20 my-20 col-span-2">
          <h1 className="pb-5 mobile sm:main"> Status en ambities CircuLaw</h1>
          <h2 className="mobile sm:main">
            Wat vind je nu op de site van CircuLaw?
          </h2>
          <p className="body-text-mobile sm:body-text max-w-4xl">
            CircuLaw biedt nu:
            <ul className="list-disc">
              <li>
                Een overzicht van wet- en regelgeving voor beleidsmakers die aan
                de slag willen met maatregelen voor de thema’s houtbouw (44
                maatregelen) en circulaire windmolens (8 maatregelen){" "}
              </li>
              <li>Een leidraad voor 3 maatregelen die houtbouw stimuleren </li>
              <li>
                Inzicht en overzicht in de samenhang tussen bevoegdheidsniveaus
                binnen regelgeving rond circulaire houtbouw en circulaire
                windmolens, relevant voor strategen en beleidsadviseurs. 
              </li>
            </ul>
          </p>
          <br />

          <h2 className="mobile sm:main">
            {" "}
            CircuLaw als een centraal, ‘collectief geheugen
          </h2>
          <p className="body-text-mobile sm:body-text max-w-4xl pb-5">
            Overheden kunnen een wetsanalyse laten uitvoeren voor een
            productgroep of casus, waarmee de tool verder gevuld wordt. Zo wordt
            CircuLaw steeds rijker en wordt de circulaire transitie steeds
            verder gedekt. Dit heeft nog een groot voordeel: overheden hoeven
            straks niet telkens opnieuw apart losse opdrachten te verlenen voor
            onderzoek naar mogelijkheden in regelgeving. Hiermee wordt
            potentieel een hoop geld bespaard, en wordt voorkomen dat het wiel
            steeds op verschillende plekken opnieuw uitgevonden wordt.
          </p>

          <h2 className="mobile sm:main">
            Doelstellingen en aansluiting bij Nationaal Programma Circulaire
            Economie{" "}
          </h2>
          <p className="body-text-mobile sm:body-text max-w-4xl">
            Binnen het Nationaal Programma Circulaire Economie zijn concrete
            doelstellingen voor productgroepen uitgewerkt. Om deze
            doelstellingen te realiseren, worden met alle betrokken partijen
            roadmaps uitgewerkt, waarin per productgroep een  zogenaamde
            instrumentmix wordt opgesteld. Hierin moet duidelijk worden wanneer
            welke beleidsinstrumenten ingezet worden, en door wie.
          </p>
          <br />
          <p className="body-text-mobile sm:body-text max-w-4xl pb-10">
            Op dit moment vinden gesprekken plaats over de rol die CircuLaw
            hierin zou kunnen spelen.
          </p>

          <h2 className="mobile sm:main">Een andere manier van werken </h2>
          <p className="body-text-mobile sm:body-text max-w-4xl">
            Voor beleidsmakers is het nog niet zo makkelijk om met wet- en
            regelgeving aan de slag te gaan. In de praktijk is het vaak
            eenvoudiger om bijvoorbeeld een subsidieregeling op te stellen, of
            een kennisconsortium te vormen. Toch is het belangrijk dat
            juridische maatregelen aan de mix worden toegevoegd. CircuLaw is
            erop gericht om beleidsmakers zo goed mogelijk hierbij te helpen. We
            willen een ‘open public service aanbieden’.
          </p>
          <br />
          <p className="body-text-mobile sm:body-text max-w-4xl pb-10">
            Het aanbieden van maatregelen is daarbij pas het begin. Het komende
            jaar wordt samen met communities of practice gewerkt aan een
            toepassingsmodule, waarbij beleidsmakers hulp krijgen bij vragen
            als: “waarop moet ik toetsen bij toepassing?”, “hoe ga ik van een
            maatregel naar een project met de markt?” Ook wordt gekeken hoe
            landelijk en regionaal een leerinfrastructuur kan worden ontwikkeld,
            waarbij wordt gedacht aan campagnes, cursussen en
            kennisbijeenkomsten.
          </p>

          <h2 className="mobile sm:main">Samen leren</h2>
          <p className="body-text-mobile sm:body-text max-w-4xl">
            Leren doe je nooit alleen, en al helemaal niet als het gaat om de
            toepassing van juridische maatregelen. De lessen die worden geleerd
            van implementatie in de ene gemeente of provincie, kunnen zeer
            waardevol zijn voor de uitvoering ervan op een andere plek.
          </p>
          <br />
          <p className="body-text-mobile sm:body-text max-w-4xl pb-10">
            In de toekomst willen we de tool zo vormgeven dat het mogelijk wordt
            om feedbackloops te laten ontstaan. Een mogelijkheid is dat
            beleidsmakers zelf hun ervaringen kunnen delen, input kunnen geven
            of zelfs maatregelen kunnen invoeren in het systeem. Ook dit is
            onderdeel van het idee van een open public service.
          </p>
        </div>
        <div className="mx-5 sm:mx-20 my-20 max-w-sm">
          <OverNav pagename="status" />
        </div>
      </div>
    </Layout>
  );
}

import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/layout";

export default function Kunststoffen() {
  return (
    <Layout>
      <div className="max-w-2xl">
        <div className="text-2xl font-bold py-14">Hoe CircuLaw werkt</div>
        <div className="text-xl font-bold">Waarom CircuLaw?</div>
        <div className="">
          De klimaatcrisis is een van de grootste bedreigingen van onze tijd. Om
          (verdere) opwarming van de aarde tegen te gaan, is drastische actie
          nodig. In 2050 wil Nederland volledig circulair zijn. Juridische
          instrumenten zijn onmisbaar om deze transitie waar te maken. Maar wet-
          en regelgeving is complexe materie. Het kost beleidsmakers veel tijd
          en energie om uit te vinden welke fiscaal-juridische instrumenten ze
          kunnen inzetten en hoe ze deze vervolgens kunnen gebruiken.
        </div>
        <div className="py-9 text-lg font-bold italic">
          CircuLaw laat beleidsmakers zien welke mogelijkheden in bestaande wet-
          en regelgeving aanwezig zijn om de circulaire transitie te versnellen
        </div>

        <div className="text-xl font-bold">
          Wetgeving geanalyseerd en geïnventariseerd door juridische experts
        </div>

        <div className="">
          Image
          {/* <Image
            src="me.png"
            alt="Picture of the author"
            width={500}
            height={500}
          /> */}
        </div>
        <div className="">
          <ul className="pl-6 list-disc">
            <li>
              Samen met verschillende Nederlandse rechtenuniversiteiten
              ontwikkelde CircuLaw een protocol dat wetten analyseert vanuit
              circulaire transitiedoelen v
            </li>
            <li>
              Juridische experts voeren hiermee wetsanalyses uit op basis van
              circulaire thema’s en productgroepen zoals ‘Houtbouw’ of
              ‘Circulaire windturbines’
            </li>
            <li>
              De maatregelen die hieruit voortkomen maken zij met een
              multidisciplinair team leesbaar voor beleidsmakers, zodat zij die
              makkelijk kunnen toepassen.
            </li>
          </ul>
        </div>
        <div className="text-xl font-bold">Verken de maatregelen</div>
        <div className="">
          Image
          {/* <Image
            src="me.png"
            alt="Picture of the author"
            width={500}
            height={500}
          /> */}
        </div>

        <div className="">
          In CircuLaw vind je dus maatregelen die beleidsmakers helpen de
          circulaire transitie te versnellen. Dat kunnen nieuwe maatregelen
          zijn, maar ook bestaande maatregelen die nog niet, of weinig worden
          toegepast. Met zoeken en filteren kun je in CircuLaw waar je mee aan
          de slag wilt in jouw gemeente of provincie. Op dit moment vind je
          maatregelen met kansen om ‘Houtbouw’ en ‘Circulaire windturbines’ te
          bevorderen. In de toekomst volgen meer thema’s.
        </div>

        <div className="text-xl font-bold">Verdiep je in de maatregelen</div>
        <div className="">
          Image
          {/* <Image
    src="me.png"
    alt="Picture of the author"
    width={500}
    height={500}
  /> */}
        </div>

        <div className="">
          Een maatregel is een juridisch instrument waarmee overheden een
          beleidsdoel kunnen vormgeven en behalen. Voorbeelden van maatregelen
          zijn subsidies, vergunningen of belastingen of.... Een maatregel in
          CircuLaw beschrijft kort:
          <ul className="pl-6 list-disc">
            <li>Het onderwerp waarop de maatregel betrekking heeft</li>
            <li>
              Wat de maatregel inhoudt in zo begrijpelijk mogelijke juridische
              taal
            </li>

            <li>
              Hoe de maatregel kansen biedt om circulariteit te bevorderen
            </li>

            <li>Eisen en beperkingen aan het inzetten van de maatregel</li>

            <li>
              De juridische bron, een inschatting van de juridische houdbaarheid
              v en de mate van circulaire strategie (R-waarde v) achter de
              maatregel.
            </li>
          </ul>
        </div>

        <div className="text-xl font-bold">
          Pas de maatregelen toe in nieuw, circulair beleid
        </div>
        <div className="">
          Image
          {/* <Image
    src="me.png"
    alt="Picture of the author"
    width={500}
    height={500}
  /> */}
        </div>

        <div className="">
          Vind je als beleidsmaker een maatregel in CircuLaw waarvan je je
          afvraagt of ‘ie interessant of relevant zou kunnen zijn voor jouw
          gemeente of provincie? Dan daagt CircuLaw je uit:
          <ul className="pl-6 list-disc">
            <li>Verken de maatregel</li>
            <li>
              Bespreek deze met juridische experts in je eigen organisatie
            </li>

            <li>Gebruik de maatregel in je eigen context</li>
          </ul>
        </div>

        <div className="p-4 bg-[#dbedfb] ">
          <div className="font-bold">Een voorbeeld:</div>

          <ul className="pl-6 list-disc">
            <li>
              Je vind in CircuLaw een maatregel ‘Houtbouw een plek geven in de
              omgevingsvisie’
            </li>
            <li>Je vraagt je af of jouw gemeente daar al iets mee doet.</li>

            <li>
              Je klopt aan bij……….…en bespreekt of en hoe je ‘Houtbouw’ in de
              omgevingsvisie kan opnemen en wat de impact is.
            </li>

            <li>Daarna onderneem je actie om het voor elkaar te krijgen.</li>
          </ul>
        </div>
        <div className="font-bold">Let op:</div>

        <div className="italic">
          De maatregelen kun je in de praktijk nit allemaal één-op-één overnemen
          of toepassen: sommige maatregelen zijn zelfs nog niet eerder toegepast
          en vragen om een innovative aanpak!
        </div>
        <div className="">Meer weten over CircuLaw in Vraag & Antwoord</div>
        <div className="">Draag bij!</div>
        <div className="">
          Wil je zelf bijdragen aan de ontwikkeling van CircuLaw? Dat kan! Wij
          zijn altijd op zoek naar nieuwe kennis, inzichten en ideeën en
          voorbeelden van toegepaste maatregelen in beleid zodat we het wet- en
          regelgevingsstelsel nog beter in dienst kunnen stellen van de
          circulaire transitie! Neem contact met ons op.
        </div>
      </div>
    </Layout>
  );
}

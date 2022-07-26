import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import Layout from "../../components/layout";
import ActionPanel from "../../components/section-action-panel";

import WindIcon from "../../public/icons/wind.png";
import HoutbouwHero from "../../public/houtbouwHero.jpg";
import co2Hero from "../../public/illustration-co2.png";

const laws = [
  {
    id: "0",
    artikel: "2.11",
    circulair: true,
    titel: "Omgevingswaarden in het omgevingsplan: meer houtbouw, minder CO2",
    kop_1_samenvatting_juridische_maatregel:
      "Wat zijn omgevingswaarden en welk doel hebben ze?",
    introductie_juridische_maatregel:
      "Omgevingswaarden zijn instrumenten uit de Omgevingswet die gemeenten kunnen inzetten om beleid uit de gemeentelijke omgevingsvisie uit te voeren. Het doel van omgevingswaarden is om een veilige en gezonde fysieke leefomgeving te creëren. Als de omgevingswaarden in een gebied behaald zijn, zijn activiteiten die de waarde verder verhogen, niet meer toegestaan.",
    kop_2_toepassing_juridische_maatregel:
      "Hoe kan de inzet van omgevingswaarden de circulaire transitie versnellen?",
    toepassing_juridische_maatregel:
      "Door omgevingswaarden in het omgevingsplan op te nemen, kunnen gemeenten voor bepaalde plangebieden strengere eisen stellen. Een omgevingswaarde kan onder meer bepalen dat in een bepaald gebied niet meer CO2 uitgestoten mag worden. Bosbouw en houtproductie verlagen de hoeveelheid CO2 in de lucht. Zo creëert de omgevingswaarde ruimte voor bosbouw en houtproductie, dat voor houtbouw gebruikt kan worden.",
    is_er_een_praktijk_voorbeeld: false,
    kop_3_uit_de_praktijk: "Uit de praktijk",
    uit_de_praktijk: "",
    voorbeeld_link_teks: "",
    voorbeeld_link: "",
    afbeelding_van_voorbeeld_link: "",
    kop_4_eisen_en_beperkingen: "Omgevingswaarden: eisen en beperkingen",
    eisen_en_beperkingen:
      "- Een omgevingswaarde moet objectief vast te stellen en meetbaar zijn;. \n- Omgevingswaarden zijn alleen zinvol als de activiteit of handeling (bijna) volledig binnen de gemeentegrond valt;\n- Bij elke omgevingswaarde moeten helder de bevoegdheden van het college worden aangegeven. Mag het college bijvoorbeeld op basis van de omgevingswaarde het omgevingsplan wijzigen of omgevingsvergunningen afgeven waarbij van het omgevingsplan afgeweken wordt? De omgevingswaarden moeten duidelijke, bindende kaders verschaffen.",
    kop_5_juridische_toelichting: "Juridische toelichting",
    juridische_toelichting:
      "Op grond van artikel 2.11 lid 1 Omgevingswet is de gemeenteraad bevoegd om omgevingswaarden vast te stellen in het omgevingsplan in de zin van artikel 2.4 Omgevingswet.",
    juridische_houdbaarheid: 3,
    duidelijkheid_wet: "",
    eenlijnige_uitspraken: "",
    literatuur: "",
    juridische_invloed: 2,
    bereik: "",
    duur: "",
    frequentie: "",
    omvang: "",
    europees: false,
    nationaal: false,
    provinciaal: false,
    gemeentelijk: true,
    type_beleidsinstrument: "Juridisch",
    R1: true,
    R2: true,
    R3: false,
    R4: false,
    R5: false,
    R6: false,
    valt_deze_mogelijkheid_onder_een_overheidsopdracht_of_consessie_opdracht: false,
    soort_opdracht: "",
    waar_valt_het_onder: "",
    kop_6_ministappenplan:
      "Deze maatregel is nog niet in werking getreden en nog niet toegepast",
    ministappenplan:
      "In de toekomst vind je hier een interactieve handleiding die je meeneemt in hoe je: \n\n- met de maatregel een project vormt en hiermee met de markt mee aan de slag kan gaan\n\n- intern kunt checken of het haalbaar, realistisch en het goede moment is om de maatregel toe te passen\n\n- de maatregel kan combineren met andere juridische, financiële en faciliterende beleidsinstrumenten, om zo meer impact te maken",
    kop_7_titel_links_ministappenplan: "",
    titel_link_ministappenplan: "",
    links_ministappenplan: "",
    goed_in_combinatie_met: "",
    rechtsgebied: "Publiekrecht",
    subrechtsgebied: "Omgevingsrecht",
    citeertitel: "Omgevingswet",
    link_naar_wetsartikel: "",
    geldend_vanaf: "Nog niet inwerking getreden",
    type_document: "Wet in formele zin",
    waardeketen: "Gebouwde Omgeving",
    casus: "Houtbouw",
  },
  {
    id: "1",
    artikel: "3.1",
    circulair: true,
    titel: "Houtbouw een plek geven in de gemeentelijke omgevingsvisie",
    kop_1_samenvatting_juridische_maatregel:
      "Wat staat er in de gemeentelijke omgevingsvisie?",
    introductie_juridische_maatregel:
      "In de gemeentelijke omgevingsvisie beschrijft de gemeente de integrale langetermijnvisie voor de fysieke leefomgeving. De visie geeft aan welke gemeentelijke kernkwaliteiten beschermd moeten worden en wat de maatschappelijke uitdaging is. De omgevingsvisie is de basis van het te vormen omgevingsbeleid en kan onder meer betrekking hebben op:\n- ruimtelijke aspecten;\n- energie-infrastructuur;\n- landbouw;\n- landschap;\n- milieu;\n- natuur;\n- water.",
    kop_2_toepassing_juridische_maatregel:
      "Hoe kan de gemeentelijke omgevingsvisie houtbouw bevorderen?",
    toepassing_juridische_maatregel:
      "Door houtbouw in de gemeentelijk omgevingsvisie op te nemen, wordt het onderdeel van de beleidscyclus van de Omgevingswet. Dat maakt het mogelijk om later in de beleidscyclus houtbouw op de agenda te zetten. Vanuit de omgevingsvisie komen andere maatregelen – zoals omgevingsvergunningen, een omgevingsplan of omgevingswaarden – voort. Die kunnen vervolgens ingezet worden om houtbouw te stimuleren of af te dwingen.",
    is_er_een_praktijk_voorbeeld: true,
    kop_3_uit_de_praktijk: "Uit de praktijk",
    uit_de_praktijk:
      "De gemeente Amsterdam heeft houtbouw opgenomen in haar omgevingsplan. Op pagina 176  en 203 vind je er meer over terug.",
    voorbeeld_link_teks: "link text",
    voorbeeld_link: "https://amsterdam2050.nl/",
    afbeelding_van_voorbeeld_link: "",
    kop_4_eisen_en_beperkingen:
      "Gemeentelijke omgevingsvisie: eisen en beperkingen",
    eisen_en_beperkingen:
      "De omgevingsvisie is zelfbindend voor het bestuursorgaan dat het heeft opgesteld. De visie geldt dus niet voor burgers, bedrijven of andere overheden. Ook betekent het dat er geen bezwaar en beroep tegen de visie mogelijk is. Wel mag iedereen in de voorbereiding van de omgevingsvisie zienswijzen naar voren brengen.",
    kop_5_juridische_toelichting: "Juridische toelichting",
    juridische_toelichting:
      "Op grond van artikel 3.1 lid 1 Omgevingswet kan een gemeentelijke omgevingsvisie worden vastgesteld.",
    juridische_houdbaarheid: 5,
    duidelijkheid_wet: "",
    eenlijnige_uitspraken: "",
    literatuur: "",
    juridische_invloed: 3,
    bereik: "",
    duur: "",
    frequentie: "",
    omvang: "",
    europees: false,
    nationaal: false,
    provinciaal: false,
    gemeentelijk: true,
    type_beleidsinstrument: "Juridisch",
    R1: true,
    R2: true,
    R3: false,
    R4: false,
    R5: false,
    R6: false,
    valt_deze_mogelijkheid_onder_een_overheidsopdracht_of_consessie_opdracht: false,
    soort_opdracht: "",
    waar_valt_het_onder: "",
    kop_6_ministappenplan: "Zelf houtbouw een plek geven in de omgevingsvisie?",
    ministappenplan:
      "In de toekomst vind je hier een stappenplan om houtbouw op te nemen in de omgevingsvisie",
    kop_7_titel_links_ministappenplan: "",
    titel_link_ministappenplan: "",
    links_ministappenplan: "",
    goed_in_combinatie_met: "",
    rechtsgebied: "Publiekrecht",
    subrechtsgebied: "Omgevingsrecht",
    citeertitel: "Omgevingswet",
    link_naar_wetsartikel: "",
    geldend_vanaf: "Nog niet inwerking getreden",
    type_document: "Wet in formele zin",
    waardeketen: "Gebouwde Omgeving",
    casus: "Houtbouw",
  },
  {
    id: "2",
    artikel: "4.159",
    circulair: true,
    titel: "Hoe een maatwerkregel over de MPG houtbouw kan stimuleren",
    kop_1_samenvatting_juridische_maatregel: "Wat zijn maatwerkregels?",
    introductie_juridische_maatregel:
      "Maatwerkregels zijn instrumenten waarmee de gemeente aanvullende regels kan stellen. Een algemene regel van het Rijk of de provincie is de basis; de maatwerkregel is een lokale uitwerking of aanscherping ervan. Maatwerkregels kunnen over verschillende onderwerpen gaan, waaronder de MilieuPrestatie Gebouwen (MPG).",
    kop_2_toepassing_juridische_maatregel:
      "Hoe kan een maatwerkregel over de MPG houtbouw stimuleren?",
    toepassing_juridische_maatregel:
      "De MPG is een objectieve maatstaf voor de duurzaamheid van een gebouw. Het geeft aan hoe milieubelastend de materialen zijn die in een gebouw zijn gebruikt. Specifiek gaat het om nieuwbouwwoningen en kantoorgebouwen. Hoe duurzamer het gebruikte materiaal, hoe lager de milieuprestatie van het gebouw, des te minder het milieu belast wordt. Dankzij de duurzaamheid van hout leidt houtbouw tot een lage MPG. Door in een bepaald gebied de MPG te verlagen, moedigt de gemeente houtbouw aan.",
    is_er_een_praktijk_voorbeeld: false,
    kop_3_uit_de_praktijk: "Uit de praktijk",
    uit_de_praktijk: "",
    voorbeeld_link_teks: "",
    voorbeeld_link: "",
    afbeelding_van_voorbeeld_link: "",
    kop_4_eisen_en_beperkingen: "Eisen aan en beperkingen van maatwerkregels",
    eisen_en_beperkingen:
      "- Maatwerkregels van de gemeente worden altijd in het omgevingsplan opgenomen;\n- Decentrale bestuursorganen mogen alleen maatwerkregels vaststellen mits zij daarvoor toestemming hebben van een hoger bestuursorgaan;\n- De huidige MPG is wettelijk vastgesteld op 0,8;\n- Een maatwerkregel over de MPG kan alleen worden vastgesteld voor nieuwbouwwoningen of voor kantoorgebouwen groter dan 100 m²;\n- Maatwerkregels moeten altijd een beleidsdoel dienen, zoals het bevorderen van de fysieke leefomgeving of verbeteren van de veiligheid.",
    kop_5_juridische_toelichting: "Juridische toelichting",
    juridische_toelichting:
      "Op grond van artikel 4.7 Ow kunnen maatwerkregels worden vastgesteld op o.a. artikel 4.159 Ow.",
    juridische_houdbaarheid: 5,
    duidelijkheid_wet: "",
    eenlijnige_uitspraken: "",
    literatuur: "",
    juridische_invloed: 3,
    bereik: "",
    duur: "",
    frequentie: "",
    omvang: "",
    europees: false,
    nationaal: false,
    provinciaal: false,
    gemeentelijk: true,
    type_beleidsinstrument: "Juridisch",
    R1: false,
    R2: true,
    R3: false,
    R4: false,
    R5: false,
    R6: false,
    valt_deze_mogelijkheid_onder_een_overheidsopdracht_of_consessie_opdracht: false,
    soort_opdracht: "",
    waar_valt_het_onder: "",
    kop_6_ministappenplan:
      "Deze maatregel is nog niet in werking getreden en nog niet toegepast",
    ministappenplan:
      "In de toekomst vind je hier een interactieve handleiding die je meeneemt in hoe je: \n- met de maatregel een project vormt en hiermee met de markt mee aan de slag kan gaan\n- intern kunt checken of het haalbaar, realistisch en het goede moment is om de maatregel toe te passen\n- de maatregel kan combineren met andere juridische, financiële en faciliterende beleidsinstrumenten, om zo meer impact te maken",
    kop_7_titel_links_ministappenplan: "",
    titel_link_ministappenplan: "",
    links_ministappenplan:
      "https://iplo.nl/regelgeving/regels-voor-activiteiten/technische-bouwactiviteit/rijksregels-bouwactiviteit/milieuprestatie-bbl/ \n\nhttps://www.metropoolregioamsterdam.nl/wp-content/uploads/2021/10/Convenant-Green-Deal-Houtbouw.pdf",
    goed_in_combinatie_met: "",
    rechtsgebied: "Publiekrecht",
    subrechtsgebied: "Omgevingsrecht",
    citeertitel: "Omgevingswet",
    link_naar_wetsartikel: "",
    geldend_vanaf: "Nog niet inwerking getreden",
    type_document: "AMvB",
    waardeketen: "Gebouwde Omgeving",
    casus: "Houtbouw",
  },
];
const collecties = [
  {
    icon: "",
    id: 0,
    title: "Lorem ipsum dolor sit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: "",
    id: 1,
    title: "Lorem ipsum dolor sit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
  {
    icon: "",
    id: 2,
    title: "Lorem ipsum dolor sit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
  {
    icon: "",
    id: 3,
    title: "Lorem ipsum dolor sit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
  {
    icon: "",
    id: 4,
    title: "Lorem ipsum dolor sit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
];

export default function CirculaireWindmolens() {
  useEffect(() => {
    localStorage.clear();
  });
  return (
    <Layout>
      <div className="text-sm pb-9 pt-9 text-greenLink">
        <Link href="/">
          <a>Home</a>
        </Link>
        <span className="px-1"> </span>

        {/*<span className="px-1"> →  </span>
         <Link href="/">
          <a>Gebouwde omgeving</a>
        </Link> 
        <span className="px-1"> → </span>*/}
      </div>
      <div className="pb-14 pt-14">
        <div className="pr-4 inline-block">
          <Image src={WindIcon} alt="Icon of Wood" width={48} />
        </div>
        <div className="text-3xl font-bold inline-block">
          Circulaire Windturbines
        </div>
      </div>
      <div>
        <div className="flex border-2 mb-4">
          <div className="w-full md:w-1/2 p-4">
            <div className="py-8">
              <div className="text-lg font-bold pb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
              <div className="pb-4">
                <ul className="list-disc pl-5">
                  <li className="text-sm">
                    <Link href="/meer-over-de-voordelen-van-houtbouw">
                      <a>consectetur adipiscing elit</a>
                    </Link>
                  </li>
                  <li className="text-sm">consectetur adipiscing elit,</li>
                  <li className="text-sm">
                    Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua.
                  </li>
                </ul>
              </div>
              <div className="bg-greenLink text-white py-2 px-4 rounded max-w-max">
                <Link href="/measures/windmolens">
                  <a className="">Verken alle maatregelen voor windmolens →</a>
                </Link>
              </div>{" "}
            </div>
          </div>
          <div className="relative w-full md:w-1/2 ">
            <Image
              src={HoutbouwHero}
              alt="Icon of Wood"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>

        <div className="flex border-2">
          <div className="relative w-full md:w-1/2">
            <Image
              src={co2Hero}
              alt="Icon of Wood"
              layout="fill"
              objectFit="contain"
            />
          </div>

          <div className="w-full md:w-1/2 p-4">
            <div className="py-8">
              <div className="text-lg font-bold pb-4">Lorem ipsum</div>
              <div className="text-sm ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </div>
            <div className="pb-4">
              <Link href="/meer-over-de-voordelen-van-windmolens">
                <a className="text-[#4099DA]">
                  Meer over de voordelen van windmolens →
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-5">
        <ActionPanel
          paragraph="Blijf wekelijks op de hoogte van nieuwe kansen binnen de
        wet- en regelgeving rond de circulaire transitie"
          buttonText="Ontvang de nieuwsbrief"
          buttonLink="/"
        />
      </div>
    </Layout>
  );
}

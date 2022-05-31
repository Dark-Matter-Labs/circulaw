import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import Layout from "../../components/layout";
import PolicyList from "../../components/policy-list";
import ActionPanel from "../../components/section-action-panel";

export default function Houtbouw() {
  return (
    <Layout className="max-w-2xl">
      <div className="py-9 text-3xl font-bold inline-block">
        Hoe CircuLaw werkt
      </div>
      <div className="">
        De klimaatcrisis is een van de grootste bedreigingen van onze tijd. Om
        (verdere) opwarming van de aarde tegen te gaan, is drastische actie
        nodig. In 2050 wil Amsterdam een volledig circulaire stad zijn.
        Juridische instrumenten spelen hierin een grote rol. Maar wet- en
        regelgeving is complexe materie. Het kost beleidsmakers veel tijd en
        energie om uit te vinden welke fiscaal-juridische instrumenten ze kunnen
        inzetten.
      </div>
      <div className="py-4">
        CircuLaw lat beleidsmakers zien welke regelgeving mogeliikheden biedt om
        nieuw. ander circulair beleid te maken.
      </div>
      <div className="">
        Geanalyseerd en geinventariseerd door juridische experts
      </div>
      <div className="">
        {/* <Image
          src={ExampleImage}
          alt="Picture of the author"
          width={500}
          height={500}
        /> */}
      </div>
      <div className="">
        In CircuLaw vind je maatregelen die beleidsmakers helpen de circulaire
        transitie te versnellen. Dat kunnen nieuwe maatregelen zijn, maar ok
        bestaande maatregelen die nog niet, of weinig worden toegepast.
        Juridische experts hebben deze maatregelen met een circulaire bril via
        een uniek proces geinventariseerd vanuit de wet- en regelgeving en
        leesbaar gemaakt voor beleidsmakers. Op dit moment vind je maatregelen
        met kansen om &apos; Houtbouw &apos; en &apos; Circulaire windturbines
        &apos; te bevorderen. In de toekomst volgen meer thema &apos; s.
      </div>
      <div className="text-2xl py-9 font-bold">Verken de maatregelen </div>
      <div className="">
        Fen maatregel is een iuridisch instrument waarmee overheden een
        beleidsdoel kunnen. vormgeven en behalen. Voorbeelden van maatregelen
        ziin subsidies, vergunningen of belastingen of ...? Fen maatregel in
        Circul aw beschriift kort:
        <ul className="list-disc pl-6">
          <li>Het onderwerp waarop de maatregel betrekking heeft</li>
          <li>
            Wat de maatregel inhoudt in zo begrijpelijk mogelijke juridische
            taal
          </li>
          <li>Hoe de maatregel kansen biedt om circulariteit te bevorderen</li>
          <li>Fisen en beperkingen aan het inzetten van de maatregel</li>
          <li>
            De iuridische bron, een inschatting van de juridische houdbaarheid y
            en mate van circulaire strategie
          </li>
        </ul>
      </div>
    </Layout>
  );
}

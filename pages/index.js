import Link from "next/link";
import Image from "next/image";
import Hero from "../components/section-hero";
import LogoCloud from "../components/section-logo-cloud";
import ActionPanel from "../components/section-action-panel";
import Layout from "/components/layout";
import SectionTypes from "/components/section-types-list";

import cycleScale from "../public/cycle-scale.png";
import seedHero from "../public/seeds.png";

export default function Index() {
  return (
    <Layout>
      <div className="flex flex-wrap items-center py-8 ml-10 mr-10">
        <div className="flex-1 w-full sm:w-2/3">
          <div className="font-bold text-4xl pb-6">
            Ontdek juridische en fiscale maatregelen om de circulaire economie
            te versnellen
          </div>
          <ul className="list-disc">
            <li className="">
              Mogelikheden .in bestaande en toekomstige wetgeving
            </li>
            <li className="">
              {" "}
              Voor beleidsmakers van gemeentes, provincies en ministeries
            </li>
            <li className="">
              In de toekomst: met handelingsperspectief om maatregelen toe te
              passen
            </li>
          </ul>
          <div className="pt-10 text-blue-500 float-right">
            <Link href="#">
              <a>Hoe het werkt →</a>
            </Link>
          </div>
        </div>
        <div className="content w-full sm:w-1/3 right-0">
          <Image src={cycleScale} alt="FIX" />
        </div>
      </div>

      <div className="flex flex-wrap items-center py-8">
        <div className="content w-full sm:w-1/3 right-0">
          <Image src={seedHero} alt="FIX" />
        </div>
        <div className="flex-1 w-full sm:w-2/3 pl-4">
          <div className="font-bold text-xl pb-6 ">Een tool in de groei</div>
          Onze juristen analyseren dag in dag uit de wet en regelgeving met een
          circulaire bril. Op dit moment verdiepen we ons in <b>
            houtbouw
          </b> en <b>circulaire windmolens</b> in de <b>gebouwde omgeving</b>.{" "}
          <br />
          <br />
          Ons doel: In de loop van het jaar binnen elke waardeketen relevante
          juridische kansen en maatregelen ontdekken
          <div className="pt-10 text-blue-500 float-right mr-20">
            <Link href="#">
              <a>Onze ambitie →</a>
            </Link>
          </div>
        </div>
      </div>
      <div className="font-bold text-3xl pb-6 pt-10">Waardeketens</div>

      <SectionTypes
        qty="4"
        title="Circulaire bouweconomie"
        description=""
        data="0"
      />

      <ActionPanel
        paragraph="Blijf wekelijks op de hoogte van nieuwe kansen binnen de
    wet- en regelgeving rond de circulaire transitie"
        buttonText="Ontvang de nieuwsbrief"
        buttonLink="/"
      />
    </Layout>
  );
}

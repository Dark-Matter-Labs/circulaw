import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/client";
import Hero from "../components/section-hero";
import LogoCloud from "../components/section-logo-cloud";
import ActionPanel from "../components/section-action-panel";
import Layout from "/components/layout";
import SectionTypes from "/components/section-types-list";

import cycleScale from "../public/cycle-scale.png";
import seedHero from "../public/seeds.png";

export default function Index() {
  const [session, loading] = useSession();

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <Layout>
      <div className="flex flex-wrap items-center py-8">
        <div className="flex-1 w-full sm:w-2/3">
          <div className="font-bold text-4xl pb-6">
            Ontdek juridische en fiscale maatregelen om de circulaire economie
            te versnellen
          </div>
          <ul>
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
          <Link href="#">
            <a>Hoe het werkt →</a>
          </Link>
        </div>
        <div className="content w-full sm:w-1/3 right-0">
          <Image src={cycleScale} alt="FIX" />
        </div>
      </div>

      <div className="flex flex-wrap items-center py-8">
        <div className="content w-full sm:w-1/3 right-0">
          <Image src={seedHero} alt="FIX" />
        </div>
        <div className="flex-1 w-full sm:w-2/3">
          <div className="font-bold text-xl pb-6">
            Ontdek juridische en fiscale maatregelen om de circulaire economie
            te versnellen
          </div>
          Onze juristen analyseren dag in dag uit de wet en regelgeving met een
          circulaire bril. Ons doel: binnen elke waardeketen relevante
          juridische kansen en maatregelen ontdekken. Op dit moment verdiepen we
          ons in <span className="font-bold">houtbouw</span> en{" "}
          <span className="font-bold">circulaire</span>
          <span className="font-bold">windmolens</span> in de gebouwde omgeving.
          In de loop van het jaar volgen er meer waardeketens en themas.
          <Link href="#">
            <a>Hoe het werkt →</a>
          </Link>
        </div>
      </div>
      <div className="font-bold text-3xl pb-6">Waardeketens</div>

      <SectionTypes
        qty="4"
        title="Circulaire bouweconomie"
        description=""
        data="0"
      />

      <SectionTypes
        qty="4"
        title="Consumptiegoederen"
        description=""
        data="0"
      />

      <SectionTypes
        qty="4"
        title="Biomassa en voedsel"
        description=""
        data=""
      />

      <SectionTypes qty="4" title="Maakindustrie" description="" data="" />

      <SectionTypes qty="4" title="Kunststoffen" description="" data="" />

      <ActionPanel
        paragraph="Blijf wekelijks op de hoogte van nieuwe kansen binnen de
    wet- en regelgeving rond de circulaire transitie"
        buttonText="Ontvang de nieuwsbrief"
        buttonLink="/"
      />
    </Layout>
  );
}

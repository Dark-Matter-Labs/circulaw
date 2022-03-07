import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/client";
import Hero from "../components/section-hero";
import LogoCloud from "../components/section-logo-cloud";
import ActionPanel from "../components/section-action-panel";
import Layout from "/components/layout";
import SectionTypes from "/components/section-types-list";

import cycleScale from "../public/cycle-scale.png";

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
          <Image src={cycleScale} alt="FIX" />
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
          In de loop van het jaar volgen er meer waardeketens en thema's.
          <Link href="#">
            <a>Hoe het werkt →</a>
          </Link>
        </div>
      </div>
      <SectionTypes qty="4" />

      <div className="">Consumptiegoederen</div>

      <div className="pl-6 italic">
        Volgt in de toekomst, blijf op de hoogte
      </div>

      <div className="">Biomassa en voedsel</div>

      <div className="pl-6 italic">
        Volgt in de toekomst, blijf op de hoogte
      </div>

      <div className="">Maakindustrie</div>

      <div className="pl-6 italic">
        Volgt in de toekomst, blijf op de hoogte
      </div>

      <div className="">Kunststoffen</div>

      <div className="pl-6 italic">
        Volgt in de toekomst, blijf op de hoogte
      </div>

      <ActionPanel
        paragraph="Blijf wekelijks op de hoogte van nieuwe kansen binnen de
    wet- en regelgeving rond de circulaire transitie"
        buttonText="Ontvang de nieuwsbrief"
        buttonLink="/"
      />
      <LogoCloud />
      {!session && (
        <>
          Not signed in <br />
          <button onClick={signIn}>Sign in</button>
        </>
      )}
      {session && (
        <>
          Signed in as {session.user.name} <br />
          <button onClick={signOut}>Sign out</button>
        </>
      )}
      <div>
        <Link href="/laws">
          <a>Go to private page</a>
        </Link>
      </div>
    </Layout>
  );
}

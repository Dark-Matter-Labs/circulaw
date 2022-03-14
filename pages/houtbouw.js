import Image from "next/image";
import Link from "next/link";
import Layout from "../components/layout";
import ActionPanel from "../components/section-action-panel";

import IconWood from "../public/icons/wood.png";

export default function Houtbouw() {
  return (
    <Layout>
      <div className="flex">
        <Link href="/blog/hello-world">
          <a>Home</a>
        </Link>
        <span className="">→</span>
        <Link href="/blog/hello-world">
          <a>Blog Post</a>
        </Link>
      </div>
      <div className=" ">
        <div className=" ">
          <Image src={IconWood} alt="Icon of Wood" width={50} height={50} />
        </div>
        <div className="text-3xl bold">Houtbouw</div>
        <div className="">
          <div className="">
            <div className="">
              Juridische en fiscale maatregelen om de transitie naar houtbouw te
              versnellen
            </div>
            <div className="">
              Mogelijkheden in bestaande en toekomstige wetgeving Voor
              beleidsmakers van gemeentes, provincies en ministeries In de
              toekomst: met handelingsperspectief om maatregelen toe te passen
            </div>
            <div>Verken alle maatregelen in de houtbouw →</div>
          </div>
          <div>
            <Image src={IconWood} alt="Icon of Wood" width={50} height={50} />
          </div>
        </div>
        <div className="">
          <div>
            <Image src={IconWood} alt="Icon of Wood" width={50} height={50} />
          </div>
          <div className="">
            <div className="">
              Houtbouw voor het behalen van klimaatdoelstellingen
            </div>
            <div className="">
              Bouwen met hout in plaats van beton heeft de grootste
              milieu-impactreductie van alle circulaire bouwstrategieën.  10%
              meer bouwen met hout in plaats van beton zou de totale
              milieubelasting van bouwmaterialen in nederland met 5% verlagen.
            </div>
            <div>Meer over de voordelen van houtbouw →</div>
          </div>
        </div>

        <div className="">
          <div className="">Uitgelichte maatregelen rond houtbouw</div>List of
          Laws
        </div>

        <div className=""></div>

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

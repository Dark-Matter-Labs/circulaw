import Image from "next/image";
import Link from "next/link";
import Layout from "../components/layout";
import ActionPanel from "../components/section-action-panel";

import IconWood from "../public/icons/wood.png";
import CollectionIcon from "../public/icons/collection.png";

const collecties = [
  {
    icon: "",
    title: "Hoog op de R-ladder!",
    description:
      "Deze maatregelen volgen de strategie R1 Refuse & Rethink en R2 Reduce op de  R-ladder.",
  },
  {
    icon: "",
    title: "Maatregelen die juridisch goed stand houden",
    description:
      "Deze maatregelen hebben een hoge ‘jurdische houdbaarheid’. Er bestaat bijvoorbeeld al jurispredentie over of  andere organisatie pastten de maatregel al toe.",
  },
  {
    icon: "",
    title: "Gewaagde maatregelen voor innovators",
    description:
      "Uitdagende maatregelen waar je je tanden in kunt zetten. Ze staan hoog op de R-ladder, maar ze zijn nog niet eerder toegepast.",
  },
  {
    icon: "",
    title: "Maatregelen en mogelijkheden rond aanbesteding",
    description:
      "Deze juridische kansen en maatregelen hebben we voor je gevonden binnen de Aanbestedingswet",
  },
  {
    icon: "",
    title: "Mogelijkheden binnen de nieuwe omgevingswet",
    description:
      "Deze juridische kansen en maatregelen hebben we voor je gevonden binnen de nieuwe Omgevingswet",
  },
];

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

        <div className="">
          <div>
            <div>
              <Image
                src={CollectionIcon}
                alt="Icon indocating a collection"
                width={50}
                height={50}
              />
              <div className="text-2xl bold py-6">
                COLLECTIES MAATREGELEN BINNEN HOUTBOUW
              </div>
            </div>

            <ul
              role="list"
              className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 w-full"
            >
              {collecties.map((file) => (
                <li key={file.source} className="relative border bg-[#E6F2FA]">
                  <div className="group block w-full p-4">
                    <div className="">
                      <button
                        type="button"
                        className="absolute inset-0 focus:outline-none"
                      >
                        <span className="sr-only">
                          View details for {file.title}
                        </span>
                      </button>
                    </div>
                    <p className="mt-2 block text-sm font-medium pointer-events-none">
                      {file.title}
                    </p>
                    <p className="block text-sm font-medium text-gray-500 pointer-events-none">
                      {file.description}
                    </p>
                    <Link href="#">
                      <a>Bekijk de maatregelen →</a>
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

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

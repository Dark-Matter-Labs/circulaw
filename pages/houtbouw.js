import Image from "next/image";
import Link from "next/link";
import Layout from "../components/layout";
import ActionPanel from "../components/section-action-panel";

import WoodIcon from "../public/icons/wood.png";
import CollectionIcon from "../public/icons/collection.png";

import PlaceHolder from "../public/placeholder.png";
import HoutbouwHero from "../public/houtbouwHero.png";
import co2Hero from "../public/illustration-co2.png";

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
      <div className="pb-9 pt-9 text-[#4099DA]">
        <Link href="/">
          <a>Home</a>
        </Link>
        <span className="px-1"> → </span>
        <Link href="/">
          <a> Gebouwde omgeving </a>
        </Link>
        <span className="px-1"> → </span>
      </div>
      <div className="pb-4">
        <div className="pr-4 inline-block">
          <Image src={WoodIcon} alt="Icon of Wood" width={48} />
        </div>
        <div className="text-3xl bold inline-block">Houtbouw</div>
      </div>
      <div>
        <div className="flex border-2 mb-4">
          <div className="w-full md:w-2/3 p-4">
            <div className="">
              <div className="text-lg font-bold pb-4">
                Juridische en fiscale maatregelen om de transitie naar houtbouw
                te versnellen
              </div>
              <div className="pb-4">
                <ul className="list-disc pl-5">
                  <li className="text-sm">
                    Mogelijkheden in bestaande en toekomstige wetgeving
                  </li>
                  <li className="text-sm">
                    Voor beleidsmakers van gemeentes, provincies en ministeries
                  </li>
                  <li className="text-sm">
                    In de toekomst: met handelingsperspectief om maatregelen toe
                    te passen
                  </li>
                </ul>
              </div>
              <Link href="/laws">
                <a className="bg-[#4099DA] text-white py-2 px-4 rounded">
                  Verken alle maatregelen in de houtbouw →
                </a>
              </Link>
            </div>
          </div>
          <div className="relative w-full md:w-1/3 ">
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
              objectFit="cover"
            />
          </div>

          <div className="w-full md:w-2/3 p-4">
            <div className="justify-between">
              <div className="text-lg font-bold pb-4">
                Houtbouw voor het behalen van klimaatdoelstellingen
              </div>
              <div className="text-sm pb-4">
                Bouwen met hout in plaats van beton heeft de grootste
                milieu-impactreductie van alle circulaire bouwstrategieën. meer
                bouwen met hout in plaats van beton zou de totale
                milieubelasting van bouwmaterialen in nederland met 5% verlagen.
              </div>
            </div>
            <div>
              <Link href="/laws">
                <a className="text-[#4099DA]">
                  Meer over de voordelen van houtbouw →
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-5">
        <div className="pt-6">
          <div>
            <div className="inline-block pr-4">
              <Image
                src={CollectionIcon}
                alt="Icon indocating a collection"
                width={20}
                height={20}
              />
              <div className="text-xl font-bold pl-2 py-6 inline-block">
                COLLECTIES MAATREGELEN BINNEN HOUTBOUW
              </div>
            </div>

            <ul
              role="list"
              className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 sm:gap-x-6 pb-9 flex flex-col justify-between"
            >
              {collecties.map((file) => (
                <li key={file.source} className="static border bg-[#E6F2FA] ">
                  <div className="w-full p-4">
                    <div className="relative">
                      <div className="absolute left-0 top-0 h-16 w-8">
                        <Image
                          src={CollectionIcon}
                          alt="Picture of the author"
                        />
                      </div>

                      <div className="absolute right-0 top-0 h-16 w-8">
                        <Image
                          src={WoodIcon}
                          alt="Icon indocating a collection"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="group static w-full p-4">
                    <p className="mt-2 block text-md font-medium pointer-events-none pb-4">
                      {file.title}
                    </p>
                    <p className="block text-sm text-gray-500 pointer-events-none">
                      {file.description}
                    </p>
                    <div className="pt-4 static">
                      <Link href="/laws">
                        <a className=" text-sm bg-[#4099DA] text-white py-2 px-4 rounded inline-block bottom-4">
                          Bekijk de maatregelen →
                        </a>
                      </Link>
                    </div>
                  </div>
                </li>
              ))}
              <li className="relative border ">
                <div className="flex w-full h-full p-4 justify-center items-center">
                  <Link href="/blog/hello-world">
                    <a className="text-sm text-[#4099DA] ">
                      Verken alle maatregelen in de houtbouw →
                    </a>
                  </Link>
                </div>
              </li>
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

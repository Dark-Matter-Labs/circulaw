import Image from "next/image";
import Link from "next/link";
import Layout from "../components/layout";
import ActionPanel from "../components/section-action-panel";
import Button from "../components/button";

import IconWood from "../public/icons/wood.png";
import CollectionIcon from "../public/icons/collection.png";
import houtbouwHero from "../public/houtbouw-hero.png";
import co2Hero from "../public/co2.png";

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
        <Image src={IconWood} alt="Icon of Wood" width={50} height={50} />
      </div>
      <div className="text-3xl bold">Houtbouw</div>
      <div className="relative bg-white pt-16 pb-32 overflow-hidden">
        <div className="relative">
          <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
            <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
              <div>
                <div className="mt-6">
                  <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                    Stay on top of customer support
                  </h2>
                  <p className="mt-4 text-lg text-gray-500">
                    Mogelijkheden in bestaande en toekomstige wetgeving Voor
                    beleidsmakers van gemeentes, provincies en ministeries In de
                    toekomst: met handelingsperspectief om maatregelen toe te
                    passen
                  </p>
                  <Button
                    text="Verken  alle maatregelen in de houtbouw"
                    href="/"
                  />
                </div>
              </div>
              <div className="mt-8 border-t border-gray-200 pt-6"></div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
              <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                <div className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none">
                  <Image
                    src={houtbouwHero}
                    alt="Picture of the author"
                    width={500}
                    height={500}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-24">
          <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
            <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
              <div>
                <div className="mt-6">
                  <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                    Houtbouw voor het behalen van klimaatdoelstellingen{" "}
                  </h2>
                  <p className="mt-4 text-lg text-gray-500">
                    Bouwen met hout in plaats van beton heeft de grootste
                    milieu-impactreductie van alle circulaire bouwstrategieën.
                     10% meer bouwen met hout in plaats van beton zou de totale
                    milieubelasting van bouwmaterialen in nederland met 5%
                    verlagen.
                  </p>
                  <Button
                    text="Verken  alle maatregelen in de houtbouw"
                    href="/"
                  />
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
              <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                <div className="w-full  ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none">
                  <Image src={co2Hero} alt="Picture of the author" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" ">
        <div className="">
          <div className="">Uitgelichte maatregelen rond houtbouw</div>
          List of Laws
        </div>

        <div className="">
          <div>
            <ul
              role="list"
              className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 w-full"
            >
              {collecties.map((file, i) => (
                <li key={i} className="relative border bg-[#E6F2FA]">
                  <div className="group block w-full p-4">
                    <p className="mt-2 block text-sm font-medium pointer-events-none">
                      {file.title}
                    </p>
                    <p className="block text-sm font-medium text-gray-500 pointer-events-none">
                      {file.description}
                    </p>
                    <div className="bottom-0">
                      <Link href="#">
                        <a>Bekijk de maatregelen →</a>
                      </Link>
                    </div>
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

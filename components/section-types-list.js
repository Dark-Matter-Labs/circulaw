import Link from "next/link";
import Image from "next/image";

import HoutbouwHero from "../public/houtbouw.png";
import WindmolensHero from "../public/turbine.png";
import OverigeHero from "../public/biennekort.png";

import windIcon from "../public/icons/wind.png";
import cityIcon from "../public/icons/city.png";
import woodIcon from "../public/icons/wood.png";

const types = [
  {
    heroImage: HoutbouwHero,
    title: "Houtbouw stimuleren",
    description:
      "Meer bouwen met hout heeft grote invloed op het klimaat. Daarom vind je hier maatregelen om houtbouw te stimuleren en een leidraad voor de toepassing van een aantal van die maatregelen",
    buttonText: "Meer over houtbouw",
    href: "/houtbouw",
  },
  {
    heroImage: WindmolensHero,
    title: "Circulaire windturbines",
    description:
      "Windenergie speelt een cruciale rol in onze duurzame energie-ambities. Daarom vind je hier maatregelen die de inzet van windturbines bevorderen en die sturen op ontwikkeling en inzet van windturbines die op zich zelf ook circulair zijn.",
    buttonText: "Meer over windturbines",
    href: "/circulaire-windmolens",
  },
  {
    heroImage: OverigeHero,
    title: "",
    description: "Jouw thema hier?",
    buttonText: "",
    href: "#",
  },
];

export default function SectionTypes() {
  return (
    <div className="pb-20">
      <ul
        role="list"
        className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-10"
      >
        {types.map((file) => (
          <li key={file.title} className="relative bg-white w-full">
            <div className="object-cover pointer-events-none">
              <Image
                src={file.heroImage}
                layout="responsive"
                alt="Picture of the case"
              />
            </div>
            <div className="group block w-full p-4 bg-white px-10">
              <div className="flex"></div>
              <div className="inline-block">
                <h3 className="mt-2 block text-black pointer-events-none pb-4">
                  {file.title}
                </h3>
              </div>
              <p className="card-body block text-black pointer-events-none pb-4">
                {file.description}
              </p>
              {file.buttonText && (
                <button
                  type="button"
                  className="inline-flex rounded-full items-center px-4 py-2 border border-green1 button text-green1 bg-transparent hover:bg-greenLink focus:outline-none "
                >
                  <Link href={file.href}>
                    <a>{file.buttonText} →</a>
                  </Link>
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

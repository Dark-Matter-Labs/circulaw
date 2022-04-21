import Link from "next/link";
import Image from "next/image";
import { Fragment } from "react";

import Placeholder from "../public/placeholder.png";
import HoutbouwHero from "../public/houtbouw-hero.png";
import WindmolensHero from "../public/windmolens-hero.png";
import OverigeHero from "../public/overige-hero.png";

import windIcon from "../public/icons/wind.png";
import cityIcon from "../public/icons/city.png";
import woodIcon from "../public/icons/wood.png";

const types = [
  {
    heroImage: HoutbouwHero,
    icon: woodIcon,
    count: "77",
    title: "Houtbouw",
    description:
      "Ontdek de juridische kansen en maatregelen die de transitie naar houtbouw kunnen versnellen",
    buttonText: "Meer over houtbouw",
    href: "/houtbouw",
    url: "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
    active: "true",
  },
  {
    heroImage: WindmolensHero,
    icon: windIcon,
    count: "00",
    title: "Circulaire windmolens",
    description:
      "Onze juristen brengen op dit moment de kansen en maatregelen in de wetgeving rond circulaire windmolens in kaart. Binnenkort",
    buttonText: "Bekijk de maatregelen",
    href: "#",
    url: "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
    active: "false",
  },
  {
    heroImage: OverigeHero,
    icon: cityIcon,
    count: "17",
    title: "Overige maatregelen circulaire bouweconomie",
    description:
      "Deze maatregelen zijn ook in de de circulaire bouweconomie toepasbaar",
    buttonText: "Bekijk de maatregelen",
    href: "#",
    url: "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
    active: "true",
  },
];

export default function SectionTypes({ data, qty, title, description }) {
  if ({ data } != null) {
    return (
      <div className="pb-20">
        <div className="text-2xl bold py-6">{title}</div>
        <ul
          role="list"
          className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 w-full"
        >
          {types.map((file) => (
            <li key={file.source} className="relative border">
              <div
                c
                className="object-cover pointer-events-none group-hover:opacity-75"
              >
                <Image
                  src={file.heroImage}
                  alt="Picture of the case"
                  width={382}
                  height={248}
                />
              </div>
              <div className="group block w-full p-4">
                <div className="flex"></div>
                <div className="inline-block">
                  <div className="inline-block">
                    <Image src={file.icon} alt="Picture of the author" />
                  </div>
                  <div className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none pb-4">
                    {file.title} ({file.count})
                  </div>
                </div>
                <p className="block text-sm  text-gray-500 pointer-events-none pb-4">
                  {file.description}
                </p>
                <Link href={file.href}>
                  <a>{file.buttonText} →</a>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  if ({ data } === null) {
    return (
      <>
        <div className="text-2xl bold py-6">{title}</div>

        <div className="pl-6 italic">
          Volgt in de toekomst, blijf op de hoogte
        </div>
      </>
    );
  } else {
    return <></>;
  }
}

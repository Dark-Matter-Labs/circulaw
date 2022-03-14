import Link from "next/link";
import Image from "next/image";
import { Fragment } from "react";

import Placeholder from "../public/placeholder.png";
import HoutbouwHero from "../public/houtbouw-hero.png";
import WindmolensHero from "../public/windmolens-hero.png";
import OverigeHero from "../public/overige-hero.png";

const types = [
  {
    heroImage: "/$`{HoutbouwHero}`",
    icon: "",
    title: "Houtbouw",
    description:
      "Ontdek de juridische kansen en maatregelen die de transitie naar houtbouw kunnen versnellen",
    url: "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
    active: "true",
  },
  {
    heroImage: "/$`{WindmolensHero}`",
    icon: "",
    title: "Circulaire windmolens",
    description:
      "Onze juristen brengen op dit moment de kansen en maatregelen in de wetgeving rond circulaire windmolens in kaart. Binnenkort",
    url: "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
    active: "false",
  },
  {
    heroImage: "/$`{OverigeHero}`",
    icon: "",
    title: "Overige maatregelen circulaire bouweconomie",
    description:
      "Deze maatregelen zijn ook in de de circulaire bouweconomie toepasbaar",
    url: "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
    active: "true",
  },
];

export default function SectionTypes({ data, qty, title, description }) {
  if ({ data } != null) {
    return (
      <>
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
                  alt="Picture of the author"
                  width={500}
                  height={500}
                />
              </div>
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
                <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">
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
      </>
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

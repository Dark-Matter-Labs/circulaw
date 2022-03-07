import Link from "next/link";
import Image from "next/image";
import { Fragment } from "react";

import Placeholder from "../public/placeholder.png";
const types = [
  {
    heroImage: "",

    icon: "{Placeholder}",

    title: "Houtbouw",
    description:
      "Ontdek de juridische kansen en maatregelen die de transitie naar houtbouw kunnen versnellen",

    url: "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
    active: "true",
  },
  {
    heroImage: "{Placeholder}",
    icon: "",

    title: "Circulaire windmolens",
    description:
      "Onze juristen brengen op dit moment de kansen en maatregelen in de wetgeving rond circulaire windmolens in kaart. Binnenkort",
    url: "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
    active: "false",
  },
  {
    heroImage: "{Placeholder}",
    icon: "",

    title: "Overige maatregelen circulaire bouweconomie",
    description:
      "Deze maatregelen zijn ook in de de circulaire bouweconomie toepasbaar",
    url: "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
    active: "true",
  },
];

export default function SectionTypes() {
  return (
    <>
      <div className="font-bold text-xl pb-6">Waardeketens</div>
      <div className="text-l pb-6">
        Circulaire bouweconomie: juridische kansen en maatregelen
      </div>
      <ul
        role="list"
        className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
      >
        {types.map((file) => (
          <li key={file.source} className="relative border">
            <div className="group block w-full">
              <div
                c
                className="object-cover pointer-events-none group-hover:opacity-75"
              >
                <Image src={Placeholder} alt="Picture of the author" />
              </div>
              <div className="">
                <button
                  type="button"
                  className="absolute inset-0 focus:outline-none"
                >
                  <span className="sr-only">View details for {file.title}</span>
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

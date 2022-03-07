import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/client";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import Image from "next/image";

import logo from "../public/logo.png";

const waardeketens = [
  { name: "Gebouwde omgeving", description: "description", href: "#" },
  { name: "Houtbouw", description: "description", href: "#" },
  { name: "Circulaire windmolens", description: "description", href: "#" },
  { name: "Overige maatregelen", description: "description", href: "#" },
  { name: "Consumptiegoederen", description: "description", href: "#" },
  { name: "Biomassa en voedsel", description: "description", href: "#" },
  { name: "Maakindustrie", description: "description", href: "#" },
  { name: "Kunststoffen", description: "description", href: "#" },
];

const juridischeThema = [
  { name: "Fysieke leefomgeving", description: "description", href: "#" },
  { name: "Aanbestedingen", description: "description", href: "#" },
  { name: "Bouwen", description: "description", href: "#" },
  { name: "Gronduitgifte", description: "description", href: "#" },
];

const voorbeelden = [{ name: "name", description: "description", href: "#" }];

export default function Nav() {
  const [session, loading] = useSession();

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="flex border-b-4 inset-x-0 top-0 p-5 sm:p-9">
      <div className="flex-1">
        <div className="content">
          <Image src={logo} alt="Picture of the author" />
        </div>
        <div className="content right-0">
          <Link href="/laws">
            <a className="px-3">Waardeketens</a>
          </Link>
          <Link href="/laws">
            <a className="px-3">Juridische Thema</a>
          </Link>
          <Link href="/laws">
            <a className="px-3">Voorbeelden</a>
          </Link>
        </div>
      </div>
      <div className="flex-1 right-0">
        <div className="content">
          <Link href="#">
            <a className="px-3">Hoe het werkt</a>
          </Link>
          <Link href="#">
            <a className="px-3">Blog</a>
          </Link>
          <Link href="#">
            <a className="px-3">Contact</a>
          </Link>
        </div>
        <div className="content">
          SearchIdon
          <input type="search" id="search" name="search" />
          <input type="submit" value="Submit" />
        </div>
      </div>
    </div>
  );
}

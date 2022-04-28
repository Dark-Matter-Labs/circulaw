import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/client";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import Image from "next/image";

import logo from "../public/logo.png";

const waardeketens = [
  {
    name: "Gebouwde omgeving",
    description: "description",
    href: "/gebouwde-omgeving",
  },
  { name: "Houtbouw", description: "description", href: "/houtbouw" },
  {
    name: "Circulaire windmolens",
    description: "description",
    href: "/circulaire-windmolens",
  },
  {
    name: "Overige maatregelen",
    description: "description",
    href: "/overige-maatregelen",
  },
  {
    name: "Consumptiegoederen",
    description: "description",
    href: "/consumptiegoederen",
  },
  {
    name: "Biomassa en voedsel",
    description: "description",
    href: "/biomassa-en-voedsel",
  },
  { name: "Maakindustrie", description: "description", href: "/maakindustrie" },
  { name: "Kunststoffen", description: "description", href: "/kunststoffen" },
];

const juridischeThema = [
  {
    name: "Fysieke leefomgeving",
    description: "description",
    href: "/fysieke-leefomgeving",
  },
  {
    name: "Aanbestedingen",
    description: "description",
    href: "/aanbestedingen",
  },
  { name: "Bouwen", description: "description", href: "/bouwen" },
  { name: "Gronduitgifte", description: "description", href: "/gronduitgifte" },
];

const voorbeelden = [{ name: "name", description: "description", href: "#" }];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Nav() {
  const [session, loading] = useSession();

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="flex border-b-4 inset-x-0 top-0 p-5 sm:p-9">
      <div className="flex-1">
        <div className="content ">
          <Link href="/">
            <a>
              <Image
                src={logo}
                layout="fixed"
                width="282px"
                height="64px"
                alt="Juridische Tool Logo"
              />
            </a>
          </Link>
        </div>
        <div className="content right-0">
          <Popover className="inline-block relative px-3">
            {({ open }) => (
              <>
                <Popover.Button
                  className={classNames(
                    open ? "text-gray-900" : "text-gray-500",
                    "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  )}
                >
                  <span>Waardeketens</span>
                  <ChevronDownIcon
                    className={classNames(
                      open ? "text-gray-600" : "text-gray-400",
                      "ml-2 h-5 w-5 group-hover:text-gray-500"
                    )}
                    aria-hidden="true"
                  />
                </Popover.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute z-10  transform  mt-3 px-2 w-screen max-w-xs sm:px-0">
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                      <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                        {waardeketens.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="-m-3 p-3 block rounded-md hover:bg-gray-50 transition ease-in-out duration-150"
                          >
                            <p className="text-base font-medium text-gray-900">
                              {item.name}
                            </p>
                          </a>
                        ))}
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
        </div>
      </div>
      <div className="flex-1">
        <div className="content float-right mr-40 mt-10">
          <Link href="#">
            <a className="px-3">Hoe het werkt</a>
          </Link>
          <Link href="#">
            <a className="px-3">Over ons</a>
          </Link>
          <Link href="/blog">
            <a className="px-3">Blog</a>
          </Link>
          <Link href="/contact">
            <a className="px-3">Contact</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

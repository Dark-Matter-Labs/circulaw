import Link from "next/link";
import Image from "next/image";
import { Fragment } from "react";
import { Popover, Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon, SearchIcon } from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";

import CirculawLogo from "../public/circulaw.png";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const waardeketens = [
  {
    name: "Gebouwde omgeving",
    description: "description",
    href: "/gebouwde-omgeving",
    className: "",
  },
  {
    name: "Houtbouw",
    description: "description",
    href: "/houtbouw",
    className: "pl-8 font-normal",
  },
  {
    name: "Circulaire windmolens",
    description: "description",
    href: "/circulaire-windmolens",
    className: "pl-8 font-normal",
  },
  {
    name: "Overige maatregelen",
    description: "description",
    href: "/overige-maatregelen",
    className: "pl-8 font-normal text-gray-400",
  },
  {
    name: "Consumptiegoederen",
    description: "description",
    href: "/consumptiegoederen",
    className: "",
  },
  {
    name: "Biomassa en voedsel",
    description: "description",
    href: "/biomassa-en-voedsel",
    className: "",
  },
  {
    name: "Maakindustrie",
    description: "description",
    href: "/maakindustrie",
    className: "",
  },
  {
    name: "Kunststoffen",
    description: "description",
    href: "/kunststoffen",
    className: "",
  },
];

const voorbeelden = [{ name: "name", description: "description", href: "#" }];

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="bg-[#4099DA] sm:bg-white max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-white ">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className=" flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <div className="w-48">
                    <Link href="/">
                      <a>
                        {" "}
                        <Image src={CirculawLogo} alt="Picture of the author" />
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <Link href="#">
                    <a
                      href="#"
                      className="text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium"
                    >
                      Hoe het werkt
                    </a>
                  </Link>
                  <Link href="#">
                    <a className="text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium">
                      Over ons
                    </a>
                  </Link>

                  <Link href="/blog">
                    <a className="text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium">
                      Blog
                    </a>
                  </Link>
                  <Link href="/contact">
                    <a className="text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium">
                      Contact
                    </a>
                  </Link>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button type="button" className="p-1 rounded-full text-white">
                  <span className="sr-only">Search</span>
                  <Link href="/search">
                    <a>
                      <SearchIcon className="h-6 w-6" aria-hidden="true" />
                    </a>
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div className="flex inset-x-0 top-0 p-5 sm:p-9 invisible sm:visible hidden sm:inline">
            <div className="flex-1 max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
              <div className="content right-0">
                <div className="">
                  <Popover className="inline-block relative ">
                    {({ open }) => (
                      <>
                        <Popover.Button
                          className={classNames(
                            open ? "text-gray-900" : "text-gray-500",
                            "group bg-white rounded-md inline-flex items-center text-base font-medium"
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
                          <Popover.Panel className="absolute z-10  transform w-screen max-w-xs sm:px-0">
                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                              <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                {waardeketens.map((item) => (
                                  <a
                                    key={item.name}
                                    href={item.href}
                                    className="-m-3 p-3  block rounded-md hover:bg-gray-50 transition ease-in-out duration-150"
                                  >
                                    <p
                                      className={`text-base font-medium text-gray-900 ${item.className}`}
                                    >
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
                  <div className="py-3 px-4 bg-slate-500">
                    ' search'
                    <input type="text" name="search" id="search" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="pt-2 pb-4 ">
              <Disclosure.Button
                as="a"
                href="#"
                className="border-transparent text-gray-900 border border-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2  text-base font-medium"
              >
                MAATREGELEN
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/gebouwde-omgeving"
                className="border-transparent text-gray-900 border border-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-5  text-base font-medium"
              >
                Gebouwde omgeving
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/houtbouw"
                className="border-transparent text-gray-900 border border-gray-500 pl-8 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-5  text-base"
              >
                Houtbouw
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="border-transparent text-gray-400 border border-gray-500 pl-8 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-5 text-base"
              >
                Windmolens (coming soon)
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/consumptiegoederen"
                className="border-transparent text-gray-400 border border-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-5  text-base font-medium"
              >
                Consumptoegoederen
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/biomassa-en-voedsel"
                className="border-transparent text-gray-400 border border-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-5  text-base font-medium"
              >
                Biomassa en voedsel
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/maakindustrie"
                className="border-transparent text-gray-400 border border-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-5  text-base font-medium"
              >
                Maakindustrie
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="border-transparent text-gray-400 border border-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-5  text-base font-medium"
              >
                Kunststoffen
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/kunststoffen"
                className="border-transparent text-black border border-gray-900 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2  text-base font-medi5m"
              >
                HOE HET WERKT
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="border-transparent text-black border border-gray-900 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2  text-base font-medi5m"
              >
                OVER ONS
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/contact"
                className="border-transparent text-black border border-gray-900 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2  text-base font-medi5m"
              >
                CONTACT
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

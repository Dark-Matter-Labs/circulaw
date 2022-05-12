import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import React from "react";
import Link from "next/link";

export default function ToolTips(props) {
  const [open, setOpen] = useState(true);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
                      <button
                        type="button"
                        className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                        onClick={() => setOpen(false)}
                      >
                        <span className="sr-only">Close panel</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                    <div className="px-4 sm:px-6">
                      <Dialog.Title className="text-lg font-medium text-gray-900">
                        {" "}
                        Panel title{" "}
                      </Dialog.Title>
                    </div>
                    <div className="relative mt-6 flex-1 px-4 sm:px-6">
                      {/* Replace with your content */}
                      <div className="absolute inset-0 px-4 sm:px-6">
                        <div
                          className="h-full border-2 border-dashed border-gray-200"
                          aria-hidden="true"
                        />
                      </div>
                      {/* /End replace */}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

{
  /* export default function Tooltip(props) {
  return (
    <div className="relative flex flex-col items-center group">
      <svg
        className="text-gray-300 w-5 h-5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
          clipRule="evenodd"
        />
      </svg>
      <div className="absolute bottom-0 right-0 flex flex-col items-center hidden mb-6 group-hover:flex">
        <span className="relative z-10 p-2 w-96 text-xs leading-none text-white bg-black shadow-lg ">
          <div className="text-left">
            {props.data === "" ? (
              <>
                De juridische invloed zegt iets over de grootte van de
                maatregel. Het is opgebouwd uit vier elementen:
                <br />
                <ul>
                  <li> - Bereik</li>
                  <li> - Duur</li>
                  <li> - Frequentie</li>
                  <li> - Omvang</li>
                </ul>
                <br />
                Elk element krijgt een eigen score tussen 1 - 5. De gemiddelden
                daarvan bepalen de waardering voor de juridische invloed: 1
                (laag) t/m 5 (hoog).
              </>
            ) : (
              <>
                <div>
                  <p>
                    Het juridisch afbreukrisico is opgebouwd uit een analyse
                    waar vijf elementen gewaardeerd worden met een score tussen
                    1 (laag) – 5 (hoog):
                  </p>
                  <br />
                  <br />
                  <table>
                    <tr>
                      <th>Element</th>
                      <th>Score</th>
                    </tr>
                    <tr>
                      <td>De wet is redelijk duidelijk </td>
                      <td>2</td>
                    </tr>
                    <tr>
                      <td>
                        Er is nog geen jurisprudentie beschikbaar over de
                        maatrege
                      </td>
                      <td>5</td>
                    </tr>
                    <tr>
                      <td>De maatregel is redelijk complex</td>
                      <td>3</td>
                    </tr>
                    <tr>
                      <td>De kans op schadeclaims is relatief laag</td>
                      <td>2</td>
                    </tr>
                    <tr>
                      <td>Niet-juridische beoordeling</td>
                      <td>Niet relevant</td>
                    </tr>
                  </table>
                </div>
              </>
            )}
          </div>
        </span>
        <div className="w-3 h-3 -mt-2 rotate-45 bg-black"></div>
      </div>
    </div>
  );
} */
}

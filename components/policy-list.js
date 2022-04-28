import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import IconWood from "../public/icons/wood.png";

export default function PolicyList(props) {
  const [searchValue, setSearchValue] = useState("");
  let lawData = [];
  if (props.data) {
    lawData = props.data.filter((lawData) => {
      const searchContent =
        lawData.titel + lawData.rechtsgebied + lawData.citeertitel;
      return searchContent.toLowerCase().includes(searchValue.toLowerCase());
    });
  }

  return (
    <>
      <div className="py-5 relative max-w-lg">
        <input
          aria-label="Search"
          type="text"
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search"
          className="block w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-md dark:border-gray-900 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:text-gray-100"
        />
        <svg
          className="py-5 absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-300"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      <div className="">
        {lawData.length === 0 && "No Laws found."}

        {lawData.map((lawData, lawDataIdx) => {
          const {
            id,
            titel,
            casus,
            subrechtsgebied,
            is_er_een_praktijk_voorbeeld,
            europees,
            nationaal,
            provinciaal,
            waterschappen,
            gemeentelijk,
            introductie_juridische_maatregel,
            juridische_invloed,
            juridische_houdbaarheid,
            R1,
            R2,
            R3,
            R4,
            R5,
            R6,
          } = lawData;
          return (
            <div key={lawDataIdx} className="block py-5">
              <div className="">
                <div className="inline-block">
                  <Image src={IconWood} alt="Icon of Wood" />
                </div>
                <span className="inline-block pl-4">{casus}</span>
              </div>
              <div className="block my-1">
                <Link href={"/measures/" + id} key={lawDataIdx}>
                  <a className="underline text-lg font-semibold no-underline">
                    {titel}{" "}
                    {is_er_een_praktijk_voorbeeld && (
                      <span className="p-1 text-normal rounded text-base bg-red-200 no-underline">
                        Voorbeeld
                      </span>
                    )}
                  </a>
                </Link>
              </div>
              <div className="block">
                {europees && <span>Europees </span>}
                {nationaal && <span>Nationaal </span>}
                {provinciaal && <span>Provinciaal </span>}
                {waterschappen && <span>Waterschappen </span>}
                {gemeentelijk && <span>Gemeentelijk</span>}
              </div>
              <div className="block">{introductie_juridische_maatregel}</div>

              <div className="flex space-x-8">
                <div className="flex-2 mr-5 text-normal text-base text-gray-400">
                  Juridische impact:{" "}
                  <span className="block-inline font-semibold text-base text-gray-900">
                    {juridische_invloed}
                  </span>
                </div>

                <div className="flex-2 mr-5 text-normal text-base text-gray-400">
                  Juridische houdbaarheid:{" "}
                  <span className="block-inline font-semibold text-base text-gray-900">
                    {juridische_houdbaarheid}
                  </span>
                </div>
                <div className="flex-2 mr-5 text-normal text-base text-gray-400">
                  R-ladder:{" "}
                  <span className="block-inline font-semibold text-base text-gray-900">
                    {R1 && <span>R1 </span>}
                    {R2 && <span>R2 </span>}
                    {R3 && <span>R3 </span>}
                    {R4 && <span>R4 </span>}
                    {R5 && <span>R5 </span>}
                    {R6 && <span>R6</span>}
                  </span>
                </div>
              </div>

              <div className="flex space-x-8">
                <div className="p-1 text-normal rounded text-base bg-gray-200">
                  {subrechtsgebied}
                </div>
              </div>
            </div>
          );
        })}

        <div></div>
      </div>
    </>
  );
}

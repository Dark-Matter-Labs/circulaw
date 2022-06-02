import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { SearchIcon } from "@heroicons/react/outline";

import IconWood from "../public/icons/wood.png";

export default function PolicyList(props) {
  const [searchValue, setSearchValue] = useState("");
  let lawData = [];
  if (props.data) {
    lawData = props.data.filter((lawData) => {
      const searchContent =
        lawData.titel +
        lawData.introductie_juridische_maatregel +
        lawData.eisen_en_beperkingen +
        lawData.kop_1_samenvatting_juridische_maatregel +
        lawData.kop_2_toepassing_juridische_maatregel +
        lawData.toepassing_juridische_maatregel +
        lawData.kop_3_uit_de_praktijk +
        lawData.uit_de_praktijk +
        lawData.subrechtsgebied +
        lawData.artikel +
        lawData.citeertitel;
      return searchContent.toLowerCase().includes(searchValue.toLowerCase());
    });
  }

  return (
    <>
      <div className="relative">
        <div>
          <span className="inline-block ">Zoek in houtbouwmaatregelen</span>
        </div>
        <div className="w-96 inline-block py-4 mb-10 px-4 border-2 border-black">
          <div className="flex">
            <SearchIcon className="h-6 w-6" aria-hidden="true" />
            <input
              onChange={(e) => setSearchValue(e.target.value)}
              type="search"
              name="search"
              id="search"
              placeholder="Zoek op trefwoord"
              className="block w-full"
            />
          </div>
        </div>
      </div>

      <div className="">
        {lawData.length === 0 && (
          <div>
            <span>
              <b>0</b> maatregelen gevonden voor <b>{searchValue}</b> in{" "}
              <b>{props.casus}</b>{" "}
            </span>
          </div>
        )}

        {searchValue !== "" && lawData.length > 1 && (
          <div>
            <span>
              <b>{lawData.length}</b> maatregelen gevonden voor{" "}
              <b>{searchValue}</b> in <b>{props.casus}</b>{" "}
            </span>
          </div>
        )}

        {searchValue !== "" && lawData.length === 1 && (
          <div>
            <span>
              <b>{lawData.length}</b> maatregel gevonden voor{" "}
              <b>{searchValue}</b> in <b>{props.casus}</b>{" "}
            </span>
          </div>
        )}

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
                  <Image
                    width="27"
                    height="16"
                    src={IconWood}
                    alt="Icon of Wood"
                  />
                </div>
                <span className="inline-block pl-4 casus">{casus}</span>
              </div>
              <div className="block my-1">
                <Link href={"/measures/" + id} key={lawDataIdx}>
                  <a className="underline text-lg font-semibold no-underline detailPageLink">
                    {titel}{" "}
                  </a>
                </Link>
                {is_er_een_praktijk_voorbeeld && (
                  <span className="p-1 text-normal rounded font-semibold text-base bg-red-200 no-underline">
                    Voorbeeld
                  </span>
                )}
              </div>
              <div className="block bold-text">
                {europees && <span>Europees - </span>}
                {nationaal && <span>Nationaal - </span>}
                {provinciaal && <span>Provinciaal - </span>}
                {waterschappen && <span>Waterschappen - </span>}
                {gemeentelijk && <span>Gemeentelijk</span>}
              </div>
              <div className="block newlineDisplay twoLines">
                <Link href={"/measures/" + id} key={lawDataIdx}>
                  <a>
                    <p className="description">
                      {introductie_juridische_maatregel}
                    </p>
                  </a>
                </Link>
              </div>

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
                    {R1 && (
                      <span className="bg-[#4099DA] text-white rounded-full p-1 mr-2">
                        R1{" "}
                      </span>
                    )}
                    {R2 && (
                      <span className="bg-[#4099DA] text-white rounded-full p-1 mr-2">
                        R2{" "}
                      </span>
                    )}
                    {R3 && (
                      <span className="bg-[#4099DA] text-white rounded-full p-1 mr-2">
                        R3{" "}
                      </span>
                    )}
                    {R4 && (
                      <span className="bg-[#4099DA] text-white rounded-full p-1 mr-2">
                        R4{" "}
                      </span>
                    )}
                    {R5 && (
                      <span className="bg-[#4099DA] text-white rounded-full p-1 mr-2">
                        R5{" "}
                      </span>
                    )}
                    {R6 && (
                      <span className="bg-[#4099DA] text-white rounded-full p-1 mr-2">
                        R6
                      </span>
                    )}
                  </span>
                </div>
              </div>

              <div className="flex space-x-8">
                <div className="p-1 subrecht-text rounded text-base bg-gray-200">
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

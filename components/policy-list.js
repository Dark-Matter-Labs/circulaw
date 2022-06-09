import Link from "next/link";
import Image from "next/image";

import IconWood from "../public/icons/wood.png";

export default function PolicyList(props) {
  let lawData = [];
  if (props.data) {
    lawData = props.data;
  }
  return (
    <>
      <div className="">
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

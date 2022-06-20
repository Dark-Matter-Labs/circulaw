import { useRouter } from "next/router";
import useSWR from "swr";
import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/layout";
import IcontWood from "../../public/icons/wood.png";
import Tooltip from "../../components/tooltip";

const formatDate = (date) => {
  let dateObject = new Date(date);
  return dateObject.toLocaleDateString();
};

const checkURL = (text) => {
  let match = text.match(
    /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi
  );

  if (match === null) {
    return [];
  }
  return match;
};

const URLReplacer = (text) => {
  let match = text.match(
    /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi
  );
  let linkFormattedText = text;
  match.map((url) => {
    linkFormattedText = linkFormattedText.replace(
      url,
      `<a class="link" href=\"` + url + '"  target="_BLANK">' + url + `</a>`
    );
  });
  return linkFormattedText;
};

const fetcher = async (url) => {
  const res = await fetch(url);
  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message);
  }
  return data;
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Law() {
  const { query } = useRouter();

  const { data, error } = useSWR(
    () => query.id && `/api/laws/${query.id}`,
    fetcher
  );

  if (error) return <div>{error.message} </div>;
  if (!data) return <div>Loading...</div>;

  return (
    <Layout>
      <style jsx>{`
        .square {
          display: inline-block;
          margin-right: 1rem;
          width: 25px;
          height: 25px;
        }
        .score-true {
          background-color: #4099da;
          border-color: #4099da;
          border-width: 1px;
        }
        .score-false {
          background-color: #ffffff;
          border-color: #4099da;
          border-width: 1px;
        }
      `}</style>
      <div className="p-8">
        <Link href="/laws" className="mt-24 mb-2 w-full font-normal ">
          <a className="link font-semibold">← Terug</a>
        </Link>

        <div className="flex">
          <div className="w-2/3 p-6">
            <div className="border-b-2 ">
              <div className="inline-block">
                <Image
                  src={IcontWood}
                  alt="Icon of a Wood Log"
                  width={42}
                  height={25}
                />
              </div>
              <div className="inline-block">
                <Link
                  href={"/" + data.casus.replace(/\s+/g, "-").toLowerCase()}
                >
                  <a>
                    <span className="font-semibold link">{data.casus}</span>
                  </a>
                </Link>
                <div className="inline-block">{/* <ToolTip data="" /> */}</div>
              </div>
              <div className="inline-block float-right">
                R-ladder:{" "}
                <span className="block-inline font-semibold text-base text-gray-900">
                  {data.R1 && (
                    <span className="bg-[#4099DA] text-white rounded-full p-1 mr-2">
                      <Tooltip icon="false">R1</Tooltip>
                    </span>
                  )}
                  {data.R2 && (
                    <span className="bg-[#4099DA] text-white rounded-full p-1 mr-2">
                      <Tooltip icon="false">R2</Tooltip>
                    </span>
                  )}
                  {data.R3 && (
                    <span className="bg-[#4099DA] text-white rounded-full p-1 mr-2">
                      <Tooltip icon="false">R3</Tooltip>
                    </span>
                  )}
                  {data.R4 && (
                    <span className="bg-[#4099DA] text-white rounded-full p-1 mr-2">
                      <Tooltip icon="false">R4</Tooltip>
                    </span>
                  )}
                  {data.R5 && (
                    <span className="bg-[#4099DA] text-white rounded-full p-1 mr-2">
                      <Tooltip icon="false">R5</Tooltip>
                    </span>
                  )}
                  {data.R6 && (
                    <span className="bg-[#4099DA] text-white rounded-full p-1 mr-2">
                      <Tooltip icon="false">R6</Tooltip>
                    </span>
                  )}
                </span>
              </div>
            </div>
            <h1 className="font-bold text-3xl my-9">{data.titel}</h1>

            <div className="py-4">
              <h3 className="font-bold text-xl pb-2">
                {data.kop_1_samenvatting_juridische_maatregel}
              </h3>
              <p className="newlineDisplay">
                {checkURL(data.introductie_juridische_maatregel).length > 0 ? (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: URLReplacer(
                        data.introductie_juridische_maatregel
                      ),
                    }}
                  />
                ) : (
                  data.introductie_juridische_maatregel
                )}
              </p>
            </div>
            <div className="py-4">
              <h3 className="font-bold text-xl pb-2">
                {data.kop_2_toepassing_juridische_maatregel}
              </h3>
              <div className=" px-5 py-5 border-2  border-black rounded newlineDisplay">
                {checkURL(data.toepassing_juridische_maatregel).length > 0 ? (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: URLReplacer(data.toepassing_juridische_maatregel),
                    }}
                  />
                ) : (
                  data.toepassing_juridische_maatregel
                )}
              </div>
            </div>
            {data.is_er_een_praktijk_voorbeeld && (
              <div className="py-4">
                <h3 className="font-bold text-xl pb-2">
                  {data.kop_3_uit_de_praktijk}
                </h3>
                <p className="">{data.uit_de_praktijk}</p>
                <a className="underline" href={data.voorbeeld_link}>
                  {data.voorbeeld_link_teks}
                </a>
              </div>
            )}
            <div className="py-4">
              <h3 className="font-bold text-xl pb-2">
                {data.kop_4_eisen_en_beperkingen}
              </h3>
              <p className="newlineDisplay">{data.eisen_en_beperkingen}</p>
            </div>
            <div className="py-4">
              <h3 className="font-bold text-xl pb-2">
                {data.kop_5_juridische_toelichting}
              </h3>
              <p className="">{data.juridische_toelichting}</p>
            </div>
            <table className="table-fixed w-full mt-5">
              <tbody>
                <tr className="my-10 border-b-2 border-t-2">
                  <td className="w-1/2">Rechtsgebied</td>
                  <td className="w-1/2">
                    {data.rechtsgebied} - {data.subrechtsgebied}
                  </td>
                </tr>
                <tr className="my-10 border-b-2">
                  <td className="w-1/2">Citeertitel</td>
                  <td className="w-1/2">{data.citeertitel}</td>
                </tr>
                <tr className="my-10 border-b-2">
                  <td className="w-1/2">Artikel</td>
                  <td className="w-1/2">
                    <a className="link" href={data.link_naar_wetsartikel}>
                      {data.artikel}
                    </a>
                  </td>
                </tr>
                <tr className="my-10 border-b-2">
                  <td className="w-1/2">Geldig vanaf</td>
                  <td className="w-1/2">{formatDate(data.geldend_vanaf)}</td>
                </tr>
                <tr className="my-10 border-b-2">
                  <td className="w-1/2">Bevoegdheidsniveau</td>
                  <td className="w-1/2">
                    {data.europees && <span>Europees </span>}
                    {data.nationaal && <span>Nationaal </span>}
                    {data.provinciaal && <span>Provinciaal </span>}
                    {data.waterschappen && <span>Waterschappen </span>}
                    {data.gemeentelijk && <span>Gemeentelijk</span>}
                  </td>
                </tr>
                <tr className="my-10 border-b-2">
                  <td className="w-1/2">Type document</td>
                  <td className="w-1/2">{data.type_document}</td>
                </tr>
                <tr>
                  <td>Beleidsinstrument</td>
                  <td>{data.type_beleidsinstrument}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="w-1/3 ">
            <div className="py-5">
              <div className="relative flex justify-between  border-t-2 border-black">
                <div className="font-bold 	">Juridisch invloed</div>
                {/* <Tooltip data="" /> */}
              </div>

              <div className="mt-3 flex items-center">
                <span className="pr-5"> LAAG</span>
                {[0, 1, 2, 3, 4].map((rating) => (
                  <div
                    key={rating}
                    className={classNames(
                      data.juridische_invloed > rating
                        ? "score-true"
                        : "score-false",
                      "mr-5 h-6 w-6 flex-shrink-0 rounded-full"
                    )}
                    aria-hidden="true"
                  />
                ))}
                HOOG
              </div>
            </div>

            <div className="py-5">
              <div className="relative flex justify-between border-t-2 border-black">
                <div className="font-bold	 ">Juridisch houdbaarheid</div>
                <Tooltip data={data.JuridischAfbreukrisicoToolTip} />
              </div>
              <div className="mt-3 flex items-center">
                <span className="pr-5"> LAAG</span>
                {[0, 1, 2, 3, 4].map((rating) => (
                  <div
                    key={rating}
                    className={classNames(
                      data.juridische_houdbaarheid > rating
                        ? "score-true"
                        : "score-false",
                      "mr-5 h-6 w-6 flex-shrink-0 rounded-full"
                    )}
                    aria-hidden="true"
                  />
                ))}
                HOOG
              </div>
            </div>

            {data.kop_6_ministappenplan && (
              <div className="px-4 py-4 border-2 rounded bg-[#d8edfb]">
                <div className="font-bold pb-4 ">
                  {data.kop_6_ministappenplan}
                </div>
                <div className="">
                  <div className="pb-4">{data.ministappenplan}</div>
                </div>
                <div className="w-full px-4 py-4">
                  <a href={data.links_ministappenplan}>
                    <button className="px-4 py-4 border-2 rounded text-white bg-[#0088d9]">
                      HOUD ME OP DE HOOGTE
                    </button>
                  </a>
                </div>{" "}
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export function Rating(data) {
  {
    /* TODO: @Will make the ratings system a component which supports diff values (3,5,10) + shapes */
  }
  return <>Future Rating Systems</>;
}

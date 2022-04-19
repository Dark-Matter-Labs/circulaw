import { useRouter } from "next/router";
import useSWR from "swr";
import Link from "next/link";
import Image from "next/image";
import placeholder from "../../public/placeholder.png";
import { StarIcon } from "@heroicons/react/solid";
import Layout from "../../components/layout";
import ToolTip from "../../components/tooltip";

import IcontWood from "../../public/icons/wood.png";

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
          <a>← Overzicht maatregelen</a>
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
                Fase: <span className="bold">{data.fasen}</span>
                <div className="inline-block">{/* <ToolTip data="" /> */}</div>
              </div>

              <div className="inline-block">R-ladder: {data.r_ladder}</div>
            </div>
            <h1 className="font-bold text-3xl my-9">{data.titel}</h1>

            <div className="py-4">
              <h3 className="font-bold text-xl pb-2">
                Samenvatting juridische maatregel
              </h3>
              <p className="">{data.samenvatting}</p>
            </div>
            <div className="py-4">
              <h3 className="font-bold text-xl pb-2">
                Voorbeelden van circulaire handelingsperspectieven
              </h3>
              <p className=" px-5 py-5 border-2  border-black rounded ">
                {data.voorbeelden}
              </p>
            </div>
            <div className="py-4">
              <h3 className="font-bold text-xl pb-2">
                Eisen/beperkingen van de juridische maatregel
              </h3>
              <p className="">{data.eisen_beperkingen}</p>
            </div>
            <div className="py-4">
              <h3 className="font-bold text-xl pb-2">Juridische toelichting</h3>
              <p className="">{data.juridische_toelichting}</p>
            </div>
            <table className="table-fixed w-full mt-5">
              <tbody>
                <tr className="my-10 border-b-2 border-t-2">
                  <td className="w-1/2">Rechtsgebied</td>
                  <td className="w-1/2">{data.rechtsgebied}</td>
                </tr>
                <tr className="my-10 border-b-2">
                  <td className="w-1/2">Wettelijk document</td>
                  <td className="w-1/2">
                    {data.officiele_titel_wettelijk_document}
                  </td>
                </tr>
                <tr className="my-10 border-b-2">
                  <td className="w-1/2">Artikel</td>
                  <td className="w-1/2">{data.artikel}</td>
                </tr>
                <tr className="my-10 border-b-2">
                  <td className="w-1/2">Ingang wet</td>
                  <td className="w-1/2">{data.ingang_van_wet}</td>
                </tr>
                <tr className="my-10 border-b-2">
                  <td className="w-1/2">Bevoegdheids niveau</td>
                  <td className="w-1/2">{data.beleids_instrument_type}</td>
                </tr>
                <tr className="my-10 border-b-2">
                  <td className="w-1/2">Type document</td>
                  <td className="w-1/2">{data.type_document}</td>
                </tr>

                <tr className="border-b-2">
                  <td>Relatie</td>
                  <td>{data.relatie}</td>
                </tr>
                <tr>
                  <td>Beleidsinstrument</td>
                  <td>{data.beleids_instrument_type}</td>
                </tr>
              </tbody>
            </table>
            <div
              className={classNames(
                data.opmerkingen_type_norm_valt_hier_ook_onder === ""
                  ? "hidden"
                  : ""
              )}
            >
              <h3 className="my-5 text-lg font-extrabold">
                Voorbeelden uit de praktijk waar de maatregelen succesvol zijn
                toegepast
              </h3>
              {/* <LinkPreviewer
                data={
                  data.OpmerkingenLink === "" ? "null" : data.OpmerkingenLink
                }
              /> */}

              <div>
                {" "}
                <Link href={data.opmerkingen_type_norm_valt_hier_ook_onder}>
                  <a>Voorbeeld 1</a>
                </Link>
                <br />
                <Link href={data.opmerkingen_type_norm_valt_hier_ook_onder}>
                  <a className="underline text-blue-500">Link ↗</a>
                </Link>
              </div>

              <p>{data.Opmerkingen}</p>
            </div>
          </div>
          <div className="w-1/3 ">
            <div className="py-5">
              <div className="relative flex justify-between  border-t-2 border-black">
                <div className="font-bold 	">Juridisch Invloed</div>
                {/* <Tooltip data="" /> */}
              </div>

              <div className="mt-3 flex items-center">
                <span className="pr-5"> LAAG</span>
                {[0, 1, 2, 3, 4].map((rating) => (
                  <div
                    key={rating}
                    className={classNames(
                      data.ranking_invloed > rating
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
                <div className="font-bold	 ">Juridisch afbreukrisico</div>
                {/* <Tooltip data={data.JuridischAfbreukrisicoToolTip} /> */}
              </div>
              <div className="mt-3 flex items-center">
                <span className="pr-5"> LAAG</span>
                {[0, 1, 2, 3, 4].map((rating) => (
                  <div
                    key={rating}
                    className={classNames(
                      data.ranking_afbreukrisico > rating
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

            <div className="px-4 py-4 border-2 rounded bg-[#d8edfb]">
              <div className="font-bold pb-4 ">
                Deze maatregel is nog niet in werking getreden en nog niet
                toegepast
              </div>
              <div className="">
                <div className="pb-4">
                  In de toekomst vind je hier een interactieve handleiding die
                  je meeneemt in hoe je:
                </div>
                <ul className="marker:text-sky-400 list-disc pl-5 space-y-3">
                  <li className="pb-4">
                    met de maatregel een project vormt en hiermee met de markt
                    mee aan de slag kan gaan
                  </li>
                  <li className="pb-4">
                    intern kunt checken of het haalbaar, realistisch en het
                    goede moment is om de maatregel toe te passen
                  </li>
                  <li className="pb-4">
                    de maatregel kan combineren met andere juridische,
                    financiële en faciliterende beleidsinstrumenten, om zo meer
                    impact te maken{" "}
                  </li>
                </ul>
              </div>
              <div className="w-full px-4 py-4">
                <Link href="/">
                  <a className="px-4 py-4 border-2 rounded text-white bg-[#0088d9]">
                    HOUD ME OP DE HOOGTE
                  </a>
                </Link>
              </div>{" "}
            </div>
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

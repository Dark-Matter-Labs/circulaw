import { useRouter } from "next/router";
import useSWR from "swr";
import Link from "next/link";
import Image from "next/image";
import placeholder from "../../public/placeholder.png";
import { StarIcon } from "@heroicons/react/solid";
import Tooltip from "../../components/tooltip";

import Layout from "../../components/layout";
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
          background-color: #565d61;
        }
        .score-false {
          background-color: #c2d1d9;
        }
      `}</style>
      <div className='mt-14 p-8'>
        <div className='block p-6 w-full'>
          <Link href='/laws' className='mt-24 mb-2 w-full font-normal '>
            <a>← Overzicht maatregelen</a>
          </Link>

          <h1 className='font-bold text-2xl mb-9'>{data.lawTitel}</h1>
        </div>

        <div className='flex'>
          <div className='w-2/3 p-6'>
            <h3 className='font-bold pb-2'>
              Circulaire maatregel/ mogelijkheid
            </h3>
            <p className='border-solid border p-3'>
              {data.InhoudCirculaireMaatregel}
            </p>
            <h3 className='font-bold pt-6 pb-1'>
              Waarom zit deze mogelijkheid in de wettelijke bepaling?
            </h3>
            <p className='border-solid'>{data.Toelichting}</p>
            <table className='table-fixed w-full mt-5'>
              <tbody>
                <tr className='my-10 border-b-2 border-t-2'>
                  <td className='w-1/2'>Rechtsgebied</td>
                  <td className='w-1/2'>{data.Rechtsgebied}</td>
                </tr>
                <tr className='my-10 border-b-2'>
                  <td className='w-1/2'>Wettelijk document</td>
                  <td className='w-1/2'>{data.officieleTitel}</td>
                </tr>
                <tr className='my-10 border-b-2'>
                  <td className='w-1/2'>Artikel</td>
                  <td className='w-1/2'>{data.Artikel}</td>
                </tr>
                <tr className='my-10 border-b-2'>
                  <td className='w-1/2'>Ingang wet</td>
                  <td className='w-1/2'>{data.IngangWet}</td>
                </tr>
                <tr className='my-10 border-b-2'>
                  <td className='w-1/2'>Bevoegdheids niveau</td>
                  <td className='w-1/2'>{data.Bevoegdheidsniveau}</td>
                </tr>
                <tr className='my-10 border-b-2'>
                  <td className='w-1/2'>Type document</td>
                  <td className='w-1/2'>{data.TypeDocument}</td>
                </tr>

                <tr className='border-b-2'>
                  <td>Relatie</td>
                  <td>{data.Relatie}</td>
                </tr>
                <tr>
                  <td>Beleidsinstrument</td>
                  <td>{data.BeleidsInstrumentType}</td>
                </tr>
              </tbody>
            </table>
            <div
              className={classNames(
                data.OpmerkingenLink === "" ? "hidden" : ""
              )}
            >
              <h3 className='my-5 text-lg font-extrabold'>
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
                <Link href={data.OpmerkingenLink}>
                  <a>Voorbeeld 1</a>
                </Link>
                <br />
                <Link href={data.OpmerkingenLink}>
                  <a className='underline text-blue-500'>Link ↗</a>
                </Link>
              </div>

              <p>{data.Opmerkingen}</p>
            </div>
          </div>
          <div className='w-1/3 '>
            <div className='py-5'>
              <div className='relative flex justify-between'>
                <div className='font-bold	'>Invloed</div>
                <Tooltip data='' />
              </div>

              <div className='mt-3 flex items-center'>
                {[0, 1, 2, 3, 4].map((rating) => (
                  <div
                    key={rating}
                    className={classNames(
                      data.Reikwijdte > rating ? "score-true" : "score-false",
                      "mr-5 h-5 w-5 flex-shrink-0"
                    )}
                    aria-hidden='true'
                  />
                ))}
              </div>

              <div className='mt-3'>{data.Reikwijdte}</div>
            </div>

            <div className='py-5'>
              <div className='relative flex justify-between'>
                <div className='font-bold	'>Juridisch afbreukrisico</div>
                <Tooltip data={data.JuridischAfbreukrisicoToolTip} />
              </div>
              <div className='mt-3 flex items-center'>
                {[0, 1, 2, 3, 4].map((rating) => (
                  <div
                    key={rating}
                    className={classNames(
                      data.Afbreukrisico > rating
                        ? "score-true"
                        : "score-false",
                      "mr-5 h-5 w-5 flex-shrink-0"
                    )}
                    aria-hidden='true'
                  />
                ))}
              </div>
              <div className='mt-3'>{data.Afbreukrisico}</div>
            </div>

            <div className='py-5'>
              <div className='font-bold	'>Trefwoorden</div>
              ...
            </div>

            <div className='py-5'>
              <div className='font-bold	'>Relevante organisaties</div>
              ...
            </div>
            <div className='py-5'>
              <div className='font-bold	'>Relevante documenten</div>
              ...
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

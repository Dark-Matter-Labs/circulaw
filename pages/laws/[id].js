import { useRouter } from "next/router";
import useSWR from "swr";
import Link from "next/link";

import Layout from "../../components/layout";
const fetcher = async (url) => {
  const res = await fetch(url);
  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message);
  }
  return data;
};

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
      <div className='mt-14 p-8'>
        <div className='block w-full'>
          <Link href='/' className='mt-24 mb-2 w-full font-normal '>
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
                <tr className='py-3 border-b-2 border-t-2'>
                  <td className='w-1/2'>Rechtsgebied</td>
                  <td className='w-1/2'>{data.Rechtsgebied}</td>
                </tr>
                <tr className='py-3 border-b-2'>
                  <td className='w-1/2'>Wettelijk document</td>
                  <td className='w-1/2'>{data.officieleTitel}</td>
                </tr>
                <tr className='py-3 border-b-2'>
                  <td className='w-1/2'>Rechtsgebied</td>
                  <td className='w-1/2'>{data.Artikel}</td>
                </tr>
                <tr className='py-3 border-b-2'>
                  <td className='w-1/2'>Artikel</td>
                  <td className='w-1/2'>{data.Rechtsgebied}</td>
                </tr>
                <tr className='py-3 border-b-2'>
                  <td className='w-1/2'>Ingang wet</td>
                  <td className='w-1/2'>{data.IngangWet}</td>
                </tr>
                <tr className='py-3 border-b-2'>
                  <td className='w-1/2'>Bevoegdheids niveau</td>
                  <td className='w-1/2'>{data.Bevoegdheidsniveau}</td>
                </tr>
                <tr className='py-3 border-b-2'>
                  <td className='w-1/2'>Type document</td>
                  <td className='w-1/2'>{data.TypeDocument}</td>
                </tr>

                <tr className='border-b-2'>
                  <td>Relatie</td>
                  <td>{data.Relatie}</td>
                </tr>
                <tr>
                  <td>Beleidsinstrument</td>
                  <td>{data.Beleidsinstrument}</td>
                </tr>
              </tbody>
            </table>
            <h3 className='mt-5 text-lg font-extrabold'>
              Voorbeelden uit de praktijk waar de maatregelen succesvol zijn
              toegepast
            </h3>
            <div>
              example docs
              <div>Doc Title</div>
              <p>Text</p>
              <p>Link</p>
              <p>image</p>
            </div>
          </div>
          <div className='w-1/3'>
            <div className='py-5'>
              <div className='font-bold	'>Juridische reikwijdte</div>
            </div>

            <div className='py-5'>
              <div className='font-bold	'>Juridisch afbreukrisico</div>
              Add boxes
            </div>

            <div className='py-5'>
              <div className='font-bold	'>Trefwoorden</div>
              Add boxes
            </div>

            <div className='py-5'>
              <div className='font-bold	'>Relevante organisaties</div>
              Add Links
            </div>
            <div className='py-5'>
              <div className='font-bold	'>Relevante documenten</div>
              Add Links
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

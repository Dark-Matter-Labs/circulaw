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
          <Link href='/' className='mt-24 w-full font-normal '>
            <a>← Overzicht maatregelen</a>
          </Link>

          <h1 className='font-bold text-2xl mb-9'>{data.lawTitel}</h1>
        </div>

        <div className='flex'>
          <div className='w-2/3 p-6'>
            <h3 className='font-bold pb-2'>
              Circulaire maatregel/ mogelijkheid
            </h3>
            <p className='border-solid border p-2'>
              {data.InhoudCirculaireMaatregel}
            </p>
            <h3 className='font-bold'>
              Waarom zit deze mogelijkheid in de wettelijke bepaling?
            </h3>
            <p className='border-solid'>{data.Toelichting}</p>

            <table class='table-auto'>
              <tbody>
                <tr>
                  <td>Rechtsgebied</td>
                  <td>Wettelijk document</td>
                  <td>Artikel</td>
                  <td>Ingang wet</td>
                  <td>Bevoegdheids niveau</td>
                  <td>Type document</td>
                  <td>Relatie</td>
                  <td>Beleidsinstrument</td>
                </tr>
                <tr>
                  <td>{data.Rechtsgebied}</td>
                  <td>{data.officieleTitel}</td>
                  <td>{data.Artikel}</td>
                  <td>{data.IngangWet}</td>
                  <td>{data.Bevoegdheidsniveau}</td>
                  <td>{data.TypeDocument}</td>
                  <td>{data.Relatie}</td>
                  <td>{data.Beleidsinstrument}</td>
                </tr>
              </tbody>
            </table>
            <h3>
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
            <div className=''>
              <div className='font-bold	'>Juridische reikwijdte</div>
            </div>

            <div className=''>
              <div className='font-bold	'>Juridisch afbreukrisico</div>
              Add boxes
            </div>

            <div className=''>
              <div className='font-bold	'>Trefwoorden</div>
              Add boxes
            </div>

            <div className=''>
              <div className='font-bold	'>Relevante organisaties</div>
              Add Links
            </div>
            <div className=''>
              <div className='font-bold	'>Relevante documenten</div>
              Add Links
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

import { useRouter } from "next/router";
import useSWR from "swr";

import {
  wettelijk_bevoegdheidsniveau,
  rechtsgebied,
  fasen,
  plaberum,
  r_ladder,
} from "../../dataFilterExample";

import Layout from "/components/layout";
import SearchFilter from "/components/search-filter";
import PolicyList from "/components/policy-list";

const fetcher = async (url) => {
  const res = await fetch(url);
  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message);
  }
  return data;
};

export default function Laws() {
  const { query } = useRouter();
  const { data, error } = useSWR(() => `/api/laws/`, fetcher);
  const numberOfLaws = 59;
  if (error) return <div>{error.message}</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <Layout>
      <div className='flex '>
        <div className='p-3 my-10'>
          <h2 className='block text-4xl mb-20'>HOUTBOUW</h2>
          <div className=' flex justify-between pb-3 border-b border-black mb-3'>
            <span className='text-lg'>Verfijnen</span>{" "}
            <span className='underline'>Reset</span>
          </div>
          <SearchFilter
            title='Wettelijk bevoegdheidsniveau'
            data={wettelijk_bevoegdheidsniveau}
          />
          <SearchFilter title='Rechtsgebied' data={rechtsgebied} />
          <SearchFilter title='Planningsfase' data={plaberum} />
          <SearchFilter title='R - ladder' data={r_ladder} />
        </div>

        <div className='p-3 mt-10 ml-10'>
          <h1 className='block text-4xl'>
            Circulaire transitie maatregelen & mogelijkheden
          </h1>
          <div className='block my-4'>
            <span className='font-bold'>{numberOfLaws}</span> maatregelen
            gevonden
          </div>

          <div>
            <input type='checkbox' />
            <span className='pl-3 text-gray-400	'>
              Maatregelen met voorbeelden van succesvolle toepassingen
            </span>
          </div>
          <div className='pb-3 border-b border-black'>
            <input type='checkbox' />
            <span className='pl-3 text-gray-400	'>
              Alleen maatregelen in HUIDIGE wet- en regelgeving
            </span>
          </div>

          <div className=''>
            <PolicyList data={data} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

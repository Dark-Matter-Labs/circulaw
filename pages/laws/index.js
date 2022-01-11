import { useState, useEffect } from "react";
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
  const { data, error } = useSWR(() => `/api/laws/`, fetcher);
  if (error) return <div>{error.message}</div>;
  if (!data) return <div>Loading...</div>;

  const [laws, setLaws] = useState(data);
  const [selected, setSelected] = useState({
    wettelijk_bevoegdheidsniveau: [],
    rechtsgebied: [],
    plaberum: [],
    r_ladder: [],
  });
  const { query } = useRouter();

  const numberOfLaws = 67;

  const handleFilters = (checkboxState, key) => {
    console.log("handleFilters", handleFilters);

    const newFilters = { ...selected };
    newFilters[key] = checkboxState;
    setSelected(newFilters);
  };

  useEffect(() => {
    const filteredLaws = data
      .filter(
        (m) =>
          selected.wettelijk_bevoegdheidsniveau.length === 0 ||
          selected.wettelijk_bevoegdheidsniveau.includes(0) ||
          selected.wettelijk_bevoegdheidsniveau.includes(
            m.wettelijk_bevoegdheidsniveau
          )
      )
      .filter(
        (m) =>
          selected.rechtsgebied.length === 0 ||
          selected.rechtsgebied.includes("") ||
          selected.rechtsgebied.includes(m.rechtsgebied)
      )
      .filter(
        (m) =>
          selected.plaberum.length === 0 ||
          selected.plaberum.includes("") ||
          selected.plaberum.includes(m.plaberum)
      )
      .filter(
        (m) =>
          selected.r_ladder.length === 0 ||
          selected.r_ladder.includes("") ||
          selected.r_ladder.includes(m.r_ladder)
      );
    console.log("filteredLaws", filteredLaws);
    setLaws(filteredLaws);
  }, [selected]);

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
            list={wettelijk_bevoegdheidsniveau}
            handleFilters={(checkboxState) =>
              handleFilters(checkboxState, "wettelijk_bevoegdheidsniveau")
            }
          />
          <SearchFilter
            title='Rechtsgebied'
            list={rechtsgebied}
            handleFilters={(checkboxState) =>
              handleFilters(checkboxState, "rechtsgebied")
            }
          />
          <SearchFilter
            title='Planningsfase'
            list={plaberum}
            handleFilters={(checkboxState) =>
              handleFilters(checkboxState, "plaberum")
            }
          />
          <SearchFilter
            title='R - ladder'
            list={r_ladder}
            handleFilters={(checkboxState) =>
              handleFilters(checkboxState, "r_ladder")
            }
          />
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

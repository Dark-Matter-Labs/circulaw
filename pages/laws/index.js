import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";

import {
  wettelijk_bevoegdheidsniveau,
  rechtsgebied,
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
  //if (error) return <div>{error.message}</div>;

  // commented this out as it causes a render loop
  //if (!data) return <div>Loading...</div>;
  const [laws, setLaws] = useState(data);
  //Quick way to filter is to pass it in as a search query
  // const [passFilterToSearch, setPassFilterToSearch] = useState(data);
  const [selected, setSelected] = useState({
    wettelijk_bevoegdheidsniveau: [],
    rechtsgebied: [],
    plaberum: [],
    r_ladder: [],
  });
  const [voorbeelden, setVoorbeelden] = useState(false);
  const [huidige, setHuidige] = useState(false);

  const [numberOfLaws, setNumberOfLaws] = useState(67);

  const handleFilters = (checkboxState, key) => {
    const newFilters = { ...selected };
    newFilters[key] = checkboxState;
    setSelected(newFilters);
  };

  const reset = () => {
    setSelected({
      wettelijk_bevoegdheidsniveau: [],
      rechtsgebied: [],
      plaberum: [],
      r_ladder: [],
    });

    setVoorbeelden(false);
    setHuidige(false);
  };

  useEffect(() => {
    //added check for data to have been retrieved here
    if (data) {
      const filteredLaws = data;
      if (selected.wettelijk_bevoegdheidsniveau.length > 0) {
        filteredLaws = filteredLaws.filter((element) => {
          return (
            selected.wettelijk_bevoegdheidsniveau.includes(
              element.bevoegdheidsniveau
            ) || element.bevoegdheidsniveau === "Alle bevoegdheidsniveaus"
          );
        });
      }

      if (selected.r_ladder.length > 0) {
        filteredLaws = filteredLaws.filter((element) => {
          return element.r_ladder
            .split(", ")
            .some((i) => selected.r_ladder.includes(i));
        });
      }

      if (selected.rechtsgebied.length > 0) {
        filteredLaws = filteredLaws.filter((element) => {
          return selected.rechtsgebied.includes(element.relatie);
        });
      }

      if (selected.plaberum.length > 0) {
        filteredLaws = filteredLaws.filter((element) => {
          return selected.plaberum.includes(element.fasen);
        });
      }

      if (voorbeelden) {
        filteredLaws = filteredLaws.filter((element) => {
          return element.opmerkingen_type_norm_valt_hier_ook_onder !== "";
        });
      }

      if (huidige) {
        filteredLaws = filteredLaws.filter((element) => {
          return element.ingang_van_wet !== "Nog niet inwerking getreden";
        });
      }

      setLaws(filteredLaws);
      setNumberOfLaws(filteredLaws.length);
    }
  }, [data, selected, voorbeelden, huidige]);

  return (
    <Layout>
      <div className="flex ">
        <div className="p-3 my-10">
          <h2 className="block text-4xl mb-20">HOUTBOUW</h2>
          <div className=" flex justify-between pb-3 border-b border-black mb-3">
            <span className="text-lg">Verfijnen</span>{" "}
            <span onClick={reset} className="underline">
              Reset
            </span>
          </div>
          <SearchFilter
            title="Wettelijk bevoegdheidsniveau"
            list={wettelijk_bevoegdheidsniveau}
            handleFilters={(checkboxState) =>
              handleFilters(checkboxState, "wettelijk_bevoegdheidsniveau")
            }
          />
          <SearchFilter
            title="Rechtsgebied"
            list={rechtsgebied}
            handleFilters={(checkboxState) =>
              handleFilters(checkboxState, "rechtsgebied")
            }
          />
          <SearchFilter
            title="Planningsfase"
            list={plaberum}
            handleFilters={(checkboxState) =>
              handleFilters(checkboxState, "plaberum")
            }
          />
          <SearchFilter
            title="R - ladder"
            list={r_ladder}
            handleFilters={(checkboxState) =>
              handleFilters(checkboxState, "r_ladder")
            }
          />
        </div>

        <div className="p-3 mt-10 ml-10">
          <h1 className="block text-4xl">
            Circulaire transitie maatregelen & mogelijkheden
          </h1>
          <div className="block my-4">
            <span className="font-bold">{numberOfLaws}</span> maatregelen
            gevonden
          </div>

          <div>
            <input
              type="checkbox"
              checked={voorbeelden}
              onChange={(e) => setVoorbeelden(e.target.checked)}
            />
            <span className="pl-3 text-gray-400	">
              Maatregelen met voorbeelden van succesvolle toepassingen
            </span>
          </div>
          <div className="pb-3 border-b border-black">
            <input
              type="checkbox"
              checked={huidige}
              onChange={(e) => setHuidige(e.target.checked)}
            />
            <span className="pl-3 text-gray-400	">
              Alleen maatregelen in HUIDIGE wet- en regelgeving
            </span>
          </div>
          {data && (
            <div className="">
              <PolicyList data={laws} />
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

import { useState, useEffect, useRef } from "react";
import useSWR from "swr";
import createPersistedState from "use-persisted-state";
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

const useSelectedState = createPersistedState("selected");
const useVoorbeeldenState = createPersistedState("voorbeelden");
const useHuidigeState = createPersistedState("huidige");

export default function Laws() {
  const { data, error } = useSWR(() => `/api/laws/`, fetcher);

  const wettelijkFilterRef = useRef();
  const rechtsgebiedFilterRef = useRef();
  const planningsfaseFilterRef = useRef();
  const rLadderFilterRef = useRef();

  const [laws, setLaws] = useState(data);
  const [selected, setSelected] = useSelectedState({
    wettelijk_bevoegdheidsniveau: [],
    rechtsgebied: [],
    plaberum: [],
    r_ladder: [],
  });
  const [voorbeelden, setVoorbeelden] = useVoorbeeldenState(false);
  const [huidige, setHuidige] = useHuidigeState(false);

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

    wettelijkFilterRef.current.reset();
    rechtsgebiedFilterRef.current.reset();
    planningsfaseFilterRef.current.reset();
    rLadderFilterRef.current.reset();

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
          return !element.ingang_van_wet.includes(
            "Nog niet inwerking getreden"
          );
        });
      }

      setLaws(filteredLaws);
      setNumberOfLaws(filteredLaws.length);
    }
  }, [data, selected, voorbeelden, huidige]);

  useEffect(() => {
    if (
      selected.wettelijk_bevoegdheidsniveau.length !== 0 &&
      typeof wettelijkFilterRef.current !== "undefined"
    ) {
      wettelijkFilterRef.current.set(selected.wettelijk_bevoegdheidsniveau);
    }

    if (
      selected.rechtsgebied.length !== 0 &&
      typeof rechtsgebiedFilterRef.current !== "undefined"
    ) {
      rechtsgebiedFilterRef.current.set(selected.rechtsgebied);
    }

    if (
      selected.plaberum.length !== 0 &&
      typeof planningsfaseFilterRef.current !== "undefined"
    ) {
      planningsfaseFilterRef.current.set(selected.plaberum);
    }

    if (
      selected.r_ladder.length !== 0 &&
      typeof rLadderFilterRef.current !== "undefined"
    ) {
      rLadderFilterRef.current.set(selected.r_ladder);
    }
  });

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
            ref={wettelijkFilterRef}
            title="Wettelijk bevoegdheidsniveau"
            list={wettelijk_bevoegdheidsniveau}
            handleFilters={(checkboxState) =>
              handleFilters(checkboxState, "wettelijk_bevoegdheidsniveau")
            }
          />
          <SearchFilter
            ref={rechtsgebiedFilterRef}
            title="Rechtsgebied"
            list={rechtsgebied}
            handleFilters={(checkboxState) =>
              handleFilters(checkboxState, "rechtsgebied")
            }
          />
          <SearchFilter
            ref={planningsfaseFilterRef}
            title="Planningsfase"
            list={plaberum}
            handleFilters={(checkboxState) =>
              handleFilters(checkboxState, "plaberum")
            }
          />
          <SearchFilter
            ref={rLadderFilterRef}
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

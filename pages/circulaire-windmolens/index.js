import { useState, useEffect, useRef } from "react";
import useSWR from "swr";
import Link from "next/link";
import createPersistedState from "use-persisted-state";
import {
  wettelijk_bevoegdheidsniveau,
  rechtsgebied,
  subrechtsgebied,
  juridische_houdbaarheid,
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

//creating objects for persisting values
const useSelectedState = createPersistedState("selected");

export default function Measures() {
  const { data, error } = useSWR(() => `/api/laws/`, fetcher);

  //creating references to access child component functions
  const wettelijkFilterRef = useRef();
  const rechtsgebiedFilterRef = useRef();
  const subrechtsgebiedFilterRef = useRef();
  const rLadderFilterRef = useRef();
  const juridischeFilterRef = useRef();

  const [laws, setLaws] = useState(data);
  const [selected, setSelected] = useSelectedState({
    wettelijk_bevoegdheidsniveau: [],
    rechtsgebied: [],
    subrechtsgebied: [],
    r_ladder: [],
    juridische_houdbaarheid: [],
  });

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
      subrechtsgebied: [],
      r_ladder: [],
      juridische_houdbaarheid: [],
    });

    wettelijkFilterRef.current.reset();
    rechtsgebiedFilterRef.current.reset();
    subrechtsgebiedFilterRef.current.reset();
    rLadderFilterRef.current.reset();
    juridischeFilterRef.current.reset();
  };

  //effect to check for filtering and update data
  useEffect(() => {
    //added check for data to have been retrieved here
    if (data) {
      let filteredLaws = data;

      filteredLaws = filteredLaws.filter((element) => {
        return element.casus === "Circulaire windmolens";
      });

      if (selected.wettelijk_bevoegdheidsniveau.length > 0) {
        if (selected.wettelijk_bevoegdheidsniveau.includes("europees")) {
          filteredLaws = filteredLaws.filter((element) => {
            return element.europees;
          });
        }
        if (selected.wettelijk_bevoegdheidsniveau.includes("nationaal")) {
          filteredLaws = filteredLaws.filter((element) => {
            return element.nationaal;
          });
        }
        if (selected.wettelijk_bevoegdheidsniveau.includes("provinciaal")) {
          filteredLaws = filteredLaws.filter((element) => {
            return element.provinciaal;
          });
        }
        if (selected.wettelijk_bevoegdheidsniveau.includes("gemeentelijk")) {
          filteredLaws = filteredLaws.filter((element) => {
            return element.gemeentelijk;
          });
        }
      }

      if (selected.r_ladder.length > 0) {
        if (selected.r_ladder.includes("R1")) {
          filteredLaws = filteredLaws.filter((element) => {
            return element.R1;
          });
        }
        if (selected.r_ladder.includes("R2")) {
          filteredLaws = filteredLaws.filter((element) => {
            return element.R2;
          });
        }
        if (selected.r_ladder.includes("R3")) {
          filteredLaws = filteredLaws.filter((element) => {
            return element.R3;
          });
        }
        if (selected.r_ladder.includes("R4")) {
          filteredLaws = filteredLaws.filter((element) => {
            return element.R4;
          });
        }
        if (selected.r_ladder.includes("R5")) {
          filteredLaws = filteredLaws.filter((element) => {
            return element.R5;
          });
        }
        if (selected.r_ladder.includes("R6")) {
          filteredLaws = filteredLaws.filter((element) => {
            return element.R6;
          });
        }
      }

      if (selected.rechtsgebied.length > 0) {
        filteredLaws = filteredLaws.filter((element) => {
          return selected.rechtsgebied.includes(element.rechtsgebied);
        });
      }

      if (selected.juridische_houdbaarheid.length > 0) {
        filteredLaws = filteredLaws.filter((element) => {
          return selected.juridische_houdbaarheid.includes(
            element.juridische_houdbaarheid
          );
        });
      }

      if (selected.subrechtsgebied.length > 0) {
        filteredLaws = filteredLaws.filter((element) => {
          return selected.subrechtsgebied.includes(element.subrechtsgebied);
        });
      }

      setLaws(filteredLaws);
      setNumberOfLaws(filteredLaws.length);
    }
  }, [data, selected]);

  //effect to check for data from persisted state from localStorage and update values when needed
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
      selected.subrechtsgebied.length !== 0 &&
      typeof subrechtsgebiedFilterRef.current !== "undefined"
    ) {
      subrechtsgebiedFilterRef.current.set(selected.subrechtsgebied);
    }

    if (
      selected.r_ladder.length !== 0 &&
      typeof rLadderFilterRef.current !== "undefined"
    ) {
      rLadderFilterRef.current.set(selected.r_ladder);
    }

    if (
      selected.juridische_houdbaarheid.length !== 0 &&
      typeof juridischeFilterRef.current !== "undefined"
    ) {
      juridischeFilterRef.current.set(selected.juridische_houdbaarheid);
    }
  });

  return (
    <Layout>
      <div className="w-full mt-10 ">
        <div className="block">
          <Link href="/">
            <a>Home</a>
          </Link>
          <span className=""> → </span>
          <Link href="/gebouwde-omgeving">
            <a>Gebouwde omgeving</a>
          </Link>
          <span className=""> → </span>
          <Link href="/houtbouw">
            <a> Circulaire windmolens </a>
          </Link>
        </div>
      </div>
      <div className="w-full border-b-2 py-4 mt-10 ">
        <div className="block my-4">
          <span className="font-bold">{numberOfLaws}</span> maatregelen gevonden
        </div>
      </div>
      <div className="flex ">
        <div className="p-3 my-10">
          <h2 className="block text-4xl mb-20">Circulaire Windmolens</h2>
          <div className=" flex justify-between pb-3 border-b border-black mb-3">
            <span className="text-lg">Verfijnen</span>{" "}
            <span onClick={reset} className="underline blue">
              Wis filters
            </span>
          </div>
          <SearchFilter
            ref={wettelijkFilterRef}
            title="Bevoegdheidsniveau"
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
            ref={rLadderFilterRef}
            title="R - ladder"
            list={r_ladder}
            handleFilters={(checkboxState) =>
              handleFilters(checkboxState, "r_ladder")
            }
          />
          <SearchFilter
            ref={juridischeFilterRef}
            title="Juridische houdbaarheid"
            list={juridische_houdbaarheid}
            handleFilters={(checkboxState) =>
              handleFilters(checkboxState, "juridische_houdbaarheid")
            }
          />
          <SearchFilter
            ref={subrechtsgebiedFilterRef}
            title="Subrechtsgebied"
            list={subrechtsgebied}
            handleFilters={(checkboxState) =>
              handleFilters(checkboxState, "subrechtsgebied")
            }
          />
        </div>

        <div className="p-3 mt-10 ml-10">
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

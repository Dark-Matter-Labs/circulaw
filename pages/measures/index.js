import { useState, useEffect, useRef } from "react";
import useSWR from "swr";
import Image from "next/image";
import Link from "next/link";
import createPersistedState from "use-persisted-state";
import { SearchIcon } from "@heroicons/react/outline";
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
import IconWood from "../../public/icons/wood.png";

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

  const [numberOfLaws, setNumberOfLaws] = useState(46);

  //dynamic filter numbers
  const [numberOfEuropees, setNumberOfEuropee] = useState(0);
  const [numberOfNationaal, setNumberOfNationaal] = useState(0);
  const [numberOfProvinciaal, setNumberOfProvinciaal] = useState(0);
  const [numberOfGemeentelijk, setNumberOfGemeentelijk] = useState(0);

  const [numberOfPubliek, setNumberOfPubliek] = useState(0);
  const [numberOfPrivaat, setNumberOfPrivaat] = useState(0);
  const [numberOfFiscaal, setNumberOfFiscaal] = useState(0);

  const [numberOfR1, setNumberOfR1] = useState(0);
  const [numberOfR2, setNumberOfR2] = useState(0);
  const [numberOfR3, setNumberOfR3] = useState(0);
  const [numberOfR4, setNumberOfR4] = useState(0);
  const [numberOfR5, setNumberOfR5] = useState(0);
  const [numberOfR6, setNumberOfR6] = useState(0);

  const [numberOfJ1, setNumberOfJ1] = useState(0);
  const [numberOfJ2, setNumberOfJ2] = useState(0);
  const [numberOfJ3, setNumberOfJ3] = useState(0);
  const [numberOfJ4, setNumberOfJ4] = useState(0);
  const [numberOfJ5, setNumberOfJ5] = useState(0);

  const [numberOfErp, setNumberOfErp] = useState(0);
  const [numberOfOmg, setNumberOfOmg] = useState(0);
  const [numberOfAan, setNumberOfAan] = useState(0);
  const [numberOfCont, setNumberOfCont] = useState(0);
  const [numberOfGron, setNumberOfGron] = useState(0);

  const [searchValue, setSearchValue] = useState("");

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

    setSearchValue("");
  };

  //effect to check for filtering and update data
  useEffect(() => {
    //added check for data to have been retrieved here
    if (data) {
      let filteredLaws = data;

      let numEuropee = 0;
      let numNationaal = 0;
      let numProvinciaal = 0;
      let numGemeentelijk = 0;

      let numPubliek = 0;
      let numPrivaat = 0;
      let numFiscaal = 0;

      let numR1 = 0;
      let numR2 = 0;
      let numR3 = 0;
      let numR4 = 0;
      let numR5 = 0;
      let numR6 = 0;

      let numJ1 = 0;
      let numJ2 = 0;
      let numJ3 = 0;
      let numJ4 = 0;
      let numJ5 = 0;

      let numErp = 0;
      let numOmg = 0;
      let numAan = 0;
      let numCont = 0;
      let numGron = 0;

      filteredLaws = filteredLaws.filter((element) => {
        return element.casus === "Houtbouw";
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

      filteredLaws = filteredLaws.filter((element) => {
        const searchContent =
          element.titel +
          element.introductie_juridische_maatregel +
          element.eisen_en_beperkingen +
          element.kop_1_samenvatting_juridische_maatregel +
          element.kop_2_toepassing_juridische_maatregel +
          element.toepassing_juridische_maatregel +
          element.kop_3_uit_de_praktijk +
          element.uit_de_praktijk +
          element.subrechtsgebied +
          element.artikel +
          element.citeertitel;
        return searchContent.toLowerCase().includes(searchValue.toLowerCase());
      });

      //dynamically calculate filter numbers
      filteredLaws.map((measure) => {
        if (measure.europees) {
          numEuropee += 1;
        }
        if (measure.nationaal) {
          numNationaal += 1;
        }
        if (measure.provinciaal) {
          numProvinciaal += 1;
        }
        if (measure.gemeentelijk) {
          numGemeentelijk += 1;
        }

        if (measure.rechtsgebied === "Publiekrecht") {
          numPubliek += 1;
        } else if (measure.rechtsgebied === "Privaatrecht") {
          numPrivaat += 1;
        } else if (measure.rechtsgebied === "Fiscaalrecht") {
          numFiscaal += 1;
        }

        if (measure.R1) {
          numR1 += 1;
        }
        if (measure.R2) {
          numR2 += 1;
        }
        if (measure.R3) {
          numR3 += 1;
        }
        if (measure.R4) {
          numR4 += 1;
        }
        if (measure.R5) {
          numR5 += 1;
        }
        if (measure.R6) {
          numR6 += 1;
        }

        if (measure.juridische_houdbaarheid === 1) {
          numJ1 += 1;
        } else if (measure.juridische_houdbaarheid === 2) {
          numJ2 += 1;
        } else if (measure.juridische_houdbaarheid === 3) {
          numJ3 += 1;
        } else if (measure.juridische_houdbaarheid === 4) {
          numJ4 += 1;
        } else if (measure.juridische_houdbaarheid === 5) {
          numJ5 += 1;
        }

        if (measure.subrechtsgebied === "Erfpacht") {
          numErp += 1;
        } else if (measure.subrechtsgebied === "Omgevingsrecht") {
          numOmg += 1;
        } else if (measure.subrechtsgebied === "Aanbesteding") {
          numAan += 1;
        } else if (measure.subrechtsgebied === "Contracten") {
          numCont += 1;
        } else if (measure.subrechtsgebied === "Gronduitgifte") {
          numGron += 1;
        }
      });

      setLaws(filteredLaws);
      setNumberOfLaws(filteredLaws.length);

      setNumberOfEuropee(numEuropee);
      setNumberOfNationaal(numNationaal);
      setNumberOfProvinciaal(numProvinciaal);
      setNumberOfGemeentelijk(numGemeentelijk);

      setNumberOfPubliek(numPubliek);
      setNumberOfPrivaat(numPrivaat);
      setNumberOfFiscaal(numFiscaal);

      setNumberOfR1(numR1);
      setNumberOfR2(numR2);
      setNumberOfR3(numR3);
      setNumberOfR4(numR4);
      setNumberOfR5(numR5);
      setNumberOfR6(numR6);

      setNumberOfJ1(numJ1);
      setNumberOfJ2(numJ2);
      setNumberOfJ3(numJ3);
      setNumberOfJ4(numJ4);
      setNumberOfJ5(numJ5);

      setNumberOfErp(numErp);
      setNumberOfOmg(numOmg);
      setNumberOfAan(numAan);
      setNumberOfCont(numCont);
      setNumberOfGron(numGron);
    }
  }, [data, selected, searchValue]);

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
        <div className="block text-[#4099DA]">
          <Link href="/">
            <a>Home</a>
          </Link>
          <span className=""> → </span>
          <Link href="/houtbouw">
            <a> Houtbouw </a>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-x-0 border-b-2 pb-4">
        <div className="pt-8">
          <div className="inline-block">
            <Image width="27" height="16" src={IconWood} alt="Icon of Wood" />
          </div>
          <h2 className="inline-block pl-2 text-3xl mb-20">Houtbouw</h2>
        </div>
        <div className="relative">
          <div>
            <span className="inline-block ">Zoek in houtbouwmaatregelen</span>
          </div>
          <div className="w-96 inline-block py-4 mb-10 px-4 border-2 border-black">
            <div className="flex">
              <SearchIcon className="h-6 w-6" aria-hidden="true" />
              <input
                onChange={(e) => setSearchValue(e.target.value)}
                value={searchValue}
                name="search"
                id="search"
                placeholder="Zoek op trefwoord"
                className="block w-full"
              />
            </div>
            {searchValue !== "" && (
              <button onClick={reset} className="blue">
                Clear search
              </button>
            )}
          </div>
          {numberOfLaws === 0 && (
            <div>
              <span>
                <b>0</b> maatregelen gevonden voor <b>{searchValue}</b> in{" "}
                <b>Houtbouw</b>{" "}
              </span>
            </div>
          )}

          {numberOfLaws > 1 && (
            <div>
              <span>
                <b>{numberOfLaws}</b> maatregelen gevonden voor{" "}
                <b>{searchValue}</b> in <b>Houtbouw</b>{" "}
              </span>
            </div>
          )}

          {searchValue !== "" && numberOfLaws === 1 && (
            <div>
              <span>
                <b>{numberOfLaws}</b> maatregel gevonden voor{" "}
                <b>{searchValue}</b> in <b>Houtbouw</b>{" "}
              </span>
            </div>
          )}
        </div>
      </div>
      <div className="flex ">
        <div className="p-3 my-10">
          <div className=" flex justify-between pb-3 border-b border-black mb-3">
            <span className="text-lg">Verfijnen</span>{" "}
            <span onClick={reset} className="underline blue link-hover">
              Wis filters
            </span>
          </div>
          <SearchFilter
            ref={wettelijkFilterRef}
            title="Bevoegdheidsniveau"
            list={wettelijk_bevoegdheidsniveau}
            filterNumbers={[
              numberOfEuropees,
              numberOfNationaal,
              numberOfProvinciaal,
              numberOfGemeentelijk,
            ]}
            handleFilters={(checkboxState) =>
              handleFilters(checkboxState, "wettelijk_bevoegdheidsniveau")
            }
          />
          <SearchFilter
            ref={rechtsgebiedFilterRef}
            title="Rechtsgebied"
            list={rechtsgebied}
            filterNumbers={[numberOfPubliek, numberOfPrivaat, numberOfFiscaal]}
            handleFilters={(checkboxState) =>
              handleFilters(checkboxState, "rechtsgebied")
            }
          />
          <SearchFilter
            ref={rLadderFilterRef}
            title="R - ladder"
            list={r_ladder}
            filterNumbers={[
              numberOfR1,
              numberOfR2,
              numberOfR3,
              numberOfR4,
              numberOfR5,
              numberOfR6,
            ]}
            handleFilters={(checkboxState) =>
              handleFilters(checkboxState, "r_ladder")
            }
          />
          <SearchFilter
            ref={juridischeFilterRef}
            title="Juridische houdbaarheid"
            list={juridische_houdbaarheid}
            filterNumbers={[
              numberOfJ1,
              numberOfJ2,
              numberOfJ3,
              numberOfJ4,
              numberOfJ5,
            ]}
            handleFilters={(checkboxState) =>
              handleFilters(checkboxState, "juridische_houdbaarheid")
            }
          />
          <SearchFilter
            ref={subrechtsgebiedFilterRef}
            title="Subrechtsgebied"
            list={subrechtsgebied}
            filterNumbers={[
              numberOfErp,
              numberOfOmg,
              numberOfAan,
              numberOfCont,
              numberOfGron,
            ]}
            handleFilters={(checkboxState) =>
              handleFilters(checkboxState, "subrechtsgebied")
            }
          />
        </div>

        <div className="p-3 mt-10 ml-10">
          {data && (
            <div>
              <PolicyList data={laws} casus="Houtbouw" />
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

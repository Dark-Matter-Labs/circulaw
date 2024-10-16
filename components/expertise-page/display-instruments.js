'use client';
import DisplaySubHeading from './display-instruments-with-subcategory';
import { useEffect, useState } from 'react';

const beleidSubCategories = ['strategie', 'beleidsdoorwerking', 'beleidsuitvoering'];
const inkoopSubCategories = [
  'beleid',
  'strategie',
  'bijzondere-procedures',
  'selectiecriteria',
  'gunningscriteria',
  'contracteisen',
];
const grondpositieSubCategories = [
  'strategie',
  'selectiecriteria',
  'gunningscriteria',
  'contracteisen',
];

// TODO: May even be able to move instrument fetching to here?
export default function DisplayInstruments({ instruments, categoryName }) {
  const [beleid1, setBeleid1] = useState();
  const [beleid2, setBeleid2] = useState();
  const [beleid3, setBeleid3] = useState();

  const [inkoop1, setInkoop1] = useState();
  const [inkoop2, setInkoop2] = useState();
  const [inkoop3, setInkoop3] = useState();
  const [inkoop4, setInkoop4] = useState();
  const [inkoop5, setInkoop5] = useState();
  const [inkoop6, setInkoop6] = useState();

  const [grondpositie1, setGrondpositie1] = useState();
  const [grondpositie2, setGrondpositie2] = useState();
  const [grondpositie3, setGrondpositie3] = useState();
  const [grondpositie4, setGrondpositie4] = useState();

  useEffect(() => {
    setBeleid1(
      instruments?.filter((instrument) =>
        instrument?.beleidSubCategory?.includes(beleidSubCategories[0]),
      ),
    );
    setBeleid2(
      instruments?.filter((instrument) =>
        instrument?.beleidSubCategory?.includes(beleidSubCategories[1]),
      ),
    );
    setBeleid3(
      instruments?.filter((instrument) =>
        instrument?.beleidSubCategory?.includes(beleidSubCategories[2]),
      ),
    );

    setInkoop1(
      instruments?.filter((instrument) =>
        instrument?.inkoopSubCategory?.includes(inkoopSubCategories[0]),
      ),
    );
    setInkoop2(
      instruments?.filter((instrument) =>
        instrument?.inkoopSubCategory?.includes(inkoopSubCategories[1]),
      ),
    );
    setInkoop3(
      instruments?.filter((instrument) =>
        instrument?.inkoopSubCategory?.includes(inkoopSubCategories[2]),
      ),
    );
    setInkoop4(
      instruments?.filter((instrument) =>
        instrument?.inkoopSubCategory?.includes(inkoopSubCategories[3]),
      ),
    );
    setInkoop5(
      instruments?.filter((instrument) =>
        instrument?.inkoopSubCategory?.includes(inkoopSubCategories[4]),
      ),
    );
    setInkoop6(
      instruments?.filter((instrument) =>
        instrument?.inkoopSubCategory?.includes(inkoopSubCategories[5]),
      ),
    );

    setGrondpositie1(
      instruments?.filter((instrument) =>
        instrument?.grondpositieSubCategory?.includes(grondpositieSubCategories[0]),
      ),
    );
    setGrondpositie2(
      instruments?.filter((instrument) =>
        instrument?.grondpositieSubCategory?.includes(grondpositieSubCategories[1]),
      ),
    );
    setGrondpositie3(
      instruments?.filter((instrument) =>
        instrument?.grondpositieSubCategory?.includes(grondpositieSubCategories[2]),
      ),
    );
    setGrondpositie4(
      instruments?.filter((instrument) =>
        instrument?.grondpositieSubCategory?.includes(grondpositieSubCategories[3]),
      ),
    );
  }, [instruments]);

  return (
    <>
      {categoryName === 'beleid' && (
        <div>
          {beleid1 !== 0 && <DisplaySubHeading arr={beleid1} subCat={beleidSubCategories[0]} />}
          {beleid2 !== 0 && <DisplaySubHeading arr={beleid2} subCat={beleidSubCategories[1]} />}
          {beleid3 !== 0 && <DisplaySubHeading arr={beleid3} subCat={beleidSubCategories[2]} />}
        </div>
      )}

      {categoryName === 'inkoop' && (
        <div>
          {inkoop1 !== 0 && <DisplaySubHeading arr={inkoop1} subCat={inkoopSubCategories[0]} />}
          {inkoop2 !== 0 && <DisplaySubHeading arr={inkoop2} subCat={inkoopSubCategories[1]} />}
          {inkoop3 !== 0 && <DisplaySubHeading arr={inkoop3} subCat={inkoopSubCategories[2]} />}
          {inkoop4 !== 0 && <DisplaySubHeading arr={inkoop4} subCat={inkoopSubCategories[3]} />}
          {inkoop5 !== 0 && <DisplaySubHeading arr={inkoop5} subCat={inkoopSubCategories[4]} />}
          {inkoop6 !== 0 && <DisplaySubHeading arr={inkoop6} subCat={inkoopSubCategories[5]} />}
        </div>
      )}
      {categoryName === 'grondpositie' && (
        <div>
          {grondpositie1 !== 0 && (
            <DisplaySubHeading arr={grondpositie1} subCat={grondpositieSubCategories[0]} />
          )}
          {grondpositie2 !== 0 && (
            <DisplaySubHeading arr={grondpositie2} subCat={grondpositieSubCategories[1]} />
          )}
          {grondpositie3 !== 0 && (
            <DisplaySubHeading arr={grondpositie3} subCat={grondpositieSubCategories[2]} />
          )}
          {grondpositie4 !== 0 && (
            <DisplaySubHeading arr={grondpositie4} subCat={grondpositieSubCategories[3]} />
          )}
        </div>
      )}
    </>
  );
}

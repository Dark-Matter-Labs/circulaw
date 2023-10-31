import { useEffect, useState } from 'react';

import OverviewPageHeader from '../overview-page-header';
import DisplayInstruments from '../expertise-page/display-instruments';

export default function SamenhangLayout({ expertiseData, ...props }) {
  useEffect(() => {});

  const [beleid, setBeleid] = useState([]);
  const [inkoop, setInkoop] = useState([]);
  const [grondpositie, setGrondpositie] = useState([]);
  const [subsidie, setSubsidie] = useState([]);
  const [fiscaal, setFiscaal] = useState([]);
  const [selected, setSelected] = useState('beleid');
  const [local, setLocal] = useState({ value: 'alle' });
  const [numBeleid, setNumBeleid] = useState();
  const [numInkoop, setNumInkoop] = useState();
  const [numGronposirie, setNumGronposirie] = useState();

  // need to make headings display conditionally
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

  const numGrondpositieStrategie = grondpositie.filter((instrument) =>
    instrument?.grondpositieSubCategory?.includes('strategie'),
  ).length;
  const numGrondpositieSelectiecriteria = grondpositie.filter((instrument) =>
    instrument?.grondpositieSubCategory?.includes('selectiecriteria'),
  ).length;
  const numGrondpositieGunningscriteria = grondpositie.filter((instrument) =>
    instrument?.grondpositieSubCategory?.includes('gunningscriteria'),
  ).length;
  const numGrondpositieContracteisen = grondpositie.filter((instrument) =>
    instrument?.grondpositieSubCategory?.includes('contracteisen'),
  ).length;
  // const numGronposirie = numGrondpositieStrategie + numGrondpositieSelectiecriteria + numGrondpositieGunningscriteria + numGrondpositieContracteisen

  const numBeleidStrategie = beleid.filter((instrument) =>
    instrument?.beleidSubCategory?.includes('strategie'),
  ).length;
  const numBeleidBeleidsdoorwerking = beleid.filter((instrument) =>
    instrument?.beleidSubCategory?.includes('beleidsdoorwerking'),
  ).length;
  const numBeleidBeleidsuitvoering = beleid.filter((instrument) =>
    instrument?.beleidSubCategory?.includes('beleidsuitvoering'),
  ).length;

  const numBeleidNotBouw = beleid.length;
  // const numBeleid = numBeleidStrategie + numBeleidBeleidsdoorwerking + numBeleidBeleidsuitvoering

  const numInkoopBeleid = inkoop.filter((instrument) =>
    instrument?.inkoopSubCategory?.includes('beleid'),
  ).length;
  const numInkoopStrategy = inkoop.filter((instrument) =>
    instrument?.inkoopSubCategory?.includes('strategie'),
  ).length;
  const numInkoopBijzondereProcedures = inkoop.filter((instrument) =>
    instrument?.inkoopSubCategory?.includes('bijzondere-procedures'),
  ).length;
  const numInkoopselectiecriteria = inkoop.filter((instrument) =>
    instrument?.inkoopSubCategory?.includes('selectiecriteria'),
  ).length;
  const numInkoopGunningscriteria = inkoop.filter((instrument) =>
    instrument?.inkoopSubCategory?.includes('gunningscriteria'),
  ).length;
  const numInkoopContracteisen = inkoop.filter((instrument) =>
    instrument?.inkoopSubCategory?.includes('contracteisen'),
  ).length;
  // const numInkoop = numInkoopBeleid + numInkoopStrategy + numInkoopBijzondereProcedures + numInkoopselectiecriteria + numInkoopGunningscriteria + numInkoopContracteisen

  // const [numBeleidStrategie, setNumBeleidStrategie] = useState()
  // const [numBeleidBeleidsdoorwerking, setNumBeleidBeleidsdoorwerking] = useState()
  // const [numBeleidBeleidsuitvoering, setNumBeleidBeleidsuitvoering] = useState()

  useEffect(() => {
    setNumBeleid(numBeleidStrategie + numBeleidBeleidsdoorwerking + numBeleidBeleidsuitvoering);
    setNumInkoop(
      numInkoopBeleid +
        numInkoopStrategy +
        numInkoopBijzondereProcedures +
        numInkoopselectiecriteria +
        numInkoopGunningscriteria +
        numInkoopContracteisen,
    );
    setNumGronposirie(
      numGrondpositieStrategie +
        numGrondpositieSelectiecriteria +
        numGrondpositieGunningscriteria +
        numGrondpositieContracteisen,
    );
  });

  useEffect(() => {
    // SET INITIAL VALUES
    if (selected === 'beleid') {
      setInkoop(expertiseData.filter((instrument) => instrument.inkoop === true));
      setGrondpositie(expertiseData.filter((instrument) => instrument.grondpositie === true));
      setSubsidie(expertiseData.filter((instrument) => instrument.subsidie === true));
      setFiscaal(expertiseData.filter((instrument) => instrument.fiscaal === true));
    } else if (selected === 'inkoop') {
      setBeleid(expertiseData.filter((instrument) => instrument.beleid === true));
      setGrondpositie(expertiseData.filter((instrument) => instrument.grondpositie === true));
      setSubsidie(expertiseData.filter((instrument) => instrument.subsidie === true));
      setFiscaal(expertiseData.filter((instrument) => instrument.fiscaal === true));
    } else if (selected === 'grondpositie') {
      setBeleid(expertiseData.filter((instrument) => instrument.beleid === true));
      setInkoop(expertiseData.filter((instrument) => instrument.inkoop === true));
      setSubsidie(expertiseData.filter((instrument) => instrument.subsidie === true));
      setFiscaal(expertiseData.filter((instrument) => instrument.fiscaal === true));
    } else if (selected === 'subsidie') {
      setBeleid(expertiseData.filter((instrument) => instrument.beleid === true));
      setInkoop(expertiseData.filter((instrument) => instrument.inkoop === true));
      setGrondpositie(expertiseData.filter((instrument) => instrument.grondpositie === true));
      setFiscaal(expertiseData.filter((instrument) => instrument.fiscaal === true));
    } else if (selected === 'fiscaal') {
      setBeleid(expertiseData.filter((instrument) => instrument.beleid === true));
      setInkoop(expertiseData.filter((instrument) => instrument.inkoop === true));
      setGrondpositie(expertiseData.filter((instrument) => instrument.grondpositie === true));
      setSubsidie(expertiseData.filter((instrument) => instrument.subsidie === true));
    }

    // BELEID
    if (local?.value === 'alle' && selected === 'beleid') {
      setBeleid(expertiseData.filter((instrument) => instrument.beleid === true));
    } else if (local?.value === 'Gemeentelijk' && selected === 'beleid') {
      setBeleid(
        expertiseData.filter(
          (instrument) =>
            instrument.beleid === true && instrument.overheidslaag.includes('Gemeentelijk'),
        ),
      );
    } else if (local?.value === 'Provinciaal' && selected === 'beleid') {
      setBeleid(
        expertiseData.filter(
          (instrument) =>
            instrument.beleid === true && instrument.overheidslaag.includes('Provinciaal'),
        ),
      );
    } else if (local?.value === 'Nationaal' && selected === 'beleid') {
      setBeleid(
        expertiseData.filter(
          (instrument) =>
            instrument.beleid === true && instrument.overheidslaag.includes('Nationaal'),
        ),
      );
    }

    // INKOOP
    if (local?.value === 'alle' && selected === 'inkoop') {
      setInkoop(expertiseData.filter((instrument) => instrument.inkoop === true));
    } else if (local?.value === 'Gemeentelijk' && selected === 'inkoop') {
      setInkoop(
        expertiseData.filter(
          (instrument) =>
            instrument.inkoop === true && instrument.overheidslaag.includes('Gemeentelijk'),
        ),
      );
    } else if (local?.value === 'Provinciaal' && selected === 'inkoop') {
      setInkoop(
        expertiseData.filter(
          (instrument) =>
            instrument.inkoop === true && instrument.overheidslaag.includes('Provinciaal'),
        ),
      );
    } else if (local?.value === 'Nationaal' && selected === 'inkoop') {
      setInkoop(
        expertiseData.filter(
          (instrument) =>
            instrument.inkoop === true && instrument.overheidslaag.includes('Nationaal'),
        ),
      );
    }

    // GRONDPOSITIE
    if (local?.value === 'alle' && selected === 'grondpositie') {
      setGrondpositie(expertiseData.filter((instrument) => instrument.grondpositie === true));
    } else if (local?.value === 'Gemeentelijk' && selected === 'grondpositie') {
      setGrondpositie(
        expertiseData.filter(
          (instrument) =>
            instrument.grondpositie === true && instrument.overheidslaag.includes('Gemeentelijk'),
        ),
      );
    } else if (local?.value === 'Provinciaal' && selected === 'grondpositie') {
      setGrondpositie(
        expertiseData.filter(
          (instrument) =>
            instrument.grondpositie === true && instrument.overheidslaag.includes('Provinciaal'),
        ),
      );
    } else if (local?.value === 'Nationaal' && selected === 'grondpositie') {
      setGrondpositie(
        expertiseData.filter(
          (instrument) =>
            instrument.grondpositie === true && instrument.overheidslaag.includes('Nationaal'),
        ),
      );
    }

    // SUBSIDIE
    if (local?.value === 'alle' && selected === 'subsidie') {
      setSubsidie(expertiseData.filter((instrument) => instrument.subsidie === true));
    } else if (local?.value === 'Gemeentelijk' && selected === 'subsidie') {
      setSubsidie(
        expertiseData.filter(
          (instrument) =>
            instrument.subsidie === true && instrument.overheidslaag.includes('Gemeentelijk'),
        ),
      );
    } else if (local?.value === 'Provinciaal' && selected === 'subsidie') {
      setSubsidie(
        expertiseData.filter(
          (instrument) =>
            instrument.subsidie === true && instrument.overheidslaag.includes('Provinciaal'),
        ),
      );
    } else if (local?.value === 'Nationaal' && selected === 'subsidie') {
      setSubsidie(
        expertiseData.filter(
          (instrument) =>
            instrument.subsidie === true && instrument.overheidslaag.includes('Nationaal'),
        ),
      );
    }

    // FISCAL
    if (local?.value === 'alle' && selected === 'fiscaal') {
      setFiscaal(expertiseData.filter((instrument) => instrument.fiscaal === true));
    } else if (local?.value === 'Gemeentelijk' && selected === 'fiscaal') {
      setFiscaal(
        expertiseData.filter(
          (instrument) =>
            instrument.fiscaal === true && instrument.overheidslaag.includes('Gemeentelijk'),
        ),
      );
    } else if (local?.value === 'Provinciaal' && selected === 'fiscaal') {
      setFiscaal(
        expertiseData.filter(
          (instrument) =>
            instrument.fiscaal === true && instrument.overheidslaag.includes('Provinciaal'),
        ),
      );
    } else if (local?.value === 'Nationaal' && selected === 'fiscaal') {
      setFiscaal(
        expertiseData.filter(
          (instrument) =>
            instrument.fiscaal === true && instrument.overheidslaag.includes('Nationaal'),
        ),
      );
    }
  }, [local.value, selected, expertiseData]);

  // change filters
  function handleRadioButton(value) {
    setLocal({
      value: value,
    });
  }

  return (
    <>
      <div className='global-margin mt-8'>
        <OverviewPageHeader props={props} page='samenhang' />
        <div className='grid grid-cols-1 sm:grid-cols-3 mt-10 sm:justify-items-end mb-10 sm:mb-0'>
          <div className='col-span-2'>
            <p className=' p-lg text-grey-800 pb-6'>{props.p1}</p>
          </div>
        </div>

        <div className='h-screen bg-red-100'>
          <div className='flex flex-row justify-between'>
            {/* do i do conditional rendering on tranision agenda? */}
            <button
              onClick={() => {
                setSelected(Object.keys({ beleid })[0]);
                handleRadioButton('alle');
              }}
              className={selected === 'beleid' ? 'bg-blue-300' : ''}
            >
              beleid{' '}
              {props.transitionAgenda === 'bouw' ? (
                <span>({numBeleid})</span>
              ) : (
                <span>({numBeleidNotBouw})</span>
              )}
            </button>
            <button
              onClick={() => {
                setSelected(Object.keys({ inkoop })[0]);
                handleRadioButton('alle');
              }}
              className={selected === 'inkoop' ? 'bg-blue-300' : ''}
            >
              inkoop ({numInkoop})
            </button>
            {props.transitionAgenda === 'bouw' && (
              <button
                onClick={() => {
                  setSelected(Object.keys({ grondpositie })[0]);
                  handleRadioButton('alle');
                }}
                className={selected === 'grondpositie' ? 'bg-blue-300' : ''}
              >
                grondpositie ({numGronposirie})
              </button>
            )}
            <button
              onClick={() => {
                setSelected(Object.keys({ subsidie })[0]);
                handleRadioButton('alle');
              }}
              className={selected === 'subsidie' ? 'bg-blue-300' : ''}
            >
              subsidie ({subsidie.length})
            </button>
            <button
              onClick={() => {
                setSelected(Object.keys({ fiscaal })[0]);
                handleRadioButton('alle');
              }}
              className={selected === 'fiscaal' ? 'bg-blue-300' : ''}
            >
              fiscaal ({fiscaal.length})
            </button>
          </div>
          <div className='bg-green-100 flex flex-row justify-between'>
            <div>filters</div>
            <div>
              alle
              <input
                type='radio'
                name='filter'
                value='alle'
                checked={local?.value === 'alle'}
                onChange={() => handleRadioButton('alle')}
              ></input>
            </div>
            <div>
              Gemeentelijk
              <input
                type='radio'
                name='filter'
                value='Gemeentelijk'
                checked={local?.value === 'Gemeentelijk'}
                onChange={() => handleRadioButton('Gemeentelijk')}
              ></input>
            </div>
            <div>
              Provinciaal
              <input
                type='radio'
                name='filter'
                value='Provinciaal'
                checked={local?.value === 'Provinciaal'}
                onChange={() => handleRadioButton('Provinciaal')}
              ></input>
            </div>
            <div>
              Nationaal
              <input
                type='radio'
                name='filter'
                value='Nationaal'
                checked={local?.value === 'Nationaal'}
                onChange={() => handleRadioButton('Nationaal')}
              ></input>
            </div>
          </div>

          <div className='flex flex-col'>
            {selected === 'beleid' && props.transitionAgenda === 'bouw' && (
              <>
                {beleidSubCategories.map((cat) => (
                  <DisplayInstruments
                    key={cat}
                    category={beleid}
                    subCategory={cat}
                    filter={(instrument) => instrument?.beleidSubCategory?.includes(cat)}
                  />
                ))}
              </>
            )}
            {selected === 'beleid' &&
              props.transitionAgenda !== 'bouw' &&
              beleid.map((instrument) => (
                <div key={instrument.titel} className='flex flex-row justify-between'>
                  <div className='py-1 border-t border-b border-black'>{instrument.titel}</div>
                  <div className='flex flex-row'>
                    {instrument.overheidslaag.map((govLevel) => (
                      <div key={govLevel}>{govLevel}</div>
                    ))}
                  </div>
                </div>
              ))}
            {selected === 'inkoop' &&
              inkoopSubCategories.map((cat) => (
                <DisplayInstruments
                  key={cat}
                  category={inkoop}
                  subCategory={cat}
                  filter={(instrument) => instrument?.inkoopSubCategory?.includes(cat)}
                />
              ))}
            {selected == 'grondpositie' &&
              props.transitionAgenda === 'bouw' &&
              grondpositieSubCategories.map((cat) => (
                <DisplayInstruments
                  key={cat}
                  category={grondpositie}
                  subCategory={cat}
                  filter={(instrument) => instrument?.grondpositieSubCategory?.includes(cat)}
                />
              ))}
            {selected === 'subsidie' &&
              subsidie.map((instrument) => (
                <div key={instrument.titel} className='flex flex-row justify-between'>
                  <div className='py-1 border-t border-b border-black'>{instrument.titel}</div>
                  <div className='flex flex-row'>
                    {instrument.overheidslaag.map((govLevel) => (
                      <div key={govLevel}>{govLevel}</div>
                    ))}
                  </div>
                </div>
              ))}
            {selected === 'fiscaal' &&
              fiscaal.map((instrument) => (
                <div key={instrument.titel} className='flex flex-row justify-between'>
                  <div className='py-1 border-t border-b border-black'>{instrument.titel}</div>
                  <div className='flex flex-row'>
                    {instrument.overheidslaag.map((govLevel) => (
                      <div key={govLevel}>{govLevel}</div>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

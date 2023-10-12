import { useEffect, useState } from 'react';

import OverviewPageHeader from '../overview-page-header';

export default function SamenhangLayout({ expertiseData, ...props }) {
  const [beleid, setBeleid] = useState(
    expertiseData.filter((instrument) => instrument.beleid === true),
  );
  const [inkoop, setInkoop] = useState([]);
  const [grondpositie, setGrondpositie] = useState([]);
  const [subsidie, setSubsidie] = useState([]);
  const [fiscaal, setFiscaal] = useState([]);

  const [selected, setSelected] = useState('beleid');

  const [local, setLocal] = useState();

  // if selected setBeleid differently ?
  useEffect(() => {
    if (local?.value === 'Gemeentelijk') {
      setBeleid(
        expertiseData.filter(
          (instrument) =>
            instrument.beleid === true && instrument.overheidslaag.includes('Gemeentelijk'),
        ),
      );
    } else if (local?.value === 'Provinciaal') {
      setBeleid(
        expertiseData.filter(
          (instrument) =>
            instrument.beleid === true && instrument.overheidslaag.includes('Provinciaal'),
        ),
      );
    } else if (local?.value === 'Nationaal') {
      setBeleid(
        expertiseData.filter(
          (instrument) =>
            instrument.beleid === true && instrument.overheidslaag.includes('Nationaal'),
        ),
      );
    } else {
      setBeleid(expertiseData.filter((instrument) => instrument.beleid === true));
    }

    setInkoop(expertiseData.filter((instrument) => instrument.inkoop === true));
    setGrondpositie(expertiseData.filter((instrument) => instrument.grondpositie === true));
    setSubsidie(expertiseData.filter((instrument) => instrument.subsidie === true));
    setFiscaal(expertiseData.filter((instrument) => instrument.fiscaal === true));
  }, [expertiseData, local]);

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
              onClick={() => setSelected(Object.keys({ beleid })[0])}
              className={selected === 'beleid' ? 'bg-blue-300' : ''}
            >
              beleid (help)
            </button>
            <button
              onClick={() => setSelected(Object.keys({ inkoop })[0])}
              className={selected === 'inkoop' ? 'bg-blue-300' : ''}
            >
              inkoop ({inkoop.length})
            </button>
            <button
              onClick={() => setSelected(Object.keys({ grondpositie })[0])}
              className={selected === 'grondpositie' ? 'bg-blue-300' : ''}
            >
              grondpositie ({grondpositie.length})
            </button>
            <button
              onClick={() => setSelected(Object.keys({ subsidie })[0])}
              className={selected === 'subsidie' ? 'bg-blue-300' : ''}
            >
              subsidie ({subsidie.length})
            </button>
            <button
              onClick={() => setSelected(Object.keys({ fiscaal })[0])}
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
                checked
                onChange={() => handleRadioButton('alle')}
              ></input>
            </div>
            <div>
              Gemeentelijk
              <input
                type='radio'
                name='filter'
                value='Gemeentelijk'
                onChange={() => handleRadioButton('Gemeentelijk')}
              ></input>
            </div>
            <div>
              Provinciaal
              <input
                type='radio'
                name='filter'
                value='Provinciaal'
                onChange={() => handleRadioButton('Provinciaal')}
              ></input>
            </div>
            <div>
              Nationaal
              <input
                type='radio'
                name='filter'
                value='Nationaal'
                onChange={() => handleRadioButton('Nationaal')}
              ></input>
            </div>
          </div>

          <div className='flex flex-col'>
            {selected === 'beleid' && (
              <>
                <div>
                  <div className='text-green-600'>strategie heading</div>
                  {beleid
                    .filter((instrument) => instrument.beleidSubCategory.includes('strategie'))
                    .map((instrument) => (
                      <div key={instrument.titel} className='flex flex-row justify-between'>
                        <div className='py-1 border-t border-b border-black'>
                          {instrument.titel}
                        </div>
                        <div className='flex flex-row'>
                          {instrument.overheidslaag.map((govLevel) => (
                            <div key={govLevel}>{govLevel}</div>
                          ))}
                        </div>
                      </div>
                    ))}
                </div>
                <div>
                  <div className='text-green-600'>Beleidsdoorwerking heading</div>
                  {beleid
                    .filter((instrument) =>
                      instrument.beleidSubCategory.includes('beleidsdoorwerking'),
                    )
                    .map((instrument) => (
                      <div key={instrument.titel} className='flex flex-row justify-between'>
                        <div className='py-1 border-t border-b border-black'>
                          {instrument.titel}
                        </div>
                        <div className='flex flex-row'>
                          {instrument.overheidslaag.map((govLevel) => (
                            <div key={govLevel}>{govLevel}</div>
                          ))}
                        </div>
                      </div>
                    ))}
                </div>
                <div>
                  <div className='text-green-600'>Beleidsuitvoering heading</div>
                  {beleid
                    .filter((instrument) =>
                      instrument.beleidSubCategory.includes('beleidsuitvoering'),
                    )
                    .map((instrument) => (
                      <div key={instrument.titel} className='flex flex-row justify-between'>
                        <div className='py-1 border-t border-b border-black'>
                          {instrument.titel}
                        </div>
                        <div className='flex flex-row'>
                          {instrument.overheidslaag.map((govLevel) => (
                            <div key={govLevel}>{govLevel}</div>
                          ))}
                        </div>
                      </div>
                    ))}
                </div>
              </>
            )}

            {selected === 'inkoop' &&
              inkoop.map((instrument) => <div key={instrument.titel}>{instrument.titel}</div>)}
            {selected === 'grondpositie' &&
              grondpositie.map((instrument) => (
                <div key={instrument.titel}>{instrument.titel}</div>
              ))}
            {selected === 'subsidie' &&
              subsidie.map((instrument) => <div key={instrument.titel}>{instrument.titel}</div>)}
            {selected === 'fiscaal' &&
              fiscaal.map((instrument) => <div key={instrument.titel}>{instrument.titel}</div>)}
          </div>
        </div>
      </div>
    </>
  );
}

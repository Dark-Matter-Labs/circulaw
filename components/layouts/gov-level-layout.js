'use client';

import { useEffect, useState } from 'react';

import Link from 'next/link';

import { IconArrowRight, IconInfoSquareRoundedFilled } from '@tabler/icons-react';

import Header from '../headers';

export default function GovLevelLayout({ ...props }) {
  const allRegionLaws = props.allRegionLaws;
  const provLaws = props.provLaws;
  const gemLaws = props.gemLaws;
  const natLaws = props.natLaws;
  const [selected, setSelected] = useState('none');

  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage.length > 0) {
      let selected = localStorage.getItem('selectedGovLevel');
      let keys = [];
      for (let i = 0; i < localStorage.length; i++) {
        keys.push(localStorage.key(i));
      }
      setSelected(selected);
    }
  }, []);

  const handleSelected = (value) => {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('selectedGovLevel', value);
      setSelected(value);
    }
  };

  return (
    <div>
      <div className=''>
        <Header
          thema={props.thema}
          productChain={props.transitionAgenda}
          title={props.title}
          page='welke'
          bgColor='bg-green-500'
          imageURL='/big-decoration.png'
          pageType='instrumentOverview'
        />

        <div className='global-margin mb-20 mt-5 hidden sm:mt-20 sm:block'>
          <div className='flex flex-row items-center justify-between gap-x-10 rounded-cl px-6 py-6 shadow-cl1'>
            <div>Legend</div>
            <div className='relative flex h-[550px] flex-col gap-y-10'>
              <div className='relative h-[450px] w-[450px]'>
                <button
                  onClick={() => handleSelected('nationaal')}
                  className={`${selected === 'nationaal' ? 'bg-orange-100' : 'bg-green-200'} absolute bottom-0 left-1/2 z-10 h-[450px] w-[450px] -translate-x-1/2 rounded-full`}
                ></button>
                <button
                  onClick={() => handleSelected('provinciaal')}
                  className={`${selected === 'provinciaal' ? 'bg-orange-100' : 'bg-green-400'} absolute bottom-0 left-1/2 z-20 h-[350px] w-[350px] -translate-x-1/2 rounded-full`}
                ></button>
                <button
                  onClick={() => handleSelected('gemeentelijk')}
                  className={`${selected === 'gemeentelijk' ? 'bg-orange-100' : 'bg-green-600'} absolute bottom-0 left-1/2 z-30 h-[250px] w-[250px] -translate-x-1/2 rounded-full`}
                ></button>
                <button
                  onClick={() => handleSelected('alle')}
                  className={`${selected === 'alle' ? 'bg-orange-100' : 'bg-white/60'} absolute bottom-0 left-1/2 z-40 h-[450px] w-[94px] -translate-x-1/2 rounded-[50%]`}
                ></button>
              </div>
              <div className='flex flex-row items-start'>
                <IconInfoSquareRoundedFilled className='mr-3 size-8 text-green-500' />
                <p className='p-base-semibold text-green-500'>
                  Klik op de cirkels of de titels hieronder om te filteren
                </p>
              </div>
            </div>
            <ul className='mt-4 flex h-[534px] flex-col items-start'>
              <GovLevelButton
                label='Alle overheidslagen'
                value='alle'
                count={allRegionLaws.length}
                selected={selected}
                onClick={handleSelected}
                laws={allRegionLaws}
              />
              <GovLevelButton
                label='Nationaal'
                value='nationaal'
                count={natLaws.length}
                selected={selected}
                onClick={handleSelected}
                laws={natLaws}
              />
              <GovLevelButton
                label='Provinciaal'
                value='provinciaal'
                count={provLaws.length}
                selected={selected}
                onClick={handleSelected}
                laws={provLaws}
              />
              <GovLevelButton
                label='Gemeentelijk'
                value='gemeentelijk'
                count={gemLaws.length}
                selected={selected}
                onClick={handleSelected}
                laws={gemLaws}
              />
              <li
                className={`${
                  selected === 'none' ? 'text-orange-300' : 'text-green-500'
                } p-base-semibold my-2 w-min text-nowrap rounded-cl`}
              >
                <button onClick={() => handleSelected('none')}>Toon alle instrumenten</button>
              </li>
            </ul>
          </div>
          <div className='flex h-64 sm:hidden'>Mobile version:</div>
        </div>
        <div className='global-margin my-16 flex'>
          <div className='hidden flex-col items-center sm:flex'>
            <div className='heading-3xl-semibold mb-6 rotate-180 text-green-500 [writing-mode:vertical-rl]'>
              Instrumentn
            </div>
            <div className='h-full w-2 rounded-full bg-green-300' />
          </div>
          <div className='ml-0 flex min-h-96 w-full flex-col gap-x-10 sm:ml-16 sm:flex-row'>
            {allRegionLaws.length && (selected === 'alle' || selected === 'none') > 0 && (
              <div className='sm:basis-1/2'>
                <>
                  <h2 className='heading-2xl-semibold mb-4 text-green-500'>
                    Alle overheidslagen {allRegionLaws.length}
                  </h2>
                  <ul className='p-base mb-4 text-green-800 underline sm:mb-0'>
                    {allRegionLaws.map((instrument, id) => (
                      <Link
                        key={id}
                        href={`/${instrument.transitionAgenda}/${instrument.thema}/instrumenten/${instrument.slug.current}`}
                        className='link-interaction'
                      >
                        <li className='mb-2 flex flex-row items-start'>
                          <div>
                            <IconArrowRight className='mt-0.5 size-6 text-inherit' />
                          </div>
                          <span className='ml-1'>{instrument.titel}</span>
                        </li>
                      </Link>
                    ))}
                  </ul>
                </>
              </div>
            )}

            <div className='flex flex-col sm:basis-1/2'>
              {natLaws.length > 0 && (selected === 'nationaal' || selected === 'none') && (
                <>
                  <h2 className='heading-2xl-semibold mb-4 text-green-500'>
                    Nationaal {natLaws.length}
                  </h2>
                  <ul className='p-base mb-4 text-green-800 underline'>
                    {natLaws.map((instrument, id) => (
                      <Link
                        key={id}
                        href={`/${instrument.transitionAgenda}/${instrument.thema}/instrumenten/${instrument.slug.current}`}
                        className='link-interaction'
                      >
                        <li className='mb-2 flex flex-row items-start'>
                          <div>
                            <IconArrowRight className='mt-0.5 size-6 text-inherit' />
                          </div>
                          <span className='ml-1'>{instrument.titel}</span>
                        </li>
                      </Link>
                    ))}
                  </ul>
                </>
              )}
              {provLaws.length > 0 && (selected === 'provinciaal' || selected === 'none') && (
                <>
                  <h2 className='heading-2xl-semibold mb-4 text-green-500'>
                    Provinciaal {provLaws.length}
                  </h2>
                  <ul className='p-base mb-4 text-green-800 underline'>
                    {provLaws.map((instrument, id) => (
                      <Link
                        key={id}
                        href={`/${instrument.transitionAgenda}/${instrument.thema}/instrumenten/${instrument.slug.current}`}
                        className='link-interaction'
                      >
                        <li className='mb-2 flex flex-row items-start'>
                          <div>
                            <IconArrowRight className='mt-0.5 size-6 text-inherit' />
                          </div>
                          <span className='ml-1'>{instrument.titel}</span>
                        </li>
                      </Link>
                    ))}
                  </ul>
                </>
              )}
              {gemLaws.length > 0 && (selected === 'gemeentelijk' || selected === 'none') && (
                <>
                  <h2 className='heading-2xl-semibold mb-4 text-green-500'>
                    Gemeentelijk {gemLaws.length}
                  </h2>
                  <ul className='p-base text-green-800 underline'>
                    {gemLaws.map((instrument, id) => (
                      <Link
                        key={id}
                        href={`/${instrument.transitionAgenda}/${instrument.thema}/instrumenten/${instrument.slug.current}`}
                        className='link-interaction'
                      >
                        <li className='mb-2 flex flex-row items-start'>
                          <div>
                            <IconArrowRight className='mt-0.5 size-6 text-inherit' />
                          </div>
                          <span className='ml-1'>{instrument.titel}</span>
                        </li>
                      </Link>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function GovLevelButton({ label, value, count, selected, onClick, laws = [] }) {
  return (
    <li>
      <button
        onClick={() => onClick(value)}
        className={`${
          selected === value ? 'bg-orange-100 text-orange-300' : 'bg-green-100 text-green-500'
        } heading-2xl-semibold my-2 flex w-min flex-col items-start justify-start text-nowrap rounded-cl px-4 py-2 shadow-cl1`}
      >
        <h3>{label}</h3>
        <p className='p-base'>{count} instrumenten</p>
      </button>
      {selected === value && (
        <div className='mt-2 flex max-w-[260px] flex-wrap gap-2 py-2'>
          {laws.map((_, idx) => (
            <div key={idx} className='h-6 w-6 rounded-full bg-orange-300' />
          ))}
        </div>
      )}
    </li>
  );
}

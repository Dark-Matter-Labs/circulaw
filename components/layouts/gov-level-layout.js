'use client';

import { useEffect, useRef, useState } from 'react';

import Link from 'next/link';

import { IconArrowRight, IconInfoSquareRoundedFilled } from '@tabler/icons-react';

import Header from '../headers';
import Pagination from '../shared/pagination';

function getGovLevelBgColor(length, allLengths) {
  if (length === 0) return '#000000'; // black

  const sorted = [...allLengths].sort((a, b) => a - b);
  const min = sorted[0];
  const max = sorted[2];

  if (length === max) return '#028352'; // green-500
  if (length === min) return '#84E9C5'; // green-300
  return '#25C38B'; // green-400
}

export default function GovLevelLayout({ ...props }) {
  const allRegionLaws = props.allRegionLaws;
  const provLaws = props.provLaws;
  const gemLaws = props.gemLaws;
  const natLaws = props.natLaws;
  const [selected, setSelected] = useState('none');
  const provBg = getGovLevelBgColor(provLaws.length, [
    provLaws.length,
    gemLaws.length,
    natLaws.length,
  ]);
  const gemBg = getGovLevelBgColor(gemLaws.length, [
    provLaws.length,
    gemLaws.length,
    natLaws.length,
  ]);
  const natBg = getGovLevelBgColor(natLaws.length, [
    provLaws.length,
    gemLaws.length,
    natLaws.length,
  ]);

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

  const circleRefs = {
    nationaal: useRef(null),
    provinciaal: useRef(null),
    gemeentelijk: useRef(null),
    alle: useRef(null),
  };
  const buttonRefs = {
    nationaal: useRef(null),
    provinciaal: useRef(null),
    gemeentelijk: useRef(null),
    alle: useRef(null),
  };
  const containerRef = useRef(null);

  const [lines, setLines] = useState([]);

  useEffect(() => {
    const levels = ['nationaal', 'provinciaal', 'gemeentelijk', 'alle'];
    const bgColors = {
      nationaal: natBg,
      provinciaal: provBg,
      gemeentelijk: gemBg,
      alle: '#22c55e',
    };
    const newLines = levels.map((level) => {
      const btn = buttonRefs[level].current;
      const circle = circleRefs[level].current;
      if (!btn || !circle) return null;
      const btnRect = btn.getBoundingClientRect();
      const circleRect = circle.getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();
      let x1 = btnRect.left - containerRect.left;
      let y1 = btnRect.top + btnRect.height / 2 - containerRect.top;
      let x2 = circleRect.left + circleRect.width / 2 - containerRect.left;
      let y2 = y1;

      const lineOffsets = {
        nationaal: { x1: -20, y1: 0, x2: 180, y2: 0 },
        provinciaal: { x1: -20, y1: 0, x2: 140, y2: 0 },
        gemeentelijk: { x1: -20, y1: 0, x2: 40, y2: 0 },
        alle: { x1: -20, y1: 0, x2: 0, y2: 0 },
      };
      const offset = lineOffsets[level] || {};
      x1 += offset.x1 || 0;
      y1 += offset.y1 || 0;
      x2 += offset.x2 || 0;
      y2 += offset.y2 || 0;

      // If selected, always use #f7e3c3
      let stroke = 'none';
      if (selected === 'none') {
        stroke = bgColors[level];
      } else if (selected === level) {
        stroke = '#f7e3c3';
      }
      return { x1, y1, x2, y2, stroke };
    });
    setLines(newLines.filter(Boolean));
  }, [selected, natBg, provBg, gemBg]);

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
        <div className='global-margin'>
          <Pagination pages={props.pages} position='top' />
        </div>

        <div className='global-margin relative mb-20 mt-5 block sm:mt-10'>
          <div className='hidden flex-row items-center justify-center gap-x-10 rounded-cl px-12 py-6 shadow-cl1 lgNav:flex'>
            <div className='flex max-w-[140px] flex-col gap-y-1'>
              <h4 className='p-xs-semibold'>Hoogste aantal instrumenten</h4>
              <div className='h-9 w-9 rounded-clSm bg-green-500' />
              <div className='h-9 w-9 rounded-clSm bg-green-400' />
              <div className='h-9 w-9 rounded-clSm bg-green-300' />
              <h4 className='p-xs-semibold'>Laagste aantal instrumenten</h4>
            </div>
            {/* SVG overlay here, positioned absolutely */}
            <div
              className='relative flex flex-row items-center justify-between gap-x-20'
              ref={containerRef}
            >
              <svg
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  width: '100%',
                  height: '100%',
                  pointerEvents: 'none',
                  zIndex: 50,
                }}
              >
                {lines.map((line, idx) => (
                  <line
                    key={idx}
                    x1={line.x1}
                    y1={line.y1}
                    x2={line.x2}
                    y2={line.y2}
                    stroke={line.stroke}
                    strokeWidth='2'
                  />
                ))}
              </svg>
              <div className='relative flex h-[550px] flex-col gap-y-10 overflow-visible'>
                <div className='relative h-[450px] w-[450px]'>
                  <button
                    onClick={() => handleSelected('nationaal')}
                    ref={circleRefs.nationaal}
                    style={selected === 'nationaal' ? {} : { backgroundColor: natBg }}
                    className={`${selected === 'nationaal' ? 'bg-orange-100' : natBg} absolute bottom-0 left-1/2 z-10 h-[450px] w-[450px] -translate-x-1/2 rounded-full`}
                  ></button>
                  <button
                    onClick={() => handleSelected('provinciaal')}
                    ref={circleRefs.provinciaal}
                    style={selected === 'provinciaal' ? {} : { backgroundColor: provBg }}
                    className={`${selected === 'provinciaal' ? 'bg-orange-100' : provBg} absolute bottom-0 left-1/2 z-20 h-[350px] w-[350px] -translate-x-1/2 rounded-full`}
                  ></button>
                  <button
                    onClick={() => handleSelected('gemeentelijk')}
                    ref={circleRefs.gemeentelijk}
                    style={selected === 'gemeentelijk' ? {} : { backgroundColor: gemBg }}
                    className={`${selected === 'gemeentelijk' ? 'bg-orange-100' : gemBg} absolute bottom-0 left-1/2 z-30 h-[250px] w-[250px] -translate-x-1/2 rounded-full`}
                  ></button>
                  <button
                    onClick={() => handleSelected('alle')}
                    ref={circleRefs.alle}
                    style={selected === 'alle' ? {} : { backgroundColor: '#FFFFFF99' }}
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
                  buttonRef={buttonRefs.alle}
                />
                <GovLevelButton
                  label='Nationaal'
                  value='nationaal'
                  count={natLaws.length}
                  selected={selected}
                  onClick={handleSelected}
                  laws={natLaws}
                  buttonRef={buttonRefs.nationaal}
                />
                <GovLevelButton
                  label='Provinciaal'
                  value='provinciaal'
                  count={provLaws.length}
                  selected={selected}
                  onClick={handleSelected}
                  laws={provLaws}
                  buttonRef={buttonRefs.provinciaal}
                />
                <GovLevelButton
                  label='Gemeentelijk'
                  value='gemeentelijk'
                  count={gemLaws.length}
                  selected={selected}
                  onClick={handleSelected}
                  laws={gemLaws}
                  buttonRef={buttonRefs.gemeentelijk}
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
          </div>
          <div className='flex flex-col lgNav:hidden'>
            <div className='my-4 flex flex-row items-start'>
              <IconInfoSquareRoundedFilled className='mr-2 size-6 text-green-500' />
              <p className='p-2xs text-green-500 max-w-[160px]'>
                Klik op de cirkels of de titels hieronder om te filteren
              </p>
            </div>
            <ul
              className={`${selected === 'none' ? '' : 'min-h-[200px]'} no-scrollbar flex flex-row gap-x-4 overflow-scroll`}
            >
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
            </ul>
            <div className='relative mt-4 h-[300px] w-full'>
              <div
                style={selected === 'nationaal' ? {} : { backgroundColor: natBg }}
                className={`${selected === 'nationaal' ? 'bg-orange-100' : natBg} absolute bottom-0 left-1/2 z-10 h-[300px] w-[300px] -translate-x-1/2 rounded-full`}
              ></div>
              <div
                style={selected === 'provinciaal' ? {} : { backgroundColor: provBg }}
                className={`${selected === 'provinciaal' ? 'bg-orange-100' : provBg} absolute bottom-0 left-1/2 z-20 h-[220px] w-[220px] -translate-x-1/2 rounded-full`}
              ></div>
              <div
                style={selected === 'gemeentelijk' ? {} : { backgroundColor: gemBg }}
                className={`${selected === 'gemeentelijk' ? 'bg-orange-100' : gemBg} absolute bottom-0 left-1/2 z-30 h-[140px] w-[140px] -translate-x-1/2 rounded-full`}
              ></div>
              <div
                style={selected === 'alle' ? {} : { backgroundColor: '#FFFFFF99' }}
                className={`${selected === 'alle' ? 'bg-orange-100' : 'bg-white/60'} absolute bottom-0 left-1/2 z-40 h-[300px] w-[60px] -translate-x-1/2 rounded-[50%]`}
              ></div>
            </div>
            <div className='mt-8 flex w-full flex-row items-center justify-between'>
              <h4 className='p-2xs'>Hoogste aantal instrumenten</h4>
              <div className='flex flex-row gap-x-1'>
                <div className='h-9 w-9 rounded-clSm bg-green-500' />
                <div className='h-9 w-9 rounded-clSm bg-green-400' />
                <div className='h-9 w-9 rounded-clSm bg-green-300' />
              </div>
              <h4 className='p-2xs flex-shrink text-right'>Laagste aantal instrumenten</h4>
            </div>
          </div>
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

function GovLevelButton({ label, value, count, selected, onClick, laws = [], buttonRef }) {
  return (
    <li>
      <button
        onClick={() => onClick(value)}
        ref={buttonRef}
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

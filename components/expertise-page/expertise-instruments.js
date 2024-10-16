'use client';
import { useEffect, useState } from 'react';
import ExpertisePageInstrument from './expertise-page-instrument';
import DisplayInstruments from './display-instruments';
import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from '@headlessui/react';
import { IconChevronDown } from '@tabler/icons-react';

const govLevels = [
  { id: 1, name: 'Alle' },
  { id: 2, name: 'Gemeentelijk' },
  { id: 3, name: 'Provinciaal' },
  { id: 4, name: 'Nationaal' },
];
export default function ExpertiseInstruments({ selected, instruments, transitionAgenda }) {
  const [filteredInstruments, setFilteredInstruments] = useState([]);
  const [govLevel, setGovLevel] = useState({ value: 'alle' });

  useEffect(() => {
    if (govLevel.value === 'Gemeentelijk') {
      setFilteredInstruments(
        instruments.filter((instrument) => instrument.overheidslaag.includes(govLevel.value)),
      );
    } else if (govLevel.value === 'Provinciaal') {
      setFilteredInstruments(
        instruments.filter((instrument) => instrument.overheidslaag.includes(govLevel.value)),
      );
    } else if (govLevel.value === 'Nationaal') {
      setFilteredInstruments(
        instruments.filter((instrument) => instrument.overheidslaag.includes(govLevel.value)),
      );
    } else {
      setFilteredInstruments(instruments);
    }
  }, [instruments, govLevel]);
  // todo - update radio buttons to headless ui
  function handleRadioButton(value) {
    setGovLevel({
      value: value,
    });
  }

  // mobile filters
  const [selectedGovLevel, setSelectedGovLevel] = useState(govLevels[1]);

  return (
    <>
      <div className='hidden sm:flex flex-row items-center h-11'>
        <div className='basis-1/2 ml-3 flex justify-end pr-3'>
          <div className='p-2xs-bold'>Toon:</div>
        </div>
        <div className='basis-1/2 mr-3 flex flex-row items-center justify-between p-xs font-medium max-w-[413px]'>
          <div className='mr-4 w-[60px]'>
            <input
              type='radio'
              name='filter'
              value='alle'
              id='alle'
              checked={govLevel?.value === 'alle'}
              onChange={() => handleRadioButton('alle')}
              className='mr-2 text-black border-black border-2 h-4 w-4 focus:ring-black focus:ring-2 cursor-pointer bg-none'
            />
            <label htmlFor='alle' className='p-2xs-semibold hover:cursor-pointer'>
              Alle
            </label>
          </div>
          <div className='mr-4 w-[115px]'>
            <input
              type='radio'
              name='filter'
              value='Gemeentelijk'
              id='gemeentelijk'
              checked={govLevel?.value === 'Gemeentelijk'}
              onChange={() => handleRadioButton('Gemeentelijk')}
              className='mr-2 text-green-200 border-black border-2 h-4 w-4 focus:ring-green-200 focus:ring-2 cursor-pointer bg-none'
            />
            <label htmlFor='gemeentelijk' className='p-2xs-semibold hover:cursor-pointer'>
              Gemeentelijk
            </label>
          </div>
          <div className='mr-4 w-[100px]'>
            <input
              type='radio'
              name='filter'
              value='Provinciaal'
              id='provinciaal'
              checked={govLevel?.value === 'Provinciaal'}
              onChange={() => handleRadioButton('Provinciaal')}
              className='mr-2 text-green-400 border-black border-2 h-4 w-4 focus:ring-green-400 focus:ring-2 cursor-pointer bg-none'
            />
            <label htmlFor='provinciaal' className='p-2xs-semibold hover:cursor-pointer'>
              Provinciaal
            </label>
          </div>

          <div className='w-[90px]'>
            <input
              type='radio'
              name='filter'
              value='Nationaal'
              id='nationaal'
              checked={govLevel?.value === 'Nationaal'}
              onChange={() => handleRadioButton('Nationaal')}
              className='mr-2 text-green-600 border-black border-2 h-4 w-4 focus:ring-green-600 focus:ring-2 cursor-pointer bg-none'
            />
            <label htmlFor='nationaal' className='p-2xs-semibold hover:cursor-pointer'>
              Nationaal
            </label>
          </div>
        </div>
      </div>

      <div className='block sm:hidden'>
        <div>Toon overheidslaag:</div>
        <Listbox as='div' value={selectedGovLevel} onChange={setSelectedGovLevel} className='my-4'>
          <ListboxButton className='border border-green-500 data-[open]:boder-b-none rounded-cl data-[open]:rounded-b-none w-full group flex items-center relative h-10 overflow-hidden'>
            <span className='p-base-bold ml-2 text-green-500'>{selectedGovLevel.name}</span>
            <div className='w-10 h-full bg-green-500 flex items-center justify-center absolute top-0 right-0'>
              <IconChevronDown className='h-6 w-6 text-green-50 group-data-[open]:rotate-180' />
            </div>
          </ListboxButton>
          <ListboxOptions anchor='bottom' transition className='w-[var(--button-width)] group'>
            {govLevels.map((govLevel) => (
              <ListboxOption
                onClick={() => handleRadioButton(govLevel.name)}
                key={govLevel.name}
                value={govLevel}
                className='h-10 pl-2 bg-white p-base flex items-center border-b border-x border-green-500 data-[selected]:hidden last:rounded-b-cl'
              >
                {govLevel.name}
              </ListboxOption>
            ))}
          </ListboxOptions>
        </Listbox>
      </div>

      <div className='min-h-[1200px] bg-gray-100'>
        {/* DISPLAY INSTRUMENTS DESKTOP */}
        <div className='flex flex-col'>
          <ul>
            {selected === 'beleid' && transitionAgenda === 'bouw' && (
              <DisplayInstruments instruments={filteredInstruments} categoryName='beleid' />
            )}
          </ul>
          <ul>
            {selected === 'beleid' &&
              transitionAgenda !== 'bouw' &&
              filteredInstruments.map((instrument) => (
                <ExpertisePageInstrument key={instrument.titel} instrument={instrument} />
              ))}
          </ul>
          <ul>
            {selected === 'inkoop' && (
              <DisplayInstruments instruments={filteredInstruments} categoryName='inkoop' />
            )}
          </ul>
          <ul>
            {selected == 'grondpositie' && transitionAgenda === 'bouw' && (
              <DisplayInstruments instruments={filteredInstruments} categoryName='grondpositie' />
            )}
          </ul>
          <ul>
            {selected === 'grondpositie' &&
              transitionAgenda !== 'bouw' &&
              filteredInstruments.map((instrument) => (
                <ExpertisePageInstrument key={instrument.titel} instrument={instrument} />
              ))}
          </ul>
          <ul className=''>
            {selected === 'subsidie' &&
              filteredInstruments.map((instrument) => (
                <ExpertisePageInstrument key={instrument.titel} instrument={instrument} />
              ))}
          </ul>
          <ul>
            {selected === 'fiscaal' &&
              filteredInstruments.map((instrument) => (
                <ExpertisePageInstrument key={instrument.titel} instrument={instrument} />
              ))}
          </ul>
        </div>
      </div>
    </>
  );
}

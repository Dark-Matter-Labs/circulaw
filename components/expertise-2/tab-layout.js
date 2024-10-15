'use client';
import DisplayInstruments from './display-instruments';
import ExpertisePageInstrument from './expertise-page-instrument';

// TODO: change name of this
export default function TabLayout({ selected, instruments, transitionAgenda }) {
  return (
    <>
      <div className='flex flex-ro items-center h-11'>
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
              //  checked={local?.value === 'alle'}
              // onChange={() => handleRadioButton('alle')}
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
              //  checked={local?.value === 'Gemeentelijk'}
              // onChange={() => handleRadioButton('Gemeentelijk')}
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
              // checked={local?.value === 'Provinciaal'}
              //  onChange={() => handleRadioButton('Provinciaal')}
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
              // checked={local?.value === 'Nationaal'}
              // onChange={() => handleRadioButton('Nationaal')}
              className='mr-2 text-green-600 border-black border-2 h-4 w-4 focus:ring-green-600 focus:ring-2 cursor-pointer bg-none'
            />
            <label htmlFor='nationaal' className='p-2xs-semibold hover:cursor-pointer'>
              Nationaal
            </label>
          </div>
        </div>
      </div>

      <div className='min-h-[1200px] bg-gray-100'>
        {/* DISPLAY INSTRUMENTS DESKTOP */}
        <div className='flex flex-col'>
          <ul>
            {selected === 'beleid' && transitionAgenda === 'bouw' && (
              <DisplayInstruments instruments={instruments} categoryName='beleid' />
            )}
          </ul>
          <ul>
            {selected === 'beleid' &&
              transitionAgenda !== 'bouw' &&
              instruments.map((instrument) => (
                <ExpertisePageInstrument key={instrument.titel} instrument={instrument} />
              ))}
          </ul>
          <ul>
            {selected === 'inkoop' && (
              <DisplayInstruments instruments={instruments} categoryName='inkoop' />
            )}
          </ul>
          <ul>
            {selected == 'grondpositie' && transitionAgenda === 'bouw' && (
              <DisplayInstruments instruments={instruments} categoryName='grondpositie' />
            )}
          </ul>
          <ul>
            {selected === 'grondpositie' &&
              transitionAgenda !== 'bouw' &&
              instruments.map((instrument) => (
                <ExpertisePageInstrument key={instrument.titel} instrument={instrument} />
              ))}
          </ul>
          <ul className=''>
            {selected === 'subsidie' &&
              instruments.map((instrument) => (
                <ExpertisePageInstrument key={instrument.titel} instrument={instrument} />
              ))}
          </ul>
          <ul>
            {selected === 'fiscaal' &&
              instruments.map((instrument) => (
                <ExpertisePageInstrument key={instrument.titel} instrument={instrument} />
              ))}
          </ul>
        </div>
      </div>
    </>
  );
}

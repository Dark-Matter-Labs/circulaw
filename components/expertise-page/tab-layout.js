import DisplayInstruments from './display-instruments';
import ExpertisePageInstrument from './expertise-page-instrument';

export default function TabLayout({ selected, category, transitionAgenda, isPending }) {
  return (
    <>
      <div className={`${isPending ? 'min-h-[1200px] bg-white' : ''}`}>
        {/* DISPLAY INSTRUMENTS DESKTOP */}
        <div className='flex flex-col'>
          <ul>
            {selected === 'beleid' && transitionAgenda === 'bouw' && (
              <DisplayInstruments category={category} categoryName='beleid' />
            )}
          </ul>
          <ul>
            {selected === 'beleid' &&
              transitionAgenda !== 'bouw' &&
              category.map((instrument) => (
                <ExpertisePageInstrument key={instrument.titel} instrument={instrument} />
              ))}
          </ul>
          <ul>
            {selected === 'inkoop' && (
              <DisplayInstruments category={category} categoryName='inkoop' />
            )}
          </ul>
          <ul>
            {selected == 'grondpositie' && transitionAgenda === 'bouw' && (
              <DisplayInstruments category={category} categoryName='grondpositie' />
            )}
          </ul>
          <ul>
            {selected === 'grondpositie' &&
              transitionAgenda !== 'bouw' &&
              category.map((instrument) => (
                <ExpertisePageInstrument key={instrument.titel} instrument={instrument} />
              ))}
          </ul>
          <ul className=''>
            {selected === 'subsidie' &&
              category.map((instrument) => (
                <ExpertisePageInstrument key={instrument.titel} instrument={instrument} />
              ))}
          </ul>
          <ul>
            {selected === 'fiscaal' &&
              category.map((instrument) => (
                <ExpertisePageInstrument key={instrument.titel} instrument={instrument} />
              ))}
          </ul>
        </div>
      </div>
    </>
  );
}

import ExpertisePageInstrument from './expertise-page-instrument';

export default function DisplaySubHeading({ arr, subCat }) {
  return (
    <div>
      {arr?.length !== 0 && (
        <div className='p-base-bold capitalize pl-3 py-3 bg-grey-200 flex items-center h-11 border-y border-y-grey-500'>
          {subCat}
        </div>
      )}
      <ul>
        {arr?.map((instrument) => (
          <ExpertisePageInstrument key={instrument.titel} instrument={instrument} />
        ))}
      </ul>
    </div>
  );
}

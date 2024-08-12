import ExpertisePageInstrument from './expertise-page-instrument';

export default function DisplaySubHeading({ arr, subCat }) {
  return (
    <div>
      {arr?.length !== 0 && (
        <div className='p-base-bold capitalize pl-3 py-3 bg-gray-200 flex items-center h-11 border-y border-y-gray-500'>
          {subCat}
        </div>
      )}
      <ul>
        {arr?.map((instrument, id) => (
          <ExpertisePageInstrument key={id} instrument={instrument} />
        ))}
      </ul>
    </div>
  );
}

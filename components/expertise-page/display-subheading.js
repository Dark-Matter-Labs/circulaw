import ExpertisePageInstrument from './expertise-page-instrument';

export default function DisplaySubHeading({ arr, subCat }) {
  return (
    <div>
      {arr?.length !== 0 && (
        <div className='p-base-bold flex h-11 items-center border-y border-y-cl-grey bg-green-100 py-3 pl-3 capitalize'>
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

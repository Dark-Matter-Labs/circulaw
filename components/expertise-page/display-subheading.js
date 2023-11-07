import ExpertisePageInstrument from './expertise-page-instrument'

export default function DisplaySubHeading ({arr, subCat}) {
    return (
    <div>
        {arr?.length !== 0 && 
        <div className='text-green-600 p-md font-semibold capitalize pl-3 py-3 bg-green-200'>
          {subCat}
        </div>}
        <ul>
          {arr?.map((instrument) => (
            <ExpertisePageInstrument key={instrument.titel} instrument={instrument} />
          ))}
        </ul>
      </div>
    )
}
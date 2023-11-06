import ExpertisePageInstrument from './expertise-page-instrument';


export default function DisplayInstruments({ filter, category, subCategory }) {
  return (
    <div>
      {category.length !== 0 && 
      <div className='text-green-600 p-md font-semibold capitalize pl-3 py-3 bg-green-200'>{subCategory}</div>}
      <ul>
      {category.filter(filter).map((instrument) => (
      <ExpertisePageInstrument key = {instrument.titel} instrument = {instrument}/>
      ))}
      </ul>
    </div>
  );
}

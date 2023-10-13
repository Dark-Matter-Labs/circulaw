export default function DisplayInstruments({ filter, category, subCategory }) {
  return (
    <div>
      <div className='text-green-600'>{subCategory} heading</div>
      {category.filter(filter).map((instrument) => (
        <div key={instrument.titel} className='flex flex-row justify-between'>
          <div className='py-1 border-t border-b border-black'>{instrument.titel}</div>
          <div className='flex flex-row'>
            {instrument.overheidslaag.map((govLevel) => (
              <div key={govLevel}>{govLevel}</div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

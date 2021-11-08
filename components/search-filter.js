export default function SearchFilter(props) {
  return (
    <fieldset className='py-5'>
      <legend className='text-lg'>{props.title}</legend>
      <div>
        {props.data.map((data, dataIdx) => (
          <div key={dataIdx} className='relative flex justify-between'>
            <div>
              <input
                id={`data-${data.id}`}
                name={`data-${data.id}`}
                type='checkbox'
              />
              <label
                htmlFor={`data-${data.id}`}
                className='select-none font-semibold text-sm pl-2'
              >
                {data.name}
              </label>
            </div>
            <div className='font-normal text-sm text-gray-400'>
              {data.number}
            </div>
          </div>
        ))}
      </div>
    </fieldset>
  );
}

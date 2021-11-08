import { InformationCircle } from "@heroicons/react/solid";

export default function SearchFilter(props) {
  return (
    <fieldset className='py-4  border-b border-black'>
      <div className='block'>
        <legend className='inline-block text-lg'>{props.title}</legend>
      </div>
      <div>
        {props.data.map((data, dataIdx) => (
          <div key={dataIdx} className='relative flex justify-between '>
            <div className='my-1'>
              <input
                id={`data-${data.id}`}
                name={`data-${data.id}`}
                type='checkbox'
              />
              <label
                htmlFor={`data-${data.id}`}
                className='select-none font-normal text-sm pl-2'
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

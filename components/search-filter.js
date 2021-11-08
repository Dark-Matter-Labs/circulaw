import { InformationCircle } from "@heroicons/react/solid";

export default function SearchFilter(props) {
  return (
    <fieldset className='py-4 mb-10 border-b border-black'>
      <div className='block'>
        <legend className='inline-block text-lg'>{props.title}</legend>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-5 w-5 inline-block'
          viewBox='0 0 20 20'
          fill='currentColor'
        >
          <path
            fillRule='evenodd'
            d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z'
            clipRule='evenodd'
          />
        </svg>
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

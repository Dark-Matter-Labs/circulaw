import { useState, forwardRef, useImperativeHandle } from 'react';
import { handleToggle } from '../utils';

const SearchFilter = forwardRef(({ list, title, filterNumbers, handleFilters }, ref) => {
  const [checkedArray, setCheckedArray] = useState([]);

  //state to check if set value is for mouse click or state persist
  const [clicked, setClicked] = useState(false);

  const onChangeHandler = (checkboxId) => {
    setClicked(true);
    const newState = handleToggle(checkboxId, checkedArray);
    setCheckedArray(newState);
    const mapIdToValueArray = newState.map((id) => {
      return list[id].value;
    });
    handleFilters(mapIdToValueArray);
  };

  //functions for parent component to reset checkbox values and set values from localStorage
  useImperativeHandle(ref, () => ({
    reset() {
      setCheckedArray([]);
    },
    set(selectedArray) {
      //only do this for state persist and not mouse click
      if (!clicked) {
        let newArr = [];
        for (let index = 0; index < selectedArray.length; index++) {
          //matching values to IDs
          list.map((element) => {
            if (selectedArray[index] === element.value) {
              newArr.push(element.id);
            }
          });
        }
        setCheckedArray(newArr);
      }
    },
  }));
  return (
    <fieldset className='py-4 border-b border-black'>
      <div className='block'>
        <div className='relative flex justify-between'>
          <legend className='text-base font-manrope font-semibold mr-8'>{title}</legend>
          <svg className='w-6 h-6 fill-current text-black mb-2' viewBox='0 0 26 26'>
            <circle cx='12' cy='15' r='10' fill='#979797' />
            <path
              d='M10.7031 10.0078C10.7031 9.23177 11.1354 8.84375 12 8.84375C12.8646 8.84375 13.2969 9.23177 13.2969 10.0078C13.2969 10.3776 13.1875 10.6667 12.9688 10.875C12.7552 11.0781 12.4323 11.1797 12 11.1797C11.1354 11.1797 10.7031 10.7891 10.7031 10.0078ZM13.1875 21H10.8047V12.2656H13.1875V21Z'
              fill='black'
            />
          </svg>
        </div>
      </div>
      <div>
        {list.map((data, dataIdx) => (
          <div key={dataIdx} className='relative flex justify-between'>
            {filterNumbers[dataIdx] > 0 ? (
              <>
                <div className='my-1'>
                  <input
                    type='checkbox'
                    id={`data-${data.value}-${data.id}`}
                    checked={checkedArray.indexOf(data.id) !== -1}
                    onChange={() => onChangeHandler(data.id)}
                    className='accent-pink-300 focus:accent-pink-500'
                  />
                  <label
                    htmlFor={`data-${data.value}-${data.id}`}
                    className='select-none font-manrope text-sm pl-2'
                  >
                    {data.name}
                  </label>
                </div>
                <div className='font-bold font-manrope text-sm text-black'>
                  ({filterNumbers[dataIdx]})
                </div>
              </>
            ) : (
              <>
                <div className='my-1'>
                  <input
                    disabled
                    type='checkbox'
                    id={`data-${data.value}-${data.id}`}
                    checked={checkedArray.indexOf(data.id) !== -1}
                    onChange={() => onChangeHandler(data.id)}
                  />
                  <label
                    htmlFor={`data-${data.value}-${data.id}`}
                    className='select-none font-normal text-gray-500 text-sm pl-2'
                  >
                    {data.name}
                  </label>
                </div>
                <div className='font-normal text-sm text-gray-400'>({filterNumbers[dataIdx]})</div>
              </>
            )}
          </div>
        ))}
      </div>
    </fieldset>
  );
});

SearchFilter.displayName = 'SearchFilter';

export default SearchFilter;

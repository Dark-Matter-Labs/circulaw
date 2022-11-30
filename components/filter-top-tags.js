import { useState, forwardRef, useImperativeHandle } from 'react';
import { handleToggle } from '../utils';

const FilterButton = forwardRef(({ list, handleFilters }, ref) => {
  const [checkedArray, setCheckedArray] = useState([]);

  // state to check if set value is for mouse click or state persist
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

  // functions for parent component to reset checkbox values and set values from localStorage
  useImperativeHandle(ref, () => ({
    reset() {
      setCheckedArray([]);
    },
    set(selectedArray) {
      // only do this for state persist and not mouse click
      if (!clicked) {
        let newArr = [];
        for (let index = 0; index < selectedArray.length; index++) {
          // matching values to IDs
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
    <>
      <div>
        {list.map((data, dataIdx) => (
          <div key={dataIdx} className='relative flex justify-between'>
            <>
              <div className='my-1'>
                <button
                  id={`data-${data.value}-${data.id}`}
                  onClick={() => onChangeHandler(data.id)}
                  className='accent-pink-300 focus:accent-pink-500'
                >
                  {data.name}
                </button>
              </div>
            </>
          </div>
        ))}
      </div>
    </>
  );
});
FilterButton.displayName = 'FilterButton';

export default FilterButton;

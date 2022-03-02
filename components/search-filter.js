import { useState, forwardRef, useImperativeHandle } from "react";
import { handleToggle } from "../utils";

// function which on check from try to false passed the data.name to the search query in policy-list for example Bevoegdheidsniveau = true then add data.Bevoegdheidsniveau to search scope.

const SearchFilter = forwardRef(({ list, title, handleFilters }, ref) => {
  const [checkedArray, setCheckedArray] = useState([]);

  const onChangeHandler = (checkboxId) => {
    const newState = handleToggle(checkboxId, checkedArray);
    setCheckedArray(newState);
    const mapIdToValueArray = newState.map((id) => {
      return list[id].value;
    });
    handleFilters(mapIdToValueArray);
  };

  useImperativeHandle(ref, () => ({
    reset() {
      setCheckedArray([]);
    },
    set(selectedArray) {
      let newArr = [];
      for (let index = 0; index < selectedArray.length; index++) {
        newArr.push(index.toString());
      }
      setCheckedArray(newArr);
    },
  }));

  return (
    <fieldset className="py-4  border-b border-black">
      <div className="block">
        <div className="relative flex justify-between">
          <legend className="text-lg">{title}</legend>
          <svg
            className="text-gray-300 w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      <div>
        {list.map((data, dataIdx) => (
          <div key={dataIdx} className="relative flex justify-between">
            <div className="my-1">
              <input
                type="checkbox"
                id={`data-${data.value}-${data.id}`}
                checked={checkedArray.indexOf(data.id) !== -1}
                onChange={() => onChangeHandler(data.id)}
              />
              <label
                htmlFor={`data-${data.value}-${data.id}`}
                className="select-none font-normal text-sm pl-2"
              >
                {data.name}
              </label>
            </div>
            <div className="font-normal text-sm text-gray-400">
              {data.number}
            </div>
          </div>
        ))}
      </div>
    </fieldset>
  );
});

SearchFilter.displayName = "SearchFilter";

export default SearchFilter;

import { useState, useRef, useEffect } from 'react';
import { useInstantSearch, useSearchBox } from 'react-instantsearch';
import { XIcon } from '@heroicons/react/outline';

export default function SearchBox(props) {
  const initialSearchQuery = props.initialSearchQuery;

  const { query, refine } = useSearchBox(props);
  const { status } = useInstantSearch();
  const [inputValue, setInputValue] = useState(query);
  const inputRef = useRef(null);

  const isSearchStalled = status === 'stalled';

  useEffect(() => {
    if (initialSearchQuery) {
      setInputValue(initialSearchQuery);
      refine(initialSearchQuery);
    }
  }, [initialSearchQuery, refine]);

  function setQuery(newQuery) {
    setInputValue(newQuery);
    refine(newQuery);
  }

  return (
    <div className='h-16 w-[600px] bg-green-600'>
      <form
        className='bg-green-600 w-[600px] h-[66px] rounded-cl flex-row items-center justify-between relative flex'
        action=''
        role='search'
        noValidate
        onSubmit={(event) => {
          event.preventDefault();
          event.stopPropagation();

          if (inputRef.current) {
            inputRef.current.blur();
          }
        }}
        onReset={(event) => {
          event.preventDefault();
          event.stopPropagation();

          setQuery('');

          if (inputRef.current) {
            inputRef.current.focus();
          }
        }}
      >
        <input
          className='w-[600px] h-[66px] focus:bg-[url("/search-icon.png")] bg-no-repeat bg-left [background-position-x:10px] pl-12 rounded-cl border-none bg-white/50 caret-white p-base text-white focus:ring-1 focus:ring-white placeholder:text-white placeholder:p-base-semibold'
          ref={inputRef}
          autoComplete='off'
          autoCorrect='off'
          autoCapitalize='off'
          placeholder={
            props.searchIndex === 'instruments'
              ? 'Zoek naar instrumenten...'
              : 'Zoek naar over CircuLaw...'
          }
          spellCheck={false}
          maxLength={512}
          type='search'
          value={inputValue}
          onChange={(event) => {
            setQuery(event.currentTarget.value);
          }}
          autoFocus
        />
        <button
          className='ml-2 border h-[42px] w-24 border-white p-2 absolute top-3 right-3 shadow-card p-base-semibold text-green-600 bg-white rounded-cl'
          type='submit'
        >
          Submit
        </button>
        <button
          className='absolute top-3.5 right-28 rounded-full p-2 hover:bg-white/50 group'
          type='reset'
          hidden={inputValue.length === 0 || isSearchStalled}
        >
          <XIcon className='h-6 w-6 text-white group-hover:text-green-900' />
        </button>
        <span hidden={!isSearchStalled}>Searching…</span>
      </form>
    </div>
  );
}

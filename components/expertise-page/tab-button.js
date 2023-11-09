export default function TabButton({
  selected,
  onClick,
  transitionAgenda,
  numInstrument,
  numInstruments2,
  name,
}) {
  return (
    <>
      {name === 'beleid' && (
        <button
          disabled={numInstrument === 0 && numInstruments2 === 0}
          onClick={onClick}
          className={`${
            selected === name ? 'bg-white text-green-500' : 'text-gray-100 bg-green-500'
          } ${
            numInstrument === 0 && numInstruments2 === 0 ? 'opacity-50' : ''
          }  p-3 rounded-t-cl flex flex-row items-baseline pb-2.5`}
        >
          <h3 className='mobile sm:desktop pr-1 first-letter:capitalize'>{name}</h3>{' '}
          {transitionAgenda === 'bouw' ? (
            <h5 className='mobile sm:desktop inline-block min-w-[24px]'>({numInstrument})</h5>
          ) : (
            <h5 className='mobile sm:desktop inline-block min-w-[24px]'>({numInstruments2})</h5>
          )}
        </button>
      )}
       {name === 'grondpositie' && (
        <button
          disabled={numInstrument === 0 && numInstruments2 === 0}
          onClick={onClick}
          className={`${
            selected === name ? 'bg-white text-green-500' : 'text-gray-100 bg-green-500'
          } ${
            numInstrument === 0 && numInstruments2 === 0 ? 'opacity-50' : ''
          }  p-3 rounded-t-cl flex flex-row items-baseline pb-2.5`}
        >
          <h3 className='mobile sm:desktop pr-1 first-letter:capitalize'>{name}</h3>{' '}
          {transitionAgenda === 'bouw' ? (
            <h5 className='mobile sm:desktop inline-block min-w-[24px]'>({numInstrument})</h5>
          ) : (
            <h5 className='mobile sm:desktop inline-block min-w-[24px]'>({numInstruments2})</h5>
          )}
        </button>
      )}
      {name !== 'beleid' && name !== 'grondpositie' && (
        <button
          disabled={numInstrument === 0}
          onClick={onClick}
          className={`${
            selected === name ? 'bg-white text-green-500' : 'text-gray-100 bg-green-500'
          } ${
            numInstrument === 0 ? 'opacity-50' : ''
          }  p-3 rounded-t-cl flex flex-row items-baseline pb-2.5`}
        >
          <h3 className='mobile sm:desktop pr-1 first-letter:capitalize'>{name}</h3>{' '}
          <h5 className='mobile sm:desktop inline-block min-w-[24px]'>({numInstrument})</h5>
        </button>
      )}
    </>
  );
}

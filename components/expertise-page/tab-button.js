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
            selected === name
              ? 'bg-gray-100 text-green-500'
              : 'text-gray-100 bg-green-500 hover:bg-green-400'
          } ${
            numInstrument === 0 && numInstruments2 === 0 ? 'opacity-50 hover:bg-green-500' : ''
          }  p-3 rounded-t-cl flex flex-row items-center`}
        >
          <div className='flex flex-row items-baseline'>
            <h3 className='heading-xl-semibold sm:heading-2xl-semibold pr-1 first-letter:capitalize'>{name}</h3>{' '}
            {transitionAgenda === 'bouw' ? (
              <div className='p-2xs-bold sm:heading-xl-semibold inline-block min-w-[24px] sm:min-w-[38px]'>
                ({numInstrument})
              </div>
            ) : (
              <div className='p-2xs-bold sm:heading-xl-semibold inline-block min-w-[24px]'>
                ({numInstruments2})
              </div>
            )}
          </div>
        </button>
      )}
      {name === 'grondpositie' && (
        <button
          disabled={numInstrument === 0 && numInstruments2 === 0}
          onClick={onClick}
          className={`${
            selected === name
              ? 'bg-gray-100 text-green-500'
              : 'text-gray-100 bg-green-500 hover:bg-green-400'
          } ${
            numInstrument === 0 && numInstruments2 === 0 ? 'opacity-50 hover:bg-green-500' : ''
          }  p-3 rounded-t-cl flex flex-row items-center`}
        >
          <div className='flex flex-row items-baseline'>
            <h3 className='heading-xl-semibold sm:heading-2xl-semibold pr-1 first-letter:capitalize'>{name}</h3>{' '}
            {transitionAgenda === 'bouw' ? (
              <h5 className='p-2xs-bold sm:heading-xl-semibold inline-block min-w-[24px]'>
                ({numInstrument})
              </h5>
            ) : (
              <h5 className='p-2xs-bold sm:heading-xl-semibold inline-block min-w-[24px]'>
                ({numInstruments2})
              </h5>
            )}
          </div>
        </button>
      )}
      {name !== 'beleid' && name !== 'grondpositie' && (
        <button
          disabled={numInstrument === 0}
          onClick={onClick}
          className={`${
            selected === name
              ? 'bg-gray-100 text-green-500'
              : 'text-gray-100 bg-green-500 hover:bg-green-400'
          } ${
            numInstrument === 0 ? 'opacity-50 hover:bg-green-500' : ''
          }  p-3 rounded-t-cl flex flex-row items-center`}
        >
          <div className='flex flex-row items-baseline'>
            <h3 className='heading-xl-semibold sm:heading-2xl-semibold pr-1 first-letter:capitalize'>{name}</h3>{' '}
            <div className='p-2xs-bold sm:heading-xl-semibold inline-block min-w-[24px]'>
              ({numInstrument})
            </div>
          </div>
        </button>
      )}
    </>
  );
}

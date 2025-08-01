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
          id='categorieTab'
          className={`${selected === name ? 'bg-green-100 text-green-500' : 'text-green-100'} ${
            numInstrument === 0 && numInstruments2 === 0 ? 'opacity-50' : ''
          } flex flex-row items-start rounded-t-cl border-x-2 border-t-2 border-white p-3`}
        >
          <div className='flex flex-row items-baseline'>
            <h3 className='p-base-semibold pr-1 first-letter:capitalize'>{name}</h3>{' '}
            {transitionAgenda === 'bouw' ? (
              <div className='p-base-semibold inline-block min-w-[24px] sm:min-w-[38px]'>
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
          id='categorieTab'
          className={`${selected === name ? 'bg-green-100 text-green-500' : 'text-green-100'} ${
            numInstrument === 0 && numInstruments2 === 0 ? 'opacity-50' : ''
          } flex flex-row items-start rounded-t-cl border-x-2 border-t-2 border-white p-3`}
        >
          <div className='flex flex-row items-baseline'>
            <h3 className='p-base-semibold d pr-1 first-letter:capitalize'>{name}</h3>{' '}
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
          id='categorieTab'
          className={`${
            selected === name ? 'bg-green-100 text-green-500' : 'text-green-100'
          } ${numInstrument === 0 ? 'opacity-50' : ''} flex flex-row items-start rounded-t-cl border-x-2 border-t-2 border-white p-3`}
        >
          <div className='flex flex-row items-baseline'>
            <h3 className='p-base-semibold pr-1 first-letter:capitalize'>{name}</h3>{' '}
            <div className='p-base-semibold inline-block min-w-[24px]'>({numInstrument})</div>
          </div>
        </button>
      )}
    </>
  );
}

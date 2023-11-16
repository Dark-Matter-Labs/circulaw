

export default function ExplinationText({selected}) {
    return (

        <div className='sm:py-6 sm:ml-3 mt-5 mb-4 global-margin sm:m-0' >
        {selected === 'beleid' && (
          <p className='p-base'>
            Vooral geïnteresseerd in het stimuleren van houtbouw via beleid?
          </p>
        )}
        {selected === 'inkoop' && (
          <p className='p-base'>
            Bekijk hoe je via tenders en aanbestedingen houtbouw kunt stimuleren.
          </p>
        )}
        {selected === 'grondpositie' && (
          <p className='p-base'>
            Ben je als overheid grondeigenaar? Bekijk de mogelijkheden om houtbouw af te
            dwingen.
          </p>
        )}
        {selected === 'subsidie' && (
          <p className='p-base'>Bekijk hoe je via subsidies houtbouw kunt stimuleren.</p>
        )}
        {selected === 'fiscaal' && (
          <p className='p-base'>
            Bekijk hoe je via fiscale maatregelen houtbouw kunt stimuleren.
          </p>
        )}
      </div>

    )
}
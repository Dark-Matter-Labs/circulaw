

export default function ExplinationText({selected}) {
    return (

        <div className='py-6 ml-3'>
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
export default function ExplinationText({ selected }) {
  return (
    <div className='global-margin mb-4 mt-5 sm:m-0 sm:ml-3 sm:py-6'>
      {selected === 'beleid' && (
        <p className='p-base'>Vooral geïnteresseerd in instrumenten op het gebied van beleid?</p>
      )}
      {selected === 'inkoop' && (
        <p className='p-base'>
          Bekijk hoe je tenders en aanbestedingen kunt inzetten om circulariteit te bevorderen.
        </p>
      )}
      {selected === 'grondpositie' && (
        <p className='p-base'>
          Ben je als overheid grondeigenaar? Bekijk de mogelijkheden om dwingende instrumenten in te
          zetten.
        </p>
      )}
      {selected === 'subsidie' && (
        <p className='p-base'>Bekijk hoe je via subsidies circulariteit kunt stimuleren.</p>
      )}
      {selected === 'fiscaal' && (
        <p className='p-base'>
          Bekijk hoe je via fiscale maatregelen circulariteit kunt stimuleren.
        </p>
      )}
    </div>
  );
}

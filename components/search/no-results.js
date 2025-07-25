import { useInstantSearch } from 'react-instantsearch';

export default function NoResults() {
  const { uiState } = useInstantSearch();
  return (
    <div className='my-10 flex w-full items-start justify-center'>
      <div className='flex max-w-md flex-col items-center justify-center'>
        <h2 className='heading-2xl sm:heading-3xl mb-6'>
          Geen resultaten gevonden voor: &apos;
          <span className='heading-2xl-semibold sm:heading-3xl-semibold'>
            {uiState['root']?.query}
          </span>
          &apos; in
          {uiState['instruments'] && <span> Instrumenten</span>}
          {uiState['euLaw'] && <span> EU wetgeving</span>}
          {uiState['newsItems'] && <span> Nieuws</span>}
        </h2>
        <h3 className='p-base-semibold mb-4'>Tips voor betere resultaten:</h3>
        <ul className='p-base list-disc'>
          <li className='mb-1'>gebruik minder zoektermen</li>
          <li className='mb-1'>begin met een steekwoord</li>
          <li className='mb-1'>gebruik synoniemen.</li>
        </ul>
        <p className='p-base'>
          Help ons de zoekresultaten te verbeteren klik hieronder op{' '}
          <span className='p-base-semibold'>&apos;Ja&apos;</span> of{' '}
          <span className='p-base-semibold'>&apos;Nee&apos;</span> en geef je mening en
          verbeterpunten door.
        </p>
      </div>
    </div>
  );
}

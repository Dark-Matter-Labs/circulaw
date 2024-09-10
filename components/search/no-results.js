import { useInstantSearch } from 'react-instantsearch';

export default function NoResults() {
  const { indexUiState } = useInstantSearch();
  return (
    <div className='flex items-center justify-center my-10 w-full '>
      <div className='flex flex-col items-center justify-center max-w-md'>
        <h2 className='heading-2xl sm:heading-3xl mb-6'>
          Geen resultaten gevonden voor: &apos;
          <span className='heading-2xl-semibold sm:heading-3xl-semibold'>{indexUiState.query}</span>
          &apos;
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

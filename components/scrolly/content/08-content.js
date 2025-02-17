export default function ContentEight() {
  return (
    <div className='flex max-w-[290px] flex-col gap-y-6 text-green-600'>
      <h3 className='heading-2xl-semibold'>Gemeentelijke omgevingsprogramma&apos;s</h3>
      <p className='p-base'>
        Bevat <span className='p-base-semibold'>uitwerking</span> van{' '}
        <span className='p-base-semibold'>beleidsdoelen</span> voor de{' '}
        <span className='p-base-semibold'>fysieke leefomgeving:</span>
      </p>
      <ul className='p-base ml-4 flex list-outside list-disc flex-col gap-y-2'>
        <li>Kan maatregelen en acties bevatten</li>
        <li>Heeft een korte tot middellange horizon</li>
        <li>
          Kan <span className='p-base-semibold'>gebiedsgericht</span> of voor specifieke{' '}
          <span className='p-base-semibold'>thema&apos;s</span> worden ingezet
        </li>
        <li>Meerdere programma&apos;s zijn mogelijk</li>
        <li>
          Voor circulaire beleidsdoelen niet verplicht, maar{' '}
          <span className='p-base-semibold'>vrijwillig</span>
        </li>
      </ul>
    </div>
  );
}

export default function ContentNine() {
  return (
    <div className='text-green-600 flex flex-col gap-y-4 max-w-[290px]'>
      <h3 className='heading-2xl-semibold'>Omgevingsplan</h3>
      <p className='p-base'>
        Bevat alle <span className='p-base-semibold'>gemeentelijke regels</span> over de{' '}
        <span className='p-base-semibold'>fysieke leefomgeving:</span>
      </p>
      <ul className='list-inside list-disc p-base flex flex-col gap-y-1.5'>
        <li>Regels uit het plan volgen uit de omgevingsvisie en – programma</li>

        <li>Bevat juridisch bindende regels en voorschriften</li>
        <li>Kan gebiedsgerichte of thematische regels bevatten</li>
      </ul>
      <p className='p-xs italic'>
        De Omgevingswet en samenhangende instrumenten zijn nieuw. De regels uit oude{' '}
        <span className='p-xs-semibold'>bestemmingsplannen</span> zijn daarom overgezet naar nieuwe{' '}
        <span className='p-xs-semibold'>omgevingsplannen. </span>
        De gemeenten moeten deze nog aanpassen naar de nieuwe stijl van het omgevingsplan. Ook
        kunnen ze er nieuwe regels aan toevoegen.
      </p>
    </div>
  );
}

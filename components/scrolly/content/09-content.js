export default function ContentNine() {
  return (
    <div className='text-green-600 flex flex-col gap-y-4 max-w-[290px]'>
      <h3 className='heading-2xl-semibold'>3.3 Omgevingsplan</h3>
      <p className='p-base'>
        Bevat alle <span className='p-base-semibold'>gemeentelijke regels</span> over de{' '}
        <span className='p-base-semibold'>fysieke leefomgeving:</span>
      </p>
      <ul className='list-inside list-disc p-base flex flex-col gap-y-1.5'>
        <li>Regels uit het plan volgen uit de omgevingsvisie en – programma</li>

        <li>Bevat juridisch bindende regels en voorschriften</li>
        <li>Kan gebiedsgerichte of thematische regels bevatten</li>
      </ul>
      <p className='p-base italic'>
        <span className='p-base-semibold'>Let op! </span>
        De Omgevingswet en instrumenten die daarmee samenhangen zijn nieuw. Voor het omgevingsplan
        betekent dit dat de regels uit oude <span className='p-base-semibold'>bestemmings</span>
        plannen overgezet zijn naar de nieuwe <span className='p-base-semibold'>omgevings</span>
        plannen.
      </p>
      <p className='p-base italic'>
        Deze oude regels moeten gemeenten nog aanpassen naar de nieuwe stijl van het omgevingsplan.
        Ook kunnen gemeenten nieuwe regels toevoegen aan het omgevingsplan.
      </p>
    </div>
  );
}

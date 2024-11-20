export default function ContentNine() {
  return (
    <div className='text-green-600 flex flex-col gap-y-6 max-w-[270px]'>
      <h3 className='heading-2xl-semibold'>3.3 Omgevingsplan</h3>
      <p className='p-base'>
      Bevat alle <span className='p-base-semibold'>gemeentelijke regels</span> over de <span className='p-base-semibold'>fysieke leefomgeving:</span>
      </p>
      <ul className='list-inside list-disc p-base flex flex-col gap-y-2'>
        <li>Bevat juridisch bindende regels en voorschriften</li>
        <li>Kan gebiedsgerichte of thematische regels bevatten</li>
      </ul>
    </div>
  );
}

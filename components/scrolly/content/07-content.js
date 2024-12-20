export default function ContentSeven() {
  return (
    <div className='text-green-600 flex flex-col gap-y-6 max-w-[290px]'>
      <h3 className='heading-2xl-semibold'>Gemeentelijke omgevingsvisie</h3>
      <p className='p-base'>
        Dit is de <span className='p-base-semibold'>langetermijnvisie</span> op de{' '}
        <span className='p-base-semibold'>fysieke leefomgeving:</span>
      </p>
      <ul className='list-outside list-disc p-base flex flex-col gap-y-2 ml-4'>
        <li>
          Beschrijft op hoofdlijnen hoe de toekomst van de leefomgeving eruitziet en welke ambities
          en doelen nagestreefd worden.Geeft richting aan het omgevingsplan
        </li>
        <li>Is toetsingskader voor initiatieven die niet in het omgevingsplan passen</li>
        <li>Wordt vastgesteld door de Gemeenteraad</li>
        <li>
          Is zelfbindend voor de gemeente, bevat geen direct werkende regels voor burgers en
          bedrijven.
        </li>
      </ul>
    </div>
  );
}

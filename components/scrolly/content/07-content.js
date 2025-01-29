export default function ContentSeven() {
  return (
    <div className='flex max-w-[290px] flex-col gap-y-6 text-green-600'>
      <h3 className='heading-2xl-semibold'>Gemeentelijke omgevingsvisie</h3>
      <p className='p-base'>
        Dit is de <span className='p-base-semibold'>langetermijnvisie</span> op de{' '}
        <span className='p-base-semibold'>fysieke leefomgeving:</span>
      </p>
      <ul className='p-base ml-4 flex list-outside list-disc flex-col gap-y-2'>
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

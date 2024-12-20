export default function ContentThree() {
  return (
    <div className='text-green-600 flex flex-col gap-y-6 max-w-[290px]'>
      <h3 className='heading-2xl-semibold text-nowrap'>Beleidsontwikkeling</h3>
      <p className='p-base'>
        De beleidscyclus begint met <span className='p-base-semibold'>beleidsontwikkeling.</span>
      </p>
      <p className='p-base'>
        Beleidsontwikkeling is belangrijk als <span className='p-base-semibold'>onderbouwing</span>{' '}
        voor de regels in je omgevingsprogramma&apos;s en omgevingsplan.
      </p>
      <p>In deze fase werk je je visie uit in:</p>
      <ul className='list-outside list-disc p-base ml-4'>
        <li>omgevingsvisie, en/of</li>
        <li>omgevingsprogramma&apos;s</li>
      </ul>
    </div>
  );
}

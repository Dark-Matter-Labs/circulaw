export default function ContentThree() {
  return (
    <div className='text-green-600 flex flex-col gap-y-6 max-w-[270px]'>
      <h3 className='heading-2xl-semibold text-nowrap'>2.1 Beleidsontwikkeling</h3>
      <p className='p-base'>
        De beleidscyclus begint met <span className='p-base-semibold'>beleidsontwikkeling.</span>
      </p>
      <p className='p-base'>
        Beleidsontwikkeling is belangrijk als <span className='p-base-semibold'>onderbouwing</span>{' '}
        voor de regels in je omgevingsplan.
      </p>
      <p>In deze fase werk je je visie uit in:</p>
      <ul className='list-inside list-disc p-base'>
        <li>omgevingsvisie, en/of</li>
        <li>omgevingsprogramma&apos;s</li>
      </ul>
    </div>
  );
}

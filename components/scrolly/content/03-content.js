export default function ContentThree() {
  return (
    <div className='flex max-w-[290px] flex-col gap-y-6 text-green-500'>
      <h3 className='heading-2xl-semibold text-nowrap'>Beleidsontwikkeling</h3>
      <p className='p-base'>
        De beleidscyclus begint met <span className='p-base-semibold'>beleidsontwikkeling.</span>
      </p>
      <p className='p-base'>
        Beleidsontwikkeling is belangrijk als <span className='p-base-semibold'>onderbouwing</span>{' '}
        voor de regels in je omgevingsprogramma&apos;s en omgevingsplan.
      </p>
      <p>In deze fase werk je je visie uit in:</p>
      <ul className='p-base ml-4 list-outside list-disc'>
        <li>omgevingsvisie, en/of</li>
        <li>omgevingsprogramma&apos;s</li>
      </ul>
    </div>
  );
}

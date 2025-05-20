export default function AboutPageTitle({ data }) {
  return (
    <div className='mb-[60px]'>
      <p className='p-base-semibold mb-4 text-cl-black'>{data?.subTitle}</p>
      <h2 className='heading-5xl-semibold text-cl-black'>{data?.title}</h2>
    </div>
  );
}

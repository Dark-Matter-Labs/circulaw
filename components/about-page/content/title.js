export default function AboutPageTitle({ data }) {
  return (
    <div className='mb-[30px] sm:mb-[60px]'>
      <p className='p-xs-semibold sm:p-base-semibold mb-2 sm:mb-4 text-cl-black'>{data?.subTitle}</p>
      <h2 className='heading-3xl-semibold sm:heading-5xl-semibold text-cl-black'>{data?.title}</h2>
    </div>
  );
}

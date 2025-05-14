export default function AboutPageTitle({ data }) {
  return (
    <div>
      <p className='p-base-semibold mb-4 text-cl-black'>{data?.subTitle}</p>
      <h2 className='heading-5xl-semibold mb-10 text-cl-black'>{data?.title}</h2>
    </div>
  );
}

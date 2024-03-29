export default function HighlightsSmallCard({ date, number }) {
  return (
    <div className='h-36 w-full rounded-cl border shadow-sm hover:shadow-md bg-gray-100 flex flex-col px-4 py-6 items-center justify-between'>
      <div className='p-base-semibold'>{date}</div>
      <div className='heading-5xl-semibold'>{number}</div>
    </div>
  );
}

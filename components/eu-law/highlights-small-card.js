export default function HighlightsSmallCard({ date, number }) {
  return (
    <div className='h-36 w-full rounded-cl border shadow-sm bg-white flex flex-col px-4 py-6 items-center justify-between'>
      <div className='p-base-semibold'>{date}</div>
      <div className='p-7xl-semibold'>{number}</div>
    </div>
  );
}

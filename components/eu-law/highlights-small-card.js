export default function HighlightsSmallCard({ date, number }) {
  return (
    <div className='flex h-36 w-full flex-col items-center justify-between rounded-cl border bg-green-100 px-4 py-6 shadow-sm hover:shadow-md'>
      <div className='p-base-semibold'>{date}</div>
      <div className='heading-5xl-semibold'>{number}</div>
    </div>
  );
}

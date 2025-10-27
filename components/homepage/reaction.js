export default function Reactions({ reactions }) {
  return (
    <div>
      <div className='no-scrollbar flex flex-row gap-x-4 overflow-x-scroll sm:gap-x-10'>
        {reactions.map((reaction) => (
          <div
            key={reaction._id}
            className='flex max-h-min min-w-72 flex-col gap-y-4 rounded-cl border border-green-500 px-4 py-4 sm:min-w-[450px] sm:px-8 sm:py-6'
          >
            <p className='p-xs sm:p-base italic'>&quot;{reaction.description}&quot;</p>
            <h3 className='heading-xl-semibold sm:heading-2xl-semibold text-green-500'>
              {reaction.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

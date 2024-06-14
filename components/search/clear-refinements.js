import { useClearRefinements } from 'react-instantsearch';

export default function CustomClearRefinements(props) {
  const { refine, canRefine } = useClearRefinements(props);

  return (
    <>
      <div className='w-[265px] flex flex-row items-center justify-between mb-12 '>
        <div className='heading-2xl-semibold mr-6'>Filter Ops:</div>
        <button
          onClick={refine}
          className={`${
            canRefine ? 'text-green-500' : 'text-gray-400'
          } underline heading-xl-semibold`}
        >
          Wis filters
        </button>
      </div>
    </>
  );
}
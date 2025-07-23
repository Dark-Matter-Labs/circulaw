import { useClearRefinements } from 'react-instantsearch';

export default function CustomClearRefinements(props) {
  const { refine, canRefine } = useClearRefinements(props);

  return (
    <>
      <div className='mb-8 flex w-[265px] flex-row items-center justify-between sm:mb-12'>
        <div className='heading-2xl-semibold mr-6'>Filter Op:</div>
        <button
          onClick={refine}
          className={`${
            canRefine ? 'text-green-500' : 'text-cl-grey'
          } heading-xl-semibold underline`}
        >
          Wis filters
        </button>
      </div>
    </>
  );
}

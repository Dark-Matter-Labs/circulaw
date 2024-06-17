import { usePagination } from 'react-instantsearch';
import { ChevronDoubleLeftIcon, ChevronLeftIcon, ChevronDoubleRightIcon, ChevronRightIcon } from '@heroicons/react/outline';

export default function Pagination() {
  const {nbPages, currentRefinement, pages, refine, isFirstPage, isLastPage } = usePagination({padding: 2});

  const firstPageIndex = 0;
  const previousPageIndex = currentRefinement - 1;
  const nextPageIndex = currentRefinement + 1;
  const lastPageIndex = nbPages - 1;
  console.log(pages)
  return (
    <ul className='flex flex-row'>
      <li className='mx-1 h-8 w-8 flex items-center justify-center'>
        <button
        disabled={isFirstPage}
          className={isFirstPage ? 'rounded-cl w-full h-full flex items-center justify-center text-green-900 heading-xl bg-green-50' : 'rounded-cl w-full h-full flex items-center justify-center bg-green-500 text-green-50 heading-xl-semibold'}
          onClick={(event) => {
            event.preventDefault();
            refine(firstPageIndex);
            window.scrollTo(0, 0)
          }}
        >
          <ChevronDoubleLeftIcon className='h-5 w-5'/>
        </button>
      </li>

      <li className='mx-1 h-8 w-8 flex items-center justify-center'>
        <button
          disabled={isFirstPage}
          className={`${isFirstPage ? 'rounded-cl w-full h-full flex items-center justify-center text-green-900 heading-xl bg-green-50' : 'rounded-cl w-full h-full flex items-center justify-center bg-green-500 text-green-50 heading-xl-semibold'}`}
          onClick={(event) => {
            event.preventDefault();
            refine(previousPageIndex);
            window.scrollTo(0, 0)
          }}
        >
         <ChevronLeftIcon className='h-5 w-5'/>
        </button>
      </li>
      {pages.map((page) => (
        <>
          <li key={page} className='mx-1 h-8 w-8 flex items-center justify-center'>
            {page === currentRefinement ? (
              <button
                className='rounded-cl w-full h-full flex items-center justify-center bg-green-500 text-green-50 heading-xl-semibold'
                onClick={(event) => {
                  event.preventDefault();
                  refine(page);
                  window.scrollTo(0, 0)
                }}
              >
                {page + 1}
              </button>
            ) : (
              <button
                className='rounded-cl w-full h-full flex items-center justify-center text-green-900 heading-xl bg-green-50'
                onClick={(event) => {
                  event.preventDefault();
                  refine(page);
                  window.scrollTo(0, 0)
                }}
              >
                {page + 1}
              </button>
            )}
          </li>
        </>
      ))}
       <li className='mx-1 h-8 w-8 flex items-center justify-center'>
        <button
        disabled={isLastPage}
          className={isLastPage ? 'rounded-cl w-full h-full flex items-center justify-center text-green-900 heading-xl bg-green-50' : 'rounded-cl w-full h-full flex items-center justify-center bg-green-500 text-green-50 heading-xl-semibold'}
          onClick={(event) => {
            event.preventDefault();
            refine(nextPageIndex);
            window.scrollTo(0, 0)
          }}
        >
          <ChevronRightIcon className='h-5 w-5'/>
        </button>
      </li>

      <li className='mx-1 h-8 w-8 flex items-center justify-center'>
        <button
          disabled={isLastPage}
          className={`${isLastPage ? 'rounded-cl w-full h-full flex items-center justify-center text-green-900 heading-xl bg-green-50' : 'rounded-cl w-full h-full flex items-center justify-center bg-green-500 text-green-50 heading-xl-semibold'}`}
          onClick={(event) => {
            event.preventDefault();
            refine(lastPageIndex);
            window.scrollTo(0, 0)
          }}
        >
         <ChevronDoubleRightIcon className='h-5 w-5'/>
        </button>
      </li>
    </ul>
  );
}

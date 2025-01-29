import { usePagination } from 'react-instantsearch';
import { IconChevronRight, IconChevronLeft } from '@tabler/icons-react';

export default function Pagination() {
  const { nbPages, currentRefinement, pages, refine, isFirstPage, isLastPage } = usePagination({
    padding: 1,
  });

  const firstPageIndex = 0;
  const previousPageIndex = currentRefinement - 1;
  const nextPageIndex = currentRefinement + 1;
  const lastPageIndex = nbPages - 1;

  if (nbPages !== 1) {
    return (
      <ul className={`${pages[2] + 1 === nbPages ? '' : ''} flex flex-row`}>
        <li className='mx-1 flex h-8 w-8 items-center justify-center'>
          <button
            disabled={isFirstPage}
            className='heading-xl-semibold flex h-full w-full items-center justify-center rounded-cl bg-green-50 text-green-900'
            onClick={(event) => {
              event.preventDefault();
              refine(previousPageIndex);
              window.scrollTo(0, 0);
            }}
          >
            <IconChevronLeft className='h-6 w-6' />
          </button>
        </li>
        <li className='mx-1 flex h-8 w-8 items-center justify-center'>
          <button
            disabled={isFirstPage}
            className={
              isFirstPage
                ? 'heading-xl-semibold flex h-full w-full items-center justify-center rounded-cl bg-green-500 text-green-50'
                : 'heading-xl-semibold'
            }
            onClick={(event) => {
              event.preventDefault();
              refine(firstPageIndex);
              window.scrollTo(0, 0);
            }}
          >
            {firstPageIndex + 1}
          </button>
        </li>

        {pages[0] !== 0 && pages[0] !== 1 && (
          <li className='mx-1 flex h-8 w-8 items-end justify-center'>...</li>
        )}
        {pages.length !== 2 && (
          <>
            {pages.map((page, index) => {
              const label = page + 1;
              return (
                <>
                  <li
                    key={page}
                    className={`${
                      pages[2] === label &&
                      currentRefinement !== 0 &&
                      currentRefinement !== nbPages - 1
                        ? 'rounded-cl bg-green-500 font-semibold text-green-50'
                        : ''
                    } ${pages[0] === 0 && index === 0 ? 'hidden' : ''} ${
                      pages[2] + 1 === nbPages && index === 2 ? 'hidden' : ''
                    } heading-xl-semibold mx-1 flex h-8 w-8 items-center justify-center`}
                  >
                    <button
                      disabled={false}
                      onClick={() => {
                        window.scrollTo(0, 0);
                        refine(page);
                      }}
                    >
                      {label}
                    </button>
                  </li>
                </>
              );
            })}
          </>
        )}
        {pages[2] !== nbPages - 1 && pages[2] !== nbPages - 2 && pages.length > 2 && (
          <li className='mx-1 flex h-8 w-8 items-end justify-center'>...</li>
        )}

        <li className='mx-1 flex h-8 w-8 items-center justify-center'>
          <button
            disabled={isLastPage}
            className={`${
              isLastPage
                ? 'heading-xl-semibold flex h-full w-full items-center justify-center rounded-cl bg-green-500 text-green-50'
                : 'heading-xl-semibold'
            }`}
            onClick={(event) => {
              event.preventDefault();
              refine(lastPageIndex);
              window.scrollTo(0, 0);
            }}
          >
            {lastPageIndex + 1}
          </button>
        </li>
        <li className='mx-1 flex h-8 w-8 items-center justify-center'>
          <button
            disabled={isLastPage}
            className='heading-xl-semibold flex h-full w-full items-center justify-center rounded-cl bg-green-50 text-green-900'
            onClick={(event) => {
              event.preventDefault();
              refine(nextPageIndex);
              window.scrollTo(0, 0);
            }}
          >
            <IconChevronRight className='h-6 w-6' />
          </button>
        </li>
      </ul>
    );
  } else return null;
}

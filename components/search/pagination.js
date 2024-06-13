import { usePagination } from 'react-instantsearch';

export default function Pagination(props) {
    const { currentRefinement, pages, refine, isFirstPage } = usePagination(props);
  
    return (
      <ul className='flex flex-row'>
          <li>
                    <a
                        href="#"
                        onClick={(event) => {
                        event.preventDefault();
                        refine(0);
                        }}
                    >
                       {'<<'}
                    </a>
                    </li>

                    <li>
                    <a
                        className={`${isFirstPage ? '' : ''}`}
                        href="#"
                        onClick={(event) => {
                        event.preventDefault();
                        refine(currentRefinement -1);
                        }}
                    >
                       {'XXXX'}
                    </a>
                    </li>
        {pages.map((page) => (
            <>

               
                  
                
          <li key={page} className='mx-1 h-8 w-8 flex items-center justify-center'>
            {page === currentRefinement ? ( <a className='rounded-cl w-full h-full flex items-center justify-center bg-green-500 text-green-50 heading-xl-semibold'
              href="#"
              onClick={(event) => {
                event.preventDefault();
                refine(page);
                
              }}
            >
              {page + 1}
            </a>) : ( <a className='rounded-cl w-full h-full flex items-center justify-center text-green-900 heading-xl'
              href="#"
              onClick={(event) => {
                event.preventDefault();
                refine(page);
               
              }}
            >
              {page + 1}
            </a>)}
          </li>
          </> ))}
      </ul>
    );
  }
import { useState } from "react";
import Link from "next/link";

export default function PolicyList(props) {
  const [searchValue, setSearchValue] = useState("");
  let lawData = [];
  if(props.data){
    lawData = props.data.filter((lawData) => {
      const searchContent =
        lawData.titel +
        lawData.bevoegdheidsniveau +
        lawData.rechtsgebied +
        lawData.officiele_titel_wettelijk_document;
      return searchContent.toLowerCase().includes(searchValue.toLowerCase());
    });
  }

  return (
    <>
      <div className='py-5 relative max-w-lg'>
        <input
          aria-label='Search'
          type='text'
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder='Search'
          className='block w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-md dark:border-gray-900 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:text-gray-100'
        />
        <svg
          className='py-5 absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-300'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
          />
        </svg>
      </div>
      <div className=''>
        {lawData.length === 0 && "No Laws found."}

        {lawData.map((lawData, lawDataIdx) => {
          const {
            id,
            titel,
            officieleTitel,
            rechtsgebied,
            bevoegdheidsniveau,
            ranking_invloed,
            ranking_afbreukrisico,
            officiele_titel_wettelijk_document,
          } = lawData;
          return (
            <div key={lawDataIdx} className='block py-5'>
              <div className='block my-1'>
                <Link href={"/laws/" + id} key={lawDataIdx}>
                  <a className='underline text-lg font-semibold'>{titel}</a>
                </Link>
              </div>
              <div className='block'>
                {rechtsgebied} - {officiele_titel_wettelijk_document}
              </div>

              <div className='flex space-x-8'>
                <div className='flex-2 mr-5 text-normal text-base text-gray-400'>
                  Bevoegdheidsniveau:{" "}
                  <span className='block-inline font-semibold text-base text-gray-900'>
                    {bevoegdheidsniveau}
                  </span>
                </div>

                <div className='flex-2 mr-5 text-normal text-base text-gray-400'>
                  Invloed:{" "}
                  <span className='block-inline font-semibold text-base text-gray-900'>
                    {ranking_invloed}
                  </span>
                </div>
                <div className='flex-2 mr-5 text-normal text-base text-gray-400'>
                  Afbreukrisico:{" "}
                  <span className='block-inline font-semibold text-base text-gray-900'>
                    {ranking_afbreukrisico}
                  </span>
                </div>
              </div>
            </div>
          );
        })}

        <div></div>
      </div>
    </>
  );
}

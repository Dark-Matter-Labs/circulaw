import { sanityFetch } from '@/lib/sanity';

export default async function TabItem({ tabValue, thema, tabName }) {
  // TODO: make this a function and move to /lib/queries.js
  const TAB_COUNT_QUERY = `
    count(*[_type == 'instrument' && thema->slug.current == $thema && ${tabValue} == true])
    `;
  const count = await sanityFetch({
    query: TAB_COUNT_QUERY,
    qParams: { thema: thema },
    tags: ['instrument'],
  });
  return (
    <button
      id={tabValue}
      disabled={count === 0}
      className={`${
        count === 0 ? 'opacity-50' : 'hover:bg-green-400'
      } w-full h-full p-3 text-gray-100 bg-green-500 rounded-t-cl flex flex-row items-baseline group-data-[selected]:bg-gray-100 group-data-[selected]:text-green-500`}
    >
      {tabName}
      <span className='p-2xs-bold sm:heading-xl-semibold inline-block min-w-[24px] pl-1'>
        ({count})
      </span>
    </button>
  );
}

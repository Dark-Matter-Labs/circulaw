import { sanityFetch } from '@/lib/sanity';
import { Tab } from '@headlessui/react';

export default async function TabItem({ children, tabValue, thema }) {
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
    <Tab
      disabled={count === 0}
      className={`${
        count === 0 ? 'opacity-50 hover:bg-green-500' : ''
      } heading-xl-semibold sm:heading-2xl-semibold first-letter:capitalize text-gray-100 bg-green-500 hover:bg-green-400 p-3 rounded-t-cl flex flex-row items-center data-[selected]:bg-gray-100 data-[selected]:text-green-500`}
    >
      <div className='flex flex-row items-baseline'>
        {children}
        <span className='p-2xs-bold sm:heading-xl-semibold inline-block min-w-[24px] pl-1'>
          ({count})
        </span>
      </div>
    </Tab>
  );
}

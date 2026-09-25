import { IconWorld } from '@tabler/icons-react';

// Toggle for the nav's single TranslatePanel. Rendered in both the desktop and mobile nav.
export default function LangSwitch({ background, translateOpen, setTranslateOpen }) {
  return (
    <>
      <div className=''>
        <button
          className='p-sm group relative z-100 ml-5 flex h-full flex-row items-center justify-center rounded-clSm text-green-100 sm:hidden lg:ml-4'
          onClick={() => {
            setTranslateOpen(!translateOpen);
          }}
          aria-label='Open google translate for CircuLaw'
        >
          <span className='heading-xl-semibold mr-2 text-cl-black'>Vertaling</span>
          <span className='flex h-6 w-7 items-center justify-center rounded-clSm bg-cl-black'>
            <IconWorld className='h-4 w-4' />
          </span>
        </button>
      </div>

      <div
        className={`${
          background === 'dark' ? 'bg-green-100 text-green-500' : 'bg-green-500 text-green-100'
        } rounded-clSm ml-4 hidden sm:block lg:ml-4`}
      >
        <button
          className='p-sm group relative z-100 hidden h-full flex-row items-center sm:flex'
          onClick={() => {
            setTranslateOpen(!translateOpen);
          }}
          aria-label='Open google translate for CircuLaw'
        >
          <span className='flex h-6 w-7 items-center justify-center rounded-clSm'>
            <IconWorld className='h-4 w-4' />
          </span>
        </button>
      </div>
    </>
  );
}

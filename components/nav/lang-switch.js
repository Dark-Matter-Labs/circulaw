import { GlobeAltIcon } from '@heroicons/react/outline';

export default function LangSwitch({ background, translateOpen, setTranslateOpen }) {
  return (
    <div
      className={`${
        background === 'dark' ? 'bg-green-50 text-green-600' : 'bg-green-600 text-green-50'
      }  ml-4 lg:ml-4 rounded-clSm`}
    >
      <button
        className='h-full relative p-sm group z-100 flex flex-row items-center'
        onClick={() => {
          setTranslateOpen(!translateOpen);
        }}
      >
        <span className='flex items-center justify-center rounded-clSm h-6 w-7'>
          <GlobeAltIcon className='h-4 w-4' />
        </span>
      </button>
    </div>
  );
}

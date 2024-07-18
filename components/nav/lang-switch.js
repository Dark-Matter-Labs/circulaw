import { GlobeIcon } from '@heroicons/react/outline';

export default function LangSwitch({ background, translateOpen, setTranslateOpen }) {
  return (
    <div
      className={`${
        background === 'dark' ? 'text-gray-100' : 'text-green-800'
      } flex justify-center items-center`}
    >
      <span
        className={`${background === 'dark' ? 'link-interaction-dark-bg' : 'link-interaction'}`}
      >
        <button
          onClick={() => {
            setTranslateOpen(!translateOpen);
          }}
        >
          <GlobeIcon className=' h-6 w-6 text-gray-100 hover:text-green-400' />
        </button>
      </span>
    </div>
  );
}

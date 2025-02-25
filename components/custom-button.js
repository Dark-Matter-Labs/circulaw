// TODO: refactor this and use it more widely.
const buttonColors = {
  home: 'bg-gray-100 hover:bg-green-300 text-green-500 shadow-md active:bg-green-400 focus:outline-none focus:bg-green-100 focus:ring-2 focus:ring-white rounded-full',
  whiteBackground:
    'border-2 border-green-500 bg-transparent hover:bg-green-300 text-green-500 active:bg-green-400 focus:outline-none focus:bg-green-100 focus:ring-2 focus:ring-white rounded-full',
  toPdf:
    'text-cl-black bg-green-400 hover:bg-green-300 hover:text-green-500 active:bg-cl-black active:text-gray-100 focus:outline-none focus:bg-green-100 focus:ring-2 focus:ring-white rounded-full',
  lightGreenBackground:
    'bg-green-500 hover:bg-green-300 hover:text-green-500 text-gray-100 active:bg-cl-black active:text-gray-100 focus:outline-none focus:ring-2 focus:ring-white rounded-full w-full sm:w-auto',
  greenBackground:
    'bg-green-500 hover:bg-green-300 hover:text-green-500 text-gray-100 active:bg-cl-black active:text-gray-100 focus:outline-none focus:ring-2 focus:ring-white rounded-full',
  greenBackgroundLessRound:
    'bg-green-500 hover:bg-green-300 hover:text-green-500 text-gray-100 active:bg-cl-black active:text-gray-100 focus:outline-none focus:ring-2 focus:ring-white rounded-[10px]',
  darkGreenBG:
    'bg-green-50 group-hover:bg-green-500 group-hover:text-green-50 text-green-500 border-2 border-green-500 active:bg-green-400 focus:outline-none focus:bg-green-100 focus:ring-2 focus:ring-white rounded-full',
  euPage:
    'bg-transparent hover:bg-green-500 hover:text-green-50 text-green-50 border-2 border-green-50 active:bg-green-400 focus:outline-none focus:bg-green-100 focus:ring-2 focus:ring-white rounded-full',
};
export default function CustomButton({ color, children, ...props }) {
  let colorClasses = buttonColors[color];

  return (
    <button
      {...props}
      type='button'
      className={`button inline-flex items-center justify-center px-4 py-2 ${colorClasses}`}
    >
      {children}
    </button>
  );
}

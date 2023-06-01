const buttonColors = {
  home: 'bg-black-white-200 hover:bg-green-200 text-green-600 focus:outline-none shadow-md active:bg-green-300 focus:outline-none focus:bg-green-100 focus:ring-2 focus:ring-white rounded-full',
  whiteBackground:
    'border-2 border-green-600 bg-transparent hover:bg-green-200 text-green-600 active:bg-green-300 focus:outline-none focus:bg-green-100 focus:ring-2 focus:ring-white rounded-full',
  toPdf:
    'text-black-white-800 bg-green-300 hover:bg-green-200 hover:text-green-500 active:bg-green-800 active:text-black-white-100 focus:outline-none focus:bg-green-100 focus:ring-2 focus:ring-white rounded-full',
  greenBackground:
    'bg-green-600 hover:bg-green-200 hover:text-green-600 text-black-white-100 active:bg-green-800 active:text-black-white-200 focus:outline-none focus:ring-2 focus:ring-white rounded-full',
  greenBackgroundLessRound:
    'bg-green-600 hover:bg-green-200 hover:text-green-600 text-black-white-100 active:bg-green-800 active:text-black-white-200 focus:outline-none focus:ring-2 focus:ring-white rounded-[10px]',
};
export default function CustomButton({ color, children, ...props }) {
  let colorClasses = buttonColors[color];

  return (
    <button
      {...props}
      type='button'
      className={`inline-flex items-center px-4 py-2 button ${colorClasses}`}
    >
      {children}
    </button>
  );
}

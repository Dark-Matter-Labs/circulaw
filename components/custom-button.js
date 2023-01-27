const buttonColors = {
  home: 'border-black-white-200 bg-black-white-200 shadow hover:bg-green-600 text-green-600 hover:text-black-white-200 transition ease-in-out hover:duration-150 focus:outline-none',
  actionPanel:
    'border-green-600 bg-green-600 hover:bg-transparent text-black-white-200 hover:text-green-600 transition ease-in-out hover:duration-150 focus:outline-none',
  whiteBackground:
    'border-green-600 bg-transparent hover:bg-green-600 text-green-600 hover:text-black-white-200 transition ease-in-out hover:duration-150 focus:outline-none',
  toPdf: 'border-green-300 text-black-white-800 bg-green-300',
};
export default function CustomButton({ color, children, ...props }) {
  let colorClasses = buttonColors[color];

  return (
    <button
      {...props}
      type='button'
      className={`inline-flex rounded-full items-center px-4 py-2 border button ${colorClasses}`}
    >
      {children}
    </button>
  );
}

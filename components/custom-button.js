const buttonColors = {
  home: 'border-white1 bg-white1 shadow hover:bg-green1 text-green1 hover:text-white1 transition ease-in-out hover:duration-150 focus:outline-none',
  actionPanel:
    'border-green1 bg-green1 hover:bg-transparent text-white1 hover:text-green1 transition ease-in-out hover:duration-150 focus:outline-none',
  whiteBackground:
    'border-green1 bg-transparent hover:bg-green1 text-green1 hover:text-white1 transition ease-in-out hover:duration-150 focus:outline-none',
  toPdf: 'border-green6 text-black1 bg-green6',
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

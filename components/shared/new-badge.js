// this is a non interactive component to display extra information about something.

const varientStyles = {
  green: 'border-green-500 text-green-500',
  white: 'border-green-100 text-green-100',
  black: 'border-cl-black text-cl-black',
};

export default function Badge({ children, variant }) {
  return (
    <div
      className={`${varientStyles[variant]} p-2xs-semibold max-w-min text-nowrap rounded-clSm border-2 px-2 py-1`}
    >
      {children}
    </div>
  );
}

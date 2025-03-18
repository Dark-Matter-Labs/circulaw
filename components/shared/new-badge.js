// this is a non interactive component to display extra information about something.

const varientStyles = {
  green: 'border-green-500 text-green-500',
  white: 'border-white text-white',
  black: 'border-cl-black text-cl-black',
};

export default function Badge({ children, variant }) {
  return (
    <div className={`${varientStyles[variant]} p-2xs-semibold rounded-clSm border-2 px-2 py-1`}>
      {children}
    </div>
  );
}

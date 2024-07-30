export default function Tag({ children, classes }) {
  return (
    <div
      className={`${classes} first-letter:uppercase px-2.5 h-6 rounded-[8px] p-2xs-bold flex items-center`}
    >
      <span className='first-letter:uppercase'>{children}</span>
    </div>
  );
}

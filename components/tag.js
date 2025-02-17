export default function Tag({ children, classes }) {
  return (
    <div
      className={`${classes} p-2xs-bold flex h-6 items-center rounded-[8px] px-2.5 first-letter:uppercase`}
    >
      <span className='first-letter:uppercase'>{children}</span>
    </div>
  );
}

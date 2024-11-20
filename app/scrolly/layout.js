export default function ScrollyLayout({ children }) {
  return (
    <div className='lg:mx-16 min-h-[10800px] flex flex-col items-center justify-start mt-10 relative'>
      <h1 className='heading-3xl-semibold'>Scrolly Telling</h1>
      {children}
    </div>
  );
}

export default function ScrollyLayout({ children }) {
  return (
    <div className='global-margin min-h-[1000vh] flex flex-col items-center justify-start mt-10 relative'>
      <h1 className='heading-3xl-semibold'>Scrolly Telling</h1>
      {children}
    </div>
  );
}

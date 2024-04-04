export const h1Component = ({ children }) => <h1 className='mb-4 mobile sm:desktop'>{children}</h1>;

export const h2Component = ({ children }) => (
  <h2 className='mt-10 mb-6 mobile sm:desktop'>{children}</h2>
);

export const h3Component = ({ children }) => (
  <h3 className='mt-10 mb-6 mobile sm:desktop'>{children}</h3>
);

export const normalTextComponent = ({ children }) => (
  <p className='newlineDisplay p-base my-4'>{children}</p>
);

// delete
export const normalTextComponentSmallPara = ({ children }) => (
  <p className='newlineDisplay text-grey-600 p-base py-2'>{children}</p>
);

export const subheading = ({ children }) => (
  <h2 className='mt-10 -mb-4 p-2xl-bold sm:p-6xl-bold'>{children}</h2>
);

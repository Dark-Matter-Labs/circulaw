export const h1Component = ({ children }) => (
  <h1 className='mb-4 heading-2xl-semibold sm:heading-5xl-semibold'>{children}</h1>
);

export const h2Component = ({ children }) => (
  <h2 className='mt-10 mb-6 heading-xl-semibold sm:heading-3xl-semibold'>{children}</h2>
);

export const h3Component = ({ children }) => (
  <h3 className='mt-10 mb-6 heading-xl-semibold sm:heading-2xl-semibold'>{children}</h3>
);

export const normalTextComponent = ({ children }) => (
  <p className='newlineDisplay p-base my-4'>{children}</p>
);

// delete
export const normalTextComponentSmallPara = ({ children }) => (
  <p className='newlineDisplay text-gray-600 p-base py-2'>{children}</p>
);

export const subheading = ({ children }) => (
  <h2 className='mt-10 -mb-4 heading-xl-semibold sm:heading-3xl-semibold'>{children}</h2>
);

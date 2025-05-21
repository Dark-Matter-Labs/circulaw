export const h1Component = ({ children }) => (
  <h1 className='heading-2xl-semibold sm:heading-5xl-semibold mb-4'>{children}</h1>
);

export const h2Component = ({ children }) => (
  <h2 className='heading-xl-semibold sm:heading-3xl-semibold mb-6 mt-10'>{children}</h2>
);

export const h3Component = ({ children }) => (
  <h3 className='heading-xl-semibold sm:heading-2xl-semibold mb-6 mt-10'>{children}</h3>
);

export const h3ComponentReduced = ({ children }) => (
  <h3 className='heading-xl-semibold mt-6'>{children}</h3>
);

export const normalTextComponent = ({ children }) => (
  <p className='newlineDisplay p-base my-4'>{children}</p>
);

export const aboutPageNormalTextComponent = ({ children }) => (
  <p className='newlineDisplay p-base sm:heading-2xl my-4'>{children}</p>
);

export const modelTextPtag = ({ children }) => <p className='newlineDisplay p-base'>{children}</p>;
// delete
export const normalTextComponentSmallPara = ({ children }) => (
  <p className='newlineDisplay p-base py-2 text-cl-dark-grey'>{children}</p>
);

export const subheading = ({ children }) => (
  <h2 className='heading-xl-semibold sm:heading-3xl-semibold -mb-4 mt-10'>{children}</h2>
);

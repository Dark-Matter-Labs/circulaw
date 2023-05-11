export const h1Component = ({ children }) => (
  <h1 className='ob-18px mobile sm:desktop'>{children}</h1>
);

export const firstH2Component = ({ children }) => (
  <h2 className='pb-[18px] mobile sm:desktop'>{children}</h2>
);

export const h2Component = ({ children }) => (
  <h2 className='pt-14 pb-[18px] mobile sm:desktop'>{children}</h2>
);

export const h3Component = ({ children }) => (
  <h3 className='pt-14 pb-[18px] mobile sm:desktop'>{children}</h3>
);

export const normalTextComponent = ({ children }) => (
  <p className='newlineDisplay p-base sm:p-lg py-2'>{children}</p>
);

export const normalTextComponentSmallPara = ({ children }) => (
  <p className='newlineDisplay text-black-white-600 p-base sm:p-lg py-2'>{children}</p>
);

export const h1ComponentGreen = ({ children }) => (
  <h1 className='pb-18px mobile sm:desktop text-green-500'>{children}</h1>
);

export const firstH2ComponentGreen = ({ children }) => (
  <h2 className='pb-[18px] mobile sm:desktop text-green-500'>{children}</h2>
);

export const h2ComponentGreen = ({ children }) => (
  <h2 className='pt-14 pb-[18px] mobile sm:desktop text-green-500'>{children}</h2>
);

export const h3ComponentGreen = ({ children }) => (
  <h3 className='pt-14 pb-[18px] mobile sm:desktop text-green-500'>{children}</h3>
);

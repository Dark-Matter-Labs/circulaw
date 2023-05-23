export const bulletComponent = ({ children }) => (
  <div className='newlineDisplay p-base sm:p-lg truncate'>
    <ul className='list-disc pl-6 p-base sm:p-lg'>{children}</ul>
  </div>
);

export const numberComponent = ({ children }) => (
  <div className='newlineDisplay p-base sm:p-lg truncate'>
    <ol className='list-decimal pl-6 pb-4 p-base sm:p-lg'>{children}</ol>
  </div>
);

export const bulletItemComponent = ({ children }) => {
  return <li className='py-1 p-base sm:p-lg'>{children}</li>;
};

export const numberItemComponent = ({ children }) => (
  <li className='py-1 p-base sm:p-lg'>{children}</li>
);

export const bulletComponentSmallPara = ({ children }) => (
  <div className='newlineDisplay p-base sm:p-lg truncate text-black-white-600'>
    <ul className='list-disc pl-6 p-base sm:p-lg'>{children}</ul>
  </div>
);

export const numberComponentSmallPara = ({ children }) => (
  <div className='newlineDisplay p-base sm:p-lg truncate text-black-white-600'>
    <ol className='list-decimal pl-6 pb-4 p-base sm:p-lg'>{children}</ol>
  </div>
);

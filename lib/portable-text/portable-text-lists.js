export const bulletComponent = ({ children }) => (
  <div className='newlineDisplay p-base sm:p-lg -mt-4'>
    <ul className='list-disc pl-6 p-base sm:p-lg'>{children}</ul>
  </div>
);

export const numberComponent = ({ children }) => (
  <div className='newlineDisplay p-base sm:p-lg -mt-4'>
    <ol className='list-decimal pl-6 p-base sm:p-lg'>{children}</ol>
  </div>
);

export const bulletItemComponent = ({ children }) => {
  return <li className=''>{children}</li>;
};

export const numberItemComponent = ({ children }) => <li className=''>{children}</li>;

export const bulletComponent = ({ children }) => (
  <div className='newlineDisplay p-md sm:p-lg -mt-4 mb-6'>
    <ul className='list-disc pl-6 p-md sm:p-lg'>{children}</ul>
  </div>
);

export const bulletComponentGreyBox = ({ children }) => (
  <div className='newlineDisplay p-md sm:p-lg -mt-4 mb-4'>
    <ul className='list-disc pl-6 p-md sm:p-lg'>{children}</ul>
  </div>
);

export const numberComponent = ({ children }) => (
  <div className='newlineDisplay p-md sm:p-lg -mt-4 pb-6'>
    <ol className='list-decimal pl-6 p-md sm:p-lg'>{children}</ol>
  </div>
);

export const numberComponentGreyBox = ({ children }) => (
  <div className='newlineDisplay p-md sm:p-lg -mt-4 mb-4'>
    <ol className='list-decimal pl-6 p-md sm:p-lg'>{children}</ol>
  </div>
);

export const bulletItemComponent = ({ children }) => {
  return <li className=''>{children}</li>;
};

export const numberItemComponent = ({ children }) => <li className=''>{children}</li>;

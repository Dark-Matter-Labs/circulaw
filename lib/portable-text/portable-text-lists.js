export const bulletComponent = ({ children }) => (
  <div className='newlineDisplay p-lg truncate'>
    <ul className='list-disc pl-6 p-lg'>{children}</ul>
  </div>
);

export const numberComponent = ({ children }) => (
  <div className='newlineDisplay p-lg truncate'>
    <ol className='list-decimal pl-6 pb-4 p-lg'>{children}</ol>
  </div>
);

export const bulletItemComponent = ({ children }) => <li className='py-0.5 p-lg'>{children}</li>;

export const numberItemComponent = ({ children }) => <li className='py-0.5 p-lg'>{children}</li>;

// can use value.level to conditionally style the list.
//
export const bulletComponent = ({ children, value }) => {
  if (value.level === 1) {
    return (
      <div className='newlineDisplay p-base -mt-2 mb-6'>
        <ul className='list-disc pl-6 p-base'>
          {children}
          {console.log(value.level)}
        </ul>
      </div>
    );
  } else if (value.level === 2) {
    return (
      <div className='newlineDisplay p-base'>
        <ul className='list-[circle] pl-6 p-base'>
          {children}
          {console.log(value.level)}
        </ul>
      </div>
    );
  }
};

export const bulletComponentGreyBox = ({ children }) => (
  <div className='newlineDisplay p-base -mt-2 mb-2'>
    <ul className='list-disc pl-6 p-base'>{children}</ul>
  </div>
);

export const numberComponent = ({ children }) => (
  <div className='newlineDisplay p-base -mt-2 mb-6'>
    <ol className='list-decimal pl-6 p-base'>{children}</ol>
  </div>
);

export const numberComponentGreyBox = ({ children }) => (
  <div className='newlineDisplay p-base -mt-2 mb-2'>
    <ol className='list-decimal pl-6 p-base'>{children}</ol>
  </div>
);

export const bulletItemComponent = ({ children }) => {
  return <li className='py-0.5'>{children}</li>;
};

export const numberItemComponent = ({ children }) => <li className='py-0.5'>{children}</li>;

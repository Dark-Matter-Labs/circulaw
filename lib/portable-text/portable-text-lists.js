// can use value.level to conditionally style the list.
//
export const bulletComponent = ({ children, value }) => {
  if (value.level === 1) {
    return (
      <div className='newlineDisplay p-base -mt-2 mb-6'>
        <ul className='p-base list-disc pl-6'>{children}</ul>
      </div>
    );
  } else if (value.level === 2) {
    return (
      <div className='newlineDisplay p-base'>
        <ul className='p-base list-[circle] pl-6'>{children}</ul>
      </div>
    );
  }
};

export const bulletComponentLargeText = ({ children, value }) => {
  if (value.level === 1) {
    return (
      <div className='newlineDisplay p-base sm:heading-2xl mb-6'>
        <ul className='list-disc pl-6'>{children}</ul>
      </div>
    );
  } else if (value.level === 2) {
    return (
      <div className='newlineDisplay p-base sm:heading-2xl'>
        <ul className='list-[circle] pl-6'>{children}</ul>
      </div>
    );
  }
};

export const bulletComponentGrayBox = ({ children }) => (
  <div className='newlineDisplay p-base -mt-2 mb-2'>
    <ul className='p-base list-disc pl-6'>{children}</ul>
  </div>
);

export const numberComponent = ({ children, value }) => {
  if (value.level === 1) {
    return (
      <div className='newlineDisplay p-base -mt-2 mb-6'>
        <ol className='p-base list-decimal pl-6'>{children}</ol>
      </div>
    );
  } else if (value.level === 2) {
    return (
      <div className='newlineDisplay p-base'>
        <ol className='p-base list-decimal pl-6'>{children}</ol>
      </div>
    );
  }
};

export const numberComponent2 = ({ children }) => (
  <div className='newlineDisplay p-base'>
    <ol className='p-base list-decimal py-0.5 pl-6'>{children}</ol>
  </div>
);

export const numberComponentGrayBox = ({ children }) => (
  <div className='newlineDisplay p-base -mt-2 mb-2'>
    <ol className='p-base list-decimal pl-6'>{children}</ol>
  </div>
);

export const bulletItemComponent = ({ children }) => {
  return <li className='py-0.5'>{children}</li>;
};

export const numberItemComponent = ({ children }) => <li className='py-0.5'>{children}</li>;

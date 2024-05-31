import { Highlight } from 'react-instantsearch';

export const Hit = ({ hit }) => {
  return (
    <article>
      <div className='hit-titel'>
        <Highlight attribute='titel' hit={hit} />
      </div>
      <div className='hit-subtitel'>
        <Highlight attribute='subtitel' hit={hit} />
      </div>
      <div className='hit-content'>
        <Highlight attribute='content' hit={hit} />
      </div>
    </article>
  );
};

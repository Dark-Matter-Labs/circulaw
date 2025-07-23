import Link from 'next/link';

import Badge from '../shared/new-badge';

export default function LatestContent({ latestContent }) {
  return (
    <div className='flex overflow-x-hidden'>
      <ul className='mb-10 flex animate-infinite-scroll flex-row gap-x-6 hover:paused'>
        {[...latestContent, ...latestContent].map((c, id) => {
          const date = new Date(c._createdAt);
          const options = {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          };
          return (
            <li
              key={id}
              className={`${id % 2 === 0 ? 'bg-green-100' : 'bg-orange-100'} flex flex-row rounded-cl border p-4 shadow-cl1`}
            >
              {c._type === 'euLaw' ? (
                <Link className='h-full w-full' href={`/eu-wetgeving/${c.slug}`}>
                  <div className='flex flex-row gap-x-4'>
                    <div className='flex flex-row gap-x-1'>
                      <Badge variant={`${id % 2 === 0 ? 'green' : 'black'}`}>EU wetgeving</Badge>
                      <Badge variant={`${id % 2 === 0 ? 'green' : 'black'}`}>
                        {date.toLocaleDateString('nl-NL', options)}
                      </Badge>
                    </div>
                    <span
                      className={`${id % 2 === 0 ? 'text-green-500' : 'text-orange-300'} heading-xl-semibold text-nowrap`}
                    >
                      Nieuwe EU wetgeving!
                    </span>
                  </div>
                </Link>
              ) : (
                <Link className='h-full w-full' href={`/${c.productChain}/${c.slug}`}>
                  <div className='flex flex-row gap-x-4'>
                    <div className='flex flex-row gap-x-1'>
                      <Badge variant={`${id % 2 === 0 ? 'green' : 'black'}`}>Thema</Badge>
                      <Badge variant={`${id % 2 === 0 ? 'green' : 'black'}`}>
                        {date.toLocaleDateString('nl-NL', options)}
                      </Badge>
                    </div>
                    <span
                      className={`${id % 2 === 0 ? 'text-green-500' : 'text-orange-300'} heading-xl-semibold text-nowrap`}
                    >
                      Nieuwe thema {c.themaName.toLowerCase()}!
                    </span>
                  </div>
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

import { Highlight } from 'react-instantsearch';

export default function EUHit({ hit }) {
    if (hit.title === 'EU Europe Tab') {
        return (
            <>
            <article className='flex flex-col h-full bg-gray-100 rounded-cl'>
                  <div className='shadow-card rounded-cl h-full p-4'>
                    <div className='max-w-[690px]'>
                      <h2 className='heading-2xl-semibold mb-4 group-hover:text-green-300 transition-all duration-300'>
                        <Highlight
                          attribute='searchTitle'
                          hit={hit}
                          classNames={{
                            highlighted: 'text-green-300 bg-green-300/20',
                          }}
                        />
                      </h2>
                      <p className='line-clamp-5 p-base'>
                        <Highlight
                          attribute='eu1Content'
                          hit={hit}
                          classNames={{
                            highlighted: 'text-green-300 bg-green-300/20',
                          }}
                        />
                      </p>
                    </div>
                  </div>
                </article>
           
            </>
          )
    } else if (hit.title === 'Local Tab') {
        return (
            <>
                 <article className='flex flex-col h-full bg-gray-100 rounded-cl'>
                  <div className='shadow-card rounded-cl h-full p-4'>
                    <div className='max-w-[690px]'>
                      <h2 className='heading-2xl-semibold mb-4 group-hover:text-green-300 transition-all duration-300'>
                        <Highlight
                          attribute='searchTitle'
                          hit={hit}
                          classNames={{
                            highlighted: 'text-green-300 bg-green-300/20',
                          }}
                        />
                      </h2>
                      <p className='line-clamp-5 p-base'>
                        <Highlight
                          attribute='localContent1'
                          hit={hit}
                          classNames={{
                            highlighted: 'text-green-300 bg-green-300/20',
                          }}
                        />
                      </p>
                    </div>
                  </div>
                </article>
            </>
        )
    } else if (hit.title === 'Circular economy Tab') {
        return (
            <>
                 <article className='flex flex-col h-full bg-gray-100 rounded-cl'>
                  <div className='shadow-card rounded-cl h-full p-4'>
                    <div className='max-w-[690px]'>
                      <h2 className='heading-2xl-semibold mb-4 group-hover:text-green-300 transition-all duration-300'>
                        <Highlight
                          attribute='searchTitle'
                          hit={hit}
                          classNames={{
                            highlighted: 'text-green-300 bg-green-300/20',
                          }}
                        />
                      </h2>
                      <p className='line-clamp-5 p-base'>
                        <Highlight
                          attribute='ceContent'
                          hit={hit}
                          classNames={{
                            highlighted: 'text-green-300 bg-green-300/20',
                          }}
                        />
                      </p>
                    </div>
                  </div>
                </article>
            </>
        )
    } else {
        return (
            <article className='flex flex-col h-full bg-gray-100 rounded-cl'>
            <div className='shadow-card rounded-cl h-full p-4'>
              <div className='max-w-[690px]'>
                <h2 className='heading-2xl-semibold mb-4 group-hover:text-green-300 transition-all duration-300'>
                  <Highlight
                    attribute='title'
                    hit={hit}
                    classNames={{
                      highlighted: 'text-green-300 bg-green-300/20',
                    }}
                  />
                </h2>
                <p className='line-clamp-5 p-base'>
                  <Highlight
                    attribute='introText'
                    hit={hit}
                    classNames={{
                      highlighted: 'text-green-300 bg-green-300/20',
                    }}
                  />
                </p>
              </div>
            </div>
          </article>
        )
    }

}

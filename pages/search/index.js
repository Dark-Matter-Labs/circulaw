import algoliasearch from 'algoliasearch';
import singletonRouter from 'next/router'

import { renderToString } from 'react-dom/server';
import {
DynamicWidgets,
InstantSearch,
Hits,
RefinementList,
SearchBox,
InstantSearchSSRProvider,
getServerState,
} from 'react-instantsearch';
import { createInstantSearchRouterNext } from 'react-instantsearch-router-nextjs';
import { InstrumentHit } from '@/components/search/instrument-hit';

  const algoliaClient = algoliasearch('0L6RUN37T0', '5287d2668bdeebcbff12a4a06353266a')



  export default function SearchPage({serverState, url}) {
    return (
        <InstantSearchSSRProvider {...serverState}>
            <InstantSearch
                searchClient={algoliaClient}
                indexName="instruments"
                routing={{
                  router: createInstantSearchRouterNext({
                    singletonRouter,
                    serverUrl: url,
                    routerOptions: {
                      cleanUrlOnDispose: false,
                    },
                  }),
                }}
                insights={true}
            >
        <div className="">
          <div>
            <DynamicWidgets fallbackComponent={FallbackComponent} facets={[]} />
          </div>
          <div>
            <SearchBox />
            <Hits hitComponent={InstrumentHit} />
          </div>
        </div>
      </InstantSearch>


        </InstantSearchSSRProvider>
    )
  }

  function FallbackComponent({ attribute }) {
    return (
      <div>
        <RefinementList attribute={attribute} />
      </div>
    
    );
  }
  
  export const getServerSideProps =
  async function getServerSideProps({ req }) {
    const protocol = req.headers.referer?.split('://')[0] || 'https';
    const url = `${protocol}://${req.headers.host}${req.url}`;
    const serverState = await getServerState(<SearchPage url={url} />, {
      renderToString,
    });

    return {
      props: {
        serverState,
        url,
      },
    };
  };
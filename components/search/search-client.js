import algoliasearch from 'algoliasearch';

import { algoliaConfig } from '@/lib/algolia-search-client';

const algoliaClient = algoliasearch(algoliaConfig.apiId, algoliaConfig.apiKey);

const searchClient = {
  ...algoliaClient,
  search(requests) {
    const filtered = requests.filter((request) => request.indexName !== 'root');
    const query = algoliaClient.search(filtered);
    return query.then((response) => {
      response.results = requests.map((request) =>
        request.indexName === 'root'
          ? {
              index: 'root',
              hits: [],
              nbHits: 0,
              nbPages: 0,
              page: 0,
              processingTimeMS: 0,
            }
          : response.results.shift(),
      );
      return response;
    });
  },
};

export default searchClient;

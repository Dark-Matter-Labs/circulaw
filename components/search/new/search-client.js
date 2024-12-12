import algoliasearch from 'algoliasearch';

const api_key = process.env.NEXT_PUBLIC_AGOLIA_SEARCH_KEY;
const api_id = process.env.NEXT_PUBLIC_AGOLIA_APPLICATION_ID;

const algoliaClient = algoliasearch(api_id, api_key);

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

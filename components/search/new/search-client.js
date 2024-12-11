import algoliasearch from 'algoliasearch';

const api_key = process.env.NEXT_PUBLIC_AGOLIA_SEARCH_KEY;
const api_id = process.env.NEXT_PUBLIC_AGOLIA_APPLICATION_ID;

const algoliaClient = algoliasearch(api_id, api_key);

const searchClient = {
  ...algoliaClient,
  search(requests) {
    const filtered = requests.filter( request => request.indexName !== 'root')
    console.log(filtered, 'filtered indexes')
    const rootPresent = filtered.length === requests.length
    console.log(rootPresent, 'returns false')
    const query = algoliaClient.search(filtered)
    return query.then(response => {
      if (rootPresent) {
        response.results.push({
          index: 'root',
          hits: [],
          nbHits: 0,
          nbPages: 0,
          page: 0,
          processingTimeMS: 0
        })
      }
      return response
    })
  }
}

export default searchClient
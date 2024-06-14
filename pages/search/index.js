import { getServerState } from 'react-instantsearch';
import { renderToString } from 'react-dom/server';


import Search from '@/components/search/search';
import Layout from '@/components/layouts/layout';


export default function SearchPage({ serverState, url }) {
  return (
    <Layout>
      <Search serverState={serverState} url={url} />
      </Layout>
  )
}

export const getServerSideProps = async function getServerSideProps({ req }) {
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

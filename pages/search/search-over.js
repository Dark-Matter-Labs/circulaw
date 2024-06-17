import { getServerState } from 'react-instantsearch';
import { renderToString } from 'react-dom/server';

import AboutSearch from '@/components/search/about-search';
import Layout from '@/components/layouts/layout';


export default function SearchOver({ serverState, url }) {
  return (
    <Layout>
      <AboutSearch serverState={serverState} url={url} />
      </Layout>
  )
}

export const getServerSideProps = async function getServerSideProps({ req }) {
  const protocol = req.headers.referer?.split('://')[0] || 'https';
  const url = `${protocol}://${req.headers.host}${req.url}`;
  const serverState = await getServerState(<SearchOver url={url} />, {
    renderToString,
  });
  return {
    props: {
      serverState,
      url,
    },
  };
};

import { createClient } from 'next-sanity';

import imageUrlBuilder from '@sanity/image-url';

import { config } from './config';

if (!config.projectId) {
  throw Error('The Project ID is not set. Check your environment variables.');
}

const builder = imageUrlBuilder(config);
export function urlFor(source) {
  return builder.image(source);
}

export const client = createClient(config);

export async function sanityFetch({ query, qParams = {}, tags }) {
  return client.fetch(query, qParams, {
    cache: process.env.NODE_ENV === 'development' ? 'no-store' : 'force-cache',
    next: { tags },
  });
}

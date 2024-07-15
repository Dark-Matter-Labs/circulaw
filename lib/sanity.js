import { config } from './config';
import imageUrlBuilder from '@sanity/image-url';
import { createClient } from 'next-sanity';

if (!config.projectId) {
  throw Error('The Project ID is not set. Check your environment variables.');
}

const builder = imageUrlBuilder(config);
export function urlFor(source) {
  return builder.image(source);
}

export const client = createClient(config);

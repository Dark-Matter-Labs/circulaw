import { config } from './config';
import createImageUrlBuilder from '@sanity/image-url';
import { createClient } from 'next-sanity';

if (!config.projectId) {
  throw Error('The Project ID is not set. Check your environment variables.');
}

export const urlFor = (source) => createImageUrlBuilder(config).image(source);

export const imageBuilder = (source) => createImageUrlBuilder(config).image(source);

export const client = createClient(config);

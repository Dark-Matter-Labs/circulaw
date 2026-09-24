import imageUrlBuilder from '@sanity/image-url';

import { config } from './config';

// Kept apart from lib/sanity.js so client components can build image URLs
// without importing the server-only data fetching (next/headers).
const builder = imageUrlBuilder(config);
export function urlFor(source) {
  return builder.image(source);
}

import { createClient } from 'next-sanity';

import { config } from './config';

if (!config.projectId) {
  throw Error('The Project ID is not set. Check your environment variables.');
}

// Safe to import from client components. Server data fetching, which is draft
// mode aware, lives in lib/sanity.js.
export const client = createClient(config);

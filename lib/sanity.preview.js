import { definePreview } from 'next-sanity/preview';

const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const projectId = '2vfoxb3h';

function onPublicAccessOnly() {
  throw new Error('Unable to load preview as you’re not logged in');
}
export const usePreview = definePreview({ projectId, dataset, onPublicAccessOnly });

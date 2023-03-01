import { defineCliConfig } from 'sanity/cli';

const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

export default defineCliConfig({
  api: {
    projectId: '2vfoxb3h',
    dataset: dataset,
  },
});

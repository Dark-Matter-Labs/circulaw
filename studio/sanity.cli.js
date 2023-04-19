import { defineCliConfig } from 'sanity/cli';

const dataset = process.env.SANITY_STUDIO_DATASET;

export default defineCliConfig({
  api: {
    projectId: '2vfoxb3h',
    dataset: dataset,
  },
});

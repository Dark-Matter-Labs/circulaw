import { defineCliConfig } from 'sanity/cli';

const dataset = process.env.SANITY_STUDIO_DATASET;
console.log(dataset)

export default defineCliConfig({
  api: {
    projectId: '2vfoxb3h',
    dataset: dataset,
  },
});

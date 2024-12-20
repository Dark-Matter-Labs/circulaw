import { defaultDocumentNode } from './default-document-node';
import { Structure } from './desk-structure';
import { schemaTypes } from './schemas';
import { table } from '@sanity/table';
import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { vercelDeployTool } from 'sanity-plugin-vercel-deploy';
import { structureTool } from 'sanity/structure';
import { getIdPair } from 'sanity';

const singletonActions = new Set(['publish', 'discardChanges', 'restore']);

const singletonTypes = new Set([
  'siteConfig',
  'partners',
  'navigation',
  'FAQpage',
  'transitionAgenda',
]);

let name = '',
  path = '';

if (process.env.SANITY_STUDIO_DATASET === 'production') {
  name = 'CircuLaw';
  path = '/studio';
} else {
  name = 'CircuLawStaging';
  path = '/staging';
}

export default defineConfig({
  name: name,
  title: name,
  projectId: '2vfoxb3h',
  dataset: process.env.SANITY_STUDIO_DATASET,
  basePath: path,
  plugins: [
    structureTool({
      structure: Structure,
      defaultDocumentNode,
    }),
    visionTool(),
    vercelDeployTool(),
    table(),
  ],
  schema: {
    types: schemaTypes,
    templates: (templates) => [
      ...templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
      {
        id: 'instruments-by-theme',
        title: 'Instruments by theme',
        description: 'Instruments by a specific theme',
        schemaType: 'instrument',
        parameters: [{ name: 'themaId', type: 'string' }], // ,
        value: (params, context) => resolveThemaId(params, context),
      },
      {
        id: 'instruments-by-top-5-theme',
        title: 'Instruments by top 5 theme',
        description: 'Instruments by a top 5 theme',
        schemaType: 'instrument',
        parameters: [{ name: 'themaId', type: 'string' }], // ,
        value: (params, context) => resolveSimpleThemaId(params, context),
      },
    ],

    document: {
      // For singleton types, filter out actions that are not explicitly included
      // in the `singletonActions` list defined above
      actions: (input, context) =>
        singletonTypes.has(context.schemaType)
          ? input.filter(({ action }) => action && singletonActions.has(action))
          : input,
    },
  },
});

async function resolveThemaId(params, context) {
  const { getClient } = context;
  const client = getClient({ apiVersion: '2024-07-15' });
  const ids = await client.fetch(`*[_type == 'thema'][]._id`);
  const themaRef = ids.includes(params.themaId)
    ? params.themaId
    : getIdPair(params.themaId).draftId;
  return {
    thema: { _type: 'reference', _ref: themaRef },
  };
}

async function resolveSimpleThemaId(params, context) {
  const { getClient } = context;
  const client = getClient({ apiVersion: '2024-07-15' });
  const ids = await client.fetch(`*[_type == 'simpleThema'][]._id`);
  const themaRef = ids.includes(params.themaId)
    ? params.themaId
    : getIdPair(params.themaId).draftId;
  return {
    thema: { _type: 'reference', _ref: themaRef },
  };
}

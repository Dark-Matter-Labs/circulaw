import { defineConfig } from 'sanity';
import { vercelDeployTool } from 'sanity-plugin-vercel-deploy';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';
import { Structure } from './desk-structure';
import { defaultDocumentNode } from './default-document-node';
import { table } from '@sanity/table';
import { assist } from '@sanity/assist';
import { structureTool } from 'sanity/structure'


const singletonActions = new Set(['publish', 'discardChanges', 'restore']);

const singletonTypes = new Set([
  'siteConfig',
  'englishPage',
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
    assist(),
  ],
  schema: {
    types: schemaTypes,
    templates: (templates) => templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),

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

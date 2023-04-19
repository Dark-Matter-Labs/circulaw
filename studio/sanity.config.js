import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';
import { Structure } from './desk-structure';
import { defaultDocumentNode } from './default-document-node';

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
    deskTool({
      structure: Structure,
      defaultDocumentNode,
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
});

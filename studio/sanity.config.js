import { defineConfig, isSanityDocument } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';
import { Structure } from './desk-structure';
import { defaultDocumentNode } from './default-document-node';
import Logo from './components/logo';

export default defineConfig([
  {
    name: 'CircuLaw',
    title: 'CircuLaw',
    projectId: '2vfoxb3h',
    dataset: 'production',
    basePath: '/studio',
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
    studio: {
      components: {
        logo: Logo,
      },
    },
  },
  {
    name: 'CircuLawStaging',
    title: 'CircuLaw Staging',
    projectId: '2vfoxb3h',
    dataset: 'staging',
    basePath: '/staging',
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
  },
]);

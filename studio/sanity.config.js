import {defineConfig, isSanityDocument} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { Structure } from './desk-structure'

export default defineConfig({
  name: 'CircuLaw',
  title: 'CircuLaw',

  projectId: '2vfoxb3h',
  dataset: 'production',

  basePath: '/studio',

  plugins: [
    deskTool({
      structure: Structure,
    }), 
  visionTool()],

  schema: {
    types: schemaTypes,
  },
})

// sanity.blueprint.ts
import 'dotenv/config'
import process from 'node:process'
import {defineBlueprint, defineDocumentFunction} from '@sanity/blueprints'



const {ALGOLIA_APP_ID, ALGOLIA_WRITE_KEY} = process.env
if (typeof ALGOLIA_APP_ID !== 'string' || typeof ALGOLIA_WRITE_KEY !== 'string') {
  console.log(ALGOLIA_APP_ID)
  throw new Error('ALGOLIA_APP_ID and ALGOLIA_WRITE_KEY must be set')
}

export default defineBlueprint({
  resources: [
    defineDocumentFunction({
      type: 'sanity.function.document',
      name: 'algolia-document-sync',
      memory: 1,
      timeout: 10,
      src: './functions/algolia-document-sync',
      event: {
        on: ['publish'],
        filter: "_type == 'instrument'",
        projection: '_id, title, hideFromSearch',
      },
      env: {
        ALGOLIA_APP_ID,
        ALGOLIA_WRITE_KEY
      },
   }),
  ],
})
// sanity.blueprint.ts
import 'dotenv/config'
import process from 'node:process'
import {defineBlueprint, defineDocumentFunction} from '@sanity/blueprints'



const {ALGOLIA_APP_ID_STAGING, ALGOLIA_WRITE_KEY_STAGING} = process.env
if (typeof ALGOLIA_APP_ID_STAGING !== 'string' || typeof ALGOLIA_WRITE_KEY_STAGING !== 'string') {
  throw new Error('ALGOLIA_APP_ID and ALGOLIA_WRITE_KEY must be set')
}

export default defineBlueprint({
  resources: [
    defineDocumentFunction({
      type: 'sanity.function.document',
      name: 'algolia-instrument-sync-staging',
      memory: 1,
      timeout: 10,
      src: './functions/algolia-instrument-sync-staging',
      event: {
        on: ['publish'],
        filter: "_type == 'instrument'",
        projection: '_id, _type, _rev, titel, subtitel, subrechtsgebied, citeertitel, "content": pt::text(content), "slug": slug.current, "transitionAgenda":transitionAgenda->{...}, "thema": thema->themaName, extraContent, overheidslaag, juridischInvloed, juridischeHaalbaarheid, rLadder, rechtsgebied, "categorie": [select(beleid == true => "beleid"), select(inkoop == true => "inkoop"), select(grondpositie == true => "grondpositie"), select(subsidie == true => "subsidie"), select(fiscaal == true => "fiscaal")]',
      },
      env: {
        ALGOLIA_APP_ID_STAGING: ALGOLIA_APP_ID_STAGING,
        ALGOLIA_WRITE_KEY_STAGING: ALGOLIA_WRITE_KEY_STAGING
      },
   }),
  ],
})
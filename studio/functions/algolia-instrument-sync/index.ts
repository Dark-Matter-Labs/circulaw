import {env} from 'node:process'

import {documentEventHandler} from '@sanity/functions'
import {algoliasearch} from 'algoliasearch'

const {ALGOLIA_APP_ID = '', ALGOLIA_WRITE_KEY = ''} = env


export const handler = documentEventHandler(async ({event}) => {
  const data = event.data
  console.log(data)
  console.log(`Received event for document ${data._id} with title "${data.titel}"`)
  const algolia = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_WRITE_KEY)

  try {
    // We are assuming you already have an algolia instance setup with an index called 'posts'
    // addOrUpdateObject documentation: https://www.algolia.com/doc/libraries/javascript/v5/methods/search/add-or-update-object/?client=javascript
    await algolia.addOrUpdateObject({
      indexName: 'instruments', // Change this to your actual index name
      objectID: data._id,
      body: {
        titel: data.titel,
        subtitel: data.subtitel,
        subrechtsgebied: data.subrechtsgebied,
        citeertitel: data.citeertitel,
        content: data.content,
        slug: data.slug,
        transitionAgenda: data.transitionAgenda,
        thema: data.thema,
        extraContent: data.extraContent,
        overheidslaag: data.overheidslaag,
        juridischInvloed: data.juridischInvloed,
        juridischeHaalbaarheid: data.juridischeHaalbaarheid,
        rLadder: data.rLadder,
        rechtsgebied: data.rechtsgebied,
        categorie: data.categorie,
      },
    })

    console.log(`Successfully synced document ${data._id} ("${data.titel}") to Algolia`)
  } catch (error) {
    console.error('Error syncing to Algolia:', error)
    throw error
  }
})

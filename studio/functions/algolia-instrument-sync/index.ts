import {env} from 'node:process'

import {documentEventHandler} from '@sanity/functions'
import {algoliasearch} from 'algoliasearch'
import {createClient} from '@sanity/client'


export const handler = documentEventHandler(async ({context, event}) => {
  const {clientOptions} = context
  const client = createClient({
    projectId: clientOptions.projectId,
    dataset: clientOptions.dataset,
    apiVersion: '2025-07-29',
    useCdn: false,
    token: process.env.SANITY_READ_TOKEN
  })

  const fullDoc = await client.fetch(
    `*[_id == $id][0]{
      _id,
      titel,
      subtitel,
      subrechtsgebied,
      citeertitel,
      "content": pt::text(content),
      "slug": slug.current,
      "transitionAgenda": transitionAgenda->pcName,
      "thema": thema->themaName,
      extraContent,
      overheidslaag,
      juridischInvloed,
      juridischeHaalbaarheid,
      rLadder,
      rechtsgebied,
      "categorie": [
        select(beleid == true => "beleid"),
        select(inkoop == true => "inkoop"),
        select(grondpositie == true => "grondpositie"),
        select(subsidie == true => "subsidie"),
        select(fiscaal == true => "fiscaal")
      ]
    }`,
    {id: event.data._id}
  )

  const algolia = algoliasearch(env.ALGOLIA_APP_ID, env.ALGOLIA_WRITE_KEY)
  await algolia.addOrUpdateObject({
    indexName: 'instruments',
    objectID: fullDoc._id,
    body: fullDoc
  })

  console.log(`Synced ${fullDoc._id} to Algolia.`)
})
# Algolia indexing

Two API routes write to the Algolia indexes (`instruments`, `euLaw`, `newsItems`).
Both reject any caller that can't prove it holds a shared secret. If a secret is
not set, the route refuses every request with a 500 and logs which variable is
missing.

| Route | Caller | Auth | Env var |
| --- | --- | --- | --- |
| `POST /api/search` | Sanity publish webhook | Sanity webhook signature (`sanity-webhook-signature` header) | `SANITY_ALGOLIA_WEBHOOK_SECRET` |
| `GET /api/algolia-indexing` | A person, run manually | `Authorization: Bearer <secret>` | `ALGOLIA_REINDEX_SECRET` |

## Running a full reindex manually

This rebuilds all three indexes from the published Sanity content. It only runs
on the production deployment (`APP_ENV=production`). Elsewhere it returns
`{ "status": 204 }` without touching Algolia.

```bash
curl -fsS -H "Authorization: Bearer $ALGOLIA_REINDEX_SECRET" https://www.circulaw.nl/api/algolia-indexing
```

A successful run returns `{ "status": 200, "body": "Success!" }`. A missing or
wrong token returns HTTP 401. Keep the secret out of URLs and shell history:
export it from your password manager rather than pasting it inline.

## Setting the secrets

1. Generate each secret with `openssl rand -hex 32`. Use a different value for each.
2. Add `SANITY_ALGOLIA_WEBHOOK_SECRET` and `ALGOLIA_REINDEX_SECRET` in Vercel
   (Project → Settings → Environment Variables) for Production, then redeploy.
3. In Sanity (manage.sanity.io → API → Webhooks), open the webhook that posts
   to `/api/search` and set its **Secret** to the value of
   `SANITY_ALGOLIA_WEBHOOK_SECRET`.

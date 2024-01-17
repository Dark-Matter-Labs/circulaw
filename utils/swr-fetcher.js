import { client }  from '@/lib/sanity'

export const fetcher = query => client.fetch(query)
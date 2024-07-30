import { revalidateTag } from 'next/cache'
import { NextResponse } from 'next/server'
import { parseBody } from 'next-sanity/webhook'

export const runtime = 'edge'

export async function POST(req) {
  try {
    const { isValidSignature, body } = await parseBody(
      req,
      process.env.NEXT_PUBLIC_SANITY_REVALIDATE_SECRET,
    )

    if (!isValidSignature) {
      const message = 'Invalid signature'
      return new Response(JSON.stringify({message, isValidSignature, body}), {status: 401})
    }

    if (!body?._type) {
      return new Response(body, {status: 400})
    }

    // All `client.fetch` calls with `{next: {tags: [_type]}}` will be revalidated
    revalidateTag(body._type)
    console.log(`Revalidated ${body._type}`)

    return NextResponse.json({
      status: 200,
      revalidated: true,
      now: Date.now(),
      body
    })
  } catch (err) {
    console.error(err)
    if (err instanceof Error) {
      return new Response(err.message, { status: 500 })
    }
    return new Response('Error', { status: 500 })
  }
}
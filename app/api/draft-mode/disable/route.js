import { draftMode } from 'next/headers';
import { redirect } from 'next/navigation';

// Only same-site paths, so this can't be used as an open redirect.
function safePath(value) {
  return value?.startsWith('/') && !value.startsWith('//') ? value : '/';
}

export async function GET(request) {
  (await draftMode()).disable();
  redirect(safePath(new URL(request.url).searchParams.get('redirect')));
}

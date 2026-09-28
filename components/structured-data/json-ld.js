import { serializeJsonLd } from '@/lib/structured-data';

// serializeJsonLd escapes <, > and &, so CMS text cannot break out of the tag.
export default function JsonLd({ data }) {
  if (!data) return null;
  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }}
    />
  );
}

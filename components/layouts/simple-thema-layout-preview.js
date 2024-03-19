import { usePreview } from '@/lib/sanity.preview';

export default function SimpleThemeLayoutPreview({ query, queryParams }) {
  const data = { thema: usePreview(null, query, queryParams) };
  console.log(data);
  return <></>;
}

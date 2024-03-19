import { usePreview } from 'next-sanity/preview';

export default function SimpleThemeLayoutPreview({ query, queryParams }) {
  const data = { instrument: usePreview(null, query, queryParams) };
  console.log(data);
  return <></>;
}

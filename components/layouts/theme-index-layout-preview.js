import { usePreview } from 'next-sanity/preview';

export default function ThemeLayoutPreview({ query, queryParams }) {
  const data = { thema: usePreview(null, query, queryParams) };
  console.log(data);
  return <></>;
}

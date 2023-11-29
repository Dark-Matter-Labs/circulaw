import { aboutPageQuery, measureQuery } from '@/lib/queries';
import { client } from '@/lib/sanity';
// need to edit this to be able to set location to slug:
function redirectToPreview(res, previewData, Location) {
  // Enable Preview Mode by setting the cookies
  res.setPreviewData(previewData);
  // Redirect to a preview capable route
  res.writeHead(307, { Location });
  res.end();
}

export default async function preview(req, res) {
  const previewData = {};
  const instrument = await client.fetch(measureQuery, {
    slug: req.query.slug,
  });
  const aboutPage = await client.fetch(aboutPageQuery, {
    slug: req.query.slug,
  });
  if (instrument) {
    return redirectToPreview(res, previewData, `/measures/${instrument.slug.current}`);
  }
  if (aboutPage) {
    return redirectToPreview(res, previewData, `/about/${aboutPage.slug.current}`);
  }
}

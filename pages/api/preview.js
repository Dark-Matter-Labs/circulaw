import { measureQuery } from '../../lib/queries';
import client from '../../lib/sanity';

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
  redirectToPreview(res, previewData, `/measures/${instrument.slug.current}`); // change measures to ${instrument.thema}
}

import { aboutPageQuery, instrumentQuery, themaQuery } from '@/lib/queries';
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
  const instrument = await client.fetch(instrumentQuery, {
    slug: req.query.slug,
  });
 

  const aboutPage = await client.fetch(aboutPageQuery, {
    slug: req.query.slug,
  });
  
  const themaPage = await client.fetch(themaQuery, { thema: req.query.slug})

  if (themaPage) {  
    return redirectToPreview(
      res, previewData, `/${themaPage.thema.transitionAgenda}/${themaPage.thema.slug.current}`
    )
  }
  
  if (instrument) {
    return redirectToPreview(
      res,
      previewData,
      `/${instrument.transitionAgenda}/${instrument.thema}/instrumenten/${instrument.slug.current}`,
    );
  }
  if (aboutPage) {
    return redirectToPreview(res, previewData, `/over/${aboutPage.slug.current}`);
  }
}

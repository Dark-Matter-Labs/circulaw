import Docs from '@/components/modeltext/docs';
import { sanityFetch } from '@/lib/sanity';
const PILLARS_QUERY = `
 *[_type == 'pillar'] {
  ...,
  'slug':slug.current,
 }
`;

const MODELTEXT_QUERY = `
  *[_type == 'modelText'] {
  ...,
  'slug': slug.current,
  'pillar': pillar->slug.current,
  'modelTextPT': pt::text(modelText),
  'descriptionPT': pt::text(description),
  'linkedInstruments': linkedInstruments[]->
    {titel, 'slug': slug.current, 'transitionAgenda':transitionAgenda->slug.current, 'thema': thema->slug.current , }
  } 
`;



export default async function ModelDocs() {
    const pillars = await sanityFetch({ query: PILLARS_QUERY, tags: ['pillar'] });
    const modelTexts = await sanityFetch({ query: MODELTEXT_QUERY, tags: ['modelText'] });


    return (
        <div className="global-margin flex flex-col items-center">
            <h1 className='heading-5xl-semibold mt-10'>
                Model texts 
            </h1>
            <Docs pillars={pillars} modelTexts={modelTexts} />
        </div>
    )
}
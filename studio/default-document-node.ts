import { DefaultDocumentNodeResolver } from 'sanity/desk'
import Iframe from 'sanity-plugin-iframe-pane'
import {SanityDocument} from 'sanity'


function getPreviewUrl(doc: SanityDocument) {
    return doc?.slug?.current
      ? `http://localhost:3000/measures/${doc.slug.current}`
      : `${window.location.host}`
  }

export const defaultDocumentNode: DefaultDocumentNodeResolver = (S, {schemaType}) => {
    switch(schemaType) {
        case 'measure':
            return S.document().views([
                S.view.form(),
                S.view
                    .component(Iframe)
                    .options({
                        url: (doc: SanityDocument) => getPreviewUrl(doc),   
                    })
                    .title('Preview')
            ])
        default:
            return S.document().views([S.view.form()])
    }
}
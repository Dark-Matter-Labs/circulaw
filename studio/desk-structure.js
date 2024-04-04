import { VscLaw } from 'react-icons/vsc';
import { GrNavigate } from 'react-icons/gr';
import { FcAbout } from 'react-icons/fc';
import { FaLanguage, FaHandshake, FaQuestion } from 'react-icons/fa';
import { BsCircle, BsNewspaper } from 'react-icons/bs';
import { AiOutlineHome } from 'react-icons/ai';
import { GiEuropeanFlag } from 'react-icons/gi';

export const Structure = (S) =>
  S.list()
    .title('Content Types')
    .items([
      S.listItem()
        .title('Instrumenten per thema') // TODO: update to Instrumenten
        .icon(VscLaw)
        .child(
          // List out all categories
          S.documentTypeList('thema')
            .title('Instrumenten per thema')
            .child((themaId) =>
              S.documentList()
                .title('Instruments')
                .filter('_type == "instrument" && $themaId == thema._ref')
                .params({ themaId }),
            ),
        ),
      S.listItem()
        .title('Instrumenten per top 5 thema') // TODO: update to Instrumenten
        .icon(VscLaw)
        .child(
          // List out all categories
          S.documentTypeList('simpleThema')
            .title('Instrumenten per top 5 thema')
            .child((themaId) =>
              S.documentList()
                .title('Instruments')
                .filter('_type == "instrument" && $themaId ==  thema._ref')
                .params({ themaId }),
            ),
        ),
      S.listItem()
        .title('EU Law')
        .icon(GiEuropeanFlag)
        .child(S.documentList().title('EU Law').filter('_type == "euLaw"')),
      S.listItem()
        .title('About Pages')
        .icon(FcAbout)
        .child(S.documentList().title('About Pages').filter('_type == "aboutPage"')),
      S.listItem()
        .title('News Page')
        .id('newsPage')
        .icon(BsNewspaper)
        .child(S.document().title('News Page').schemaType('newsPage').documentId('newsPage')),
      S.divider(),
      S.listItem()
        .title('Productketen')
        .icon(BsCircle)
        .child(
          S.documentList()
            .title('Productketen')
            .filter('_type == "transitionAgenda" || _type == "simplePC"'),
        ),
      S.listItem()
        .title("Thema's")
        .icon(BsCircle)
        .child(S.documentList().title("Thema's").filter('_type in ["thema", "simpleThema"]')),
      S.documentListItem().schemaType('FAQpage').title('FAQ Page').icon(FaQuestion),
      S.listItem()
        .title('English Page')
        .id('englishPage')
        .icon(FaLanguage)
        .child(
          S.document().title('English Page').schemaType('englishPage').documentId('englishPage'),
        ),
      S.listItem()
        .title('Partners')
        .id('PartnersList')
        .icon(FaHandshake)
        .child(S.document().title('Partners').schemaType('partners').documentId('PartnersList')),
      S.divider(),
      S.listItem()
        .title('Navigation')
        .id('NavigationList')
        .icon(GrNavigate)
        .child(S.documentList().title('Navigation').filter('_type == "navigation"')),
      S.listItem()
        .title('Home Page')
        .id('siteSettings')
        .icon(AiOutlineHome)
        .child(S.document().title('Home Page').schemaType('siteConfig').documentId('siteSettings')),
    ]);

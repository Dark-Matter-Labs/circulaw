import { VscLaw } from 'react-icons/vsc';
import { GiDeadWood, GiBed, GiWindmill } from 'react-icons/gi';
import { GrNavigate } from 'react-icons/gr';
import { FcAbout } from 'react-icons/fc';
import { MdSettingsSuggest } from 'react-icons/md';
import { FaLanguage, FaHandshake, FaQuestion } from 'react-icons/fa';
import { BsCircle } from 'react-icons/bs';

export const Structure = (S) =>
  S.list()
    .title('Content Types')
    .items([
      S.listItem()
        .title('Measures')
        .icon(VscLaw)
        .child(
          S.list()
            .title('Themas')
            .items([
              S.listItem()
                .title('Houtbouw')
                .icon(GiDeadWood)
                .child(
                  S.documentList()
                    .title('Houtbouw Measures')
                    .filter('_type == "measure" &&  thema == "houtbouw-stimuleren"'),
                ),
              S.listItem()
                .title('Circulaire windturbines')
                .icon(GiWindmill)
                .child(
                  S.documentList()
                    .title('Circulaire windturbines measures')
                    .filter('_type == "measure" &&  thema == "circulaire-windturbines"'),
                ),
              S.listItem()
                .title('Matrassen')
                .icon(GiBed)
                .child(
                  S.documentList()
                    .title('Matrassen measures')
                    .filter('_type == "measure" && thema == "circulaire-matrasketen"'),
                ),
            ]),
        ),
      S.listItem()
        .title('About Pages')
        .icon(FcAbout)
        .child(S.documentList().title('About Pages').filter('_type == "aboutPage"')),
      S.divider(),
      S.listItem()
        .title("Thema's")
        .icon(BsCircle)
        .child(S.documentList().title("Thema's").filter('_type == "thema"')),
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
        .title('Site Settings')
        .id('siteSettings')
        .icon(MdSettingsSuggest)
        .child(
          S.document().title('Site Settings').schemaType('siteConfig').documentId('siteSettings'),
        ),
    ]);

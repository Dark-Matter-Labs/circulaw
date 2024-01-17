import { VscLaw } from 'react-icons/vsc';
import { GiDeadWood, GiBed, GiWindmill, GiBanana, GiTable } from 'react-icons/gi';
import { GrNavigate } from 'react-icons/gr';
import { FcAbout } from 'react-icons/fc';
import { FaLanguage, FaHandshake, FaQuestion } from 'react-icons/fa';
import { BsCircle, BsHouseDoor } from 'react-icons/bs';
import { BiNews } from 'react-icons/bi';
import { AiOutlineHome } from 'react-icons/ai';

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
                    .filter(
                      '_type == "measure" &&  thema == "houtbouw-stimuleren" || thema == "houtbouw"',
                    ),
                ),
              S.listItem()
                .title('Circulaire windturbines')
                .icon(GiWindmill)
                .child(
                  S.documentList()
                    .title('Circulaire windturbines measures')
                    .filter(
                      '_type == "measure" &&  thema == "circulaire-windturbines" || thema == "windturbines"',
                    ),
                ),
              S.listItem()
                .title('Circulaire matrasketen')
                .icon(GiBed)
                .child(
                  S.documentList()
                    .title('Circulaire matrasketen measures')
                    .filter(
                      '_type == "measure" &&  thema == "circulaire-matrasketen" || thema == "matrasketen"',
                    ),
                ),
              S.listItem()
                .title('Voedselverspilling')
                .icon(GiBanana)
                .child(
                  S.documentList()
                    .title('Voedselverspilling')
                    .filter('_type == "measure" && thema == "voedselverspilling"'),
                ),
              S.listItem()
                .title('Meubels')
                .icon(GiTable)
                .child(
                  S.documentList()
                    .title('Meubels')
                    .filter('_type == "measure" && thema == "meubels"'),
                ),
              S.listItem()
                .title('Woningen')
                .icon(BsHouseDoor)
                .child(
                  S.documentList()
                    .title('Woningen')
                    .filter('_type == "measure" && thema == "woningen"'),
                ),
            ]),
        ),
      S.listItem()
        .title('About Pages')
        .icon(FcAbout)
        .child(S.documentList().title('About Pages').filter('_type == "aboutPage"')),
      S.listItem()
        .title('News and Updates')
        .icon(BiNews)
        .child(S.documentList().title('News and Updates').filter('_type == "newsItem"')),
      S.listItem()
        .title('News Page')
        .id('newsPage')
        .icon(BsNewspaper)
        .child(S.document().title('News Page').schemaType('newsPage').documentId('newsPage')),
      S.divider(),
      S.listItem()
        .title("Thema's")
        .icon(BsCircle)
        .child(
          S.documentList().title("Thema's").filter('_type == "thema" || _type == "simpleThema"'),
        ),
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

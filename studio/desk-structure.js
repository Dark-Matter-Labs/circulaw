import { VscLaw } from 'react-icons/vsc';
import {
  GiDeadWood,
  GiBed,
  GiWindmill,
  GiBanana,
  GiTable,
  GiGrass,
  GiBeanstalk,
} from 'react-icons/gi';
import { GrNavigate } from 'react-icons/gr';
import { FcAbout } from 'react-icons/fc';
import { FaLanguage, FaHandshake, FaQuestion } from 'react-icons/fa';
import { BsCircle, BsHouseDoor, BsNewspaper } from 'react-icons/bs';
import { BiNews } from 'react-icons/bi';
import { AiOutlineHome } from 'react-icons/ai';

export const Structure = (S) =>
  S.list()
    .title('Content Types')
    .items([
      S.listItem()
        .title('Measures') // TODO: update to Instrumenten
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
                        '_type == "measure" && thema->slug.current == "houtbouw"',
                    ),
                ),
              S.listItem()
                .title('Circulaire windturbines')
                .icon(GiWindmill)
                .child(
                  S.documentList()
                    .title('Circulaire windturbines measures')
                    .filter(
                      '_type == "measure" && thema->slug.current == "windturbines"',
                    ),
                ),
              S.listItem()
                .title('Circulaire matrasketen')
                .icon(GiBed)
                .child(
                  S.documentList()
                    .title('Circulaire matrasketen measures')
                    .filter(
                      '_type == "measure" && thema->slug.current == "matrasketen"',
                    ),
                ),
              S.listItem()
                .title('Voedselverspilling')
                .icon(GiBanana)
                .child(
                  S.documentList()
                    .title('Voedselverspilling')
                    .filter(
                      '_type == "measure" && thema->slug.current == "voedselverspilling"'),
                ),
              S.listItem()
                .title('Meubels')
                .icon(GiTable)
                .child(
                  S.documentList()
                    .title('Meubels')
                    .filter( '_type == "measure" && thema->slug.current == "meubels"'),
                ),
              S.listItem()
                .title('Woningen')
                .icon(BsHouseDoor)
                .child(
                  S.documentList()
                    .title('Woningen')
                    .filter('_type == "measure" && thema->slug.current == "woningen"'),
                ),
              S.listItem()
                .title('Kunstgrasvelden')
                .icon(GiGrass)
                .child(
                  S.documentList()
                    .title('Kunstgrasvelden')
                    .filter('_type == "measure" && thema->slug.current == "kunstgrasvelden"'),
                ),
              S.listItem()
                .title('Eiwittransitie')
                .icon(GiBeanstalk)
                .child(
                  S.documentList()
                    .title('Eiwittransitie')
                    .filter('_type == "measure" && thema->slug.current == "eiwittransitie"'),
                ),
            ]),
        ),
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
        .title('Transitie-agenda')
        .icon(BsCircle)
        .child(
          S.documentList()
            .title('Transitie-agenda')
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

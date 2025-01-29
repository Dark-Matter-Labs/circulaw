import { AiOutlineHome } from 'react-icons/ai';
import { BsCircle, BsNewspaper } from 'react-icons/bs';
import { CiTextAlignJustify } from 'react-icons/ci';
import { FaHandshake, FaLanguage, FaQuestion } from 'react-icons/fa';
import { FcAbout } from 'react-icons/fc';
import { GiEuropeanFlag, GiGreekTemple } from 'react-icons/gi';
import { GrNavigate } from 'react-icons/gr';
import { VscLaw } from 'react-icons/vsc';

import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list';

import productChain from './schemas/documents/product-chain';

export const Structure = (S, context) =>
  S.list()
    .title('Content Types')
    .items([
      S.listItem({
        id: 'instruments-by-theme',
        title: 'Instrumenten per thema',
        schemaType: 'instrument',
        child: () =>
          S.documentTypeList('thema').child((themaId) =>
            S.documentTypeList('instrument')
              .title('Instruments by thema')
              .filter(
                '_type == $type && thema._ref == $themaId || thema._ref == "drafts." + $themaId',
              )
              .params({ type: 'instrument', themaId })
              .initialValueTemplates([
                S.initialValueTemplateItem('instruments-by-theme', { themaId }),
              ]),
          ),
      }),
      S.listItem({
        id: 'instruments-by-top-5-theme',
        title: 'Instrumenten per top 5 thema',
        schemaType: 'instrument',
        child: () =>
          S.documentTypeList('simpleThema').child((themaId) =>
            S.documentTypeList('instrument')
              .title('Instruments by top 5 thema')
              .filter(
                '_type == $type && thema._ref == $themaId || thema._ref == "drafts." + $themaId',
              )
              .params({ type: 'instrument', themaId })

              .initialValueTemplates([
                S.initialValueTemplateItem('instruments-by-top-5-theme', { themaId }),
              ]),
          ),
      }),
      S.listItem()
        .title('Inhoud per EU wet')
        .icon(GiEuropeanFlag)
        .child(
          // List out all categories
          S.documentTypeList('euLaw')
            .title('Inhoud per EU wet')
            .child((euLawId) =>
              S.documentList()
                .title('Instruments')
                .filter(
                  '_type in ["euEuropeTab", "euCircularEconomyTab", "euLocalTab"] && $euLawId ==  euLawReference._ref',
                )
                .params({ euLawId }),
            ),
        ),
      orderableDocumentListDeskItem({
        type: 'aboutPage',
        S,
        context,
        title: 'About Pages',
        icon: FcAbout,
      }),
      orderableDocumentListDeskItem({
        type: 'newsItem',
        S,
        context,
        title: 'News Items',
        icon: BsNewspaper,
      }),
      S.listItem()
        .title('Model Texts by Pillar')
        .icon(CiTextAlignJustify)
        .child(
          S.documentTypeList('pillar')
            .title('Model Texts')
            .child((pillarId) =>
              S.documentList()
                .title('Model Texts')
                .filter('_type in ["modelText"] && $pillarId == pillar._ref')
                .params({ pillarId }),
            ),
        ),
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
        .child(
          S.documentTypeList('transitionAgenda')
            .title('Themas')
            .child((transitieagendaId) =>
              S.documentList()
                .title("Thema's")
                .filter(
                  '_type in ["thema", "simpleThema"] && $transitieagendaId == transitionAgenda._ref',
                )
                .params({ transitieagendaId }),
            ),
        ),
      S.listItem()
        .title('EU wetgeving')
        .icon(GiEuropeanFlag)
        .child(S.documentList().title('EU wetgeving').filter('_type == "euLaw"')),
      orderableDocumentListDeskItem({
        type: 'pillar',
        S,
        context,
        title: 'Pillars',
        icon: GiGreekTemple,
      }),
      S.documentListItem().schemaType('FAQpage').title('FAQ Page').icon(FaQuestion),
      S.listItem()
        .title('Partners')
        .id('PartnersList')
        .icon(FaHandshake)
        .child(S.document().title('Partners').schemaType('partners').documentId('PartnersList')),
      S.divider(),
      S.listItem()
        .title('Home Page')
        .id('siteSettings')
        .icon(AiOutlineHome)
        .child(S.document().title('Home Page').schemaType('siteConfig').documentId('siteSettings')),
    ]);

{
  /*
       S.listItem()
        .title('Instrumenten per top 5 thema')
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
      
      */
}

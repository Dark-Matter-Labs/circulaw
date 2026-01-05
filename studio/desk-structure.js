import { AiOutlineHome } from 'react-icons/ai';
import { BsCircle, BsNewspaper } from 'react-icons/bs';
import { CiTextAlignJustify } from 'react-icons/ci';
import { FaHandshake, FaQuestion } from 'react-icons/fa';
import { FaQuoteLeft } from 'react-icons/fa';
import { FcAbout } from 'react-icons/fc';
import { GiEuropeanFlag, GiGreekTemple } from 'react-icons/gi';

import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list';

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
      orderableDocumentListDeskItem({
        type: 'transitionAgenda',
        S,
        context,
        title: 'Productketen',
        icon: BsCircle,
      }),
      // TODO: group themes by product chain and make them orderable
      S.listItem()
        .title("Thema's")
        .icon(BsCircle)
        .child(S.documentList().title("Thema's").filter('_type in ["thema", "simpleThema"]')),
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
      S.listItem()
        .title('Reactions')
        .icon(FaQuoteLeft)
        .child(S.documentList().title('Reactions').filter('_type == "reaction"')),
      S.divider(),
      S.listItem()
        .title('Home Page')
        .id('siteSettings')
        .icon(AiOutlineHome)
        .child(S.document().title('Home Page').schemaType('siteConfig').documentId('siteSettings')),
    ]);

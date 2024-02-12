import measure from './documents/measure';
import aboutPage from './documents/about-pages';
import navigation from './documents/navigation';
import siteConfig from './documents/site-config';
import partners from './documents/partners';
import englishPage from './documents/english-page';
import thema from './documents/thema';
import faq from './documents/faq';
import simpleThema from './documents/simple-thema';
import newsPage from './documents/news-page';
import euLaw from './documents/eu-law';

import greenBox from './objects/green-box';
import pdfBlock from './objects/pdf-block';
import imageBlock from './objects/image-object';
import hoverText from './objects/hover-text';
import smallPara from './objects/small-paragraph';
import link from './objects/link';
import navItem from './objects/nav-item';
import dropDown from './objects/drop-down';
import partner from './objects/partner';
import faqItem from './objects/faq-item';
import faqSection from './objects/faq-section';
import newsCard from './objects/news-card';
import agendaItem from './objects/agenda-item';
import euLawSection from './objects/eu-law-section';

export const schemaTypes = [
  // DOCUMENT TYPES
  measure,
  aboutPage,
  navigation,
  englishPage,
  partners,
  thema,
  faq,
  simpleThema,
  newsPage,
  euLaw,

  // OBJECTS
  greenBox,
  pdfBlock,
  imageBlock,
  hoverText,
  smallPara,
  link,
  navItem,
  siteConfig,
  dropDown,
  partner,
  faqItem,
  faqSection,
  newsCard,
  agendaItem,
  euLawSection
];

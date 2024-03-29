import aboutPage from './documents/about-pages';
import englishPage from './documents/english-page';
import euLaw from './documents/eu-law';
import faq from './documents/faq';
import instrument from './documents/instrument';
import navigation from './documents/navigation';
import newsPage from './documents/news-page';
import partners from './documents/partners';
import productChain from './documents/product-chain';
import simpleThema from './documents/simple-thema';
import siteConfig from './documents/site-config';
import thema from './documents/thema';
import agendaItem from './objects/agenda-item';
import dropDown from './objects/drop-down';
import euLawSection from './objects/eu-law-section';
import faqItem from './objects/faq-item';
import faqSection from './objects/faq-section';
import greenBox from './objects/green-box';
import imageBlock from './objects/image-object';
import inlineTable from './objects/inline-table';
import link from './objects/link';
import linkObject from './objects/link-object';
import navItem from './objects/nav-item';
import newsCard from './objects/news-card';
import partner from './objects/partner';
import pdfBlock from './objects/pdf-block';
import productChainAmbition from './objects/product-chain-ambition';
import productChainImpact from './objects/product-chain-impact';
import smallPara from './objects/small-paragraph';

export const schemaTypes = [
  // DOCUMENT TYPES
  instrument,
  aboutPage,
  navigation,
  englishPage,
  partners,
  thema,
  productChain,
  faq,
  simpleThema,
  newsPage,
  euLaw,
  euLawSection,

  // OBJECTS
  greenBox,
  pdfBlock,
  imageBlock,
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
  productChainAmbition,
  productChainImpact,
  linkObject,
  inlineTable,
];

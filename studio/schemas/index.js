import aboutPage from './documents/about-pages';
import euCircularEconomyTab from './documents/eu-circular-economy-tab';
import euEuropeTab from './documents/eu-europe-tab';
import euLaw from './documents/eu-law';
import euLocalTab from './documents/eu-local-tab';
import faq from './documents/faq';
import instrument from './documents/instrument';
import modelText from './documents/model-text';
import newsItem from './documents/news-item';
import partners from './documents/partners';
import pillar from './documents/pillar';
import productChain from './documents/product-chain';
import simpleThema from './documents/simple-thema';
import siteConfig from './documents/site-config';
import thema from './documents/thema';
import dropDown from './objects/drop-down';
import euLawSection from './objects/eu-law-section';
import faqItem from './objects/faq-item';
import faqSection from './objects/faq-section';
import greenBox from './objects/green-box';
import imageBlock from './objects/image-object';
import inlineTable from './objects/inline-table';
import linkObject from './objects/link-object';
import partner from './objects/partner';
import pdfBlock from './objects/pdf-block';
import productChainAmbition from './objects/product-chain-ambition';
import productChainImpact from './objects/product-chain-impact';
import smallPara from './objects/small-paragraph';
import themePageReport from './objects/thema-report';
import { youtube } from './objects/youtube-embed';

export const schemaTypes = [
  // DOCUMENT TYPES
  instrument,
  aboutPage,
  partners,
  thema,
  productChain,
  faq,
  simpleThema,
  newsItem,
  euLaw,
  euLawSection,
  euCircularEconomyTab,
  euEuropeTab,
  euLocalTab,
  modelText,
  pillar,

  // OBJECTS
  greenBox,
  pdfBlock,
  imageBlock,
  smallPara,
  siteConfig,
  dropDown,
  partner,
  faqItem,
  faqSection,
  productChainAmbition,
  productChainImpact,
  linkObject,
  inlineTable,
  youtube,
  themePageReport,
];

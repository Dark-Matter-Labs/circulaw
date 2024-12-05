import aboutPage from './documents/about-pages';
import euLaw from './documents/eu-law';
import faq from './documents/faq';
import instrument from './documents/instrument';
import partners from './documents/partners';
import productChain from './documents/product-chain';
import simpleThema from './documents/simple-thema';
import dropDown from './objects/drop-down';
import euLawSection from './objects/eu-law-section';
import siteConfig from './documents/site-config';
import thema from './documents/thema';
import faqItem from './objects/faq-item';
import faqSection from './objects/faq-section';
import greenBox from './objects/green-box';
import imageBlock from './objects/image-object';
import inlineTable from './objects/inline-table';
import linkObject from './objects/link-object';
import newsItem from './documents/news-item';
import pdfBlock from './objects/pdf-block';
import partner from './objects/partner';
import productChainAmbition from './objects/product-chain-ambition';
import productChainImpact from './objects/product-chain-impact';
import smallPara from './objects/small-paragraph';
import { youtube } from './objects/youtube-embed';
import themePageReport from './objects/thema-report';
import euCircularEconomyTab from './documents/eu-circular-economy-tab';
import euEuropeTab from './documents/eu-europe-tab';
import euLocalTab from './documents/eu-local-tab';
import modelText from './documents/model-text';
import pillar from './documents/pillar';

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

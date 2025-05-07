import aboutPage from './documents/about-page';
// EU LAW
import euCircularEconomyTab from './documents/eu/eu-circular-economy-tab';
import euEuropeTab from './documents/eu/eu-europe-tab';
import euLaw from './documents/eu/eu-law';
import euLocalTab from './documents/eu/eu-local-tab';
import faq from './documents/faq';
// INSTRUMENTS
import instrument from './documents/instruments/instrument';
import productChain from './documents/instruments/product-chain';
import simpleThema from './documents/instruments/simple-thema';
import thema from './documents/instruments/thema';
// MODEL TEXTS
import modelText from './documents/modeltexts/model-text';
import pillar from './documents/modeltexts/pillar';
import newsItem from './documents/news-item';
import partners from './documents/partners';
import siteConfig from './documents/site-config';
// OBJECTS
import dropDown from './objects/drop-down';
import dropDownHighlight from './objects/drop-down-highlight';
import euLawSection from './objects/eu-law-section';
import faqItem from './objects/faq-item';
import faqSection from './objects/faq-section';
import highlightBlock from './objects/highlight-block';
import imageBlock from './objects/image-object';
import inlineTable from './objects/inline-table';
import linkObject from './objects/link-object';
import partner from './objects/partner';
import pdfBlock from './objects/pdf-block';
import productChainAmbition from './objects/product-chain-ambition';
import productChainImpact from './objects/product-chain-impact';
import themePageReport from './objects/thema-report';
import { youtube } from './objects/youtube-embed';

export const schemaTypes = [
  // DOCUMENT TYPES

  // INSTRUMENTS
  instrument,
  simpleThema,
  productChain,

  newsItem,
  aboutPage,
  partners,
  thema,
  faq,

  // EU LAW
  euLaw,
  euLawSection,
  euCircularEconomyTab,
  euEuropeTab,
  euLocalTab,

  // Modwl text
  modelText,
  pillar,

  // OBJECTS
  dropDownHighlight,
  pdfBlock,
  imageBlock,
  highlightBlock,
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

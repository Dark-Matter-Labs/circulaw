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
import modelText from './documents/modeltexts/model-text';
import pillar from './documents/modeltexts/pillar';
import newsItem from './documents/news-item';
import partners from './documents/partners';
import siteConfig from './documents/site-config';
import accordionDropdown from './objects/about-page/accordion-dropdown';
import accordionDropdownContent from './objects/about-page/accordion-dropdown-content';
import cta from './objects/about-page/cta';
import intro from './objects/about-page/intro';
import mediaItem from './objects/about-page/media-item';
import mediaItems from './objects/about-page/media-items';
// MODEL TEXTS
import milestone from './objects/about-page/milestone';
import partnersSection from './objects/about-page/partners-section';
import team from './objects/about-page/team';
import teamMember from './objects/about-page/team-member';
import tiledImages from './objects/about-page/tiled-images';
import timeline from './objects/about-page/timeline';
import title from './objects/about-page/title';
import twoColumnSection from './objects/about-page/two-column-section';
import euLawSection from './objects/eu-law-section';
import faqItem from './objects/faq-item';
import faqSection from './objects/faq-section';
import linkObject from './objects/link-object';
import partner from './objects/partner';
// OBJECTS
import dropDown from './objects/portable-text/drop-down';
import dropDownHighlight from './objects/portable-text/drop-down-highlight';
import highlightBlock from './objects/portable-text/highlight-block';
import imageBlock from './objects/portable-text/image-object';
import pdfBlock from './objects/portable-text/pdf-block';
import { youtube } from './objects/portable-text/youtube-embed';
import productChainAmbition from './objects/product-chain-ambition';
import productChainImpact from './objects/product-chain-impact';
import themePageReport from './objects/thema-report';

export const schemaTypes = [
  // DOCUMENT TYPES

  // INSTRUMENTS
  instrument,
  simpleThema,
  productChain,

  // OTHER PAGES
  newsItem,
  partners,
  thema,
  faq,

  // EU LAW
  euLaw,
  euLawSection,
  euCircularEconomyTab,
  euEuropeTab,
  euLocalTab,

  // MODEL TEXTS
  modelText,
  pillar,

  // ABOUT PAGE OBJECTS and DOCUMENTS
  aboutPage,
  teamMember,
  team,
  milestone,
  timeline,
  title,
  twoColumnSection,
  accordionDropdown,
  accordionDropdownContent,
  intro,
  cta,
  tiledImages,
  partnersSection,
  mediaItem,
  mediaItems,

  // SHARED OBJECTS
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
  youtube,
  themePageReport,
];

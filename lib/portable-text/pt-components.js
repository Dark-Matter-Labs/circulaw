import {
  // h1Component,
  h2Component,
  h3Component,
  h3ComponentReduced,
  normalTextComponent,
  subheading,
  modelTextPtag,
} from '../portable-text/portable-text-blocks';
import {
  bulletComponent,
  numberComponent,
  bulletItemComponent,
  numberItemComponent,
  numberComponent2,
} from '../portable-text/portable-text-lists';
import {
  linkComponent,
  // linkBGDarkComponent,
  internalLink,
  bold,
  italic,
} from '../portable-text/portable-text-marks';
import {
  // pdfBlockComponentAboutPage,
  pdfBlockComponentinstrumentPage,
  dropDownComponent,
  InlineImageComponent,
  grayBoxPTComponent,
  smallParaPTComponent,
  YTComponent,
} from '../portable-text/portable-text-types';

// portable text components used in the following pages
// instrument page, about page, eu page, Faq pages etc.
export const portableTextComponents = {
  types: {
    greenBox: grayBoxPTComponent,
    pdfBlock: pdfBlockComponentinstrumentPage,
    smallPara: smallParaPTComponent,
    dropDown: dropDownComponent,
    imageBlock: InlineImageComponent,
    youtube: YTComponent,
  },
  list: {
    bullet: bulletComponent,
    number: numberComponent,
  },
  listItem: {
    number: bulletItemComponent,
    bullet: numberItemComponent,
  },
  block: {
    h2: h2Component,
    h3: h3Component,
    normal: normalTextComponent,
    subheading: subheading, // used only on
  },
  marks: {
    link: linkComponent,
    internalLink: internalLink,
    strong: bold,
    em: italic,
  },
};

// components used in
// drop downs, tooltips etc
export const reducedPortableTextComponents = {
  list: {
    bullet: bulletComponent,
    number: numberComponent2,
  },
  listItem: {
    number: bulletItemComponent,
    bullet: numberItemComponent,
  },
  block: {
    h3: h3ComponentReduced,
    normal: normalTextComponent,
  },
  marks: {
    link: linkComponent,
    internalLink: internalLink,
    strong: bold,
    em: italic,
  },
};

export const ModelTextComponents = {
  list: {
    bullet: bulletComponent,
    number: numberComponent2,
  },
  listItem: {
    number: bulletItemComponent,
    bullet: numberItemComponent,
  },
  block: {
    h3: h3ComponentReduced,
    normal: modelTextPtag,
  },
  marks: {
    link: linkComponent,
    internalLink: internalLink,
    strong: bold,
    em: italic,
  },
};

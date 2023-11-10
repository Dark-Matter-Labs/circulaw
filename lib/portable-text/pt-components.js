import {
  pdfBlockComponentAboutPage,
  pdfBlockComponentMeasurePage,
  dropDownComponent,
  InlineImageComponent,
  grayBoxPTComponent,
  smallParaPTComponent,
} from '../portable-text/portable-text-types';
import {
  bulletComponent,
  numberComponent,
  bulletItemComponent,
  numberItemComponent,
} from '../portable-text/portable-text-lists';
import {
  h1Component,
  firstH2Component,
  h2Component,
  h3Component,
  normalTextComponent,
  subheading,
} from '../portable-text/portable-text-blocks';
import { linkComponent, linkBGDarkComponent } from '../portable-text/portable-text-marks';

export const instrumentPTComponents = {
  types: {
    greenBox: grayBoxPTComponent,
    pdfBlock: pdfBlockComponentMeasurePage,
    smallPara: smallParaPTComponent,
    dropDown: dropDownComponent,
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
    firstH2: firstH2Component,
    h2: h2Component,
    h3: h3Component,
    // need to add other styles here
    normal: normalTextComponent,
  },
  marks: {
    link: linkComponent,
  },
};

export const aboutPagePTComponents = {
  types: {
    greenBox: grayBoxPTComponent,
    pdfBlock: pdfBlockComponentAboutPage,
    smallPara: smallParaPTComponent,
    imageBlock: InlineImageComponent,
    dropDown: dropDownComponent,
  },
  list: {
    bullet: bulletComponent,
    number: numberComponent,
  },
  listItem: {
    bullet: bulletItemComponent,
    number: numberItemComponent,
  },
  block: {
    firstH2: firstH2Component,
    h2: h2Component,
    h3: h3Component,
    normal: normalTextComponent,
    subheading: subheading
  },
  marks: {
    link: linkComponent,
  },
};

export const FAQPagePTComponents = {
  types: {
    greenBox: grayBoxPTComponent,
    pdfBlock: pdfBlockComponentAboutPage,
    smallPara: smallParaPTComponent,
    dropDown: dropDownComponent,
  },
  list: {
    bullet: bulletComponent,
    number: numberComponent,
  },
  listItem: {
    bullet: bulletItemComponent,
    number: numberItemComponent,
  },
  block: {
    firstH2: firstH2Component,
    h2: h2Component,
    h3: h3Component,
    normal: normalTextComponent,
  },
  marks: {
    link: linkComponent,
  },
};

export const enPageComponents = {
  types: {
    pdfBlock: pdfBlockComponentAboutPage,
  },
  list: {
    bullet: bulletComponent,
    number: numberComponent,
  },
  listItem: {
    bullet: bulletItemComponent,
    number: numberItemComponent,
  },
  block: {
    h1: h1Component,
    h2: h2Component,
    h3: h3Component,
    normal: normalTextComponent,
  },
  marks: {
    link: linkBGDarkComponent,
  },
};

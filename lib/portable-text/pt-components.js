import {
  pdfBlockComponentAboutPage,
  smallParaComponent,
  pdfBlockComponentMeasurePage,
  dropDownComponent,
  InlineImageComponent,
  greenBoxPTComponent,
} from '../portable-text/portable-text-types';
import {
  bulletComponent,
  numberComponent,
  bulletItemComponent,
  numberItemComponent,
} from '../portable-text/portable-text-lists';
import {
  firstH2Component,
  h2Component,
  h3Component,
  normalTextComponent,
  firstH2ComponentGreen,
  h2ComponentGreen,
  h3ComponentGreen,
} from '../portable-text/portable-text-blocks';
import { linkComponent } from '../portable-text/portable-text-marks';

export const instrumentPTComponents = {
  types: {
    greenBox: greenBoxPTComponent,
    pdfBlock: pdfBlockComponentMeasurePage,
    smallPara: smallParaComponent,
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
    greenBox: greenBoxPTComponent,
    pdfBlock: pdfBlockComponentAboutPage,
    smallPara: smallParaComponent,
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
    firstH2: firstH2ComponentGreen,
    h2: h2ComponentGreen,
    h3: h3ComponentGreen,
    normal: normalTextComponent,
  },
  marks: {
    link: linkComponent,
  },
};

export const FAQPagePTComponents = {
  types: {
    greenBox: greenBoxPTComponent,
    pdfBlock: pdfBlockComponentAboutPage,
    smallPara: smallParaComponent,
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
    firstH2: firstH2ComponentGreen,
    h2: h2ComponentGreen,
    h3: h3ComponentGreen,
    normal: normalTextComponent,
  },
  marks: {
    link: linkComponent,
  },
};

export const juridischeToelichtingComponernts = {
  list: {
    bullet: bulletComponent,
    number: numberComponent,
  },
  listItem: {
    bullet: bulletItemComponent,
    number: numberItemComponent,
  },
  block: {
    normal: normalTextComponent,
  },
};

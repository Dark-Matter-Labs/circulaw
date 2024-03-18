import {
  pdfBlockComponentAboutPage,
  pdfBlockComponentinstrumentPage,
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
  h2Component,
  h3Component,
  normalTextComponent,
  subheading,
} from '../portable-text/portable-text-blocks';
import {
  linkComponent,
  linkBGDarkComponent,
  internalLink,
  bold,
  italic,
} from '../portable-text/portable-text-marks';


// portable text components used in the following pages
// instrument page, about page, eu page, Faq pages etc.
export const portableTextComponents = {
  types: {
    greenBox: grayBoxPTComponent,
    pdfBlock: pdfBlockComponentinstrumentPage,
    smallPara: smallParaPTComponent,
    dropDown: dropDownComponent,
    imageBlock: InlineImageComponent,
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
}

// components used in
// drop downs, tooltips etc
export const reducedPortableTextComponents = {
  list: {
    bullet: bulletComponent,
    number: numberComponent,
  },
  listItem: {
    number: bulletItemComponent,
    bullet: numberItemComponent,
  },
  block: {
    h3: h3Component,
    normal: normalTextComponent,
  },
  marks: {
    link: linkComponent,
    internalLink: internalLink,
    strong: bold,
    em: italic,
  },
};


// keeping this as it is has some dark background components that are not needed elsewhere. 
// we can delete once translation is implemented. 
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





import measure from './measure';
import greenBox from './green-box';
import pdfBlock from './pdf-block';
import imageBlock from './image-object';
import hoverText from './hover-text';
import smallPara from './small-paragraph';
import aboutPage from './about-pages';

export const schemaTypes = [
  // DOCUMENT TYPES
  measure,
  aboutPage,

  // OBJECTS
  greenBox,
  pdfBlock,
  imageBlock,
  hoverText,
  smallPara,
];

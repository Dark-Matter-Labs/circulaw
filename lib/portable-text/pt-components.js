import {
    greenBoxComponent,
    hoverTextComponent,
    pdfBlockComponentAboutPage,
    smallParaComponent,
    pdfBlockComponentMeasurePage,
    dropDownComponent, 
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
  } from '../portable-text/portable-text-blocks';
  import { linkComponent } from '../portable-text/portable-text-marks';

  
  export const instrumentPTComponents = {
    types: {
      greenBox: greenBoxComponent,
      hoverText: hoverTextComponent,
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
  

  export const aboutPageComponents = {
    types: {
      greenBox: greenBoxComponent,
      hoverText: hoverTextComponent,
      pdfBlock: pdfBlockComponentAboutPage,
      smallPara: smallParaComponent,
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
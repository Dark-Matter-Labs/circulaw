'use client'
import ExplinationText from './explination-text';
import ExpertiseInstruments from './expertise-instruments';

export default function TabContent({ tabValue, transitionAgenda, instruments }) {
  // TODO: make this a function and move it to queries.js
 
  return (
    <>
      <ExplinationText selected={tabValue} />
      <ExpertiseInstruments
        instruments={instruments}
        selected={tabValue}
        transitionAgenda={transitionAgenda}
      />
    </>
  );
}

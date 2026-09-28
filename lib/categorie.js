// Grouping behind the "instrumenten per categorie" page. Instruments carry a
// boolean per category and, for some categories, a list of subcategories.
export const CATEGORIES = ['beleid', 'inkoop', 'grondpositie', 'subsidie', 'fiscaal'];

const SUBCATEGORIES = {
  beleid: ['strategie', 'beleidsdoorwerking', 'beleidsuitvoering'],
  inkoop: [
    'beleid',
    'strategie',
    'bijzondere-procedures',
    'selectiecriteria',
    'gunningscriteria',
    'contracteisen',
    'geschiktheidseisen',
  ],
  grondpositie: ['strategie', 'selectiecriteria', 'gunningscriteria', 'contracteisen'],
};

export function isCategory(value) {
  return CATEGORIES.includes(value);
}

export function defaultCategory(instruments) {
  return (instruments ?? []).some((instrument) => instrument.beleid === true)
    ? 'beleid'
    : 'inkoop';
}

export function filterInstruments(instruments, category, govLevel = 'alle') {
  return (instruments ?? []).filter(
    (instrument) =>
      instrument[category] === true &&
      (govLevel === 'alle' || instrument.overheidslaag?.includes(govLevel)),
  );
}

export function groupBySubcategory(instruments, category) {
  const field = `${category}SubCategory`;
  return (SUBCATEGORIES[category] ?? []).map((subCategory) => ({
    subCategory,
    instruments: instruments.filter((instrument) => instrument[field]?.includes(subCategory)),
  }));
}

export function countInSubcategories(instruments, category) {
  return groupBySubcategory(instruments, category).reduce(
    (total, group) => total + group.instruments.length,
    0,
  );
}

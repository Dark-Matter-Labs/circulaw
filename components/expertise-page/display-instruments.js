import { groupBySubcategory } from '@/lib/categorie';

import DisplaySubHeading from './display-subheading';

export default function DisplayInstruments({ category, categoryName }) {
  return (
    <div>
      {groupBySubcategory(category, categoryName).map(({ subCategory, instruments }) => (
        <DisplaySubHeading key={subCategory} arr={instruments} subCat={subCategory} />
      ))}
    </div>
  );
}

import { Card, Stack, Select } from '@sanity/ui';
import { useFormValue } from 'sanity';
import { useCallback } from 'react';
import { set, unset } from 'sanity'

// should we be making these variables in dutch ?  do other countries have the same structure ?
const bouw = [
  { title: '', value: '' }, // placeholder to avoid sanity autoselecting the first.
  { title: 'Woningen', value: 'woningen' },
  { title: 'Kantoren & bedrijfsruimten', value: 'Kantoren-en-bedrijfsruimten' },
  { title: 'Kunstwerken & infra', value: 'Kunstwerken-en-infra' },
  { title: 'Wegen', value: 'wegen' },
];

const consumptiegoederen = [
  { title: '', value: '' }, // placeholder to avoid sanity autoselecting the first.
  {
    title: 'Elektrische en elektronische apparaten',
    value: 'Elektrische-en-elektronische-apparaten',
  },
  { title: 'Textiel (incl. kleding)', value: 'Textiel-incl-kleding)' },
  { title: 'Meubels', value: 'meubels' },
  { title: 'Verpakkingen en wegwerpproducten', value: 'verpakkingen-en-wegwerpproducten' },
];

const maakindustrie = [
  { title: '', value: '' }, // placeholder to avoid sanity autoselecting the first.
  { title: 'Capital equipment', value: 'capital-equipment' },
  { title: 'Circulaire windparken', value: 'circulaire-windparken' },
  { title: 'Circulaire zon- PV systemen', value: 'circulaire-zon-PV-systemen' },
  { title: 'Circulaire Klimaatinstallaties', value: 'circulaire-klimaatinstallaties' },
];

const biomassaEnVoedsel = [
  { title: '', value: '' }, // placeholder to avoid sanity autoselecting the first.
  { title: 'Plantaardig voedsel', value: 'plantaardig-voedsel' },
  { title: 'Dierlijk voedsel', value: 'dierlijk-voedsel' },
  { title: 'Bewerkt voedsel', value: 'bewerkt-voedsel' },
];

const kunststoffen = [
  { title: '', value: '' }, // placeholder to avoid sanity autoselecting the first.
  { title: 'Plastic verpakkingen', value: 'plastic-verpakkingen' },
  { title: 'Plastic (afval) in de bouw', value: 'Plastic-afval-in-de-bouw' },
  { title: 'Land- en tuinbouwplastic', value: 'land-en-tuinbouwplastic' },
];

export const ProductGroupInput = (props) => {
  const {elementProps, onChange, value = ''} = props

  const handleChange = (e) => {
    const nextValue = e.currentTarget.value
    onChange(nextValue ? set(nextValue) : unset())
  }
  // this returns the value of product group.
  const transitionAgenda = String(useFormValue(['transitionAgenda']));
  return (
    <>
      <Card padding={0}>
        <Stack>
          <Select
           onChange={handleChange}
           value={value}
          >
            {transitionAgenda === 'bouw' &&
              bouw.map((productGrp) => <option>{productGrp.title}</option>)}
            {transitionAgenda === 'consumptiegoederen' &&
              consumptiegoederen.map((productGrp) => <option>{productGrp.title}</option>)}
            {transitionAgenda === 'maakindustrie' &&
              maakindustrie.map((productGrp) => <option>{productGrp.title}</option>)}
            {transitionAgenda === 'biomassaEnVoedsel' &&
              biomassaEnVoedsel.map((productGrp) => <option>{productGrp.title}</option>)}
            {transitionAgenda === 'kunststoffen' &&
              kunststoffen.map((productGrp) => <option>{productGrp.title}</option>)}
          </Select>
        </Stack>
      </Card>
    </>
  );
};

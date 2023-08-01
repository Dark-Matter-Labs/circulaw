import { Card, Stack, Select } from '@sanity/ui';
import { useFormValue } from 'sanity';

const bouw = [
  { title: '', value: '' }, // placeholder to avoid sanity autoselecting the first.
  { title: 'Plastic verpakkingen', value: 'plastic-verpakkingen' },
  { title: 'Plastic (afval) in de bouw', value: 'pastic-afval-in-de-bouw' },
  { title: 'Landbouwfolie', value: 'landbouwfolie' },
  {
    title: 'Plastic verpakkingen en verbruiksartikelen',
    value: 'plastic-verpakkingen-en-verbruiksartikelen',
  },
  { title: 'Chemische producten', value: 'chemische-producten' },
  { title: 'Textiel (incl. kleding)', value: 'textiel-inc-kleding)' },
];

const kunststoffen = [
  { title: '', value: '' }, // placeholder to avoid sanity autoselecting the first.
  { title: 'Elektrische apparaten', value: 'elektrische-apparaten' },
  { title: 'Elektrische apparaten', value: 'elektrische apparaten' },
  { title: 'Meubels', value: 'meubels' },
  { title: 'Kunstwerken (gestart met viaducten)', value: 'unstwerken-gestart-met-viaducten' },
  { title: 'Wegen (gestart met asfalt)', value: 'wegen-gestart-met-asfalt)' },
  { title: 'Woningen', value: 'woningen' },
  { title: 'Bedrijfsruimte/kantoren', value: 'bedrijfsruimte-kantoren' },
  { title: 'Capital Equipment', value: 'capital-equipment' },
  { title: 'Windparken', value: 'windparken' },
  { title: 'Zonneparken', value: 'zonneparken' },
  { title: 'Klimaatinstallaties', value: 'klimaatinstallaties' },
  { title: 'Matrassen', value: 'matrassen' },
];

export const MyCustomStringInput = (props) => {
  // this returns the value of product group.
  const transitionAgenda = String(useFormValue(['transitionAgenda']));
  return (
    <>
      <Card padding={0}>
        <Stack>
          <Select>
            {transitionAgenda === 'bouw' &&
              bouw.map((productGrp) => <option>{productGrp.title}</option>)}
            {transitionAgenda === 'kunststoffen' &&
              kunststoffen.map((productGrp) => <option>{productGrp.title}</option>)}
          </Select>
        </Stack>
      </Card>
    </>
  );
};

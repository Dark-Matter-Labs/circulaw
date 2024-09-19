import { Flex, Card, Stack, Select } from '@sanity/ui';
import { useEffect, useState } from 'react';
import { client } from '../../lib/sanity';

const Q = `
*[_type in ['thema', 'simpleThema']] {
    themaName
}
`;

export function InstrumentInput(props) {
  const [allThemes, setAllThemas] = useState([]);
  //  const [selectedTheme, setSelectedTheme] = useState()
  const { elementProps, value = '' } = props;

  useEffect(() => {
    client.fetch(Q).then((data) => setAllThemas(data));
  }, []);

  return (
    <Flex gap={3} paddingRight={2} align='center'>
      <Card padding={4}>
        <Stack>
          <Select {...elementProps} fontSize={[2, 2, 3, 4]} padding={[3, 3, 4]} space={[3, 3, 4]}>
            <optgroup label='Select a thema'>
              {allThemes?.map((thema) => (
                <option key={thema.themaName} value={thema.themaName}>
                  {thema.themaName}
                </option>
              ))}
            </optgroup>
          </Select>
        </Stack>
      </Card>
    </Flex>
  );
}

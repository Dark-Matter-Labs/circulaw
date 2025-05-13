import { useEffect, useState } from 'react';
import { BsSearch } from 'react-icons/bs';

import { Autocomplete, Avatar, Box, Card, Flex, Stack, Text } from '@sanity/ui';
import { useClient } from 'sanity';

export function InstrumentInput(props) {
  const [themas, setThemas] = useState();
  const [selectedTheme, setSelectedTheme] = useState();
  const [instruments, setInstruments] = useState();
  const [selectedInstrument, setSelectedInstrument] = useState();

  const client = useClient();

  useEffect(() => {
    async function fetchThemas() {
      const res = await client.fetch(`*[_type in['thema', 'simpleThema']] {
        
          "value": themaName}`);
      setThemas(res);
    }

    async function fetchInstruments() {
      const res =
        await client.fetch(`*[_type == 'instrument' && thema->themaName == ${selectedTheme.toLowerCase()}] {
            "value": titel, 
        }`);
      setInstruments(res);
    }
    if (selectedTheme && !instruments) fetchInstruments();
    if (!themas) fetchThemas();
  }, [selectedTheme]);

  return (
    <Card padding={4} width='full'>
      <Stack space={[3, 3, 4, 5]}>
        <Autocomplete
          fontSize={[2, 2, 3]}
          icon={BsSearch}
          id='autocomplete-example'
          options={themas}
          placeholder='Search theme'
          onSelect={(value) => setSelectedTheme(value)}
          openButton
        />
        {instruments && (
          <Autocomplete
            fontSize={[2, 2, 3]}
            icon={BsSearch}
            id='autocomplete-example'
            options={instruments}
            placeholder='Search instruments'
            onSelect={(value) => setSelectedInstrument(value)}
            openButton
          />
        )}
      </Stack>
    </Card>
  );
}

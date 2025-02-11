import { Card, Stack, Text } from '@sanity/ui';

export function GrayBoxDropDown(props) {
  const { title } = props;
  return (
    <Card padding={4} width='full'>
      <Stack space={[3, 3, 4, 5]}>
        <Text>Grey box drop down: {title}</Text>
      </Stack>
    </Card>
  );
}

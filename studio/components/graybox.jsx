import { Card, Flex, Stack, Text } from '@sanity/ui';

export function GrayBox(props) {
  const { title } = props;
  return (
    <Card padding={2} width='full'>
      <Flex justify='space-between'>
        <Stack space={[1, 1, 2, 3]}>
          <Text size={1} weight='semibold'>
            {title}
          </Text>
          <Text size={1} weight=''>
            Grey box
          </Text>
        </Stack>
      </Flex>
    </Card>
  );
}

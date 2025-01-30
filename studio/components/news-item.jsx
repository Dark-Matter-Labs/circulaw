import { useCallback } from 'react';

import { Box, Flex, Switch } from '@sanity/ui';
import { PatchEvent, set, useFormValue } from 'sanity';
import { useDocumentPane } from 'sanity/desk';

export function NewsItemComponent(props) {
  const { value, path } = props;

  const { onChange } = useDocumentPane();

  const parentPath = path.slice(0, -1);

  const allItems = useFormValue(parentPath);

  const handleClick = useCallback(() => {
    const nextValue = value?.featured ? false : true;
    const clickedFeaturedPath = [...path, 'featured'];

    onChange(
      PatchEvent.from([
        // Update this field
        set(nextValue, clickedFeaturedPath),
      ]),
    );
  }, [value?.featured, value?._key, path, allItems, onChange, parentPath]);

  return (
    <Flex gap={3} paddingRight={2} align='center'>
      <Box flex={1}>{props.renderDefault(props)}</Box>
      <Switch checked={value?.featured} onClick={handleClick} />
    </Flex>
  );
}

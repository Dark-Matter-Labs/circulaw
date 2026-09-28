import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { NEWS_GRID_SIZE, filterNewsByType, splitNewsForOverview } from './news.js';

const item = (id, extra = {}) => ({ id, category: 'Artikelen', ...extra });

describe('splitNewsForOverview', () => {
  it('shows the first items in the grid and every remaining item in the archive', () => {
    const items = Array.from({ length: 42 }, (_, i) => item(i));
    const { grid, archive } = splitNewsForOverview(items);
    assert.equal(NEWS_GRID_SIZE, 12);
    assert.deepEqual(
      grid.map((i) => i.id),
      items.slice(0, 12).map((i) => i.id),
    );
    assert.deepEqual(
      archive.map((i) => i.id),
      items.slice(12).map((i) => i.id),
    );
  });

  it('has an empty archive when everything fits in the grid', () => {
    assert.deepEqual(splitNewsForOverview([item(1)]), { grid: [item(1)], archive: [] });
    assert.deepEqual(splitNewsForOverview(undefined), { grid: [], archive: [] });
  });
});

describe('filterNewsByType', () => {
  const items = [
    item(1, { category: 'Nieuw op de site' }),
    item(2, { isAgendaItem: true }),
    item(3, { category: 'Artikelen' }),
    item(4, { category: 'Circulair nieuws' }),
  ];

  it('keeps everything for "Alles"', () => {
    assert.deepEqual(filterNewsByType(items, 'Alles'), items);
  });

  it('filters agenda items by flag and the rest by category', () => {
    assert.deepEqual(
      filterNewsByType(items, 'Agenda').map((i) => i.id),
      [2],
    );
    assert.deepEqual(
      filterNewsByType(items, 'Nieuw op de site').map((i) => i.id),
      [1],
    );
    assert.deepEqual(
      filterNewsByType(items, 'Circulair nieuws').map((i) => i.id),
      [4],
    );
  });
});

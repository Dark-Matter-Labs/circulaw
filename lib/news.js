// The news overview shows the latest non-featured items in a grid and lists
// every older one in the archive, so each news page is linked from /nieuws.
export const NEWS_GRID_SIZE = 12;

export function splitNewsForOverview(items) {
  const all = items ?? [];
  return { grid: all.slice(0, NEWS_GRID_SIZE), archive: all.slice(NEWS_GRID_SIZE) };
}

export function filterNewsByType(items, typeName) {
  if (typeName === 'Alles') return items;
  if (typeName === 'Agenda') return items.filter((item) => item.isAgendaItem === true);
  return items.filter((item) => item.category === typeName);
}

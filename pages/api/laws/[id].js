import { laws } from '../../../data';

export default function personHandler({ query: { id } }, res) {
  const filtered = laws.filter((p) => p.id === id);

  // User with id exists
  if (filtered.length > 0) {
    res.status(200).json(filtered[0]);
  } else {
    res.status(404).json({ message: `document id: ${id} could not be found.` });
  }
}

// /llms-full.txt is fetched in pieces (see LLMS_FULL_* in agent-queries.js)
// because Next's data cache skips any response over 2 MB, and a skipped fetch
// isn't refreshed by the revalidate webhook. This puts the pieces back into the
// single shape buildLlmsFullTxt reads.

export function themaIds(base) {
  return (base?.productChains ?? []).flatMap((pc) => (pc.themas ?? []).map((thema) => thema._id));
}

export function mergeLlmsFullData({ base, euLaws, instrumentsByThema }) {
  return {
    ...base,
    productChains: (base?.productChains ?? []).map((pc) => ({
      ...pc,
      themas: (pc.themas ?? []).map(({ _id, ...thema }) => ({
        ...thema,
        instruments: instrumentsByThema[_id] ?? [],
      })),
    })),
    euLaws: euLaws ?? [],
  };
}

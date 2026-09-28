// `modal` is the @modal slot: a model text opened from the overview shows as a
// popup over it (the (.)[slug] intercepting route) while the URL is the model
// text's own page, which a direct visit or refresh renders in full.
export default function ModelTextsLayout({ children, modal }) {
  return (
    <>
      {children}
      {modal}
    </>
  );
}

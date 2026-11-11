// Grid (12% ceiling) + static film grain (5%), fixed behind content.
// Both are decorative and hidden from assistive tech.
export function BackgroundLayers() {
  return (
    <>
      <div aria-hidden className="bg-grid" />
      <div aria-hidden className="bg-grain" />
    </>
  );
}

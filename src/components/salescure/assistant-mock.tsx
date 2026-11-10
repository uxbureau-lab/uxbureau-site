// Static reconstruction of the assistant panel. Fictional data.
export function AssistantMock() {
  return (
    <figure className="overflow-hidden rounded-md border border-[#1b2444] bg-[#050813]">
      <div className="flex items-center justify-between border-b border-[#1b2444] px-5 py-4">
        <span className="flex items-center gap-2 text-sm">
          <span aria-hidden className="size-2 rounded-full bg-[#10b981]" />
          AI assistant
        </span>
        <span className="font-mono text-[11px] text-[#6b7796]">read-only · anonymised</span>
      </div>
      <div className="space-y-4 p-5 text-[15px] leading-relaxed">
        <p className="ml-auto max-w-[85%] rounded-md bg-[#0455ff] px-4 py-3 text-white">
          Show the 20 doctors whose revenue dropped most in April
        </p>
        <div className="max-w-[92%] rounded-md border border-[#1b2444] bg-[#0a0e1f] px-4 py-3 text-[#c5ccdb]">
          <p className="font-mono text-[11px] tracking-[0.12em] text-[#80a4ff] uppercase">Answer</p>
          <p className="mt-2">
            20 doctors are down more than 25% against their three-month average. The steepest drop
            is the cardiology group at Location 3 (−58%). Details per doctor are in the table below.
          </p>
          <p className="mt-3 text-sm text-[#80a4ff]">Save as preset “Top 20 decline” →</p>
        </div>
        <p className="ml-auto max-w-[85%] rounded-md bg-[#0455ff] px-4 py-3 text-white">
          Compare with the same month last year
        </p>
      </div>
      <figcaption className="border-t border-[#1b2444] px-5 py-3 font-mono text-[11px] tracking-[0.12em] text-[#6b7796] uppercase">
        Interface reconstruction · fictional data
      </figcaption>
    </figure>
  );
}

// SalesCure promo case. Facts come from the public product page at
// salescure.uxbureau.pro (Ukrainian), rendered here in UK English.

export const layers = [
  {
    id: "field",
    index: "04",
    name: "Field",
    product: "Mobile app",
    body: "A field app for medical representatives: visit brief, interaction history and photo notes, between clinics and offline in the regions.",
  },
  {
    id: "intelligence",
    index: "03",
    name: "Intelligence",
    product: "AI on Claude",
    body: "Daily digest, eleven ready-made presets, a natural-language assistant, risk forecasting and anomaly detection.",
  },
  {
    id: "operations",
    index: "02",
    name: "Operations",
    product: "ERP core",
    body: "Financial analytics, flexible partner models, tasks, internal messenger, document flow, libraries and HR records.",
  },
  {
    id: "foundation",
    index: "01",
    name: "Foundation",
    product: "CRM base",
    body: "Referring doctors, patients, visits and clinics with full contact history — and a full audit trail of every action.",
  },
] as const;

export const presets = [
  { name: "Revenue drop leaders", tag: "Anomalies" },
  { name: "Month revenue forecast", tag: "Outlook" },
  { name: "Service group analysis", tag: "Segments" },
  { name: "Field team performance", tag: "Team" },
  { name: "Doctors at risk of churn", tag: "Early warning" },
  { name: "Dynamics by location", tag: "Geography" },
  { name: "Flow anomalies", tag: "Detection" },
  { name: "Partner segmentation", tag: "Cohorts" },
  { name: "Visit conversion", tag: "Funnel" },
  { name: "Daily digest", tag: "Morning brief" },
  { name: "Period comparison", tag: "Dynamics" },
];

export const queries = [
  { op: "SELECT", allowed: true },
  { op: "INSERT", allowed: false },
  { op: "UPDATE", allowed: false },
  { op: "DELETE", allowed: false },
];

export const launch = [
  { value: "5–7", label: "Working days to connect to existing systems" },
  { value: "0", label: "Interruptions to the team's current work" },
  { value: "100%", label: "Patient names stripped automatically on import" },
];

// Seed content for case studies. Mirrors the Sanity `case` schema
// (PR 3) so the site renders identically with or without the CMS.
// Figures are the public, rounded ones already used on uxbureau.pro.

export type CaseMetric = { value: string; label: string };
export type CaseSection = { heading: string; body: string };

export type CaseStudy = {
  slug: string;
  order: number;
  featured: boolean;
  sector: string;
  meta: string;
  title: string;
  hook: string;
  summary: string;
  metrics: CaseMetric[];
  sections: CaseSection[];
  outcome: string;
  liveUrl?: string;
};

export const seedCases: CaseStudy[] = [
  {
    slug: "medical",
    order: 1,
    featured: true,
    sector: "Healthcare",
    meta: "Healthcare · Web + mobile · Since 2016 · Ongoing",
    title: "Seven tools. One interface.",
    hook: "The operating system of a four-brand clinical network.",
    summary:
      "What started as a basic CRM became the operational backbone of the Asklepiy medical network. We grew it module by module, integration by integration — without a rewrite.",
    metrics: [
      { value: "2,500+", label: "Staff working in the platform" },
      { value: "10+", label: "Years in continuous production" },
      { value: "7 → 1", label: "Separate tools merged into one interface" },
    ],
    sections: [
      {
        heading: "Roles, not modules",
        body: "Ten-plus user roles with adaptive workspaces. One employee can hold several roles; the interface follows the role, not the module tree.",
      },
      {
        heading: "Integrations in one place",
        body: "Lab data, financial records and operational data from third-party medical systems, surfaced through one interface via API.",
      },
      {
        heading: "An AI layer that never sees a patient",
        body: "Deterministic code calculates; the model interprets aggregates. Patient names never reach the model. The model proposes. The system decides.",
      },
    ],
    outcome: "Continuously deployed since day one. The longest engagement in our portfolio.",
  },
  {
    slug: "telecom",
    order: 2,
    featured: true,
    sector: "Telecom",
    meta: "Telecom · Web + mobile · 10+ years · Ongoing",
    title: "One foundation. Every product.",
    hook: "Consumer products for national operators on a single architectural playbook.",
    summary:
      "Value-added services for Kyivstar, lifecell and Vodafone, delivered with our partner ucell. ucell organises the operator engagements; we architect and ship.",
    metrics: [
      { value: "3", label: "National operators served today" },
      { value: "10+", label: "Years on one architectural playbook" },
      { value: "6", label: "Product categories shipped" },
    ],
    sections: [
      {
        heading: "A standard system per product",
        body: "Admin panel → API → consumer web → mobile app. A reusable foundation with custom UX per category.",
      },
      {
        heading: "Full delivery",
        body: "From technical specification through architecture, design and production — repeatedly, across operator changes.",
      },
    ],
    outcome:
      "Multiple products in continuous operation. Long-term partnerships maintained across operator changes.",
  },
  {
    slug: "travel",
    order: 3,
    featured: true,
    sector: "Travel",
    meta: "Travel · Web · Conversational commerce",
    title: "One dialogue. A paid trip.",
    hook: "Most AI travel tools stop at recommendations. This one goes to a paid mixed cart.",
    summary:
      "A platform that replaces hours of cross-site research with one dialogue. The user describes the trip; the system returns real, bookable options and a single checkout.",
    metrics: [
      { value: "1", label: "Checkout for accommodation, tours and excursions" },
      { value: "Live", label: "Availability and pricing from OTA aggregators" },
    ],
    sections: [
      {
        heading: "The model talks. The data decides what exists.",
        body: "A conversational layer collects preferences and recommends — but only from inventory returned by live supplier APIs.",
      },
      {
        heading: "Operators manage their own offer",
        body: "A custom CMS lets tour and excursion operators maintain their own listings.",
      },
    ],
    outcome: "Accommodation booking live. Tours and excursions rolling out.",
  },
  {
    slug: "civic",
    order: 4,
    featured: false,
    sector: "Civic",
    meta: "Civic tech · Web + GIS · City of Zhytomyr",
    title: "Every building. One map.",
    hook: "Housing infrastructure, tariffs and ownership — open to residents.",
    summary:
      "A public GIS platform for the City of Zhytomyr that makes property-level housing data searchable on an interactive map.",
    metrics: [
      { value: "1,200+", label: "Buildings mapped" },
      { value: "560+", label: "Management entities" },
    ],
    sections: [
      {
        heading: "A full GIS layer stack",
        body: "Clustering, heatmaps, vector and raster layers, chronological playback and side-by-side comparison.",
      },
      {
        heading: "Data people actually need",
        body: "Including shelter type — a data field whose importance has needed no explanation since 2022.",
      },
    ],
    outcome: "Grew into a standalone GIS platform serving use cases beyond the original brief.",
    liveUrl: "https://zhytomyr.gistechnologies.pro",
  },
  {
    slug: "salescure",
    order: 5,
    featured: false,
    sector: "Healthcare",
    meta: "Product · Web ERP + AI layer + mobile",
    title: "Analytics that no longer depend on one person.",
    hook: "An operating system for medical referral networks.",
    summary:
      "SalesCure brings a referral CRM, ERP operations, an AI analytics layer and a field app for medical representatives into one product with four layers.",
    metrics: [
      { value: "4", label: "Layers: CRM, ERP, AI, mobile" },
      { value: "11", label: "Ready-made analytics presets" },
      { value: "0", label: "Patient names sent to the model" },
    ],
    sections: [
      {
        heading: "Read-only by architecture",
        body: "The AI layer can select, never insert, update or delete. A constraint at the query level, not a policy someone can bypass.",
      },
      {
        heading: "Anonymised before the model",
        body: "Only aggregates, IDs and de-identified metrics reach the model. Full data stays inside the network's infrastructure.",
      },
    ],
    outcome:
      "From four hours of daily spreadsheet work for one analyst to a dashboard open to every role that needs it.",
    liveUrl: "https://salescure.uxbureau.pro",
  },
];

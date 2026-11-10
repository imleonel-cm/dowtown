export type SpecialtyContent = {
  meta: { title: string; description: string };
  skipLink: string;
  wordmarkLabel: string;
  breadcrumbLabel: string;
  breadcrumbHome: string;
  breadcrumbCurrent: string;
  hero: {
    eyebrow: string;
    heading: string;
    message?: string;
    intro: string;
    primaryCta: string;
    secondaryCta: string;
    marker: string;
    markerLabel: string;
  };
  index: { label: string; items: readonly (readonly [string, string])[] };
  overview: {
    eyebrow: string;
    heading: string;
    lead: string;
    body: string;
    boundaryHeading: string;
    boundaries: readonly (readonly [string, string])[];
  };
  variables: {
    eyebrow: string;
    heading: string;
    intro: string;
    items: readonly (readonly [string, string])[];
  };
  prepare: {
    eyebrow: string;
    heading: string;
    intro: string;
    items: readonly (readonly [string, string])[];
  };
  information: { eyebrow: string; heading: string; intro: string; items: readonly string[] };
  faq: {
    eyebrow: string;
    heading: string;
    intro: string;
    items: readonly (readonly [string, string])[];
  };
  relatedServices?: {
    eyebrow: string;
    heading: string;
    intro: string;
    actionLabel: string;
    items: readonly { title: string; description: string; href: string }[];
  };
  sources: {
    eyebrow: string;
    heading: string;
    intro: string;
    linkLabel: string;
    items: readonly { title: string; href: string; description: string }[];
    contextualLink?: { label: string; href: string; description: string };
    contextualLinks?: readonly { label: string; href: string; description: string }[];
  };
  contact: {
    eyebrow: string;
    heading: string;
    body: string;
    homeContact: string;
    callLabel: string;
  };
};

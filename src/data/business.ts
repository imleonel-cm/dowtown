export const business = {
  legalName: 'Downtown Community Escrow Services Inc',
  shortName: 'Downtown Community Escrow',
  phoneDisplay: '(714) 265-7116',
  phoneHref: 'tel:+17142657116',
  addressLine: '640 North Tustin Ave, Suite 202',
  cityLine: 'Santa Ana, CA 92705'
} as const;

export const serviceDefinitions = [
  { key: 'manufacturedHomes', id: 'manufactured-homes', icon: 'home' },
  { key: 'shortSales', id: 'short-sales', icon: 'document' },
  { key: 'probate', id: 'probate', icon: 'people' },
  { key: 'reverseMortgage', id: 'reverse-mortgage', icon: 'finance' },
  { key: 'residential', id: 'residential', icon: 'residential' },
  { key: 'commercial', id: 'commercial', icon: 'commercial' }
  ,{ key: 'wholesale', id: 'wholesale', icon: 'commercial' }
] as const;

// Presentation catalog for shared navigation and general service lists. Keep
// this separate from serviceDefinitions: Mobile Homes intentionally shares the
// existing Manufactured Homes page, while the catalog mirrors the active routes.
export const serviceCatalog = [
  { key: 'residential', serviceKey: 'residential', id: 'residential', icon: 'residential', marksCurrent: true },
  { key: 'commercial', serviceKey: 'commercial', id: 'commercial', icon: 'commercial', marksCurrent: true },
  { key: 'probate', serviceKey: 'probate', id: 'probate', icon: 'people', marksCurrent: true },
  { key: 'manufacturedHomes', serviceKey: 'manufacturedHomes', id: 'manufactured-homes', icon: 'home', marksCurrent: true },
  { key: 'shortSales', serviceKey: 'shortSales', id: 'short-sales', icon: 'document', marksCurrent: true },
  { key: 'reverseMortgage', serviceKey: 'reverseMortgage', id: 'reverse-mortgage', icon: 'finance', marksCurrent: true },
  { key: 'wholesale', serviceKey: 'wholesale', id: 'wholesale', icon: 'commercial', marksCurrent: true }
] as const;

export type ServiceKey = (typeof serviceDefinitions)[number]['key'];
export type ServiceCatalogKey = (typeof serviceCatalog)[number]['key'];
export type ServiceIconName = (typeof serviceCatalog)[number]['icon'];

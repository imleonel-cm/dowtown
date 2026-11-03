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
] as const;

export type ServiceKey = (typeof serviceDefinitions)[number]['key'];
export type ServiceIconName = (typeof serviceDefinitions)[number]['icon'];

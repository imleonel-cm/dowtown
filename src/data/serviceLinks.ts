import { serviceDefinitions, type ServiceKey } from './business';
import { homeContent, implementedPageKeys, routeMap, servicesPageContent, type Locale, type PageKey } from './site';

export const pageKeyForService: Record<ServiceKey, PageKey> = {
  manufacturedHomes: 'manufacturedHomes',
  shortSales: 'shortSale',
  probate: 'probate',
  reverseMortgage: 'reverseMortgage',
  residential: 'residential',
  commercial: 'commercial'
};

export const serviceHrefFor = (locale: Locale, serviceKey: ServiceKey): string | undefined => {
  const pageKey = pageKeyForService[serviceKey];
  if ((implementedPageKeys as readonly PageKey[]).includes(pageKey)) {
    return routeMap[pageKey][locale];
  }
};

export const serviceHrefsFor = (locale: Locale): Partial<Record<ServiceKey, string>> => Object.fromEntries(
  serviceDefinitions.map((service) => [service.key, serviceHrefFor(locale, service.key)])
) as Partial<Record<ServiceKey, string>>;

export type ServiceNavigationItem = {
  key: ServiceKey;
  pageKey: PageKey;
  label: string;
  href?: string;
  statusLabel: string;
};

export const serviceNavigationFor = (locale: Locale): ServiceNavigationItem[] => servicesPageContent[locale].items.map((service) => ({
  key: service.key,
  pageKey: pageKeyForService[service.key],
  label: service.heading,
  href: serviceHrefFor(locale, service.key),
  statusLabel: homeContent[locale].services.comingSoonLabel
}));

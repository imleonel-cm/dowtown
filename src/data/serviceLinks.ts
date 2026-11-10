import { serviceCatalog, type ServiceCatalogKey, type ServiceKey } from './business';
import { homeContent, implementedPageKeys, routeMap, serviceCatalogLabels, type Locale, type PageKey } from './site';

export const pageKeyForService: Record<ServiceKey, PageKey> = {
  manufacturedHomes: 'manufacturedHomes',
  shortSales: 'shortSale',
  probate: 'probate',
  reverseMortgage: 'reverseMortgage',
  residential: 'residential',
  commercial: 'commercial',
  wholesale: 'wholesale'
};

export const serviceHrefFor = (locale: Locale, catalogKey: ServiceCatalogKey): string | undefined => {
  const catalogItem = serviceCatalog.find((service) => service.key === catalogKey);
  if (!catalogItem || !('serviceKey' in catalogItem)) return;
  const pageKey = pageKeyForService[catalogItem.serviceKey];
  if ((implementedPageKeys as readonly PageKey[]).includes(pageKey)) {
    return routeMap[pageKey][locale];
  }
};

export const serviceHrefsFor = (locale: Locale): Partial<Record<ServiceCatalogKey, string>> => Object.fromEntries(
  serviceCatalog.map((service) => [service.key, serviceHrefFor(locale, service.key)])
) as Partial<Record<ServiceCatalogKey, string>>;

export type ServiceNavigationItem = {
  key: ServiceCatalogKey;
  pageKey?: PageKey;
  activePageKey?: PageKey;
  label: string;
  href?: string;
  statusLabel: string;
};

export const serviceNavigationFor = (locale: Locale): ServiceNavigationItem[] => serviceCatalog.map((service) => ({
  key: service.key,
  pageKey: 'serviceKey' in service ? pageKeyForService[service.serviceKey] : undefined,
  activePageKey: 'serviceKey' in service && service.marksCurrent ? pageKeyForService[service.serviceKey] : undefined,
  label: serviceCatalogLabels[locale][service.key],
  href: serviceHrefFor(locale, service.key),
  statusLabel: homeContent[locale].services.comingSoonLabel
}));

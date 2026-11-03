import { featureFlags } from './features';
import { homeContent, routeMap, type Locale, type PageKey } from './site';

export type NavigationItem = {
  id: PageKey;
  label: string;
  href?: string;
};

export const navigationFor = (locale: Locale, pageKey: PageKey): NavigationItem[] => {
  const homeRoute = routeMap.home[locale];

  return homeContent[locale].header.navigation
    .filter((item) => item.id !== 'agentsLenders')
    .filter((item) => featureFlags.resources || item.id !== 'resources')
    .map((item) => {
      if (item.id === 'home') {
        return { ...item, href: homeRoute };
      }
      if (item.id === 'services') {
        return { ...item };
      }
      if (item.id === 'about') {
        return { ...item, href: routeMap.about[locale] };
      }
      if (item.id === 'contact') {
        return { ...item, href: routeMap.contact[locale] };
      }
      return { ...item, href: routeMap[item.id][locale] };
    });
};

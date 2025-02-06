export interface NavItem {
  title: string;
  path: string;
  match: string;
  icon: string;
}

export const SIDEBAR_NAVS: NavItem[] = [
  {
    title: 'Convene Tracker',
    path: '/convene',
    match: '/convene',
    icon: 'auto_awesome',
  },
  {
    title: 'Global Stats',
    path: '/global-stats',
    match: '/global-stats',
    icon: 'globe',
  },
  {
    title: "Collector's Hub",
    path: '/collectors-hub',
    match: '/collectors-hub',
    icon: 'swords',
  },
  {
    title: 'Timeline',
    path: '/timeline',
    match: '/timeline',
    icon: 'event_note',
  },
  {
    title: 'Settings',
    path: '/settings',
    match: '/settings',
    icon: 'settings',
  },
];

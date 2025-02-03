import {
	Type as LucideIcon,
	Sparkles,
	Settings,
	Swords,
    CalendarRange,
    Globe
} from 'lucide-svelte';

interface NavItem {
	title: string;
	path: string;
	match: string;
	icon: typeof LucideIcon;
}

interface NavCategory {
	[key: string]: NavItem[];
}

export const NAVS: NavCategory = {
	Convene: [
		{
			title: 'Convene Tracker',
			path: '/convene',
			match: '/convene',
			icon: Sparkles
		},
        {
			title: "Global Stats",
			path: '/global-stats',
			match: '/global-stats',
			icon: Globe
		},
		{
			title: "Collector's Hub",
			path: '/collectors-hub',
			match: '/collectors-hub',
			icon: Swords
		}
	],
	Planner: [
		{
			title: 'Timeline',
			path: '/timeline',
			match: '/timeline',
			icon: CalendarRange
		},
		{
			title: 'Settings',
			path: '/settings',
			match: '/settings',
			icon: Settings
		}
	]
};

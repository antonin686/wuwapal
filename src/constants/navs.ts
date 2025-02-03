import { Calendar, Combine, Sparkles, Type as LucideIcon, Settings } from "lucide-svelte";

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
            title: "Convene Tracker",
            path: "/convene",
            match: "/convene",
            icon: Sparkles
        },
        {
            title: "Collector's Hub",
            path: "/collectors-hub",
            match: "/collectors-hub",
            icon: Combine
        },
    ],
    Planner: [
        {
            title: "Timeline",
            path: "/timeline",
            match: "/timeline",
            icon: Calendar
        },
        {
            title: "Settings",
            path: "/settings",
            match: "/settings",
            icon: Settings
        },
    ]
};

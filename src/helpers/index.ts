import {defaultBadgeConfig} from '../shared';
import {BadgeConfig, TooltipConfig} from "../typings";

export const getBadgeConfig = (
    badge: string,
    config: BadgeConfig
): BadgeConfig => ({
    ...defaultBadgeConfig,
    title: badge,
    ...config,
});

export const propToCustomProp = (str: string): string => {
    const char = str.charCodeAt(0);

    // Space
    if (char == 32) {
        return '-';
    }

    // Uppercase Letter
    if (char >= 65 && char <= 90) {
        return '_' + str.toLowerCase();
    }

    return '__' + ('000' + char.toString(16)).slice(-4);
}

export const getTitle = (badge: string, config: BadgeConfig): string =>
    getBadgeConfig(badge, config).title;

export const getTooltip = (badge: string, config: BadgeConfig): TooltipConfig =>
    getBadgeConfig(badge, config).tooltip;

export const getBadgeCustomProperty = (name: string, suffix: string) => {
    const normalisedName = name.replace(/[^a-z0-9]/g, propToCustomProp);
    return `--badge-${normalisedName}-${suffix}`;
};

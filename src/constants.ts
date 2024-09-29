export const ADDON_ID = '@geometricpanda/storybook-addon-badges';
export const TOOL_ID = ADDON_ID;
export const TOOL_ID_EXTRA = `${ADDON_ID}/extra`;

export const ADDON_TITLE = 'Storybook Addon Badges';
export const PARAM_CONFIG_KEY = 'badgesConfig';
export const PARAM_BADGES_KEY = 'badges';

export enum BADGE_LOCATION {
    TOOLBAR = 'toolbar',
    TOOLBAR_EXTRA = 'toolbar-extra',
    SIDEBAR = 'sidebar',
}

export enum BADGE {
    DEFAULT = 'default',
    BETA = 'beta',
    STABLE = 'stable',
    NEEDS_REVISION = 'needs-revision',
    OBSOLETE = 'obsolete',
    EXPERIMENTAL = 'experimental',
    DEPRECATED = 'deprecated',
}

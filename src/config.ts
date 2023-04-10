import {BadgeConfig, BadgesConfig} from "./typings.interface";
import {BADGE} from "./constants";

export const defaultBadgesConfig: BadgesConfig = {
    [BADGE.DEFAULT]: {
        title: 'Badge',
    },
    [BADGE.BETA]: {
        title: 'Beta',
        styles: {
            backgroundColor: '#D6E0FF',
            borderColor: '#2952CC',
            color: '#2952CC',
        },
    },
    [BADGE.STABLE]: {
        title: 'Stable',
        styles: {
            backgroundColor: '#DCF2EA',
            borderColor: '#317159',
            color: '#317159',
        },
    },
    [BADGE.NEEDS_REVISION]: {
        title: 'Needs Revision',
        styles: {
            backgroundColor: '#FFEFD2',
            borderColor: '#66460D',
            color: '#66460D',
        },
    },
    [BADGE.OBSOLETE]: {
        title: 'Obsolete',
        styles: {
            backgroundColor: '#F9DADA',
            borderColor: '#7D2828',
            color: '#7D2828',
        },
    },
    [BADGE.EXPERIMENTAL]: {
        title: 'Experimental',
        styles: {
            backgroundColor: '#E7E4F9',
            borderColor: '#6E62B6',
            color: '#6E62B6',
        },
    },
    [BADGE.DEPRECATED]: {
        title: 'Deprecated',
        styles: {
            backgroundColor: '#F8E3DA',
            borderColor: '#85462B',
            color: '#85462B',
        },
    },
};

export const defaultBadgeConfig: BadgeConfig = defaultBadgesConfig[BADGE.DEFAULT];

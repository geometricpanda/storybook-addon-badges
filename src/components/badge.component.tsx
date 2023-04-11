import React, {FC} from 'react';
import {styled} from '@storybook/theming';
// import {useParameter} from "@storybook/api";

import {defaultBadgeConfig, defaultBadgesConfig} from "../config";
import {BadgeTooltipWrapper} from './badge-tooltip-wrapper.component';
import type {BadgeConfig} from "../typings.interface";
import {useStorybookApi} from "@storybook/manager-api";
import {BadgesConfig} from "../typings.interface";
import {PARAM_CONFIG_KEY} from "../constants";

export interface StyledBadgeProps {
    config: BadgeConfig;
}

export const StyledBadge = styled.span<StyledBadgeProps>(
    ({config: {styles}}) => ({
        borderColor: styles?.borderColor || '#474D66',
        borderRadius: styles?.borderRadius || '3px',
        borderStyle: styles?.borderStyle || 'solid',
        borderWidth: styles?.borderWidth || '1px',
        color: styles?.color || '#474D66',
        backgroundColor: styles?.backgroundColor || '#EDEFF5',
        fontSize: styles?.fontSize || '0.625rem',
        fontFamily: styles?.fontFamily || 'inherit',
        fontWeight: styles?.fontWeight || 'bold',
        lineHeight: styles?.lineHeight || '1',
        textTransform: styles?.textTransform || 'uppercase',
        paddingInline: styles?.paddingInline || '5px',
        paddingBlock: styles?.paddingBlock || '2px',
        display: 'block'
    })
);


export interface BadgeProps {
    badge: string;
}

export const Badge: FC<BadgeProps> = ({badge}) => {
    const api = useStorybookApi();
    const customBadgesConfig = api.getCurrentParameter<BadgesConfig>(PARAM_CONFIG_KEY) || {};


    const badgesConfig = {
        ...defaultBadgesConfig,
        ...customBadgesConfig,
    };

    const config = badgesConfig[badge] || defaultBadgeConfig;

    const Component = () => (
        <StyledBadge config={config}>
            {config.title}
        </StyledBadge>
    )

    if (config.tooltip) {
        return (
            <BadgeTooltipWrapper tooltip={config.tooltip}>
                <Component/>
            </BadgeTooltipWrapper>
        )
    }

    return (
        <Component/>
    )
}

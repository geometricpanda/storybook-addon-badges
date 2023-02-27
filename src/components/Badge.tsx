import React, {FC} from 'react';
import {styled} from '@storybook/theming';

import type {BadgeProps} from "../typings";
import {WithBadgeTooltip} from './withBadgeTooltip';
import {getBadgeCustomProperty, getTitle} from '../helpers';

export const BadgeWrapper = styled.span(({theme}) => ({
    display: 'flex',
    paddingInline: theme.layoutMargin / 2
}));

export const StyledBadge = styled.span<BadgeProps>(
    ({badge}) => ({
        borderColor: `var(${getBadgeCustomProperty(badge, 'border-color')})`,
        borderRadius: `var(${getBadgeCustomProperty(badge, 'border-radius')})`,
        borderStyle: `var(${getBadgeCustomProperty(badge, 'border-style')})`,
        borderWidth: `var(${getBadgeCustomProperty(badge, 'border-width')})`,
        color: `var(${getBadgeCustomProperty(badge, 'color')})`,
        backgroundColor: `var(${getBadgeCustomProperty(badge, 'background-color')})`,
        fontSize: `var(${getBadgeCustomProperty(badge, 'font-size')})`,
        fontFamily: `var(${getBadgeCustomProperty(badge, 'font-family')})`,
        // Typecasting as 'bold' due to custom properties not working with `styled`.
        fontWeight: `var(${getBadgeCustomProperty(badge, 'font-weight')})` as 'bold',
        lineHeight: `var(${getBadgeCustomProperty(badge, 'line-height')})`,
        // Typecasting as 'uppercase' due to custom properties not working with `styled`.
        textTransform: `var(${getBadgeCustomProperty(badge, 'text-transform')})` as 'uppercase',
        paddingInline: `var(${getBadgeCustomProperty(badge, 'padding-inline')})`,
        paddingBlock: `var(${getBadgeCustomProperty(badge, 'padding-block')})`,
        display: 'block'
    })
);

const BadgeInner: FC<BadgeProps> = (props) => <StyledBadge {...props}/>

const BadgeInnerWithTooltip = WithBadgeTooltip(BadgeInner);

export const Badge: FC<BadgeProps> = ({badge, config}) => (
    <BadgeWrapper>
        <BadgeInnerWithTooltip badge={badge} config={config}>
            {getTitle(badge, config)}
        </BadgeInnerWithTooltip>
    </BadgeWrapper>
);

import React, {FC, ComponentType} from 'react';
import {WithTooltip, TooltipMessage} from '@storybook/components';
import {BadgeProps} from "../typings";
import {getTooltip} from "../helpers";


export const WithBadgeTooltip = <T extends BadgeProps>(Component: ComponentType<T>): FC<T> =>
    ({badge, config, ...rest}) => {
        const tooltipData = getTooltip(badge, config);

        const tooltipMessageProps = (typeof tooltipData === 'string')
            ? {desc: tooltipData}
            : tooltipData;

        if (tooltipData) {
            return (
                <WithTooltip tooltip={<TooltipMessage {...tooltipMessageProps} />}>
                    <Component badge={badge} {...(rest as T)} />
                </WithTooltip>
            )
        }

        return (
            <Component badge={badge} {...(rest as T)} />
        )
    };

import React, {FC} from 'react';
import {Separator} from '@storybook/components';
import {styled} from '@storybook/theming';
import {Badge} from './badge.component';
import {BadgesConfig} from "../typings.interface";

const BadgesWrapper = styled.div(
    ({theme}) => ({
        gap: theme.layoutMargin,
        paddingInline: theme.layoutMargin / 2,
        display: 'flex',
        alignItems: 'center',
    })
);

interface BadgesToolbarProps {
    badges: Array<string>;
}

export const BadgesToolbar: FC<BadgesToolbarProps> = ({badges}) => (
    <>
        <Separator/>
        <BadgesWrapper>
            {badges.map((badge) => (
                <Badge key={badge} badge={badge}/>
            ))}
        </BadgesWrapper>
        <Separator/>
    </>
);

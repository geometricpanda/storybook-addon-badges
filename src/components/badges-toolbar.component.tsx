import React, {FC} from 'react';
import {Separator} from '@storybook/components';
import {styled} from '@storybook/theming';
import {Badge} from './badge.component';

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

export const BadgesToolbar: FC<BadgesToolbarProps> = ({badges}) => 
    badges.length > 0 ? <>
        <Separator/>
        <BadgesWrapper>
            {badges.map((badge) => (
                <Badge key={badge} badge={badge}/>
            ))}
        </BadgesWrapper>
        <Separator/>
    </> : null; 


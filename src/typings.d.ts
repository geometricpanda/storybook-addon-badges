import type {ComponentProps} from "react";
import type {TooltipMessage} from "@storybook/components";

declare module "global";

export type TooltipConfig =
    | Omit<ComponentProps<typeof TooltipMessage>, 'children'>
    | string;

export type BadgeConfig = {
    styles?: {
        backgroundColor?: string;
        borderColor?: string;
        borderRadius?: string;
        borderStyle?: string;
        borderWidth?: string;
        color?: string;
        fontFamily?: string;
        fontSize?: string;
        fontWeight?: string;
        lineHeight?: string | number;
        paddingBlock?: string;
        paddingInline?: string;
        textTransform?: string;
    };
    title?: string;
    tooltip?: TooltipConfig;
};

export type BadgesConfig = Record<string, BadgeConfig>;

export interface BadgeProps {
    badge: string;
    config: BadgeConfig;
}

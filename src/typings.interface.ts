import type {ComponentProps} from "react";
import type {TooltipMessage} from "@storybook/components";
import type {Property} from "@storybook/theming/dist/ts3.9/_modules/@emotion-react-node_modules-csstype-index";

export type TooltipConfig =
    | Omit<ComponentProps<typeof TooltipMessage>, 'children'>
    | string;

export type BadgeConfig = {
    styles?: {
        backgroundColor?: Property.BackgroundColor;
        borderColor?: Property.BorderColor;
        borderRadius?: Property.BorderRadius;
        borderStyle?: Property.BorderStyle;
        borderWidth?: Property.BorderWidth;
        color?: Property.Color;
        fontFamily?: Property.FontFamily;
        fontSize?: Property.FontSize;
        fontWeight?: Property.FontWeight;
        lineHeight?: Property.LineHeight;
        paddingBlock?: Property.PaddingBlock;
        paddingInline?: Property.PaddingInline;
        textTransform?: Property.TextTransform;
    };
    title?: string;
    tooltip?: TooltipConfig;
};

export type BadgesConfig = Record<string, BadgeConfig>;


import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Button, ButtonSize, ButtonTheme } from "./Button";

export default {
    title: "shared/Button",
    component: Button,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

// theme
export const Primary = Template.bind({});
Primary.args = {
    children: "Text",
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    children: "Text",
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Clear = Template.bind({});
Clear.args = {
    children: "Text",
    theme: ButtonTheme.CLEAR,
};

export const ClearDark = Template.bind({});
ClearDark.args = {
    children: "Text",
    theme: ButtonTheme.CLEAR,
};
ClearDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ClearInverted = Template.bind({});
ClearInverted.args = {
    children: "Text",
    theme: ButtonTheme.CLEAR_INVERTED,
};

export const ClearInvertedDark = Template.bind({});
ClearInvertedDark.args = {
    children: "Text",
    theme: ButtonTheme.CLEAR_INVERTED,
};
ClearInvertedDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Outline = Template.bind({});
Outline.args = {
    children: "Text",
    theme: ButtonTheme.OUTLINE,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    children: "Text",
    theme: ButtonTheme.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Background = Template.bind({});
Background.args = {
    children: "Text",
    theme: ButtonTheme.BACKGROUND,
};

export const BackgroundDark = Template.bind({});
BackgroundDark.args = {
    children: "Text",
    theme: ButtonTheme.BACKGROUND,
};
BackgroundDark.decorators = [ThemeDecorator(Theme.DARK)];

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
    children: "Text",
    theme: ButtonTheme.BACKGROUND_INVERTED,
};

export const BackgroundInvertedDark = Template.bind({});
BackgroundInvertedDark.args = {
    children: "Text",
    theme: ButtonTheme.BACKGROUND_INVERTED,
};
BackgroundInvertedDark.decorators = [ThemeDecorator(Theme.DARK)];

// size
export const SizeM = Template.bind({});
SizeM.args = {
    children: ">",
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.M,
};

export const SizeL = Template.bind({});
SizeL.args = {
    children: ">",
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.L,
};

export const SizeXL = Template.bind({});
SizeXL.args = {
    children: ">",
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.XL,
};

export const SizeSquareM = Template.bind({});
SizeSquareM.args = {
    children: ">",
    theme: ButtonTheme.CLEAR,
    size: ButtonSize.M,
    square: true,
};

export const SizeSquareL = Template.bind({});
SizeSquareL.args = {
    children: ">",
    theme: ButtonTheme.CLEAR,
    size: ButtonSize.L,
    square: true,
};

export const SizeSquareXL = Template.bind({});
SizeSquareXL.args = {
    children: ">",
    theme: ButtonTheme.CLEAR,
    size: ButtonSize.XL,
    square: true,
};

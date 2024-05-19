import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Text, TextTheme } from "./Text";

export default {
    title: "shared/Text",
    component: Text,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Text>;

const Template:
    ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
    title: "title",
    text: "text",
};

export const DarkDefault = Template.bind({});
DarkDefault.args = {
    title: "title",
    text: "text",
};
DarkDefault.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
    title: "title",
};

export const DarkOnlyTitle = Template.bind({});
DarkOnlyTitle.args = {
    title: "title",
};
DarkOnlyTitle.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyText = Template.bind({});
OnlyText.args = {
    text: "text",
};

export const DarkOnlyText = Template.bind({});
DarkOnlyText.args = {
    text: "text",
};
DarkOnlyText.decorators = [ThemeDecorator(Theme.DARK)];

export const Error = Template.bind({});
Error.args = {
    title: "title",
    text: "text",
    theme: TextTheme.EROOR,
};

export const DarkError = Template.bind({});
DarkError.args = {
    title: "title",
    text: "text",
    theme: TextTheme.EROOR,
};
DarkError.decorators = [ThemeDecorator(Theme.DARK)];

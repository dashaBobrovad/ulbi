import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Input } from "./Input";

export default {
    title: "shared/Input",
    component: Input,
} as ComponentMeta<typeof Input>;

const Template:
    ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Light = Template.bind({});
Light.args = {
    value: "123",
};

export const Dark = Template.bind({});
Dark.args = {
    value: "123",
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

import { addDecorator } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { StyleDecorator } from "../../src/shared/config/storybook/StyleDecorator/StyleDecorator";
import { ThemeDecorator } from "../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { RouterDecorator } from "../../src/shared/config/storybook/RouterDecorator/RouterDecorator";
import { I18nextProvider } from "../../src/shared/config/storybook/I18nextProvider/I18nextProvider";

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

addDecorator(StyleDecorator);

addDecorator(I18nextProvider);
// декоратор можно указывать не только глобально, но и в компоненте
// Primary.decorators = [ThemeDecorator(Theme.LIGHT)];
addDecorator(ThemeDecorator(Theme.LIGHT));

addDecorator(RouterDecorator);

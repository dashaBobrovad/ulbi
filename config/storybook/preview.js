import { addDecorator, configure } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { StyleDecorator } from "../../src/shared/config/storybook/StyleDecorator/StyleDecorator";
// import { ThemeDecorator } from "./ThemeDecorator/ThemeDecorator";
// import { Theme } from "../../src/app/providers/ThemeProvider";
// import { RouterDecorator } from "./RouterDecorator/RouterDecorator";

function loadStories() {
    document.body.className += `app ${Theme.LIGHT}`;
    document.body.style.background = "none";
}

configure(loadStories, module);

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
// addDecorator(ThemeDecorator(Theme.LIGHT));
// addDecorator(RouterDecorator);

import { Story } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
    <div className={`app ${theme}`}>
        <StoryComponent />
    </div>
);

// function loadStories() {
//     document.body.className += `app ${Theme.LIGHT}`;
// }
// configure(loadStories, module);

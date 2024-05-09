import { Story } from "@storybook/react";
import { Theme, ThemeProvider } from "app/providers/ThemeProvider";

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
    <ThemeProvider initialTheme={theme}>
        <div className={`app ${theme}`}>
            <StoryComponent />
        </div>
    </ThemeProvider>
);

// function loadStories() {
//     document.body.className += `app ${Theme.LIGHT}`;
// }
// configure(loadStories, module);

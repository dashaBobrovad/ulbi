module.exports = {
    stories: [
        '../../src/shared/ui/Button/ui/Button.stories.tsx', // default page
        '../../src/**/*.stories.@(js|jsx|ts|tsx)',
        // '../../src/shared/ui/Button/ui/Button.stories.tsx',
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
    ],
    framework: '@storybook/react',
    core: {
        builder: 'webpack5',
    },
};

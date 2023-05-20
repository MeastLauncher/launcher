import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
    stories: ["../stories/**/*.mdx", "../stories/**/*.stories.@(js|jsx|ts|tsx)"],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
        {
            name: '@storybook/addon-styling',
            options: {
                sass: {
                    // Require your Sass preprocessor here
                    implementation: require('sass'),
                },
            },
        },
        "@storybook/addon-a11y"
    ],
    framework: {
        name: "@storybook/react-webpack5",
        options: {},
    },
    typescript: {
        check: false,
        checkOptions: {},
        reactDocgenTypescriptOptions: {
            shouldExtractValuesFromUnion: true,
            savePropValueAsString: false
        },
    },
    docs: {
        autodocs: "tag",
    },
};
export default config;

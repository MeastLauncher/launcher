import type { StorybookConfig } from "@storybook/react-webpack5";

// @ts-ignore
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
        "@storybook/addon-a11y",
        "@storybook/addon-console",
        "@storybook/manager-api",
        "@storybook/theming"
    ],
    framework: {
        name: "@storybook/react-webpack5",
        options: {},
    },
    typescript: {
        check: false,
        checkOptions: {},
        reactDocgenTypescriptOptions: {
            shouldExtractLiteralValuesFromEnum: true,
        },
    },
    docs: {
        autodocs: true,
    },
};
export default config;

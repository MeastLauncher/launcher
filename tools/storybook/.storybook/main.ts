/*
 * Copyright (C) 2023 Meast Team & its contributors
 *
 * This file is part of the Meast Launcher.
 *
 * Meast is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Meast is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Meast.  If not, see <http://www.gnu.org/licenses/>.
 */

import type { StorybookConfig } from '@storybook/react-webpack5';

// @ts-ignore
const config: StorybookConfig = {
    stories: [
        '../stories/**/*.mdx',
        '../stories/**/*.stories.@(js|jsx|ts|tsx)'
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        {
            name: '@storybook/addon-styling',
            options: {
                sass: {
                    // Require your Sass preprocessor here
                    implementation: require('sass')
                }
            }
        },
        '@storybook/addon-a11y',
        '@storybook/addon-console',
        '@storybook/manager-api',
        '@storybook/theming'
    ],
    framework: {
        name: '@storybook/react-webpack5',
        options: {}
    },
    typescript: {
        check: false,
        checkOptions: {},
        reactDocgenTypescriptOptions: {
            shouldExtractLiteralValuesFromEnum: true
        }
    },
    docs: {
        autodocs: true
    }
};
export default config;

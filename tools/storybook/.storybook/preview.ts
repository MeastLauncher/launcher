import '@meast/themes';

import type { Preview } from '@storybook/react';
import { themes } from '@storybook/theming';
import { withConsole } from '@storybook/addon-console';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      theme: themes.dark
    }
  },
  decorators: [(storyFn, context) => withConsole()(storyFn)(context)]
};

export default preview;

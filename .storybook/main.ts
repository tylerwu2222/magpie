import { StorybookConfig } from '@storybook/react-native';

const main: StorybookConfig = {
  stories: ['../src/components/**/*.stories.?(ts|tsx|js|jsx)'], // moved from storybook/stories to src/components
  addons: [
    '@storybook/addon-ondevice-controls',
    '@storybook/addon-ondevice-actions',
    '@storybook/addon-ondevice-notes',
    '@storybook/addon-ondevice-backgrounds',
  ],
};

export default main;

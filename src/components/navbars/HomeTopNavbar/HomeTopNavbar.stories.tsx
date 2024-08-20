import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';

// add ons
import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds';
import { StorybookBackgrounds } from '@/assets/constants/StorybookBackgrounds';

// component
import HomeTopNavbar from './HomeTopNavbar';

const HomeTopNavbarMeta: Meta<typeof HomeTopNavbar> = {
  title: 'Bottom Navbar',
  component: HomeTopNavbar,
  args: {
  },
  decorators: [
    (Story) => (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Story />
      </View>
    ),
    withBackgrounds
  ],
  parameters: StorybookBackgrounds
};

export default HomeTopNavbarMeta;

export const Basic: StoryObj<typeof HomeTopNavbarMeta> = {
};
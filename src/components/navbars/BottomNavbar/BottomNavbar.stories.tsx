import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';

// add ons
import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds';
import { StorybookBackgrounds } from '@/assets/constants/StorybookBackgrounds';

// component
import BottomNavbar from './BottomNavbar';

const BottomNavbarMeta: Meta<typeof BottomNavbar> = {
  title: 'Bottom Navbar',
  component: BottomNavbar,
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

export default BottomNavbarMeta;

export const Basic: StoryObj<typeof BottomNavbarMeta> = {
};
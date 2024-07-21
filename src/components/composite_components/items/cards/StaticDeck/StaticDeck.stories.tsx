import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';

// add ons
import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds';
import { StorybookBackgrounds } from '@/assets/constants/StorybookBackgrounds';

// component
import StaticDeck from './StaticDeck';

const StaticDeckMeta: Meta<typeof StaticDeck> = {
  title: 'Static Deck',
  component: StaticDeck,
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

export default StaticDeckMeta;

export const Basic: StoryObj<typeof StaticDeckMeta> = {};
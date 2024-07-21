import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';

// add ons
import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds';
import { StorybookBackgrounds } from '@/assets/constants/StorybookBackgrounds';

// component
import GridViewDeck from './GridViewDeck';

const GridViewDeckMeta: Meta<typeof GridViewDeck> = {
  title: 'Grid View Deck',
  component: GridViewDeck,
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

export default GridViewDeckMeta;

export const Basic: StoryObj<typeof GridViewDeckMeta> = {};
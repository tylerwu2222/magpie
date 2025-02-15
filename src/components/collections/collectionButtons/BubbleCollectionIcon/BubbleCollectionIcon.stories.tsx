import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';

// add ons
import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds';
import { StorybookBackgrounds } from '@/assets/constants/StorybookBackgrounds';

// component
import BubbleCollectionIcon from './BubbleCollectionIcon';
import { Colors } from '@/assets/constants/Colors';

const BubbleCollectionIconMeta: Meta<typeof BubbleCollectionIcon> = {
  title: 'Bubble Collection Icon',
  component: BubbleCollectionIcon,
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

export default BubbleCollectionIconMeta;

export const Basic: StoryObj<typeof BubbleCollectionIconMeta> = {};

export const FillBackground: StoryObj<typeof BubbleCollectionIconMeta> = {
  args: {
    collectionName: 'birds',
    buttonColorDict: Colors.lighterButton,
  }
};
import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';

// add ons
import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds';
import { StorybookBackgrounds } from '@/assets/constants/StorybookBackgrounds';

// component
import StaticCard from './EditableCard';

const StaticCardMeta: Meta<typeof StaticCard> = {
  title: 'StaticCard',
  component: StaticCard,
  args: {
    // imageSource: 'templateImages/birds.png'
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

export default StaticCardMeta;

export const Basic: StoryObj<typeof StaticCardMeta> = {};
import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';

// add ons
import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds';
import { StorybookBackgrounds } from '@/assets/constants/StorybookBackgrounds';

// component
import DraggableCard from './DraggableCard';

const DraggableCardMeta: Meta<typeof DraggableCard> = {
  title: 'DraggableCard',
  component: DraggableCard,
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

export default DraggableCardMeta;

export const Basic: StoryObj<typeof DraggableCardMeta> = {};
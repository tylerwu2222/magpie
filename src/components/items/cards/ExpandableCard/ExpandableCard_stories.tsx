import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';

// add ons
import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds';
import { StorybookBackgrounds } from '@/assets/constants/StorybookBackgrounds';

// component
import ExpandableCard from './ExpandableCard';

const ExpandableCardMeta: Meta<typeof ExpandableCard> = {
  title: 'Expandable Card',
  component: ExpandableCard,
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

export default ExpandableCardMeta;

export const Basic: StoryObj<typeof ExpandableCardMeta> = {};
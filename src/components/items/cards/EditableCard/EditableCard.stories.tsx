import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';

// add ons
import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds';
import { StorybookBackgrounds } from '@/assets/constants/StorybookBackgrounds';

// component
import EditableCard from './EditableCard';

const EditableCardMeta: Meta<typeof EditableCard> = {
  title: 'Editable Card',
  component: EditableCard,
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

export default EditableCardMeta;

export const Basic: StoryObj<typeof EditableCardMeta> = {};
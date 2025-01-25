import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';

// add ons
import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds';
import { StorybookBackgrounds } from '@/assets/constants/StorybookBackgrounds';

// component
import EditableCardModal from './EditableCardModal';

const EditableCardModalMeta: Meta<typeof EditableCardModal> = {
  title: 'Editable Card Modal',
  component: EditableCardModal,
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

export default EditableCardModalMeta;

export const Basic: StoryObj<typeof EditableCardModalMeta> = {};
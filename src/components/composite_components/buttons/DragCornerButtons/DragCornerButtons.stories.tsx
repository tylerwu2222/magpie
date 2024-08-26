import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';

// add ons
import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds';
import { StorybookBackgrounds } from '@/assets/constants/StorybookBackgrounds';

// component
import DragCornerButtons from './DragCornerButtons';
import DeleteIconButton from '@/src/components/buttons/common_icon_buttons/DeleteIconButton';
import AddCollectionIconButton from '@/src/components/buttons/common_icon_buttons/AddCollectionIconButton';
import PencilIconButton from '@/src/components/buttons/common_icon_buttons/PencilIconButton';
import ShareIconButton from '@/src/components/buttons/common_icon_buttons/ShareIconButton';

const DragCornerButtonsMeta: Meta<typeof DragCornerButtons> = {
  title: 'DragCornerButtons',
  component: DragCornerButtons,
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

export default DragCornerButtonsMeta;

export const Basic: StoryObj<typeof DragCornerButtonsMeta> = {
  args: {
    buttons: [<DeleteIconButton />, <AddCollectionIconButton />, <PencilIconButton />, <ShareIconButton />]
  }
};
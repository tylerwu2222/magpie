import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';

// add ons
import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds';
import { StorybookBackgrounds } from '@/assets/constants/StorybookBackgrounds';

// component
import CollectionsGridView from './CollectionsGridView';

const CollectionsGridViewMeta: Meta<typeof CollectionsGridView> = {
  title: 'Collections Grid View',
  component: CollectionsGridView,
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

export default CollectionsGridViewMeta;

export const Basic: StoryObj<typeof CollectionsGridViewMeta> = {};
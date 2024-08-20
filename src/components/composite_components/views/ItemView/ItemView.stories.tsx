import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';

// add ons
import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds';
import { StorybookBackgrounds } from '@/assets/constants/StorybookBackgrounds';

// component
import ItemView from './ItemView';

const ItemViewMeta: Meta<typeof ItemView> = {
  title: 'ItemView',
  component: ItemView,
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

export default ItemViewMeta;

export const Basic: StoryObj<typeof ItemViewMeta> = {
  render: (args) => {
    return (
      <ItemView
        {...args}
      />
    );
  },
};
import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds';
import { StorybookBackgrounds } from '@/assets/constants/StorybookBackgrounds';

import DropdownInput from './DropdownInput';

const DropdownInputMeta: Meta<typeof DropdownInput> = {
  title: 'DropdownInput',
  component: DropdownInput,
  args: {
    label: 'dropdown',
    defaultOption: '-select-',
    options: ['-select-','op1','op1','op3'],
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

export default DropdownInputMeta;

export const Basic: StoryObj<typeof DropdownInputMeta> = {};

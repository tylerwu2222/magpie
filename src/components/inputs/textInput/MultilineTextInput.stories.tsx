import { View } from 'react-native';

import type { Meta, StoryObj } from '@storybook/react';
import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds';
import { StorybookBackgrounds } from '@/assets/constants/StorybookBackgrounds';


import CustomMultilineTextInput from './TextInput';

const CustomMultilineTextInputMeta: Meta<typeof CustomMultilineTextInput> = {
  title: 'TextInput',
  component: CustomMultilineTextInput,
  args: {
    placeholder: 'placeholder',
    isDense: true,
    isMultiline: false,
    hasBorder: false,
    paddingHorizontal: 0
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

export default CustomMultilineTextInputMeta;

// one line, optional
export const Basic: StoryObj<typeof CustomMultilineTextInputMeta> = {
};
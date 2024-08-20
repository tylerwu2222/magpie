import { View } from 'react-native';

import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds';
import { StorybookBackgrounds } from '@/assets/constants/StorybookBackgrounds';


import CustomTextInput from './TextInput';

const CustomTextInputMeta: Meta<typeof CustomTextInput> = {
  title: 'Text Input',
  component: CustomTextInput,
  args: {
    placeholder: 'placeholder',
    isDense: true,
    isEditable: true,
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

export default CustomTextInputMeta;

// one line, optional
export const Basic: StoryObj<typeof CustomTextInputMeta> = {
  render: (args) => {
    const [text, setText] = useState('');

    return (
      <CustomTextInput
        {...args}
        value={text}
        onChangeTextFn={setText}
      />
    );
  },
};
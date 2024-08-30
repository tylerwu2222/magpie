import { StorybookBackgrounds } from '@/assets/constants/StorybookBackgrounds';
import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds';
import type { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';

import { Colors } from '@/assets/constants/Colors';
import TextButton from './TextButton';

const TextButtonMeta: Meta<typeof TextButton> = {
  title: 'Text Button',
  component: TextButton,
  argTypes: {
    onPressFn: { action: 'pressed text button' },
  },
  args: {
    text: 'Hello button',
    // textSize:'bodyLarge',
    borderRadius: 20,
    paddingHorizontal: 0,
    paddingVertical: 0,
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

export default TextButtonMeta;

// default
export const Basic: StoryObj<typeof TextButton> = {};

// colored text
export const ColorText: StoryObj<typeof TextButton> = {
  args: {
    // buttonColorDict: Colors.accentBlueContentButton,
    buttonColorDict: Colors.redAccentButton,
  }
};

import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds';
import { StorybookBackgrounds } from '@/assets/constants/StorybookBackgrounds';

import ImageTextButton from './ImageTextButton';

const ImageTextButtonMeta: Meta<typeof ImageTextButton> = {
  title: 'Image Text Button',
  component: ImageTextButton,
  argTypes: {
    onPressFn: { action: 'pressed the button' },
  },
  args: {
    // text: 'Hello world',
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

export default ImageTextButtonMeta;

export const Basic: StoryObj<typeof ImageTextButton> = {
  args: {
    imageSource: require('@/assets/images/templateImages/birds.png'),
    imageSize: 60,
    hasBorder: true,
    text: 'button'
  }
};

export const NoText: StoryObj<typeof ImageTextButton> = {
  args: {
    imageSource: require('@/assets/images/templateImages/birds.png'),
    imageSize: 60,
    hasBorder: false,
    text: ''
  }
};
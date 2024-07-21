import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds';
import { StorybookBackgrounds } from '@/assets/constants/StorybookBackgrounds';

import ImageButton from './ImageButton';

const ImageButtonMeta: Meta<typeof ImageButton> = {
  title: 'ImageButton',
  component: ImageButton,
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

export default ImageButtonMeta;

export const Basic: StoryObj<typeof ImageButton> = {
  args:{
    imageSource: require('@/assets/images/templateImages/birds.png'),
    imageSize: 60,
    isCircle: true,
    hasBorder: true
  }

};

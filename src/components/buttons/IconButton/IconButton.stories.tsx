import { StorybookBackgrounds } from '@/assets/constants/StorybookBackgrounds';
import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds';
import type { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';

import { Colors } from '@/assets/constants/Colors';
import ExpoIcon from '../../icons/ExpoIcon';
import IconButton from './IconButton';

const IconButtonMeta: Meta<typeof IconButton> = {
  title: 'IconButton',
  component: IconButton,
  argTypes: {
    onPressFn: { action: 'icon button pressed' }
  },
  args: {
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 10,
    buttonColorDict: Colors.lightButton
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

export default IconButtonMeta;

// default
export const Basic: StoryObj<typeof IconButton> = {};

// with string icon and text
export const IconStringButton: StoryObj<typeof IconButton> = {
  args: {
    iconComponent: 'camera',
    iconSize: 24,
    text: 'camera',
    buttonColorDict: Colors.accentBlueButton
  },
  argTypes: {
    onPressFn: { action: 'help button pressed' }
  }
};

// with icon element // DO NOT USE EXPO ICONS FOR NOW
// export const IconElementButton: StoryObj<typeof IconButton> = {
//   args: {
//     iconComponent: <ExpoIcon library='MaterialCommunityIcons' name="help-circle-outline" size={24} color="black" />,
//     iconSize: 24
//   },
//   argTypes: {
//     onPressFn: { action: 'help button pressed' }
//   }
// };

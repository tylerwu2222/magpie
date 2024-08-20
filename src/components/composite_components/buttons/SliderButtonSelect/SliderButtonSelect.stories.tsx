import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';

// add ons
import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds';
import { StorybookBackgrounds } from '@/assets/constants/StorybookBackgrounds';

// component
import SliderButtonSelect from './SliderButtonSelect';
import GraphTreeIcon from '@/src/components/icons/common_icons/GraphTreeIcon';
import GridIcon from '@/src/components/icons/common_icons/GridIcon';
import ListIcon from '@/src/components/icons/common_icons/ListIcon';
import CardsIcon from '@/src/components/icons/common_icons/CardsIcon';

const SliderButtonSelectMeta: Meta<typeof SliderButtonSelect> = {
  title: 'Slider Button Select',
  component: SliderButtonSelect,
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

export default SliderButtonSelectMeta;

export const Basic: StoryObj<typeof SliderButtonSelectMeta> = {
  render: (args) => {
    return (
      <SliderButtonSelect
        {...args}
        // iconList={[<GraphTreeIcon />, <GridIcon />, <ListIcon />, <CardsIcon />]}
        iconList={[<GraphTreeIcon />, <GridIcon />, <ListIcon />, <CardsIcon />]}
        // numberIconsShown={3}
      />
    );
  },
};
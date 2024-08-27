import { StyleSheet, Text, View } from 'react-native';
import React, { ReactElement, useContext } from 'react';
import { HomeContext } from '@/app/home';

// bottom navbar icons
import GraphTreeIcon from '../../icons/common_icons/GraphTreeIcon';
import GridIcon from '../../icons/common_icons/GridIcon';
import ListIcon from '../../icons/common_icons/ListIcon';
import CardsIcon from '../../icons/common_icons/CardsIcon';
import PencilIconButton from '../../buttons/common_icon_buttons/PencilIconButton';
import AddCollectionIconButton from '../../buttons/common_icon_buttons/AddCollectionIconButton';
import AddIconButton from '../../buttons/common_icon_buttons/AddIconButton';
import SliderButtonSelect from '../../composite_components/buttons/SliderButtonSelect/SliderButtonSelect';

import { Colors } from '@/assets/constants/Colors';
import { navbarDimensions } from '@/assets/constants/magpieDimensions';

interface BottomNavbarProps {
  navbarHeight: number,
  paddingH: number
}

const BottomNavbar = (
  {
    navbarHeight = navbarDimensions.bottomNavbarHeight,
    paddingH = 20
  }: Partial<BottomNavbarProps>
) => {

  const styles = StyleSheet.create({
    bottomNavbarView: {
      flexDirection: 'row',
      backgroundColor: Colors.lightTheme.background,
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      height: navbarHeight,
      paddingHorizontal: paddingH,
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    leftSideView: {

    },
    rightSideView: {
      flexDirection: 'row',
      gap: 1,
      justifyContent: 'flex-end'
    }
  })

  const {
    setHomeItemViewType,
    setNewNoteVisible
  } = useContext(HomeContext);

  // display new note modal
  const displayNewNote = () => {
    setNewNoteVisible(true)
  };

  const displayNewCollection = () => {
    console.log('display new collection');

  };

  // enter edit mode
  const enterEditMode = () => {
    console.log('enter edit mode');

  };

  const handleViewChange = (selectedIcon: any) => {
    if (selectedIcon.type === GridIcon)  setHomeItemViewType('grid');
    if (selectedIcon.type === ListIcon) setHomeItemViewType('list');
    if (selectedIcon.type === CardsIcon) setHomeItemViewType('stack');
  };


  return (
    <>
      <View style={styles.bottomNavbarView}>
        <View style={styles.leftSideView}>
          <SliderButtonSelect
            // iconList={[<GraphTreeIcon />, <GridIcon />, <ListIcon />, <CardsIcon />]}
            iconList={[ <ListIcon />, <CardsIcon />, <GridIcon />]}
            sliderBackgroundColor={Colors.lightTheme.lightBackground}
            iconChangeFn={handleViewChange}
          />
        </View>
        <View style={styles.rightSideView}>
          <PencilIconButton contentSize={30} onPressFn={enterEditMode} />
          <AddCollectionIconButton contentSize={30} onPressFn={displayNewCollection} />
          <AddIconButton contentSize={50} onPressFn={displayNewNote} />
        </View>
      </View>
    </>
  )
}

export default BottomNavbar


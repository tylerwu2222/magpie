import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

import { Colors } from '@/assets/constants/Colors';
// import CustomIconButton from '../../buttons/IconButton/IconButton';
// import { magpieDimensions } from '@/assets/constants/magpieDimensions';

// bottom navbar icons
import GraphTreeIcon from '../../icons/common_icons/GraphTreeIcon';
import GridIcon from '../../icons/common_icons/GridIcon';
import ListIcon from '../../icons/common_icons/ListIcon';
import CardsIcon from '../../icons/common_icons/CardsIcon';

import PencilIconButton from '../../buttons/common_icon_buttons/PencilIconButton';
import AddCollectionIconButton from '../../buttons/common_icon_buttons/AddCollectionIconButton';
import AddIconButton from '../../buttons/common_icon_buttons/AddIconButton';
// import GraphIconButton from '../../buttons/common_icon_buttons/GraphIconButton';
import SliderButtonSelect from '../../composite_components/buttons/SliderButtonSelect/SliderButtonSelect';
import { magpieDimensions } from '@/assets/constants/magpieDimensions';
import EditableCardModal from '../../modals/EditableCardModal/EditableCardModal';
// import HomeIconButton from '../../buttons/common_icon_buttons/HomeIconButton'


interface BottomNavbarProps {
  navbarHeight: number,
  paddingH: number
}

const BottomNavbar = (
  {
    navbarHeight = 80,
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

  // const navbarIcons = ['view', 'edit', 'new_collection', 'new_collection']
  const [newNoteVisible, setNewNoteVisible] = useState(false);

  // display new note modal
  const displayNewNote = () => {
    setNewNoteVisible(true)
  };

  // new note save/don't save handler
  const handleNewNoteClose = () => {
    // only save if text


    // close new note
    console.log('setting new card visibility to false!');
    setNewNoteVisible(false);
  };

  return (
    <>
      {newNoteVisible ?
        <EditableCardModal
          visible={newNoteVisible}
          modalDismissFn={handleNewNoteClose}
          fullScreen={true}
        /> : <></>}
      <View style={styles.bottomNavbarView}>
        <View style={styles.leftSideView}>
          <SliderButtonSelect
            iconList={[<GraphTreeIcon />, <GridIcon />, <ListIcon />, <CardsIcon />]}
            sliderBackgroundColor={Colors.lightTheme.lightBackground}
          />
        </View>
        <View style={styles.rightSideView}>
          <PencilIconButton contentSize={30} />
          <AddCollectionIconButton contentSize={30} />
          <AddIconButton contentSize={50} onPressFn={displayNewNote} />
        </View>
      </View>
    </>
  )
}

export default BottomNavbar


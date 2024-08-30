import { StyleSheet, View } from 'react-native';
import React, { useContext } from 'react';

import { HomeContext } from '@/app/home';

import { Colors } from '@/assets/constants/Colors';
// import CustomIconButton from '../../buttons/IconButton/IconButton';
// import { magpieDimensions } from '@/assets/constants/magpieDimensions';

// HomeTop navbar icons
import SearchBar from '../../inputs/textInput/SearchBar';
import { magpieDimensions, navbarDimensions } from '@/assets/constants/magpieDimensions';

// import PencilIconButton from '../../buttons/common_icon_buttons/PencilIconButton';
// import AddCollectionIconButton from '../../buttons/common_icon_buttons/AddCollectionIconButton';
// import AddIconButton from '../../buttons/common_icon_buttons/AddIconButton';
// import GraphIconButton from '../../buttons/common_icon_buttons/GraphIconButton';
// import SliderButtonSelect from '../../composite_components/buttons/SliderButtonSelect/SliderButtonSelect';
// import { magpieDimensions } from '@/assets/constants/magpieDimensions';
// import HomeIconButton from '../../buttons/common_icon_buttons/HomeIconButton'


interface HomeTopNavbarProps {
  navbarHeight: number,
  paddingH: number
}

const HomeTopNavbar = (
  {
    navbarHeight = navbarDimensions.topNavbarHeight,
    paddingH = 20
  }: Partial<HomeTopNavbarProps>
) => {

  const styles = StyleSheet.create({
    HomeTopNavbarView: {
      flexDirection: 'row',
      backgroundColor: Colors.lightTheme.background,
      // position: 'absolute',
      // top: 0,
      // left: 0,
      width: magpieDimensions.vw,
      height: navbarHeight,
      paddingHorizontal: paddingH,
      alignItems: 'center',
      // justifyContent: 'space-between'
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

  const {
    homeSearchQuery,
    setHomeSearchQuery,
    setSideMenuVisible
  } = useContext(HomeContext);

  const showSideMenu = () => {
    // console.log('toggling side menu');
    setSideMenuVisible(true)
  }

  // console.log('notes in HTN', notes);

  return (
    <View style={styles.HomeTopNavbarView}>
      <View style={styles.leftSideView}>
        <SearchBar
          leftIcon='hamburger'
          onIconPressFn={showSideMenu}
          searchQuery={homeSearchQuery}
          setSearchQuery={setHomeSearchQuery}
        />
      </View>
    </View>
  )
}

export default HomeTopNavbar


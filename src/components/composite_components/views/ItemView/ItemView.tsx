import { StyleSheet, View } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import { HomeContext } from '@/app/home';


import StaticCard from '@/src/components/items/cards/StaticCard/StaticCard';
// import DraggableCard from '@/src/components/items/cards/DraggableCard/DraggableCard';
import { MasonryFlashList } from "@shopify/flash-list";

import { cardDimensions, magpieDimensions, navbarDimensions } from '@/assets/constants/magpieDimensions';

import { entryDataType } from '@/src/types/data';

interface ItemViewProps {
  // ref: ,
  viewType: string
}

const ItemView = ({
  // ref,
  viewType = 'grid'
}: Partial<ItemViewProps>) => {


  const styles = StyleSheet.create({
    itemViewView: {
      paddingVertical: 10,
      paddingHorizontal: 5,
      overflow: 'hidden'
    },
    deckContainerView: {
      height: magpieDimensions.vh - navbarDimensions.bottomNavbarHeight - navbarDimensions.topNavbarHeight,
      overflow: 'scroll'
    },
  })

  // need dynamic displayed notes, so use context
  const {
    displayedNotes,
    setDisplayedNotes,
    setCornerButtonsVisible
  } = useContext(HomeContext);

  // for handling card reordering
  // const [draggingIndex, setDraggingIndex] = useState(-1);
  // const [placeholderIndex, setPlaceholderIndex] = useState(-1);

  // when card is long pressed, 
  const handleDrag = () => {
    // display drag actions
    setCornerButtonsVisible(true);
    // setIsScrollable(false)
  };

  const handleDragEnd = () => {
    // hide drag actions
    setCornerButtonsVisible(false);
    // reorder items based on final placeholder position


  };


  // render item
  const renderItem = ({ item }: { item: entryDataType }) => (
    <StaticCard
      key={item.id}
      entryData={item}
      isInteractable={true}
      onLongPressFn={handleDrag}
      onPressOutFn={handleDragEnd}
    />
  );

  // change item view style when view type changes
  return (
    <View style={styles.itemViewView}>
      {/* modify display style dynamically*/}
      <View style={styles.deckContainerView}>
        <MasonryFlashList
          data={displayedNotes}
          numColumns={2}
          estimatedItemSize={cardDimensions.height}
          renderItem={renderItem}
          style={styles.deckContainerView}
        />
      </View>
      {/* <GridViewDeck notes={notes}/> */}
      {/* {itemView} */}
    </View>
  )
}

export default ItemView

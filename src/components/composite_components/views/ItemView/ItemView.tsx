import { StyleSheet, View, ViewStyle } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import { HomeContext } from '@/app/home';


import StaticCard from '@/src/components/items/cards/StaticCard/StaticCard';
// import DraggableCard from '@/src/components/items/cards/DraggableCard/DraggableCard';
import { MasonryFlashList } from "@shopify/flash-list";

import { cardDimensions, magpieDimensions, navbarDimensions } from '@/assets/constants/magpieDimensions';

import { entryDataType } from '@/src/types/data';
import { deleteNoteByID, duplicateNoteByID } from '@/src/api/notes';
import { listStyle } from '@/src/components/items/cards/CardStyles';

interface ItemViewProps {
  // ref: ,
  viewType: string
}

const ItemView = ({
  // ref,
  viewType = 'grid'
}: Partial<ItemViewProps>) => {

  // need dynamic displayed notes, so use context
  const {
    homeItemViewType,
    displayedNotes,
    setCornerButtonsVisible,
    fetchSetNotes,
  } = useContext(HomeContext);


  // console.log('displayed notes itemview', displayedNotes);

  // for handling card reordering
  const [staticCardAdditionalStyles, setStaticCardAdditionalStyles] = useState<any>();
  const [numberFlashlistColumns, setNumberFlashlistColumns] = useState(2);

  useEffect(() => {
    // console.log('homeItemViewType changed', homeItemViewType);
    if (homeItemViewType == 'list') {
      setNumberFlashlistColumns(1);
      setStaticCardAdditionalStyles(listStyle.card);
    }
    if (homeItemViewType == 'grid') {
      setNumberFlashlistColumns(2);
      setStaticCardAdditionalStyles(null);
    }
    if (homeItemViewType == 'stack') {
      setNumberFlashlistColumns(2);
      setStaticCardAdditionalStyles(null);
    }
  }, [homeItemViewType]);

  // corner handlers
  // when card is long pressed, 
  const handleDrag = () => {
    // display drag actions
    setCornerButtonsVisible(true);
  };
  const handleDragEnd = () => {
    // hide drag actions
    setCornerButtonsVisible(false);
    // reorder items based on final placeholder position
  };
  const handleDragShare = async (id: number) => {
    // shareNoteByID(id);
  }
  const handleDragDelete = async (id: number) => {
    await deleteNoteByID(id);
    await fetchSetNotes();
  }
  const handleDragDuplicate = async (id: number) => {
    console.log('duplicating note');
    await duplicateNoteByID(id);
    await fetchSetNotes();
  }
  const createHomeCornerActions = (id: number) => ({
    topLeftFn: () => {
      handleDragShare(id);
    },
    topRightFn: () => {
      handleDragDelete(id);
    },
    bottomLeftFn: () => {
      // Define other action here
    },
    bottomRightFn: () => {
      handleDragDuplicate(id);
    },
  });


  // render item
  const renderItem = ({ item }: { item: entryDataType }) => (
    <StaticCard
      key={item.id}
      entryData={item}
      isInteractable={true}
      onLongPressFn={handleDrag}
      onPressOutFn={handleDragEnd}
      isDraggable={true}
      cornerActions={createHomeCornerActions(item.id)}
      additionalStyle={staticCardAdditionalStyles}
    />
  );

  // change item view style when view type changes
  return (
    <View style={styles.itemViewView}>
      {/* modify display style dynamically*/}
      <View style={styles.deckContainerView}>
        <MasonryFlashList
          data={displayedNotes}
          numColumns={numberFlashlistColumns}
          estimatedItemSize={cardDimensions.height}
          renderItem={renderItem}
        // style={styles.deckContainerView}
        />
      </View>
      {/* <GridViewDeck notes={notes}/> */}
      {/* {itemView} */}
    </View>
  )
}

export default ItemView


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
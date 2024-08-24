import { StyleSheet, View } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import { HomeContext } from '@/app/home';

import StaticCard from '@/src/components/items/cards/StaticCard/StaticCard';
// import { FlashList } from "@shopify/flash-list";
import { MasonryFlashList } from "@shopify/flash-list";

import { cardDimensions, magpieDimensions, navbarDimensions } from '@/assets/constants/magpieDimensions';

import { entryDataType } from '@/src/types/data';

interface ItemViewProps {
  viewType: string
}

const ItemView = ({
  viewType = 'grid'
}: Partial<ItemViewProps>) => {


  const styles = StyleSheet.create({
    itemViewView: {
      paddingVertical: 10,
      paddingHorizontal: 5
    },
    deckContainerView: {
      height: magpieDimensions.vh - navbarDimensions.bottomNavbarHeight - navbarDimensions.topNavbarHeight,
      overflow: 'scroll'
      // display: 'flex',
      // flexDirection: 'row',
      // gap: cardDimensions.width / 10,
      // flexWrap: 'wrap',
      // alignItems: 'center',
      // justifyContent: 'center',
    },
  })

  // need dynamic displayed notes, so use context
  const {
    displayedNotes
  } = useContext(HomeContext);

  // change item view style when view type changes
  return (
    <View style={styles.itemViewView}>
      {/* modify display style dynamically*/}
      <View style={styles.deckContainerView}>
        <MasonryFlashList
          // key={displayedNotes.length}
          data={displayedNotes}
          numColumns={2}
          estimatedItemSize={cardDimensions.height}
          renderItem={({ item }) =>
            <StaticCard
              key={item.id}
              entryData={item}
              isInteractable={true}
            // additionalStyle={{ margin: 5 }}
            />
          }
        />
      </View>
      {/* <GridViewDeck notes={notes}/> */}
      {/* {itemView} */}
    </View>
  )
}

export default ItemView

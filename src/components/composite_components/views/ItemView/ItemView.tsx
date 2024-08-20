import { StyleSheet, View } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import { HomeContext } from '@/app/home';

import StaticCard from '@/src/components/items/cards/StaticCard/StaticCard';

import { cardDimensions } from '@/assets/constants/magpieDimensions';

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
      display: 'flex',
      flexDirection: 'row',
      gap: cardDimensions.width / 10,
      flexWrap: 'wrap',
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
        {displayedNotes ?
          displayedNotes.map((note: entryDataType, index: number) => (
            <StaticCard
              key={index}
              entryData={note}
              isInteractable={true}
            // onPressFn={}
            />
          )) : null
        }
      </View>
      {/* <GridViewDeck notes={notes}/> */}
      {/* {itemView} */}
    </View>
  )
}

export default ItemView

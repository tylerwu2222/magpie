import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import StaticCard from '../../../../items/cards/StaticCard/StaticCard'
import { cardDimensions } from '@/assets/constants/magpieDimensions'

import dummyCollection from '@/assets/data/dummyData/dummyCollection.json';

// future: take data in from backend
const GridViewDeck = () => {

    return (
        <View style={styles.deckContainer}>
            {
                [...Array(5)].map((_, index) => (
                    <StaticCard
                        key={index}
                        entryID={1}
                        entryData={dummyCollection[0]['CollectionItems'][1]}
                    // additionalStyle={
                    //     [styles.card, {
                    //         top: (cardDimensions.height / 2) + index * 7,
                    //         left: index * 7 - (cardDimensions.width / 2),
                    //         zIndex: -index
                    //     }]}
                    />
                ))
            }
        </View>
    )
}

export default GridViewDeck;

const styles = StyleSheet.create({
    deckContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: cardDimensions.width / 10,
        flexWrap: 'wrap',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    // card: {
    //     // width: 300,
    //     // height: 180,
    //     position: 'absolute',
    //     elevation: 5,
    //     shadowColor: '#000',
    //     shadowOffset: { width: 0, height: 2 },
    //     shadowOpacity: 0.8,
    //     shadowRadius: 2,
    //     backgroundColor: '#fff',
    //     // borderRadius: 8,
    // },
})
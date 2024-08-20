import { StyleSheet, View } from 'react-native'
import React from 'react'

import StaticCard from '../../../../items/cards/StaticCard/StaticCard'
import { cardDimensions } from '@/assets/constants/magpieDimensions'

import { entryDataType } from '@/src/types/data';

interface GridViewDeckProps {
    notes: any
}
// future: take data in from backend
const GridViewDeck = ({ 
    notes
}: Partial<GridViewDeckProps>) => {

    // console.log('notes in grid view', notes);

    return (
        <View style={styles.deckContainer}>
            {notes ?
                notes.map((note: entryDataType, index: number) => (
                    <StaticCard
                        key={index}
                        entryData={note}
                    />
                )) : null
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
    }
})
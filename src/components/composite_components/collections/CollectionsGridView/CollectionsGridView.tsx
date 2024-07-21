import { StyleSheet, View } from 'react-native'
import React from 'react'

import BubbleCollectionIcon from '@/src/components/collections/collectionButtons/BubbleCollectionIcon/BubbleCollectionIcon'

import dummyCollections from '@/assets/data/dummyData/dummyCollections.json';

const CollectionsGridView = () => {
    return (
        <View style={styles.gridView}>
            {
                dummyCollections.map((collection, index) => {
                    return (
                        <BubbleCollectionIcon
                            collectionName={collection.CollectionName}
                        />
                    )
                })
            }
        </View>

    )
}

export default CollectionsGridView

const styles = StyleSheet.create({
    gridView: {
        flexDirection: 'row',
        gap: 10
    }
})
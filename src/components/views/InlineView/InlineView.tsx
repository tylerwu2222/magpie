import { StyleSheet, Text, View } from 'react-native'
import React, { ReactNode } from 'react'

interface InlineViewProps {
    children: ReactNode,
}

const InlineView = ({
    children
}: Partial<InlineViewProps>) => {
    return (
        <View style={styles.inlineView}>
            {children}
        </View>
    )
}

export default InlineView

const styles = StyleSheet.create({
    inlineView: {
        flexDirection: 'row',
        alignItems:'center',
        flexWrap: 'wrap'
    }
})
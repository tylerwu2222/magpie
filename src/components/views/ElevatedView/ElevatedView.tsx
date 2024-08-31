import { StyleSheet, Text, View } from 'react-native'
import React, { ReactNode } from 'react'
import { magpieDimensions } from '@/assets/constants/magpieDimensions'
import { Colors } from '@/assets/constants/Colors'

interface ElevatedViewProps {
    children: ReactNode,
    viewBackgroundColor: string,
    viewMaxHeight: number,
    viewBorderRadius: number,
    viewMarginTop: number,
}

const ElevatedView = ({
    children,
    viewMaxHeight = magpieDimensions.vh * 0.8,
    viewBackgroundColor = Colors.lightTheme.background,
    viewBorderRadius = 10,
    viewMarginTop = 40
}: Partial<ElevatedViewProps>) => {


    const styles = StyleSheet.create({
        elevatedView: {
            marginTop: viewMarginTop,
            padding: 12,
            height: 'auto',
            width: magpieDimensions.vw * 0.9,
            alignSelf: 'center',
            maxHeight: viewMaxHeight,
            borderRadius: viewBorderRadius,
            backgroundColor: viewBackgroundColor,
            shadowColor: '#000', // color of the shadow
            shadowOffset: { width: 0, height: 2 }, // shadow offset (width and height)
            shadowOpacity: 0.25, // shadow opacity
            shadowRadius: 3.84, // shadow blur radius
            elevation: 5,
            alignItems: 'center'
        },
    })

    return (
        <View style={styles.elevatedView}>
            {children}
        </View>
    )
}

export default ElevatedView

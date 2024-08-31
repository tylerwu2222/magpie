import { View, ActivityIndicator, StyleSheet } from 'react-native'
import React from 'react'

import { Colors } from '@/assets/constants/Colors'
import { largerButtonSize, smallerButtonSize } from '@/assets/constants/magpieDimensions'
import { MotiView } from 'moti'

interface AnimatedActivityIndicatorProps {
    iconColorDict: {
        icon: string,
        background: string
    },
    size: number | 'small' | 'large' | undefined,
    hasPadding: boolean
};

export default function AnimatedActivityIndicator(
    {
        iconColorDict = Colors.indicatorIcon,
        size = smallerButtonSize,
        hasPadding = true,
    }: Partial<AnimatedActivityIndicatorProps>
) {

    const styles = StyleSheet.create({
        activityIndicatorView: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: iconColorDict.background,
            padding: hasPadding ? smallerButtonSize : 0,
            margin: 0,
            borderRadius: 15,
            // width: typeof size == 'number' ? size: smallerButtonSize,
            // height: typeof size == 'number' ? size: smallerButtonSize
        }
    });
    return (
        <MotiView style={styles.activityIndicatorView}>
            <ActivityIndicator
                color={iconColorDict.icon}
                size={size}
            />
        </MotiView>
    )
}
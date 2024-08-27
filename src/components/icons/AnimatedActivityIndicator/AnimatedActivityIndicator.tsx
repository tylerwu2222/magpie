import { View, ActivityIndicator, StyleSheet } from 'react-native'
import React from 'react'

import { Colors } from '@/assets/constants/Colors'
import { smallerButtonSize } from '@/assets/constants/magpieDimensions'
import { MotiView } from 'moti'

interface AnimatedActivityIndicatorProps {
    iconColorDict: {
        icon: string,
        background: string
    },
    size: number | 'small' | 'large' | undefined
};

export default function AnimatedActivityIndicator(
    {
        iconColorDict = Colors.indicatorIcon,
        size = smallerButtonSize
    }: Partial<AnimatedActivityIndicatorProps>
) {

    const styles = StyleSheet.create({
        activityIndicatorView: {
            display: 'flex',
            // alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: iconColorDict.background,
            padding: smallerButtonSize,
            margin: 0,
            borderRadius: 15,
            width: smallerButtonSize,
            height: smallerButtonSize
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
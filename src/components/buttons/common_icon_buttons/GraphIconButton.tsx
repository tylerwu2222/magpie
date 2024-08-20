import React from 'react'

import CustomIconButton from '../IconButton/IconButton'
import { Colors } from '@/assets/constants/Colors'
import { basicButtonType } from '@/src/types/components'

export default function GraphIconButton({
    isDisabled,
    contentSize = 40,
    buttonColorDict = Colors.accentBlueButton
}: basicButtonType) {
    return (
        <CustomIconButton
            iconName='graph'
            isDisabled={isDisabled}
            iconSize={contentSize}
            buttonColorDict={buttonColorDict}
        />
    )
}
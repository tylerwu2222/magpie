import React from 'react'

import IconButton from '../IconButton/IconButton'
import { Colors } from '@/assets/constants/Colors'
import { basicButtonType } from '@/src/types/components'

export default function AddIconButton({
    isDisabled,
    contentSize = 40,
    buttonColorDict = Colors.accentBlueButton
}: basicButtonType) {
    return (
        <IconButton
            iconComponent='plus-circle'
            isDisabled={isDisabled}
            iconSize={contentSize}
            buttonColorDict={buttonColorDict}
        />
    )
}
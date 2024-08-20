import React from 'react'

import CustomIconButton from '../IconButton/IconButton'
import { Colors } from '@/assets/constants/Colors'
import { basicButtonType } from '@/src/types/components'

export default function AddCollectionIconButton({
    isDisabled,
    contentSize = 40,
    buttonColorDict = Colors.accentBlueButton
}: basicButtonType) {
    return (
        <CustomIconButton
            iconName='book-plus'
            isDisabled={isDisabled}
            iconSize={contentSize}
            buttonColorDict={buttonColorDict}
        />
    )
}
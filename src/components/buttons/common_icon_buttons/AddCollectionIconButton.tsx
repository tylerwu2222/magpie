import React from 'react'

import CustomIconButton from '../IconButton/IconButton'
import { Colors } from '@/assets/constants/Colors'
import { basicButtonType } from '@/src/types/components'
import { defaultButtonSize } from '@/assets/constants/magpieDimensions'

export default function AddCollectionIconButton({
    isDisabled,
    contentSize = defaultButtonSize,
    borderRadius,
    buttonColorDict = Colors.accentBlueContentButton
}: basicButtonType) {
    return (
        <CustomIconButton
            iconName='book-plus'
            isDisabled={isDisabled}
            iconSize={contentSize}
            borderRadius={borderRadius}
            buttonColorDict={buttonColorDict}
        />
    )
}
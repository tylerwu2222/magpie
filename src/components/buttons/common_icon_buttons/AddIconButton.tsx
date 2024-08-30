import React from 'react'

import CustomIconButton from '../IconButton/IconButton'
import { Colors } from '@/assets/constants/Colors'
import { basicButtonType } from '@/src/types/components'

export default function AddIconButton({
    isDisabled,
    contentSize = 40,
    buttonColorDict = Colors.accentBlueContentButton,
    onPressFn = () => { }
}: basicButtonType) {
    return (
        <CustomIconButton
            iconName='plus-circle'
            isDisabled={isDisabled}
            iconSize={contentSize}
            buttonColorDict={buttonColorDict}
            onPressFn={onPressFn}
        />
    )
}
import React from 'react'

import CustomIconButton from '../IconButton/IconButton'
import { Colors } from '@/assets/constants/Colors'
import { basicButtonType } from '@/src/types/components'

export default function CopyIconButton({
    isDisabled,
    contentSize = 40,
    buttonColorDict = Colors.accentBlueButton,
    onPressFn = () => { }
}: basicButtonType) {
    return (
        <CustomIconButton
            iconName='content-copy'
            isDisabled={isDisabled}
            iconSize={contentSize}
            buttonColorDict={buttonColorDict}
            onPressFn={onPressFn}
        />
    )
}
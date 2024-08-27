import React from 'react'

import CustomIconButton from '../IconButton/IconButton'
import ExpoIcon from '../../icons/ExpoIcon'
import { Colors } from '@/assets/constants/Colors'
import { basicButtonType } from '@/src/types/components'
import { defaultButtonSize } from '@/assets/constants/magpieDimensions'

export default function DeleteIconButton({
    isDisabled,
    contentSize = defaultButtonSize,
    buttonColorDict = Colors.deleteButton,
    borderRadius,
    onPressFn = () => { }
}: basicButtonType) {
    return (
        <CustomIconButton
            // iconName={<ExpoIcon library='MaterialIcons' name="delete" size={24} color="black" />}
            iconName={'delete'}
            isDisabled={isDisabled}
            iconSize={contentSize}
            borderRadius={borderRadius}
            buttonColorDict={buttonColorDict}
            onPressFn={onPressFn}
        />
    )
}
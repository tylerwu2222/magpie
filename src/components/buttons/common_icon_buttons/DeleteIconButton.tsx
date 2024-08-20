import React from 'react'

import CustomIconButton from '../IconButton/IconButton'
import ExpoIcon from '../../icons/ExpoIcon'
import { Colors } from '@/assets/constants/Colors'
import { basicButtonType } from '@/src/types/components'

export default function DeleteIconButton({
    isDisabled,
    contentSize = 40,
    buttonColorDict = Colors.deleteButton
}: basicButtonType) {
    return (
        <CustomIconButton
            // iconName={<ExpoIcon library='MaterialIcons' name="delete" size={24} color="black" />}
            iconName={'delete'}
            isDisabled={isDisabled}
            iconSize={contentSize}
            buttonColorDict={buttonColorDict}
        />
    )
}
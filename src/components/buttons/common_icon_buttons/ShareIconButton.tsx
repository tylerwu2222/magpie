import React from 'react'

import IconButton from '../IconButton/IconButton'
import ExpoIcon from '../../icons/ExpoIcon'
import { Colors } from '@/assets/constants/Colors'
import { basicButtonType } from '@/src/types/components'

export default function ShareIconButton({
    isDisabled,
    contentSize = 40,
    buttonColorDict = Colors.accentBlueButton
}: basicButtonType) {
    return (
        <IconButton
            // iconComponent={<ExpoIcon library='Entypo' name="share" size={20} color={Colors.accentBlueButton.text} />}
            iconComponent={'share'}
            isDisabled={isDisabled}
            iconSize={contentSize}
            buttonColorDict={buttonColorDict}
        />
    )
}
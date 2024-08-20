import React from 'react'

import CustomIconButton from '../IconButton/IconButton'
import { Colors } from '@/assets/constants/Colors'
import { basicButtonType } from '@/src/types/components'

export default function CloseIconButton({
    isDisabled,
    contentSize = 40,
    buttonColorDict = Colors.accentBlueButton,
    onPressFn = () => { }
}: basicButtonType) {
    return (
        <CustomIconButton
            // iconName={<ExpoIcon library='MaterialIcons' name="delete" size={24} color="black" />}
            iconName='close'
            isDisabled={isDisabled}
            iconSize={contentSize}
            buttonColorDict={buttonColorDict}
            onPressFn={() => { 
                onPressFn();
                console.log('close button pressed');
            }}
        />
    )
}
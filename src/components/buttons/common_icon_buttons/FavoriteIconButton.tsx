import React from 'react'

import IconButton from '../IconButton/IconButton'
import { Colors } from '@/assets/constants/Colors'

import { basicButtonType } from '@/src/types/components'

export default function FavoriteIconButton({
  isDisabled,
  contentSize = 40,
  buttonColorDict = Colors.accentBlueButton
}: basicButtonType) {
  return (
    <IconButton
      iconComponent='heart'
      isDisabled={isDisabled}
      iconSize={contentSize}
      buttonColorDict={buttonColorDict}
    />
  )
}
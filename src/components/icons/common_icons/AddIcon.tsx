import React from 'react'
import ExpoIcon from '../ExpoIcon'
import { Colors } from '@/assets/constants/Colors'

export default function AddIcon() {
  return (
    <ExpoIcon
        library='Ionicons'
        name={'add-circle-outline'}
        color={Colors.accentBlueContentButton.text}
        size={15}
    />
  )
}
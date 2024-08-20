import React from 'react'
import ExpoIcon from '../ExpoIcon'
import { Colors } from '@/assets/constants/Colors'

export default function GraphTreeIcon() {
  return (
    <ExpoIcon
        library='MaterialCommunityIcons'
        name={'graph'}
        color={Colors.accentBlueButton.text}
    />
  )
}
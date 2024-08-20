import React from 'react'
import ExpoIcon from '../ExpoIcon'
import { Colors } from '@/assets/constants/Colors'

export default function CardsIcon() {
  return (
    <ExpoIcon
        library='MaterialCommunityIcons'
        name={'cards'}
        color={Colors.accentBlueButton.text}
    />
  )
}
import React from 'react'
import ExpoIcon from '../ExpoIcon'
import { Colors } from '@/assets/constants/Colors'

export default function ListIcon() {
  return (
    <ExpoIcon
        library='MaterialCommunityIcons'
        name={'format-list-bulleted'}
        color={Colors.accentBlueContentButton.text}
    />
  )
}
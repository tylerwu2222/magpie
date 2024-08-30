import React from 'react'
import ExpoIcon from '../ExpoIcon'
import { Colors } from '@/assets/constants/Colors'

export default function GridIcon() {
  return (
    <ExpoIcon
        library='MaterialCommunityIcons'
        name={'view-grid'}
        color={Colors.accentBlueContentButton.text}
    />
  )
}
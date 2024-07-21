import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DraggableCard = (
  {
    title='',
    subtitle='',
    content='',
    hasTitle=true,
    hasSubTitle=true,
    hasContent=true,
    isEditable=true
  }
) => {
  /**
   * editable/noneditable card that can be dragged
   */
  
  // include MUI card and draggable logic from kapwing project

  return (
    <View>
      <Text>DraggableCard</Text>
    </View>
  )
}

export default DraggableCard

const styles = StyleSheet.create({})
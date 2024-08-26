import { StyleSheet, Text } from 'react-native'
import React, { ReactElement } from 'react';
import { View, MotiView } from 'moti';
import { magpieDimensions } from '@/assets/constants/magpieDimensions';

interface DragCornerButtonsProps {
  buttons: Array<ReactElement>
}

// displays up to 4 action buttons in each corner to drag to
const DragCornerButtons = ({ buttons }: DragCornerButtonsProps) => {

  const styles = StyleSheet.create({
    dragCornerButtonsContainer: {
      position: 'absolute',
      // backgroundColor: 'transparent',
      backgroundColor: '#00000060', // 40% transparency
      width: magpieDimensions.vw,
      height: magpieDimensions.vh,
      overflow: 'hidden',
      zIndex: 10
    },
    buttonContainer: {
      position: 'absolute',
      // backgroundColor: 'transparent',
      margin: 16,  // Adjust the margin as needed
    }
  })
  const positions = [
    { top: 0, right: 0 },  // Top right
    { bottom: 0, right: 0 },  // Bottom right
    { bottom: 0, left: 0 },  // Bottom left
    { top: 0, left: 0 },  // Top left
  ];

  return (
    <View style={styles.dragCornerButtonsContainer}>
      {buttons.map((button, index) => (
        <MotiView
          key={index}
          style={[styles.buttonContainer, positions[index]]}
          from={{
            translateX: index === 1 || index === 2 ? 50 : -50,  // Horizontal translation
            translateY: index < 2 ? -50 : 50,  // Vertical translation
            opacity: 0,
          }}
          animate={{
            translateX: 0,
            translateY: 0,
            opacity: 1,
          }}
          transition={{
            type: 'spring',
            // delay: 100 * index,  // Optional: delay each button slightly
          }}
        >
          {button}
        </MotiView>
      ))}
    </View>
  )
}

export default DragCornerButtons

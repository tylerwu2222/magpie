import { StyleSheet, Text } from 'react-native'
import React, { ReactElement } from 'react';
import { View, MotiView } from 'moti';
import { magpieDimensions, cornerButtonDistance, defaultButtonSize } from '@/assets/constants/magpieDimensions';
import { SafeAreaView } from 'react-native-safe-area-context';

interface DragCornerButtonsProps {
  buttons: Array<ReactElement>,
  buttonSize: number,
  buttonMargin: number
}

const cornerPositions = [
  { top: -cornerButtonDistance, right: -cornerButtonDistance },  // Top right
  { bottom: -cornerButtonDistance, right: -cornerButtonDistance },  // Bottom right
  { bottom: -cornerButtonDistance, left: -cornerButtonDistance },  // Bottom left
  { top: -cornerButtonDistance, left: -cornerButtonDistance },  // Top left
];

// displays up to 4 action buttons in each corner to drag to
const DragCornerButtons = ({
  buttons,
  buttonSize = defaultButtonSize,
  buttonMargin = 5
}: Partial<DragCornerButtonsProps>) => {

  const styles = StyleSheet.create({
    dragCornerButtonsContainer: {
      position: 'absolute',
      // backgroundColor: 'transparent',
      backgroundColor: '#00000060', // 40% transparency
      width: magpieDimensions.vw,
      height: magpieDimensions.vh * 1.05,
      overflow: 'hidden',
      zIndex: 10
    },
    buttonContainer: {
      position: 'absolute',
      // backgroundColor: 'transparent',
      margin: buttonMargin,
    }
  })


  return (
    // <SafeAreaView>
    <View style={styles.dragCornerButtonsContainer}>
      {buttons && buttons.map((button, index) => (
        <MotiView
          key={index}
          style={[styles.buttonContainer, cornerPositions[index]]}
          from={{
            translateX: index < 2 ? buttonSize : -buttonSize,  // Horizontal translation
            translateY: index === 0 || index === 4 ? -buttonSize : buttonSize,  // Vertical translation
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
    // </SafeAreaView>
  )
}

export default DragCornerButtons

import { StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'

import { Button } from 'react-native-paper';

interface ImageButtonProps {
  imageSource: any; // change to string for non-local
  imageSize?: number;

  isCircle?: boolean;
  hasBorder?: boolean;

  borderWidth?: number;
  borderRadius?: number;

  onPressFn?: () => void;
}

const ImageButton = ({
  imageSource,
  imageSize = 50,

  isCircle = true,
  hasBorder = true,

  borderRadius = 10,
  borderWidth = 1,
  onPressFn = () => { }
}: ImageButtonProps) => {

  const [buttonOpacity, setButtonOpacity] = useState(1);

  const styles = StyleSheet.create({
    imageButton: {
      width: imageSize,
      minWidth: 0,
      height: imageSize,
      opacity: buttonOpacity,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 0,
      margin: 0,
      overflow: 'hidden', // crops image
      borderRadius: isCircle ? imageSize / 2 : borderRadius,
      // borderRadius: imageSize / 2,
      borderColor: 'black',
      borderWidth: hasBorder ? borderWidth : 0
    },
    imageButtonImage: {
      width: imageSize * 1.05,
      height: imageSize * 1.05,
      margin: 0,
      opacity: buttonOpacity,
      resizeMode: 'cover' // fills button
      // resizeMode: 'center' // fills button
    }
  })

  return (
    <Button
      onPress={
        () => {
          onPressFn()
        }
      }
      style={styles.imageButton}
    >
      <Image
        style={styles.imageButtonImage}
        source={imageSource}
      ></Image>
    </Button>
  )
}

export default ImageButton
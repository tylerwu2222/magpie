import { View, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'

import { Button, Text } from 'react-native-paper';
import { TextPosition, FlexDirection, textComponentColorDict } from '@/src/types/components';
import { Colors } from '@/assets/constants/Colors';

interface ImageTextButtonProps {
  imageSource: any; // change to string for non-local
  imageSize?: number;
  text?: string,

  // isCircle?: boolean;
  hasBorder?: boolean;

  textPosition?: TextPosition;
  borderWidth?: number;
  borderRadius?: number;
  imageBorderRadius?: number | null;
  fontSize?: number;

  buttonColorDict?: textComponentColorDict;

  onPressFn?: () => void;
  onLongPressFn?: () => void;
}

const ImageTextButton = ({
  imageSource,
  imageSize = 50,
  text = 'button',

  // isCircle = true,
  hasBorder = true,
  textPosition = 'bottom',

  borderRadius = 10,
  imageBorderRadius = null,
  borderWidth = 1,
  fontSize = 12,
  buttonColorDict = Colors.transparentButton,

  onPressFn = () => { },
  onLongPressFn = () => { }
}: ImageTextButtonProps) => {

  const textFlexMap: Record<TextPosition, FlexDirection> = {
    'bottom': 'column',
    'left': 'row-reverse',
    'top': 'column-reverse',
    'right': 'row'
  };

  const styles = StyleSheet.create({
    ImageTextButton: {
      // width: imageSize * 1.5,
      minWidth: 0,
      // height: (imageSize + fontSize) * 1.5,

      padding: 0,
      margin: 0,

      borderRadius: borderRadius,
      // borderRadius: imageSize / 2,
      borderColor: 'black',
      borderWidth: hasBorder ? borderWidth : 0,
      backgroundColor: buttonColorDict.default
    },
    ImageTextContainer: {
      flexDirection: textFlexMap[textPosition],
      alignItems: 'center', // align along y-axis
    },
    ImageTextButtonImage: {
      width: imageSize * 1.05,
      height: imageSize * 1.05,
      borderRadius: imageBorderRadius ? imageBorderRadius : imageSize / 2
      // margin: 20,
      // padding: 20,
      // resizeMode: 'cover' // fills button
      // resizeMode: 'center' // fills button
    },
    ImageTextButtonText: {
      color: buttonColorDict.text
    }
  })

  return (
    <Button
      onPress={
        () => {
          onPressFn();
        }
      }
      onLongPress={
        () => {
          onLongPressFn();
        }
      }
      style={styles.ImageTextButton}
    >
      <View style={styles.ImageTextContainer}>
        <Image
          style={styles.ImageTextButtonImage}
          source={imageSource}
        // source={require('@/assets/images/templateImages/birds.png')}
        ></Image>
        <Text
          style={styles.ImageTextButtonText}
        >
          {text}
        </Text>
      </View>
    </Button>
  )
}

export default ImageTextButton
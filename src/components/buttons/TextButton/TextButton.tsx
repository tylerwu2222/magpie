import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Button, Text, VariantProp } from 'react-native-paper';

import { Colors } from '@/assets/constants/Colors';

interface TextButtonProps {
  text: string,
  textSize: VariantProp<'displayLarge' | ' displayMedium' | ' displaySmall' | 'headlineLarge' | 'headlineMedium' | 'headlineSmall' | 'titleLarge' | 'titleMedium' | 'titleSmall' |
    'labelLarge' | ' labelMedium' | ' labelSmall' | 'bodyLarge' | ' bodyMedium' | ' bodySmall'>,
  // textSize: ;
  mode?: 'text' | 'outlined' | 'contained' | 'elevated' | 'contained-tonal',
  disabled: boolean,
  buttonWidth?: number,
  borderRadius?: number,
  buttonHeight?: number,
  borderWidth?: number,
  paddingVertical?: number,
  paddingHorizontal?: number,
  buttonColorDict?: {
    'default': string,
    'ripple': string,
    'toggle'?: string,
    'text'?: string
  };
  onPressFn: (() => void) | (() => Promise<void>)
}

const TextButton = ({
  text = 'button',
  textSize = 'bodyMedium',
  mode = 'contained',
  disabled = false,
  buttonWidth,
  buttonHeight = 50,
  borderRadius = 30,
  paddingVertical = 0,
  paddingHorizontal = 0,
  buttonColorDict = Colors.lightButton,
  onPressFn = () => { }
}: Partial<TextButtonProps>
) => {

  const styles = StyleSheet.create({
    button: {
      backgroundColor: buttonColorDict.default,
      borderRadius: borderRadius + paddingVertical,
      width: buttonWidth ? buttonWidth : 'auto',
      height: buttonHeight ? buttonHeight: 'auto',
      justifyContent: 'center'
    },
    buttonContent: {
      paddingVertical: paddingVertical,
      paddingHorizontal: paddingHorizontal,
    },
    buttonText: {
      color: buttonColorDict.text
    }
  });

  // const [currButtonColor, setCurrButtonColor] = useState(buttonColorDict.default);
  return (
    <Button
      mode={mode}
      // textColor={buttonColorDict.text}
      // buttonColor={currButtonColor}
      rippleColor={buttonColorDict.ripple}
      onPress={onPressFn}
      contentStyle={styles.buttonContent}
      disabled={disabled}
      style={styles.button}
    >
      <Text
        variant={textSize}
        style={styles.buttonText}
      >{text}</Text>
      {/* <Text variant="displayLarge"></Text> */}

    </Button>
  );
}

export default TextButton;

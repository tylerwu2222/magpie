import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Button, Text, VariantProp } from 'react-native-paper';

import { Colors } from '@/assets/constants/Colors';

interface TextButtonProps {
  text: string;
  textSize: VariantProp<'displayLarge' | ' displayMedium' | ' displaySmall' | 'headlineLarge' | 'headlineMedium' | 'headlineSmall' | 'titleLarge' | 'titleMedium' | 'titleSmall' |
  'labelLarge' | ' labelMedium' | ' labelSmall' | 'bodyLarge' | ' bodyMedium' | ' bodySmall'>;
  // textSize: ;
  mode?: 'text' | 'outlined' | 'contained' | 'elevated' | 'contained-tonal';
  borderRadius?: number;
  borderWidth?: number;
  paddingVertical?: number;
  paddingHorizontal?: number;
  buttonColorDict?: {
    'default': string,
    'ripple': string,
    'toggle'?: string,
    'text'?: string
  };
  onPressFn: () => null;
}

const TextButton = ({
  text = 'button',
  textSize = 'bodyMedium',
  mode = 'contained',
  borderRadius = 20,
  paddingVertical = 0,
  paddingHorizontal = 0,
  buttonColorDict = Colors.lightButton
}: Partial<TextButtonProps>,
  onPressFn = () => { }

) => {

  const styles = StyleSheet.create({
    button: {
      borderRadius: borderRadius + paddingVertical,
    },
    buttonContent: {
      paddingVertical: paddingVertical,
      paddingHorizontal: paddingHorizontal,
    },
    buttonText: {
      color: buttonColorDict.text
    }
  });

  const [currButtonColor, setCurrButtonColor] = useState(buttonColorDict.default);
  return (
    <Button
      mode={mode}
      // textColor={buttonColorDict.text}
      buttonColor={currButtonColor}
      rippleColor={buttonColorDict.ripple}
      onPress={
        () => onPressFn
      }
      contentStyle={styles.buttonContent}
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

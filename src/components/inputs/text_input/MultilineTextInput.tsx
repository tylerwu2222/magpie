import { StyleSheet } from 'react-native';

import { TextField } from '@mui/material';
import { TextInput } from 'react-native-paper';
import styled from '@emotion/styled';

import React, { useState } from 'react';
import { Colors } from '@/assets/constants/Colors';

interface CustomMultilineTextInputProps {
    label: string | undefined;
    mode: 'flat' | 'outlined';
    placeholder: string;
    paddingHorizontal: number;
    // defaultValue: string;
    maxLen: number;
    isEditable: boolean;
    isDense: boolean;
    isMultiline: boolean;
    isRequired: boolean;
    // textColor: string;
    hasBorder: boolean;
    borderWidth: number;
    isFullWidth: boolean;
    textInputColor: {
        'text': string,
        'placeholder': string,
        'background': string
    }
    // borderColor: string;
}

const CustomMultilineTextInput = ({
    label = undefined,
    mode = 'flat',
    placeholder = '',
    paddingHorizontal = 0,
    // defaultValue = '',
    maxLen = 100,
    isEditable = true,
    isDense = true,
    isMultiline = false,
    isRequired = false,
    hasBorder = false, // equates to underline for flat text input
    borderWidth = 1,
    textInputColor = Colors.darkTextInput,
    isFullWidth = false
}: Partial<CustomMultilineTextInputProps>) => {

    const [textValue, setTextValue] = useState('');

    const styles = StyleSheet.create({
        textInput: {
            backgroundColor: textInputColor.background,
            paddingHorizontal: paddingHorizontal,
            fontSize: 12
        }
    });

    return (
        <TextInput
            label={label}
            mode={mode}
            placeholder={placeholder}

            selectionColor={textInputColor.text}
            cursorColor={textInputColor.text}
            theme={{ colors: { onSurfaceVariant: textInputColor.placeholder } }} // overrides placeholder color
            textColor={textInputColor.text}
            underlineColor={hasBorder ? textInputColor.placeholder : 'transparent'}
            activeUnderlineColor={hasBorder ? textInputColor.text : 'transparent'}

            value={textValue}
            onChangeText={text => setTextValue(text)}

            multiline={isMultiline}
            dense={isDense}

            style={styles.textInput}
        />
    )
}

export default CustomMultilineTextInput

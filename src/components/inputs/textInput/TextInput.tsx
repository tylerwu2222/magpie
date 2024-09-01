import { StyleSheet, ScrollView, ScrollViewComponent } from 'react-native';

// import { TextField } from '@mui/material';
import { TextInput } from 'react-native-paper';
// import styled from '@emotion/styled';

import React, { useState } from 'react';
import { Colors } from '@/assets/constants/Colors';

interface CustomTextInputProps {
    label: string | undefined,
    mode: 'flat' | 'outlined',
    placeholder: string,
    value: string | undefined,


    isEditable: boolean,
    isDense: boolean,
    isMultiline: boolean,
    isRequired: boolean,
    isFullWidth: boolean,
    hasBorder: boolean,
    isPassword: boolean,
    useAutocapitalize: 'none' | 'sentences' | 'words' | 'characters',

    startDisplayLines: number,
    endDisplayLines: number,
    fontSize: number,
    maxWidth: number | null,
    height: number | null,
    paddingHorizontal: number,
    paddingVertical: number,
    borderWidth: number,
    textInputColor: {
        'text': string,
        'placeholder': string,
        'background': string
    },
    maxLen: number,
    onChangeTextFn: (text: string) => void
    // borderColor: string;
}


const CustomTextInput = ({
    label = undefined,
    mode = 'flat',
    placeholder = '',
    value = '',

    isEditable = true,
    isDense = true,
    isMultiline = false,
    isRequired = false,
    isFullWidth = false,
    hasBorder = false, // equates to underline for flat text input
    isPassword = false,
    useAutocapitalize = 'none',

    startDisplayLines = 1,
    endDisplayLines = 100,
    maxWidth,
    fontSize = 12,
    height = null,
    paddingHorizontal = 0,
    paddingVertical = 0,
    borderWidth = 1,
    textInputColor = Colors.lightTheme.transparentTextInput,
    maxLen = 100,

    onChangeTextFn = () => { }
}: Partial<CustomTextInputProps>) => {

    // const [textValue, setTextValue] = useState(defaultValue);
    const [textHidden, setTextHidden] = useState(isPassword);

    const toggleTextVisibility = () => {
        setTextHidden(!textHidden);
    };

    const styles = StyleSheet.create({
        scrollContainer: {
            flex: 1,
            borderWidth: 1,
            borderColor: 'transparent',
            padding: 0
        },
        scrollContent: {
            padding: 0
            // paddingRight: 8, // Add padding to the right for custom scrollbar
        },
        textInput: {
            backgroundColor: textInputColor.background,
            paddingHorizontal: paddingHorizontal,
            paddingVertical: paddingVertical,
            // borderBlockColor: 'black',
            // height: height ? height : 1.5 * fontSize,
            fontSize: fontSize,
            minHeight: fontSize * startDisplayLines,
            // height: '80%',
            maxHeight: fontSize * endDisplayLines,
            maxWidth: maxWidth ? maxWidth : undefined
            // justifyContent: "center"
        }
    });
    const TextInputComponent = <TextInput
        label={label}
        mode={mode}
        // disabled={!isEditable}
        // editable={isEditable}
        placeholder={placeholder}
        // value={value}
        defaultValue={value}
        onChangeText={onChangeTextFn}

        selectionColor={textInputColor.text}
        cursorColor={textInputColor.text}
        theme={{ colors: { onSurfaceVariant: textInputColor.placeholder } }} // overrides placeholder color
        textColor={textInputColor.text}
        underlineColor={hasBorder ? textInputColor.placeholder : 'transparent'}
        activeUnderlineColor={hasBorder ? textInputColor.text : 'transparent'}
        multiline={isMultiline}
        autoCapitalize={useAutocapitalize}
        secureTextEntry={textHidden}
        right={
            isPassword?<TextInput.Icon 
            icon={textHidden ? 'eye-off' : 'eye'}
            onPress={toggleTextVisibility}
        />:<></>
        }

        // numberOfLines={startDisplayLines}
        dense={isMultiline ? false : isDense}
        style={styles.textInput}
    />;
    return TextInputComponent;
}

export default CustomTextInput

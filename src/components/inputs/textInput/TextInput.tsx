import { StyleSheet, ScrollView, ScrollViewComponent } from 'react-native';

import { TextField } from '@mui/material';
import { TextInput } from 'react-native-paper';
import styled from '@emotion/styled';

import React, { useState } from 'react';
import { Colors } from '@/assets/constants/Colors';

interface CustomTextInputProps {
    label: string | undefined;
    mode: 'flat' | 'outlined';
    placeholder: string;
    value: string;


    isEditable: boolean;
    isDense: boolean;
    isMultiline: boolean;
    isRequired: boolean;
    isFullWidth: boolean;
    hasBorder: boolean;

    fontSize: number,
    height: number | null,
    paddingHorizontal: number;
    paddingVertical: number;
    borderWidth: number;
    textInputColor: {
        'text': string,
        'placeholder': string,
        'background': string
    };
    maxLen: number;
    onChangeTextFn: (text: string) => void;
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

    fontSize = 12,
    height = null,
    paddingHorizontal = 0,
    paddingVertical = 0,
    borderWidth = 1,
    textInputColor = Colors.darkTextInput,
    maxLen = 100,

    onChangeTextFn = () => { }
}: Partial<CustomTextInputProps>) => {

    // const [textValue, setTextValue] = useState(defaultValue);

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
            flex: 1,
            backgroundColor: textInputColor.background,
            paddingHorizontal: paddingHorizontal,
            paddingVertical: paddingVertical,
            // height: height ? height : 1.5 * fontSize,
            fontSize: fontSize,
            // justifyContent: "center"
        }
    });
    const TextInputComponent = <TextInput
        label={label}
        mode={mode}
        disabled={!isEditable}
        editable={isEditable}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeTextFn}

        selectionColor={textInputColor.text}
        cursorColor={textInputColor.text}
        theme={{ colors: { onSurfaceVariant: textInputColor.placeholder } }} // overrides placeholder color
        textColor={textInputColor.text}
        underlineColor={hasBorder ? textInputColor.placeholder : 'transparent'}
        activeUnderlineColor={hasBorder ? textInputColor.text : 'transparent'}
        multiline={isMultiline}
        // numberOfLines={2}
        dense={isDense}
        style={styles.textInput}
    />;

    if (isMultiline) {
        return (
            <ScrollView
                style={styles.scrollContainer}
                contentContainerStyle={styles.scrollContent}
                scrollEnabled={false}
                showsVerticalScrollIndicator={false} // Hide default scroll indicator
            >
                {TextInputComponent}
            </ScrollView>
        )
    }
    return TextInputComponent;
}

export default CustomTextInput

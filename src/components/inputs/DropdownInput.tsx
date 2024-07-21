import { StyleSheet, Text, View } from 'react-native';

import React from 'react';

interface DropdownInputProps {
    label: string | null;
    defaultOption?: string;
    options?: Array<string>;
}

const DropdownInput = ({
    label = null,
    defaultOption = '--select--',
    options = ['--select--','option 1', 'option 2']
}: DropdownInputProps) => {
    return (
        <View style={styles.dropdownInputView}>
            {label && <Text>{label}</Text>}
            {/* dropdown field */}
        </View>
    )
}

export default DropdownInput

const styles = StyleSheet.create({
    dropdownInputView: {

    }
})
import { StyleSheet, Text, View } from 'react-native'
import React, { Dispatch, SetStateAction } from 'react'
import { Switch } from 'react-native-paper'
import { Colors } from '@/assets/constants/Colors'

interface switchInputProps {
    switchLabel: string,
    switchColor: string,
    switchValue: boolean,
    onSwitchChangeFn: () => void
}

const SwitchInput = ({
    switchLabel = 'label',
    switchValue,
    switchColor = Colors.accentBlueButtonFilled.default,
    onSwitchChangeFn
}: Partial<switchInputProps>) => {
    return (
        <View style={styles.switchContainer}>
            <Text>{switchLabel}</Text>
            <Switch value={switchValue} onValueChange={onSwitchChangeFn} color={switchColor} />
        </View>
    )
}

export default SwitchInput

const styles = StyleSheet.create({
    switchContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})
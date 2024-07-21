import React, { ReactElement, useState } from 'react';
import { StyleSheet } from 'react-native';

import { IconButton } from 'react-native-paper';

// icon component
import { Colors } from '@/assets/constants/Colors';
import ExpoIcon from '../../icons/ExpoIcon';

interface CustomIconButtonProps {
    // iconComponent: any;
    iconComponent: string | ReactElement;
    isDisabled?: boolean;
    // muiIcon: string,
    text?: string | null,
    mode?: 'outlined' | 'contained' | 'contained-tonal';
    // isCircle?: boolean;
    iconSize?: number;
    hasBorder?: boolean;
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
    onPressFn?: () => void;
}


const CustomIconButton = ({
    iconComponent = <ExpoIcon />,
    isDisabled = false,
    text = null,
    mode = 'contained',
    iconSize = 50,
    borderRadius = 10,
    borderWidth = 1,
    paddingVertical = 0,
    paddingHorizontal = 0,
    buttonColorDict = Colors.transparentButton,
    onPressFn = () => { },
}: CustomIconButtonProps) => {

    const [currButtonColor, setCurrButtonColor] = useState(buttonColorDict.default);

    const styles = StyleSheet.create({
        button: {
            // justifyContent: 'center',
            // alignItems: 'center',
            borderRadius: borderRadius,
        },
        buttonContent: {
            paddingVertical: paddingVertical,
            paddingHorizontal: paddingHorizontal,
        }
    })

    if (React.isValidElement(iconComponent)) {
        return (
            <IconButton
                icon={() => iconComponent}
                disabled={isDisabled}
                mode={mode}
                iconColor={buttonColorDict.text}
                containerColor={currButtonColor}
                rippleColor={buttonColorDict.ripple}
                onPress={
                    () => onPressFn
                }
                // contentStyle={styles.buttonContent}
                style={styles.button}
            >
            </IconButton>

        )
    }
    else if (typeof iconComponent == 'string') {
        return (
            <IconButton
                icon={iconComponent}
                disabled={isDisabled}
                mode={mode}
                iconColor={buttonColorDict.text}
                containerColor={currButtonColor}
                rippleColor={buttonColorDict.ripple}
                onPress={
                    () => onPressFn
                }
                // contentStyle={styles.buttonContent}
                style={styles.button}
            >
            </IconButton>
        )
    }


}

export default CustomIconButton;
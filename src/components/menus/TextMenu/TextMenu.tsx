import { StyleSheet, Text } from 'react-native'
import React, { ReactNode } from 'react'

import { Button, Menu, Divider } from 'react-native-paper';
import { textComponentColorDict } from '@/src/types/components';
import { Colors } from '@/assets/constants/Colors';

interface TextMenuProps {
    visible: boolean;
    menuItems: string[];
    menuItemsOnPresses?: Array<() => void>;

    anchorElement: ReactNode;
    anchorPosition?: 'top' | 'bottom';

    menuColorDict: textComponentColorDict;

    onDismissFn: () => void;

}

const TextMenu = ({
    visible = false,

    menuItems = ['item 1'],
    menuItemsOnPresses = [() => { console.log('item 1 pressed') }],

    anchorElement = <Button>default anchor</Button>,
    anchorPosition = 'bottom',

    menuColorDict = Colors.lighterButton,

    onDismissFn = () => { }
}: Partial<TextMenuProps>) => {


    const styles = StyleSheet.create({
        menu: {
            backgroundColor: menuColorDict.default,

        },
        menuText: {
            color: menuColorDict.text
        },
        menuDivider: {
            backgroundColor: menuColorDict.toggle
        }
    })


    return (
        // <Text>p</Text>
        <Menu
            visible={visible}
            onDismiss={() => {
                onDismissFn();
            }}
            anchor={anchorElement}
            anchorPosition={anchorPosition}
            contentStyle={styles.menu}
        // theme={{ colors: { primary: menuColorDict.default } }}
        >
            {menuItems.map((item, index) => {
                return (
                    <>
                        <Menu.Item
                            onPress={menuItemsOnPresses[index]}
                            title={item}
                            titleStyle={styles.menuText}
                        />
                        {
                            index < menuItems.length - 1 ?
                                <Divider
                                    style={styles.menuDivider} /> :
                                <></>
                        }
                    </>
                )

            })}
        </Menu>
    )
}

export default TextMenu

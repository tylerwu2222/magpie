import { StyleSheet, Text } from 'react-native'
import React, { useState } from 'react'

// import ImageButton from '@/src/components/buttons/ImageButton/ImageButton'
import ImageTextButton from '@/src/components/buttons/ImageTextButton/ImageTextButton';
import TextMenu from '@/src/components/menus/TextMenu/TextMenu';


import { Colors } from '@/assets/constants/Colors'
import { textComponentColorDict } from '@/src/types/components';
// import { random_image_url } from '@/src/apis/unsplash'


interface BubbleCollectionIconProps {
    collectionName: string;
    buttonColorDict: textComponentColorDict;
    menuColorDict: textComponentColorDict;
}


const BubbleCollectionIcon = ({
    collectionName = 'collection',
    buttonColorDict = Colors.transparentButton,
    menuColorDict = Colors.darkButton
}: Partial<BubbleCollectionIconProps>) => {

    const [menuVisible, setMenuVisible] = useState(false);

    // collection button menu items
    const menuItems = ['rename', 'add to..', 'delete']
    const menuItemsOnPresses = menuItems.map(i => {
        return () => { console.log('pressed menu item', i,) };
    })

    return (
        <>
            <TextMenu
                visible={menuVisible}
                menuItems={menuItems}
                menuItemsOnPresses={menuItemsOnPresses}
                onDismissFn={() => setMenuVisible(false)}
                anchorElement={
                    <ImageTextButton
                        imageSource={require('@/assets/images/templateImages/birds.png')}
                        imageSize={70}
                        text={collectionName}

                        // isCircle = true,
                        hasBorder={true}

                        borderRadius={10}
                        borderWidth={1}
                        fontSize={12}
                        buttonColorDict={buttonColorDict}

                        onPressFn={() => {
                            console.log('opening collection', collectionName)
                        }}
                        onLongPressFn={() => {
                            // show menu
                            setMenuVisible(true);
                        }}
                    />
                }
                menuColorDict={menuColorDict}
            />

        </>
    )
}

export default BubbleCollectionIcon;

const styles = StyleSheet.create({})
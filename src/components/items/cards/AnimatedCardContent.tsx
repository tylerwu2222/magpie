import { View, StyleSheet } from 'react-native';
import React, { ReactElement, Dispatch, SetStateAction } from 'react'

// import { Card } from 'react-native-paper';
import { MotiView } from 'moti';

import CustomTextInput from '../../inputs/textInput/TextInput';

import { cardDimensions } from '@/assets/constants/magpieDimensions';
import { Colors } from '@/assets/constants/Colors';

import { entryDataType } from '@/src/types/data';

interface AnimatedCardContentProps {
    entryData: entryDataType | undefined,
    topRightCardIcons: Array<ReactElement>,
    bottomCardIcons: Array<ReactElement>,
    title: string | undefined,
    subtitle: string | undefined,
    description: string | undefined,
    titleChangeFn: (text: string) => void,
    subtitleChangeFn: (text: string) => void,
    descriptionChangeFn: (text: string) => void,

    showPlaceholders: boolean,
    isEditable: boolean,
    hasImage: boolean,
    // styles: any
}

export default function AnimatedCardContent({
    entryData,
    topRightCardIcons = [],
    bottomCardIcons = [],
    title,
    subtitle,
    description,
    titleChangeFn,
    subtitleChangeFn,
    descriptionChangeFn,
    showPlaceholders = true,
    isEditable = false,
    hasImage = false,
    // styles
}: Partial<AnimatedCardContentProps>) {
    const styles = StyleSheet.create({
        animatableCardContentView: {
            borderWidth: 0,
            paddingTop: 20
        },
        topRightIconsView: {
            position: 'absolute',
            top: 0,
            right: 0,
            zIndex: 3
        },
        bottomIconsView: {
            position: 'absolute',
            bottom: 0,
            right: 0,
            zIndex: 3,
            display: 'flex',
            flexDirection: 'row'
        }
    })

    

    return (
        <>
            <MotiView
                style={styles.animatableCardContentView}
            >
                {topRightCardIcons ? <View style={styles.topRightIconsView}>

                    {
                        topRightCardIcons.map((icon, index) => {
                            return <View key={index}>
                                {icon}
                            </View>
                        })
                    }
                </View> : <></>}
                <CustomTextInput
                    placeholder={showPlaceholders ? 'Title' : ''}
                    value={entryData?.title ? entryData.title : title}
                    textInputColor={Colors.lightTheme.transparentTextInput}
                    paddingHorizontal={8} // match default of Card.Title
                    fontSize={cardDimensions.titleFontSize}
                    isEditable={isEditable}
                    onChangeTextFn={titleChangeFn}
                />
                <CustomTextInput
                    placeholder={showPlaceholders ? 'Subtitle' : ''}
                    value={entryData?.subtitle ? entryData.subtitle : subtitle}
                    textInputColor={Colors.lightTheme.transparentTextInput}
                    paddingHorizontal={8}
                    fontSize={cardDimensions.subtitleFontSize}
                    isEditable={isEditable}
                    onChangeTextFn={subtitleChangeFn}
                />
                <CustomTextInput
                    placeholder={showPlaceholders ? 'Description' : ''}
                    value={entryData?.description ? entryData.description : description}
                    textInputColor={Colors.lightTheme.transparentTextInput}
                    isEditable={isEditable}
                    isMultiline={true}
                    fontSize={cardDimensions.textFontSize}
                    paddingHorizontal={8}
                    onChangeTextFn={descriptionChangeFn}
                />
                {bottomCardIcons ?
                    <View style={styles.bottomIconsView}>
                        {bottomCardIcons.map((icon, index) => {
                            return <View key={index}>{icon}</View>
                        })}
                    </View> :
                    <></>
                }
            </MotiView>
        </>
    )
}
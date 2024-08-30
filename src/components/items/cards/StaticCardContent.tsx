import { View, Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';
import CustomTextInput from '../../inputs/textInput/TextInput';
import { cardDimensions } from '@/assets/constants/magpieDimensions';
import { Colors } from '@/assets/constants/Colors';
import React, { ReactElement, Dispatch, SetStateAction } from 'react'
import { entryDataType } from '@/src/types/data';

interface StaticCardContentProps {
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
    styles: any
}

export default function StaticCardContent({
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
    styles
}: Partial<StaticCardContentProps>) {
    const additionalStyles = StyleSheet.create({
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
            zIndex: 3
        }
    })

    return (
        <View>
            <View style={styles.cardContent}>
                <Text
                    style={styles.cardTitle}
                >{entryData?.title ? entryData.title : title}</Text>
                <Text
                    style={styles.cardSubtitle}
                >{entryData?.subtitle ? entryData.subtitle : subtitle}</Text>
                <Text
                    style={styles.cardDescription}
                >
                    {entryData?.description ? entryData.description : description}
                </Text>
            </View>
            {/* card image */}
            {hasImage ? <Card.Content style={[styles.cardContent, styles.cardLastContent]}>
                <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
            </Card.Content> : <></>}
            {/* bottom card actions */}
            {bottomCardIcons ?
                <View style={additionalStyles.bottomIconsView}>
                    <Card.Actions>
                        <>
                            {bottomCardIcons.map((icon, index) => {
                                return <View key={index}>{icon}</View>
                            })}
                        </>
                    </Card.Actions>
                </View> :
                <></>
            }
        </View>
    )
}
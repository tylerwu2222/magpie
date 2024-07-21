import { StyleSheet } from 'react-native';
import React, { useState, useContext } from 'react';
import AppContext from '@/AppContextProvider';
import BlurOverlayContext from '@/src/providers/OverlayProviders/BlurOverlayProvider';

// components
import { Card } from 'react-native-paper'
import TextInput from '../../../inputs/textInput/TextInput';
import AddIconButton from '../../../buttons/common_icon_buttons/AddIconButton';
import FavoriteIconButton from '../../../buttons/common_icon_buttons/FavoriteIconButton';
import ShareIconButton from '../../../buttons/common_icon_buttons/ShareIconButton';
import EditableCardModal from '@/src/components/modals/EditableCardModal/EditableCardModal';

// styles
import { Colors } from '@/assets/constants/Colors';
import { cardDimensions } from '@/assets/constants/magpieDimensions';

// data
// import dummyCollection from '@/assets/data/dummyData/dummyCollection.json';
import { entryDataType } from '@/src/types/data';

interface StaticCardProps {
  entryID: number,
  entryData: entryDataType,
  mode: 'elevated' | 'outlined' | 'contained',
  imageSource?: string,

  isSharable?: boolean,
  isInteractable?: boolean,
  isDraggable?: boolean,

  cardColorDict?: {
    'background': string,
    'border': string,
    'text'?: string
  },
  cardPaddingHorizontal?: number,
  cardPaddingVertical?: number,
  onPressFn: () => void,
  onLongPressFn: () => void,
  // additionalStyle?: React.CSSProperties
  additionalStyle?: any
}

const StaticCard = (
  {
    entryID = 0,
    entryData = {},
    mode = 'outlined',
    imageSource = '',

    isSharable = true,
    isInteractable = true,
    isDraggable = false,

    cardColorDict = Colors.lightCard,
    cardPaddingHorizontal = 10,
    cardPaddingVertical = 10,
    onPressFn = () => { },
    onLongPressFn = () => { },
    additionalStyle
  }: Partial<StaticCardProps>
) => {
  /**
   * non-editable, card, can be dragged?
   */

  const [editableCardVisible, setEditableCardVisible] = useState(false);

  const {
    setEditEntryID
  } = useContext(AppContext);

  const {
    showBlurOverlay
  } = useContext(BlurOverlayContext);

  const styles = StyleSheet.create({
    card: {
      backgroundColor: cardColorDict.background,
      borderColor: cardColorDict.border,
      borderRadius: cardDimensions.borderRadius,
      // minWidth: 260,
      width: cardDimensions.width,
      height: cardDimensions.height
    },
    cardTitle: {
      color: cardColorDict.text
    },
    cardContent: {
      color: cardColorDict.text,
      paddingHorizontal: cardPaddingHorizontal,
      paddingVertical: cardPaddingVertical
    },
    cardLastContent: {
      paddingVertical: 0
    }
  })

  // text input should only be editable when card clicked --> modal/focus mode
  return (
    <>
      {editableCardVisible ? <EditableCardModal
        entryID={entryID}
        entryData={entryData}
        visible={editableCardVisible}
        modalDismissFn={() => {
          console.log('setting card visibility to false');
          setEditableCardVisible(false);
        }} /> : <></>}
      <Card
        mode={mode}
        onPress={() => {
          if (isInteractable) {
            // toggle active modal card
            if (setEditEntryID) {
              setEditEntryID(entryID); // replace with actual ID later
            }
            setEditableCardVisible(true);
            showBlurOverlay();
            onPressFn();
          }
        }}
        onLongPress={onLongPressFn}
        style={[styles.card, additionalStyle]}
      >
        {/* <Card.Title
          title={entryData.title}
          titleStyle={styles.cardTitle}
          titleVariant='headlineMedium'
          subtitle={entryData.subtitle}
          subtitleStyle={styles.cardTitle}
          subtitleVariant='titleMedium'
        /> */}
        <Card.Content style={styles.cardContent}>
          <TextInput
            value={entryData.title}
            textInputColor={Colors.darkTextInput}
            paddingHorizontal={8} // match default of Card.Title
            fontSize={28}
            isEditable={false}
          />
          <TextInput
            value={entryData.subtitle}
            textInputColor={Colors.darkTextInput}
            paddingHorizontal={8} // match default of Card.Title
            fontSize={16}
            isEditable={false}
          />
          <TextInput
            placeholder='add something...'
            value={entryData.description}
            textInputColor={Colors.darkTextInput}
            isEditable={false}
            isMultiline={true}
            paddingHorizontal={8} // match default of Card.Title
          />
        </Card.Content>
        <Card.Content style={[styles.cardContent, styles.cardLastContent]}>
          <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        </Card.Content>
        {/* replace local w online */}
        <Card.Actions>
          {isInteractable ?
            <>
              <FavoriteIconButton />
              <AddIconButton />
              {isSharable ? <ShareIconButton /> : <></>}
            </> :
            <></>
          }
        </Card.Actions>
      </Card >
    </>
  )
}

export default StaticCard

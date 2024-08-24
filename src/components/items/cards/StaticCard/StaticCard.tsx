import { StyleSheet } from 'react-native';
import React, { useState, useContext } from 'react';
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
import CardContent from '../CardContent';
import { HomeContext } from '@/app/home';

interface StaticCardProps {
  entryData: entryDataType | undefined,
  mode: 'elevated' | 'outlined' | 'contained',
  imageSource?: string,

  hasImage: boolean,
  isSharable: boolean,
  isInteractable: boolean,
  isDraggable: boolean,

  cardColorDict: {
    'background': string,
    'border': string,
    'text'?: string
  },
  cardPaddingHorizontal: number,
  cardPaddingVertical: number,
  onPressFn: () => void,
  onLongPressFn: () => void,
  // additionalStyle?: React.CSSProperties
  additionalStyle: any
}

// static card, opens editable card if interactable
const StaticCard = (
  {
    entryData,
    mode = 'outlined',
    imageSource = '',

    hasImage = false,
    isSharable = true,
    isInteractable = false,
    isDraggable = false,

    cardColorDict = Colors.lightCard,
    cardPaddingHorizontal = 10,
    cardPaddingVertical = 10,
    onPressFn = () => { },
    onLongPressFn = () => { },
    additionalStyle
  }: Partial<StaticCardProps>
) => {

  const [editableCardModalVisible, setEditableCardModalVisible] = useState(false);

  // const {
  //   showBlurOverlay
  // } = useContext(BlurOverlayContext);

  // const cardIcons = [
  //   // <FavoriteIconButton contentSize={20} />,
  //   <AddIconButton contentSize={20} />,
  //   <ShareIconButton contentSize={20} />];

  const styles = StyleSheet.create({
    card: {
      backgroundColor: cardColorDict.background,
      borderColor: cardColorDict.border,
      borderRadius: cardDimensions.borderRadius,
      borderTopLeftRadius: 0,
      borderBottomRightRadius: 0,
      // minWidth: 260,
      width: cardDimensions.width,
      maxHeight: cardDimensions.height,
      margin: 5,
      overflow: 'hidden'
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

  const { fetchSetNotes } = useContext(HomeContext);

  // make ECM visible on click (if interactable)
  return (
    <>
      <EditableCardModal
        entryData={entryData}
        visible={editableCardModalVisible}
        modalDismissFn={() => {
          setEditableCardModalVisible(false); // close modal
          fetchSetNotes(); // update all notes if changes made
        }}
        fullScreen={true}
      />
      <Card
        mode={mode}
        onPress={() => {
          if (isInteractable) {
            setEditableCardModalVisible(true);
            onPressFn();
          }
        }}
        onLongPress={onLongPressFn}
        style={[styles.card, additionalStyle]}
      >
        <CardContent
          entryData={entryData}
          // bottomCardIcons={cardIcons}
          showPlaceholders={false}
          hasImage={hasImage}
          styles={styles}
        />
      </Card >
    </>
  )
}

export default StaticCard

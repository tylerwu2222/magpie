import { StyleSheet, View } from 'react-native';
import React, { useState, useRef, useContext } from 'react';
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
import StaticCardContent from '../StaticCardContent';
import { HomeContext } from '@/app/home';
import DraggableCardModal from '@/src/components/modals/DraggableCardModal/DraggableCardModal';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';

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
  onPressOutFn: () => void,
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
    onPressOutFn = () => { },
    additionalStyle
  }: Partial<StaticCardProps>
) => {

  const [editableCardModalVisible, setEditableCardModalVisible] = useState(false);
  const [draggableCardModalVisible, setDraggableCardModalVisible] = useState(false);
  // const staticCardRef = useRef<View | null>(null);
  const { fetchSetNotes } = useContext(HomeContext);
  // const [cardPosition, setCardPosition] = useState({ x: 0, y: 0, width: 0, height: 0 });
  const [cardPosition, setCardPosition] = useState({ x: 0, y: 0 });

  // const {
  //   showBlurOverlay
  // } = useContext(BlurOverlayContext);

  const styles = StyleSheet.create({
    card: {
      backgroundColor: draggableCardModalVisible ? Colors.lightCardDisabled.background : cardColorDict.background,
      // borderColor: 'transparent',
      borderColor: draggableCardModalVisible ? Colors.lightCardDisabled.border : cardColorDict.border,
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


  const longPress = Gesture.LongPress()
    .onBegin((e) => {
      // console.log('static card long pressed');
      setCardPosition({ x: e.absoluteX, y: e.absoluteY });
    });

  const pan = Gesture.Pan()
    .onBegin((e) => {
      // console.log('static card panned');
      setCardPosition({ x: e.absoluteX, y: e.absoluteY });
    })
    .onChange((e) => {
      setCardPosition({ x: e.absoluteX, y: e.absoluteY });
    })
    .onEnd(() => {
      setCardPosition({ x: 0, y: 0 });
    })
    ;

  const composed = Gesture.Simultaneous(longPress, pan)

  // make ECM visible on click (if interactable)
  return (
    <>
      <GestureDetector
        // gesture={longPress}
        gesture={composed}
      >
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
          <DraggableCardModal
            entryData={entryData}
            visible={draggableCardModalVisible}
            // visible={true}
            modalDismissFn={() => {
              // setDraggableCardModalVisible(false);
              fetchSetNotes();
            }}
            // startingPosition={getCurrentPosition()}
            cardPosition={cardPosition}
          />
          <Card
            mode={mode}
            onPress={() => {
              if (isInteractable) {
                setEditableCardModalVisible(true);
                onPressFn();
              }
            }}
            onLongPress={() => {
              if (isInteractable) {
                setDraggableCardModalVisible(true);
                onLongPressFn();
              }
            }}
            onPressOut={() => {
              if (isInteractable) {
                setDraggableCardModalVisible(false);
                onPressOutFn();
              }
            }}
            style={[styles.card, additionalStyle]}
          >
            <StaticCardContent
              entryData={entryData}
              // bottomCardIcons={cardIcons}
              showPlaceholders={false}
              hasImage={hasImage}
              styles={styles}
            />
          </Card >
        </>
      </GestureDetector>
    </>
  )
}

export default StaticCard

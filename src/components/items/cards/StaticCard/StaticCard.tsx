import { StyleSheet, } from 'react-native';
import React, { useState, useContext } from 'react';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { runOnJS } from 'react-native-reanimated';
import { HomeContext } from '@/app/home';

// components
import EditableCardModal from '@/src/components/modals/EditableCardModal/EditableCardModal';
import DraggableCardModal from '@/src/components/modals/DraggableCardModal/DraggableCardModal';
import StaticCardContent from '../StaticCardContent';

// styles
import { Colors } from '@/assets/constants/Colors';
import { magpieDimensions, cardDimensions, draggableCardShrink, largerButtonSize } from '@/assets/constants/magpieDimensions';

// types
import { entryDataType } from '@/src/types/data';
import { timeToHex } from '@/src/scripts/data/colorFunctions';
import { MotiView } from 'moti';


interface StaticCardProps {
  entryData: entryDataType | undefined,
  mode: 'elevated' | 'outlined' | 'contained',
  imageSource?: string,

  hasImage: boolean,
  isSharable: boolean,
  isInteractable: boolean,
  isDraggable: boolean,
  hasCornerActions: boolean,
  cornerActions: {
    topLeftFn: () => void,
    topRightFn: () => void,
    bottomLeftFn: () => void,
    bottomRightFn: () => void,
  },

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
  additionalStyle: any
}


// check for each corner
const cornerCoordinates = {
  top: largerButtonSize,
  bottom: magpieDimensions.vh - largerButtonSize,
  left: largerButtonSize,
  right: magpieDimensions.vw - largerButtonSize
};
const halfCardWidth = cardDimensions.width * draggableCardShrink / 2;
const halfCardHeight = cardDimensions.height * draggableCardShrink / 2;

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
    hasCornerActions = true,
    cornerActions = {
      topLeftFn: () => { },
      topRightFn: () => { },
      bottomLeftFn: () => { },
      bottomRightFn: () => { },
    },

    cardColorDict = Colors.lightCard,
    cardPaddingHorizontal = 10,
    cardPaddingVertical = 10,
    onPressFn = () => { },
    onLongPressFn = () => { },
    onPressOutFn = () => { },
    additionalStyle
  }: Partial<StaticCardProps>
) => {

  // modals
  const [editableCardModalVisible, setEditableCardModalVisible] = useState(false);
  const [draggableCardModalVisible, setDraggableCardModalVisible] = useState(false);

  const {
    fetchSetNotes,
    setIsDraggableHoveringDelete,
    isDraggableHoveringDelete
  } = useContext(HomeContext);

  const [cardPosition, setCardPosition] = useState({ x: 0, y: 0 });

  // console.log('SC entry data', entryData);
  const getTimedColor = (color: string) => {
    if (entryData?.updated_at) {
      return timeToHex(
        entryData?.updated_at,
        color,
        7
      )
    }
    return color;

  };

  const styles = StyleSheet.create({
    card: {
      backgroundColor: draggableCardModalVisible ? Colors.lightCardDisabled.background : getTimedColor(cardColorDict.background),
      borderWidth: 1,
      borderColor: draggableCardModalVisible ? Colors.lightCardDisabled.border : cardColorDict.border,
      borderRadius: cardDimensions.borderRadius,
      borderTopLeftRadius: 0,
      borderBottomRightRadius: 0,
      width: cardDimensions.width,
      maxHeight: cardDimensions.height,
      margin: 5,
      overflow: 'hidden',
      // pointerEvents: 'none'
    },
    cardTitle: {
      color: cardColorDict.text,
      fontSize: cardDimensions.titleFontSize

    },
    cardSubtitle: {
      color: cardColorDict.text,
      fontSize: cardDimensions.subtitleFontSize

    },
    cardDescription: {
      color: cardColorDict.text,
      fontSize: cardDimensions.textFontSize
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

  const changeCardCornerAction = (x: number, y: number) => {
    if ((x + halfCardWidth) > cornerCoordinates.right && (y - halfCardHeight) < cornerCoordinates.top) {
      // console.log('hovering delete!');
      setIsDraggableHoveringDelete(true);
    }
    else {
      setIsDraggableHoveringDelete(false);
    }
  }

  const exitCardCornerAction = (x: number, y: number) => {
    // console.log('end coords top left', x - halfCardWidth, y - halfCardHeight);
    // console.log('coords', cornerCoordinates);

    // top left
    if ((x - halfCardWidth) < cornerCoordinates.left && (y - halfCardHeight) < cornerCoordinates.top) {
      // console.log('top left activated')
      cornerActions.topLeftFn();
    }
    // top right
    else if ((x + halfCardWidth) > cornerCoordinates.right && (y - halfCardHeight) < cornerCoordinates.top) {
      // console.log('top right activated')
      cornerActions.topRightFn();
    }
    // bottom left
    else if ((x - halfCardWidth) < cornerCoordinates.left && (y + halfCardHeight) > cornerCoordinates.bottom) {
      // console.log('bottom left activated')
      cornerActions.bottomLeftFn();
    }
    // bottom right
    else if ((x + halfCardWidth) > cornerCoordinates.right && (y + halfCardHeight) > cornerCoordinates.bottom) {
      // console.log('bottom right activated')
      cornerActions.bottomRightFn();
    }
  };

  const tap = Gesture.Tap()
    .onStart(() => {
      if (isInteractable) {
        // console.log('setting ECM visible')
        runOnJS(setEditableCardModalVisible)(true);
        runOnJS(onPressFn);
      }
    });

  const panDelay = 100;
  const pan = Gesture.Pan().activateAfterLongPress(panDelay)
    .onStart((e) => {
      runOnJS(setDraggableCardModalVisible)(true); // set draggable card visible
      runOnJS(onLongPressFn)(); // show corner actions
    })
    .onChange((e) => {
      runOnJS(changeCardCornerAction)(e.absoluteX, e.absoluteY);
      // update card position
      runOnJS(setCardPosition)({ x: e.absoluteX, y: e.absoluteY });
    })
    .onEnd((e) => {
      // console.log('SC pan end');
      // check if card position is at corner
      if (hasCornerActions && draggableCardModalVisible) {
        runOnJS(exitCardCornerAction)(e.absoluteX, e.absoluteY);
      }
      // reset modal and card position
      runOnJS(onPressOutFn)(); // hide corner actions
      runOnJS(setDraggableCardModalVisible)(false);
      // runOnJS(setCardPosition)({ x: 0, y: 0 });
    });

  const composed = Gesture.Race(pan, tap);

  // handle gestures based on draggable prop
  return (
    <>
      <GestureDetector
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
            isHoveringDelete={isDraggableHoveringDelete}
          />
          {/* static card content */}
          <MotiView style={[styles.card, additionalStyle]}>
            <StaticCardContent
              entryData={entryData}
              // bottomCardIcons={cardIcons}
              showPlaceholders={false}
              hasImage={hasImage}
              styles={styles}
            />
          </MotiView>
        </>
      </GestureDetector>
    </>
  )
}

export default StaticCard

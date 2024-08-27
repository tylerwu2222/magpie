import { StyleSheet } from 'react-native';
import React, { useState, useContext, useEffect } from 'react';
// import BlurOverlayContext from '@/src/providers/OverlayProviders/BlurOverlayProvider';

// components
import { Portal } from 'react-native-paper';
import { MotiPressable } from 'moti/interactions';
import AnimatedCardContent from '../AnimatedCardContent';
import EditableCardModal from '@/src/components/modals/EditableCardModal/EditableCardModal';
import { PanGestureHandler, PanGestureHandlerGestureEvent, GestureDetector, GestureEvent, Gesture } from 'react-native-gesture-handler';

// styles
import { Colors } from '@/assets/constants/Colors';
import { cardDimensions, magpieDimensions, draggableCardShrink } from '@/assets/constants/magpieDimensions';

// data
// import dummyCollection from '@/assets/data/dummyData/dummyCollection.json';
import { entryDataType } from '@/src/types/data';
import { HomeContext } from '@/app/home';


interface DraggableCardProps {
  entryData: entryDataType | undefined,
  // imageSource?: string,

  // hasImage: boolean,
  isSharable: boolean,
  isInteractable: boolean,

  cardColorDict: {
    'background': string,
    'border': string,
    'text'?: string
  },
  cardPosition: { x: number, y: number },
  cardPaddingHorizontal: number,
  cardPaddingVertical: number,
  onPressFn: () => void,
  onLongPressFn: () => void,
  onPressOutFn: () => void,
  longPressDuration: number,
  isHoveringDelete: boolean,
  // additionalStyle: any
}

// static card, opens editable card if interactable
const DraggableCard = (
  {
    entryData,
    // imageSource = '',

    // hasImage = false,
    isSharable = true,
    isInteractable = false,

    cardColorDict = Colors.lightCard,
    cardPosition = { x: 0, y: 0 },
    cardPaddingHorizontal = 10,
    cardPaddingVertical = 10,
    onPressFn = () => { },
    onLongPressFn = () => { },
    onPressOutFn = () => { },
    longPressDuration = 500,
    isHoveringDelete = false,
    // additionalStyle
  }: Partial<DraggableCardProps>
) => {

  // const [editableCardModalVisible, setEditableCardModalVisible] = useState(false);

  // const {
  //   showBlurOverlay
  // } = useContext(BlurOverlayContext);  

  const styles = StyleSheet.create({
    card: {
      position: 'absolute',
      top: cardPosition.y - cardDimensions.height * 2,
      left: cardPosition.x - cardDimensions.width / 2,
      backgroundColor: cardColorDict.background,
      borderWidth: 1,
      // borderColor: cardColorDict.border,
      borderRadius: cardDimensions.borderRadius,
      borderTopLeftRadius: 0,
      borderBottomRightRadius: 0,
      // minWidth: 260,
      width: cardDimensions.width,
      maxHeight: cardDimensions.height,
      margin: 5,
      overflow: 'hidden',
      pointerEvents: 'none'
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

  const { isDraggableHoveringDelete } = useContext(HomeContext);
  const [isLongPressed, setIsLongPressed] = useState<boolean>(true);

  const handleBorderColor = () => {
    if (isLongPressed) {
      if (isHoveringDelete) {
        return Colors.lightCardDelete.border;
      }
      else {
        return cardColorDict.border;
      }
    }
    return 'transparent';
  };

  const handleBackgroundColor = () => {
    if (isLongPressed) {
      if (isHoveringDelete) {
        return Colors.lightCardDelete.background;
      }
    }
    return cardColorDict.background;;
  }

  return (<>
    <MotiPressable
      onLongPress={() => {
        setIsLongPressed(true);
        onLongPressFn();
      }}
      onPressOut={() => {
        setIsLongPressed(false);
        onPressOutFn();
      }}
      from={{
        scale: 1,
        borderColor: 'transparent',
        opacity: 1,
        // backgroundColor: 'lightblue'
        // position: 'relative'
      }}
      animate={{
        scale: isLongPressed ? draggableCardShrink : 1,
        borderColor: handleBorderColor(),
        opacity: isLongPressed ? 0.8 : 1,
        backgroundColor: handleBackgroundColor(),
        // position: isLongPressed ? 'absolute': 'relative'
      }}
      transition={{
        type: 'spring'
      }}
      style={styles.card}
    >
      <AnimatedCardContent
        entryData={entryData}
        // bottomCardIcons={cardIcons}
        showPlaceholders={false}
      // styles={styles}
      />
    </MotiPressable>
  </>
  );
}

export default DraggableCard

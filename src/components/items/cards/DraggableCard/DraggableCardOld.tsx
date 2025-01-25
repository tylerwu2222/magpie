import { StyleSheet } from 'react-native';
import React, { useState, useContext } from 'react';
// import BlurOverlayContext from '@/src/providers/OverlayProviders/BlurOverlayProvider';

// components
import { Portal } from 'react-native-paper';
import { MotiPressable } from 'moti/interactions';
import AnimatedCardContent from '../AnimatedCardContent';
import EditableCardModal from '@/src/components/modals/card_modals/EditableCardModal/EditableCardModal';
import { PanGestureHandler, PanGestureHandlerGestureEvent } from 'react-native-gesture-handler';

// styles
import { Colors } from '@/assets/constants/Colors';
import { cardDimensions } from '@/assets/constants/magpieDimensions';

// data
// import dummyCollection from '@/assets/data/dummyData/dummyCollection.json';
import { entryDataType } from '@/src/types/data';
import { HomeContext } from '@/app/home';


interface DraggableCardProps {
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
  longPressDuration: number,
  // additionalStyle?: React.CSSProperties
  additionalStyle: any
}

// static card, opens editable card if interactable
const DraggableCardOld = (
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
    longPressDuration = 500,
    additionalStyle
  }: Partial<DraggableCardProps>
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
      borderWidth: 1,
      // borderColor: cardColorDict.border,
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
  const [isLongPressed, setIsLongPressed] = useState<boolean>(false);
  const [translateX, setTranslateX] = useState(0);
  const [translateY, setTranslateY] = useState(0);

  // only translate if long press activated
  const onGestureEvent = (event: PanGestureHandlerGestureEvent) => {
    if (isLongPressed) {
      setTranslateX(event.nativeEvent.translationX);
      setTranslateY(event.nativeEvent.translationY);
    }
  };

  const handleLongPress = () => {
    console.log('Drag card long pressed');
    setIsLongPressed(true);
  }

  const handlePressOut = () => {
    setIsLongPressed(false);
    setTranslateX(0);
    setTranslateY(0);
  }

  return (<>
    <EditableCardModal
      entryData={entryData}
      visible={editableCardModalVisible}
      modalDismissFn={() => {
        setEditableCardModalVisible(false); // close modal
        fetchSetNotes(); // update all notes if changes made
      }}
      fullScreen={true}
    />
    <PanGestureHandler
      onGestureEvent={onGestureEvent}
    // onHandlerStateChange={onHandlerStateChange}
    >
      <MotiPressable
    onPress={() => {
      if (isInteractable) {
        setEditableCardModalVisible(true);
        onPressFn();
      }
    }}
    onLongPress={() => {
      handleLongPress();
      onLongPressFn();
    }}
    onPressOut={() => {
      handlePressOut();
      onPressOutFn();
    }}
    from={{
      scale: 1,
      borderColor: 'transparent',
      opacity: 1,
      // backgroundColor: 'lightblue',
      translateX: translateX,
      translateY: translateY
      // position: 'relative'
    }}
    animate={{
      scale: isLongPressed ? 0.8 : 1,
      borderColor: isLongPressed ? 'black' : 'transparent',
      opacity: isLongPressed ? 0.98 : 1,
      // backgroundColor: isLongPressed ? '' : 'lightblue',
      translateX: translateX,
      translateY: translateY
      // position: isLongPressed ? 'absolute': 'relative'
    }}
    transition={{
      type: 'spring'
    }}
    style={[styles.card, additionalStyle]}
  >
    <AnimatedCardContent
      entryData={entryData}
      // bottomCardIcons={cardIcons}
      showPlaceholders={false}
      hasImage={hasImage}
      styles={styles}
    />
  </MotiPressable>
    </PanGestureHandler>
  </>
  );
}

export default DraggableCardOld;

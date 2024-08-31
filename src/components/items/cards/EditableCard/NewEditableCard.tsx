import { StyleSheet, Keyboard, KeyboardEvent, Platform } from 'react-native';
import React, { useState, useEffect } from 'react';

// components
import { Card } from 'react-native-paper'
import ShareIconButton from '../../../buttons/common_icon_buttons/ShareIconButton';

// import AddIconButton from '../../../buttons/common_icon_buttons/AddIconButton';
import AddCollectionIconButton from '@/src/components/buttons/common_icon_buttons/AddCollectionIconButton';
// import FavoriteIconButton from '../../../buttons/common_icon_buttons/FavoriteIconButton';

// styles
import { Colors } from '@/assets/constants/Colors';
import { cardDimensions, magpieDimensions } from '@/assets/constants/magpieDimensions';

// types
// import { defaultEntryData, entryDataType } from '@/src/types/data';
import AnimatedCardContent from '../AnimatedCardContent';
import CloseIconButton from '@/src/components/buttons/common_icon_buttons/CloseIconButton';

import { addNote } from '@/src/api/notes';

interface NewEditableCardProps {
  mode: 'elevated' | 'outlined' | 'contained',

  isFullscreen: boolean,
  // isSharable: boolean,

  cardColorDict: {
    'background': string,
    'border': string,
    'text'?: string
  },
  cardPaddingHorizontal: number,
  cardPaddingVertical: number,
  onPressFn: () => void,
  // onLongPressFn: () => void,
  closeCardFn: () => void,
}


// new note, editable card, data from context
const NewEditableCard = (
  {
    mode = 'outlined',
    isFullscreen = true,
    // isSharable = true,
    cardColorDict = Colors.lightCard,
    cardPaddingHorizontal = 10,
    cardPaddingVertical = 10,
    onPressFn = () => { },
    // onLongPressFn = () => { },
    closeCardFn = () => { }
  }: Partial<NewEditableCardProps>
) => {


  const [title, setTitle] = useState<string>('');
  const [subtitle, setSubtitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [keyboardOffset, setKeyboardOffset] = useState(0)

  const styles = StyleSheet.create({
    card: {
      backgroundColor: cardColorDict.background,
      borderColor: cardColorDict.border,
      // minWidth: 260,
      width: isFullscreen ? magpieDimensions.vw : cardDimensions.width * 1.5,
      height: isFullscreen ? magpieDimensions.vh - keyboardOffset : cardDimensions.height * 1.5,
      // borderRadius: isFullscreen ? cardDimensions.borderRadius : 0
      borderRadius: cardDimensions.borderRadius * 2,
      borderTopLeftRadius: 0,
      borderBottomRightRadius: 0,
    },
    cardTitle: {
      color: cardColorDict.text
    },
    cardContent: {
      color: cardColorDict.text,
      paddingHorizontal: cardPaddingHorizontal,
      paddingVertical: cardPaddingVertical,
      height: '100%'
    },
    cardLastContent: {
      paddingVertical: 0
    }
  })


  // adjust modal height for keyboard
  useEffect(() => {
    function onKeyboardChange(e: KeyboardEvent) {
      // console.log('keyboard event', e);
      if (e.endCoordinates.screenY <= magpieDimensions.vh)
        // if (e.endCoordinates.screenY <= e.startCoordinates.screenY)
        // setBottom(0)
        setKeyboardOffset(e.endCoordinates.height)
      else setKeyboardOffset(0)
    }

    if (Platform.OS === "ios") {
      const subscription = Keyboard.addListener("keyboardWillChangeFrame", onKeyboardChange)
      return () => subscription.remove()
    }

    const subscriptions = [
      Keyboard.addListener("keyboardDidHide", onKeyboardChange),
      Keyboard.addListener("keyboardDidShow", onKeyboardChange),
    ]
    return () => subscriptions.forEach((subscription) => subscription.remove())
  }, [])

  const getNoteLength = () => {
    return title.length + subtitle.length + description.length;
  }

  const handleChangeTitle = (updatedText: string) => {
    // console.log('new title', updatedText);
    setTitle(updatedText);
    // setNewNoteContent({ ...newNoteContent, title: updatedText });
  };
  const handleChangeSubtitle = (updatedText: string) => {
    setSubtitle(updatedText);
    // setNewNoteContent({ ...newNoteContent, subtitle: updatedText });
  };
  const handleChangeDescription = (updatedText: string) => {
    setDescription(updatedText);
    // setNewNoteContent({ ...newNoteContent, description: updatedText, });
  };

  const closeNewCardFn = async () => {
    // add new note to BE if there is content
    if (getNoteLength() > 0) {
      const newNoteContent = {
        title: title,
        subtitle: subtitle,
        description: description
      }
      await addNote(newNoteContent);
    }
    await closeCardFn(); // visually close new note
  }

  const topRightCardIcons = [
    <CloseIconButton contentSize={30} onPressFn={closeNewCardFn} />,
  ];
  const bottomCardIcons = [
    // <FavoriteIconButton contentSize={20} />,
    <AddCollectionIconButton contentSize={20} onPressFn={() => { console.log('pressed add to collection btn') }} />,
    <ShareIconButton contentSize={20} onPressFn={() => { console.log('pressed share btn') }} />
  ];


  return (
    <Card
      mode={mode}
      onPress={onPressFn}
      // onLongPress={onLongPressFn}
      style={styles.card}
    >
      <AnimatedCardContent
        topRightCardIcons={topRightCardIcons}
        bottomCardIcons={bottomCardIcons}
        // styles={styles}
        title={title}
        subtitle={subtitle}
        description={description}
        titleChangeFn={handleChangeTitle}
        subtitleChangeFn={handleChangeSubtitle}
        descriptionChangeFn={handleChangeDescription}
      />
    </Card >
  )
}

export default NewEditableCard

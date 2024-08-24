import { StyleSheet } from 'react-native';
import React, { useState } from 'react';

// components
import { Card } from 'react-native-paper'
import ShareIconButton from '../../../buttons/common_icon_buttons/ShareIconButton';

import AddIconButton from '../../../buttons/common_icon_buttons/AddIconButton';
import FavoriteIconButton from '../../../buttons/common_icon_buttons/FavoriteIconButton';

// styles
import { Colors } from '@/assets/constants/Colors';
import { cardDimensions, magpieDimensions } from '@/assets/constants/magpieDimensions';

// types
// import { defaultEntryData, entryDataType } from '@/src/types/data';
import CardContent from '../CardContent';
import CloseIconButton from '@/src/components/buttons/common_icon_buttons/CloseIconButton';

import { addNote, updateNoteByID } from '@/src/api/notes';

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

  const styles = StyleSheet.create({
    card: {
      backgroundColor: cardColorDict.background,
      borderColor: cardColorDict.border,
      // minWidth: 260,
      width: isFullscreen ? magpieDimensions.vw : cardDimensions.width * 1.5,
      height: isFullscreen ? magpieDimensions.vh : cardDimensions.height * 1.5,
      borderRadius: isFullscreen ? cardDimensions.borderRadius : 0
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

  // initialize new note content as empty
  // const [newNoteEmpty, setNewNoteEmpty] = useState(true);
  const [newNoteContent, setNewNoteContent] = useState({
    user_id: 1, // NEED TO UPDATE WITH REAL ID LATER
    title: '',
    subtitle: '',
    description: '',
  });

  const getNoteLength = () => {
    return newNoteContent.title.length + newNoteContent.subtitle.length + newNoteContent.description.length;
  }

  const handleChangeTitle = (updatedText: string) => {
    setNewNoteContent({ ...newNoteContent, title: updatedText });
  };
  const handleChangeSubtitle = (updatedText: string) => {
    setNewNoteContent({ ...newNoteContent, subtitle: updatedText });
  };
  const handleChangeDescription = (updatedText: string) => {
    setNewNoteContent({ ...newNoteContent, description: updatedText, });
  };

  const closeNewCardFn = async () => {
    // add new note to BE if there is content
    if (getNoteLength() > 0) {
      await addNote(newNoteContent);
    }
    await closeCardFn(); // visually close new note
  }

  const topRightCardIcons = [
    <CloseIconButton contentSize={30} onPressFn={closeNewCardFn} />,
  ];
  const bottomCardIcons = [
    // <FavoriteIconButton contentSize={20} />,
    <AddIconButton contentSize={20} onPressFn={() => { console.log('pressed add btn') }} />,
    <ShareIconButton contentSize={20} />];


  return (
    <Card
      mode={mode}
      // onPress={() => {
      //   onPressFn();
      // }}
      // onLongPress={onLongPressFn}
      style={styles.card}
    >
      <CardContent
        topRightCardIcons={topRightCardIcons}
        bottomCardIcons={bottomCardIcons}
        styles={styles}
        title={newNoteContent.title}
        subtitle={newNoteContent.subtitle}
        description={newNoteContent.description}
        titleChangeFn={handleChangeTitle}
        subtitleChangeFn={handleChangeSubtitle}
        descriptionChangeFn={handleChangeDescription}
      />
    </Card >
  )
}

export default NewEditableCard

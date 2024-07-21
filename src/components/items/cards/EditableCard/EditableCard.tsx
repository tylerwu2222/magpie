import { StyleSheet } from 'react-native';
import React, { useState } from 'react';

// components
import { Card } from 'react-native-paper'
import TextInput from '../../../inputs/textInput/TextInput';
import ShareIconButton from '../../../buttons/common_icon_buttons/ShareIconButton';

import AddIconButton from '../../../buttons/common_icon_buttons/AddIconButton';
import FavoriteIconButton from '../../../buttons/common_icon_buttons/FavoriteIconButton';
// import AppContext from '@/AppContextProvider';

// styles
import { Colors } from '@/assets/constants/Colors';
import { cardDimensions } from '@/assets/constants/magpieDimensions';

// types
import { entryDataType } from '@/src/types/data';
import { updateEntry } from '@/src/scripts/data/updateDummyData';

interface EditableCardProps {
  entryID: number,
  entryData: entryDataType,
  mode: 'elevated' | 'outlined' | 'contained',
  isSharable?: boolean,
  cardColorDict?: {
    'background': string,
    'border': string,
    'text'?: string
  },
  cardPaddingHorizontal?: number,
  cardPaddingVertical?: number,
  onPressFn: () => void,
  onLongPressFn: () => void,
}

const EditableCard = (
  {
    entryID = 0,
    entryData = { title: 'default title' },
    mode = 'outlined',
    isSharable = true,
    cardColorDict = Colors.lightCard,
    cardPaddingHorizontal = 10,
    cardPaddingVertical = 10,
    onPressFn = () => { },
    onLongPressFn = () => { }
  }: Partial<EditableCardProps>
) => {
  /**
   * editable or non-editable card, but cannot be dragged.
   */

  const styles = StyleSheet.create({
    card: {
      backgroundColor: cardColorDict.background,
      borderColor: cardColorDict.border,
      // minWidth: 260,
      width: cardDimensions.width,
      height: cardDimensions.height,
      borderRadius: cardDimensions.borderRadius
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

  const [description, setDescription] = useState(entryData.description);
  const [title, setTitle] = useState(entryData.title);
  const [subtitle, setSubtitle] = useState(entryData.subtitle);

  // update entry desc. by id
  const updateEntryTitle = (updateEntryID: number, title: string) => {
    updateEntry(0, updateEntryID, { title: title });
  }

  const updateEntrySubtitle = (updateEntryID: number, subtitle: string) => {
    updateEntry(0, updateEntryID, { subtitle: subtitle });
  }

  const updateEntryDescription = (updateEntryID: number, desc: string) => {
    updateEntry(0, updateEntryID, { description: desc });
  }

  const handleChangeTitle = (text: string) => {
    // console.log('handling text change', text);
    setTitle(text);
    updateEntryTitle(entryID, text);
  };

  const handleChangeSubtitle = (text: string) => {
    // console.log('handling text change', text);
    setSubtitle(text);
    updateEntrySubtitle(entryID, text);
  };

  const handleChangeText = (text: string) => {
    // console.log('handling text change', text);
    setDescription(text);
    updateEntryDescription(entryID, text);
  };

  return (
    <Card
      mode={mode}
      onPress={() => {
        onPressFn();
      }}
      onLongPress={onLongPressFn}
      style={styles.card}
    >
      <Card.Content style={styles.cardContent}>
        <TextInput
          value={title}
          textInputColor={Colors.darkTextInput}
          isEditable={true}
          paddingHorizontal={8} // match default of Card.Title
          fontSize={28}
          onChangeTextFn={handleChangeTitle}
        />
        <TextInput
          value={subtitle}
          textInputColor={Colors.darkTextInput}
          isEditable={true}
          paddingHorizontal={8} // match default of Card.Title
          fontSize={16}
          onChangeTextFn={handleChangeSubtitle}
        />
        <TextInput
          placeholder='add something...'
          value={description}
          textInputColor={Colors.darkTextInput}
          isEditable={true}
          isMultiline={true}
          paddingHorizontal={8} // match default of Card.Title
          onChangeTextFn={handleChangeText}
        />
      </Card.Content>
      <Card.Content style={[styles.cardContent, styles.cardLastContent]}>
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
      </Card.Content>
      {/* replace local w online */}
      <Card.Actions>
        <FavoriteIconButton />
        <AddIconButton />
        {isSharable ? <ShareIconButton /> : <></>}
      </Card.Actions>
    </Card >
  )
}

export default EditableCard

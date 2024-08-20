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
import { defaultEntryData, entryDataType } from '@/src/types/data';
import CardContent from '../CardContent';
import CloseIconButton from '@/src/components/buttons/common_icon_buttons/CloseIconButton';

import { updateNoteByID } from '@/src/api/notes';

interface EditableCardProps {
  entryData: entryDataType | undefined,
  mode: 'elevated' | 'outlined' | 'contained',

  isFullscreen: boolean,
  isSharable: boolean,
  cardColorDict: {
    'background': string,
    'border': string,
    'text'?: string
  },
  cardPaddingHorizontal: number,
  cardPaddingVertical: number,
  onPressFn: () => void,
  onLongPressFn: () => void,
  closeCardFn: () => void,
}

// editable card, default fullscreen
const EditableCard = (
  {
    entryData = defaultEntryData,
    mode = 'outlined',
    isFullscreen = true,
    isSharable = true,
    cardColorDict = Colors.lightCard,
    cardPaddingHorizontal = 10,
    cardPaddingVertical = 10,
    onPressFn = () => { },
    onLongPressFn = () => { },
    closeCardFn = () => { }
  }: Partial<EditableCardProps>
) => {

  const topRightCardIcons = [
    <CloseIconButton contentSize={30} onPressFn={closeCardFn} />,
  ];
  const bottomCardIcons = [
    // <FavoriteIconButton contentSize={20} />,
    <AddIconButton contentSize={20} onPressFn={() => { console.log('pressed add btn') }} />,
    <ShareIconButton contentSize={20} />];

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

  // split entryData into parts to allow for partial editing
  const [title, setTitle] = useState<string | undefined>(entryData?.title);
  const [subtitle, setSubtitle] = useState<string | undefined>(entryData?.subtitle);
  const [description, setDescription] = useState<string | undefined>(entryData?.description);

  // note content change handlers
  const handleChangeTitle = (updatedText: string) => {
    // update FE state
    setTitle(updatedText);
    // update BE state
    if (entryData?.id) {
      updateNoteByID(entryData.id, 'title', updatedText);
    }
  };

  const handleChangeSubtitle = (updatedText: string) => {
    setSubtitle(updatedText);
    if (entryData?.id) {
      updateNoteByID(entryData.id, 'subtitle', updatedText);
    }
  };

  const handleChangeDescription = (updatedText: string) => {
    setDescription(updatedText);
    if (entryData?.id) {
      updateNoteByID(entryData.id, 'description', updatedText);
    }
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
      <CardContent
        topRightCardIcons={topRightCardIcons}
        bottomCardIcons={bottomCardIcons}
        styles={styles}
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

export default EditableCard

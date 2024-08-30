import { StyleSheet, Keyboard, KeyboardEvent, Platform } from 'react-native';
import React, { useState, useCallback, useEffect } from 'react';

// components
import { Card } from 'react-native-paper'
import ShareIconButton from '../../../buttons/common_icon_buttons/ShareIconButton';
// import AddIconButton from '../../../buttons/common_icon_buttons/AddIconButton';
import AddCollectionIconButton from '@/src/components/buttons/common_icon_buttons/AddCollectionIconButton';
import AnimatedActivityIndicator from '@/src/components/icons/AnimatedActivityIndicator/AnimatedActivityIndicator';
// import FavoriteIconButton from '../../../buttons/common_icon_buttons/FavoriteIconButton';

// styles
import { Colors } from '@/assets/constants/Colors';
import { cardDimensions, defaultButtonSize, magpieDimensions, smallerButtonSize } from '@/assets/constants/magpieDimensions';

// types
import { defaultEntryData, entryDataType } from '@/src/types/data';
import AnimatedCardContent from '../AnimatedCardContent';
import CloseIconButton from '@/src/components/buttons/common_icon_buttons/CloseIconButton';

import { deleteNoteByID, updateNoteByID } from '@/src/api/notes';
import DeleteIconButton from '@/src/components/buttons/common_icon_buttons/DeleteIconButton';
import { useDebounceFunction } from '@/src/scripts/useDebounceFunction';
// import { HomeContext } from '@/app/home';

interface EditableCardProps {
  entryData: entryDataType | undefined,
  mode: 'elevated' | 'outlined' | 'contained',

  isFullscreen: boolean,
  isSharable: boolean,
  // isNewNote: boolean,

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
    entryData,
    mode = 'outlined',
    isFullscreen = true,
    isSharable = true,
    // isNewNote = false,
    cardColorDict = Colors.lightCard,
    cardPaddingHorizontal = 10,
    cardPaddingVertical = 10,
    onPressFn = () => { },
    onLongPressFn = () => { },
    closeCardFn = () => { }
  }: Partial<EditableCardProps>
) => {

  // split entryData into parts to allow for partial editing
  const [title, setTitle] = useState<string | undefined>(entryData?.title);
  const [subtitle, setSubtitle] = useState<string | undefined>(entryData?.subtitle);
  const [description, setDescription] = useState<string | undefined>(entryData?.description);
  const [isSaving, setIsSaving] = useState<boolean>(false);

  const [keyboardOffset, setKeyboardOffset] = useState(0)
  // const debouncedTitle = useDebounce(title, 1000);
  // const debouncedSubtitle = useDebounce(subtitle, 1000);
  // const debouncedDescription = useDebounce(description, 1000);

  const styles = StyleSheet.create({
    card: {
      backgroundColor: cardColorDict.background,
      // backgroundColor: 'red',
      // borderColor: cardColorDict.border,
      // minWidth: 260,
      width: isFullscreen ? magpieDimensions.vw : cardDimensions.width * 1.5,
      height: isFullscreen ? magpieDimensions.vh - keyboardOffset : cardDimensions.height * 1.5,
      borderRadius: isFullscreen ? cardDimensions.borderRadius : 0,
      // position: 'absolute',
      // bottom: bottom
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

  // note content change handlers
  const handleChangeContent = useCallback((
    columnName: string,
    updatedContent: string,
    // debouncedContent: string | undefined
  ) => {
    // console.log('editing...')
    if (entryData?.id) {
      // console.log('saving.')
      updateNoteByID(entryData.id, columnName, updatedContent);
      setIsSaving(false);
    }
    // }
  }, []);

  const debouncedChangeContent = useDebounceFunction(handleChangeContent, 1000);

  const handleChangeTitle = (updatedText: string) => {
    // update FE state
    setTitle(updatedText);
    setIsSaving(true);
    debouncedChangeContent('title', updatedText);
  };
  const handleChangeSubtitle = (updatedText: string) => {
    setSubtitle(updatedText);
    setIsSaving(true);
    debouncedChangeContent('subtitle', updatedText);
  };
  const handleChangeDescription = (updatedText: string) => {
    setDescription(updatedText);
    setIsSaving(true);
    debouncedChangeContent('description', updatedText);
  };

  const handleDeleteNote = async () => {
    await deleteNoteByID(entryData?.id); // delete note from BE
    await closeCardFn(); // close card
  };

  const topRightCardIcons = [
    <CloseIconButton contentSize={30} onPressFn={closeCardFn} />,
  ];

  const bottomCardIcons = [
    // <FavoriteIconButton contentSize={20} />,
    <DeleteIconButton contentSize={20} onPressFn={handleDeleteNote} />,
    <AddCollectionIconButton contentSize={20} onPressFn={() => { console.log('pressed add to collection btn') }} />,
    <ShareIconButton contentSize={20} onPressFn={() => { console.log('pressed share btn') }} />
  ];

  return (
    <Card
      mode={mode}
      onPress={onPressFn}
      onLongPress={onLongPressFn}
      style={styles.card}
    >
      {isSaving && <AnimatedActivityIndicator />}
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

export default EditableCard

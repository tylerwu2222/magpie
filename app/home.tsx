import { View, Text, StyleSheet } from 'react-native'
import React, { useState, useRef, useEffect, createContext, Dispatch, SetStateAction } from 'react'

import NewEditableCardModal from '@/src/components/modals/NewEditableCardModal/NewEditableCardModal';
import BottomNavbar from '@/src/components/navbars/BottomNavbar/BottomNavbar';
import ItemView from '@/src/components/composite_components/views/ItemView/ItemView';
import HomeTopNavbar from '@/src/components/navbars/HomeTopNavbar/HomeTopNavbar';
import { defaultEntryData, entryDataType, setEntryDataType, newEntryDataType, setNewEntryDataType } from '@/src/types/data';
// import EditableCardModal from '@/src/components/modals/EditableCardModal/EditableCardModal';

import { fetchNotes, addNote } from '@/src/api/notes';
import DragCornerButtons from '@/src/components/composite_components/buttons/DragCornerButtons/DragCornerButtons';
import { HomeCornerButtons } from '@/src/components/modals/HomeCornerButtons/HomeCornerButtons';
import { largerButtonSize } from '@/assets/constants/magpieDimensions';



interface HomeContextProps {
  homeItemViewType: string,
  setHomeItemViewType: Dispatch<SetStateAction<string>>,
  displayedNotes: Array<entryDataType>,
  setDisplayedNotes: setEntryDataType,
  newNoteVisible: boolean,
  setNewNoteVisible: Dispatch<SetStateAction<boolean>>,
  fetchSetNotes: () => void,
  homeSearchQuery: string,
  setHomeSearchQuery: Dispatch<SetStateAction<string>>,
  setCornerButtonsVisible: Dispatch<SetStateAction<boolean>>,
  isDraggableHoveringDelete: boolean,
  setIsDraggableHoveringDelete: Dispatch<SetStateAction<boolean>>,
}

export const HomeContext = createContext<HomeContextProps>({} as HomeContextProps);

export default function Home() {

  const styles = StyleSheet.create({
    homeView: {
      height: '100%',
      overflow: 'hidden'
    }
  })

  // const itemViewRef = useRef<View>(null)

  // state variables that are available to all home children
  // view
  const [homeItemViewType, setHomeItemViewType] = useState<string>('grid');

  // notes
  const [displayedNotes, setDisplayedNotes] = useState<Array<entryDataType>>([]);
  const [allNotes, setAllNotes] = useState<Array<entryDataType>>([]);
  const [newNoteVisible, setNewNoteVisible] = useState(false);

  // filtering
  const [homeSearchQuery, setHomeSearchQuery] = useState<string>('');
  const [cornerButtonsVisible, setCornerButtonsVisible] = useState(false);

  // drag
  const [isDraggableHoveringDelete, setIsDraggableHoveringDelete] = useState(false);

  // UPDATE
  const fetchSetNotes = async () => {
    // console.log('FSN');
    const data = await fetchNotes();
    console.log('fetched data', data)
    setAllNotes(data);
    setDisplayedNotes(data);
  };

  // fetch and set notes on component mount
  useEffect(() => {
    fetchSetNotes();
  }, []);

  // FILTER
  // function for checking if notes include query in any text
  const checkNotesForQuery = (query: string) => {
    const filteredNotes = allNotes.filter(n => {
      const all_text = Object.values(n).join(' ');
      return all_text.includes(query);
    });
    return filteredNotes;
  }

  // when search query changes, update displayed notes
  useEffect(() => {
    setDisplayedNotes(checkNotesForQuery(homeSearchQuery));
  }, [homeSearchQuery]);


  // CREATE
  const handleNewNoteClose = async () => {
    console.log('setting new card visibility to false');
    // update displayed notes
    await fetchSetNotes();
    // hide card
    setNewNoteVisible(false);
    // scroll cards to top using ref

  };

  return (
    <HomeContext.Provider
      value={{
        homeItemViewType,
        setHomeItemViewType,
        displayedNotes,
        setDisplayedNotes,
        fetchSetNotes,
        newNoteVisible,
        setNewNoteVisible,
        homeSearchQuery,
        setHomeSearchQuery,
        setCornerButtonsVisible,
        isDraggableHoveringDelete,
        setIsDraggableHoveringDelete
      }}>
      {cornerButtonsVisible && <DragCornerButtons buttons={HomeCornerButtons} buttonSize={largerButtonSize} />}
      <View style={styles.homeView}>
        <NewEditableCardModal
          visible={newNoteVisible}
          modalDismissFn={handleNewNoteClose}
          fullScreen={true}
        />
        {/* search bar */}
        <HomeTopNavbar />
        {/* item view */}
        {/* pass in view type and setter here */}
        <ItemView />
        {/* bottom navbar */}
        <BottomNavbar />
      </View>

    </HomeContext.Provider>
  )
}
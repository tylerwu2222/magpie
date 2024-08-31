import { View, Text, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState, useRef, useEffect, createContext, Dispatch, SetStateAction } from 'react'

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { PaperProvider } from "react-native-paper";
import { EventProvider } from 'react-native-outside-press';

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
// import { Link } from 'expo-router';

import { Session } from "@supabase/supabase-js";
import { useUser } from '@/src/providers/UserProvider/UserProvider';
import SideDrawerMenu from '@/src/components/menus/SideDrawerMenu/SideDrawerMenu';
import { AnimatePresence } from 'moti';


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
  sideMenuVisible: boolean,
  setSideMenuVisible: Dispatch<SetStateAction<boolean>>,
}

export const HomeContext = createContext<HomeContextProps>({} as HomeContextProps);

export default function Home({ session }: { session: Session }) {

  const styles = StyleSheet.create({
    homeView: {
      height: '100%',
      overflow: 'hidden'
    }
  })

  // console.log('seesion in home', session);
  // console.log('seesion user in home', session.user);


  // const itemViewRef = useRef<View>(null)

  // state variables that are available to all home children

  // view
  const [homeItemViewType, setHomeItemViewType] = useState<string>('grid');
  const [sideMenuVisible, setSideMenuVisible] = useState<boolean>(false);

  // notes
  const [displayedNotes, setDisplayedNotes] = useState<Array<entryDataType>>([]);
  const [allNotes, setAllNotes] = useState<Array<entryDataType>>([]);
  const [newNoteVisible, setNewNoteVisible] = useState(false);

  // filtering
  const [homeSearchQuery, setHomeSearchQuery] = useState<string>('');
  const [cornerButtonsVisible, setCornerButtonsVisible] = useState(false);

  // drag
  const [isDraggableHoveringDelete, setIsDraggableHoveringDelete] = useState(false);

  const { userID } = useUser();

  // UPDATE
  const fetchSetNotes = async () => {
    // console.log('FSN');
    const data = await fetchNotes();
    // console.log('fetched data', data)
    setAllNotes(data);
    setDisplayedNotes(data);
  };

  // fetch and set notes on component mount/user change
  useEffect(() => {
    // console.log('user id changed', userID);
    // if (userID !== '') {
    fetchSetNotes();
    // }
  }, [userID]);

  // FILTER
  // function for checking if notes include query in any text
  const checkNotesForQuery = (query: string) => {
    const filteredNotes = allNotes.filter(n => {
      const all_text = Object.values(n).join(' ').toLowerCase();
      return all_text.includes(query.toLowerCase());
    });
    return filteredNotes;
  }

  // when search query changes, update displayed notes
  useEffect(() => {
    setDisplayedNotes(checkNotesForQuery(homeSearchQuery));
  }, [homeSearchQuery]);

  // CREATE
  const handleNewNoteClose = async () => {
    // console.log('setting new card visibility to false');
    // update displayed notes
    await fetchSetNotes();
    // hide card
    setNewNoteVisible(false);
    // scroll cards to top using ref

  };

  return (
    <PaperProvider>
      <EventProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
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
              setIsDraggableHoveringDelete,
              sideMenuVisible,
              setSideMenuVisible
            }}>
            <SafeAreaView>
              {cornerButtonsVisible && <DragCornerButtons buttons={HomeCornerButtons} buttonSize={largerButtonSize} />}
              <View style={styles.homeView}>
                <AnimatePresence>{sideMenuVisible && <SideDrawerMenu />}</AnimatePresence>
                <NewEditableCardModal
                  visible={newNoteVisible}
                  modalDismissFn={handleNewNoteClose}
                  fullScreen={true}
                />
                {/* search bar */}
                <HomeTopNavbar />
                {/* <Link href="/login"></Link> */}
                {/* item view */}
                {/* pass in view type and setter here */}
                <ItemView />
                {/* bottom navbar */}
                <BottomNavbar />
              </View>
            </SafeAreaView>
          </HomeContext.Provider>
        </GestureHandlerRootView>
      </EventProvider>
    </PaperProvider>
  )
}
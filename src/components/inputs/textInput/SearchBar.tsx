import { StyleSheet, Pressable } from 'react-native'
import React, { useState, Dispatch, SetStateAction } from 'react'

import { Searchbar } from 'react-native-paper'

import { Colors } from '@/assets/constants/Colors'
import { magpieDimensions } from '@/assets/constants/magpieDimensions';
// import OutsidePressHandler from 'react-native-outside-press';

interface SearchBarProps {
    leftIcon: string,
    placeholder: string;
    defaultSearchQuery: string;
    searchBarColorDict: {
        'text': string,
        'placeholder': string,
        'background': string
    },
    searchQuery: string,
    setSearchQuery: Dispatch<SetStateAction<string>>,
    onChangeTextFn: () => void,
    onIconPressFn: () => void,
    isAutoCapitalized: "none" | "sentences" | "words" | "characters" | undefined,
    expandsFull: boolean
}

const SearchBar = (
    {
        leftIcon = 'magnify',
        placeholder = 'Search notes',
        defaultSearchQuery = '',
        // searchBarColorDict = Colors.lightTheme.textInput,
        searchBarColorDict = Colors.darkTheme.textInput,
        searchQuery = '',
        setSearchQuery = () => { },
        onChangeTextFn = () => { },
        onIconPressFn = () => { },
        isAutoCapitalized = 'none',
        expandsFull = true
    }: Partial<SearchBarProps>
) => {

    const [searchbarWidth, setSearchbarWidth] = useState<number>(0.9);


    const styles = StyleSheet.create({
        searchBar: {
            backgroundColor: searchBarColorDict.background,
            height: 40,
            width: magpieDimensions.vw * searchbarWidth,
            // fontSize: fontSize,
            justifyContent: 'center',
            alignItems: 'center',
        },
        searchBarInput: {
            // paddingVertical: 0,
            minHeight: 0,
            height: 40,
            fontSize: 14
        }
    })

    // change searchbar width on press?
    // const handlePress = () => {
    //     setSearchbarWidth(0.9)
    // };
    // const handleOutsidePress = () => {
    //     setSearchbarWidth(0.6)
    // };

    // const [searchQuery, setSearchQuery] = React.useState('');

    return (
        // <OutsidePressHandler
        // onOutsidePress={handleOutsidePress}>
        //     <Pressable onPress={handlePress}>
        <Searchbar
            icon={leftIcon}
            placeholder={placeholder}
            value={searchQuery}
            autoCapitalize={isAutoCapitalized}
            onChangeText={(e) => {
                setSearchQuery(e);
                onChangeTextFn();
            }}
            onIconPress={onIconPressFn}
            style={styles.searchBar}
            inputStyle={styles.searchBarInput}
            theme={{
                colors: {
                    onSurfaceVariant: searchBarColorDict.text,
                    onSurface: searchBarColorDict.placeholder
                }
            }}
        />
        //     </Pressable>
        // </OutsidePressHandler>
    )
}

export default SearchBar


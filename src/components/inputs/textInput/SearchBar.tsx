import { StyleSheet, Text } from 'react-native'
import React, { useState } from 'react'

import { Searchbar } from 'react-native-paper'

import { Colors } from '@/assets/constants/Colors'

interface SearchBarProps {
    placeholder: string;
    defaultSearchQuery: string;
    searchBarColor: {
        'text': string,
        'placeholder': string,
        'background': string
    };
    onChangeTextFn: () => void;
}

const SearchBar = (
    {
        placeholder = 'Search',
        defaultSearchQuery = '',
        searchBarColor = Colors.lightTextInput,
        onChangeTextFn = () => { }

    }: Partial<SearchBarProps>
) => {

    const styles = StyleSheet.create({
        searchBar: {
            backgroundColor: searchBarColor.background,
            color: searchBarColor.text
            // fontSize: fontSize,
            // justifyContent: "center"
        }
    })

    const [searchQuery, setSearchQuery] = React.useState('');

    return (
        <Searchbar
            placeholder={placeholder}
            value={searchQuery}
            onChangeText={(e) => {
                setSearchQuery(e);
                onChangeTextFn();
            }}
            style={styles.searchBar}
        />
    )
}

export default SearchBar


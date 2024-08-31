import { StyleSheet, Text } from 'react-native'
import React from 'react'
import { Appbar } from 'react-native-paper';
import { Link } from 'expo-router';

interface BackActionNavbarProps {
    navbarTitle: string,
    returnRoute: string
}
const BackActionNavbar = ({
    navbarTitle = 'title',
    returnRoute = '/home'
}: Partial<BackActionNavbarProps>) => {
    return (
        <Appbar.Header>
            <Link href={returnRoute} asChild>
                <Appbar.BackAction onPress={() => { }} />
            </Link>
            <Appbar.Content title={<Text>{navbarTitle}</Text>} />
            {/* <Appbar.Content title="Title" /> */}
            {/* <Appbar.Action icon="calendar" onPress={() => { }} /> */}
        </Appbar.Header>
    )
}

export default BackActionNavbar

const styles = StyleSheet.create({})
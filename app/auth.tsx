import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Auth from '@/src/components/auth/Auth'
import { signOutUser } from '@/src/providers/UserProvider/UserProvider';

const auth = () => {
    // sign out user on navigate to page
    // useEffect(() => {
    //     signOutUser();
    // }, []);

    return (
        <Auth />
    )
}

export default auth

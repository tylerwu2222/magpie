import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Link } from 'expo-router';

import ProfileButton from '../../buttons/ProfileButton';

// import { Typography } from '@/constants/Typography';
import { Colors } from '@/assets/constants/Colors';
import { magpieDimensions } from '@/assets/constants/magpieDimensions';
// import { magpieDimensions } from '@/assets/constants/magpieDimensions';

const Navbar = () => {
    const [username, setUsername] = useState('eurasian-magpie');
    return (
        <View style={styles.navbarView}>
            {/* <Text style={[Typography.body, styles.navbarText]}>{username}</Text> */}
            <Link href='/profile'>
                <ProfileButton />
            </Link>
        </View>
    )
}

export default Navbar;

const styles = StyleSheet.create({
    navbarView: {
        width: magpieDimensions.vw,
        // height:
        paddingHorizontal: '5%',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
        justifyContent: 'flex-end',
        paddingVertical: 15
    },
    navbarText: {
        color: Colors.darkButton.text,
        fontStyle: 'italic'
    }
})
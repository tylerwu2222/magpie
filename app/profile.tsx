import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BackActionNavbar from '@/src/components/navbars/BackActionNavbar/BackActionNavbar'
import { magpieDimensions } from '@/assets/constants/magpieDimensions'
import { Colors } from '@/assets/constants/Colors'
import { Image } from 'moti'
import ElevatedView from '@/src/components/views/ElevatedView/ElevatedView'

const profile = () => {


    return (
        <>
            <BackActionNavbar navbarTitle='Profile' />
            <ElevatedView>
                {/* <Text>Profile Avatar</Text> */}
                <Image
                    source={require('../assets/images/templateImages/birds.png')}
                    style={styles.profileImage}
                ></Image>
                <Text>Username: </Text>
                <Text>Email: </Text>
                <Text>Export notes: </Text>
            </ElevatedView>
        </>
    )
}

export default profile

const styles = StyleSheet.create({
    profileImage: {
        width: 100,
        height: 100,
        borderColor: Colors.lightTheme.text,
        borderRadius: 100
    }
})